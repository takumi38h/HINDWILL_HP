import type { MetadataRoute } from "next";

const SITE_URL = "https://hindwill.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/service", priority: 0.9, changeFrequency: "monthly" },
    { path: "/company", priority: 0.8, changeFrequency: "monthly" },
    { path: "/weare", priority: 0.8, changeFrequency: "monthly" },
    { path: "/recruit", priority: 0.7, changeFrequency: "weekly" },
    { path: "/news", priority: 0.7, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
