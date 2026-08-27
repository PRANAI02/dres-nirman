import Reveal from "./reveal";

export default function SectionHeading({
  index,
  label,
  title,
  lede,
  align = "left",
}: {
  index?: string;
  label: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal>
        <div
          className={`flex items-center gap-3 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          {index && <span className="label text-accent-bright">{index}</span>}
          <span className="h-px w-8 bg-[var(--line-strong)]" />
          <span className="label text-muted-2">{label}</span>
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="display mt-6 text-[clamp(2rem,4.4vw,3.4rem)] text-white">{title}</h2>
      </Reveal>
      {lede && (
        <Reveal delay={140}>
          <p className="lede mt-6">{lede}</p>
        </Reveal>
      )}
    </div>
  );
}
