import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build with us — DRES NIRMAN is building a multidisciplinary organisation for the next generation of engineering and construction.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        index="09"
        label="Careers"
        title="Build With Us."
        lede="We are building a multidisciplinary organisation for the next generation of engineering and construction."
        image="/images/warehouse-modern.jpg"
        alt="Interior of a modern industrial building"
      />

      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <Reveal>
              <p className="label text-accent-bright">Opportunities</p>
            </Reveal>
            <Reveal delay={80}>
              <div className="panel mt-8 p-10 lg:p-12">
                <p className="display text-[clamp(1.6rem,3vw,2.2rem)] text-white">
                  Yet to come
                </p>
                <p className="lede mt-5 text-[0.95rem]">
                  Open roles will be listed here as the team grows. If you are a
                  civil or structural engineer, planner, surveyor or site
                  professional who wants to build something from the ground up,
                  we would still like to hear from you.
                </p>
                <a
                  href={`mailto:${contact.email}?subject=Career%20enquiry%20—%20DRES%20NIRMAN`}
                  className="label mt-9 inline-flex items-center gap-3 bg-white px-6 py-3.5 text-[#06080c] transition-colors hover:bg-accent-bright hover:text-white"
                >
                  Send us your profile <span aria-hidden>→</span>
                </a>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="label text-accent-bright">Why Join DRES?</p>
            </Reveal>
            <Reveal delay={80}>
              <p className="display mt-8 text-[clamp(1.5rem,2.8vw,2.1rem)] leading-tight text-white">
                Learning, responsibility, exposure and growth.
              </p>
            </Reveal>
            <div className="mt-12 border-t border-[var(--line)]">
              {[
                ["Learning", "Work across disciplines rather than inside a single silo."],
                ["Responsibility", "Ownership of real scope, early — on drawings and on site."],
                ["Exposure", "Design, execution, surveying and client coordination in one place."],
                ["Growth", "A firm being built for the long term, with room to grow into it."],
              ].map(([t, d], i) => (
                <Reveal key={t} delay={i * 70}>
                  <div className="flex flex-col gap-2 border-b border-[var(--line)] py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10">
                    <p className="display text-lg text-white">{t}</p>
                    <p className="max-w-sm text-[0.85rem] leading-relaxed text-muted sm:text-right">
                      {d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={300}>
              <Link
                href="/about"
                className="label mt-10 inline-flex items-center gap-3 text-accent-bright transition-opacity hover:opacity-70"
              >
                Learn how we work <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
