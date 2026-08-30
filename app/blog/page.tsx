import type { Metadata } from "next";
import Link from "next/link";

import { BlogCard } from "@/components/BlogCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts } from "@/data/blog";
import { BUSINESS_NAME, SITE_URL } from "@/data/site";
import {
  createBreadcrumbSchema,
  createSchemaGraph,
  createWebPageSchema,
} from "@/data/structured-data";

const blogDescription =
  "مدونة النعيم للنجارة: أدلة احترافية عن أفضل نجار بالرياض، تفصيل الخزائن والدواليب، الخامات، التكلفة، الصيانة، وخدمات النجارة في حي المصيف وشمال الرياض.";

export const metadata: Metadata = {
  title: { absolute: `مدونة النجارة وتفصيل الخزائن بالرياض | ${BUSINESS_NAME}` },
  description: blogDescription,
  keywords: [
    "مدونة نجارة",
    "أفضل نجار بالرياض",
    "أفضل ورشة نجارة بالرياض",
    "تفصيل خزائن بالرياض",
    "نجار تفصيل خزائن شمال الرياض",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: `${SITE_URL}/blog`,
    title: "مدونة النجارة وتفصيل الخزائن بالرياض",
    description:
      "أدلة عملية تساعدك على اختيار النجار والخامة والتقسيم وفحص أعمال النجارة قبل الاستلام.",
    images: [
      {
        url: `${SITE_URL}${blogPosts[0].image}`,
        alt: blogPosts[0].imageAlt,
      },
    ],
  },
};

const blogUrl = `${SITE_URL}/blog`;
const pageId = `${blogUrl}#webpage`;
const blogId = `${blogUrl}#blog`;
const postsId = `${blogUrl}#posts`;
const breadcrumbId = `${blogUrl}#breadcrumb`;

const blogSchema = {
  "@type": "Blog",
  "@id": blogId,
  url: `${SITE_URL}/blog`,
  name: "مدونة النجارة وتفصيل الخزائن بالرياض",
  description: blogDescription,
  inLanguage: "ar-SA",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#business` },
  about: ["النجارة", "تفصيل الخزائن", "تفصيل الدواليب", "صيانة النجارة"].map(
    (name) => ({ "@type": "Thing", name }),
  ),
  blogPost: blogPosts.map((post) => ({
    "@id": `${SITE_URL}/blog/${post.slug}#article`,
  })),
};

const postsSchema = {
  "@type": "ItemList",
  "@id": postsId,
  name: "مقالات مدونة النجارة",
  numberOfItems: blogPosts.length,
  itemListOrder: "https://schema.org/ItemListOrderDescending",
  itemListElement: blogPosts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${SITE_URL}/blog/${post.slug}`,
    name: post.title,
    item: { "@id": `${SITE_URL}/blog/${post.slug}#article` },
  })),
};

const breadcrumbSchema = createBreadcrumbSchema(
  [
    { name: "الرئيسية", url: SITE_URL },
    { name: "مدونة النجارة", url: blogUrl },
  ],
  breadcrumbId,
);

const structuredData = createSchemaGraph([
  {
    ...createWebPageSchema({
      id: pageId,
      url: blogUrl,
      name: "مدونة النجارة وتفصيل الخزائن بالرياض",
      description: blogDescription,
      type: "CollectionPage",
      breadcrumbId,
      aboutId: blogId,
      primaryImageUrl: `${SITE_URL}${blogPosts[0].image}`,
    }),
    mainEntity: [
      { "@id": blogId },
      { "@id": postsId },
    ],
  },
  blogSchema,
  postsSchema,
  breadcrumbSchema,
]);

export default function BlogPage() {
  const [featuredPost, ...remainingPosts] = blogPosts;

  return (
    <main>
      <JsonLd data={structuredData} />

      <section className="blog-index-hero">
        <div className="hero-grid opacity-30" aria-hidden="true" />
        <div className="container-shell relative py-16 sm:py-20">
          <Breadcrumbs
            inverted
            items={[{ label: "الرئيسية", href: "/" }, { label: "المدونة" }]}
          />
          <span className="section-eyebrow section-eyebrow-inverted mt-8">
            معرفة قبل التنفيذ
          </span>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.45] text-white sm:text-5xl">
            مدونة النجارة وتفصيل الخزائن في الرياض
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
            أدلة مفصلة تساعدك على اختيار النجار المناسب، وفهم الخامات
            والتقسيمات والتكلفة، ومراجعة أعمال التفصيل والتركيب قبل الاستلام.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-extrabold text-white/75">
            <span className="blog-hero-chip">10 أدلة متخصصة</span>
            <span className="blog-hero-chip">محتوى مخصص للرياض</span>
            <span className="blog-hero-chip">تحديث 2026</span>
          </div>
        </div>
      </section>

      <section className="section-space bg-sand-50">
        <div className="container-shell">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="section-eyebrow">الدليل الأهم</span>
              <h2 className="mt-4 text-3xl font-black text-brand-950">
                ابدأ من هنا
              </h2>
            </div>
            <Link href="/services/custom-cabinets" className="blog-text-link">
              خدمة تفصيل الخزائن
              <Icon name="arrow-left" className="size-4" />
            </Link>
          </div>
          <BlogCard post={featuredPost} featured />
        </div>
      </section>

      <section className="section-space bg-white" aria-labelledby="all-posts-title">
        <div className="container-shell">
          <div className="max-w-3xl">
            <span className="section-eyebrow">جميع المقالات</span>
            <h2 id="all-posts-title" className="section-title text-brand-950">
              أدلة مترابطة لكل مرحلة من طلب النجارة
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              اختر الدليل الأقرب لقرارك الحالي: مقارنة النجارين، تخطيط الخزانة،
              اختيار الخامة، تقدير التكلفة، أو صيانة قطعة قائمة.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {remainingPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="blog-bottom-cta">
        <div className="container-shell py-14 text-center sm:py-16">
          <h2 className="text-3xl font-black leading-[1.5] text-white">
            لديك صور أو مقاسات لعمل نجارة؟
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-white/70">
            أرسل نوع العمل واسم الحي والصور والمقاسات التقريبية، وسنحدد إن كان
            التقييم الأولي كافيًا أو يحتاج الطلب إلى معاينة.
          </p>
          <Link href="/contact" className="button-accent mt-7 min-h-12 px-7">
            أرسل تفاصيل الطلب
            <Icon name="arrow-left" className="size-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
