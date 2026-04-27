import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  breadcrumbJsonLd,
  jsonLdScript,
} from "@/lib/seo";

const TITLE = "会社概要";
const DESCRIPTION =
  "株式会社HINDWILLの会社概要。代表取締役 橋爪拓海 のメッセージ、企業理念、会社情報をご紹介します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/company" },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/company`,
  },
  twitter: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "ホーム", path: "/" },
  { name: TITLE, path: "/company" },
]);

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `${TITLE} | ${SITE_NAME}`,
  url: `${SITE_URL}/company`,
  description: DESCRIPTION,
  mainEntity: { "@id": `${SITE_URL}/#organization` },
};

const ceoJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "橋爪 拓海",
  alternateName: "Takumi Hashizume",
  jobTitle: "代表取締役",
  worksFor: { "@id": `${SITE_URL}/#organization` },
  url: `${SITE_URL}/company`,
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script {...jsonLdScript(breadcrumb)} />
      <script {...jsonLdScript(aboutPageJsonLd)} />
      <script {...jsonLdScript(ceoJsonLd)} />
      {children}
    </>
  );
}
