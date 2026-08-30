"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Wordmark from "./wordmark";
import { nav } from "@/lib/content";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [past, setPast] = useState(false);
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);
  const pathname = usePathname();

  // On the home page the header stays out of the way until the visitor has
  // scrolled past the full-height hero image.
  const overlayHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setPast(window.scrollY > window.innerHeight - 90);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setSubOpen(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const hidden = overlayHero && !past && !open;

  return (
    <>
      {/* the header tucks away over the hero, so mobile keeps a way in */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className={`fixed right-6 top-6 z-50 grid h-11 w-11 place-items-center border border-[var(--line-strong)] bg-[rgba(6,8,12,0.5)] backdrop-blur-md transition-opacity duration-500 lg:hidden ${
          hidden ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <span className="relative block h-3 w-5">
          <span className="absolute left-0 top-0 h-px w-5 bg-white" />
          <span className="absolute left-0 top-3 h-px w-5 bg-white" />
        </span>
      </button>

    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,transform,opacity] duration-500 ${
        hidden ? "pointer-events-none -translate-y-full opacity-0" : "translate-y-0 opacity-100"
      } ${
        scrolled || open
          ? "border-b border-[var(--line)] bg-[rgba(6,8,12,0.86)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      {!scrolled && !open && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[130px] bg-gradient-to-b from-[rgba(6,8,12,0.75)] to-transparent"
        />
      )}
      <div className="relative mx-auto flex h-[82px] max-w-[1440px] items-center justify-between px-6 lg:px-10">
        <Wordmark />

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7 2xl:gap-9">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            if (item.children) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setSubOpen(item.href)}
                  onMouseLeave={() => setSubOpen(null)}
                >
                  <Link
                    href={item.href}
                    className={`nav-link relative flex items-center gap-2 py-6 transition-colors ${
                      active ? "text-white" : "text-muted hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={`-ml-1 text-[0.6rem] transition-transform duration-300 ${
                        subOpen === item.href ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                    <span
                      className={`absolute bottom-4 left-0 h-px bg-accent-bright transition-all duration-500 ${
                        active ? "w-[calc(100%-1rem)]" : "w-0"
                      }`}
                    />
                  </Link>

                  <div
                    className={`absolute left-1/2 top-full w-[320px] -translate-x-1/2 border border-[var(--line)] bg-[rgba(8,11,16,0.97)] backdrop-blur-xl transition-all duration-300 ${
                      subOpen === item.href
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    }`}
                  >
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className={`block border-b border-[var(--line)] px-6 py-3.5 text-[0.82rem] leading-snug transition-colors last:border-b-0 hover:bg-[rgba(31,111,224,0.12)] hover:text-white ${
                          pathname === c.href ? "text-accent-bright" : "text-steel"
                        }`}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link relative py-6 transition-colors ${
                  active ? "text-white" : "text-muted hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-4 left-0 h-px bg-accent-bright transition-all duration-500 ${
                    active ? "w-[calc(100%-0.3em)]" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="label hidden items-center gap-2 whitespace-nowrap border border-[var(--line-strong)] px-4 py-3 text-white transition-colors hover:border-accent-bright hover:bg-[rgba(31,111,224,0.12)] xl:inline-flex"
          >
            start a project
            <span aria-hidden>→</span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center border border-[var(--line-strong)] lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-px w-5 bg-white transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-5 bg-white transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* mobile */}
      <div
        className={`overflow-y-auto border-t border-[var(--line)] bg-[rgba(6,8,12,0.98)] transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[80svh]" : "max-h-0 border-t-transparent"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {nav.map((item) => (
            <div key={item.href} className="border-b border-[var(--line)] last:border-b-0">
              <Link
                href={item.href}
                className="display block py-4 text-2xl lowercase tracking-[0.12em] text-white"
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="-mt-1 pb-4 pl-4">
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link
                        href={c.href}
                        className="block py-2 text-[0.85rem] leading-snug text-muted"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
    </>
  );
}
