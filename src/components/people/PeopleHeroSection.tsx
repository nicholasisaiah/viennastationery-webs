"use client";
import React from "react";
import { PaperTextureBackground } from "@/components/ui/PaperTextureBackground";
import { PolaroidFrame } from "@/components/ui/PolaroidFrame";
import { useLanguage } from "@/contexts/LanguageContext";

export function PeopleHeroSection() {
  const { t } = useLanguage();
  return (
    <PaperTextureBackground variant="gray" className="py-16 sm:py-24 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Desktop: 3-column grid — polaroid | text | polaroid */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8 xl:gap-12">

          {/* Left Polaroid */}
          <div className="flex justify-end">
            <div className="transform -rotate-6 hover:rotate-0 hover-lift transition-transform duration-300">
              <PolaroidFrame
                src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=300&q=80"
                alt="Draft sketches"
                caption={t("people.leftPolaroid")}
                className="w-44 xl:w-52"
              />
            </div>
          </div>

          {/* Center Text */}
          <div className="text-center space-y-5 max-w-xl">
            <span className="text-vienna-rose font-outfit text-xs font-bold uppercase tracking-[0.2em] inline-block">
              {t("people.heroBadge")} <span aria-hidden="true">♡</span>
            </span>
            <h1 className="font-comfortaa font-light text-vienna-text-heading text-4xl xl:text-5xl leading-[1.15] tracking-tight">
              {t("people.heroTitle")}
            </h1>
            <p className="font-nunito text-vienna-text-muted text-base xl:text-lg leading-relaxed">
              {t("people.heroSub")}
            </p>
          </div>

          {/* Right Polaroid */}
          <div className="flex justify-start">
            <div className="transform rotate-4 hover:rotate-0 hover-lift transition-transform duration-300">
              <PolaroidFrame
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=300&q=80"
                alt="Color palette"
                caption={t("people.rightPolaroid")}
                className="w-44 xl:w-52"
              />
            </div>
          </div>
        </div>

        {/* Mobile / Tablet: stacked layout */}
        <div className="lg:hidden text-center space-y-5">
          <span className="text-vienna-rose font-outfit text-xs font-bold uppercase tracking-[0.2em] inline-block">
            {t("people.heroBadge")} <span aria-hidden="true">♡</span>
          </span>
          <h1 className="font-comfortaa font-light text-vienna-text-heading text-4xl sm:text-5xl leading-[1.15] tracking-tight">
            {t("people.heroTitle")}
          </h1>
          <p className="font-nunito text-vienna-text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            {t("people.heroSub")}
          </p>

          {/* Mobile polaroids side by side */}
          <div className="flex justify-center gap-6 pt-4">
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
        </div>

      </div>
    </PaperTextureBackground>
  );
}
