import Link from "next/link";

import { Icon } from "@/components/Icon";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  inverted?: boolean;
};

export function Breadcrumbs({ items, inverted = false }: BreadcrumbsProps) {
  return (
    <nav aria-label="مسار التنقل">
      <ol
        className={`flex flex-wrap items-center gap-2 text-xs font-bold ${
          inverted ? "text-white/60" : "text-slate-500"
        }`}
      >
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 && (
              <span aria-hidden="true" className="text-current/40">
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className={`inline-flex items-center gap-1.5 transition ${
                  inverted ? "hover:text-white" : "hover:text-brand-700"
                }`}
              >
                {index === 0 && <Icon name="home" className="size-3.5" />}
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
