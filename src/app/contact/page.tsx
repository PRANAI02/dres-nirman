import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/page-hero";
import Reveal from "@/components/reveal";
import EnquiryForm from "@/components/enquiry-form";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a project, requirement or collaboration opportunity? Contact DRES NIRMAN Pvt. Ltd., Kurnool, Andhra Pradesh.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        index="10"
        label="Contact"
        title="Let's Build What's Next."
        lede="Have a project, requirement or collaboration opportunity? We'd like to hear from you."
        image="/images/plant.jpg"
        alt="Industrial plant structures"
      />

      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div>
            <Reveal>
              <p className="label text-accent-bright">Project Enquiry</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-6 text-[clamp(1.6rem,3vw,2.3rem)] text-white">
                Tell us what you are building.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-12">
                <EnquiryForm />
              </div>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal delay={100}>
              <div className="panel p-8">
                <p className="label text-muted-2">Office</p>
                <p className="display mt-6 text-lg text-white">{contact.company}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{contact.address}</p>
                <div className="mt-8 space-y-4 border-t border-[var(--line)] pt-6 text-sm">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center justify-between gap-4 text-steel transition-colors hover:text-accent-bright"
                  >
                    <span className="label text-muted-2">Email</span>
                    {contact.email}
                  </a>
                  <a
                    href={`tel:${contact.phoneHref}`}
                    className="flex items-center justify-between gap-4 text-steel transition-colors hover:text-accent-bright"
                  >
                    <span className="label text-muted-2">Phone</span>
                    {contact.phone}
                  </a>
                  <a
                    href={contact.linkedin}
                    className="flex items-center justify-between gap-4 text-steel transition-colors hover:text-accent-bright"
                  >
                    <span className="label text-muted-2">LinkedIn</span>
                    Company page ↗
                  </a>
                </div>
                <p className="mt-6 font-mono text-[0.6rem] leading-relaxed tracking-[0.12em] text-muted-2">
                  * Email address and LinkedIn URL are placeholders — confirm before launch.
                </p>
              </div>
            </Reveal>

            <Reveal delay={170}>
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-[var(--line)]">
                <Image
                  src="/images/survey.jpg"
                  alt="Survey instrument on site"
                  fill
                  sizes="(max-width: 1024px) 100vw, 34vw"
                  className="object-cover [filter:grayscale(0.45)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(6,8,12,0.85)] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="label text-accent-bright">Kurnool · Andhra Pradesh</p>
                  <p className="mt-2 text-sm text-steel">
                    Working across South India and beyond.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="border border-[var(--line)] p-8">
                <p className="label text-muted-2">Response</p>
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  Enquiries are reviewed by the engineering team. For tenders and
                  time-bound requirements, please call directly so we can respond
                  the same day.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
