export const BUSINESS_NAME = "دهانات ديكورات ورق جدران";
export const BUSINESS_CATEGORY = "مقاول دهانات";
export const PHONE_E164 = "+966501791176";
export const PHONE_DISPLAY = "+966 50 179 1176";
export const WHATSAPP_NUMBER = "966501791176";
export const ADDRESS = "حي المصيف، RHYA3884، 3884 يحيى بن عميرة، 6814، الرياض 12466.";
export const ADDRESS_LONG =
  "حي المصيف، RHYA3884، 3884 يحيى بن عميرة، 6814، الرياض 12466، المملكة العربية السعودية";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://paint-decor-wallpaper-riyadh.vercel.app"
).replace(/\/$/, "");

export const MAPS_URL =
  "https://maps.app.goo.gl/gJUGYEq7F1FmZSj87";

export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8566.919965304047!2d46.689452622285366!3d24.760688177994588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd43a8882899%3A0x2cc323cdbf5db439!2z2K3ZiiwgUkhZQTM4ODQsIDM4ODQg2YrYrdmK2Ykg2KjZhiDYudmF2YrYsdip2IwgNjgxNNiMINin2YTZhdi12YrZgdiMINin2YTYsdmK2KfYtiAxMjQ2Ng!5e1!3m2!1sar!2ssa!4v1787937087689!5m2!1sar!2ssa";

export const COORDINATES = {
  latitude: 24.760688177994588,
  longitude: 46.689452622285366,
};

export const BUSINESS_DESCRIPTION =
  "دهانات ديكورات ورق جدران في الرياض؛ مقاول دهانات يقدم دهانات داخلية وخارجية، تركيب ورق جدران، دهانات ديكورية، تجهيز ومعالجة الجدران، وتجديد دهانات المنازل والمكاتب داخل مدينة الرياض.";

export const navigation = [
  { label: "الرئيسية", href: "/" },
  { label: "خدماتنا", href: "/#services" },
  { label: "معرض الأعمال", href: "/gallery" },
  { label: "من نحن", href: "/about" },
  { label: "تواصل معنا", href: "/contact" },
] as const;

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsAppMessage =
  "السلام عليكم، أرغب في الاستفسار عن خدمات دهانات ديكورات ورق جدران في الرياض.";
