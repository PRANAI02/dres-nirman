import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import CtaBand from "@/components/cta-band";
import { approach } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "Understand → Engineer → Plan → Execute → Deliver. How DRES NIRMAN takes a project from requirement to completion.",
};

export default function ApproachPage() {
  return (
    <>
      <PageHero
        label="our approach"
        title="Understand → Engineer → Plan → Execute → Deliver"
        lede="A single sequence that carries a project from the first site walk to handover — with the same team accountable at every step."
        image="/images/excavator.jpg"
        alt="Construction works under way on an industrial site"
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

      <CtaBand />
    </>
  );
}
