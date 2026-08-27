import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import CtaBand from "@/components/cta-band";
import { approach, capabilities, disciplines, whyDres } from "@/lib/content";

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
          className="object-cover opacity-[0.62] [filter:grayscale(0.35)_contrast(1.1)]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(130%_90%_at_15%_5%,rgba(6,8,12,0.35)_0%,rgba(6,8,12,0.78)_48%,rgba(6,8,12,0.96)_78%,var(--ink)_100%)]" />
        <div className="blueprint absolute inset-0 opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[var(--ink)] to-transparent" />

        <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-14 pt-36 lg:px-10 lg:pb-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-bright opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-bright" />
              </span>
              <span className="label text-muted">
                Multidisciplinary Engineering &amp; Industrial Solutions
              </span>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="display mt-8 max-w-5xl text-[clamp(2.6rem,7.4vw,6.2rem)] text-white">
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
              <p className="display text-[clamp(1.15rem,2vw,1.6rem)] font-medium leading-snug text-steel">
                Where Industrial Strength Meets Modern Engineering.
              </p>
              <p className="lede mt-5 max-w-xl text-[0.98rem]">
                DRES NIRMAN is a multidisciplinary engineering and industrial
                solutions company combining construction experience, engineering
                expertise, modern technology and practical execution.
              </p>
            </Reveal>

            <Reveal delay={230}>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 lg:justify-end">
                <Link
                  href="/expertise"
                  className="label inline-flex items-center justify-center gap-3 bg-white px-7 py-4 text-[#06080c] transition-colors hover:bg-accent-bright hover:text-white"
                >
                  Explore Our Expertise <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/contact"
                  className="label inline-flex items-center justify-center gap-3 border border-[var(--line-strong)] px-7 py-4 text-white transition-colors hover:border-accent-bright hover:bg-[rgba(31,111,224,0.12)]"
                >
                  Discuss Your Project
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

      {/* ---------------- STATS ---------------- */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid grid-cols-2 divide-x divide-[var(--line)] border-b border-[var(--line)] lg:grid-cols-4">
          {[
            { k: "1991", v: "Construction legacy since" },
            { k: "08", v: "Engineering disciplines" },
            { k: "3+", v: "Decades of site experience" },
            { k: "02", v: "Generations of engineering leadership" },
          ].map((s, i) => (
            <Reveal key={s.k} delay={i * 70}>
              <div className="px-5 py-10 lg:px-8 lg:py-14">
                <p className="display text-[clamp(2rem,4vw,3.2rem)] text-white">{s.k}</p>
                <p className="mt-3 text-[0.78rem] leading-relaxed text-muted-2">{s.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-24">
          <div>
            <SectionHeading
              index="01"
              label="About Us"
              title="Engineering Built on Experience. Driven by What Comes Next."
            />
            <Reveal delay={180}>
              <p className="lede mt-8">
                DRES NIRMAN Pvt. Ltd. brings together engineering knowledge,
                construction experience, modern technology and practical
                execution. We approach every project with the belief that good
                engineering is not simply about designing something that works
                today — it is about creating solutions that are technically
                sound, practical to execute, durable in performance and
                responsible towards the future.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-12 grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
                {[
                  { t: "Precision", d: "Accuracy and engineering discipline" },
                  { t: "Strength", d: "Durability and dependable execution" },
                  { t: "Innovation", d: "Modern engineering and technology" },
                ].map((p) => (
                  <div key={p.t} className="bg-[var(--ink)] p-6">
                    <p className="display text-lg text-white">{p.t}</p>
                    <p className="mt-2 text-[0.8rem] leading-relaxed text-muted-2">{p.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={300}>
              <Link
                href="/about"
                className="label mt-10 inline-flex items-center gap-3 text-accent-bright transition-opacity hover:opacity-70"
              >
                Read our story <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/steel-joint.jpg"
                alt="Structural steel connection detail against the sky"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover [filter:grayscale(0.35)_contrast(1.05)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,8,12,0.75)] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--line-strong)] bg-[rgba(6,8,12,0.72)] p-6 backdrop-blur-md">
                <p className="label text-accent-bright">Our Philosophy</p>
                <p className="display mt-3 text-2xl text-white">
                  Precision. Strength. Innovation.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- EXPERTISE ---------------- */}
      <section className="relative border-y border-[var(--line)] bg-[var(--ink-2)]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
          <SectionHeading
            index="02"
            label="Our Expertise"
            title="Eight disciplines. One engineering conversation."
            lede="Civil, structural, steel, industrial, geospatial and sustainable engineering — coordinated under a single team so that design intent survives contact with the site."
          />

          <div className="mt-16 grid gap-px bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((d, i) => (
              <Reveal key={d.id} delay={(i % 3) * 90}>
                <Link
                  href={`/expertise#${d.id}`}
                  className="group relative flex h-full flex-col justify-between overflow-hidden bg-[var(--ink-2)] p-8 transition-colors duration-500 hover:bg-[var(--panel)]"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    <Image
                      src={d.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover opacity-25 [filter:grayscale(0.6)]"
                    />
                  </div>
                  <div className="relative">
                    <span className="label text-muted-2 transition-colors group-hover:text-accent-bright">
                      {d.index}
                    </span>
                    <h3 className="display mt-6 text-[1.45rem] leading-tight text-white">
                      {d.title}
                    </h3>
                    <p className="mt-4 text-[0.88rem] leading-relaxed text-muted">{d.blurb}</p>
                  </div>
                  <div className="relative mt-10 flex flex-wrap gap-2">
                    {d.services.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="border border-[var(--line)] px-3 py-1.5 font-mono text-[0.62rem] tracking-[0.1em] text-muted-2"
                      >
                        {s}
                      </span>
                    ))}
                    {d.services.length > 3 && (
                      <span className="px-1 py-1.5 font-mono text-[0.62rem] tracking-[0.1em] text-accent-bright">
                        +{d.services.length - 3}
                      </span>
                    )}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- APPROACH ---------------- */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeading
          index="03"
          label="Our Approach"
          title="Understand → Engineer → Plan → Execute → Deliver"
        />
        <div className="mt-16 grid gap-px bg-[var(--line)] md:grid-cols-2 lg:grid-cols-5">
          {approach.map((step, i) => (
            <Reveal key={step.n} delay={i * 80}>
              <div className="group h-full bg-[var(--ink)] p-8 transition-colors duration-500 hover:bg-[var(--panel)]">
                <div className="flex items-center gap-3">
                  <span className="display text-[2.6rem] leading-none text-[rgba(255,255,255,0.14)] transition-colors duration-500 group-hover:text-accent-bright">
                    {step.n}
                  </span>
                  <span className="h-px flex-1 bg-[var(--line)]" />
                </div>
                <h3 className="display mt-8 text-xl text-white">{step.title}</h3>
                <p className="mt-3 text-[0.85rem] leading-relaxed text-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- WHY DRES ---------------- */}
      <section className="relative isolate overflow-hidden border-y border-[var(--line)]">
        <Image
          src="/images/girders.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.14] [filter:grayscale(0.8)]"
        />
        <div className="absolute inset-0 bg-[var(--ink-2)]/85" />
        <div className="relative mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
          <SectionHeading
            index="04"
            label="Why DRES NIRMAN"
            title="Engineering judgement, earned on site."
          />
          <div className="mt-16 grid gap-x-12 gap-y-px md:grid-cols-2 lg:grid-cols-3">
            {whyDres.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 90}>
                <div className="group border-t border-[var(--line)] py-8">
                  <div className="flex items-start gap-4">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent-bright transition-transform duration-500 group-hover:scale-150" />
                    <div>
                      <h3 className="display text-lg text-white">{w.title}</h3>
                      <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">{w.body}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- TECHNOLOGY ---------------- */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
          <Reveal className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/drone2.jpg"
                  alt="Survey drone flying over open terrain"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover [filter:grayscale(0.4)]"
                />
              </div>
              <div className="relative mt-10 aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/automation.jpg"
                  alt="Automated industrial production equipment"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover [filter:grayscale(0.4)]"
                />
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              index="05"
              label="Technology & Innovation"
              title="Modern engineering tools, applied to real sites."
              lede="Analysis, detailing and digital workflows are only useful when they change what happens on the ground. We use technology to reduce uncertainty — in geometry, in quantities and in sequence."
            />
            <div className="mt-12 space-y-px border-t border-[var(--line)]">
              {[
                ["Structural analysis & design software", "Modelling, analysis and code-based design checks"],
                ["Digital detailing & drawing control", "Coordinated drawings, revisions and issue tracking"],
                ["DGPS & drone-based survey", "High-precision positioning, mapping and volumetrics"],
                ["GIS-based mapping & analysis", "Spatial data for planning and infrastructure projects"],
              ].map(([t, d], i) => (
                <Reveal key={t} delay={i * 70}>
                  <div className="flex flex-col gap-1 border-b border-[var(--line)] py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                    <p className="text-[0.95rem] text-white">{t}</p>
                    <p className="max-w-xs text-[0.78rem] leading-relaxed text-muted-2 sm:text-right">
                      {d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={280}>
              <p className="mt-6 font-mono text-[0.62rem] tracking-[0.12em] text-muted-2">
                * Placeholder capability list — to be confirmed with the DRES team.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- PROJECTS TEASER ---------------- */}
      <section className="border-y border-[var(--line)] bg-[var(--ink-2)]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading
              index="06"
              label="Our Projects"
              title="The first chapter is being written."
            />
            <Reveal delay={140}>
              <Link
                href="/projects"
                className="label inline-flex items-center gap-3 border border-[var(--line-strong)] px-6 py-3.5 text-white transition-colors hover:border-accent-bright"
              >
                Project index <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-px bg-[var(--line)] md:grid-cols-3">
            {[
              ["Industrial", "/images/factory.jpg"],
              ["Warehousing & PEB", "/images/warehouse-modern.jpg"],
              ["Infrastructure", "/images/excavator.jpg"],
            ].map(([label, img], i) => (
              <Reveal key={label} delay={i * 90}>
                <div className="group relative aspect-[4/3] overflow-hidden bg-[var(--ink-2)]">
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-40 blur-[2px] transition duration-700 [filter:grayscale(0.85)] group-hover:opacity-55 group-hover:blur-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,8,12,0.9)] to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-7">
                    <span className="label text-accent-bright">{label}</span>
                    <p className="display mt-3 text-xl text-white">Coming soon</p>
                  </div>
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
