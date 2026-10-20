"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

export const SHOP_CATEGORIES = [
  "ALL",
  "NOTEBOOKS",
  "PENS & WRITING",
  "STICKERS & TAPES",
  "DESK ACCESSORIES",
  "ORGANIZERS",
] as const;

export type ShopCategoryType = (typeof SHOP_CATEGORIES)[number];

interface ShopFilterSearchToolbarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export function ShopFilterSearchToolbar({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}: ShopFilterSearchToolbarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryClick = (category: string) => {
    onSelectCategory(category);
    const params = new URLSearchParams(searchParams.toString());
    if (category === "ALL") {
      params.delete("kategori");
    } else {
      params.set("kategori", category.toLowerCase().replace(/ & /g, "-"));
    }
    const queryStr = params.toString();
    const newPath = queryStr ? `/shop?${queryStr}` : "/shop";
    router.push(newPath, { scroll: false });
  };

  return (
    <div className="sticky top-16 z-30 bg-vienna-cream/95 backdrop-blur-sm border-y border-vienna-lavender/50 py-4 transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        
        {/* Category Navigation Scroll Bar */}
        <nav
          className="
            flex items-center justify-start md:justify-center gap-6 sm:gap-8
            overflow-x-auto scrollbars-none py-1 whitespace-nowrap
          "
          aria-label="Filter shop products by category"
        >
          {SHOP_CATEGORIES.map((cat) => {
            const isSelected =
              activeCategory.toUpperCase() === cat.toUpperCase() ||
              (cat === "ALL" && !activeCategory);

            return (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`
                  font-outfit text-xs font-bold uppercase tracking-[0.2em]
                  transition-colors duration-200 relative pb-1.5 cursor-pointer
                  ${
                    isSelected
                      ? "text-vienna-rose"
                      : "text-vienna-text-muted hover:text-vienna-text-heading"
                  }
                `}
              >
                {cat}
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

        {/* Search & Sort Bar Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          
          {/* Search Input Column */}
          <div className="relative w-full sm:max-w-xs">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cari produk stationery..."
              className="
                w-full pl-10 pr-4 py-2.5 rounded-pill
                border border-vienna-lavender bg-white
                text-vienna-text-dark text-xs sm:text-sm font-nunito
                placeholder:text-vienna-text-light
                focus:outline-none focus:ring-2 focus:ring-vienna-rose focus:border-transparent
                shadow-xs transition-shadow duration-200
              "
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-vienna-text-muted"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          {/* Sort Dropdown Column */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <label htmlFor="shop-sort-select" className="text-xs font-outfit font-semibold text-vienna-text-muted uppercase tracking-wider">
              Urutkan:
            </label>
            <select
              id="shop-sort-select"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="
                px-3.5 py-2 rounded-pill
                border border-vienna-lavender bg-white
                text-vienna-text-dark text-xs font-outfit font-medium
                focus:outline-none focus:ring-2 focus:ring-vienna-rose focus:border-transparent
                shadow-xs cursor-pointer
              "
            >
              <option value="terbaru">Terbaru</option>
              <option value="termurah">Harga Terendah</option>
              <option value="termahal">Harga Tertinggi</option>
            </select>
          </div>

        </div>

      </div>
    </div>
  );
}
