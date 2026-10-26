"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS_DATA, PRODUCT_CATEGORIES } from "@/data/products";
import { CtaFooterSection } from "@/components/layout/CtaFooterSection";
import { WashiTape } from "@/components/ui/WashiTape";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";


export function ShopPageClient() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [sortBy, setSortBy] = useState<string>("newest");

  const CATEGORIES = [
    { key: "ALL", label: t("shop.categories.all") },
    ...PRODUCT_CATEGORIES.map((cat) => ({ key: cat, label: cat })),
  ];

  const SORT_OPTIONS = [
    { label: t("shop.sortNewest"), value: "newest" },
    { label: t("shop.sortPriceAsc"), value: "price-asc" },
    { label: t("shop.sortPriceDesc"), value: "price-desc" },
  ];

  // Filter
  let filtered = PRODUCTS_DATA.filter((p) => {
    if (activeCategory === "ALL") return true;
    return p.category === activeCategory;
  });

  // Sort
  filtered = [...filtered].sort((a, b) => {
    if (sortBy === "newest") return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-vienna-cream flex flex-col justify-between font-nunito">
      <div>

        {/* ── 1. HERO ────────────────── */}
        <section
          className="relative overflow-hidden bg-vienna-paper-gray paper-texture py-16 md:py-24 text-center px-4"
          aria-label="Shop hero"
        >
          <div className="max-w-2xl mx-auto relative z-10 space-y-4">
            <span className="inline-block text-vienna-rose font-outfit text-xs font-bold uppercase tracking-widest px-4 py-1.5 bg-white/90 rounded-pill shadow-soft">
              {t("shop.badge")}
            </span>
            <h1 className="font-fredoka font-bold text-vienna-text-heading text-4xl sm:text-5xl md:text-6xl">
              {t("shop.headline1")}{" "}
              <span className="text-vienna-rose-light">♡</span>
            </h1>
            <p className="font-nunito text-vienna-text-muted text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              {t("shop.sub")}
            </p>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            <WashiTape color="pink" width="120px" rotation={0} />
          </div>
        </section>

        {/* ── 2. CATEGORY FILTER + SORT BAR ────────────────────────── */}
        <div className="sticky top-16 md:top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-vienna-lavender/40 shadow-soft">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            {/* Category pills — wrap to multiple rows */}
            <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Product categories">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  role="tab"
                  aria-selected={activeCategory === cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`
                    flex-shrink-0 px-4 py-1.5 rounded-pill
                    font-outfit text-[11px] font-bold uppercase tracking-wider
                    transition-colors duration-200 border cursor-pointer whitespace-nowrap
                    ${
                      activeCategory === cat.key
                        ? "bg-vienna-rose text-white border-vienna-rose"
                        : "bg-white text-vienna-text-muted border-vienna-lavender hover:bg-vienna-lavender-light hover:text-vienna-text-heading"
                    }
                  `}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="font-outfit text-[11px] font-bold text-vienna-text-muted uppercase tracking-wider hidden sm:block">
                {t("shop.sortLabel")}
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
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
              {t("shop.showing")} {filtered.length} {t("shop.of")} {PRODUCTS_DATA.length} {t("shop.products")}
              {activeCategory !== "ALL" && (
                <> {t("shop.in")} <span className="text-vienna-rose">{CATEGORIES.find(c => c.key === activeCategory)?.label}</span></>
              )}
            </p>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {filtered.map((product) => (
                  <Link key={product.id} href={`/shop/${product.slug}`} className="block">
                    <ProductCard
                      name={product.name}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      image={product.image}
                      variants={product.variants}
                      badge={product.badge}
                      shopeeUrl={product.shopeeUrl}
                    />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 space-y-4">
                <p className="text-4xl">🌸</p>
                <p className="font-outfit font-bold text-vienna-text-heading">
                  {t("shop.emptyTitle")}
                </p>
                <p className="font-nunito text-sm text-vienna-text-muted">
                  {t("shop.emptyDesc")}
                </p>
                <button
                  onClick={() => setActiveCategory("ALL")}
                  className="font-outfit text-xs font-bold text-vienna-rose uppercase tracking-wider underline underline-offset-4 cursor-pointer"
                >
                  {t("shop.showAll")}
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
              {t("shop.badge")}
            </span>
            <h2 className="font-outfit font-bold text-vienna-text-heading text-2xl sm:text-3xl">
              {t("shop.ctaHeadline")}
            </h2>
            <p className="font-nunito text-vienna-text-muted text-sm sm:text-base max-w-md mx-auto">
              {t("shop.ctaDesc")}
            </p>
            <Button href="https://id.shp.ee/JDMuodop" variant="primary" size="lg" ariaLabel={t("shop.visitShopee")}>
              {t("shop.visitShopee")}
            </Button>
          </div>
        </section>

      </div>

      <CtaFooterSection />
    </div>
  );
}
