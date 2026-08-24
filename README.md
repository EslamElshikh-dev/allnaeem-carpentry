# النعيم للمقاولات وأعمال النجارة

موقع عربي متجاوب مبني باستخدام **Next.js App Router** و**Tailwind CSS** لخدمة النشاط المحلي في الرياض، مع مصدر موحد لبيانات الاسم والعنوان والهاتف، صفحات خدمات مستقلة، نموذج طلب عبر واتساب، خريطة Google، وبيانات منظمة قابلة للفحص.

> الموقع يعزز اتساق الكيان الرقمي ويسهّل على العملاء ومحركات البحث فهم بيانات النشاط، لكنه لا يمثل ضماناً منفرداً لقبول أو توثيق ملف Google Business Profile.

## هيكلية المشروع

```text
allnaeem-carpentry/
├── .github/
│   └── workflows/
│       └── quality.yml
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   └── [slug]/
│   │       └── page.tsx
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
│   ├── services.ts
│   └── site.ts
├── .env.example
├── .gitignore
├── .nvmrc
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## الصفحات

- `/` الصفحة الرئيسية
- `/services/general-carpentry` نجارة عامة
- `/services/carpentry-repair` تصليح نجارة
- `/services/custom-wardrobes` تفصيل دواليب
- `/services/custom-cabinets` تفصيل خزائن
- `/about` من نحن
- `/contact` تواصل معنا
- `/sitemap.xml` خريطة الموقع
- `/robots.txt` تعليمات الزحف

## بيانات النشاط المعتمدة

- **الاسم:** النعيم للمقاولات وأعمال النجارة
- **الفئة:** نجار
- **العنوان:** 3612 حمل بن مالك، 6642، حي المصيف، الرياض 12465.
- **الهاتف وواتساب:** +966 57 021 0104

يجب تعديل هذه البيانات من `data/site.ts` فقط عند حدوث تغيير رسمي، لتظل متطابقة في الرأس والفوتر وصفحة التواصل والسكيما.

## التشغيل محلياً

```bash
npm install
npm run dev
```

ثم افتح `http://localhost:3000`.

## فحوص الجودة

```bash
npm run lint
npm run typecheck
npm run build
```

يعمل مسار GitHub Actions تلقائياً عند الدفع إلى `main` أو فتح Pull Request، وينفذ الفحوص الثلاثة السابقة.

## متغيرات البيئة

انسخ `.env.example` إلى `.env.local`:

```bash
cp .env.example .env.local
```

ثم اضبط:

```env
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

- `NEXT_PUBLIC_SITE_URL`: النطاق النهائي دون `/` في النهاية.
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: قيمة التحقق فقط، وليس وسم `<meta>` كاملاً.

## النشر على Vercel

1. اربط المستودع بمشروع Vercel.
2. أضف `NEXT_PUBLIC_SITE_URL` بالنطاق النهائي في إعدادات Environment Variables.
3. أضف قيمة Google Search Console عند توفرها.
4. انشر المشروع ثم افحص `/sitemap.xml` و`/robots.txt` وصفحات الخدمات.
5. أرسل رابط خريطة الموقع في Google Search Console بعد ربط النطاق النهائي.

## ملاحظات SEO والبيانات المنظمة

- الصفحة الرئيسية تتضمن `LocalBusiness` و`WebSite` بصيغة JSON-LD.
- كل صفحة خدمة تتضمن `Service` و`FAQPage` و`BreadcrumbList`.
- العنوان والهاتف والإحداثيات والخريطة تُدار من مصدر موحد.
- لا توجد ساعات عمل أو أسعار أو سنوات خبرة غير موثقة داخل السكيما.
- ظهور النتائج الغنية أو قبول توثيق الملف التجاري يخضع لسياسات Google وفحوصها، وليس للكود وحده.
