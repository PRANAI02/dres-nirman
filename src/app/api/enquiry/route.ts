import { NextResponse } from "next/server";

/**
 * Contact form endpoint. Posts the enquiry to the office mailbox through
 * Resend's REST API — no SDK, just a fetch, so there is nothing to keep
 * updated.
 *
 * Environment variables (set in Vercel → Settings → Environment Variables):
 *   RESEND_API_KEY   the key from resend.com
 *   ENQUIRY_TO       where enquiries land, e.g. info@<domain>
 *   ENQUIRY_FROM     the verified sender, e.g. "DRES NIRMAN <website@<domain>>"
 *
 * Without them the route answers 503 and the form says so, rather than
 * pretending an enquiry was sent.
 */

const LIMITS = {
  name: 120,
  org: 160,
  email: 200,
  phone: 40,
  location: 160,
  type: 80,
  requirement: 4000,
} as const;

type Field = keyof typeof LIMITS;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO;
  const from = process.env.ENQUIRY_FROM;

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { error: "The enquiry form is not connected to a mailbox yet." },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  // Bots fill every field they find; a real visitor never sees this one.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const values = Object.fromEntries(
    (Object.keys(LIMITS) as Field[]).map((k) => [k, clean(body[k], LIMITS[k])]),
  ) as Record<Field, string>;

  if (!values.name || !values.email) {
    return NextResponse.json(
      { error: "Please give us a name and an email address." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return NextResponse.json(
      { error: "That email address does not look right." },
      { status: 400 },
    );
  }

  const rows: [string, string][] = [
    ["Name", values.name],
    ["Organisation", values.org],
    ["Email", values.email],
    ["Phone", values.phone],
    ["Location", values.location],
    ["Project type", values.type],
  ];

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;font-size:14px;color:#111">
      <p style="margin:0 0 18px;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#666">
        Website enquiry
      </p>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse">
        ${rows
          .filter(([, v]) => v)
          .map(
            ([label, value]) =>
              `<tr>
                 <td style="padding:4px 20px 4px 0;color:#666;vertical-align:top">${label}</td>
                 <td style="padding:4px 0">${escapeHtml(value)}</td>
               </tr>`,
          )
          .join("")}
      </table>
      ${
        values.requirement
          ? `<p style="margin:22px 0 6px;color:#666">Requirement</p>
             <p style="margin:0;white-space:pre-wrap;line-height:1.6">${escapeHtml(
               values.requirement,
             )}</p>`
          : ""
      }
    </div>
  `;

  const text = [
    ...rows.filter(([, v]) => v).map(([label, value]) => `${label}: ${value}`),
    values.requirement ? `\nRequirement:\n${values.requirement}` : "",
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: values.email,
      subject: `Website enquiry — ${values.name}${values.org ? `, ${values.org}` : ""}`,
      html,
      text,
    }),
  });

  if (!response.ok) {
    console.error("Resend rejected the enquiry", response.status, await response.text());
    return NextResponse.json(
      { error: "We could not send that just now. Please call or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
