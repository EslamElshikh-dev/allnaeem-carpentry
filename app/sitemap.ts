import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { SITE_URL } from "@/data/site";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-24");
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: `${SITE_URL}/gallery`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date("2026-08-30"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.modified),
    changeFrequency: "monthly",
    priority: post === blogPosts[0] ? 0.85 : 0.8,
  }));
  return [...staticPages, ...servicePages, ...blogPages];
}
