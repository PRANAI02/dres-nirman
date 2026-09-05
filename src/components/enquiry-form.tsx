"use client";

import { useState } from "react";

const field =
  "w-full border border-[var(--line)] bg-[rgba(255,255,255,0.02)] px-4 py-3.5 text-[0.92rem] text-white outline-none transition-colors placeholder:text-muted-2 focus:border-accent-bright focus:bg-[rgba(31,111,224,0.06)]";

const projectTypes = [
  "Civil Engineering & Execution",
  "PEB & Steel Structures",
  "Structural Engineering & Design",
  "Industrial / Infrastructure Project",
  "Surveying, Mapping & Geospatial",
  "Retrofitting & Strengthening",
  "Other / Not sure yet",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="name" className="label text-muted-2">
          Name
        </label>
        <input id="name" name="name" required className={`${field} mt-3`} placeholder="Full name" />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="org" className="label text-muted-2">
          Organisation
        </label>
        <input id="org" name="org" className={`${field} mt-3`} placeholder="Company name" />
      </div>
      <div>
        <label htmlFor="email" className="label text-muted-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={`${field} mt-3`}
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="phone" className="label text-muted-2">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className={`${field} mt-3`}
          placeholder="+91"
        />
      </div>
      <div>
        <label htmlFor="location" className="label text-muted-2">
          Location
        </label>
        <input
          id="location"
          name="location"
          className={`${field} mt-3`}
          placeholder="City / site location"
        />
      </div>
      <div>
        <label htmlFor="type" className="label text-muted-2">
          Project Type
        </label>
        <select id="type" name="type" className={`${field} mt-3 appearance-none`} defaultValue="">
          <option value="" disabled>
            Select a discipline
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t} className="bg-[#10161f]">
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="requirement" className="label text-muted-2">
          Requirement
        </label>
        <textarea
          id="requirement"
          name="requirement"
          rows={5}
          className={`${field} mt-3 resize-none`}
          placeholder="Tell us about the project, scope and timeline."
        />
      </div>

      {/* Bots fill every field they can find; nobody else ever sees this one. */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="sm:col-span-2 flex flex-wrap items-center gap-5">
        <button
          type="submit"
          disabled={status === "sending"}
          className="label inline-flex items-center gap-3 bg-white px-7 py-4 text-[#06080c] transition-colors hover:bg-accent-bright hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending" : "Send Enquiry"} <span aria-hidden>→</span>
        </button>
        <p
          aria-live="polite"
          className={`font-mono text-[0.65rem] leading-relaxed tracking-[0.12em] ${
            status === "sent"
              ? "text-accent-bright"
              : status === "error"
                ? "text-white"
                : "text-muted-2"
          }`}
        >
          {status === "sent"
            ? "THANK YOU. WE WILL COME BACK TO YOU SHORTLY."
            : status === "error"
              ? message.toUpperCase()
              : ""}
        </p>
      </div>
    </form>
  );
}
