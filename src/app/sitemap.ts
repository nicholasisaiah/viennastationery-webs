import { MetadataRoute } from "next";
import { ARTICLES_DATA } from "@/data/articles";
import { PRODUCTS_DATA } from "@/data/products";

const BASE_URL = "https://vienna-stationery.my.id";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/journal`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/shop`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/people-behind-this-web`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/journal/archive`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const articlePages: MetadataRoute.Sitemap = ARTICLES_DATA.map((article) => ({
    url: `${BASE_URL}/journal/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const productPages: MetadataRoute.Sitemap = PRODUCTS_DATA.map((product) => ({
    url: `${BASE_URL}/shop/${product.slug}`,
    lastModified: new Date(product.dateAdded),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...staticPages, ...articlePages, ...productPages];
}
