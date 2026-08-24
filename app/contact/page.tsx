import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { MapEmbed } from "@/components/MapEmbed";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
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

export const metadata: Metadata = {
  title: "تواصل معنا | النعيم للنجارة في الرياض",
  description:
    "بيانات التواصل الرسمية للنعيم للمقاولات وأعمال النجارة: الهاتف وواتساب والعنوان في حي المصيف بالرياض والخريطة ونموذج طلب الخدمة.",
  alternates: { canonical: "/contact" },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#webpage`,
  url: `${SITE_URL}/contact`,
  name: `تواصل معنا | ${BUSINESS_NAME}`,
  inLanguage: "ar-SA",
  about: { "@id": `${SITE_URL}/#business` },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <main>
        <section className="relative overflow-hidden bg-brand-950 text-white">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="container-shell relative py-16 lg:py-24">
            <Breadcrumbs inverted items={[{ label: "الرئيسية", href: "/" }, { label: "تواصل معنا" }]} />
            <div className="mt-8 max-w-4xl">
              <span className="section-eyebrow section-eyebrow-inverted">بيانات التواصل الرسمية</span>
              <h1 className="mt-5 text-balance text-4xl font-black leading-[1.45] sm:text-5xl lg:text-6xl">تواصل مع النعيم للمقاولات وأعمال النجارة</h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg sm:leading-9">أرسل صور العمل والمقاسات الأولية عبر واتساب، أو اتصل مباشرة، أو افتح موقع النشاط في حي المصيف على خرائط Google.</p>
            </div>
          </div>
        </section>

        <section className="section-space bg-sand-50"><div className="container-shell grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <Reveal><aside className="space-y-4 lg:sticky lg:top-32">
            <div className="rounded-[1.75rem] bg-brand-950 p-6 text-white shadow-xl shadow-brand-950/15 sm:p-7"><span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-wood-300"><Icon name="home" className="size-6" /></span><h2 className="mt-5 text-2xl font-black">بيانات النشاط</h2><dl className="mt-6 space-y-5 text-sm"><div><dt className="font-bold text-white/50">الاسم</dt><dd className="mt-1 font-black leading-7 text-white">{BUSINESS_NAME}</dd></div><div><dt className="font-bold text-white/50">الفئة</dt><dd className="mt-1 font-black text-white">{BUSINESS_CATEGORY}</dd></div><div><dt className="font-bold text-white/50">العنوان</dt><dd className="mt-1 leading-7 text-white/80">{ADDRESS}</dd></div><div><dt className="font-bold text-white/50">الجوال</dt><dd className="mt-1 font-black text-white" dir="ltr">{PHONE_DISPLAY}</dd></div></dl></div>
            <a href={buildWhatsAppUrl(defaultWhatsAppMessage)} target="_blank" rel="noreferrer" className="contact-quick-link"><span className="grid size-12 place-items-center rounded-xl bg-[#25d366] text-white"><Icon name="whatsapp" className="size-6" /></span><div><span>واتساب</span><strong>إرسال صور وتفاصيل الطلب</strong></div><Icon name="arrow-left" className="mr-auto size-5 text-brand-600" /></a>
            <a href={`tel:${PHONE_E164}`} className="contact-quick-link"><span className="grid size-12 place-items-center rounded-xl bg-brand-950 text-white"><Icon name="phone" className="size-5" /></span><div><span>اتصال مباشر</span><strong dir="ltr">{PHONE_DISPLAY}</strong></div><Icon name="arrow-left" className="mr-auto size-5 text-brand-600" /></a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="contact-quick-link"><span className="grid size-12 place-items-center rounded-xl bg-wood-400 text-brand-950"><Icon name="map-pin" className="size-5" /></span><div><span>خرائط Google</span><strong>فتح موقع حي المصيف</strong></div><Icon name="external-link" className="mr-auto size-5 text-brand-600" /></a>
          </aside></Reveal>
          <Reveal delay={100}><ContactForm title="جهّز طلب الخدمة" description="يُفتح واتساب برسالة مرتبة تحتوي على اسمك ورقمك والخدمة والتفاصيل التي كتبتها." /></Reveal>
        </div></section>

        <section className="section-space bg-white"><div className="container-shell"><Reveal><SectionHeading eyebrow="موقع النشاط" title="العنوان في حي المصيف بمدينة الرياض" description={ADDRESS_LONG} align="center" /></Reveal><Reveal className="mt-8" delay={100}><MapEmbed /></Reveal></div></section>

        <section className="bg-brand-950 py-12 text-white"><div className="container-shell grid gap-5 md:grid-cols-3">{[
          ["check", "بيانات متطابقة", "الاسم والعنوان والهاتف موحدة في صفحات الموقع."],
          ["map-pin", "خدمة داخل الرياض", "يتم تنسيق الزيارة حسب الحي ونوع العمل."],
          ["clock", "موعد حسب الطلب", "تأكيد الموعد يتم بعد مراجعة التفاصيل ونطاق الخدمة."],
        ].map(([icon, title, description]) => <div key={title} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"><Icon name={icon as "check" | "map-pin" | "clock"} className="mt-1 size-5 shrink-0 text-wood-300" /><div><h2 className="font-black">{title}</h2><p className="mt-2 text-sm leading-7 text-white/60">{description}</p></div></div>)}</div></section>
      </main>
    </>
  );
}
