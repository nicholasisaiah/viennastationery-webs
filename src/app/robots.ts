import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/design-system", "/api/"],
      },
    ],
    sitemap: "https://vienna-stationery.my.id/sitemap.xml",
    host: "https://vienna-stationery.my.id",
  };
}
