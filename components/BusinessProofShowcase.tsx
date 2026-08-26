import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { workProjectImages } from "@/data/workProjects";

export function BusinessProofShowcase() {
  const [featured, ...supporting] = workProjectImages;

  return (
    <section className="section-space bg-white" aria-labelledby="real-work-heading">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="أعمالنا الحقيقية"
            title="نماذج منفذة وصور موثقة أثناء التجهيز"
            description="صور واقعية من أعمال النجارة: نماذج مكتملة، إلى جانب توثيق صريح لمراحل التركيب والتجهيز قبل التسليم النهائي."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.18fr_0.82fr]">
          <Reveal>
            <figure className="group h-full overflow-hidden rounded-[1.8rem] border border-brand-900/10 bg-sand-50 shadow-xl shadow-brand-950/5">
              <div className="relative min-h-[23rem] overflow-hidden bg-brand-950 sm:min-h-[31rem]">
                <Image
                  src={featured.src}
                  alt={featured.alt}
                  fill
                  priority={false}
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.025]"
                  style={{ objectPosition: featured.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
                  <div className="flex flex-wrap gap-2 text-[0.68rem] font-black">
                    <span className="rounded-full bg-wood-300 px-3 py-1.5 text-brand-950">{featured.status}</span>
                    <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 backdrop-blur">{featured.category}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-black sm:text-2xl">{featured.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-white/75">{featured.description}</p>
                </div>
              </div>
            </figure>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {supporting.slice(0, 3).map((image, index) => (
              <Reveal key={image.src} delay={(index + 1) * 70}>
                <figure className="group grid h-full grid-cols-[7.5rem_1fr] overflow-hidden rounded-[1.45rem] border border-brand-900/10 bg-sand-50 shadow-lg shadow-brand-950/5 sm:grid-cols-1 lg:grid-cols-[8rem_1fr]">
                  <div className="relative min-h-40 overflow-hidden bg-brand-950 sm:min-h-48 lg:min-h-40">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 34vw, (max-width: 1024px) 50vw, 16vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      style={{ objectPosition: image.objectPosition }}
                    />
                  </div>
                  <figcaption className="flex flex-col justify-center p-4 sm:p-5">
                    <div className="flex flex-wrap gap-2 text-[0.62rem] font-black">
                      <span className="rounded-full bg-brand-100 px-2.5 py-1 text-brand-800">{image.category}</span>
                      <span className="rounded-full bg-white px-2.5 py-1 text-slate-600">{image.status}</span>
                    </div>
                    <h3 className="mt-3 text-base font-black leading-7 text-brand-950">{image.title}</h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-6 text-slate-600">{image.description}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-8" delay={120}>
          <div className="flex flex-col items-center justify-between gap-4 rounded-[1.5rem] bg-brand-950 p-5 text-center text-white sm:flex-row sm:text-right">
            <div>
              <p className="text-sm font-black text-wood-300">المعرض الكامل</p>
              <p className="mt-1 text-sm leading-7 text-white/70">يشمل الأعمال المنفذة، مراحل التجهيز، وصور المقر والهوية الميدانية.</p>
            </div>
            <Link href="/gallery" className="button-primary min-h-12 shrink-0 px-5 text-sm">
              <Icon name="sparkles" className="size-5" />
              شاهد جميع الصور
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
