import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { BUSINESS_NAME, buildWhatsAppUrl, defaultWhatsAppMessage } from "@/data/site";

export const metadata: Metadata = {
  title: "معرض الأعمال | دهانات وديكورات وورق جدران بالرياض",
  description: "معرض أعمال دهانات وديكورات وورق جدران بالرياض. تُنشر صور المشاريع الحقيقية فقط بعد توثيقها وربطها بالخدمة المنفذة.",
  alternates: { canonical: "/gallery" },
};

const categories = [
  ["sparkles", "دهانات داخلية", "صور قبل وبعد وتجهيز الجدران وتشطيب الغرف والمجالس."],
  ["home", "واجهات خارجية", "مشاريع دهان الواجهات والأسوار بعد تجهيز السطح."],
  ["wardrobe", "ورق جدران", "تفاصيل النقش والحواف والزوايا بعد التركيب."],
  ["repair", "تجديد الدهانات", "معالجة آثار الاستخدام وإعادة الطلاء بصورة متجانسة."],
] as const;

export default function GalleryPage() {
  return <main>
    <section className="relative overflow-hidden bg-brand-950 text-white"><div className="hero-grid" aria-hidden="true" /><div className="container-shell relative py-16 lg:py-24"><Breadcrumbs inverted items={[{ label: "الرئيسية", href: "/" }, { label: "معرض الأعمال" }]} /><div className="mt-8 max-w-4xl"><span className="section-eyebrow section-eyebrow-inverted">معرض الأعمال</span><h1 className="mt-5 text-balance text-4xl font-black leading-[1.45] sm:text-5xl lg:text-6xl">صور المشاريع الحقيقية فقط</h1><p className="mt-6 max-w-3xl text-base leading-8 text-white/70">لن نستخدم صوراً إنشائية أو صوراً من نشاط آخر كإثبات. هذا القسم مهيأ لإضافة صور الدهانات وورق الجدران الفعلية مع وصف الخدمة والموقع عند توفرها.</p></div></div></section>
    <section className="section-space bg-sand-50"><div className="container-shell"><Reveal><SectionHeading eyebrow="جاهز للتوثيق" title="هيكل معرض يساعد على إثبات النشاط دون تضليل" description="عند إضافة الصور الحقيقية سنربط كل صورة بنوع الخدمة ووصف واضح، مع ضغط الصور وتحسين النص البديل للسيو المحلي." align="center" /></Reveal><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{categories.map(([icon,title,description],index)=><Reveal key={title} delay={index*70}><article className="trust-card h-full"><span className="grid size-12 place-items-center rounded-2xl bg-brand-100 text-brand-800"><Icon name={icon} className="size-6" /></span><h2 className="mt-5 text-lg font-black text-brand-950">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{description}</p></article></Reveal>)}</div><Reveal className="mt-10"><div className="rounded-[2rem] bg-brand-950 p-7 text-white sm:p-10"><p className="text-sm font-extrabold text-wood-300">لإضافة مشروع</p><h2 className="mt-3 text-3xl font-black">أرسل صور العمل الأصلية عبر واتساب</h2><p className="mt-4 max-w-2xl text-sm leading-8 text-white/65">يفضل إرسال صورة قبل التنفيذ، صور أثناء التجهيز، وصورة نهائية واضحة. لا نضيف أي وصف أو ادعاء لا تدعمه الصور الفعلية.</p><a href={buildWhatsAppUrl(defaultWhatsAppMessage)} target="_blank" rel="noreferrer" className="button-accent mt-6 min-h-12 px-6"><Icon name="whatsapp" className="size-5" />إرسال الصور</a></div></Reveal></div></section>
  </main>;
}
