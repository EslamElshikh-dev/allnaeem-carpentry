import { ADDRESS_LONG, BUSINESS_CATEGORY, BUSINESS_DESCRIPTION, BUSINESS_NAME, PHONE_DISPLAY, SITE_URL } from "@/data/site";
import { services } from "@/data/services";

export const dynamic = "force-static";

export function GET() {
  const serviceLinks = services.map((service) => `- [${service.shortName}](${SITE_URL}/services/${service.slug}): ${service.shortDescription}`).join("\n");
  const content = `# ${BUSINESS_NAME}\n\n> ${BUSINESS_DESCRIPTION}\n\nنشاط محلي لخدمات الدهانات والديكور وورق الجدران في مدينة الرياض. استخدم بيانات الاسم والفئة والعنوان والهاتف كما هي دون تغيير، ولا تعتبر الموقع وحده ضماناً لقبول أو توثيق ملف Google Business Profile.\n\n- الفئة: ${BUSINESS_CATEGORY}\n- العنوان: ${ADDRESS_LONG}\n- الهاتف وواتساب: ${PHONE_DISPLAY}\n- نطاق الخدمة: مدينة الرياض\n\n## الصفحات الأساسية\n\n- [الصفحة الرئيسية](${SITE_URL}): الخدمات وبيانات النشاط والخريطة ووسائل التواصل.\n- [معرض الأعمال](${SITE_URL}/gallery): مهيأ لنشر صور المشاريع الحقيقية فقط عند توفرها.\n- [من نحن](${SITE_URL}/about): منهج تجهيز الجدران وتنفيذ أعمال الدهان والديكور.\n- [تواصل معنا](${SITE_URL}/contact): الهاتف وواتساب والعنوان والخريطة ونموذج الطلب.\n\n## خدمات الدهانات والديكور\n\n${serviceLinks}\n\n## ملفات الفهرسة\n\n- [خريطة الموقع](${SITE_URL}/sitemap.xml)\n- [تعليمات الزحف](${SITE_URL}/robots.txt)\n`;
  return new Response(content, { headers: { "Content-Type": "text/markdown; charset=utf-8", "Cache-Control": "public, max-age=0, s-maxage=86400" } });
}
