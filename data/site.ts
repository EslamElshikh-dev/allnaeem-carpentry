export const BUSINESS_NAME = "النعيم للمقاولات وأعمال النجارة";
export const BUSINESS_CATEGORY = "نجار";
export const PHONE_E164 = "+966570210104";
export const PHONE_DISPLAY = "+966 57 021 0104";
export const WHATSAPP_NUMBER = "966570210104";
export const ADDRESS = "3612 حمل بن مالك، 6642، حي المصيف، الرياض 12465.";
export const ADDRESS_LONG =
  "3612 حمل بن مالك، 6642، حي المصيف، الرياض 12465، المملكة العربية السعودية";
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://allnaeem-carpentry.vercel.app"
).replace(/\/$/, "");

export const MAPS_URL =
  "https://www.google.com/maps?cid=3969435420157689533";

export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8567.026127264193!2d46.68679092228733!3d24.75914874929963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efd448ef6435d%3A0x3716447bd15a3ebd!2zUkhZQTM2MTLYjCAzNjEyINit2YXZhCDYqNmGINmF2KfZhNmD2IwgNjY0MtiMINit2Yog2KfZhNmF2LXZitmB2Iwg2KfZhNix2YrYp9i2IDEyNDY1!5e1!3m2!1sar!2ssa!4v1787538618303!5m2!1sar!2ssa";

export const COORDINATES = {
  latitude: 24.75914874929963,
  longitude: 46.68679092228733,
};

export const BUSINESS_DESCRIPTION =
  "مؤسسة النعيم للمقاولات وأعمال النجارة في الرياض، نقدم خدمات النجارة الشاملة، وتصليح وصيانة الأعمال الخشبية، وتفصيل الدواليب والخزائن حسب المقاسات واحتياج المساحة.";

export const navigation = [
  { label: "الرئيسية", href: "/" },
  { label: "خدماتنا", href: "/#services" },
  { label: "صور النشاط", href: "/gallery" },
  { label: "من نحن", href: "/about" },
  { label: "تواصل معنا", href: "/contact" },
] as const;

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsAppMessage =
  "السلام عليكم، أرغب في الاستفسار عن خدمات النعيم للمقاولات وأعمال النجارة في الرياض.";
