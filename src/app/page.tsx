import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import CtaBand from "@/components/cta-band";
import { capabilities } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      {/* The header stays hidden over this section — the logo carries it. */}
      <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Steel structure erection on an industrial construction site"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.9] [filter:grayscale(0.25)_contrast(1.04)_brightness(0.92)]"
        />
        {/* edge vignette keeps the photograph visible, the soft centre pool
            gives the logo a dark bed to sit on */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_42%,rgba(6,8,12,0.1)_0%,rgba(6,8,12,0.42)_55%,rgba(6,8,12,0.82)_84%,var(--ink)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(62%_46%_at_50%_42%,rgba(6,8,12,0.8)_0%,rgba(6,8,12,0.58)_48%,rgba(6,8,12,0.2)_78%,transparent_100%)]" />
        <div className="blueprint absolute inset-0 opacity-50" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--ink)] to-transparent" />

        <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center justify-center px-6 py-28 text-center lg:px-10">
          {/* The mark itself lives in the header; the hero carries the two lines
              from the logo, set as live type so they stay crisp and can be
              positioned properly. */}
          <Reveal>
            <p className="max-w-3xl text-center text-[clamp(0.6rem,1.05vw,0.78rem)] font-light uppercase leading-relaxed tracking-[0.34em] text-white/85 drop-shadow-[0_1px_12px_rgba(0,0,0,0.9)]">
              Multidisciplinary Engineering and Industrial Solutions Company
            </p>
          </Reveal>

          <Reveal delay={110}>
            <div className="mt-8 flex items-center justify-center gap-1.5" aria-hidden>
              <span className="h-[2px] w-12 bg-white/80" />
              <span className="h-[2px] w-12 bg-accent-bright" />
            </div>
          </Reveal>

          <Reveal delay={190}>
            <h1 className="mt-8 max-w-5xl text-center font-[family-name:var(--font-jost)] text-[clamp(1.15rem,3.1vw,2.6rem)] font-light uppercase leading-[1.35] tracking-[0.16em] text-white drop-shadow-[0_2px_22px_rgba(0,0,0,0.85)]">
              Engineering a Stronger, Smarter,
              <br className="hidden sm:block" />{" "}
              Sustainable Tomorrow
            </h1>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/expertise"
                className="label inline-flex items-center justify-center gap-3 bg-white px-8 py-4 text-[#06080c] transition-colors hover:bg-accent-bright hover:text-white"
              >
                explore our expertise <span aria-hidden>→</span>
              </Link>
              <Link
                href="/contact"
                className="label inline-flex items-center justify-center gap-3 border border-[var(--line-strong)] bg-[rgba(6,8,12,0.62)] px-8 py-4 text-white backdrop-blur-md transition-colors hover:border-accent-bright hover:bg-[rgba(31,111,224,0.2)]"
              >
                discuss your project
              </Link>
            </div>
          </Reveal>
        </div>

        {/* capability marquee */}
        <div className="marquee relative w-full overflow-hidden border-y border-[var(--line)] bg-[rgba(10,14,20,0.72)] backdrop-blur-sm">
          <div className="marquee-track flex w-max gap-10 py-4">
            {[...capabilities, ...capabilities].map((cap, i) => (
              <span
                key={`${cap}-${i}`}
                className="label flex shrink-0 items-center gap-10 text-muted"
              >
                {cap}
                <span className="h-1 w-1 rotate-45 bg-accent-bright" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-2 divide-x divide-[var(--line)] border-b border-[var(--line)] lg:grid-cols-4">
          {[
            { k: "1991", v: "Construction legacy since" },
            { k: "07", v: "Engineering disciplines" },
            { k: "3+", v: "Decades of site experience" },
            { k: "02", v: "Generations of engineering leadership" },
          ].map((s, i) => (
            <Reveal key={s.k} delay={i * 70}>
              <div className="px-5 py-10 lg:px-8 lg:py-14">
                <p className="display text-[clamp(2.2rem,4.4vw,3.6rem)] text-white">{s.k}</p>
                <p className="mt-3 text-left text-[0.78rem] leading-relaxed text-muted-2">
                  {s.v}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- POSITIONING ---------------- */}
      {/* The tagline stands alone. It gets its own band — hairlines top and
          bottom, the blueprint ground — so a single centred line reads as a
          deliberate statement rather than empty space. */}
      <section className="relative overflow-hidden border-b border-[var(--line)] bg-[var(--ink-2)]">
        <div className="blueprint pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-6 py-24 lg:px-10 lg:py-28">
          <Reveal>
            <div className="flex items-center justify-center gap-1.5" aria-hidden>
              <span className="h-[2px] w-12 bg-white/45" />
              <span className="h-[2px] w-12 bg-accent-bright" />
            </div>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-10 max-w-4xl text-center font-[family-name:var(--font-jost)] text-[clamp(1.05rem,2.5vw,1.95rem)] font-light uppercase leading-[1.45] tracking-[0.2em] text-white [hyphens:none]">
              Engineering a Stronger, Smarter, Sustainable Tomorrow
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
