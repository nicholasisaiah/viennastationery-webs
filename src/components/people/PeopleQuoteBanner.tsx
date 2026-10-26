"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/contexts/LanguageContext";

export function PeopleQuoteBanner() {
  const { t } = useLanguage();
  return (
    <section className="gradient-cta py-16 sm:py-20 md:py-24 text-center px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <blockquote className="font-playfair italic font-bold text-vienna-text-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          {t("people.quoteBanner")}
        </blockquote>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button href="/journal" variant="primary" size="lg">
            {t("hero.ctaJournal")}
          </Button>
          <Button href="/" variant="secondary" size="lg">
            {t("common.backHome")}
          </Button>
        </div>
      </div>
    </section>
  );
}
