import Image from "next/image";
import Reveal from "./reveal";

export default function PageHero({
  label,
  title,
  lede,
  image,
  alt,
}: {
  label: string;
  title: string;
  lede?: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden pt-[74px]">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.62] [filter:grayscale(0.35)_contrast(1.02)_brightness(1.08)]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[rgba(6,8,12,0.6)] to-[rgba(6,8,12,0.28)]" />
      <div className="blueprint absolute inset-0 opacity-50" />
      <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-16 pt-24 lg:px-10 lg:pb-24">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--line-strong)]" />
            <span className="label text-muted">{label}</span>
          </div>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="display mt-7 max-w-4xl text-[clamp(2.4rem,6vw,4.8rem)] text-white">
            {title}
          </h1>
        </Reveal>
        {lede && (
          <Reveal delay={160}>
            <p className="lede mt-7 max-w-2xl">{lede}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
