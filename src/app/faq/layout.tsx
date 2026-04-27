import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_URL,
  breadcrumbJsonLd,
  jsonLdScript,
} from "@/lib/seo";
import { FAQS } from "@/data/faqs";

const TITLE = "よくある質問";
const DESCRIPTION =
  "株式会社HINDWILLへのよくある質問。サービス内容、料金、相談方法、対応範囲などをまとめています。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/faq`,
  },
  twitter: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "ホーム", path: "/" },
  { name: TITLE, path: "/faq" },
]);

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE_URL}/faq`,
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script {...jsonLdScript(breadcrumb)} />
      <script {...jsonLdScript(faqPageJsonLd)} />
      {children}
    </>
  );
}
