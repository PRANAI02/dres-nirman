import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import CtaBand from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Projects",
  description: "The DRES NIRMAN project index — currently being prepared.",
};

const sectors = [
  {
    title: "Industrial Projects",
    body: "Plant buildings, plant-related civil works and industrial maintenance support.",
    image: "/images/plant.jpg",
  },
  {
    title: "Warehousing & PEB",
    body: "Pre-engineered buildings, industrial sheds and clear-span steel structures.",
    image: "/images/warehouse.jpg",
  },
  {
    title: "Civil & Infrastructure",
    body: "RCC frames, foundations, site development and infrastructure packages.",
    image: "/images/excavator.jpg",
  },
  {
    title: "Strengthening & Retrofitting",
    body: "Assessment, structural strengthening and life-extension of existing assets.",
    image: "/images/frame-sky.jpg",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Our Projects"
        title="Yet to come."
        lede="Our project index is being prepared. In the meantime, here are the sectors we are built to deliver in, and the disciplines we bring to each of them."
        image="/images/warehouse-modern.jpg"
        alt="Steel structure erection at an industrial site"
      />

      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="panel grain relative overflow-hidden p-10 lg:p-16">
            <div className="blueprint absolute inset-0 opacity-70" />
            <div className="relative max-w-2xl">
              <span className="label text-accent-bright">Status</span>
              <h2 className="display mt-6 text-[clamp(1.8rem,3.6vw,2.8rem)] text-white">
                Documentation in progress
              </h2>
              <p className="lede mt-6">
                Completed and ongoing work is currently being documented with
                drawings, photographs and delivery data. This page will carry the
                full project index as it is released.
              </p>
              <Link
                href="/contact"
                className="label mt-9 inline-flex items-center gap-3 border border-[var(--line-strong)] px-6 py-3.5 text-white transition-colors hover:border-accent-bright"
              >
                Request project references <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-px bg-[var(--line)] md:grid-cols-2">
          {sectors.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 90}>
              <div className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden bg-[var(--ink-2)] p-8 lg:min-h-[360px] lg:p-10">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-25 transition-all duration-700 [filter:grayscale(0.8)] group-hover:scale-105 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,8,12,0.94)] via-[rgba(6,8,12,0.6)] to-transparent" />
                <div className="relative">
                  <h3 className="display text-[clamp(1.3rem,2.4vw,1.9rem)] text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[0.88rem] leading-relaxed text-muted">
                    {s.body}
                  </p>
                  <p className="label mt-6 text-muted-2">Projects: coming soon</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
