"use client";
import React from "react";
import { PaperTextureBackground } from "@/components/ui/PaperTextureBackground";
import { PolaroidFrame } from "@/components/ui/PolaroidFrame";
import { useLanguage } from "@/contexts/LanguageContext";

export function PeopleHeroSection() {
  const { t } = useLanguage();
  return (
    <PaperTextureBackground
      variant="gray"
      className="py-16 sm:py-24 md:py-28 overflow-hidden relative"
    >
      {/* ── Polaroid LEFT — only shown xl+ so it never overlaps text ── */}
      <div
        className="
          hidden xl:block
          absolute top-10 left-8 2xl:left-20
          transform -rotate-6 hover:rotate-0
          hover-lift transition-transform duration-300
          z-10
        "
      >
        <PolaroidFrame
          src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=300&q=80"
          alt="Draft sketches"
          caption={t("people.leftPolaroid")}
          className="w-44 2xl:w-52"
        />
      </div>

      {/* ── Polaroid RIGHT — only shown xl+ so it never overlaps text ── */}
      <div
        className="
          hidden xl:block
          absolute top-14 right-8 2xl:right-20
          transform rotate-4 hover:rotate-0
          hover-lift transition-transform duration-300
          z-10
        "
      >
        <PolaroidFrame
          src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&q=80"
          alt="Color palette"
          caption={t("people.rightPolaroid")}
          className="w-44 2xl:w-52"
        />
      </div>

      {/* ── Center text — always full and readable ── */}
      <div className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-5">
        <span className="text-vienna-rose font-outfit text-xs font-bold uppercase tracking-[0.2em] inline-block">
          {t("people.heroBadge")} <span aria-hidden="true">♡</span>
        </span>

        <h1 className="font-comfortaa font-light text-vienna-text-heading text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight">
          {t("people.heroTitle")}
        </h1>

        <p className="font-nunito text-vienna-text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
          {t("people.heroSub")}
        </p>
      </div>

      {/* ── Mobile / lg polaroids — shown below text, side by side ── */}
      <div className="xl:hidden flex justify-center gap-6 mt-10 px-4">
        <div className="transform -rotate-6">
          <PolaroidFrame
            src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=300&q=80"
            alt="Draft sketches"
            caption={t("people.leftPolaroid")}
            className="w-36 sm:w-44"
          />
        </div>
        <div className="transform rotate-4 mt-6">
          <PolaroidFrame
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&q=80"
            alt="Color palette"
            caption={t("people.rightPolaroid")}
            className="w-36 sm:w-44"
          />
        </div>
      </div>
    </PaperTextureBackground>
  );
}
