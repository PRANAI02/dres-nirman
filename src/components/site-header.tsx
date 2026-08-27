"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Wordmark from "./wordmark";
import { nav } from "@/lib/content";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled || open
          ? "border-b border-[var(--line)] bg-[rgba(6,8,12,0.82)] backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between px-6 lg:px-10">
        <Wordmark />

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`label relative py-2 transition-colors ${
                  active ? "text-white" : "text-muted hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-accent-bright transition-all duration-500 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="label hidden items-center gap-2 border border-[var(--line-strong)] px-5 py-3 text-white transition-colors hover:border-accent-bright hover:bg-[rgba(31,111,224,0.12)] sm:inline-flex"
          >
            Start a Project
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

      <div
        className={`overflow-hidden border-t border-[var(--line)] bg-[rgba(6,8,12,0.98)] transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[420px]" : "max-h-0 border-t-transparent"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="display border-b border-[var(--line)] py-4 text-2xl text-white last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
