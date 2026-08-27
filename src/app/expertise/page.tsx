import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import CtaBand from "@/components/cta-band";
import { approach, disciplines } from "@/lib/content";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Civil engineering, PEB & steel structures, structural design, industrial projects, surveying and geospatial coordination, retrofitting and sustainable engineering.",
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        index="03"
        label="Our Expertise"
        title="Multidisciplinary by design, not by accident."
        lede="Each discipline stands on its own — and every one of them is engineered to work with the others on the same project, the same drawing set and the same site."
        image="/images/lattice.jpg"
        alt="Steel lattice structure"
      />

      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="space-y-24 lg:space-y-32">
          {disciplines.map((d, i) => (
            <article
              key={d.id}
              id={d.id}
              className="scroll-mt-28 grid gap-10 border-t border-[var(--line)] pt-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16"
            >
              <div>
                <Reveal>
                  <div className="flex items-baseline gap-4">
                    <span className="display text-[clamp(2.6rem,6vw,4.6rem)] leading-none text-[rgba(255,255,255,0.12)]">
                      {d.index}
                    </span>
                    <span className="h-px flex-1 bg-[var(--line)]" />
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="display mt-8 text-[clamp(1.6rem,3vw,2.4rem)] text-white">
                    {d.title}
                  </h2>
                </Reveal>
                <Reveal delay={130}>
                  <p className="lede mt-6 text-[1rem]">{d.blurb}</p>
                </Reveal>
                <Reveal delay={180}>
                  <ul className="mt-10 grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
                    {d.services.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-3 bg-[var(--ink)] px-5 py-4 text-[0.85rem] text-steel"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-accent-bright" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <Reveal delay={i % 2 ? 60 : 120} className="group">
                <div className="relative aspect-[16/11] w-full overflow-hidden">
                  <Image
                    src={d.image}
                    alt={d.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 56vw"
                    className="img-cool object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,8,12,0.55)] to-transparent" />
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--ink-2)]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-28">
          <Reveal>
            <p className="label text-accent-bright">How we work</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-6 text-[clamp(1.8rem,3.4vw,2.8rem)] text-white">
              Understand → Engineer → Plan → Execute → Deliver
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-[var(--line)] md:grid-cols-2 lg:grid-cols-5">
            {approach.map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <div className="h-full bg-[var(--ink-2)] p-7">
                  <span className="label text-accent-bright">{s.n}</span>
                  <h3 className="display mt-6 text-lg text-white">{s.title}</h3>
                  <p className="mt-3 text-[0.82rem] leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
