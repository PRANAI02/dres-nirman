import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import CtaBand from "@/components/cta-band";
import { capabilities, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "DRES NIRMAN Pvt. Ltd. is a multidisciplinary engineering firm bringing together engineering knowledge, construction experience, modern technology and practical execution.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="02"
        label="About Us"
        title="Engineering Built on Experience. Driven by What Comes Next."
        lede="A multidisciplinary engineering firm built at the intersection of two worlds — the practical experience of construction and the evolving possibilities of modern engineering."
        image="/images/roof.jpg"
        alt="Structural roof framing viewed from below"
      />

      {/* intro */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <Reveal>
            <p className="label text-muted-2">Who We Are</p>
            <p className="display mt-6 text-[clamp(1.4rem,2.6vw,2.1rem)] leading-tight text-white">
              Good engineering is not simply about designing something that works
              today.
            </p>
          </Reveal>
          <div>
            <Reveal delay={90}>
              <p className="lede">
                DRES NIRMAN Pvt. Ltd. is a multidisciplinary engineering firm
                bringing together engineering knowledge, construction experience,
                modern technology and practical execution. Our capabilities span
                civil engineering and execution, PEB and steel structures,
                structural engineering and design, industrial and infrastructure
                projects, architectural and planning coordination, surveying and
                geotechnical coordination, retrofitting and structural
                strengthening, and sustainable engineering.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p className="lede mt-6">
                It is about creating solutions that are technically sound,
                practical to execute, durable in performance and responsible
                towards the future. DRES NIRMAN is being built with a long-term
                vision: to grow from a strong foundation of construction
                experience into a leading multidisciplinary engineering
                organisation, continuously expanding its knowledge, capabilities
                and technological depth.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <div className="mt-12 flex flex-wrap gap-2">
                {capabilities.map((c) => (
                  <span
                    key={c}
                    className="border border-[var(--line)] px-3.5 py-2 font-mono text-[0.62rem] tracking-[0.1em] text-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* philosophy strip */}
      <section className="border-y border-[var(--line)] bg-[var(--ink-2)]">
        <div className="mx-auto grid max-w-[1440px] gap-px bg-[var(--line)] px-0 sm:grid-cols-3">
          {[
            ["Precision", "Accuracy and engineering discipline"],
            ["Strength", "Durability and dependable execution"],
            ["Innovation", "Modern engineering and technology"],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 90}>
              <div className="h-full bg-[var(--ink-2)] px-8 py-14 lg:px-10">
                <p className="display text-[clamp(1.6rem,3vw,2.4rem)] text-white">{t}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* our story */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          index="—"
          label="Our Story"
          title="From construction experience to a new generation of engineering."
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          <div className="space-y-6">
            {[
              "Every organisation begins with a reason to exist. For DRES NIRMAN, that reason comes from a simple observation: construction is evolving, and engineering must evolve with it.",
              "Growing up around the construction industry provided an early understanding of the realities behind every project — the people, materials, drawings, decisions, site conditions and countless small details that ultimately determine whether a structure succeeds. That practical foundation led to a deeper interest in engineering and structural design.",
              "The journey then moved from construction exposure into formal engineering education and professional experience, with a focus on understanding structures not only from the perspective of execution, but also through analysis, design, technology and engineering principles.",
              "DRES NIRMAN is being developed as a multidisciplinary engineering firm capable of bringing different areas of expertise together — from civil and structural engineering to steel and PEB structures, industrial projects, architectural coordination, surveying, geotechnical coordination, strengthening and sustainable engineering. We believe the best engineering solutions come from understanding the whole project, while respecting the importance of every individual discipline involved.",
            ].map((p, i) => (
              <Reveal key={i} delay={i * 70}>
                <p className="lede">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={320}>
              <div className="mt-12 border-l border-accent px-8 py-2">
                <p className="display text-[clamp(1.3rem,2.4vw,1.9rem)] leading-tight text-white">
                  And the journey does not end with what we know today. We intend
                  to keep learning.
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  New technologies will emerge. Engineering practices will evolve.
                  Materials will change. Construction methods will improve. The
                  expectations placed on the built environment will become greater.
                  DRES NIRMAN intends to evolve with them.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/story.jpg"
                  alt="Site engineer on an industrial construction site at dusk"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover [filter:grayscale(0.35)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,8,12,0.8)] to-transparent" />
              </div>
              <div className="panel mt-4 p-7">
                <p className="label text-accent-bright">The two worlds</p>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-steel">
                  <p>The practical experience of construction</p>
                  <p className="font-mono text-[0.65rem] tracking-[0.2em] text-muted-2">AND</p>
                  <p>The evolving possibilities of modern engineering</p>
                </div>
                <p className="mt-7 border-t border-[var(--line)] pt-5 text-[0.8rem] leading-relaxed text-muted">
                  From a family legacy in construction to a new generation of
                  engineering, DRES NIRMAN is being built for the long term.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* vision / mission */}
      <section className="border-y border-[var(--line)] bg-[var(--ink-2)]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-px bg-[var(--line)] lg:grid-cols-2">
            <Reveal>
              <div className="h-full bg-[var(--ink-2)] p-8 lg:p-14">
                <p className="label text-accent-bright">Our Vision</p>
                <p className="display mt-7 text-[clamp(1.3rem,2.2vw,1.8rem)] leading-snug text-white">
                  To establish DRES NIRMAN as a leading multidisciplinary
                  engineering firm, delivering projects and solutions that stand
                  the test of time.
                </p>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  While continuously learning, adapting and evolving with
                  advancements in engineering and technology. Our long-term
                  ambition is to build DRES into a Tier-1 engineering organisation
                  recognised for technical excellence, strength, innovation and
                  enduring value.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full bg-[var(--ink-2)] p-8 lg:p-14">
                <p className="label text-accent-bright">Our Mission</p>
                <p className="display mt-7 text-[clamp(1.3rem,2.2vw,1.8rem)] leading-snug text-white">
                  To deliver engineering solutions that are technically sound,
                  practical to execute and built for lasting performance.
                </p>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  By combining experience, innovation, technology and continuous
                  learning, we aim to create work that reflects our commitment to
                  strength, precision and sustainability — and that is responsible
                  towards the future.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-20">
            <Reveal>
              <p className="label text-muted-2">Our Values</p>
            </Reveal>
            <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-6">
              {values.map((v, i) => (
                <Reveal key={v} delay={i * 60}>
                  <span className="display text-[clamp(1.4rem,3.4vw,2.6rem)] text-white/85 transition-colors hover:text-accent-bright">
                    {v}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
        <Reveal>
          <Link
            href="/people"
            className="group flex flex-wrap items-center justify-between gap-6 border border-[var(--line)] p-8 transition-colors hover:border-accent-bright lg:p-12"
          >
            <div>
              <p className="label text-accent-bright">Next</p>
              <p className="display mt-4 text-[clamp(1.5rem,3vw,2.2rem)] text-white">
                The people behind DRES NIRMAN
              </p>
            </div>
            <span className="label flex items-center gap-3 text-muted transition-transform duration-500 group-hover:translate-x-2">
              View leadership <span aria-hidden>→</span>
            </span>
          </Link>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
