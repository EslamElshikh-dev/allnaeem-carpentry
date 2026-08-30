import Link from "next/link";

import { BlogCard } from "@/components/BlogCard";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts } from "@/data/blog";

export function BlogPreview() {
  return (
    <section className="section-space bg-sand-50">
      <div className="container-shell">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="دليل النجارة"
              title="مقالات تساعدك قبل القياس والتفصيل"
              description="أدلة عملية عن اختيار النجار، تفصيل الخزائن، الخامات، التكلفة، وفحص التركيب داخل الرياض."
            />
            <Link href="/blog" className="button-secondary min-h-12 shrink-0 px-6">
              جميع المقالات
              <Icon name="arrow-left" className="size-5" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, index) => (
            <Reveal key={post.slug} delay={index * 80}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
