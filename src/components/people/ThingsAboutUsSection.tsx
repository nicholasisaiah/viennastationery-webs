"use client";
import React from "react";
import { PEOPLE_FACTS } from "@/data/peopleFacts";
import { useLanguage } from "@/contexts/LanguageContext";

export function ThingsAboutUsSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-vienna-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-comfortaa font-bold text-vienna-text-heading text-3xl sm:text-4xl tracking-tight">
            {t("people.factsHeadline")}
          </h2>
        </div>

        {/* 5 Sticky Note Style Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl mx-auto items-stretch">
          
          {PEOPLE_FACTS.slice(0, 4).map((fact) => (
            <div
              key={fact.id}
              className={`
                md:col-span-4 p-6 rounded-xl shadow-soft hover-lift transition-transform duration-300
                ${fact.bgClass}
              `}
              style={{ transform: `rotate(${fact.rotation}deg)` }}
            >
              <span className="font-outfit text-[10px] font-bold text-vienna-text-muted uppercase tracking-[0.2em] block mb-2">
                {fact.category}
              </span>
              <p className="font-playfair italic text-vienna-text-heading text-base leading-relaxed">
                {fact.content}
              </p>
            </div>
          ))}

          {/* Item 5: Wide Card */}
          {PEOPLE_FACTS[4] && (
            <div
              className={`
                md:col-span-8 p-6 sm:p-7 rounded-xl shadow-soft hover-lift transition-transform duration-300
                flex items-center gap-4 ${PEOPLE_FACTS[4].bgClass}
              `}
            >
              <div className="w-12 h-12 rounded-full bg-white/70 flex items-center justify-center text-vienna-rose flex-shrink-0 border border-vienna-rose/20">
                ?
              </div>
              <div>
                <span className="font-outfit text-[10px] font-bold text-vienna-rose uppercase tracking-[0.2em] block mb-1">
                  {PEOPLE_FACTS[4].category}
                </span>
                <p className="font-playfair italic text-vienna-text-heading text-base sm:text-lg leading-relaxed">
                  {PEOPLE_FACTS[4].content}
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
