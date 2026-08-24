import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { businessProofImages } from "@/data/businessProof";

const proofPoints = [
  {
    icon: "home" as const,
    title: "مقر فعلي",
    description: "لافتة ثابتة تحمل اسم النشاط ورقم التواصل في حي المصيف.",
  },
  {
    icon: "shield" as const,
    title: "هوية متطابقة",
    description: "الاسم والهاتف الظاهران في الصور مطابقان لبيانات الموقع.",
  },
  {
    icon: "hammer" as const,
    title: "خدمة ميدانية",
    description: "مركبة عمل معلّمة للتنقل وتقديم خدمات النجارة داخل الرياض.",
  },
];

export function BusinessProofShowcase() {
  const [premises, signage, vehicle] = businessProofImages;

  return (
    <section className="section-space bg-white" id="business-proof">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="صور أصلية للنشاط"
            title="مقر واضح، لافتة مطابقة ومركبة عمل معلّمة"
            description="اخترنا أقوى الصور التي توضّح وجود النشاط فعليًا في حي المصيف وتطابق الاسم ورقم التواصل. تم تحسين الإضاءة والوضوح وضغط الملفات للويب فقط دون تغيير محتوى الصور."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-stretch">
          <Reveal>
            <div className="grid min-h-[34rem] gap-4 sm:grid-cols-2 sm:grid-rows-2">
              <figure className="group relative min-h-[22rem] overflow-hidden rounded-[1.8rem] border border-brand-900/10 bg-brand-950 shadow-xl shadow-brand-950/10 sm:row-span-2 sm:min-h-0">
                <Image
                  src={premises.src}
                  alt={premises.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: premises.objectPosition }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/10 to-transparent"
                  aria-hidden="true"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <span className="inline-flex rounded-full bg-wood-400 px-3 py-1 text-[0.66rem] font-black text-brand-950">
                    {premises.category}
                  </span>
                  <h3 className="mt-3 text-lg font-black">
                    {premises.title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-white/70">
                    {premises.description}
                  </p>
                </figcaption>
              </figure>

              {[vehicle, signage].map((image) => (
                <figure
                  key={image.src}
                  className="group relative min-h-[16rem] overflow-hidden rounded-[1.6rem] border border-brand-900/10 bg-brand-950 shadow-lg shadow-brand-950/10 sm:min-h-0"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 28vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    style={{ objectPosition: image.objectPosition }}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <span className="text-[0.66rem] font-black text-wood-300">
                      {image.category}
                    </span>
                    <h3 className="mt-1 text-sm font-black sm:text-base">
                      {image.title}
                    </h3>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col rounded-[1.8rem] bg-brand-950 p-6 text-white shadow-2xl shadow-brand-950/15 sm:p-8">
              <span className="grid size-14 place-items-center rounded-2xl bg-white/10 text-wood-300">
                <Icon name="shield" className="size-7" />
              </span>
              <h2 className="mt-6 text-2xl font-black leading-[1.55] sm:text-3xl">
                معلومات مرئية تدعم تطابق بيانات النشاط
              </h2>
              <p className="mt-4 text-sm leading-8 text-white/65">
                الصور الحقيقية للمقر واللافتة ومركبة العمل تساعد العميل ومحركات
                البحث على ربط اسم النشاط ورقم الهاتف والعنوان بالوجود الفعلي
                للنشاط في الرياض.
              </p>

              <div className="mt-7 grid gap-3">
                {proofPoints.map((point) => (
                  <div
                    key={point.title}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-wood-400 text-brand-950">
                      <Icon name={point.icon} className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-black">{point.title}</h3>
                      <p className="mt-1 text-xs leading-6 text-white/60">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/gallery"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-wood-400 px-5 text-sm font-black text-brand-950 transition hover:-translate-y-0.5 hover:bg-wood-300"
              >
                عرض صور النشاط بالحجم الكامل
                <Icon name="arrow-left" className="size-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
