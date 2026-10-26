import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES_DATA } from "@/data/articles";
import { ARTICLE_BODIES } from "@/data/articleBodies";
import { WashiTape } from "@/components/ui/WashiTape";
import { CtaFooterSection } from "@/components/layout/CtaFooterSection";
import {
  ReadingProgressBar,
  StickySocialSidebar,
  PullQuote,
  PolaroidGallery,
  AuthorBox,
  CommentsSection,
  JsonLd,
  ArticleBodyClient,
  MoreStoriesSection,
} from "@/components/article";

interface ArticleDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArticleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found — Vienna Stationery" };

  const baseUrl = "https://vienna-stationery.my.id";

  return {
    title: `${article.title} — Vienna Journal`,
    description: article.excerpt,
    alternates: {
      canonical: `${baseUrl}/journal/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${baseUrl}/journal/${article.slug}`,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
      images: [
        {
          url: article.image.startsWith("http") ? article.image : `${baseUrl}${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export async function generateStaticParams() {
  return ARTICLES_DATA.map((article) => ({ slug: article.slug }));
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { slug } = await params;
  const article = ARTICLES_DATA.find((a) => a.slug === slug);
  if (!article) notFound();

  // Get unique body content for this slug
  const bodyData = ARTICLE_BODIES.find((b) => b.slug === slug);

  const relatedArticles = ARTICLES_DATA.filter((a) => a.slug !== slug)
    .sort((a, b) => (a.category === article.category ? -1 : 1))
    .slice(0, 3);

  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&q=80",
      alt: "Stationery desk detail",
      caption: "Small details make the big difference.",
      borderVariant: "pink" as const,
    },
    {
      src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80",
      alt: "Color palette swatches",
      caption: "Curating your color palette.",
      borderVariant: "lavender" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-vienna-cream flex flex-col justify-between font-nunito relative">
      <JsonLd article={article} />
      <ReadingProgressBar />

      <div>
        {/* 1. ARTICLE HEADER */}
        <header className="py-12 md:py-16 text-center px-4 max-w-3xl mx-auto space-y-4">
          <nav className="flex items-center justify-center gap-2 text-xs font-outfit font-bold uppercase tracking-[0.2em]" aria-label="Breadcrumb">
            <Link href="/journal" className="text-vienna-text-muted hover:text-vienna-text-heading transition-colors">
              JOURNAL
            </Link>
            <span className="text-vienna-text-light" aria-hidden="true">/</span>
            <Link
              href={`/journal?kategori=${encodeURIComponent(article.category.toLowerCase())}`}
              className="text-vienna-rose hover:underline"
            >
              {article.category}
            </Link>
          </nav>

          <h1 className="font-fredoka font-bold text-vienna-text-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
            {article.title}
          </h1>

          <p className="font-nunito text-vienna-text-muted text-base sm:text-lg max-w-2xl mx-auto line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-center gap-2.5 pt-2 text-xs font-nunito text-vienna-text-muted">
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-vienna-rose/40">
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=56&q=80"
                alt={article.author}
                fill
                className="object-cover"
                sizes="28px"
              />
            </div>
            <span className="font-semibold text-vienna-text-heading">By {article.author}</span>
            <span className="text-vienna-rose" aria-hidden="true">&bull;</span>
            <time dateTime={article.date}>{article.date}</time>
            <span className="text-vienna-rose" aria-hidden="true">&bull;</span>
            <span>{article.readTime}</span>
          </div>

          <div className="w-full h-[1px] bg-vienna-lavender/50 mt-6" aria-hidden="true" />
        </header>

        {/* 2. GRID: SIDEBAR + MAIN CONTENT */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-start mb-16">

          {/* Sidebar — component handles desktop/mobile rendering internally */}
          <div className="lg:self-start">
            <StickySocialSidebar slug={slug} />
          </div>

          {/* Main Article Column */}
          <div className="max-w-2xl mx-auto w-full space-y-8">

            {/* Hero Image */}
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-medium bg-vienna-offwhite">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 65vw"
              />
              <div className="absolute -bottom-2 left-8 z-10">
                <WashiTape color="pink" width="75px" rotation={-4} />
              </div>
            </div>

            {/* Article Body — bilingual via ArticleBodyClient */}
            <div className="prose prose-vienna max-w-none text-vienna-text-dark text-base sm:text-lg leading-[1.8] space-y-6 pt-4">
              {bodyData ? (
                <ArticleBodyClient slug={slug} sections={bodyData.sections} />
              ) : (
                <p className="first-letter:font-fredoka first-letter:text-6xl first-letter:font-bold first-letter:text-vienna-rose first-letter:float-left first-letter:mr-3.5 first-letter:leading-none first-letter:mt-1">
                  {article.excerpt}
                </p>
              )}

              {/* Gallery shown for all articles */}
              <PolaroidGallery items={galleryItems} />
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-vienna-lavender/50">
                {article.tags.map((tagStr) => {
                  const tagClean = tagStr.replace("#", "");
                  return (
                    <Link
                      key={tagStr}
                      href={`/journal/tag/${encodeURIComponent(tagClean.toLowerCase())}`}
                      className="px-3.5 py-1.5 bg-white text-vienna-text-muted hover:text-vienna-rose font-outfit font-bold text-xs uppercase tracking-wider rounded-pill border border-vienna-lavender hover:border-vienna-rose shadow-xs transition-colors duration-200"
                    >
                      #{tagClean.toUpperCase()}
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Author Box */}
            <AuthorBox
              name={article.author}
              bio="Part of the Vienna Creative Team — writers, designers, and stationery enthusiasts dedicated to sharing the art of intentional living."
            />

            {/* Real Comments (Firebase) */}
            <CommentsSection slug={slug} />
          </div>
        </div>

        <MoreStoriesSection articles={relatedArticles} />
      </div>

      <CtaFooterSection />
    </div>
  );
}
