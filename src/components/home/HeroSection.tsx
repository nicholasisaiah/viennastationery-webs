"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PaperTextureBackground } from "@/components/ui/PaperTextureBackground";
import { WashiTape } from "@/components/ui/WashiTape";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();
  const scrollToAbout = () => {
    const aboutEl = document.getElementById("about-section");
    if (aboutEl) aboutEl.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PaperTextureBackground variant="gray" className="py-12 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-6 space-y-6 text-left animate-fade-in-up">
            <h1 className="font-outfit font-extrabold text-vienna-text-heading text-4xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
              {t("hero.headline1")}{" "}
              <span className="font-playfair italic font-normal text-vienna-rose block sm:inline">
                {t("hero.headline2")}
              </span>
            </h1>

            <p className="font-nunito text-vienna-text-muted text-base sm:text-lg max-w-lg leading-relaxed">
              {t("hero.sub")}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button onClick={scrollToAbout} variant="primary" size="lg" ariaLabel={t("hero.ctaJournal")}>
                {t("hero.ctaJournal")}
              </Button>
              <Button href="https://id.shp.ee/JDMuodop" variant="secondary" size="lg" ariaLabel={t("hero.ctaShop")}>
                {t("hero.ctaShop")}
              </Button>
            </div>
          </div>

          {/* Right Column Stacked Polaroid Collage */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] pt-6 lg:pt-0">
            {/* Background container frame */}
            <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-square">
              
              {/* Main Large Notebook Photo Frame (Center Right) */}
              <div
                className="
                  absolute top-4 right-0 w-[78%] h-[85%]
                  bg-white p-3 rounded-md shadow-polaroid
                  transform rotate-[2deg] hover-lift transition-transform duration-300
                  z-10
                "
              >
                <div className="relative w-full h-full rounded-xs overflow-hidden bg-vienna-pink-pastel">
                  <Image
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=800&q=80"
                    alt="Vienna Pink Planner with stationery"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 80vw, 40vw"
                  />
                </div>
              </div>

              {/* Peony Flower Photo Frame (Top Left) */}
              <div
                className="
                  absolute top-0 left-4 sm:left-2 w-[42%] aspect-square
                  bg-white p-2 shadow-polaroid rounded-xs
                  transform -rotate-[6deg] hover-lift transition-transform duration-300
                  z-20
                "
              >
                <div className="relative w-full h-full overflow-hidden rounded-xs bg-white">
                  <Image
                    src="/images/pink-peony-accent.png"
                    alt="Pink peony flower accent"
                    fill
                    className="object-cover object-top"
                    sizes="20vw"
                  />
                </div>
              </div>

              {/* Purple Leather Journal Photo Frame (Bottom Left) */}
              <div
                className="
                  absolute bottom-2 left-8 sm:left-6 w-[48%] aspect-square
                  bg-white p-2.5 shadow-polaroid rounded-xs
                  transform rotate-[4deg] hover-lift transition-transform duration-300
                  z-30
                "
              >
                <div className="relative w-full h-full overflow-hidden rounded-xs bg-vienna-lavender-light">
                  <Image
                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
                    alt="Pastel binder notebook"
                    fill
                    className="object-cover object-center"
                    sizes="25vw"
                  />
                </div>
              </div>

              {/* Small Washi Tape Accent (Bottom Right Corner) */}
              <div className="absolute -bottom-2 right-4 z-40">
                <WashiTape color="mint" width="65px" rotation={-12} />
              </div>
            </div>

          </div>

        </div>
      </div>
    </PaperTextureBackground>
  );
}
