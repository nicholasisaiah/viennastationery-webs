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
  const isAll = activeCategory === "ALL" || !activeCategory;
  const filteredArticles = ARTICLES_DATA.filter((art) => {
    if (isAll) return true;
    const catUp = art.category.toUpperCase();
    const filterUp = activeCategory.toUpperCase();
    // Match exact category or compound categories like "Study & Lifestyle"
    return catUp === filterUp || catUp.split(/\s*&\s*/).some(part => part.trim() === filterUp);
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
        <LatestEntriesSection articles={filteredArticles} showAll={isAll} />

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
