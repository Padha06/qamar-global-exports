import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { products } from "@/lib/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { url: `${siteUrl}/`, priority: 1 },
    { url: `${siteUrl}/products`, priority: 0.9 },
    { url: `${siteUrl}/about`, priority: 0.7 },
    { url: `${siteUrl}/export-projects`, priority: 0.7 },
    { url: `${siteUrl}/certifications`, priority: 0.6 },
    { url: `${siteUrl}/contact`, priority: 0.8 },
  ];

  return routes.map((r) => ({
    url: r.url,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: r.priority,
  }));
}
