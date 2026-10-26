"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export const CATEGORIES = [
  "ALL",
  "STATIONERY",
  "STUDY",
  "JOURNALING",
  "CREATIVE",
  "LIFESTYLE",
  "ORGANIZATION",
] as const;

export type CategoryType = (typeof CATEGORIES)[number];

interface CategoryFilterBarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilterBar({
  activeCategory,
  onSelectCategory,
}: CategoryFilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t, lang } = useLanguage();

  const CATEGORY_LABELS: Record<string, string> = {
    ALL: t("journal.filterAll"),
    STATIONERY: "Stationery",
    STUDY: lang === "id" ? "Belajar" : "Study",
    JOURNALING: lang === "id" ? "Jurnal" : "Journaling",
    CREATIVE: lang === "id" ? "Kreatif" : "Creative",
    LIFESTYLE: lang === "id" ? "Gaya Hidup" : "Lifestyle",
    ORGANIZATION: lang === "id" ? "Organisasi" : "Organization",
  };

  const handleCategoryClick = (category: string) => {
    onSelectCategory(category);

    const params = new URLSearchParams(searchParams.toString());
    if (category === "ALL") {
      params.delete("kategori");
    } else {
      params.set("kategori", category.toLowerCase());
    }

    const queryStr = params.toString();
    const newPath = queryStr ? `/journal?${queryStr}` : "/journal";
    router.replace(newPath, { scroll: false });
  };

  return (
    <div id="journal-filter-bar" className="sticky top-16 z-30 bg-vienna-cream/95 backdrop-blur-sm border-y border-vienna-lavender/50 py-3 transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <nav
          className="
            flex items-center justify-start md:justify-center gap-6 sm:gap-8 lg:gap-10
            overflow-x-auto scrollbars-none
            py-1 text-center whitespace-nowrap
          "
          aria-label="Filter journal articles by category"
        >
          {CATEGORIES.map((cat) => {
            const isSelected =
              activeCategory.toUpperCase() === cat.toUpperCase() ||
              (cat === "ALL" && !activeCategory);

            return (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`
                  font-outfit text-xs font-bold uppercase tracking-[0.2em]
                  transition-colors duration-200
                  relative pb-1.5 cursor-pointer
                  ${
                    isSelected
                      ? "text-vienna-rose"
                      : "text-vienna-text-muted hover:text-vienna-text-heading"
                  }
                `}
                aria-current={isSelected ? "page" : undefined}
              >
                {CATEGORY_LABELS[cat] ?? cat}
                {/* Active indicator pink underline */}
                {isSelected && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-vienna-rose rounded-full animate-fade-in"
                    aria-hidden="true"
                  />
                )}
              </button>
            );
          })}
        </nav>

      </div>
    </div>
  );
}
