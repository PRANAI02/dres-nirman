import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import CtaBand from "@/components/cta-band";
import { capabilities, disciplines } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Steel structure erection on an industrial construction site"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.8] [filter:grayscale(0.2)_contrast(1.06)_brightness(1.1)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(135%_95%_at_18%_8%,rgba(6,8,12,0.1)_0%,rgba(6,8,12,0.6)_45%,rgba(6,8,12,0.92)_76%,var(--ink)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(80deg,rgba(6,8,12,0.82)_0%,rgba(6,8,12,0.5)_38%,rgba(6,8,12,0.12)_72%,transparent_100%)]" />
        <div className="blueprint absolute inset-0 opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[var(--ink)] via-[rgba(6,8,12,0.55)] to-transparent" />

        <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-14 pt-36 lg:px-10 lg:pb-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-bright opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-bright" />
              </span>
              <span className="label text-steel">
                multidisciplinary engineering &amp; industrial solutions
              </span>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="display display-lg mt-8 max-w-5xl text-[clamp(2.5rem,7vw,5.9rem)] text-white">
              Engineering a Stronger,
              <br />
              Smarter,{" "}
              <span className="bg-gradient-to-r from-accent-bright to-[#a9c9f5] bg-clip-text text-transparent">
                Sustainable
              </span>{" "}
              Tomorrow
            </h1>
          </Reveal>

          <div className="mt-12 grid gap-10 border-t border-[var(--line)] pt-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <Reveal delay={160}>
              <p className="display text-[clamp(1.15rem,2vw,1.55rem)] font-normal leading-snug text-steel">
                Where Industrial Strength Meets Modern Engineering.
              </p>
              <p className="lede mt-5 max-w-xl text-[0.98rem]">
                A multidisciplinary engineering and industrial solutions company
                combining construction experience, engineering expertise, modern
                technology and practical execution.
              </p>
            </Reveal>

            <Reveal delay={230}>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:justify-end">
                <Link
                  href="/expertise"
                  className="label inline-flex items-center justify-center gap-3 bg-white px-7 py-4 text-[#06080c] transition-colors hover:bg-accent-bright hover:text-white"
                >
                  explore our expertise <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="label inline-flex items-center justify-center gap-3 border border-[var(--line-strong)] px-7 py-4 text-white transition-colors hover:border-accent-bright hover:bg-[rgba(31,111,224,0.12)]"
                >
                  discuss your project
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* capability marquee */}
        <div className="marquee relative w-full overflow-hidden border-y border-[var(--line)] bg-[rgba(10,14,20,0.7)] backdrop-blur-sm">
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

      {/* ---------------- EXPERTISE INDEX ---------------- */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <div>
              <span className="label text-accent-bright">our expertise</span>
              <h2 className="display mt-6 max-w-2xl text-[clamp(1.9rem,4vw,3.1rem)] text-white">
                Seven disciplines. One engineering conversation.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Link
              href="/expertise"
              className="label inline-flex items-center gap-3 border border-[var(--line-strong)] px-6 py-3.5 text-white transition-colors hover:border-accent-bright"
            >
              view all <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-[var(--line)]">
          {disciplines.map((d, i) => (
            <Reveal key={d.slug} delay={Math.min(i, 4) * 60}>
              <Link
                href={`/expertise/${d.slug}`}
                className="group relative flex items-center gap-6 border-b border-[var(--line)] py-7 transition-colors hover:bg-[rgba(255,255,255,0.02)] sm:gap-10"
              >
                <span className="num w-10 shrink-0 text-muted-2 transition-colors group-hover:text-accent-bright">
                  {d.index}
                </span>

                <div className="relative hidden h-16 w-24 shrink-0 overflow-hidden md:block">
                  <Image
                    src={d.image}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-cover opacity-70 grayscale transition duration-700 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="display text-[clamp(1.15rem,2.2vw,1.7rem)] text-white">
                    {d.title}
                  </h3>
                  <p className="mt-1.5 text-[0.85rem] leading-relaxed text-muted-2">
                    {d.blurb}
                  </p>
                </div>

                <span
                  aria-hidden
                  className="shrink-0 text-lg text-muted-2 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-accent-bright"
                >
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
