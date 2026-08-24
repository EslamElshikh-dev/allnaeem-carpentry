import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "hammer"
  | "repair"
  | "wardrobe"
  | "cabinet"
  | "phone"
  | "whatsapp"
  | "map-pin"
  | "menu"
  | "close"
  | "arrow-left"
  | "check"
  | "ruler"
  | "shield"
  | "sparkles"
  | "clock"
  | "home"
  | "users"
  | "chevron-down"
  | "external-link"
  | "send";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

const commonProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Icon({ name, className, ...props }: IconProps) {
  const paths: Record<Exclude<IconName, "whatsapp">, ReactNode> = {
    hammer: (
      <>
        <path d="m14.7 5.3 4 4" />
        <path d="m12.2 7.8 4 4" />
        <path d="m13.4 6.6 2.2-2.2a2.8 2.8 0 0 1 4 4l-2.2 2.2" />
        <path d="M4 20 14.3 9.7" />
        <path d="m3.2 18.8 2 2" />
      </>
    ),
    repair: (
      <>
        <path d="M14.7 6.3a4.5 4.5 0 0 0-5.8 5.8L3.6 17.4a2.1 2.1 0 0 0 3 3l5.3-5.3a4.5 4.5 0 0 0 5.8-5.8l-2.8 2.8-3-3 2.8-2.8Z" />
        <path d="m5.1 18.9.1.1" />
      </>
    ),
    wardrobe: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M12 3v18" />
        <path d="M8.7 11.8h.1" />
        <path d="M15.2 11.8h.1" />
        <path d="M4 7h16" />
      </>
    ),
    cabinet: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M4 10h16" />
        <path d="M12 10v11" />
        <path d="M8.7 6.5h6.6" />
        <path d="M8.5 15.5h.1" />
        <path d="M15.4 15.5h.1" />
      </>
    ),
    phone: (
      <path d="M21 15.5v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 1.1 2.8 2 2 0 0 1 3.1.6h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L7.1 8.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 1.9Z" />
    ),
    "map-pin": (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
    "arrow-left": (
      <>
        <path d="M19 12H5" />
        <path d="m12 19-7-7 7-7" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    ruler: (
      <>
        <path d="m3 17 14-14 4 4L7 21H3v-4Z" />
        <path d="m14 6 4 4" />
        <path d="m11 9 2 2" />
        <path d="m8 12 2 2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    sparkles: (
      <>
        <path d="m12 3-1 3-3 1 3 1 1 3 1-3 3-1-3-1-1-3Z" />
        <path d="m18 13-.7 2.3L15 16l2.3.7L18 19l.7-2.3L21 16l-2.3-.7L18 13Z" />
        <path d="m5 14-.7 2.3L2 17l2.3.7L5 20l.7-2.3L8 17l-2.3-.7L5 14Z" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
        <path d="M16 3.1a4 4 0 0 1 0 7.8" />
      </>
    ),
    "chevron-down": <path d="m6 9 6 6 6-6" />,
    "external-link": (
      <>
        <path d="M15 3h6v6" />
        <path d="M10 14 21 3" />
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      </>
    ),
    send: (
      <>
        <path d="m22 2-7 20-4-9-9-4 20-7Z" />
        <path d="M22 2 11 13" />
      </>
    ),
  };

  if (name === "whatsapp") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={className}
        {...props}
      >
        <path
          fill="currentColor"
          d="M12.04 2a9.83 9.83 0 0 0-8.46 14.82L2 22l5.34-1.53A9.96 9.96 0 1 0 12.04 2Zm0 17.95a8.05 8.05 0 0 1-4.1-1.13l-.3-.18-3.17.91.92-3.08-.2-.32a7.91 7.91 0 1 1 6.85 3.8Zm4.34-5.92c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1-.37-1.91-1.18a7.2 7.2 0 0 1-1.32-1.64c-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.4-.58 1.6-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      {...commonProps}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
