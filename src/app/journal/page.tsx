"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

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

  // Smooth category switch with fade transition
  const handleCategoryChange = (cat: string) => {
    if (cat === activeCategory) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(cat);
      // Scroll to filter bar so articles are immediately visible
      const filterBar = document.getElementById("journal-filter-bar");
      if (filterBar) {
        const offset = filterBar.getBoundingClientRect().top + window.scrollY - 72; // 72px = navbar height
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
      // Small delay for content to update, then fade in
      requestAnimationFrame(() => {
        setIsTransitioning(false);
      });
    }, 200); // fade-out duration
  };

  return (
    <div className="min-h-screen bg-vienna-cream flex flex-col justify-between font-nunito">
      <div>
        {/* 1. HERO */}
        <JournalHero />

        {/* 2. CATEGORY FILTER BAR */}
        <CategoryFilterBar
          activeCategory={activeCategory}
          onSelectCategory={handleCategoryChange}
        />

        {/* Content area with transition */}
        <div
          ref={contentRef}
          className="transition-all duration-300 ease-out"
          style={{
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? "translateY(12px)" : "translateY(0)",
          }}
        >
          {/* 3. FEATURED ARTICLE — only on "Semua" */}
          {isAll && featuredArticle && <FeaturedArticleSection article={featuredArticle} />}

          {/* 7. PILIH BERDASARKAN TEMA — only on "Semua" */}
          {isAll && (
            <ThematicCardsSection
              onSelectThemeCategory={handleCategoryChange}
            />
          )}

          {/* 4. LATEST ENTRIES ♡ */}
          <LatestEntriesSection articles={filteredArticles} showAll={isAll} />
        </div>

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
