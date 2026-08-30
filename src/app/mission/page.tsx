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

export default function MissionPage() {
  return (
    <>
      <PageHero
        index="—"
        label="our mission"
        title="Built for the long term."
        lede="What we are working towards, how we intend to get there, and the values we hold ourselves to along the way."
        image="/images/drone2.jpg"
        alt="Survey drone over open terrain at first light"
      />

      {/* vision */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="label text-accent-bright">our vision</span>
              <p className="display mt-8 text-[clamp(1.6rem,3vw,2.5rem)] leading-snug text-white">
                To establish DRES NIRMAN as a leading multidisciplinary
                engineering firm, delivering projects and solutions that stand the
                test of time.
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal delay={100}>
              <p className="lede">
                While continuously learning, adapting and evolving with
                advancements in engineering and technology, our long-term ambition
                is to build DRES into a Tier-1 engineering organisation recognised
                for technical excellence, strength, innovation and enduring value.
              </p>
            </Reveal>
            <Reveal delay={160} className="group">
              <div className="relative mt-12 aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/images/survey.jpg"
                  alt="Survey instrument set up on open ground"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="img-cool object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,8,12,0.6)] to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* mission */}
      <section className="border-y border-[var(--line)] bg-[var(--ink-2)]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
            <Reveal className="group order-2 lg:order-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/story.jpg"
                  alt="Site engineer on an industrial construction site at dusk"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="img-cool object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,8,12,0.6)] to-transparent" />
              </div>
            </Reveal>

            <div className="order-1 lg:order-2">
              <Reveal>
                <span className="label text-accent-bright">our mission</span>
              </Reveal>
              <Reveal delay={80}>
                <p className="display mt-8 text-[clamp(1.6rem,3vw,2.5rem)] leading-snug text-white">
                  To deliver engineering solutions that are technically sound,
                  practical to execute and built for lasting performance.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p className="lede mt-8">
                  By combining experience, innovation, technology and continuous
                  learning, we aim to create work that reflects our commitment to
                  strength, precision and sustainability — and that is responsible
                  towards the future.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <span className="label text-muted-2">our values</span>
        </Reveal>
        <div className="mt-10 grid gap-px border-t border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v} delay={(i % 3) * 70}>
              <div className="group h-full bg-[var(--ink)] px-8 py-12 transition-colors duration-500 hover:bg-[var(--panel)]">
                <span className="num text-muted-2 transition-colors group-hover:text-accent-bright">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="display mt-6 text-[clamp(1.5rem,3vw,2.2rem)] text-white">
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
            className="group flex flex-wrap items-center justify-between gap-6 border border-[var(--line)] p-8 transition-colors hover:border-accent-bright lg:p-12"
          >
            <div>
              <span className="label text-accent-bright">next</span>
              <p className="display mt-4 text-[clamp(1.5rem,3vw,2.2rem)] text-white">
                The story behind DRES NIRMAN
              </p>
            </div>
            <span className="label flex items-center gap-3 text-muted transition-transform duration-500 group-hover:translate-x-2">
              read about us <span aria-hidden>→</span>
            </span>
          </Link>
        </Reveal>
      </section>

      <CtaBand />
    </>
  );
}
