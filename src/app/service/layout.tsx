import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  SITE_LOGO,
  breadcrumbJsonLd,
  jsonLdScript,
} from "@/lib/seo";

const TITLE = "サービス";
const DESCRIPTION =
  "ハンズオン型コンサルティングサービス。セールスコンサルティングを中心に、お客様のビジネス成長を伴走支援します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/service" },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/service`,
  },
  twitter: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "ホーム", path: "/" },
  { name: TITLE, path: "/service" },
]);

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ハンズオン型コンサルティングサービス",
  serviceType: "セールスコンサルティング",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "Japan" },
  description: DESCRIPTION,
  url: `${SITE_URL}/service`,
  image: SITE_LOGO,
};

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script {...jsonLdScript(breadcrumb)} />
      <script {...jsonLdScript(serviceJsonLd)} />
      {children}
    </>
  );
}
