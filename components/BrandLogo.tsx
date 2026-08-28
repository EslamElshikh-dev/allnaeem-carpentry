import Link from "next/link";
import { BUSINESS_NAME } from "@/data/site";

type BrandLogoProps = { compact?: boolean; inverted?: boolean };

export function BrandLogo({ compact = false, inverted = false }: BrandLogoProps) {
  return (
    <Link href="/" aria-label={`${BUSINESS_NAME} - الصفحة الرئيسية`} className="group inline-flex items-center gap-3">
      <span className={`grid size-11 shrink-0 place-items-center rounded-2xl border ${inverted ? "border-white/15 bg-white/10 text-wood-300" : "border-brand-900/10 bg-brand-950 text-wood-300"}`} aria-hidden="true">
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="13" height="5" rx="1.5" />
          <path d="M16 6.5h2a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-5" />
          <path d="M13 11v9" />
          <path d="M10.5 20h5" />
        </svg>
      </span>
      {!compact && <span className="flex min-w-0 flex-col leading-tight"><span className={`truncate text-[0.92rem] font-extrabold sm:text-base ${inverted ? "text-white" : "text-brand-950"}`}>دهانات ديكورات</span><span className={`mt-1 truncate text-[0.66rem] font-semibold sm:text-xs ${inverted ? "text-white/65" : "text-brand-700"}`}>ورق جدران • الرياض</span></span>}
    </Link>
  );
}
