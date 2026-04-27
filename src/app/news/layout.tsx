import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  breadcrumbJsonLd,
  jsonLdScript,
} from "@/lib/seo";

const TITLE = "お知らせ";
const DESCRIPTION =
  "株式会社HINDWILLからの最新のお知らせ・プレスリリース一覧。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/news" },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/news`,
  },
  twitter: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "ホーム", path: "/" },
  { name: TITLE, path: "/news" },
]);

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `${TITLE} | ${SITE_NAME}`,
  url: `${SITE_URL}/news`,
  description: DESCRIPTION,
  isPartOf: { "@id": `${SITE_URL}/#website` },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script {...jsonLdScript(breadcrumb)} />
      <script {...jsonLdScript(collectionJsonLd)} />
      {children}
    </>
  );
}
