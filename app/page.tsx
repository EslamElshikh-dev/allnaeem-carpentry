import type { Metadata } from "next";
import Link from "next/link";

import { BusinessProofHero } from "@/components/BusinessProofHero";
import { BusinessProofShowcase } from "@/components/BusinessProofShowcase";
import { BlogPreview } from "@/components/BlogPreview";
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
  BUSINESS_NAME,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_E164,
  SITE_URL,
  buildWhatsAppUrl,
  defaultWhatsAppMessage,
} from "@/data/site";
import { services } from "@/data/services";
import {
  BUSINESS_ID,
  createSchemaGraph,
  createWebPageSchema,
} from "@/data/structured-data";
import { featuredWorkImage } from "@/data/workProjects";

export const metadata: Metadata = {
  title: { absolute: `${BUSINESS_NAME} | نجار في الرياض` },
  description:
    "النعيم للمقاولات وأعمال النجارة في حي المصيف بالرياض: مقر فعلي ولافتة واضحة، نجارة عامة، تصليح نجارة، تفصيل دواليب وتفصيل خزائن حسب المقاس.",
  alternates: { canonical: "/" },
};

const homeSchema = createSchemaGraph([
  createWebPageSchema({
    id: `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: `${BUSINESS_NAME} | نجار في الرياض`,
    description:
      "النعيم للمقاولات وأعمال النجارة في حي المصيف بالرياض: نجارة عامة، صيانة وتصليح، وتفصيل دواليب وخزائن حسب المقاس.",
    aboutId: BUSINESS_ID,
    primaryImageUrl: `${SITE_URL}${featuredWorkImage.src}`,
  }),
]);

const trustPoints = [
  {
    icon: "ruler" as const,
    title: "قياس قبل التنفيذ",
    description: "مراجعة الأبعاد والحركة ونقاط التثبيت قبل اعتماد العمل.",
  },
  {
    icon: "shield" as const,
    title: "نطاق عمل واضح",
    description: "تحديد الخدمة والخامة والتفاصيل الأساسية قبل بدء التنفيذ.",
  },
  {
    icon: "sparkles" as const,
    title: "تشطيب متناسق",
    description: "عناية بالمحاذاة والاستخدام اليومي والشكل النهائي.",
  },
  {
    icon: "map-pin" as const,
    title: "مقر فعلي بالرياض",
    description: "عنوان ثابت ولافتة واضحة في حي المصيف وخدمة داخل الرياض.",
  },
];

const steps = [
  ["01", "إرسال التفاصيل", "أرسل الصور ونوع العمل والحي والمقاسات التقريبية."],
  ["02", "المعاينة والقياس", "نراجع الموقع ونرفع المقاسات عند الحاجة إلى تفصيل دقيق."],
  ["03", "اعتماد النطاق", "نثبت الخامة والتقسيمات والتشطيب وطريقة التنفيذ."],
  ["04", "التنفيذ والتركيب", "يتم التجهيز والتركيب ثم مراجعة الثبات والحركة."],
] as const;

type ContactActionIconProps = {
  type: "call" | "location";
};

function ContactActionIcon({ type }: ContactActionIconProps) {
  const iconName = type === "call" ? "phone" : "map-pin";

  return (
    <span
      className={`contact-action-icon contact-action-icon-${type}`}
      aria-hidden="true"
    >
      <span className="contact-action-icon-halo" />
      <span className="contact-action-icon-face">
        <Icon name={iconName} className="contact-action-icon-glyph size-7" />
      </span>
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeSchema} />
      <main>
        <section className="relative overflow-hidden bg-brand-950 text-white">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="container-shell relative grid min-h-[690px] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-extrabold text-wood-300 backdrop-blur">
                <Icon name="map-pin" className="size-4" />
                مقر فعلي في حي المصيف وخدمة داخل الرياض
              </div>
              <h1 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.42] sm:text-5xl lg:text-[3.55rem]">
                النعيم للمقاولات
                <span className="block text-wood-300">
                  وأعمال النجارة في الرياض
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
                نجارة عامة، صيانة وتصليح الأعمال الخشبية، وتفصيل الدواليب
                والخزائن حسب المقاس، من مقر فعلي يحمل اسم النشاط ورقم التواصل
                في حي المصيف بالرياض.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={buildWhatsAppUrl(defaultWhatsAppMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="button-accent min-h-13 px-7"
                >
                  <Icon name="whatsapp" className="size-6" />
                  اطلب الخدمة عبر واتساب
                </a>
                <a
                  href={`tel:${PHONE_E164}`}
                  className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 text-sm font-extrabold text-white transition hover:bg-white/10"
                >
                  <Icon name="phone" className="size-5" />
                  اتصال مباشر
                </a>
              </div>
              <dl className="mt-9 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="hero-fact">
                  <dt>الفئة</dt>
                  <dd>{BUSINESS_CATEGORY}</dd>
                </div>
                <div className="hero-fact">
                  <dt>المقر</dt>
                  <dd>حي المصيف</dd>
                </div>
                <div className="hero-fact col-span-2 sm:col-span-1">
                  <dt>نطاق الخدمة</dt>
                  <dd>مدينة الرياض</dd>
                </div>
              </dl>
            </div>

            <Reveal className="relative mx-auto w-full max-w-xl" delay={120}>
              <BusinessProofHero />
            </Reveal>
          </div>
        </section>

        <section className="relative z-10 -mt-7 pb-8">
          <div className="container-shell">
            <Reveal>
              <div className="grid overflow-hidden rounded-[1.75rem] border border-brand-900/10 bg-white shadow-2xl shadow-brand-950/10 md:grid-cols-[1.35fr_0.75fr_0.9fr]">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="entity-proof-item md:border-l md:border-black/5"
                >
                  <Icon
                    name="map-pin"
                    className="size-5 shrink-0 text-wood-600"
                  />
                  <div>
                    <span>العنوان المسجل</span>
                    <strong>{ADDRESS}</strong>
                  </div>
                </a>
                <a
                  href={`tel:${PHONE_E164}`}
                  className="entity-proof-item border-t border-black/5 md:border-l md:border-t-0"
                >
                  <Icon
                    name="phone"
                    className="size-5 shrink-0 text-wood-600"
                  />
                  <div>
                    <span>رقم التواصل</span>
                    <strong dir="ltr">{PHONE_DISPLAY}</strong>
                  </div>
                </a>
                <div className="entity-proof-item border-t border-black/5 md:border-t-0">
                  <Icon
                    name="home"
                    className="size-5 shrink-0 text-wood-600"
                  />
                  <div>
                    <span>اسم النشاط</span>
                    <strong>{BUSINESS_NAME}</strong>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-space bg-sand-50" id="services">
          <div className="container-shell">
            <Reveal>
              <SectionHeading
                eyebrow="خدماتنا"
                title="خدمات نجارة مستقلة لكل احتياج"
                description="اختر الخدمة المناسبة واطّلع على نطاق العمل والأسئلة الشائعة، ثم أرسل الصور والمقاسات الأولية عبر واتساب."
                align="center"
              />
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <Reveal key={service.slug} delay={index * 80}>
                  <ServiceCard service={service} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <BusinessProofShowcase />

        <section className="section-space bg-sand-50">
          <div className="container-shell grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] bg-brand-950 p-7 text-white sm:p-10">
                <div className="hero-grid opacity-30" aria-hidden="true" />
                <div className="relative">
                  <span className="grid size-14 place-items-center rounded-2xl bg-white/10 text-wood-300">
                    <Icon name="ruler" className="size-7" />
                  </span>
                  <p className="mt-7 text-sm font-extrabold text-wood-300">
                    من القياس إلى التركيب
                  </p>
                  <h2 className="mt-3 text-3xl font-black leading-[1.5] sm:text-4xl">
                    تفاصيل عملية تقلل التعديلات أثناء التنفيذ
                  </h2>
                  <p className="mt-5 text-sm leading-8 text-white/65 sm:text-base">
                    نراجع الاستخدام والمقاسات والعوائق وطريقة الفتح قبل اعتماد
                    التفاصيل، لأن جودة القطعة الخشبية تبدأ من القرار الصحيح قبل
                    التصنيع.
                  </p>
                  <Link
                    href="/about"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-white transition hover:text-wood-300"
                  >
                    تعرّف على طريقة عملنا
                    <Icon name="arrow-left" className="size-5" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {trustPoints.map((point, index) => (
                <Reveal key={point.title} delay={index * 70}>
                  <article className="trust-card h-full">
                    <span className="grid size-12 place-items-center rounded-2xl bg-brand-100 text-brand-800">
                      <Icon name={point.icon} className="size-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-black text-brand-950">
                      {point.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {point.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-white">
          <div className="container-shell">
            <Reveal>
              <SectionHeading
                eyebrow="خطوات الطلب"
                title="أربع خطوات من الفكرة إلى التنفيذ"
                description="مسار بسيط لتجميع المعلومات واعتماد التفاصيل قبل بدء أعمال النجارة."
                align="center"
              />
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {steps.map(([number, title, description], index) => (
                <Reveal key={number} delay={index * 80}>
                  <article className="process-card h-full">
                    <span className="text-4xl font-black text-brand-900/10">
                      {number}
                    </span>
                    <h3 className="mt-4 text-lg font-black text-brand-950">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <BlogPreview />

        <section className="section-space bg-sand-50" id="location">
          <div className="container-shell">
            <Reveal>
              <SectionHeading
                eyebrow="الموقع وبيانات النشاط"
                title="مقر النعيم للمقاولات وأعمال النجارة في حي المصيف"
                description={`العنوان: ${ADDRESS_LONG}. افتح الموقع في خرائط Google أو تواصل مباشرة لتنسيق الخدمة داخل الرياض.`}
                align="center"
              />
            </Reveal>
            <Reveal className="mt-8" delay={100}>
              <MapEmbed />
            </Reveal>
          </div>
        </section>

        <section className="section-space bg-white" id="request-service">
          <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <SectionHeading
                  eyebrow="تواصل معنا"
                  title="أرسل تفاصيل العمل الذي تحتاجه"
                  description="كلما كانت الصور والمقاسات واسم الحي أوضح، كان التقييم الأولي أدق قبل تحديد المعاينة."
                />

                <div className="mt-7 space-y-4">
                  <a
                    href={`tel:${PHONE_E164}`}
                    className="contact-quick-link contact-quick-link-call"
                    aria-label={`اتصال مباشر على ${PHONE_DISPLAY}`}
                  >
                    <ContactActionIcon type="call" />
                    <div className="contact-quick-link-copy">
                      <span>اتصال مباشر</span>
                      <strong dir="ltr">{PHONE_DISPLAY}</strong>
                    </div>
                    <span
                      className="contact-quick-link-indicator"
                      aria-hidden="true"
                    >
                      <Icon name="arrow-left" className="size-4" />
                    </span>
                  </a>

                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-quick-link contact-quick-link-location"
                    aria-label={`زيارة موقع النشاط: ${ADDRESS}`}
                  >
                    <ContactActionIcon type="location" />
                    <div className="contact-quick-link-copy">
                      <span>زيارة الموقع</span>
                      <strong>{ADDRESS}</strong>
                    </div>
                    <span
                      className="contact-quick-link-indicator"
                      aria-hidden="true"
                    >
                      <Icon name="external-link" className="size-4" />
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
