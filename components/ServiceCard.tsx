import Link from "next/link";

import { Icon } from "@/components/Icon";
import { buildWhatsAppUrl } from "@/data/site";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="service-card group">
      <div className="service-icon-stage" aria-hidden="true">
        <span className="service-icon-shadow" />
        <span className="service-icon-cube">
          <Icon name={service.icon} className="size-10" />
        </span>
      </div>

      <span className="text-xs font-extrabold text-wood-700">{service.eyebrow}</span>
      <h3 className="mt-3 text-xl font-black text-brand-950">
        <Link
          href={`/services/${service.slug}`}
          className="transition group-hover:text-brand-700"
        >
          {service.shortName}
        </Link>
      </h3>
      <p className="mt-3 min-h-[5.25rem] text-sm leading-7 text-slate-600">
        {service.shortDescription}
      </p>

      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-brand-900/10 bg-sand-50 px-3 text-xs font-extrabold text-brand-950 transition hover:border-brand-700/20 hover:bg-brand-50"
        >
          تفاصيل الخدمة
          <Icon name="arrow-left" className="size-4" />
        </Link>
        <a
          href={buildWhatsAppUrl(service.whatsappMessage)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-brand-950 px-3 text-xs font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-brand-800"
        >
          <Icon name="whatsapp" className="size-4" />
          اطلب هذه الخدمة
        </a>
      </div>
    </article>
  );
}
