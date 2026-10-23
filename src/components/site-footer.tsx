import Image from "next/image";
import Link from "next/link";
import { contact, disciplines, nav } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--ink-2)]">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1440px] px-6 pb-10 pt-20 lg:px-10 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.8fr_1.1fr_1fr]">
          <div>
            <Image
              src="/logo-full-v2.png"
              alt="DRES NIRMAN Pvt. Ltd."
              width={1005}
              height={487}
              className="h-auto w-[260px] max-w-full"
            />
            <p className="mt-7 max-w-sm text-sm leading-relaxed text-muted">
              A multidisciplinary engineering and industrial solutions company,
              combining construction experience, engineering expertise, modern
              technology and practical execution.
            </p>
            <p className="label mt-8 text-accent-bright">
              precision · strength · innovation
            </p>
          </div>

          <div>
            <h3 className="label text-muted-2">navigate</h3>
            <ul className="mt-6 space-y-3">
              {[{ href: "/", label: "home" }, ...nav].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="nav-link text-steel transition-colors hover:text-accent-bright"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label text-muted-2">expertise</h3>
            <ul className="mt-6 space-y-3">
              {disciplines.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/expertise/${d.slug}`}
                    className="text-[0.82rem] leading-snug text-steel transition-colors hover:text-accent-bright"
                  >
                    {d.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label text-muted-2">contact</h3>
            <ul className="mt-6 space-y-4 text-sm text-steel">
              <li className="font-mono text-[0.7rem] tracking-[0.14em] text-white">
                {contact.company}
              </li>
              {contact.addresses.map((a) => (
                <li key={a.label} className="max-w-xs leading-relaxed text-muted">
                  {a.label}: {a.lines}
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="transition-colors hover:text-accent-bright"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="transition-colors hover:text-accent-bright"
                >
                  {contact.phone}
                </a>
              </li>
              {contact.linkedin !== "#" && (
                <li>
                  <a
                    href={contact.linkedin}
                    className="label text-muted transition-colors hover:text-accent-bright"
                  >
                    LinkedIn ↗
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 text-[0.7rem] text-muted-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} DRES NIRMAN Pvt. Ltd. All rights reserved.</p>
          <p className="label text-muted-2">
            engineering a stronger, smarter, sustainable tomorrow
          </p>
        </div>
      </div>
    </footer>
  );
}
