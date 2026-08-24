"use client";

import { useEffect, useRef, useState } from "react";

import { Icon } from "@/components/Icon";
import { ADDRESS, MAP_EMBED_URL, MAPS_URL } from "@/data/site";

type MapEmbedProps = {
  compact?: boolean;
};

export function MapEmbed({ compact = false }: MapEmbedProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const heightClass = compact ? "h-[340px]" : "h-[450px]";

  useEffect(() => {
    const mapContainer = mapContainerRef.current;

    if (!mapContainer) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setShouldLoadMap(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "500px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(mapContainer);

    return () => observer.disconnect();
  }, []);

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

      <div
        ref={mapContainerRef}
        id="business-map"
        className={`${heightClass} relative overflow-hidden bg-sand-50`}
        aria-busy={!shouldLoadMap}
      >
        {shouldLoadMap ? (
          <iframe
            src={MAP_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="موقع النعيم للمقاولات وأعمال النجارة في حي المصيف بالرياض"
            className="block"
          />
        ) : (
          <div
            role="status"
            aria-live="polite"
            className="grid h-full place-items-center bg-[radial-gradient(circle_at_center,rgba(223,184,118,0.16),transparent_55%)] p-6 text-center"
          >
            <div>
              <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-brand-950 text-white shadow-xl shadow-brand-950/20">
                <Icon name="map-pin" className="size-7" />
              </span>
              <p className="mt-4 text-sm font-extrabold text-brand-950">
                يتم تجهيز الخريطة تلقائيًا…
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
