"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/ui/ProductCard";
import { PRODUCTS_DATA } from "@/data/products";
import { useLanguage } from "@/contexts/LanguageContext";

export function FavoritesSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
          <div>
            <h2 className="font-outfit font-bold text-vienna-text-heading text-2xl sm:text-3xl md:text-4xl tracking-tight">
              {t("favorites.headline")} <span className="text-vienna-rose-light">♡</span>
            </h2>
            <p className="font-nunito text-vienna-text-muted text-sm sm:text-base mt-1">
              {t("favorites.badge")}
            </p>
          </div>

          <div className="flex-shrink-0">
            <Button href="/shop" variant="primary" size="md" ariaLabel={t("favorites.cta")}>
              {t("favorites.cta")}
            </Button>
          </div>
        </div>

        {/* Product Grid / Mobile Horizontal Snap Scroll */}
        <div
          className="
            flex md:grid md:grid-cols-4 gap-6
            overflow-x-auto md:overflow-visible
            snap-x snap-mandatory md:snap-none
            pb-4 md:pb-0
            scrollbars-none
          "
        >
          {PRODUCTS_DATA
            .filter((p) => p.badge === "SALE" || p.badge === "NEW")
            .slice(0, 4)
            .concat(PRODUCTS_DATA.filter((p) => !p.badge).slice(0, 4))
            .slice(0, 4)
            .map((product) => (
            <Link
              href={`/shop/${product.slug}`}
              key={product.id}
              className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-auto snap-start block"
            >
              <ProductCard
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                badge={product.badge}
                variants={product.variants}
                shopeeUrl={product.shopeeUrl || "https://id.shp.ee/JDMuodop"}
              />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
