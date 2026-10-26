"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/data/articles";
import { useLanguage } from "@/contexts/LanguageContext";

interface LatestEntriesSectionProps {
  articles: Article[];
  showAll?: boolean;
}

export function LatestEntriesSection({ articles, showAll = false }: LatestEntriesSectionProps) {
  const { t, lang } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(showAll ? articles.length : 6);

  // Reset visible count when category changes
  React.useEffect(() => {
    setVisibleCount(showAll ? articles.length : 6);
  }, [showAll, articles.length]);

  // Helper: get translated field if lang=id
  const getTitle = (art: Article) => lang === "id"
    ? (t(`articles.${art.slug}.title`) !== `articles.${art.slug}.title` ? t(`articles.${art.slug}.title`) : art.title)
    : art.title;
  const getExcerpt = (art: Article) => lang === "id"
    ? (t(`articles.${art.slug}.excerpt`) !== `articles.${art.slug}.excerpt` ? t(`articles.${art.slug}.excerpt`) : art.excerpt)
    : art.excerpt;
  const getCategory = (art: Article) => lang === "id"
    ? (t(`articles.${art.slug}.category`) !== `articles.${art.slug}.category` ? t(`articles.${art.slug}.category`) : art.category)
    : art.category;

  if (!articles || articles.length === 0) {
    return (
      <section className="bg-vienna-cream py-16 text-center">
        <div className="max-w-md mx-auto px-4 py-12 bg-white rounded-2xl border border-vienna-lavender shadow-soft">
          <span className="text-vienna-rose text-3xl block mb-2" aria-hidden="true">
            ♡
          </span>
          <h3 className="font-fredoka text-xl font-bold text-vienna-text-heading">
            {lang === "id" ? "Tidak ada tulisan di kategori ini" : "No entries found in this category"}
          </h3>
          <p className="font-nunito text-vienna-text-muted text-sm mt-2">
            {lang === "id" ? "Pilih kategori lain di atas." : "Try choosing another category above."}
          </p>
        </div>
      </section>
    );
  }

  // Row 1 split: 1 large (8 cols) + 2 vertical (4 cols)
  const firstArticle = articles[0];
  const secondArticle = articles[1];
  const thirdArticle = articles[2];

  // Remaining articles for Row 2 + Load More
  const remainingArticles = articles.slice(3, visibleCount + 3);
  const hasMore = articles.length > visibleCount + 3;

  return (
    <section className="bg-vienna-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-vienna-lavender/50 mb-10">
          <div>
            <h2 className="font-fredoka font-bold text-vienna-text-heading text-2xl sm:text-3xl md:text-4xl">
              {t("journal.latestHeadline")} <span className="text-vienna-rose-light">♡</span>
              <span className="ml-2 text-base sm:text-lg font-outfit font-medium text-vienna-text-muted">
                ({articles.length} {lang === "id" ? "artikel" : "articles"})
              </span>
            </h2>
            <p className="font-nunito text-vienna-text-muted text-sm sm:text-base mt-1">
              {lang === "id" ? "Perspektif segar dan ritual kreatif." : "Fresh perspectives and creative rituals."}
            </p>
          </div>

          <Link href="/journal/archive" className="font-outfit text-xs font-bold text-vienna-rose uppercase tracking-[0.2em] hover:text-vienna-rose-dark transition-colors self-start sm:self-auto">
            {lang === "id" ? "SEMUA ARTIKEL →" : "ARCHIVED MOMENTS →"}
          </Link>
        </div>

        {/* 12-Column Editorial Grid: Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          
          {/* Big Featured Card (8 Columns) */}
          {firstArticle && (
            <Link
              href={`/journal/${firstArticle.slug}`}
              className="
                md:col-span-8 group block bg-white rounded-2xl overflow-hidden
                shadow-soft hover-lift transition-all duration-300
                flex flex-col justify-between border border-vienna-lavender/30
              "
            >
              <div className="relative w-full h-64 sm:h-80 md:h-96 bg-vienna-offwhite">
                <Image
                  src={firstArticle.image}
                  alt={firstArticle.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-vienna-text-dark text-[10px] font-outfit font-bold uppercase tracking-widest px-3 py-1 rounded-pill">
                  {getCategory(firstArticle)}
                </span>
              </div>
              <div className="p-6 md:p-8">
                <span className="text-vienna-rose text-[10px] font-outfit font-bold uppercase tracking-widest">
                  {getCategory(firstArticle)}
                </span>
                <h3 className="font-fredoka font-bold text-vienna-text-heading text-2xl sm:text-3xl mt-1.5 leading-snug group-hover:text-vienna-rose transition-colors">
                  {getTitle(firstArticle)}
                </h3>
                <p className="font-nunito text-vienna-text-muted text-sm mt-3 line-clamp-3">
                  {getExcerpt(firstArticle)}
                </p>
              </div>
            </Link>
          )}

          {/* 2 Vertically Stacked Cards (4 Columns) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {[secondArticle, thirdArticle].filter(Boolean).map((art) => (
              <Link
                key={art.id}
                href={`/journal/${art.slug}`}
                className="
                  group block bg-white rounded-2xl overflow-hidden
                  shadow-soft hover-lift transition-all duration-300
                  flex-1 flex flex-col justify-between border border-vienna-lavender/30
                "
              >
                <div className="relative w-full h-44 sm:h-48 bg-vienna-offwhite">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-vienna-text-dark text-[10px] font-outfit font-bold uppercase tracking-widest px-3 py-1 rounded-pill">
                    {getCategory(art)}
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-vienna-rose text-[10px] font-outfit font-bold uppercase tracking-widest">
                    {getCategory(art)}
                  </span>
                  <h3 className="font-fredoka font-bold text-vienna-text-heading text-base sm:text-lg mt-1 leading-snug group-hover:text-vienna-rose transition-colors">
                    {getTitle(art)}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

        </div>

        {/* Row 2: 3-Column Equal Grid */}
        {remainingArticles.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingArticles.map((art) => (
              <Link
                key={art.id}
                href={`/journal/${art.slug}`}
                className="
                  group block bg-white rounded-2xl overflow-hidden
                  shadow-soft hover-lift transition-all duration-300
                  border border-vienna-lavender/30
                "
              >
                <div className="relative w-full h-48 sm:h-52 bg-vienna-offwhite">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-vienna-text-dark text-[10px] font-outfit font-bold uppercase tracking-widest px-3 py-1 rounded-pill">
                    {getCategory(art)}
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-vienna-rose text-[10px] font-outfit font-bold uppercase tracking-widest">
                    {getCategory(art)}
                  </span>
                  <h3 className="font-fredoka font-bold text-vienna-text-heading text-lg mt-1 leading-snug group-hover:text-vienna-rose transition-colors">
                    {getTitle(art)}
                  </h3>
                  <p className="font-nunito text-vienna-text-muted text-xs mt-2 line-clamp-2">
                    {getExcerpt(art)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="
                px-8 py-3 rounded-pill
                bg-white border-2 border-vienna-rose text-vienna-rose
                font-outfit font-bold text-xs uppercase tracking-widest
                hover:bg-vienna-rose hover:text-white
                transition-all duration-200 shadow-soft cursor-pointer
              "
            >
              {lang === "id" ? "MUAT LEBIH BANYAK" : "LOAD MORE STORIES"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
