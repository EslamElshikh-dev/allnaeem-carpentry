import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { Icon } from "@/components/Icon";
import { ADDRESS, BUSINESS_CATEGORY, BUSINESS_NAME, MAPS_URL, PHONE_DISPLAY, PHONE_E164, buildWhatsAppUrl, defaultWhatsAppMessage } from "@/data/site";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-white">
      <div className="footer-glow footer-glow-one" aria-hidden="true" /><div className="footer-glow footer-glow-two" aria-hidden="true" />
      <div className="container-shell relative grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_0.75fr_1fr]">
        <div><BrandLogo inverted /><p className="mt-5 max-w-md text-sm leading-7 text-white/65">{BUSINESS_NAME} في حي المصيف بالرياض، لخدمات الدهانات الداخلية والخارجية، ورق الجدران، الدهانات الديكورية وتجديد الجدران داخل مدينة الرياض.</p><div className="mt-6 flex flex-wrap gap-3"><a href={buildWhatsAppUrl(defaultWhatsAppMessage)} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#25d366] px-4 text-sm font-extrabold text-white"><Icon name="whatsapp" className="size-5" />تواصل واتساب</a><a href={`tel:${PHONE_E164}`} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 text-sm font-extrabold text-white"><Icon name="phone" className="size-5" />اتصال مباشر</a></div></div>
        <div><h2 className="footer-title">روابط سريعة</h2><ul className="mt-5 space-y-3 text-sm text-white/65"><li><Link className="footer-link" href="/">الرئيسية</Link></li><li><Link className="footer-link" href="/gallery">معرض الأعمال</Link></li><li><Link className="footer-link" href="/about">من نحن</Link></li><li><Link className="footer-link" href="/contact">تواصل معنا</Link></li>{services.map((service) => <li key={service.slug}><Link className="footer-link" href={`/services/${service.slug}`}>{service.shortName}</Link></li>)}</ul></div>
        <div><h2 className="footer-title">بيانات النشاط</h2><address className="mt-5 not-italic text-sm text-white/65"><ul className="space-y-4"><li className="flex items-start gap-3"><Icon name="home" className="mt-1 size-5 shrink-0 text-wood-400" /><div><p className="font-bold text-white">{BUSINESS_NAME}</p><p className="mt-1">الفئة: {BUSINESS_CATEGORY}</p></div></li><li className="flex items-start gap-3"><Icon name="map-pin" className="mt-1 size-5 shrink-0 text-wood-400" /><a href={MAPS_URL} target="_blank" rel="noreferrer" className="footer-link leading-7">{ADDRESS}</a></li><li className="flex items-center gap-3"><Icon name="phone" className="size-5 shrink-0 text-wood-400" /><a href={`tel:${PHONE_E164}`} dir="ltr" className="footer-link inline-block font-bold">{PHONE_DISPLAY}</a></li></ul></address></div>
      </div>
      <div className="relative border-t border-white/10"><div className="container-shell flex flex-col items-center justify-between gap-3 py-5 text-center text-xs text-white/55 md:flex-row md:text-right"><p>جميع الحقوق محفوظة لدى {BUSINESS_NAME} © 2026</p><p dir="ltr">Development by | <a href="https://eslam-elshikh.com" target="_blank" rel="noreferrer" className="font-bold text-white">Eslam Elshikh</a></p></div></div>
    </footer>
  );
}
