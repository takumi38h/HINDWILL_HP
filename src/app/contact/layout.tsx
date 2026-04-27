import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  breadcrumbJsonLd,
  jsonLdScript,
} from "@/lib/seo";

const TITLE = "お問い合わせ";
const DESCRIPTION =
  "株式会社HINDWILLへのお問い合わせフォーム。ご相談・お見積り・取材依頼などを承ります。初回相談は無料です。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/contact`,
  },
  twitter: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "ホーム", path: "/" },
  { name: TITLE, path: "/contact" },
]);

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `${TITLE} | ${SITE_NAME}`,
  url: `${SITE_URL}/contact`,
  description: DESCRIPTION,
  about: { "@id": `${SITE_URL}/#organization` },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script {...jsonLdScript(breadcrumb)} />
      <script {...jsonLdScript(contactPageJsonLd)} />
      {children}
    </>
  );
}
