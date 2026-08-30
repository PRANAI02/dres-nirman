import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import CtaBand from "@/components/cta-band";
import { values } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Mission",
  description:
    "The vision, mission and values behind DRES NIRMAN Pvt. Ltd. — engineering solutions that are technically sound, practical to execute and built for lasting performance.",
};

const statements = [
  {
    label: "our vision",
    title:
      "To establish DRES NIRMAN as a leading multidisciplinary engineering firm, delivering projects and solutions that stand the test of time.",
    body: "While continuously learning, adapting and evolving with advancements in engineering and technology, our long-term ambition is to build DRES into a Tier-1 engineering organisation recognised for technical excellence, strength, innovation and enduring value.",
  },
  {
    label: "our mission",
    title:
      "To deliver engineering solutions that are technically sound, practical to execute and built for lasting performance.",
    body: "By combining experience, innovation, technology and continuous learning, we aim to create work that reflects our commitment to strength, precision and sustainability — and that is responsible towards the future.",
  },
];

export default function MissionPage() {
  return (
    <>
      <PageHero
        label="our mission"
        title="Built for the long term."
        lede="What we are working towards, how we intend to get there, and the values we hold ourselves to along the way."
        image="/images/steel-joint.jpg"
        alt="Structural steel connection detail"
      />

      {/* vision & mission — matched panels, so neither column is left half empty */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid gap-px bg-[var(--line)] lg:grid-cols-2">
          {statements.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="flex h-full flex-col bg-[var(--ink)] py-20 lg:px-10 lg:py-28">
                <span className="label text-accent-bright">{s.label}</span>
                <p className="display mt-8 text-[clamp(1.5rem,2.6vw,2.1rem)] leading-snug text-white">
                  {s.title}
                </p>
                <p className="lede mt-8 text-[1rem]">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* image band */}
      <section className="border-y border-[var(--line)]">
        <Reveal className="group block">
          <div className="relative aspect-[21/8] w-full overflow-hidden">
            <Image
              src="/images/civil.jpg"
              alt="Concrete being placed over reinforcement on a civil works site"
              fill
              sizes="100vw"
              className="img-cool object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,8,12,0.85)] via-[rgba(6,8,12,0.25)] to-transparent" />
            <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1440px] px-6 pb-10 lg:px-10 lg:pb-14">
              <p className="display text-[clamp(1.2rem,2.4vw,2rem)] text-white">
                Precision. Strength. Innovation.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* values */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <span className="label text-muted-2">our values</span>
        </Reveal>
        <Reveal delay={70}>
          <h2 className="display mt-6 max-w-2xl text-[clamp(1.7rem,3.4vw,2.6rem)] text-white">
            Six commitments we hold ourselves to on every project.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px border-t border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v} delay={(i % 3) * 70}>
              <div className="group h-full bg-[var(--ink)] px-8 py-12 hover:bg-[var(--panel)]">
                <span className="block h-1 w-1 rotate-45 bg-[var(--line-strong)] group-hover:bg-accent-bright" />
                <p className="display mt-7 text-[clamp(1.4rem,2.6vw,2rem)] text-white">
                  {v}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* philosophy */}
      <section className="border-t border-[var(--line)]">
        <div className="mx-auto grid max-w-[1440px] gap-px bg-[var(--line)] sm:grid-cols-3">
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

      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10">
        <Reveal>
          <Link
            href="/about"
            className="group flex flex-wrap items-center justify-between gap-6 border border-[var(--line)] p-8 hover:border-accent-bright lg:p-12"
          >
            <div>
              <span className="label text-accent-bright">next</span>
              <p className="display mt-4 text-[clamp(1.5rem,3vw,2.2rem)] text-white">
                The story behind DRES NIRMAN
              </p>
            </div>
            <span className="label flex items-center gap-3 text-muted">
              read about us <span aria-hidden>→</span>
            </span>
          </Link>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
