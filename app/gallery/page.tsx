import type { Metadata } from "next";
import Image from "next/image";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { businessProofImages, socialProofImage } from "@/data/businessProof";
import {
  ADDRESS,
  BUSINESS_NAME,
  MAPS_URL,
  PHONE_E164,
  SITE_URL,
  buildWhatsAppUrl,
  defaultWhatsAppMessage,
} from "@/data/site";

export const metadata: Metadata = {
  title: "صور المقر واللافتة ومركبة العمل",
  description:
    "صور أصلية لمقر النعيم للمقاولات وأعمال النجارة في حي المصيف، ولافتة النشاط، ومركبة العمل المعلّمة في الرياض.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: `صور النشاط | ${BUSINESS_NAME}`,
    description:
      "معرض صور أصلية للمقر واللافتة ومركبة العمل المعلّمة في الرياض.",
    url: `${SITE_URL}/gallery`,
    images: [
      {
        url: socialProofImage,
        width: 360,
        height: 640,
        alt: `صور أصلية من ${BUSINESS_NAME}`,
      },
    ],
  },
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "@id": `${SITE_URL}/gallery#image-gallery`,
  name: `صور ${BUSINESS_NAME}`,
  description:
    "صور أصلية للمقر الفعلي واللافتة ومركبة العمل المعلّمة في مدينة الرياض.",
  url: `${SITE_URL}/gallery`,
  about: { "@id": `${SITE_URL}/#business` },
  inLanguage: "ar-SA",
  image: businessProofImages.map((image, index) => ({
    "@type": "ImageObject",
    "@id": `${SITE_URL}/gallery#image-${index + 1}`,
    contentUrl: `${SITE_URL}${image.src}`,
    url: `${SITE_URL}${image.src}`,
    name: image.title,
    caption: image.description,
    description: image.alt,
    width: image.width,
    height: image.height,
    representativeOfPage: index === 0,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "الرئيسية",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "صور النشاط",
      item: `${SITE_URL}/gallery`,
    },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={gallerySchema} />
      <JsonLd data={breadcrumbSchema} />
      <main>
        <section className="relative overflow-hidden bg-brand-950 py-14 text-white sm:py-16">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="container-shell relative">
            <Breadcrumbs
              inverted
              items={[
                { label: "الرئيسية", href: "/" },
                { label: "صور النشاط" },
              ]}
            />
            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <div>
                <span className="section-eyebrow section-eyebrow-inverted">
                  صور أصلية وواقعية
                </span>
                <h1 className="mt-5 max-w-4xl text-3xl font-black leading-[1.5] sm:text-4xl lg:text-5xl">
                  صور المقر واللافتة ومركبة العمل
                </h1>
                <p className="mt-5 max-w-3xl text-sm leading-8 text-white/70 sm:text-base">
                  توثيق بصري واقعي لنشاط {BUSINESS_NAME} في الرياض. تم تحسين
                  الإضاءة والوضوح وضغط الملفات للويب فقط، دون تغيير محتوى الصور
                  أو إضافة عناصر غير موجودة فيها.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
                <p className="text-xs font-black text-wood-300">العنوان المسجل</p>
                <p className="mt-2 text-sm font-bold leading-7 text-white/85">
                  {ADDRESS}
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 text-xs font-extrabold transition hover:bg-white/10"
                  >
                    <Icon name="map-pin" className="size-4" />
                    فتح الموقع
                  </a>
                  <a
                    href={`tel:${PHONE_E164}`}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-wood-400 px-4 text-xs font-black text-brand-950 transition hover:bg-wood-300"
                  >
                    <Icon name="phone" className="size-4" />
                    اتصال مباشر
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-sand-50">
          <div className="container-shell">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="section-eyebrow">معرض النشاط</span>
                <h2 className="section-title text-brand-950">
                  أدلة مرئية على هوية النشاط ووجوده الميداني
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  تشمل الصور المقر الفعلي واللافتة الثابتة ومركبة العمل التي
                  تحمل اسم النشاط ورقم الهاتف المطابقين لبيانات الموقع.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {businessProofImages.map((image, index) => (
                <Reveal key={image.src} delay={(index % 3) * 80}>
                  <figure className="group h-full overflow-hidden rounded-[1.6rem] border border-brand-900/10 bg-white shadow-lg shadow-brand-950/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-950/10">
                    <div className="relative aspect-[4/3] overflow-hidden bg-brand-950">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        priority={index === 0}
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                        style={{ objectPosition: image.objectPosition }}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-brand-950/55 via-transparent to-transparent"
                        aria-hidden="true"
                      />
                      <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-brand-950/70 px-3 py-1.5 text-[0.66rem] font-black text-white backdrop-blur">
                        {image.category}
                      </span>
                    </div>
                    <figcaption className="p-5">
                      <h3 className="text-lg font-black text-brand-950">
                        {image.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {image.description}
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10" delay={100}>
              <div className="grid gap-6 rounded-[1.8rem] bg-brand-950 p-6 text-white sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-black text-wood-300">
                    <Icon name="shield" className="size-5" />
                    صور النشاط الحقيقي
                  </span>
                  <h2 className="mt-3 text-2xl font-black leading-[1.5]">
                    تواصل لتنسيق المعاينة أو زيارة المقر
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-white/65">
                    أرسل نوع العمل والصور والمقاسات الأولية عبر واتساب، أو افتح
                    الموقع في خرائط Google للوصول إلى المقر في حي المصيف.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a
                    href={buildWhatsAppUrl(defaultWhatsAppMessage)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25d366] px-5 text-sm font-black text-white transition hover:-translate-y-0.5"
                  >
                    <Icon name="whatsapp" className="size-5" />
                    تواصل واتساب
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 text-sm font-extrabold transition hover:bg-white/10"
                  >
                    <Icon name="map-pin" className="size-5" />
                    زيارة المقر
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
