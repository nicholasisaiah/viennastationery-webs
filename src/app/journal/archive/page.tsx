import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ARTICLES_DATA } from "@/data/articles";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { CtaFooterSection } from "@/components/layout/CtaFooterSection";

export const metadata: Metadata = {
  title: "Archived Moments — Vienna Journal",
  description: "Browse all past stories and creative rituals in the Vienna Journal archive.",
};

export default function JournalArchivePage() {
  return (
    <div className="min-h-screen bg-vienna-cream flex flex-col justify-between font-nunito">
      <div>
        <section className="py-16 bg-vienna-paper-gray paper-texture text-center px-4">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-vienna-rose font-outfit text-xs font-bold uppercase tracking-widest px-4 py-1.5 bg-white rounded-pill shadow-soft">
              JOURNAL ARCHIVE
            </span>
            <h1 className="font-fredoka font-bold text-vienna-text-heading text-3xl sm:text-4xl md:text-5xl">
              Archived Moments <span className="text-vienna-rose-light">♡</span>
            </h1>
            <p className="font-nunito text-vienna-text-muted text-sm sm:text-base max-w-lg mx-auto">
              Explore our complete collection of stories, desk tours, and quiet reflections.
            </p>
          </div>
        </section>

        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <span className="font-outfit text-xs font-bold text-vienna-text-muted uppercase tracking-wider">
              SHOWING ALL {ARTICLES_DATA.length} STORIES
            </span>
            <Link
              href="/journal"
              className="font-outfit text-xs font-bold text-vienna-rose uppercase tracking-widest hover:underline"
            >
              &larr; BACK TO JOURNAL
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {ARTICLES_DATA.map((art) => (
              <ArticleCard
                key={art.id}
                title={art.title}
                category={art.category}
                excerpt={art.excerpt}
                image={art.image}
                href={`/journal/${art.slug}`}
              />
            ))}
          </div>
        </section>
      </div>

      <CtaFooterSection />
    </div>
  );
}
