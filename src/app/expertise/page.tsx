import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import CtaBand from "@/components/cta-band";
import { disciplines } from "@/lib/content";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Civil engineering, PEB & steel structures, structural engineering, industrial projects, architectural & planning coordination, surveying & geospatial coordination and sustainable engineering.",
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        label="our expertise"
        title="Multidisciplinary by design, not by accident."
        lede="Each discipline stands on its own — and every one of them is engineered to work with the others on the same project, the same drawing set and the same site."
        image="/images/girders.jpg"
        alt="Structural steel being erected on site"
      />

      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-px bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
          {disciplines.map((d, i) => {
            const wide = i === disciplines.length - 1;
            return (
            <Reveal
              key={d.slug}
              delay={(i % 3) * 80}
              className={wide ? "lg:col-span-2" : undefined}
            >
              <Link
                href={`/expertise/${d.slug}`}
                className={`group relative flex h-full bg-[var(--ink)] transition-colors duration-500 hover:bg-[var(--panel)] ${
                  wide ? "flex-col lg:flex-row" : "flex-col"
                }`}
              >
                <div
                  className={`relative w-full overflow-hidden ${
                    wide ? "aspect-[16/10] lg:aspect-auto lg:w-1/2" : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={d.image}
                    alt={d.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="img-cool object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,8,12,0.85)] via-[rgba(6,8,12,0.2)] to-transparent" />
                </div>

                <div className="flex flex-1 flex-col justify-between p-7 lg:p-8">
                  <div>
                    <h2 className="display text-[1.35rem] leading-snug text-white">
                      {d.title}
                    </h2>
                    <p className="mt-4 text-[0.87rem] leading-relaxed text-muted">
                      {d.blurb}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-3">
                    <span className="label text-muted-2 transition-colors group-hover:text-accent-bright">
                      view discipline
                    </span>
                    <span
                      aria-hidden
                      className="text-muted-2 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-accent-bright"
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
            );
          })}

          {/* fills the last grid cell */}
          <Reveal delay={160}>
            <Link
              href="/contact"
              className="group flex h-full flex-col justify-between bg-[var(--ink-2)] p-7 transition-colors duration-500 hover:bg-[var(--panel)] lg:p-8"
            >
              <div>
                <span className="label text-accent-bright">not sure where you fit?</span>
                <h2 className="display mt-6 text-[1.35rem] leading-snug text-white">
                  Tell us about the project and we&apos;ll point you to the right team.
                </h2>
              </div>
              <div className="mt-10 flex items-center gap-3">
                <span className="label text-muted-2 transition-colors group-hover:text-accent-bright">
                  get in touch
                </span>
                <span
                  aria-hidden
                  className="text-muted-2 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-accent-bright"
                >
                  →
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
