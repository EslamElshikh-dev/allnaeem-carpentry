import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { MapEmbed } from "@/components/MapEmbed";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import {
  ADDRESS,
  ADDRESS_LONG,
  BUSINESS_CATEGORY,
  BUSINESS_DESCRIPTION,
  BUSINESS_NAME,
  COORDINATES,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_E164,
  SITE_URL,
  buildWhatsAppUrl,
  defaultWhatsAppMessage,
} from "@/data/site";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: { absolute: "دهانات ديكورات ورق جدران | أفضل مقاول دهانات وورشة دهانات بالرياض" },
  description: BUSINESS_DESCRIPTION,
  alternates: { canonical: "/" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "HousePainter"],
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS_NAME,
  description: BUSINESS_DESCRIPTION,
  category: BUSINESS_CATEGORY,
  url: SITE_URL,
  telephone: PHONE_E164,
  hasMap: MAPS_URL,
  sameAs: [MAPS_URL],
  address: {
    "@type": "PostalAddress",
    streetAddress: "3884 يحيى بن عميرة، 6814، حي المصيف",
    addressLocality: "الرياض",
    addressRegion: "منطقة الرياض",
    postalCode: "12466",
    addressCountry: "SA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: COORDINATES.latitude,
    longitude: COORDINATES.longitude,
  },
  areaServed: { "@type": "City", name: "الرياض" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE_E164,
    contactType: "customer service",
    areaServed: "SA",
    availableLanguage: ["Arabic"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "خدمات الدهانات والديكور وورق الجدران",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.shortName,
        url: `${SITE_URL}/services/${service.slug}`,
      },
    })),
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: BUSINESS_NAME,
  inLanguage: "ar-SA",
  publisher: { "@id": `${SITE_URL}/#business` },
};

