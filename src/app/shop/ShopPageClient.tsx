"use client";

import React, { useState } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS_DATA } from "@/data/products";
import { CtaFooterSection } from "@/components/layout/CtaFooterSection";
import { WashiTape } from "@/components/ui/WashiTape";
import { Button } from "@/components/ui/Button";

const CATEGORIES = [
  "ALL",
  "NOTEBOOKS",
  "PENS & WRITING",
  "STICKERS & TAPES",
  "DESK ACCESSORIES",
  "ORGANIZERS",
] as const;

type Category = (typeof CATEGORIES)[number];

const SORT_OPTIONS = [
  { label: "Newest First", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
] as const;

type SortOption = (typeof SORT_OPTIONS)[number]["value"];

export function ShopPageClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("ALL");
  const [sortBy, setSortBy] = useState<SortOption>("newest");

  // Filter
  let filtered = PRODUCTS_DATA.filter((p) => {
    if (activeCategory === "ALL") return true;
    return p.category === activeCategory;
  });

  // Sort
  filtered = [...filtered].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
    }
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-vienna-cream flex flex-col justify-between font-nunito">
      <div>

        {/* ── 1. HERO ──────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden bg-vienna-paper-gray paper-texture py-16 md:py-24 text-center px-4"
          aria-label="Shop hero"
        >
          <div className="max-w-2xl mx-auto relative z-10 space-y-4">
            <span className="inline-block text-vienna-rose font-outfit text-xs font-bold uppercase tracking-widest px-4 py-1.5 bg-white/90 rounded-pill shadow-soft">
              Vienna Collection
            </span>
            <h1 className="font-fredoka font-bold text-vienna-text-heading text-4xl sm:text-5xl md:text-6xl">
              Shop Stationery{" "}
              <span className="text-vienna-rose-light">♡</span>
            </h1>
            <p className="font-nunito text-vienna-text-muted text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Bring a piece of Vienna into your daily life. Hand-picked essentials curated for dreamers and planners.
            </p>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <WashiTape color="pink" width="120px" rotation={0} />
          </div>
        </section>

        {/* ── 2. CATEGORY FILTER + SORT BAR ────────────────────────── */}
        <div className="sticky top-16 md:top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-vienna-lavender/40 shadow-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            {/* Category pills */}
            <div
              className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0"
              role="tablist"
              aria-label="Product categories"
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    flex-shrink-0 px-4 py-1.5 rounded-pill
                    font-outfit text-[11px] font-bold uppercase tracking-wider
                    transition-colors duration-200 border cursor-pointer whitespace-nowrap
                    ${
                      activeCategory === cat
                        ? "bg-vienna-rose text-white border-vienna-rose"
                        : "bg-white text-vienna-text-muted border-vienna-lavender hover:bg-vienna-lavender-light hover:text-vienna-text-heading"
                    }
                  `}
                >
                  {cat === "ALL" ? "All Products" : cat}
                </button>
              ))}
            </div>

            {/* Sort select */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="font-outfit text-[11px] font-bold text-vienna-text-muted uppercase tracking-wider hidden sm:block">
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="font-outfit text-xs font-medium text-vienna-text-dark bg-white border border-vienna-lavender rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-vienna-rose cursor-pointer"
                aria-label="Sort products"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* ── 3. PRODUCT GRID ──────────────────────────────────────── */}
        <section
          className="py-12 md:py-16"
          aria-label={`${activeCategory} products`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Results count */}
            <p className="font-outfit text-xs font-bold text-vienna-text-muted uppercase tracking-wider mb-6">
              Showing {filtered.length} of {PRODUCTS_DATA.length} products
              {activeCategory !== "ALL" && (
                <> in <span className="text-vienna-rose">{activeCategory}</span></>
              )}
            </p>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    badge={product.badge}
                    href={product.shopeeUrl}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 space-y-4">
                <p className="text-4xl">🌸</p>
                <p className="font-outfit font-bold text-vienna-text-heading">
                  Nothing here yet
                </p>
                <p className="font-nunito text-sm text-vienna-text-muted">
                  No products found in this category. Try a different filter!
                </p>
                <button
                  onClick={() => setActiveCategory("ALL")}
                  className="font-outfit text-xs font-bold text-vienna-rose uppercase tracking-wider underline underline-offset-4 cursor-pointer"
                >
                  Show All Products
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ── 4. SHOPEE CTA ────────────────────────────────────────── */}
        <section
          className="py-16 bg-vienna-paper-gray paper-texture border-t border-vienna-lavender/30"
          aria-label="Shop on Shopee"
        >
          <div className="max-w-2xl mx-auto px-4 text-center space-y-5">
            <span className="inline-block text-vienna-rose font-outfit text-xs font-bold uppercase tracking-widest px-4 py-1.5 bg-white rounded-pill shadow-soft">
              Shop on Shopee
            </span>
            <h2 className="font-outfit font-bold text-vienna-text-heading text-2xl sm:text-3xl">
              Ready to add some lovely to your desk?
            </h2>
            <p className="font-nunito text-vienna-text-muted text-sm sm:text-base max-w-md mx-auto">
              Our full catalog is available on Shopee with secure payment, fast shipping, and easy returns.
            </p>
            <Button
              href="https://id.shp.ee/JDMuodop"
              variant="primary"
              size="lg"
              ariaLabel="Shop all Vienna products on Shopee"
            >
              Visit Our Shopee Store ↗
            </Button>
          </div>
        </section>

      </div>

      <CtaFooterSection />
    </div>
  );
}
