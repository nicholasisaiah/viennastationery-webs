"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PullQuote } from "@/components/article/PullQuote";
import { TRANSLATIONS } from "@/data/translations";
import type { ArticleSection } from "@/data/articleBodies";

type IdArticleBody =
  | { sections: ArticleSection[] }
  | { intro: string; pullQuote: string; body: string };

interface ArticleBodyClientProps {
  slug: string;
  sections: ArticleSection[];
}

export function ArticleBodyClient({ slug, sections }: ArticleBodyClientProps) {
  const { lang } = useLanguage();

  // If English, just render the original sections
  if (lang === "en") {
    return <RenderSections sections={sections} />;
  }

  // Try to get the Indonesian body from translations
  const idBodies = TRANSLATIONS.id.articleBodies as Record<string, IdArticleBody>;
  const idBody = idBodies[slug];

  if (!idBody) {
    // No Indonesian translation available — fall back to English
    return <RenderSections sections={sections} />;
  }

  // If the ID body has a full sections array, use it directly
  if ("sections" in idBody && Array.isArray(idBody.sections)) {
    return <RenderSections sections={idBody.sections} />;
  }

  // Legacy format: build sections from intro + body + pullQuote
  const legacy = idBody as { intro: string; pullQuote: string; body: string };
  const pullQuoteSection = sections.find((s) => s.type === "pullQuote");
  const paragraphs = legacy.body.split("\n\n").filter(Boolean);
  const midPoint = Math.floor(paragraphs.length / 2);

  const idSections: ArticleSection[] = [
    { type: "dropcap", text: legacy.intro },
    ...paragraphs.slice(0, midPoint).map((p): ArticleSection => ({ type: "paragraph", text: p })),
    ...(pullQuoteSection
      ? [{ ...pullQuoteSection, text: legacy.pullQuote.replace(/^["""]|["""]$/g, "") }]
      : []),
    ...paragraphs.slice(midPoint).map((p): ArticleSection => ({ type: "paragraph", text: p })),
  ];

  return <RenderSections sections={idSections} />;
}

function RenderSections({ sections }: { sections: ArticleSection[] }) {
  return (
    <>
      {sections.map((section, idx) => {
        if (section.type === "dropcap") {
          return (
            <p
              key={idx}
              className="first-letter:font-fredoka first-letter:text-6xl first-letter:font-bold first-letter:text-vienna-rose first-letter:float-left first-letter:mr-3.5 first-letter:leading-none first-letter:mt-1"
            >
              {section.text}
            </p>
          );
        }
        if (section.type === "h2") {
          return (
            <h2
              key={idx}
              className="font-fredoka font-bold text-vienna-text-heading text-2xl sm:text-3xl pt-4 border-t border-vienna-lavender/30"
            >
              {section.text}
            </h2>
          );
        }
        if (section.type === "h3") {
          return (
            <h3
              key={idx}
              className="font-fredoka font-bold text-vienna-text-heading text-xl sm:text-2xl"
            >
              {section.text}
            </h3>
          );
        }
        if (section.type === "pullQuote") {
          return (
            <PullQuote key={idx} author={section.author} role={section.role}>
              {section.text}
            </PullQuote>
          );
        }
        if (section.type === "video" && section.src) {
          return (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-medium my-2 bg-black">
              <video
                controls
                className="w-full max-h-[480px] object-contain"
                src={section.src}
                playsInline
              >
                Browser kamu tidak mendukung pemutar video.
              </video>
            </div>
          );
        }
        // Default: paragraph
        return (
          <p key={idx} className="leading-[1.9]">
            {section.text}
          </p>
        );
      })}
    </>
  );
}
