import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  href: string;
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
  image,
  href,
  shopeeUrl = "https://id.shp.ee/JDMuodop",
  badge,
  className = "",
}: ProductCardProps) {
  return (
    <div
      className={`
        group flex flex-col justify-between
        bg-white rounded-xl md:rounded-2xl p-3 sm:p-4
        border border-vienna-lavender/30 shadow-soft
        hover-lift transition-all duration-300
        ${className}
      `}
    >
      <Link href={href} aria-label={`View product details: ${name}`}>
        {/* Image container */}
        <div className="relative overflow-hidden rounded-lg md:rounded-xl aspect-square bg-vienna-offwhite mb-3">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />

          {/* Badge */}
          {badge && (
            <span
              className="
                absolute top-2.5 left-2.5
                bg-vienna-text-heading text-white
                text-[9px] font-outfit font-bold uppercase tracking-widest
                px-2.5 py-0.5 rounded-pill shadow-xs
              "
            >
              {badge}
            </span>
          )}
        </div>

        {/* Product info */}
        <div>
          <h3 className="font-outfit font-semibold text-vienna-text-heading text-xs sm:text-sm md:text-base leading-snug line-clamp-1 group-hover:text-vienna-rose transition-colors">
            {name}
          </h3>
          <p className="text-vienna-rose font-outfit font-bold text-xs sm:text-sm mt-1">
            {formatPriceRp(price)}
          </p>
        </div>
      </Link>

      {/* Shopee Buy Button */}
      <div className="mt-3 pt-2 border-t border-vienna-lavender/20">
        <a
          href={shopeeUrl}
          target="_blank"
          rel="noopener noreferrer"
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
          <span>Beli di Shopee</span>
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
  );
}
