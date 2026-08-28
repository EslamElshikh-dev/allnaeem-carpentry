import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ADDRESS, BUSINESS_CATEGORY, BUSINESS_NAME, PHONE_DISPLAY, SITE_URL } from "@/data/site";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "من نحن | مقاول دهانات وديكورات في الرياض",
  description: "تعرف على دهانات ديكورات ورق جدران في الرياض وطريقة العمل في تجهيز الجدران والدهانات الداخلية والخارجية وورق الجدران.",
  alternates: { canonical: "/about" },
};

const aboutSchema = { "@context": "https://schema.org", "@type": "AboutPage", "@id": `${SITE_URL}/about#webpage`, url: `${SITE_URL}/about`, name: `من نحن | ${BUSINESS_NAME}`, inLanguage: "ar-SA", about: { "@id": `${SITE_URL}/#business` } };

export default function AboutPage() {
  return <><JsonLd data={aboutSchema} /><main>
    <section className="relative overflow-hidden bg-brand-950 text-white"><div className="hero-grid" aria-hidden="true" /><div className="container-shell relative py-16 lg:py-24"><Breadcrumbs inverted items={[{ label: "الرئيسية", href: "/" }, { label: "من نحن" }]} /><div className="mt-8 max-w-4xl"><span className="section-eyebrow section-eyebrow-inverted">عن النشاط</span><h1 className="mt-5 text-balance text-4xl font-black leading-[1.45] sm:text-5xl lg:text-6xl">مقاول دهانات وديكورات يهتم بما قبل اللون بقدر اهتمامه بالتشطيب</h1><p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg sm:leading-9">{BUSINESS_NAME} يقدم خدمات الدهانات وورق الجدران داخل الرياض، مع التركيز على فحص السطح وتجهيزه واختيار النظام المناسب ثم مراجعة النتيجة النهائية.</p></div></div></section>
    <section className="section-space bg-white"><div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"><Reveal><div><SectionHeading eyebrow="منهج العمل" title="النتيجة تبدأ من السطح الصحيح" description="نراجع حالة الجدران، الاستخدام والإضاءة قبل اعتماد اللون أو ورق الجدران." /><div className="mt-6 space-y-4 text-base leading-8 text-slate-650"><p>الدهان الجيد لا يخفي مشكلة في الجدار؛ لذلك يتم تحديد أعمال المعجون والصنفرة والبرايمر أو معالجة العيوب السطحية قبل طبقات التشطيب.</p><p>في ورق الجدران تتم مراجعة نعومة السطح وتكرار النقشة والحواف والزوايا قبل التركيب. وفي الواجهات يتم تقييم التقشر والتشققات السطحية وحالة الطلاء السابق.</p><p>نستخدم بيانات نشاط موحدة وواضحة في الموقع: الاسم والفئة والعنوان والهاتف والخريطة، دون إضافة سنوات خبرة أو ضمانات أو ادعاءات غير موثقة.</p></div></div></Reveal><Reveal delay={100}><div className="relative overflow-hidden rounded-[2rem] bg-sand-50 p-6 sm:p-8"><div className="relative grid gap-4 sm:grid-cols-2"><div className="about-fact-card sm:col-span-2"><span>اسم النشاط</span><strong>{BUSINESS_NAME}</strong></div><div className="about-fact-card"><span>الفئة</span><strong>{BUSINESS_CATEGORY}</strong></div><div className="about-fact-card"><span>المدينة</span><strong>الرياض</strong></div><div className="about-fact-card sm:col-span-2"><span>العنوان</span><strong>{ADDRESS}</strong></div><div className="about-fact-card sm:col-span-2"><span>رقم التواصل</span><strong dir="ltr">{PHONE_DISPLAY}</strong></div></div></div></Reveal></div></section>
    <section className="section-space bg-sand-50"><div className="container-shell"><Reveal><SectionHeading eyebrow="الخدمات" title="صفحات مستقلة لكل خدمة" description="محتوى مفصل يساعد العميل ومحركات البحث على فهم نطاق كل خدمة بوضوح." align="center" /></Reveal><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`} className="trust-card h-full"><span className="grid size-12 place-items-center rounded-2xl bg-brand-100 text-brand-800"><Icon name={service.icon} className="size-6" /></span><h2 className="mt-5 text-lg font-black text-brand-950">{service.shortName}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{service.shortDescription}</p></Link>)}</div></div></section>
  </main></>;
}
