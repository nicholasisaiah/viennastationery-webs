"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface Article {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
}

interface MoreStoriesSectionProps {
  articles: Article[];
}

export function MoreStoriesSection({ articles }: MoreStoriesSectionProps) {
  const { lang } = useLanguage();

  return (
    <section className="py-16 bg-vienna-paper-gray/40 paper-texture border-t border-vienna-lavender/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h3 className="font-fredoka font-bold text-vienna-text-heading text-2xl sm:text-3xl">
              {lang === "id" ? "Cerita Lainnya" : "More Stories"}{" "}
              <span className="text-vienna-rose-light">♡</span>
            </h3>
            <p className="font-nunito text-vienna-text-muted text-sm sm:text-base mt-1">
              {lang === "id"
                ? "Lanjutkan perjalanan kreatifmu."
                : "Continue your creative journey."}
            </p>
          </div>
          <Link
            href="/journal"
            className="font-outfit text-xs font-bold text-vienna-rose uppercase tracking-[0.2em] underline underline-offset-4 hover:text-vienna-rose-dark transition-colors"
          >
            {lang === "id" ? "← KEMBALI KE JURNAL" : "← BACK TO JOURNAL"}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art) => (
            <Link
              key={art.id}
              href={`/journal/${art.slug}`}
              className="group block bg-white rounded-xl overflow-hidden hover-lift shadow-soft border border-vienna-lavender/30 transition-all duration-300"
            >
              <div className="relative h-44 md:h-52 overflow-hidden">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-vienna-text-dark text-[10px] font-outfit font-semibold uppercase tracking-widest px-3 py-1 rounded-pill">
                  {art.category}
                </span>
              </div>
              <div className="p-4 md:p-5">
                <span className="text-vienna-rose text-[10px] font-outfit font-bold uppercase tracking-widest">
                  {art.category}
                </span>
                <h4 className="font-fredoka font-bold text-vienna-text-heading text-base md:text-lg mt-1 leading-snug group-hover:text-vienna-rose transition-colors">
                  {art.title}
                </h4>
                {art.excerpt && (
                  <p className="text-vienna-text-muted text-sm mt-2 line-clamp-2 font-nunito">
                    {art.excerpt}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
