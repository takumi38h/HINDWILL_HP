import type { Metadata } from "next";
import { DM_Sans, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/PageTransition";
import { LoadingProvider } from "@/contexts/LoadingContext";
import {
  SITE_URL,
  SITE_NAME,
  SITE_NAME_EN,
  SITE_LOGO,
  SITE_DESCRIPTION,
  jsonLdScript,
} from "@/lib/seo";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | ${SITE_NAME_EN}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_NAME_EN}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: SITE_LOGO,
        width: 1200,
        height: 630,
        alt: "HINDWILL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_NAME_EN}`,
    description: SITE_DESCRIPTION,
    images: [SITE_LOGO],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/will-logo-compass.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: SITE_NAME_EN,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: SITE_LOGO,
    contentUrl: SITE_LOGO,
  },
  image: SITE_LOGO,
  description: SITE_DESCRIPTION,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "takumi.hashizume@hindwill.com",
    url: `${SITE_URL}/contact`,
    availableLanguage: ["ja", "en"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  inLanguage: "ja-JP",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="overflow-x-hidden" suppressHydrationWarning>
      <head>
        <script {...jsonLdScript(organizationJsonLd)} />
        <script {...jsonLdScript(websiteJsonLd)} />
      </head>
      <body className={`${dmSans.variable} ${notoSansJP.variable} antialiased overflow-x-hidden`}>
        <LoadingProvider>
          <PageTransition>
            {children}
          </PageTransition>
        </LoadingProvider>
      </body>
    </html>
  );
}
