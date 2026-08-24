import type { MetadataRoute } from "next";
import { BUSINESS_DESCRIPTION, BUSINESS_NAME } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BUSINESS_NAME,
    short_name: "النعيم للنجارة",
    description: BUSINESS_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#fbf8f3",
    theme_color: "#071d18",
    lang: "ar",
    dir: "rtl",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
