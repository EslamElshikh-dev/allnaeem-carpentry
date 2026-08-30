import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ADDRESS,
  BUSINESS_CATEGORY,
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_E164,
  SITE_URL,
  buildWhatsAppUrl,
  defaultWhatsAppMessage,
} from "@/data/site";
import { services } from "@/data/services";
import {
  BUSINESS_ID,
  createBreadcrumbSchema,
  createSchemaGraph,
  createWebPageSchema,
} from "@/data/structured-data";

export const metadata: Metadata = {
  title: "من نحن | أعمال نجارة منظمة في الرياض",
  description:
    "تعرف على النعيم للمقاولات وأعمال النجارة وطريقة العمل التي تبدأ بفهم الاحتياج والقياس وتنتهي بالتركيب والمراجعة داخل الرياض.",
  alternates: { canonical: "/about" },
};

const aboutUrl = `${SITE_URL}/about`;
const aboutDescription =
  "تعرف على النعيم للمقاولات وأعمال النجارة وطريقة العمل التي تبدأ بفهم الاحتياج والقياس وتنتهي بالتركيب والمراجعة داخل الرياض.";
const aboutBreadcrumbId = `${aboutUrl}#breadcrumb`;
const aboutSchema = createSchemaGraph([
  createWebPageSchema({
    id: `${aboutUrl}#webpage`,
    url: aboutUrl,
    name: `من نحن | ${BUSINESS_NAME}`,
    description: aboutDescription,
    type: "AboutPage",
    breadcrumbId: aboutBreadcrumbId,
    aboutId: BUSINESS_ID,
  }),
  createBreadcrumbSchema(
    [
      { name: "الرئيسية", url: SITE_URL },
      { name: "من نحن", url: aboutUrl },
    ],
    aboutBreadcrumbId,
  ),
]);

