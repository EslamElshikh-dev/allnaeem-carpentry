import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServicePage } from "@/components/ServicePage";
import { SITE_URL } from "@/data/site";
import { serviceBySlug, services } from "@/data/services";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug.get(slug);
  if (!service) return {};

  return {
    title: { absolute: service.pageTitle },
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      type: "website",
      locale: "ar_SA",
      url: `${SITE_URL}/services/${service.slug}`,
      title: service.pageTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceRoute({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceBySlug.get(slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
