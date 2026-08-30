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
        <div className="absolute inset-0 bg-[radial-gradient(58%_50%_at_50%_45%,rgba(6,8,12,0.78)_0%,rgba(6,8,12,0.55)_45%,rgba(6,8,12,0.18)_75%,transparent_100%)]" />
        <div className="blueprint absolute inset-0 opacity-50" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--ink)] to-transparent" />

        <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col items-center justify-center px-6 py-28 text-center lg:px-10">
          <Reveal>
            {/* hero variant of the logo — the "NIRMAN PVT. LTD." line is lifted
                out; the footer still carries the complete lockup */}
            <Image
              src="/logo-hero.png"
              alt="DRES NIRMAN Pvt. Ltd. — multidisciplinary engineering and industrial solutions company"
              width={1192}
              height={453}
              priority
              className="h-auto w-[min(600px,88vw)] drop-shadow-[0_4px_36px_rgba(0,0,0,0.85)]"
            />
          </Reveal>

          <Reveal delay={200}>
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
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <span className="label text-accent-bright">
              engineering a stronger, smarter, sustainable tomorrow
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="display mt-8 text-[clamp(1.9rem,4.2vw,3.2rem)] text-white">
              Where Industrial Strength Meets Modern Engineering.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede mt-8">
              A multidisciplinary engineering and industrial solutions company
              combining construction experience, engineering expertise, modern
              technology and practical execution.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
