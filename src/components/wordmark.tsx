import Image from "next/image";
import Link from "next/link";

/**
 * The logo's own "NIRMAN PVT. LTD." line is set far too small relative to the
 * DRES mark to survive a 40px header, so the header pairs the mark itself with
 * the company name typeset alongside it. The complete logo runs on the home
 * hero and in the footer.
 */
export default function Wordmark() {
  return (
    <Link
      href="/"
      className="group flex shrink-0 items-center gap-3"
      aria-label="DRES NIRMAN Pvt. Ltd. — home"
    >
      <Image
        src="/logo-dres.png"
        alt="DRES NIRMAN Pvt. Ltd."
        width={1192}
        height={296}
        priority
        className="h-[34px] w-auto lg:h-[38px]"
      />
      <span className="mt-1 hidden flex-col gap-[3px] border-l border-[var(--line-strong)] pl-3 sm:flex lg:hidden 2xl:flex">
        <span className="text-[0.62rem] font-light leading-none tracking-[0.32em] text-steel">
          NIRMAN
        </span>
        <span className="text-[0.52rem] font-light leading-none tracking-[0.28em] text-muted-2">
          PVT. LTD.
        </span>
      </span>
    </Link>
  );
}
