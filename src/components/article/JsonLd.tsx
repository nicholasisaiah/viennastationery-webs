import React from "react";
import { Article } from "@/data/articles";

interface JsonLdProps {
  article: Article;
  baseUrl?: string;
}

export function JsonLd({ article, baseUrl = "https://vienna-stationery.com" }: JsonLdProps) {
  const articleUrl = `${baseUrl}/journal/${article.slug}`;

  const blogPostingData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: [article.image.startsWith("http") ? article.image : `${baseUrl}${article.image}`],
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Vienna Stationery",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/favicon.ico`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Journal",
        item: `${baseUrl}/journal`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.category,
        item: `${baseUrl}/journal?kategori=${encodeURIComponent(article.category.toLowerCase())}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  );
}
