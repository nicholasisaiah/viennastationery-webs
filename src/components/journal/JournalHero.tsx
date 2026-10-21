"use client";

import React from "react";
import Image from "next/image";
import { PolaroidFrame } from "@/components/ui/PolaroidFrame";
import { useLanguage } from "@/contexts/LanguageContext";

export function JournalHero() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-vienna-cream via-vienna-pink-pastel/25 to-vienna-cream py-16 sm:py-20 md:py-28">
      
      {/* Decorative Floating Peony Flower & Washi Tape Near Title */}
      <div className="hidden lg:block absolute top-12 left-[32%] z-10 pointer-events-none opacity-90 animate-gentle-float">
        <div className="relative w-14 h-14 bg-white p-1 rounded-sm shadow-soft transform -rotate-6">
          <Image
            src="https://images.unsplash.com/photo-1487530811015-780780a4ee52?w=200&q=80"
            alt="Peony floral accent"
            fill
            className="object-cover rounded-xs"
            sizes="56px"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Floating Polaroids (Left & Right desktop columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Floating Polaroids (Desktop) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col items-center gap-6 relative">
            {/* Top Left Polaroid */}
            <div className="transform -rotate-6 translate-x-2 hover-lift transition-transform duration-300 animate-gentle-float">
              <PolaroidFrame
                src="https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=400&q=80"
                alt="Writing in notebook"
                rotation={0}
                showWashiTape={true}
                washiColor="pink"
                washiRotation={-8}
                width={170}
                height={170}
              />
            </div>
            {/* Bottom Left Polaroid */}
            <div className="transform rotate-3 -translate-y-6 hover-lift transition-transform duration-300">
              <PolaroidFrame
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&q=80"
                alt="Open handwritten journal"
                rotation={0}
                showWashiTape={false}
                width={180}
                height={160}
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="lg:col-span-6 text-center space-y-5 max-w-2xl mx-auto">
            
            {/* Title */}
            <div className="inline-block relative">
              <h1 className="font-fredoka font-black text-vienna-text-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight uppercase">
                VIENNA
                <br />
                JOURNAL
                <span className="text-vienna-rose ml-3 font-normal inline-block text-3xl sm:text-4xl md:text-5xl" aria-hidden="true">
                  ♡
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="font-outfit font-semibold text-vienna-text-dark text-lg sm:text-xl md:text-2xl">
              {t("journal.heroSub")}
            </p>

            {/* Description */}
            <p className="font-nunito text-vienna-text-muted text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
              {t("journal.heroDesc")}
            </p>

            {/* Editorial Notes Label with side lines */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <span className="w-12 h-[1px] bg-vienna-rose/40" aria-hidden="true" />
              <span className="font-outfit text-xs font-bold text-vienna-rose uppercase tracking-[0.25em]">
                {t("journal.heroBadge")}
              </span>
              <span className="w-12 h-[1px] bg-vienna-rose/40" aria-hidden="true" />
            </div>

            {/* Mobile Decorative Polaroids (Visible only on small screens) */}
            <div className="flex lg:hidden justify-center items-center gap-4 pt-4">
              <div className="transform -rotate-3">
                <PolaroidFrame
                  src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=300&q=80"
                  alt="Journal snippet"
                  width={120}
                  height={120}
                />
              </div>
              <div className="transform rotate-3">
                <PolaroidFrame
                  src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300&q=80"
                  alt="Stationery note"
                  width={120}
                  height={120}
                />
              </div>
            </div>

          </div>

          {/* Right Floating Polaroids (Desktop) */}
          <div className="hidden lg:flex lg:col-span-3 flex-col items-center gap-6 relative">
            {/* Top Right Polaroid */}
            <div className="transform rotate-4 -translate-x-2 hover-lift transition-transform duration-300 animate-gentle-float">
              <PolaroidFrame
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=400&q=80"
                alt="Pink notebook desk"
                rotation={0}
                showWashiTape={true}
                washiColor="lavender"
                washiRotation={6}
                width={180}
                height={170}
              />
            </div>
            {/* Bottom Right Polaroid */}
            <div className="transform -rotate-3 -translate-y-4 hover-lift transition-transform duration-300">
              <PolaroidFrame
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&q=80"
                alt="Handcrafting with stickers"
                rotation={0}
                showWashiTape={false}
                width={170}
                height={160}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