const trustPoints = [
  ["ruler", "فحص وتجهيز السطح", "نراجع حالة الجدار قبل تحديد المعجون أو الصنفرة أو البرايمر."],
  ["sparkles", "اختيار تشطيب مناسب", "ننسق اللون أو ورق الجدران مع الإضاءة والأثاث واستخدام المكان."],
  ["shield", "نطاق عمل واضح", "نحدد المساحات والمواد وخطوات التنفيذ قبل بدء العمل."],
  ["map-pin", "عنوان فعلي بالرياض", "بيانات الاسم والعنوان والهاتف موحدة في الموقع والخريطة."],
] as const;

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={websiteSchema} />
      <main>
        <section className="relative overflow-hidden bg-brand-950 text-white">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="container-shell relative grid min-h-[690px] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-extrabold text-wood-300 backdrop-blur">
                <Icon name="map-pin" className="size-4" />
                مقاول دهانات في حي المصيف وخدمة داخل الرياض
              </div>
              <h1 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.42] sm:text-5xl lg:text-[3.55rem]">
                دهانات ديكورات ورق جدران
                <span className="block text-wood-300">مقاول دهانات بالرياض</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
                دهانات داخلية وخارجية، تركيب ورق جدران، دهانات ديكورية، تجهيز ومعجون الجدران وتجديد دهانات المنازل والمكاتب، مع بيانات نشاط واضحة وعنوان فعلي في حي المصيف بالرياض.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={buildWhatsAppUrl(defaultWhatsAppMessage)} target="_blank" rel="noreferrer" className="button-accent min-h-13 px-7"><Icon name="whatsapp" className="size-6" />اطلب معاينة عبر واتساب</a>
                <a href={`tel:${PHONE_E164}`} className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 text-sm font-extrabold text-white transition hover:bg-white/10"><Icon name="phone" className="size-5" />اتصال مباشر</a>
              </div>
              <dl className="mt-9 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="hero-fact"><dt>الفئة</dt><dd>{BUSINESS_CATEGORY}</dd></div>
                <div className="hero-fact"><dt>المقر</dt><dd>حي المصيف</dd></div>
                <div className="hero-fact col-span-2 sm:col-span-1"><dt>نطاق الخدمة</dt><dd>مدينة الرياض</dd></div>
              </dl>
            </div>

            <Reveal className="relative mx-auto w-full max-w-xl" delay={120}>
              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                <div className="absolute -left-16 -top-16 size-56 rounded-full bg-wood-300/20 blur-3xl" />
                <div className="relative">
                  <span className="grid size-16 place-items-center rounded-2xl bg-wood-300 text-brand-950"><Icon name="sparkles" className="size-8" /></span>
                  <p className="mt-6 text-sm font-extrabold text-wood-300">هوية نشاط واضحة وقابلة للتحقق</p>
                  <h2 className="mt-3 text-3xl font-black leading-[1.5]">دهانات وتشطيبات جدران تبدأ من تجهيز السطح</h2>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {[["دهانات داخلية", "غرف • مجالس • شقق"], ["ورق جدران", "تركيب وضبط النقشة"], ["دهانات خارجية", "واجهات وأسوار"], ["ديكورات جدارية", "ألوان وتأثيرات"]].map(([title, text]) => (
                      <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4"><strong className="block text-white">{title}</strong><span className="mt-1 block text-xs leading-6 text-white/55">{text}</span></div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative z-10 -mt-7 pb-8">
          <div className="container-shell"><Reveal><div className="grid overflow-hidden rounded-[1.75rem] border border-brand-900/10 bg-white shadow-2xl shadow-brand-950/10 md:grid-cols-[1.35fr_0.75fr_0.9fr]">
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="entity-proof-item md:border-l md:border-black/5"><Icon name="map-pin" className="size-5 shrink-0 text-wood-600" /><div><span>العنوان</span><strong>{ADDRESS}</strong></div></a>
            <a href={`tel:${PHONE_E164}`} className="entity-proof-item border-t border-black/5 md:border-l md:border-t-0"><Icon name="phone" className="size-5 shrink-0 text-wood-600" /><div><span>رقم التواصل</span><strong dir="ltr">{PHONE_DISPLAY}</strong></div></a>
            <div className="entity-proof-item border-t border-black/5 md:border-t-0"><Icon name="home" className="size-5 shrink-0 text-wood-600" /><div><span>اسم النشاط</span><strong>{BUSINESS_NAME}</strong></div></div>
          </div></Reveal></div>
        </section>

        <section className="section-space bg-sand-50" id="services"><div className="container-shell"><Reveal><SectionHeading eyebrow="خدماتنا" title="أهم خدمات الدهانات والديكور المطلوبة في الرياض" description="لكل خدمة صفحة مستقلة غنية بالمحتوى، نطاق العمل، خطوات التنفيذ والأسئلة الشائعة." align="center" /></Reveal><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{services.map((service, index) => <Reveal key={service.slug} delay={index * 55}><ServiceCard service={service} /></Reveal>)}</div></div></section>

        <section className="section-space bg-white"><div className="container-shell"><Reveal><SectionHeading eyebrow="طريقة العمل" title="من تقييم الجدار إلى التشطيب النهائي" description="مسار واضح يقلل المفاجآت ويربط جودة اللون أو ورق الجدران بجودة تجهيز السطح." align="center" /></Reveal><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{trustPoints.map(([icon,title,description],index)=><Reveal key={title} delay={index*70}><article className="trust-card h-full"><span className="grid size-12 place-items-center rounded-2xl bg-brand-100 text-brand-800"><Icon name={icon} className="size-6" /></span><h2 className="mt-5 text-lg font-black text-brand-950">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{description}</p></article></Reveal>)}</div></div></section>

        <section className="section-space bg-sand-50"><div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"><Reveal><div><SectionHeading eyebrow="اطلب الخدمة" title="أرسل صور الجدران وحدد الخدمة المطلوبة" description="يمكنك إرسال تفاصيل الموقع عبر النموذج ليتم فتح رسالة واتساب منظمة." /><div className="mt-6 rounded-[1.75rem] bg-brand-950 p-6 text-white"><p className="text-sm font-extrabold text-wood-300">بيانات النشاط</p><p className="mt-3 text-lg font-black">{BUSINESS_NAME}</p><p className="mt-3 text-sm leading-7 text-white/65">{ADDRESS_LONG}</p><a href={`tel:${PHONE_E164}`} className="mt-4 inline-flex items-center gap-2 font-bold" dir="ltr"><Icon name="phone" className="size-5" />{PHONE_DISPLAY}</a></div></div></Reveal><Reveal delay={100}><ContactForm /></Reveal></div></section>

        <section className="section-space bg-white"><div className="container-shell"><Reveal><SectionHeading eyebrow="موقع النشاط" title="حي المصيف، الرياض" description={ADDRESS_LONG} align="center" /></Reveal><Reveal className="mt-8" delay={100}><MapEmbed /></Reveal></div></section>

        <section className="bg-brand-950 py-14 text-white"><div className="container-shell flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center"><div><p className="text-sm font-extrabold text-wood-300">تواصل مباشر</p><h2 className="mt-3 text-3xl font-black leading-[1.5] sm:text-4xl">ابدأ بصور الموقع والخدمة المطلوبة</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">نراجع المعلومات الأولية ونحدد الحاجة إلى المعاينة داخل الرياض.</p></div><div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"><a href={buildWhatsAppUrl(defaultWhatsAppMessage)} target="_blank" rel="noreferrer" className="button-accent min-h-13 px-7"><Icon name="whatsapp" className="size-6" />واتساب</a><Link href="/contact" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 text-sm font-extrabold text-white">بيانات التواصل<Icon name="arrow-left" className="size-5" /></Link></div></div></section>
      </main>
    </>
  );
}
