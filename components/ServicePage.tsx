import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  PHONE_E164,
  SITE_URL,
  buildWhatsAppUrl,
} from "@/data/site";
import type { Service } from "@/data/services";
import {
  BUSINESS_ID,
  createBreadcrumbSchema,
  createSchemaGraph,
  createWebPageSchema,
} from "@/data/structured-data";

type ServicePageProps = {
  service: Service;
};

export function ServicePage({ service }: ServicePageProps) {
  const pageUrl = `${SITE_URL}/services/${service.slug}`;
  const pageId = `${pageUrl}#webpage`;
  const serviceId = `${pageUrl}#service`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  const serviceSchema = {
    "@type": "Service",
    "@id": serviceId,
    name: service.name,
    serviceType: service.shortName,
    description: service.metaDescription,
    url: pageUrl,
    areaServed: {
      "@type": "City",
      name: "الرياض",
    },
    provider: {
      "@id": BUSINESS_ID,
    },
    mainEntityOfPage: { "@id": pageId },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: buildWhatsAppUrl(service.whatsappMessage),
      servicePhone: {
        "@type": "ContactPoint",
        telephone: PHONE_E164,
        contactType: "customer service",
        areaServed: "SA",
        availableLanguage: ["Arabic"],
      },
    },
  };

  const breadcrumbSchema = createBreadcrumbSchema(
    [
      { name: "الرئيسية", url: SITE_URL },
      { name: "الخدمات", url: `${SITE_URL}/#services` },
      { name: service.shortName, url: pageUrl },
    ],
    breadcrumbId,
  );

  const structuredData = createSchemaGraph([
    createWebPageSchema({
      id: pageId,
      url: pageUrl,
      name: service.pageTitle,
      description: service.metaDescription,
      breadcrumbId,
      aboutId: serviceId,
    }),
    serviceSchema,
    breadcrumbSchema,
  ]);

  return (
    <>
      <JsonLd data={structuredData} />

      <main>
        <section className="service-hero relative overflow-hidden bg-brand-950 text-white">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />

        <div className="container-shell relative grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.75fr] lg:py-24">
          <div>
            <Breadcrumbs
              inverted
              items={[
                { label: "الرئيسية", href: "/" },
                { label: "الخدمات", href: "/#services" },
                { label: service.shortName },
              ]}
            />
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-extrabold text-wood-300 backdrop-blur">
              <Icon name="sparkles" className="size-4" />
              {service.eyebrow}
            </div>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-black leading-[1.35] sm:text-5xl lg:text-6xl">
              {service.name}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg sm:leading-9">
              {service.heroDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={buildWhatsAppUrl(service.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                className="button-accent min-h-13 px-6"
              >
                <Icon name="whatsapp" className="size-6" />
                اطلب الخدمة عبر واتساب
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 text-sm font-extrabold text-white transition hover:bg-white/10"
              >
                بيانات التواصل
                <Icon name="arrow-left" className="size-5" />
              </Link>
            </div>
          </div>

          <Reveal className="relative mx-auto w-full max-w-md" delay={120}>
            <div className="service-hero-visual">
              <div className="service-hero-ring service-hero-ring-one" />
              <div className="service-hero-ring service-hero-ring-two" />
              <div className="service-icon-cube service-icon-cube-large">
                <Icon name={service.icon} className="size-20" />
              </div>
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-brand-950/70 p-4 text-center backdrop-blur-xl">
                <p className="text-xs font-bold text-white/60">الخدمة متاحة داخل</p>
                <p className="mt-1 text-lg font-black text-white">مدينة الرياض</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-black/5 bg-white py-8">
        <div className="container-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {service.highlights.map((highlight, index) => (
            <Reveal key={highlight} delay={index * 70}>
              <div className="flex min-h-20 items-center gap-3 rounded-2xl border border-brand-900/10 bg-sand-50 p-4">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-950 text-white">
                  <Icon name="check" className="size-4" />
                </span>
                <p className="text-sm font-extrabold leading-6 text-brand-950">
                  {highlight}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

        <section className="section-space bg-sand-50">
          <div className="container-shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-start">
            <div className="space-y-8">
              {service.sections.map((section, index) => (
                <Reveal key={section.title} delay={index * 80}>
                  <article className="content-panel">
                    <span className="mb-5 grid size-11 place-items-center rounded-2xl bg-brand-100 text-brand-800">
                      <Icon
                        name={index === 0 ? service.icon : index === 1 ? "ruler" : "map-pin"}
                        className="size-5"
                      />
                    </span>
                    <h2 className="text-2xl font-black leading-10 text-brand-950 sm:text-3xl">
                      {section.title}
                    </h2>
                    <div className="mt-5 space-y-4 text-base leading-8 text-slate-650">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {section.bullets && (
                      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 rounded-xl bg-sand-50 p-3 text-sm font-bold leading-7 text-brand-950"
                          >
                            <Icon
                              name="check"
                              className="mt-1 size-4 shrink-0 text-wood-600"
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>

            <aside className="lg:sticky lg:top-32">
              <Reveal delay={120}>
                <div className="rounded-[1.75rem] bg-brand-950 p-6 text-white shadow-2xl shadow-brand-950/15">
                  <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-wood-300">
                    <Icon name="whatsapp" className="size-6" />
                  </span>
                  <h2 className="mt-5 text-xl font-black">هل لديك صور أو مقاسات؟</h2>
                  <p className="mt-3 text-sm leading-7 text-white/65">
                    أرسلها عبر واتساب مع اسم الحي للحصول على تقييم أولي وتحديد الخطوة المناسبة.
                  </p>
                  <a
                    href={buildWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noreferrer"
                    className="button-accent mt-6 min-h-12 w-full"
                  >
                    إرسال التفاصيل
                    <Icon name="arrow-left" className="size-5" />
                  </a>
                </div>
              </Reveal>
            </aside>
          </div>
        </section>

        <section className="section-space bg-white">
          <div className="container-shell">
            <Reveal>
              <SectionHeading
                eyebrow="طريقة العمل"
                title={`خطوات تنفيذ ${service.shortName}`}
                description="خطوات واضحة تساعد على تثبيت المقاسات والتفاصيل قبل التنفيذ وتقليل التعديلات غير المتوقعة."
                align="center"
              />
            </Reveal>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <Reveal key={step.title} delay={index * 80}>
                  <article className="process-card">
                    <div className="flex items-center justify-between">
                      <span className="grid size-11 place-items-center rounded-2xl bg-brand-950 text-sm font-black text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-gradient-to-l from-brand-900/15 to-transparent" />
                    </div>
                    <h3 className="mt-5 text-lg font-black text-brand-950">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space bg-sand-50" id="faq">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <SectionHeading
                  eyebrow="الأسئلة الشائعة"
                  title={`أسئلة عن ${service.shortName} في الرياض`}
                  description="إجابات مباشرة عن المعاينة والمقاسات والتنفيذ، مع بقاء التقييم النهائي مرتبطاً بحالة الموقع ونطاق العمل."
                />
              </div>
            </Reveal>

            <div className="space-y-3">
              {service.faq.map((item, index) => (
                <Reveal key={item.question} delay={index * 60}>
                  <details className="faq-item group">
                    <summary>
                      <span>{item.question}</span>
                      <span className="faq-icon" aria-hidden="true">
                        <Icon name="chevron-down" className="size-5" />
                      </span>
                    </summary>
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-950 py-14 text-white sm:py-16">
          <div className="container-shell flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-extrabold text-wood-300">ابدأ بخطوة بسيطة</p>
              <h2 className="mt-3 text-3xl font-black leading-[1.5] sm:text-4xl">
                أرسل صور الموقع واطلب {service.shortName}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">
                نراجع المعلومات الأولية ثم نحدد الحاجة إلى المعاينة ورفع المقاسات داخل الرياض.
              </p>
            </div>
            <a
              href={buildWhatsAppUrl(service.whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="button-accent min-h-13 w-full shrink-0 px-7 sm:w-auto"
            >
              <Icon name="whatsapp" className="size-6" />
              تواصل الآن
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
