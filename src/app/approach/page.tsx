import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import SectionHeading from "@/components/section-heading";
import CtaBand from "@/components/cta-band";
import { approach, technology, whyDres } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Understand → Engineer → Plan → Execute → Deliver. How DRES NIRMAN takes a project from requirement to completion, and the technology behind it.",
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        index="05"
        label="our approach"
        title="Understand → Engineer → Plan → Execute → Deliver"
        lede="A single sequence that carries a project from the first site walk to handover — with the same team accountable at every step."
        image="/images/girders.jpg"
        alt="Steel girders during erection"
      />

      {/* the five steps */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="border-t border-[var(--line)]">
          {approach.map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div className="grid gap-6 border-b border-[var(--line)] py-10 md:grid-cols-[auto_0.9fr_1.1fr] md:items-baseline md:gap-12 lg:py-12">
                <span className="display text-[clamp(2.4rem,5vw,4rem)] leading-none text-[rgba(255,255,255,0.13)]">
                  {s.n}
                </span>
                <h2 className="display text-[clamp(1.5rem,3vw,2.2rem)] text-white">
                  {s.title}
                </h2>
                <p className="lede text-[1rem]">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* why dres */}
      <section className="relative isolate overflow-hidden border-y border-[var(--line)]">
        <Image
          src="/images/safety.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.22] [filter:grayscale(0.7)]"
        />
        <div className="absolute inset-0 bg-[var(--ink-2)]/80" />
        <div className="relative mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
          <SectionHeading
            index="06"
            label="why dres nirman"
            title="Engineering judgement, earned on site."
          />
          <div className="mt-16 grid gap-x-12 gap-y-px md:grid-cols-2 lg:grid-cols-3">
            {whyDres.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 80}>
                <div className="group border-t border-[var(--line)] py-8">
                  <div className="flex items-start gap-4">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent-bright transition-transform duration-500 group-hover:scale-150" />
                    <div>
                      <h3 className="display text-lg text-white">{w.title}</h3>
                      <p className="mt-2 text-[0.85rem] leading-relaxed text-muted">
                        {w.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* technology */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
          <Reveal className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/survey-drone.jpg"
                  alt="Surveyor operating a mapping drone on site"
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
              index="07"
              label="technology & innovation"
              title="Modern engineering tools, applied to real sites."
              lede="Analysis, detailing and digital workflows are only useful when they change what happens on the ground. We use technology to reduce uncertainty — in geometry, in quantities and in sequence."
            />
            <div className="mt-12 border-t border-[var(--line)]">
              {technology.map((t, i) => (
                <Reveal key={t.title} delay={i * 70}>
                  <div className="flex flex-col gap-1 border-b border-[var(--line)] py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                    <p className="text-[0.95rem] text-white">{t.title}</p>
                    <p className="max-w-xs text-[0.78rem] leading-relaxed text-muted-2 sm:text-right">
                      {t.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
