import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ARTICLES_DATA } from "@/data/articles";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { CtaFooterSection } from "@/components/layout/CtaFooterSection";

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  return {
    title: `Articles tagged #${decodedTag} — Vienna Journal`,
    description: `Browse all Vienna Journal stories tagged with #${decodedTag}.`,
  };
}

export async function generateStaticParams() {
  const allTags = new Set<string>();
  ARTICLES_DATA.forEach((art) => {
    art.tags?.forEach((t) => allTags.add(t.replace("#", "")));
  });
  return Array.from(allTags).map((tag) => ({ tag }));
}

export default async function JournalTagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const cleanTag = decodeURIComponent(tag).replace("#", "");

  const matchingArticles = ARTICLES_DATA.filter((art) =>
    art.tags?.some((t) => t.toLowerCase().includes(cleanTag.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-vienna-cream flex flex-col justify-between font-nunito">
      <div>
        <section className="py-16 bg-vienna-paper-gray paper-texture text-center px-4 border-b border-vienna-lavender">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-vienna-rose font-outfit text-xs font-bold uppercase tracking-widest px-4 py-1.5 bg-white rounded-pill shadow-soft">
              TAG FILTER
            </span>
            <h1 className="font-fredoka font-bold text-vienna-text-heading text-3xl sm:text-4xl md:text-5xl">
              #{cleanTag.toUpperCase()} <span className="text-vienna-rose-light">♡</span>
            </h1>
            <p className="font-nunito text-vienna-text-muted text-sm sm:text-base max-w-lg mx-auto">
              Found {matchingArticles.length} stories tagged with #{cleanTag.toLowerCase()}.
            </p>
          </div>
        </section>

        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <span className="font-outfit text-xs font-bold text-vienna-text-muted uppercase tracking-wider">
              TAGGED STORIES
            </span>
            <Link
              href="/journal"
              className="font-outfit text-xs font-bold text-vienna-rose uppercase tracking-widest hover:underline"
            >
              &larr; BACK TO JOURNAL
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {matchingArticles.map((art) => (
              <ArticleCard
                key={art.id}
                title={art.title}
                category={art.category}
                excerpt={art.excerpt}
                image={art.image}
                href={`/journal/${art.slug}`}
                readTime={art.readTime}
                date={art.date}
              />
            ))}
          </div>
        </section>
      </div>

      <CtaFooterSection />
    </div>
  );
}
