"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PaperTextureBackground } from "@/components/ui/PaperTextureBackground";
import { useLanguage } from "@/contexts/LanguageContext";

export function BentoGridSection() {
  const { t } = useLanguage();

  return (
    <PaperTextureBackground variant="gray" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10 sm:mb-14 text-left">
          <h2 className="font-outfit font-extrabold text-vienna-text-heading text-2xl sm:text-3xl md:text-4xl tracking-tight">
            {t("navGrid.headline")}
          </h2>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
          
          {/* Card 01: SHOP (Span 7 cols) */}
          <Link
            href="/shop"
            className="
              md:col-span-7
              bg-white rounded-2xl overflow-hidden
              shadow-soft hover-lift
              flex flex-col sm:flex-row items-stretch
              min-h-[260px] sm:min-h-[280px]
              group transition-all duration-300
            "
          >
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-vienna-rose font-outfit text-xs font-bold tracking-widest uppercase">
                  01
                </span>
                <h3 className="font-fredoka font-bold text-vienna-text-heading text-2xl sm:text-3xl mt-2">
                  {t("nav.shop").toUpperCase()}
                </h3>
                <p className="font-nunito text-vienna-text-muted text-sm mt-2 max-w-xs">
                  {t("bento.shopDesc")}
                </p>
              </div>
              <div className="mt-6">
                <span className="font-outfit text-xs font-bold text-vienna-text-heading uppercase tracking-wider underline underline-offset-4 group-hover:text-vienna-rose transition-colors">
                  {t("bento.shopCta")}
                </span>
              </div>
            </div>
            <div className="relative w-full sm:w-1/2 min-h-[180px] sm:min-h-full bg-vienna-offwhite">
              <Image
                src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80"
                alt="Vienna Shop Display"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 35vw"
              />
            </div>
          </Link>

          {/* Card 02: JOURNAL (Span 5 cols) */}
          <Link
            href="/journal"
            className="
              md:col-span-5
              gradient-cta rounded-2xl overflow-hidden
              shadow-soft hover-lift
              p-6 sm:p-8 flex flex-col justify-between
              min-h-[260px] sm:min-h-[280px] text-vienna-text-heading
              group relative transition-all duration-300
            "
          >
            <div>
              <span className="text-white/80 font-outfit text-xs font-bold tracking-widest uppercase">
                02
              </span>
              <h3 className="font-fredoka font-bold text-white text-2xl sm:text-3xl mt-2">
                {t("nav.journal").toUpperCase()}
              </h3>
              <p className="font-nunito text-white/90 text-sm mt-2 max-w-xs">
                {t("bento.journalDesc")}
              </p>
            </div>

            {/* Cropped Photo Preview at Bottom */}
            <div className="mt-6 relative w-full h-32 rounded-xl overflow-hidden shadow-soft border-2 border-white/60">
              <Image
                src="https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=600&q=80"
                alt="Journal Open Page"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </Link>

          {/* Card 03: PEOPLE (Span 5 cols — replaced Community) */}
          <Link
            href="/people-behind-this-web"
            className="
              md:col-span-5
              bg-vienna-lavender-card rounded-2xl overflow-hidden
              shadow-soft hover-lift
              p-6 sm:p-8 flex flex-col justify-between
              min-h-[220px] sm:min-h-[240px]
              group transition-all duration-300
            "
          >
            <div>
              <span className="text-vienna-rose font-outfit text-xs font-bold tracking-widest uppercase">
                03
              </span>
              <h3 className="font-fredoka font-bold text-vienna-text-heading text-2xl sm:text-3xl mt-2">
                {t("bento.peopleHeadline")}
              </h3>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-xs">
                <Image src="https://images.unsplash.com/photo-1487530811015-780780a4ee52?w=80&q=80" alt="Team member" fill className="object-cover" sizes="40px" />
              </div>
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-xs">
                <Image src="https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=80&q=80" alt="Team member" fill className="object-cover" sizes="40px" />
              </div>
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-xs">
                <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80" alt="Team member" fill className="object-cover" sizes="40px" />
              </div>
              <p className="font-nunito text-vienna-text-dark text-xs sm:text-sm ml-2">
                {t("bento.communityDesc")}
              </p>
            </div>
          </Link>

          {/* Card 04: PEOPLE BEHIND THIS WEB (Span 7 cols) */}
          <Link
            href="/about"
            className="
              md:col-span-7
              bg-vienna-card-dark text-white rounded-2xl overflow-hidden
              shadow-soft hover-lift
              p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-center sm:items-start
              min-h-[220px] sm:min-h-[240px]
              group relative transition-all duration-300
            "
          >
            <div className="flex-1 space-y-2 pr-4 text-left">
              <div className="flex items-center justify-between">
                <span className="text-white/60 font-outfit text-xs font-bold tracking-widest uppercase">
                  04
                </span>
                <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center text-xs text-white/70">
                  ♡
                </div>
              </div>
              <h3 className="font-fredoka font-bold text-white text-xl sm:text-2xl mt-2 leading-snug">
                {t("nav.about").toUpperCase()}
              </h3>
              <p className="font-nunito text-white/80 text-sm">
                {t("about.body")}
              </p>
            </div>

            {/* 2 Small Polaroid Photos */}
            <div className="flex items-center gap-3 mt-4 sm:mt-0 flex-shrink-0">
              <div className="relative w-20 h-24 rounded-lg overflow-hidden border-2 border-white/20 transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&q=80" alt="Team" fill className="object-cover" sizes="80px" />
              </div>
              <div className="relative w-20 h-24 rounded-lg overflow-hidden border-2 border-white/20 transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <Image src="https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=160&q=80" alt="Team" fill className="object-cover" sizes="80px" />
              </div>
            </div>
          </Link>

        </div>

      </div>
    </PaperTextureBackground>
  );
}
