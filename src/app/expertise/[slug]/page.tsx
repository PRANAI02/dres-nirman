import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import CtaBand from "@/components/cta-band";
import { approach, disciplines } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return disciplines.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = disciplines.find((x) => x.slug === slug);
  if (!d) return {};
  return {
    title: d.title,
    description: d.overview.slice(0, 200),
  };
}

export default async function DisciplinePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const d = disciplines.find((x) => x.slug === slug);
  if (!d) notFound();

  const others = disciplines.filter((x) => x.slug !== d.slug);

  return (
    <>
      <PageHero
        label="our expertise"
        title={d.title}
        image={d.hero}
        alt={d.heroAlt}
      />

      {/* breadcrumb */}
      <div className="border-b border-[var(--line)]">
        <div className="mx-auto flex max-w-[1440px] items-center gap-3 px-6 py-4 lg:px-10">
          <Link href="/" className="label text-muted-2 transition-colors hover:text-white">
            home
          </Link>
          <span className="text-muted-2">/</span>
          <Link
            href="/expertise"
            className="label text-muted-2 transition-colors hover:text-white"
          >
            expertise
          </Link>
          <span className="text-muted-2">/</span>
          <span className="label text-accent-bright">{d.short.toLowerCase()}</span>
        </div>
      </div>

      {/* overview + services */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <Reveal>
              <span className="label text-muted-2">overview</span>
            </Reveal>
            <Reveal delay={80}>
              <p className="lede mt-7">{d.overview}</p>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-14">
                <span className="label text-accent-bright">what we deliver</span>
                <ul className="mt-7 grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
                  {d.services.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-3 bg-[var(--ink)] px-5 py-4 text-[0.87rem] leading-snug text-steel"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-accent-bright" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={100} className="group">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={d.image}
                  alt={d.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="img-cool object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,8,12,0.6)] to-transparent" />
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 border border-[var(--line)] p-7">
                <p className="label text-muted-2">have a requirement?</p>
                <p className="display mt-4 text-xl leading-snug text-white">
                  Tell us about your project.
                </p>
                <Link
                  href="/contact"
                  className="label mt-6 inline-flex items-center gap-3 text-accent-bright transition-opacity hover:opacity-70"
                >
                  discuss your project <span aria-hidden>→</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* how we work */}
      <section className="border-y border-[var(--line)] bg-[var(--ink-2)]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-24">
          <Reveal>
            <span className="label text-muted-2">how we work</span>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="display mt-6 text-[clamp(1.5rem,3vw,2.4rem)] text-white">
              Understand → Engineer → Plan → Execute → Deliver
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-5">
            {approach.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <div className="h-full bg-[var(--ink-2)] p-7">
                  <span className="num text-accent-bright">{s.n}</span>
                  <h3 className="display mt-5 text-lg text-white">{s.title}</h3>
                  <p className="mt-3 text-[0.82rem] leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={340}>
            <Link
              href="/approach"
              className="label mt-10 inline-flex items-center gap-3 text-accent-bright transition-opacity hover:opacity-70"
            >
              our full approach <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* other disciplines */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-24">
        <Reveal>
          <span className="label text-muted-2">other disciplines</span>
        </Reveal>
        <div className="mt-10 border-t border-[var(--line)]">
          {others.map((o, i) => (
            <Reveal key={o.slug} delay={Math.min(i, 4) * 50}>
              <Link
                href={`/expertise/${o.slug}`}
                className="group flex items-center gap-6 border-b border-[var(--line)] py-5 transition-colors hover:bg-[rgba(255,255,255,0.02)]"
              >
                <span className="h-1 w-1 shrink-0 rotate-45 bg-[var(--line-strong)] transition-colors group-hover:bg-accent-bright" />
                <span className="display flex-1 text-[1.05rem] text-steel transition-colors group-hover:text-white">
                  {o.title}
                </span>
                <span
                  aria-hidden
                  className="text-muted-2 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-accent-bright"
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
