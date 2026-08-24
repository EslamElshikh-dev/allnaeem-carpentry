import type { Service } from "@/data/service-types";
import { carpentryRepair } from "@/data/services/carpentry-repair";
import { customCabinets } from "@/data/services/custom-cabinets";
import { customWardrobes } from "@/data/services/custom-wardrobes";
import { generalCarpentry } from "@/data/services/general-carpentry";

export type {
  Service,
  ServiceFaq,
  ServiceIconName,
  ServiceSection,
} from "@/data/service-types";

export const services: Service[] = [
  generalCarpentry,
  carpentryRepair,
  customWardrobes,
  customCabinets,
];

export const serviceBySlug = new Map(
  services.map((service) => [service.slug, service]),
);
