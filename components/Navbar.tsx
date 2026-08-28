"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { Icon } from "@/components/Icon";
import { ADDRESS, MAPS_URL, PHONE_DISPLAY, PHONE_E164, buildWhatsAppUrl, defaultWhatsAppMessage, navigation } from "@/data/site";
import { services } from "@/data/services";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/5 bg-white/95 shadow-[0_8px_30px_rgba(7,29,24,0.06)] backdrop-blur-xl">
      <div className="hidden bg-brand-950 text-white lg:block"><div className="container-shell flex min-h-9 items-center justify-between gap-6 text-xs"><a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/75 transition hover:text-white"><Icon name="map-pin" className="size-4 text-wood-400" /><span>{ADDRESS}</span></a><a href={`tel:${PHONE_E164}`} className="inline-flex items-center gap-2 font-bold text-white transition hover:text-wood-300"><Icon name="phone" className="size-4" /><span dir="ltr">{PHONE_DISPLAY}</span></a></div></div>
      <div className="container-shell flex h-[4.75rem] items-center justify-between gap-4">
        <BrandLogo />
        <nav aria-label="التنقل الرئيسي" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            if (item.label === "خدماتنا") return <div key={item.href} className="group relative"><Link href={item.href} aria-haspopup="true" className={`nav-link inline-flex items-center gap-1 ${pathname.startsWith("/services") ? "nav-link-active" : ""}`}>{item.label}<Icon name="chevron-down" className="size-4 transition group-hover:rotate-180" /></Link><div className="pointer-events-none absolute right-0 top-full w-72 translate-y-2 pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100"><div className="rounded-2xl border border-black/5 bg-white p-2 shadow-2xl shadow-brand-950/15">{services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold text-brand-950 transition hover:bg-sand-100"><span className="grid size-9 place-items-center rounded-xl bg-brand-100 text-brand-800"><Icon name={service.icon} className="size-5" /></span>{service.shortName}</Link>)}</div></div></div>;
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`nav-link ${active ? "nav-link-active" : ""}`}>{item.label}</Link>;
          })}
        </nav>
        <div className="hidden items-center gap-2 lg:flex"><a href={buildWhatsAppUrl(defaultWhatsAppMessage)} target="_blank" rel="noreferrer" className="button-primary min-h-11 px-5 text-sm"><Icon name="whatsapp" className="size-5" />اطلب معاينة</a></div>
        <button type="button" aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((value) => !value)} className="grid size-11 place-items-center rounded-xl border border-brand-900/10 bg-sand-50 text-brand-950 lg:hidden"><Icon name={isOpen ? "close" : "menu"} className="size-6" /></button>
      </div>
      <div id="mobile-navigation" aria-hidden={!isOpen} inert={!isOpen} className={`overflow-hidden border-t border-black/5 bg-white transition-[max-height,opacity] duration-300 lg:hidden ${isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}><nav aria-label="التنقل للجوال" className="container-shell max-h-[calc(100vh-5rem)] overflow-y-auto py-4"><div className="grid gap-1">{navigation.filter((item) => item.label !== "خدماتنا").map((item) => <Link key={item.href} href={item.href} onClick={closeMenu} className="rounded-xl px-4 py-3 text-sm font-extrabold text-brand-950 hover:bg-sand-100">{item.label}</Link>)}</div><div className="my-3 h-px bg-black/5" /><p className="px-4 pb-2 text-xs font-black uppercase tracking-wider text-brand-700">خدمات الدهانات والديكور</p><div className="grid grid-cols-2 gap-2">{services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`} onClick={closeMenu} className="flex min-h-20 flex-col justify-between rounded-xl bg-sand-50 p-3 text-sm font-bold text-brand-950"><Icon name={service.icon} className="size-5 text-wood-600" /><span>{service.shortName}</span></Link>)}</div><div className="mt-4 grid grid-cols-2 gap-2"><a href={`tel:${PHONE_E164}`} className="button-secondary min-h-12 text-sm"><Icon name="phone" className="size-5" />اتصال</a><a href={buildWhatsAppUrl(defaultWhatsAppMessage)} target="_blank" rel="noreferrer" className="button-primary min-h-12 text-sm"><Icon name="whatsapp" className="size-5" />واتساب</a></div></nav></div>
    </header>
  );
}
