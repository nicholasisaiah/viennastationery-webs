"use client";
import React from "react";
import Image from "next/image";
import { WashiTape } from "@/components/ui/WashiTape";
import { useLanguage } from "@/contexts/LanguageContext";

export function DraftsCollageSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-vienna-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title */}
        <h2 className="font-comfortaa font-bold text-vienna-text-heading text-2xl sm:text-3xl md:text-4xl tracking-tight mb-14">
          {t("people.draftHeadline")} <span className="text-vienna-rose-light" aria-hidden="true">♡</span>
        </h2>

        {/* Desktop Absolute Stacked Collage */}
        <div className="hidden md:flex relative justify-center items-center min-h-[500px] max-w-4xl mx-auto">
          
          {/* Main Large Card Left: Pink Shelves + DRAFTS Badge */}
          <div
            className="
              absolute top-0 left-4 w-[48%] aspect-[4/3]
              bg-white p-3 rounded-2xl shadow-polaroid border border-vienna-lavender/40
              transform -rotate-3 hover-lift transition-transform duration-300 z-10
            "
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-vienna-pink-pastel">
              <Image
                src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&q=80"
                alt="Pink shelves draft setup"
                fill
                className="object-cover"
                sizes="400px"
              />
              <span className="absolute top-3 right-3 bg-vienna-blush text-vienna-rose font-outfit text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-pill shadow-xs">
                DRAFTS
              </span>
            </div>
          </div>

          {/* Large Card Right: Pink Notebook */}
          <div
            className="
              absolute top-8 right-6 w-[44%] aspect-square
              bg-white p-3 rounded-2xl shadow-polaroid border border-vienna-lavender/40
              transform rotate-4 hover-lift transition-transform duration-300 z-20
            "
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-vienna-offwhite">
              <Image
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=500&q=80"
                alt="Pink notebook draft"
                fill
                className="object-cover"
                sizes="380px"
              />
            </div>
          </div>

          {/* Small Overlapping Card Bottom Center: Open Journal with Flowers */}
          <div
            className="
              absolute -bottom-4 left-1/3 -translate-x-1/4 w-[38%] aspect-[4/3]
              bg-white p-2.5 rounded-xl shadow-polaroid border border-vienna-lavender/40
              transform -rotate-2 hover-lift transition-transform duration-300 z-30
            "
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-white">
              <Image
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&q=80"
                alt="Open journal with flowers"
                fill
                className="object-cover"
                sizes="300px"
              />
            </div>
            {/* Washi Tape Accent */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-40">
              <WashiTape color="lavender" width="55px" rotation={-4} />
            </div>
          </div>

          {/* Washi Tape Accent Right Corner */}
          <div className="absolute bottom-6 right-12 z-40">
            <WashiTape color="mint" width="60px" rotation={8} />
          </div>

        </div>

        {/* Mobile Grid Layout */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto">
          <div className="bg-white p-3 rounded-xl shadow-soft">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-vienna-offwhite">
              <Image src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=300&q=80" alt="Draft setup 1" fill className="object-cover" sizes="250px" />
            </div>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-soft">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-vienna-offwhite">
              <Image src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=300&q=80" alt="Draft setup 2" fill className="object-cover" sizes="250px" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
