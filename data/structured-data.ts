import { businessProofImages } from "@/data/businessProof";
import {
  BUSINESS_CATEGORY,
  BUSINESS_DESCRIPTION,
  BUSINESS_NAME,
  COORDINATES,
  MAPS_URL,
  PHONE_E164,
  SITE_URL,
} from "@/data/site";
import { services } from "@/data/services";
import { featuredWorkImage } from "@/data/workProjects";

export type StructuredDataNode = Record<string, unknown>;

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_ID = `${SITE_URL}/#logo`;

const businessImages = [
  {
    src: featuredWorkImage.src,
    width: featuredWorkImage.width,
    height: featuredWorkImage.height,
    caption: featuredWorkImage.title,
    description: featuredWorkImage.alt,
  },
  ...businessProofImages.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
    caption: image.title,
    description: image.alt,
  })),
];

export const businessSchema: StructuredDataNode = {
  "@type": "HomeAndConstructionBusiness",
  "@id": BUSINESS_ID,
  name: BUSINESS_NAME,
  alternateName: "النعيم للنجارة",
  description: BUSINESS_DESCRIPTION,
  category: BUSINESS_CATEGORY,
  url: SITE_URL,
  telephone: PHONE_E164,
  identifier: {
    "@type": "PropertyValue",
    propertyID: "Google Maps CID",
    value: "3969435420157689533",
  },
  logo: {
    "@type": "ImageObject",
    "@id": LOGO_ID,
    url: `${SITE_URL}/icon.svg`,
    contentUrl: `${SITE_URL}/icon.svg`,
    width: 512,
    height: 512,
    caption: BUSINESS_NAME,
  },
  image: businessImages.map((image, index) => ({
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#business-image-${index + 1}`,
    url: `${SITE_URL}${image.src}`,
    contentUrl: `${SITE_URL}${image.src}`,
    width: image.width,
    height: image.height,
    caption: image.caption,
    description: image.description,
  })),
  hasMap: MAPS_URL,
  sameAs: [MAPS_URL],
  address: {
    "@type": "PostalAddress",
    streetAddress: "3612 حمل بن مالك، 6642، حي المصيف",
    addressLocality: "الرياض",
    addressRegion: "منطقة الرياض",
    postalCode: "12465",
    addressCountry: "SA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: COORDINATES.latitude,
    longitude: COORDINATES.longitude,
  },
  areaServed: {
    "@type": "City",
    name: "الرياض",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE_E164,
    contactType: "customer service",
    areaServed: "SA",
    availableLanguage: {
      "@type": "Language",
      name: "Arabic",
      alternateName: "ar",
    },
  },
  knowsAbout: services.map((service) => service.shortName),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    "@id": `${SITE_URL}/#services`,
    name: "خدمات النجارة في الرياض",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      url: `${SITE_URL}/services/${service.slug}`,
      itemOffered: {
        "@type": "Service",
        "@id": `${SITE_URL}/services/${service.slug}#service`,
        name: service.shortName,
        description: service.metaDescription,
        areaServed: { "@type": "City", name: "الرياض" },
        provider: { "@id": BUSINESS_ID },
      },
    })),
  },
};

export const websiteSchema: StructuredDataNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: BUSINESS_NAME,
  alternateName: "النعيم للنجارة",
  description: BUSINESS_DESCRIPTION,
  inLanguage: "ar-SA",
  publisher: { "@id": BUSINESS_ID },
};

export const sitewideSchema: StructuredDataNode = {
  "@context": "https://schema.org",
  "@graph": [businessSchema, websiteSchema],
};

export function createBreadcrumbSchema(
  items: BreadcrumbItem[],
  id: string,
): StructuredDataNode {
  return {
    "@type": "BreadcrumbList",
    "@id": id,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

type WebPageSchemaInput = {
  id: string;
  url: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  breadcrumbId?: string;
  aboutId?: string;
  primaryImageUrl?: string;
};

export function createWebPageSchema({
  id,
  url,
  name,
  description,
  type = "WebPage",
  breadcrumbId,
  aboutId,
  primaryImageUrl,
}: WebPageSchemaInput): StructuredDataNode {
  return {
    "@type": type,
    "@id": id,
    url,
    name,
    description,
    inLanguage: "ar-SA",
    isPartOf: { "@id": WEBSITE_ID },
    ...(breadcrumbId ? { breadcrumb: { "@id": breadcrumbId } } : {}),
    ...(aboutId ? { about: { "@id": aboutId } } : {}),
    ...(primaryImageUrl
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: primaryImageUrl,
            contentUrl: primaryImageUrl,
          },
        }
      : {}),
  };
}

export function createSchemaGraph(
  nodes: StructuredDataNode[],
): StructuredDataNode {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
