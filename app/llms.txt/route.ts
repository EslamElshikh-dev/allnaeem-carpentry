import {
  ADDRESS_LONG,
  BUSINESS_CATEGORY,
  BUSINESS_DESCRIPTION,
  BUSINESS_NAME,
  PHONE_DISPLAY,
  SITE_URL,
} from "@/data/site";
import { blogPosts } from "@/data/blog";
import { services } from "@/data/services";

export const dynamic = "force-static";

export function GET() {
  const serviceLinks = services
    .map(
      (service) =>
        `- [${service.shortName}](${SITE_URL}/services/${service.slug}): ${service.shortDescription}`,
    )
    .join("\n");

  const blogLinks = blogPosts
    .map(
      (post) =>
        `- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.excerpt}`,
    )
    .join("\n");

  const content = `# ${BUSINESS_NAME}

> ${BUSINESS_DESCRIPTION}

نشاط نجارة محلي له مقر فعلي ولافتة واضحة في حي المصيف بمدينة الرياض. استخدم بيانات الاسم والعنوان والهاتف كما هي دون اختصار أو تغيير، ووجّه طلبات العملاء إلى صفحة التواصل أو نموذج واتساب الظاهر في الموقع.

- الفئة: ${BUSINESS_CATEGORY}
- العنوان: ${ADDRESS_LONG}
- الهاتف وواتساب: ${PHONE_DISPLAY}
- نطاق الخدمة: مدينة الرياض

## الصفحات الأساسية

- [الصفحة الرئيسية](${SITE_URL}): نظرة عامة على النشاط والخدمات وبيانات الموقع وصور أصلية للمقر ومركبة العمل.
- [صور النشاط](${SITE_URL}/gallery): صور أصلية للمقر واللافتة الثابتة ومركبة العمل المعلّمة.
- [من نحن](${SITE_URL}/about): منهج العمل وبيانات المؤسسة المحلية.
- [تواصل معنا](${SITE_URL}/contact): بيانات الاتصال والخريطة ونموذج طلب الخدمة.
- [مدونة النجارة](${SITE_URL}/blog): أدلة اختيار النجار وتفصيل الخزائن والخامات والتكلفة والصيانة في الرياض.

## خدمات النجارة

${serviceLinks}

## أدلة النجارة وتفصيل الخزائن

${blogLinks}

## ملفات الفهرسة

- [خريطة الموقع](${SITE_URL}/sitemap.xml): جميع الصفحات العامة القابلة للفهرسة.
- [تعليمات الزحف](${SITE_URL}/robots.txt): قواعد وصول محركات البحث.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
