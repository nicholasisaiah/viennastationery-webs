"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Product } from "@/data/products";
import { ProductCard, formatPriceRp } from "@/components/ui/ProductCard";
import { CtaFooterSection } from "@/components/layout/CtaFooterSection";

interface Props {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailClient({ product, relatedProducts }: Props) {
  const { t, lang } = useLanguage();
  const [activeImage, setActiveImage] = useState(product.image);
  const [activeVariant, setActiveVariant] = useState<string | null>(
    product.variants?.[0]?.label ?? null
  );

  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100
        )
      : null;

  return (
    <div className="min-h-screen bg-vienna-cream font-nunito">
      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <ol className="flex items-center gap-2 text-xs font-outfit text-vienna-text-muted">
          <li>
            <Link href="/" className="hover:text-vienna-rose transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/shop" className="hover:text-vienna-rose transition-colors">
              Shop
            </Link>
          </li>
          <li>/</li>
          <li className="text-vienna-text-heading font-semibold truncate max-w-[200px]">
            {product.name}
          </li>
        </ol>
      </nav>

      {/* Main Product Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* ── LEFT: Image Gallery ──────────────────── */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden bg-white border border-vienna-lavender/30 shadow-soft">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Badge */}
              {product.badge && (
                <span className="absolute top-4 left-4 bg-vienna-text-heading text-white text-[10px] font-outfit font-bold uppercase tracking-widest px-3 py-1 rounded-pill shadow-xs">
                  {product.badge}
                </span>
              )}
              {/* Discount */}
              {discount && (
                <span className="absolute top-4 right-4 bg-vienna-rose text-white text-[10px] font-outfit font-bold px-3 py-1 rounded-pill shadow-xs">
                  -{discount}%
                </span>
              )}
            </div>

            {/* Thumbnail Row */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbars-none">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`
                      relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0
                      border-2 transition-all duration-200 cursor-pointer
                      ${activeImage === img
                        ? "border-vienna-rose shadow-xs scale-105"
                        : "border-vienna-lavender/30 hover:border-vienna-lavender"
                      }
                    `}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - foto ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── RIGHT: Product Info ──────────────────── */}
          <div className="flex flex-col justify-between">
            <div className="space-y-5">
              {/* Category */}
              <span className="inline-block text-vienna-rose font-outfit text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-vienna-rose/10 rounded-pill">
                {product.category}
              </span>

              {/* Name */}
              <h1 className="font-fredoka font-bold text-vienna-text-heading text-2xl sm:text-3xl md:text-4xl leading-tight">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-vienna-rose font-outfit font-bold text-2xl sm:text-3xl">
                  {formatPriceRp(product.price)}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-vienna-text-muted font-outfit text-base line-through">
                    {formatPriceRp(product.originalPrice)}
                  </span>
                )}
                {discount && (
                  <span className="bg-vienna-rose/10 text-vienna-rose font-outfit font-bold text-xs px-2 py-0.5 rounded-pill">
                    Hemat {discount}%
                  </span>
                )}
              </div>

              {/* Variant Picker */}
              {product.variants && product.variants.length > 0 && (
                <div className="space-y-2">
                  <p className="font-outfit text-xs font-bold text-vienna-text-heading uppercase tracking-wider">
                    {lang === "id" ? "Pilih Varian" : "Choose Variant"}
                    {activeVariant && (
                      <span className="ml-2 font-normal text-vienna-text-muted normal-case tracking-normal">
                        — {activeVariant}
                      </span>
                    )}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((v) => (
                      <button
                        key={v.label}
                        onClick={() => {
                          setActiveImage(v.image);
                          setActiveVariant(v.label);
                        }}
                        className={`
                          relative w-12 h-12 rounded-xl overflow-hidden border-2
                          transition-all duration-200 cursor-pointer
                          ${activeVariant === v.label
                            ? "border-vienna-rose scale-110 shadow-md"
                            : "border-vienna-lavender/40 hover:border-vienna-rose/50"
                          }
                        `}
                        title={v.label}
                        aria-label={`Pilih varian ${v.label}`}
                      >
                        <Image
                          src={v.image}
                          alt={v.label}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Storytelling / Description */}
              <div className="space-y-3 pt-2">
                <h2 className="font-outfit font-bold text-vienna-text-heading text-sm uppercase tracking-wider">
                  {lang === "id" ? "Tentang Produk Ini" : "About This Product"}
                </h2>
                <p className="text-vienna-text-muted text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              {product.features.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-outfit font-bold text-vienna-text-heading text-xs uppercase tracking-wider">
                    {lang === "id" ? "Keunggulan" : "Features"}
                  </h3>
                  <ul className="space-y-1.5">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-vienna-text-muted">
                        <span className="text-vienna-rose mt-0.5 flex-shrink-0">✦</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <div className="mt-8 space-y-3">
              <a
                href={product.shopeeUrl || "https://id.shp.ee/JDMuodop"}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full py-4 px-6
                  bg-vienna-rose text-white
                  font-outfit font-bold text-sm uppercase tracking-wider
                  rounded-2xl flex items-center justify-center gap-2.5
                  hover:bg-vienna-rose-dark transition-all duration-200
                  shadow-soft hover:shadow-md
                  cursor-pointer
                "
                aria-label={`Beli ${product.name} di Shopee`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
                <span>{lang === "id" ? "BELI DI SHOPEE" : "BUY ON SHOPEE"}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>

              <p className="text-center text-[10px] text-vienna-text-muted font-outfit">
                {lang === "id"
                  ? "Kamu akan diarahkan ke halaman produk di Shopee"
                  : "You will be redirected to the product page on Shopee"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Products ───────────────────────── */}
      {relatedProducts.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-vienna-lavender/30">
          <h2 className="font-outfit font-bold text-vienna-text-heading text-xl sm:text-2xl mb-8">
            {lang === "id" ? "Produk Serupa" : "Similar Products"} ✦
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((rp) => (
              <Link key={rp.id} href={`/shop/${rp.slug}`} className="block">
                <ProductCard
                  name={rp.name}
                  price={rp.price}
                  originalPrice={rp.originalPrice}
                  image={rp.image}
                  badge={rp.badge}
                  variants={rp.variants}
                  shopeeUrl={rp.shopeeUrl}
                />
              </Link>
            ))}
          </div>
        </section>
      )}

      <CtaFooterSection />
    </div>
  );
}
