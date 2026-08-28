"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/Icon";
import { BUSINESS_NAME, buildWhatsAppUrl } from "@/data/site";

const serviceOptions = [
  "دهانات داخلية",
  "دهانات خارجية وواجهات",
  "تركيب ورق جدران",
  "دهانات ديكورية",
  "معجون وتجهيز الجدران",
  "دهان فلل وشقق",
  "دهان مكاتب ومحلات",
  "تجديد وصيانة الدهانات",
  "استفسار آخر",
] as const;

type ContactFormProps = {
  initialService?: (typeof serviceOptions)[number];
  title?: string;
  description?: string;
};

export function ContactForm({
  initialService = "دهانات داخلية",
  title = "أرسل تفاصيل طلبك عبر واتساب",
  description = "اكتب المعلومات الأساسية وسنجهز رسالة منظمة لفتحها مباشرة في واتساب.",
}: ContactFormProps) {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const service = String(form.get("service") || "").trim();
    const details = String(form.get("details") || "").trim();
    if (!name || !phone || !service || !details) {
      setStatus("يرجى تعبئة جميع الحقول المطلوبة قبل الإرسال.");
      return;
    }
    const message = [
      `السلام عليكم، أرغب في طلب خدمة من ${BUSINESS_NAME}.`,
      "",
      `الاسم: ${name}`,
      `رقم الجوال: ${phone}`,
      `الخدمة المطلوبة: ${service}`,
      `التفاصيل: ${details}`,
    ].join("\n");
    setStatus("تم تجهيز الرسالة، سيتم فتح واتساب لإكمال الإرسال.");
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="rounded-[1.75rem] border border-brand-900/10 bg-white p-5 shadow-xl shadow-brand-950/10 sm:p-7">
      <div className="mb-6">
        <span className="mb-4 grid size-12 place-items-center rounded-2xl bg-brand-950 text-white"><Icon name="send" className="size-5" /></span>
        <h3 className="text-xl font-black text-brand-950 sm:text-2xl">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      </div>
      <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="form-field"><span>الاسم الكامل</span><input type="text" name="name" autoComplete="name" required placeholder="اكتب اسمك" /></label>
          <label className="form-field"><span>رقم الجوال</span><input type="tel" name="phone" autoComplete="tel" inputMode="tel" dir="ltr" required placeholder="05xxxxxxxx" /></label>
        </div>
        <label className="form-field"><span>الخدمة المطلوبة</span><select name="service" defaultValue={initialService} required>{serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}</select></label>
        <label className="form-field"><span>تفاصيل الطلب</span><textarea name="details" required rows={5} placeholder="اذكر نوع العمل، الحي، مساحة الجدران أو عدد الغرف وحالة السطح" /></label>
        <button type="submit" className="button-primary mt-1 min-h-13 w-full"><Icon name="whatsapp" className="size-6" />إرسال الطلب عبر واتساب</button>
        <p role="status" aria-live="polite" className={`min-h-6 text-center text-xs font-bold ${status.startsWith("يرجى") ? "text-red-700" : "text-brand-700"}`}>{status}</p>
      </form>
    </div>
  );
}
