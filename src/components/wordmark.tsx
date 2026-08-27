import Link from "next/link";

export default function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="DRES NIRMAN — home">
      <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-[3px] bg-gradient-to-br from-[#0b63d6] to-[#00306f] shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset]">
        <span className="absolute inset-0 opacity-40 [background:linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.55)_50%,transparent_65%)]" />
        <svg viewBox="0 0 24 24" className="relative h-4 w-4 text-white" fill="none" aria-hidden>
          <path d="M3 20h18M6 20V9l6-4 6 4v11M10 20v-5h4v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="display block text-[1.35rem] tracking-[-0.02em] text-white">
          DRES
          <span className="ml-1.5 font-mono text-[0.6rem] font-normal tracking-[0.3em] text-accent-bright align-middle">
            NIRMAN
          </span>
        </span>
        {!compact && (
          <span className="mt-1 block font-mono text-[0.55rem] tracking-[0.24em] text-muted-2">
            PVT. LTD.
          </span>
        )}
      </span>
    </Link>
  );
}
