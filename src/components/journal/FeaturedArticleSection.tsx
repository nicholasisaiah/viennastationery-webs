"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/data/articles";
import { WashiTape } from "@/components/ui/WashiTape";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeaturedArticleSectionProps {
  article: Article;
}

export function FeaturedArticleSection({ article }: FeaturedArticleSectionProps) {
  const { t, lang } = useLanguage();
  const title = lang === "id" ? (t(`articles.${article.slug}.title`) || article.title) : article.title;
  const excerpt = lang === "id" ? (t(`articles.${article.slug}.excerpt`) || article.excerpt) : article.excerpt;
  const category = lang === "id" ? (t(`articles.${article.slug}.category`) || article.category) : article.category;
  return (
    <section className="bg-vienna-cream py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link
          href={`/journal/${article.slug}`}
          className="
            group block bg-white rounded-2xl md:rounded-3xl
            p-6 sm:p-8 lg:p-10
            shadow-soft hover-lift transition-all duration-300
            border border-vienna-lavender/40
          "
          aria-label={`Read featured story: ${article.title}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Large Image + Overlapping Polaroid & Washi Tape */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-medium bg-vienna-offwhite">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                />

                {/* Overlapping Polaroid Sticker Card at Top Right */}
                <div
                  className="
                    absolute -top-3 -right-3
                    w-28 sm:w-36 bg-white p-2 pb-5
                    rounded-sm shadow-polaroid transform rotate-[5deg]
                    hidden sm:block z-10
                  "
                >
                  <div className="relative w-full aspect-square overflow-hidden rounded-xs bg-vienna-blush">
                    <Image
                      src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=300&q=80"
                      alt="Stationery sticker snippet"
                      fill
                      className="object-cover"
                      sizes="140px"
                    />
                  </div>
                </div>

                {/* Pink Washi Tape Piece at Bottom Left */}
                <div className="absolute -bottom-2 -left-2 z-10">
                  <WashiTape color="pink" width="65px" rotation={-6} />
                </div>
              </div>
            </div>

            {/* Right Column: Featured Details */}
            <div className="lg:col-span-6 space-y-4 text-left">
              {/* Category Pill Badge + Date & Read Time */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-vienna-lavender-light text-vienna-rose text-xs font-outfit font-bold uppercase tracking-wider px-3.5 py-1 rounded-pill">
                  {category}
                </span>
                <span className="text-vienna-text-muted text-xs font-nunito">
                  {article.readTime} &bull; {article.date}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-fredoka font-bold text-vienna-text-heading text-2xl sm:text-3xl lg:text-4xl leading-snug group-hover:text-vienna-rose transition-colors">
                {title}
              </h2>

              {/* Excerpt */}
              <p className="font-nunito text-vienna-text-dark text-sm sm:text-base leading-relaxed">
                {excerpt}
              </p>

              {/* Read the Story link with short pink line */}
              <div className="pt-2 flex items-center gap-3">
                <span className="font-outfit font-bold text-vienna-text-heading text-sm group-hover:text-vienna-rose transition-colors">
                  {t("journal.featuredCta")}
                </span>
                <span className="w-8 h-[2px] bg-vienna-rose rounded-full transition-all group-hover:w-12" aria-hidden="true" />
              </div>
            </div>

          </div>
        </Link>

      </div>
    </section>
  );
}
