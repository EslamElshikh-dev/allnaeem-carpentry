import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import type { BlogPost } from "@/data/blog";

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
};

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article className={`blog-card group ${featured ? "blog-card-featured" : ""}`}>
      <Link
        href={`/blog/${post.slug}`}
        className="blog-card-image"
        aria-label={`قراءة: ${post.title}`}
      >
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 52vw"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="blog-card-body">
        <div className="blog-meta-row">
          <span>{post.category}</span>
          <span>{post.readingMinutes} دقائق قراءة</span>
        </div>
        <h2 className="blog-card-title">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="blog-card-link">
          قراءة الدليل
          <Icon name="arrow-left" className="size-4" />
        </Link>
      </div>
    </article>
  );
}
