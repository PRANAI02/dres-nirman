import Image from "next/image";
import Link from "next/link";
import Reveal from "./reveal";

export default function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden border-y border-[var(--line)]">
      <Image
        src="/images/welder.jpg"
        alt="Steel worker welding a beam at height"
        fill
        sizes="100vw"
        className="object-cover opacity-[0.7] [filter:grayscale(0.2)_brightness(1.05)]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(6,8,12,0.94)_14%,rgba(6,8,12,0.55)_58%,rgba(6,8,12,0.18)_92%)]" />
      <div className="relative mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <span className="label text-accent-bright">Let&apos;s Build What&apos;s Next</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mt-6 max-w-3xl text-[clamp(2.1rem,4.8vw,3.8rem)] text-white">
            Have a project, requirement or collaboration opportunity?
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="label inline-flex items-center justify-center gap-3 bg-accent px-7 py-4 text-white transition-colors hover:bg-[#2f80ff]"
            >
              Discuss Your Project <span aria-hidden>→</span>
            </Link>
            <Link
              href="/expertise"
              className="label inline-flex items-center justify-center gap-3 border border-[var(--line-strong)] px-7 py-4 text-white transition-colors hover:border-accent-bright"
            >
              Explore Our Expertise
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