const values = [
  ["ruler", "الدقة في القياس", "نراجع الأبعاد ونقاط الحركة والتثبيت قبل اعتماد تفاصيل العمل."],
  ["users", "فهم احتياج العميل", "نحدد طريقة الاستخدام الفعلية قبل اقتراح التقسيم أو الخامة."],
  ["shield", "وضوح نطاق العمل", "نثبت التفاصيل الأساسية قبل التنفيذ لتقليل الاختلافات غير المتوقعة."],
  ["sparkles", "مراجعة التشطيب", "نهتم بالمحاذاة والثبات وسهولة الفتح والإغلاق والشكل النهائي."],
] as const;

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <main>
        <section className="relative overflow-hidden bg-brand-950 text-white">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="container-shell relative py-16 lg:py-24">
            <Breadcrumbs inverted items={[{ label: "الرئيسية", href: "/" }, { label: "من نحن" }]} />
            <div className="mt-8 max-w-4xl">
              <span className="section-eyebrow section-eyebrow-inverted">عن المؤسسة</span>
              <h1 className="mt-5 text-balance text-4xl font-black leading-[1.45] sm:text-5xl lg:text-6xl">نجارة مدروسة تبدأ من المساحة وتنتهي باستخدام أفضل</h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg sm:leading-9">{BUSINESS_NAME} تقدم خدمات النجارة العامة والصيانة وتفصيل الدواليب والخزائن داخل الرياض، مع اهتمام بالقياس والتقسيمات العملية والتشطيب المتناسق مع المكان.</p>
            </div>
          </div>
        </section>

        <section className="section-space bg-white"><div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal><div><SectionHeading eyebrow="من نحن" title={BUSINESS_NAME} description="نحوّل الاحتياج إلى حل خشبي واضح المقاسات والتفاصيل، سواء كان المطلوب إصلاح قطعة قائمة أو تفصيل وحدة جديدة." /><div className="mt-6 space-y-4 text-base leading-8 text-slate-650"><p>يبدأ العمل بالاستماع: ما المشكلة؟ كيف ستُستخدم القطعة؟ ما المساحة المتاحة؟ وما التفاصيل المهمة للعميل؟ ثم تُراجع الأبعاد والخامات والتقسيمات قبل التنفيذ.</p><p>نخدم المنازل والمكاتب في مدينة الرياض، وننفذ النجارة العامة وإصلاح الأبواب والأدراج والأثاث الخشبي وتفصيل الدواليب والخزائن حسب المقاس.</p><p>نعتمد على خطوات يمكن مراجعتها: وضوح الطلب، دقة القياس، اعتماد التفاصيل، ثم التركيب والاختبار. ولا نستخدم أرقام خبرة أو وعوداً غير موثقة لإقناع العميل.</p></div></div></Reveal>
          <Reveal delay={100}><div className="relative overflow-hidden rounded-[2rem] bg-sand-50 p-6 sm:p-8"><div className="absolute -left-12 -top-12 size-40 rounded-full bg-wood-200/60 blur-3xl" /><div className="relative grid gap-4 sm:grid-cols-2"><div className="about-fact-card sm:col-span-2"><span>اسم النشاط</span><strong>{BUSINESS_NAME}</strong></div><div className="about-fact-card"><span>الفئة</span><strong>{BUSINESS_CATEGORY}</strong></div><div className="about-fact-card"><span>المدينة</span><strong>الرياض</strong></div><div className="about-fact-card sm:col-span-2"><span>العنوان</span><strong>{ADDRESS}</strong></div><div className="about-fact-card sm:col-span-2"><span>رقم التواصل</span><strong dir="ltr">{PHONE_DISPLAY}</strong></div></div></div></Reveal>
        </div></section>

        <section className="section-space bg-sand-50"><div className="container-shell"><Reveal><SectionHeading eyebrow="مبادئ العمل" title="ما الذي نركز عليه في كل مشروع؟" description="عناصر عملية تساعد على إخراج عمل خشبي مناسب للمكان وقابل للاستخدام اليومي." align="center" /></Reveal><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{values.map(([icon, title, description], index) => <Reveal key={title} delay={index * 80}><article className="trust-card h-full"><span className="grid size-12 place-items-center rounded-2xl bg-brand-100 text-brand-800"><Icon name={icon} className="size-6" /></span><h2 className="mt-5 text-lg font-black text-brand-950">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{description}</p></article></Reveal>)}</div></div></section>

        <section className="section-space bg-white"><div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal><div className="rounded-[2rem] bg-brand-950 p-7 text-white sm:p-9"><span className="grid size-13 place-items-center rounded-2xl bg-white/10 text-wood-300"><Icon name="home" className="size-6" /></span><h2 className="mt-6 text-3xl font-black leading-[1.5]">نشاط محلي ببيانات واضحة في الرياض</h2><p className="mt-5 text-sm leading-8 text-white/65">نعرض اسم النشاط والفئة والعنوان ورقم التواصل بصورة متسقة في الموقع لتسهيل وصول العميل ومحركات البحث إلى المعلومة الصحيحة.</p><dl className="mt-7 space-y-4 text-sm"><div className="flex items-start gap-3"><Icon name="map-pin" className="mt-1 size-5 text-wood-300" /><div><dt className="font-extrabold text-white">العنوان</dt><dd className="mt-1 leading-7 text-white/60">{ADDRESS}</dd></div></div><div className="flex items-center gap-3"><Icon name="phone" className="size-5 text-wood-300" /><div><dt className="font-extrabold text-white">التواصل</dt><dd className="mt-1 text-white/60" dir="ltr">{PHONE_DISPLAY}</dd></div></div></dl></div></Reveal>
          <Reveal delay={100}><div><SectionHeading eyebrow="نطاق الخدمات" title="أعمال نجارة للمنازل والمكاتب" description="صفحة مستقلة لكل خدمة تشرح نطاق العمل والخطوات والأسئلة الشائعة." /><div className="mt-7 grid gap-3 sm:grid-cols-2">{services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`} className="group flex items-center gap-4 rounded-2xl border border-brand-900/10 bg-sand-50 p-4 transition hover:-translate-y-1 hover:border-brand-700/20 hover:bg-white hover:shadow-lg"><span className="grid size-11 place-items-center rounded-xl bg-brand-950 text-white"><Icon name={service.icon} className="size-5" /></span><span className="font-black text-brand-950">{service.shortName}</span><Icon name="arrow-left" className="mr-auto size-5 text-brand-600 transition group-hover:-translate-x-1" /></Link>)}</div></div></Reveal>
        </div></section>

        <section className="bg-brand-950 py-14 text-white sm:py-16"><div className="container-shell flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center"><div><p className="text-sm font-extrabold text-wood-300">تواصل مباشر</p><h2 className="mt-3 text-3xl font-black leading-[1.5] sm:text-4xl">شاركنا فكرة العمل أو المشكلة الخشبية</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">أرسل الصور والمقاسات الأولية واسم الحي لنحدد الخطوة المناسبة.</p></div><div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"><a href={buildWhatsAppUrl(defaultWhatsAppMessage)} target="_blank" rel="noreferrer" className="button-accent min-h-13 px-7"><Icon name="whatsapp" className="size-6" />واتساب</a><a href={`tel:${PHONE_E164}`} className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 text-sm font-extrabold text-white transition hover:bg-white/10"><Icon name="phone" className="size-5" />اتصال مباشر</a></div></div></section>
      </main>
    </>
  );
}
