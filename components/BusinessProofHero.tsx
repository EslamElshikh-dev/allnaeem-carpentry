import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import { businessProofImages } from "@/data/businessProof";

const premises = businessProofImages[0];
const vehicle = businessProofImages[2];

export function BusinessProofHero() {
  return (
    <div
      className="relative mx-auto min-h-[31rem] w-full max-w-xl sm:min-h-[34rem]"
      aria-label="صور أصلية للمقر ومركبة العمل"
    >
      <div className="absolute inset-x-0 top-0 h-[27rem] overflow-hidden rounded-[2rem] border border-white/15 bg-brand-900 shadow-2xl shadow-black/30 sm:inset-x-8 sm:h-[30rem]">
        <Image
          src={premises.src}
          alt={premises.alt}
          fill
          priority
          unoptimized
          sizes="(max-width: 1024px) 92vw, 520px"
          className="object-cover"
          style={{ objectPosition: premises.objectPosition }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/10 to-transparent"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-brand-950/70 px-3 py-1.5 text-[0.68rem] font-black text-wood-300 backdrop-blur">
            <Icon name="shield" className="size-4" />
            صورة أصلية للمقر الفعلي
          </span>
          <p className="mt-3 text-lg font-black text-white sm:text-xl">
            لافتة النشاط في حي المصيف بالرياض
          </p>
          <p className="mt-1 text-xs leading-6 text-white/70">
            الاسم ورقم التواصل متطابقان مع بيانات الموقع.
          </p>
        </div>
      </div>

      <Link
        href="/gallery"
        className="group absolute bottom-0 left-0 h-40 w-[62%] overflow-hidden rounded-[1.4rem] border-4 border-brand-950 bg-brand-900 shadow-2xl shadow-black/35 transition hover:-translate-y-1 sm:h-44 sm:w-[58%]"
        aria-label="عرض صور مركبة العمل وبقية صور النشاط"
      >
        <Image
          src={vehicle.src}
          alt={vehicle.alt}
          fill
          unoptimized
          sizes="(max-width: 640px) 58vw, 290px"
          className="object-cover transition duration-500 group-hover:scale-105"
          style={{ objectPosition: vehicle.objectPosition }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-3">
          <span className="text-xs font-black text-white sm:text-sm">
            مركبة العمل المعلّمة
          </span>
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white text-brand-950 transition group-hover:-translate-x-1">
            <Icon name="arrow-left" className="size-4" />
          </span>
        </div>
      </Link>

      <div className="absolute bottom-9 right-0 z-10 max-w-[11rem] rounded-2xl border border-white/15 bg-white/95 p-3 text-brand-950 shadow-2xl shadow-black/25 backdrop-blur sm:right-2 sm:max-w-[12rem] sm:p-4">
        <div className="flex items-center gap-2">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-950 text-wood-300">
            <Icon name="check" className="size-5" />
          </span>
          <div>
            <p className="text-[0.66rem] font-bold text-slate-500">
              أدلة واقعية
            </p>
            <p className="mt-0.5 text-xs font-black leading-5">
              مقر، لافتة ومركبة عمل
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
