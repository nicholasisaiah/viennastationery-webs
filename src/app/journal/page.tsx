"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ARTICLES_DATA } from "@/data/articles";
import {
  JournalHero,
  CategoryFilterBar,
  FeaturedArticleSection,
  LatestEntriesSection,
  JournalQuoteBanner,
  LovelyLettersNewsletter,
  ThematicCardsSection,
} from "@/components/journal";
import { CtaFooterSection } from "@/components/layout/CtaFooterSection";

function JournalPageContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("kategori") || "ALL";

  const [activeCategory, setActiveCategory] = useState<string>(categoryParam);

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam.toUpperCase());
    }
  }, [categoryParam]);

  // Featured Article
  const featuredArticle =
    ARTICLES_DATA.find((art) => art.featured) || ARTICLES_DATA[0];

  // Filtered Articles for Latest Entries
  const filteredArticles = ARTICLES_DATA.filter((art) => {
    if (activeCategory === "ALL" || !activeCategory) return true;
    return art.category.toUpperCase().includes(activeCategory.toUpperCase());
  });

  return (
    <div className="min-h-screen bg-vienna-cream flex flex-col justify-between font-nunito">
      <div>
        {/* 1. HERO */}
        <JournalHero />

        {/* 2. CATEGORY FILTER BAR */}
        <CategoryFilterBar
          activeCategory={activeCategory}
          onSelectCategory={(cat) => setActiveCategory(cat)}
        />

        {/* 3. FEATURED ARTICLE */}
        {featuredArticle && <FeaturedArticleSection article={featuredArticle} />}

        {/* 7. PILIH BERDASARKAN TEMA */}
        <ThematicCardsSection
          onSelectThemeCategory={(cat) => setActiveCategory(cat)}
        />

        {/* 4. LATEST ENTRIES ♡ */}
        <LatestEntriesSection articles={filteredArticles} />

        {/* 5. BANNER KUTIPAN */}
        <JournalQuoteBanner />

        {/* 6. NEWSLETTER LOVELY LETTERS */}
        <LovelyLettersNewsletter />
      </div>

      {/* 8. CTA & FOOTER */}
      <CtaFooterSection />
    </div>
  );
}

export default function JournalPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-vienna-cream p-12 text-center text-vienna-rose">Loading Journal...</div>}>
      <JournalPageContent />
    </Suspense>
  );
}
