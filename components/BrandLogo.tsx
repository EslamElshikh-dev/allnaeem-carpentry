import Link from "next/link";

import { BUSINESS_NAME } from "@/data/site";

type BrandLogoProps = {
  compact?: boolean;
  inverted?: boolean;
};

export function BrandLogo({ compact = false, inverted = false }: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${BUSINESS_NAME} - الصفحة الرئيسية`}
      className="group inline-flex items-center gap-3"
    >
      <span
        className={`brand-mark ${inverted ? "brand-mark-inverted" : ""}`}
        aria-hidden="true"
      >
        <span className="brand-mark-plank brand-mark-plank-one" />
        <span className="brand-mark-plank brand-mark-plank-two" />
        <span className="brand-mark-notch" />
      </span>
      {!compact && (
        <span className="flex min-w-0 flex-col leading-tight">
          <span
            className={`truncate text-[0.92rem] font-extrabold sm:text-base ${
              inverted ? "text-white" : "text-brand-950"
            }`}
          >
            النعيم للمقاولات
          </span>
          <span
            className={`mt-1 truncate text-[0.66rem] font-semibold sm:text-xs ${
              inverted ? "text-white/65" : "text-brand-700"
            }`}
          >
            وأعمال النجارة
          </span>
        </span>
      )}
    </Link>
  );
}
