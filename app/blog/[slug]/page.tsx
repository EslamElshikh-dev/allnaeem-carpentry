import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogCard } from "@/components/BlogCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import {
  blogPostBySlug,
  blogPosts,
  getRelatedPosts,
} from "@/data/blog";
import {
  BUSINESS_NAME,
  SITE_URL,
  buildWhatsAppUrl,
} from "@/data/site";
import {
  BUSINESS_ID,
  createBreadcrumbSchema,
  createSchemaGraph,
  createWebPageSchema,
} from "@/data/structured-data";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostBySlug.get(slug);
  if (!post) return {};

  return {
    title: { absolute: `${post.title} | ${BUSINESS_NAME}` },
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: BUSINESS_NAME, url: SITE_URL }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      locale: "ar_SA",
      url: `${SITE_URL}/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.published,
      modifiedTime: post.modified,
      section: post.category,
      tags: post.keywords,
      images: [{ url: `${SITE_URL}${post.image}`, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${SITE_URL}${post.image}`],
    },
  };
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("ar-SA", {
    calendar: "gregory",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));

const countPostWords = (post: (typeof blogPosts)[number]) =>
  [
    post.title,
    post.description,
    ...post.introduction,
    ...post.takeaways,
    ...post.sections.flatMap((section) => [
      section.heading,
      ...section.paragraphs,
      ...(section.bullets ?? []),
    ]),
    ...post.faqs.flatMap((faq) => [faq.question, faq.answer]),
  ]
    .join(" ")
    .trim()
    .split(/\s+/u).length;

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPostBySlug.get(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post);
  const pageUrl = `${SITE_URL}/blog/${post.slug}`;
  const pageId = `${pageUrl}#webpage`;
  const articleId = `${pageUrl}#article`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const imageUrl = `${SITE_URL}${post.image}`;
  const serviceUrl = `/services/${post.serviceSlug}`;
  const whatsappMessage = `السلام عليكم، قرأت مقال ${post.shortTitle} وأرغب في الاستفسار عن خدمة النجارة في الرياض.`;

  const articleSchema = {
    "@type": "BlogPosting",
    "@id": articleId,
    headline: post.title,
    description: post.description,
    image: {
      "@type": "ImageObject",
      "@id": `${pageUrl}#primaryimage`,
      url: imageUrl,
      contentUrl: imageUrl,
      caption: post.imageAlt,
      representativeOfPage: true,
    },
    thumbnailUrl: imageUrl,
    datePublished: post.published,
    dateModified: post.modified,
    inLanguage: "ar-SA",
    mainEntityOfPage: { "@id": pageId },
    author: {
      "@type": "Organization",
      "@id": BUSINESS_ID,
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": BUSINESS_ID,
      name: BUSINESS_NAME,
      url: SITE_URL,
      logo: { "@id": `${SITE_URL}/#logo` },
    },
    isPartOf: { "@id": `${SITE_URL}/blog#blog` },
    isAccessibleForFree: true,
    wordCount: countPostWords(post),
    about: { "@type": "Thing", name: post.primaryKeyword },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
  };

  const breadcrumbSchema = createBreadcrumbSchema(
    [
      { name: "الرئيسية", url: SITE_URL },
      { name: "مدونة النجارة", url: `${SITE_URL}/blog` },
      { name: post.shortTitle, url: pageUrl },
    ],
    breadcrumbId,
  );

  const structuredData = createSchemaGraph([
    createWebPageSchema({
      id: pageId,
      url: pageUrl,
      name: post.title,
      description: post.description,
      breadcrumbId,
      aboutId: articleId,
      primaryImageUrl: imageUrl,
    }),
    articleSchema,
    breadcrumbSchema,
  ]);

  return (
    <main>
      <JsonLd data={structuredData} />

      <article>
        <header className="article-hero">
          <div className="hero-grid opacity-25" aria-hidden="true" />
          <div className="container-shell relative py-12 sm:py-16 lg:py-20">
            <Breadcrumbs
              inverted
              items={[
                { label: "الرئيسية", href: "/" },
                { label: "المدونة", href: "/blog" },
                { label: post.shortTitle },
              ]}
            />
            <div className="mt-9 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="article-label">{post.category}</span>
                  <span className="article-label">{post.readingMinutes} دقائق قراءة</span>
                </div>
                <h1 className="mt-5 text-4xl font-black leading-[1.5] text-white sm:text-5xl">
                  {post.title}
                </h1>
                <p className="mt-5 text-base leading-8 text-white/70 sm:text-lg">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-white/55">
                  <span>إعداد: {BUSINESS_NAME}</span>
                  <span>نشر: {formatDate(post.published)}</span>
                  <span>آخر تحديث: {formatDate(post.modified)}</span>
                </div>
              </div>
              <div className="article-hero-image">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="article-shell">
          <div className="article-layout">
            <div className="article-content">
              <div className="article-introduction">
                {post.introduction.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <section className="article-summary" aria-labelledby="summary-title">
                <span>الخلاصة السريعة</span>
                <h2 id="summary-title">أهم ما ستخرج به من الدليل</h2>
                <ul>
                  {post.takeaways.map((takeaway) => (
                    <li key={takeaway}>
                      <Icon name="check" className="size-5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {post.sections.map((section) => (
                <section key={section.id} id={section.id} className="article-section">
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <aside className="article-inline-cta" aria-label="خدمة مرتبطة بالمقال">
                <span>الخطوة التالية</span>
                <h2>حوّل المعلومات إلى طلب نجارة واضح</h2>
                <p>
                  اطّلع على نطاق الخدمة، ثم أرسل صور المساحة والمقاسات الأولية
                  واسم الحي للحصول على تقييم مناسب لطلبك.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href={serviceUrl} className="button-accent min-h-12 px-6">
                    عرض الخدمة المرتبطة
                    <Icon name="arrow-left" className="size-5" />
                  </Link>
                  <a
                    href={buildWhatsAppUrl(whatsappMessage)}
                    target="_blank"
                    rel="noreferrer"
                    className="article-whatsapp-link"
                  >
                    <Icon name="whatsapp" className="size-5" />
                    إرسال الطلب عبر واتساب
                  </a>
                </div>
              </aside>

              <section className="article-faq" aria-labelledby="article-faq-title">
                <span className="section-eyebrow">أسئلة شائعة</span>
                <h2 id="article-faq-title">إجابات مختصرة قبل التواصل</h2>
                <div className="mt-7 space-y-3">
                  {post.faqs.map((faq) => (
                    <details key={faq.question} className="faq-item">
                      <summary>
                        <span>{faq.question}</span>
                        <span className="faq-icon" aria-hidden="true">
                          <Icon name="chevron-down" className="size-4" />
                        </span>
                      </summary>
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            <aside className="article-sidebar" aria-label="فهرس المقال وروابط مفيدة">
              <nav className="article-toc" aria-label="محتويات المقال">
                <span>في هذا الدليل</span>
                <ol>
                  {post.sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>{section.heading}</a>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className="article-side-cta">
                <Icon name="ruler" className="size-7 text-wood-300" />
                <h2>تحتاج قياسًا أو معاينة؟</h2>
                <p>جهز صور المساحة والمقاسات التقريبية واسم الحي.</p>
                <Link href="/contact" className="button-accent mt-5 min-h-11 w-full px-5">
                  تواصل مع النعيم
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <section className="section-space bg-sand-50" aria-labelledby="related-title">
        <div className="container-shell">
          <span className="section-eyebrow">المسار المعرفي</span>
          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="related-title" className="text-3xl font-black text-brand-950">
                أدلة مرتبطة تساعدك في القرار
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                تابع الموضوع من زاوية التخطيط أو الخامات أو اختيار مقدم الخدمة.
              </p>
            </div>
            <Link href="/blog" className="blog-text-link">
              كل المقالات
              <Icon name="arrow-left" className="size-4" />
            </Link>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedPosts.map((related) => (
              <BlogCard key={related.slug} post={related} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
