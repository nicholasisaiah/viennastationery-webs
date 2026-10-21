"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PullQuote } from "@/components/article/PullQuote";
import { TRANSLATIONS } from "@/data/translations";
import type { ArticleSection } from "@/data/articleBodies";

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
  const idBodies = TRANSLATIONS.id.articleBodies as Record<string, { intro: string; pullQuote: string; body: string }>;
  const idBody = idBodies[slug];

  if (!idBody) {
    // No Indonesian translation available — fall back to English
    return <RenderSections sections={sections} />;
  }

  // Build Indonesian sections by combining the translated body with pullQuote from original
  const pullQuoteSection = sections.find((s) => s.type === "pullQuote");

  // Split idBody.body on \n\n into paragraphs
  const paragraphs = idBody.body.split("\n\n").filter(Boolean);
  const midPoint = Math.floor(paragraphs.length / 2);

  const idSections: ArticleSection[] = [
    { type: "dropcap", text: idBody.intro },
    ...paragraphs.slice(0, midPoint).map((p): ArticleSection => ({ type: "paragraph", text: p })),
    ...(pullQuoteSection
      ? [{ ...pullQuoteSection, text: idBody.pullQuote.replace(/^[""]|[""]$/g, "") }]
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
            <PullQuote
              key={idx}
              author={section.author}
              role={section.role}
            >
              {section.text}
            </PullQuote>
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
