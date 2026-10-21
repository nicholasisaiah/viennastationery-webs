import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  title: string;
  category: string;
  excerpt?: string;
  image: string;
  href: string;
  readTime?: string;
  date?: string;
  variant?: "default" | "featured";
  className?: string;
}

export function ArticleCard({
  title,
  category,
  excerpt,
  image,
  href,
  readTime,
  date,
  variant = "default",
  className = "",
}: ArticleCardProps) {
  const isFeatured = variant === "featured";

  return (
    <Link
      href={href}
      className={`
        group block overflow-hidden
        rounded-lg md:rounded-xl
        bg-white
        hover-lift
        ${className}
      `}
      aria-label={`Read article: ${title}`}
    >
      {/* Image */}
      <div
        className={`
          relative overflow-hidden
          ${isFeatured ? "h-56 md:h-72 lg:h-80" : "h-44 md:h-52"}
        `}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={isFeatured ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 33vw"}
        />

        {/* Category pill overlay */}
        <span
          className="
            absolute top-3 left-3
            bg-white/90 backdrop-blur-sm
            text-vienna-text-dark
            text-[10px] font-outfit font-semibold uppercase tracking-widest
            px-3 py-1 rounded-pill
          "
        >
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        {/* Category label below image */}
        <span className="text-vienna-rose text-[10px] font-outfit font-bold uppercase tracking-widest">
          {category}
        </span>
        <h3
          className={`
            font-fredoka font-bold text-vienna-text-heading
            mt-1 leading-snug
            ${isFeatured ? "text-xl md:text-2xl" : "text-base md:text-lg"}
          `}
        >
          {title}
        </h3>
        {excerpt && (
          <p className="text-vienna-text-muted text-sm mt-2 line-clamp-2 font-nunito">
            {excerpt}
          </p>
        )}
        {(readTime || date) && (
          <div className="flex items-center gap-2 mt-3">
            {date && (
              <span className="font-nunito text-vienna-text-light text-xs">{date}</span>
            )}
            {date && readTime && <span className="text-vienna-rose/40">·</span>}
            {readTime && (
              <span className="font-nunito text-vienna-text-light text-xs">{readTime}</span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
