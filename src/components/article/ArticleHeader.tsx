"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Article } from "@/data/articles";

interface ArticleHeaderProps {
  article: Article;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  const { lang, t } = useLanguage();

  // Use translated title/excerpt/category when lang = "id", else use original (English)
  const title =
    lang === "id"
      ? t(`articles.${article.slug}.title`) !== `articles.${article.slug}.title`
        ? t(`articles.${article.slug}.title`)
        : article.title
      : article.title;

  const excerpt =
    lang === "id"
      ? t(`articles.${article.slug}.excerpt`) !== `articles.${article.slug}.excerpt`
        ? t(`articles.${article.slug}.excerpt`)
        : article.excerpt
      : article.excerpt;

  const category =
    lang === "id"
      ? t(`articles.${article.slug}.category`) !== `articles.${article.slug}.category`
        ? t(`articles.${article.slug}.category`)
        : article.category
      : article.category;

  const byLabel = lang === "id" ? "Oleh" : "By";

  return (
    <header className="py-12 md:py-16 text-center px-4 max-w-3xl mx-auto space-y-4">
      <nav
        className="flex items-center justify-center gap-2 text-xs font-outfit font-bold uppercase tracking-[0.2em]"
        aria-label="Breadcrumb"
      >
        <Link
          href="/journal"
          className="text-vienna-text-muted hover:text-vienna-text-heading transition-colors"
        >
          {lang === "id" ? "JURNAL" : "JOURNAL"}
        </Link>
        <span className="text-vienna-text-light" aria-hidden="true">
          /
        </span>
        <Link
          href={`/journal?kategori=${encodeURIComponent(article.category.toLowerCase())}`}
          className="text-vienna-rose hover:underline"
        >
          {category}
        </Link>
      </nav>

      <h1 className="font-fredoka font-bold text-vienna-text-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
        {title}
      </h1>

      <p className="font-nunito text-vienna-text-muted text-base sm:text-lg max-w-2xl mx-auto line-clamp-2 leading-relaxed">
        {excerpt}
      </p>

      <div className="flex items-center justify-center gap-2.5 pt-2 text-xs font-nunito text-vienna-text-muted">
        <div className="relative w-7 h-7 rounded-full overflow-hidden border border-vienna-rose/40">
          <Image
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=56&q=80"
            alt={article.author}
            fill
            className="object-cover"
            sizes="28px"
          />
        </div>
        <span className="font-semibold text-vienna-text-heading">
          {byLabel} {article.author}
        </span>
        <span className="text-vienna-rose" aria-hidden="true">
          &bull;
        </span>
        <time dateTime={article.date}>{article.date}</time>
        <span className="text-vienna-rose" aria-hidden="true">
          &bull;
        </span>
        <span>{article.readTime}</span>
      </div>

      <div className="w-full h-[1px] bg-vienna-lavender/50 mt-6" aria-hidden="true" />
    </header>
  );
}

