import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import { featuredWorkImage, workProjectImages } from "@/data/workProjects";

export function BusinessProofHero() {
  const mirroredWardrobe = workProjectImages[1];

  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none">
      <div className="absolute -inset-5 rounded-[2.2rem] bg-gradient-to-br from-wood-300/25 via-transparent to-brand-600/20 blur-2xl" aria-hidden="true" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-brand-950 p-2.5 shadow-2xl shadow-black/25 sm:p-3">
        <Link
          href="/gallery"
          className="group relative block aspect-[4/3] overflow-hidden rounded-[1.55rem] bg-brand-900"
          aria-label="شاهد أعمال النعيم للمقاولات وأعمال النجارة الحقيقية"
        >
          <Image
            src={featuredWorkImage.src}
            alt={featuredWorkImage.alt}
            fill
            priority
            unoptimized
            sizes="(max-width: 1024px) 92vw, 48vw"
            className="object-cover transition duration-700 group-hover:scale-[1.035]"
            style={{ objectPosition: featuredWorkImage.objectPosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/10 to-transparent" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <div className="flex flex-wrap items-center gap-2 text-[0.68rem] font-black">
              <span className="rounded-full bg-wood-300 px-3 py-1.5 text-brand-950">{featuredWorkImage.status}</span>
              <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-white backdrop-blur">{featuredWorkImage.category}</span>
            </div>
            <h2 className="mt-3 text-xl font-black leading-8 text-white sm:text-2xl">{featuredWorkImage.title}</h2>
          </div>
        </Link>

        <div className="mt-2.5 grid grid-cols-[0.82fr_1.18fr] gap-2.5 sm:mt-3 sm:gap-3">
          <Link href="/gallery" className="group relative min-h-40 overflow-hidden rounded-[1.35rem] bg-brand-900 sm:min-h-44">
            <Image
              src={mirroredWardrobe.src}
              alt={mirroredWardrobe.alt}
              fill
              unoptimized
              sizes="(max-width: 1024px) 42vw, 20vw"
              className="object-cover transition duration-700 group-hover:scale-[1.04]"
              style={{ objectPosition: mirroredWardrobe.objectPosition }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-transparent to-transparent" aria-hidden="true" />
            <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-[0.63rem] font-black text-brand-950">عمل منجز</span>
          </Link>

          <Link
            href="/gallery"
            className="group flex min-h-40 flex-col justify-between rounded-[1.35rem] border border-white/10 bg-white/[0.07] p-4 text-white backdrop-blur transition hover:bg-white/[0.11] sm:min-h-44 sm:p-5"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-wood-300 text-brand-950">
              <Icon name="shield" className="size-5" />
            </span>
            <div>
              <p className="text-xs font-black text-wood-300">صور حقيقية من مواقع العمل</p>
              <p className="mt-2 text-sm font-extrabold leading-6 text-white">شاهد الأعمال المنجزة ومراحل التنفيذ كما هي على أرض الواقع.</p>
              <span className="mt-3 inline-flex items-center gap-2 text-xs font-black text-white/80 transition group-hover:text-white">
                شاهد أعمالنا الحقيقية
                <Icon name="arrow-left" className="size-4" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
