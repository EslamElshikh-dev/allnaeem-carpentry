import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/noto-sans-arabic/wght.css";
import "./globals.css";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { BUSINESS_DESCRIPTION, BUSINESS_NAME, SITE_URL } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: BUSINESS_NAME,
  title: {
    default: "دهانات ديكورات ورق جدران | أفضل مقاول دهانات وورشة دهانات بالرياض",
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: BUSINESS_DESCRIPTION,
  keywords: [
    "مقاول دهانات بالرياض",
    "دهانات بالرياض",
    "ورشة دهانات بالرياض",
    "دهانات داخلية بالرياض",
    "دهانات خارجية بالرياض",
    "تركيب ورق جدران بالرياض",
    "دهانات ديكورية بالرياض",
    "دهان فلل وشقق بالرياض",
    BUSINESS_NAME,
  ],
  authors: [{ name: BUSINESS_NAME, url: SITE_URL }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  category: "دهانات وديكورات وورق جدران",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    title: "دهانات ديكورات ورق جدران | أفضل مقاول دهانات وورشة دهانات بالرياض",
    description: BUSINESS_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "دهانات ديكورات ورق جدران | مقاول دهانات بالرياض",
    description: BUSINESS_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071d18",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-sand-50 text-brand-950 antialiased">
        <a href="#main-content" className="skip-link">الانتقال إلى المحتوى الرئيسي</a>
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
