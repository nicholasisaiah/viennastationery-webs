"use client";
import React from "react";
import { PaperTextureBackground } from "@/components/ui/PaperTextureBackground";
import { PolaroidFrame } from "@/components/ui/PolaroidFrame";
import { useLanguage } from "@/contexts/LanguageContext";

export function PeopleHeroSection() {
  const { t } = useLanguage();
  return (
    <PaperTextureBackground variant="gray" className="py-16 sm:py-24 md:py-28 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Center Content */}
        <div className="max-w-2xl mx-auto text-center space-y-5">
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

        {/* Floating Polaroid Decorations (Desktop absolute, Mobile inline) */}
        <div className="mt-8 lg:mt-0">
          
          {/* Polaroid Left (the early drafts...) */}
          <div className="lg:absolute lg:top-8 lg:left-8 xl:left-16 flex justify-center lg:block transform -rotate-6 hover:rotate-0 hover-lift transition-transform duration-300">
            <PolaroidFrame
              src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=300&q=80"
              alt="Draft sketches"
              caption={t("people.leftPolaroid")}
              className="w-40 sm:w-48"
            />
          </div>

          {/* Polaroid Right (finding the right pink) */}
          <div className="lg:absolute lg:top-12 lg:right-8 xl:right-16 flex justify-center lg:block transform rotate-4 hover:rotate-0 hover-lift transition-transform duration-300 mt-4 lg:mt-0">
            <PolaroidFrame
              src="https://images.unsplash.com/photo-1527176930608-54f7dd4d4b86?w=300&q=80"
              alt="Color palette"
              caption={t("people.rightPolaroid")}
              className="w-40 sm:w-48"
            />
          </div>
        </div>

      </div>
    </PaperTextureBackground>
  );
}
