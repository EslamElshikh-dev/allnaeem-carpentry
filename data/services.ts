import type { Service } from "@/data/service-types";
import { paintServices } from "@/data/services/paint-services";

export type {
  Service,
  ServiceFaq,
  ServiceIconName,
  ServiceSection,
} from "@/data/service-types";

export const services: Service[] = paintServices;

export const serviceBySlug = new Map(
  services.map((service) => [service.slug, service]),
);
