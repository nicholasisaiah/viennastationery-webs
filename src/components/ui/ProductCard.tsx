"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export interface ProductVariant {
  label: string; // e.g. "BLUE", "PINK", "MIX"
  image: string; // URL foto untuk varian ini
}

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number; // harga sebelum diskon
  image: string;
  images?: string[]; // gambar tambahan
  variants?: ProductVariant[]; // variasi warna
  href?: string; // kept for backward compat but not used for navigation
  shopeeUrl?: string;
  badge?: string;
  className?: string;
}

export function formatPriceRp(price: number): string {
  if (price < 1000) {
    return `$${price.toFixed(2)}`;
  }
  return `Rp ${price.toLocaleString("id-ID")}`;
}

export function ProductCard({
  name,
  price,
  originalPrice,
  image,
  variants,
  href,
  shopeeUrl = "https://id.shp.ee/JDMuodop",
  badge,
  className = "",
}: ProductCardProps) {
  const { t } = useLanguage();
  const [activeImage, setActiveImage] = useState(image);
  const [activeVariant, setActiveVariant] = useState<string | null>(
    variants?.[0]?.label ?? null
  );

  const discount =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : null;

  return (
    <div
      className={`
        group flex flex-col h-full
        bg-white rounded-xl md:rounded-2xl p-3 sm:p-4
        border border-vienna-lavender/30 shadow-soft
        hover-lift transition-all duration-300
        ${className}
      `}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-lg md:rounded-xl aspect-square bg-vienna-offwhite mb-3">
        <Image
          src={activeImage}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {badge && (
          <span className="absolute top-2.5 left-2.5 bg-vienna-text-heading text-white text-[9px] font-outfit font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-pill shadow-xs">
            {badge}
          </span>
        )}

        {discount && (
          <span className="absolute top-2.5 right-2.5 bg-vienna-rose text-white text-[9px] font-outfit font-bold px-2 py-0.5 rounded-pill shadow-xs">
            -{discount}%
          </span>
        )}
      </div>

      {/* Content area — grows to fill remaining space */}
      <div className="flex flex-col flex-1">
        {/* Name */}
        <h3 className="font-outfit font-semibold text-vienna-text-heading text-xs sm:text-sm md:text-base leading-snug line-clamp-2">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1.5">
          <p className="text-vienna-rose font-outfit font-bold text-xs sm:text-sm">
            {formatPriceRp(price)}
          </p>
          {originalPrice && originalPrice > price && (
            <p className="text-vienna-text-muted font-outfit text-[10px] line-through">
              {formatPriceRp(originalPrice)}
            </p>
          )}
        </div>

        {/* Color Variants — min-height keeps cards aligned */}
        <div className="mt-2.5 min-h-[28px]">
          {variants && variants.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {variants.map((v) => (
                <button
                  key={v.label}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveImage(v.image);
                    setActiveVariant(v.label);
                  }}
                  title={v.label}
                  aria-label={`Pilih warna ${v.label}`}
                  className={`
                    relative w-6 h-6 rounded-full overflow-hidden border-2 transition-all duration-200 cursor-pointer
                    ${
                      activeVariant === v.label
                        ? "border-vienna-rose scale-110 shadow-xs"
                        : "border-transparent hover:border-vienna-lavender"
                    }
                  `}
                >
                  <Image
                    src={v.image}
                    alt={v.label}
                    fill
                    className="object-cover"
                    sizes="24px"
                  />
                </button>
              ))}
              {activeVariant && (
                <span className="self-center text-[9px] font-outfit text-vienna-text-muted uppercase tracking-wide">
                  {activeVariant}
                </span>
              )}
            </div>
          ) : null}
        </div>

        {/* Spacer pushes button to bottom */}
        <div className="flex-1" />

        {/* Shopee Buy Button — always at bottom */}
        <div className="mt-3 pt-2 border-t border-vienna-lavender/20">
          <a
            href={shopeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="
              w-full py-2 px-3
              bg-vienna-rose text-white
              font-outfit font-bold text-[11px] uppercase tracking-wider
              rounded-pill flex items-center justify-center gap-1.5
              hover:bg-vienna-rose-dark transition-colors duration-200
              shadow-xs text-center cursor-pointer
            "
            aria-label={`Buy ${name} on Shopee`}
          >
            <span>{t("shop.buyBtn")}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
