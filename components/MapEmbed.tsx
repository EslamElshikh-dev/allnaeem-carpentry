"use client";

import { useState } from "react";

import { Icon } from "@/components/Icon";
import { ADDRESS, MAP_EMBED_URL, MAPS_URL } from "@/data/site";

type MapEmbedProps = {
  compact?: boolean;
};

export function MapEmbed({ compact = false }: MapEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const heightClass = compact ? "h-[340px]" : "h-[450px]";

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-brand-900/10 bg-white shadow-xl shadow-brand-950/10">
      <div className="flex flex-col gap-3 border-b border-black/5 bg-sand-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-950 text-white shadow-lg shadow-brand-950/20">
            <Icon name="map-pin" className="size-5" />
          </span>
          <div>
            <h3 className="text-sm font-black text-brand-950">
              موقع النشاط في الرياض
            </h3>
            <p className="mt-1 text-xs leading-6 text-slate-600">{ADDRESS}</p>
          </div>
        </div>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-xl border border-brand-900/10 bg-white px-4 text-xs font-extrabold text-brand-950 transition hover:border-brand-700/25 hover:bg-brand-50"
        >
          فتح في خرائط Google
          <Icon name="external-link" className="size-4" />
        </a>
      </div>

      <div id="business-map" className={heightClass}>
        {isLoaded ? (
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            title="موقع النعيم للمقاولات وأعمال النجارة في حي المصيف بالرياض"
            className="block"
          />
        ) : (
          <div className="grid h-full place-items-center bg-sand-50 p-6 text-center">
            <div className="max-w-md">
              <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-brand-950 text-white shadow-xl shadow-brand-950/20">
                <Icon name="map-pin" className="size-8" />
              </span>
              <h3 className="mt-5 text-xl font-black text-brand-950">
                خريطة الموقع التفاعلية
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                يتم تحميل خريطة Google عند الطلب لحماية الخصوصية، وتحسين سرعة
                الصفحة، وتجنّب تحميل موارد خارجية غير ضرورية.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  aria-controls="business-map"
                  aria-expanded={isLoaded}
                  onClick={() => setIsLoaded(true)}
                  className="button-primary min-h-12 px-6"
                >
                  <Icon name="map-pin" className="size-5" />
                  عرض الخريطة
                </button>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="button-secondary min-h-12 px-6"
                >
                  فتح الاتجاهات
                  <Icon name="external-link" className="size-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
