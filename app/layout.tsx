import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "@fontsource-variable/noto-sans-arabic/wght.css";
import "./globals.css";

import { FloatingButtons } from "@/components/FloatingButtons";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  BUSINESS_DESCRIPTION,
  BUSINESS_NAME,
  SITE_URL,
} from "@/data/site";

const googleVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
  "RhoDv6mIF2DsPd84eCLRiv9HGlPI-viiXPcJIJGafDM";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: BUSINESS_NAME,
  title: {
    default: `${BUSINESS_NAME} | نجار في الرياض`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: BUSINESS_DESCRIPTION,
  keywords: [
    "نجار في الرياض",
    "نجارة الرياض",
    "تصليح نجارة بالرياض",
    "تفصيل دواليب الرياض",
    "تفصيل خزائن الرياض",
    "نجار حي المصيف",
    BUSINESS_NAME,
  ],
  authors: [{ name: BUSINESS_NAME, url: SITE_URL }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  category: "خدمات النجارة والمقاولات",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    title: `${BUSINESS_NAME} | نجار في الرياض`,
    description: BUSINESS_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: `${BUSINESS_NAME} | نجار في الرياض`,
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
  verification: { google: googleVerification },
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
      <head>
        <link rel="describedby" href="/llms.txt" type="text/markdown" />
      </head>
      <body className="min-h-screen bg-sand-50 text-brand-950 antialiased">
        <a href="#main-content" className="skip-link">
          الانتقال إلى المحتوى الرئيسي
        </a>
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
