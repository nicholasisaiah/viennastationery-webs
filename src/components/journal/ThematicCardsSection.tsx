"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ThematicCardsSectionProps {
  onSelectThemeCategory: (category: string) => void;
}

export function ThematicCardsSection({
  onSelectThemeCategory,
}: ThematicCardsSectionProps) {
  const { lang } = useLanguage();

  const themes = lang === "id"
    ? [
        {
          title: "Lagi butuh motivasi belajar?",
          subtitle: "Tips desk-scaping, binder setup, & ritual fokus.",
          category: "STUDY",
          bgClass: "bg-vienna-pink-pastel hover:bg-vienna-blush text-vienna-text-heading",
          badge: "BELAJAR & GAYA HIDUP",
          cta: "Lihat Artikel",
        },
        {
          title: "Mau mulai journaling?",
          subtitle: "5 prompt sederhana & panduan morning pages.",
          category: "JOURNALING",
          bgClass: "bg-vienna-lavender-card hover:bg-vienna-lavender text-vienna-text-heading",
          badge: "MINDFULNESS",
          cta: "Lihat Artikel",
        },
        {
          title: "Inspirasi desk setup estetik?",
          subtitle: "Eksplorasi tekstur, warna, & aksen stiker.",
          category: "CREATIVE",
          bgClass: "bg-vienna-paper-gray hover:bg-vienna-offwhite text-vienna-text-heading",
          badge: "DESK TOUR",
          cta: "Lihat Artikel",
        },
      ]
    : [
        {
          title: "Need study motivation?",
          subtitle: "Desk-scaping tips, binder setup, & focus rituals.",
          category: "STUDY",
          bgClass: "bg-vienna-pink-pastel hover:bg-vienna-blush text-vienna-text-heading",
          badge: "STUDY & LIFESTYLE",
          cta: "View Articles",
        },
        {
          title: "Ready to start journaling?",
          subtitle: "5 simple prompts & a morning pages guide.",
          category: "JOURNALING",
          bgClass: "bg-vienna-lavender-card hover:bg-vienna-lavender text-vienna-text-heading",
          badge: "MINDFULNESS",
          cta: "View Articles",
        },
        {
          title: "Looking for aesthetic desk inspo?",
          subtitle: "Explore textures, colors, & sticker accents.",
          category: "CREATIVE",
          bgClass: "bg-vienna-paper-gray hover:bg-vienna-offwhite text-vienna-text-heading",
          badge: "DESK TOUR",
          cta: "View Articles",
        },
      ];

  return (
    <section className="bg-vienna-cream py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-6">
          <span className="text-vienna-rose font-outfit text-xs font-bold uppercase tracking-[0.2em]">
            {lang === "id" ? "JELAJAHI BERDASARKAN NIAT" : "EXPLORE BY INTENTION"}
          </span>
          <h3 className="font-fredoka font-bold text-vienna-text-heading text-xl sm:text-2xl mt-1">
            {lang === "id"
              ? <>Pilih Berdasarkan Suasana Hati <span className="text-vienna-rose-light">♡</span></>
              : <>Browse by Mood <span className="text-vienna-rose-light">♡</span></>
            }
          </h3>
        </div>

        {/* Bento-style 3 Thematic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <button
              key={theme.title}
              onClick={() => onSelectThemeCategory(theme.category)}
              className={`
                text-left p-6 sm:p-7 rounded-2xl
                shadow-soft hover-lift transition-all duration-300
                flex flex-col justify-between min-h-[160px]
                cursor-pointer border border-vienna-lavender/30
                ${theme.bgClass}
              `}
            >
              <div>
                <span className="text-[10px] font-outfit font-bold uppercase tracking-widest px-3 py-1 rounded-pill bg-white/80 text-vienna-rose inline-block mb-3">
                  {theme.badge}
                </span>
                <h4 className="font-fredoka font-bold text-lg sm:text-xl leading-snug">
                  {theme.title}
                </h4>
                <p className="font-nunito text-vienna-text-muted text-xs sm:text-sm mt-1">
                  {theme.subtitle}
                </p>
              </div>

              <div className="pt-4 flex items-center gap-2 text-vienna-rose font-outfit font-bold text-xs uppercase tracking-wider">
                <span>{theme.cta}</span>
                <span aria-hidden="true">&rarr;</span>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
