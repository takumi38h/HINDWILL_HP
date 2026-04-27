import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  breadcrumbJsonLd,
  jsonLdScript,
} from "@/lib/seo";

const TITLE = "WE ARE";
const DESCRIPTION =
  "HINDWILLのビジョンとバリュー。私たちが大切にする価値観と、組織のあり方をご紹介します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/weare" },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/weare`,
  },
  twitter: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "ホーム", path: "/" },
  { name: TITLE, path: "/weare" },
]);

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `${TITLE} | ${SITE_NAME}`,
  url: `${SITE_URL}/weare`,
  description: DESCRIPTION,
  about: { "@id": `${SITE_URL}/#organization` },
};

export default function WeAreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script {...jsonLdScript(breadcrumb)} />
      <script {...jsonLdScript(aboutPageJsonLd)} />
      {children}
    </>
  );
}
