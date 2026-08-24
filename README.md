# النعيم للمقاولات وأعمال النجارة

موقع عربي متجاوب مبني باستخدام **Next.js App Router** و**Tailwind CSS** لخدمة النشاط المحلي في الرياض، مع مصدر موحد لبيانات الاسم والعنوان والهاتف، وصفحات خدمات مستقلة، ونموذج طلب يفتح رسالة منظمة في واتساب، وخريطة Google، وبيانات منظمة قابلة للفحص.

> الموقع يدعم اتساق الكيان الرقمي ويسهّل على العملاء ومحركات البحث فهم بيانات النشاط، لكنه لا يمثل ضمانًا منفردًا لقبول أو توثيق ملف Google Business Profile.

## هيكلية المشروع

```text
allnaeem-carpentry/
├── .github/workflows/quality.yml
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── services/[slug]/page.tsx
│   ├── styles/
│   │   ├── base.css
│   │   ├── responsive.css
│   │   ├── ui.css
│   │   └── visuals.css
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   ├── manifest.ts
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── BrandLogo.tsx
│   ├── Breadcrumbs.tsx
│   ├── ContactForm.tsx
│   ├── FloatingButtons.tsx
│   ├── Footer.tsx
│   ├── Icon.tsx
│   ├── JsonLd.tsx
│   ├── MapEmbed.tsx
│   ├── Navbar.tsx
│   ├── Reveal.tsx
│   ├── SectionHeading.tsx
│   ├── ServiceCard.tsx
│   └── ServicePage.tsx
├── data/
│   ├── services/
│   │   ├── carpentry-repair.ts
│   │   ├── custom-cabinets.ts
│   │   ├── custom-wardrobes.ts
│   │   └── general-carpentry.ts
│   ├── service-types.ts
│   ├── services.ts
│   └── site.ts
└── ملفات إعداد Next.js وTypeScript وTailwind
```

## الصفحات

- `/` الصفحة الرئيسية.
- `/services/general-carpentry` النجارة العامة.
- `/services/carpentry-repair` تصليح النجارة.
- `/services/custom-wardrobes` تفصيل الدواليب.
- `/services/custom-cabinets` تفصيل الخزائن.
- `/about` من نحن.
- `/contact` تواصل معنا.
- `/sitemap.xml` خريطة الموقع.
- `/robots.txt` تعليمات الزحف.

## بيانات النشاط المعتمدة

- **الاسم:** النعيم للمقاولات وأعمال النجارة
- **الفئة:** نجار
- **العنوان:** 3612 حمل بن مالك، 6642، حي المصيف، الرياض 12465.
- **الهاتف وواتساب:** +966 57 021 0104

تُدار بيانات NAP من `data/site.ts` فقط، حتى تظل مطابقة في الرأس والفوتر وصفحة التواصل والخريطة والسكيما.

## التشغيل والفحص

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

## متغيرات البيئة

```env
NEXT_PUBLIC_SITE_URL=https://allnaeem-carpentry.vercel.app
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

- اضبط `NEXT_PUBLIC_SITE_URL` على النطاق النهائي دون `/` في النهاية.
- أضف قيمة Google Search Console فقط عند توفرها، وليس وسم `<meta>` كاملاً.

## SEO والبيانات المنظمة

- الصفحة الرئيسية: `LocalBusiness` + `WebSite`.
- صفحات الخدمات: `Service` + `FAQPage` + `BreadcrumbList`.
- صفحات من نحن والتواصل: `AboutPage` و`ContactPage`.
- ملفات ديناميكية: `sitemap.ts` و`robots.ts` و`manifest.ts`.
- لا توجد أسعار أو ساعات أو سنوات خبرة أو ادعاءات غير موثقة داخل السكيما.

## النشر على Vercel

اربط المستودع بمشروع Vercel، أضف متغير `NEXT_PUBLIC_SITE_URL`، ثم انشر `main`. بعد ربط النطاق النهائي افحص `/sitemap.xml` وأرسله إلى Google Search Console.
