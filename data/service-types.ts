export type ServiceIconName =
  | "hammer"
  | "repair"
  | "wardrobe"
  | "cabinet"
  | "sparkles"
  | "ruler"
  | "shield"
  | "home";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: ServiceIconName;
  eyebrow: string;
  pageTitle: string;
  metaDescription: string;
  shortDescription: string;
  heroDescription: string;
  whatsappMessage: string;
  keywords: string[];
  highlights: string[];
  process: { title: string; description: string }[];
  sections: ServiceSection[];
  faq: ServiceFaq[];
};
