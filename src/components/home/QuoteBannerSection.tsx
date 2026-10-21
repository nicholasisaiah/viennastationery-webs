"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function QuoteBannerSection() {
  const { t } = useLanguage();
  return (
    <section className="gradient-cta py-16 sm:py-20 md:py-24 text-center px-4">
      <div className="max-w-3xl mx-auto">
        <blockquote className="font-playfair italic font-bold text-vienna-text-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          {t("quote.text")}
        </blockquote>
      </div>
    </section>
  );
}
