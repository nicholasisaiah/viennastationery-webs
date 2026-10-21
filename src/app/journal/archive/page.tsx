"use client";

import React from "react";
import Link from "next/link";
import { ARTICLES_DATA } from "@/data/articles";
import { CtaFooterSection } from "@/components/layout/CtaFooterSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { TRANSLATIONS } from "@/data/translations";

export default function JournalArchivePage() {
  const { t, lang } = useLanguage();

  // Resolve translated article metadata
  const idArticles = TRANSLATIONS.id.articles as Record<string, { title: string; excerpt: string; category: string }>;
  const enArticles = TRANSLATIONS.en.articles as Record<string, { title: string; excerpt: string; category: string }>;

  const articles = ARTICLES_DATA.map((art) => {
    const overrides = lang === "id" ? idArticles[art.slug] : enArticles[art.slug];
    return {
      ...art,
      title: overrides?.title ?? art.title,
      excerpt: overrides?.excerpt ?? art.excerpt,
      category: overrides?.category ?? art.category,
    };
  });

  return (
    <div className="min-h-screen bg-vienna-cream flex flex-col justify-between font-nunito">
      <div>
        <section className="py-16 bg-vienna-paper-gray paper-texture text-center px-4">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-vienna-rose font-outfit text-xs font-bold uppercase tracking-widest px-4 py-1.5 bg-white rounded-pill shadow-soft">
              {lang === "id" ? "ARSIP JURNAL" : "JOURNAL ARCHIVE"}
            </span>
            <h1 className="font-fredoka font-bold text-vienna-text-heading text-3xl sm:text-4xl md:text-5xl">
              {lang === "id" ? "Semua Tulisan" : "Archived Moments"}{" "}
              <span className="text-vienna-rose-light">♡</span>
            </h1>
            <p className="font-nunito text-vienna-text-muted text-sm sm:text-base max-w-lg mx-auto">
              {lang === "id"
                ? "Jelajahi semua cerita, tips, dan refleksi kreatif dari Vienna."
                : "Explore our complete collection of stories, desk tours, and quiet reflections."}
            </p>
          </div>
        </section>

        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <span className="font-outfit text-xs font-bold text-vienna-text-muted uppercase tracking-wider">
              {lang === "id"
                ? `MENAMPILKAN ${ARTICLES_DATA.length} ARTIKEL`
                : `SHOWING ALL ${ARTICLES_DATA.length} STORIES`}
            </span>
            <Link
              href="/journal"
              className="font-outfit text-xs font-bold text-vienna-rose uppercase tracking-widest hover:underline"
            >
              {lang === "id" ? "← KEMBALI KE JURNAL" : "← BACK TO JOURNAL"}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {articles.map((art) => (
              <Link
                key={art.id}
                href={`/journal/${art.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-soft hover-lift transition-all duration-300 border border-vienna-lavender/30"
              >
                <div className="relative w-full h-48 bg-vienna-offwhite overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-vienna-text-dark text-[10px] font-outfit font-bold uppercase tracking-widest px-3 py-1 rounded-pill">
                    {art.category}
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-vienna-rose text-[10px] font-outfit font-bold uppercase tracking-widest">
                    {art.category}
                  </span>
                  <h3 className="font-fredoka font-bold text-vienna-text-heading text-base sm:text-lg mt-1 leading-snug group-hover:text-vienna-rose transition-colors">
                    {art.title}
                  </h3>
                  {art.excerpt && (
                    <p className="font-nunito text-vienna-text-muted text-xs mt-2 line-clamp-2">
                      {art.excerpt}
                    </p>
                  )}
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-vienna-text-light text-xs font-nunito">{art.readTime}</span>
                    <span className="text-vienna-rose/40">·</span>
                    <span className="text-vienna-text-light text-xs font-nunito">{art.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <CtaFooterSection />
    </div>
  );
}
