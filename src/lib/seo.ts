export const SITE_URL = "https://hindwill.com";
export const SITE_NAME = "株式会社HINDWILL";
export const SITE_NAME_EN = "HINDWILL Inc.";
export const SITE_LOGO = `${SITE_URL}/will-logo-compass.png`;
export const SITE_DESCRIPTION =
  "株式会社HINDWILL（代表取締役：橋爪拓海）。テクノロジーが届かない、最後の1マイルを。人と組織の可能性を引き出し、企業の成長を支援するハンズオン型コンサルティング会社です。";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function absoluteUrl(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function jsonLdScript(data: object) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(data) },
  };
}
