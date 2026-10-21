"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const PILLAR_IMAGES = [
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80",
  "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80",
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80",
];

export function PillarsSection() {
  const { t } = useLanguage();

  const PILLARS = [
    { key: "cute",     image: PILLAR_IMAGES[0] },
    { key: "useful",   image: PILLAR_IMAGES[1] },
    { key: "creative", image: PILLAR_IMAGES[2] },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-outfit text-vienna-text-heading text-xl sm:text-2xl md:text-3xl leading-snug">
            <span className="font-bold">{t("pillars.headline")}</span>
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 max-w-4xl mx-auto">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.key}
              className="flex flex-col items-center text-center space-y-4 group"
            >
              {/* Circular image */}
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-medium border-4 border-white group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={pillar.image}
                  alt={t(`pillars.${pillar.key}.title`)}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>

              {/* Label */}
              <h3 className="font-outfit font-bold text-vienna-text-heading text-sm uppercase tracking-[0.25em] pt-2">
                {t(`pillars.${pillar.key}.title`)}
              </h3>

              {/* Description */}
              <p className="font-nunito text-vienna-text-muted text-xs sm:text-sm max-w-xs leading-relaxed">
                {t(`pillars.${pillar.key}.desc`)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
