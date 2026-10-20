import React from "react";
import { PEOPLE_FACTS } from "@/data/peopleFacts";

export function ThingsAboutUsSection() {
  return (
    <section className="bg-vienna-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-comfortaa font-bold text-vienna-text-heading text-3xl sm:text-4xl tracking-tight">
            A few things about us
          </h2>
        </div>

        {/* 5 Sticky Note Style Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl mx-auto items-stretch">
          
          {/* Item 1: Favorite Stationery (4 cols) */}
          <div
            className={`
              md:col-span-4 p-6 rounded-xl shadow-soft hover-lift transition-transform duration-300
              ${PEOPLE_FACTS[0].bgClass}
            `}
            style={{ transform: `rotate(${PEOPLE_FACTS[0].rotation}deg)` }}
          >
            <span className="font-outfit text-[10px] font-bold text-vienna-text-muted uppercase tracking-[0.2em] block mb-2">
              {PEOPLE_FACTS[0].category}
            </span>
            <p className="font-playfair italic text-vienna-text-heading text-base leading-relaxed">
              {PEOPLE_FACTS[0].content}
            </p>
          </div>

          {/* Item 2: Design Weakness (4 cols) */}
          <div
            className={`
              md:col-span-4 p-6 rounded-xl shadow-soft hover-lift transition-transform duration-300
              ${PEOPLE_FACTS[1].bgClass}
            `}
            style={{ transform: `rotate(${PEOPLE_FACTS[1].rotation}deg)` }}
          >
            <span className="font-outfit text-[10px] font-bold text-vienna-text-muted uppercase tracking-[0.2em] block mb-2">
              {PEOPLE_FACTS[1].category}
            </span>
            <p className="font-playfair italic text-vienna-text-heading text-base leading-relaxed">
              {PEOPLE_FACTS[1].content}
            </p>
          </div>

          {/* Item 3: Figma Feature (4 cols) */}
          <div
            className={`
              md:col-span-4 p-6 rounded-xl shadow-soft hover-lift transition-transform duration-300
              ${PEOPLE_FACTS[2].bgClass}
            `}
            style={{ transform: `rotate(${PEOPLE_FACTS[2].rotation}deg)` }}
          >
            <span className="font-outfit text-[10px] font-bold text-vienna-text-muted uppercase tracking-[0.2em] block mb-2">
              {PEOPLE_FACTS[2].category}
            </span>
            <p className="font-playfair italic text-vienna-text-heading text-base leading-relaxed">
              {PEOPLE_FACTS[2].content}
            </p>
          </div>

          {/* Item 4: Desk Essential (4 cols) */}
          <div
            className={`
              md:col-span-4 p-6 rounded-xl shadow-soft hover-lift transition-transform duration-300
              ${PEOPLE_FACTS[3].bgClass}
            `}
            style={{ transform: `rotate(${PEOPLE_FACTS[3].rotation}deg)` }}
          >
            <span className="font-outfit text-[10px] font-bold text-vienna-text-muted uppercase tracking-[0.2em] block mb-2">
              {PEOPLE_FACTS[3].category}
            </span>
            <p className="font-playfair italic text-vienna-text-heading text-base leading-relaxed">
              {PEOPLE_FACTS[3].content}
            </p>
          </div>

          {/* Item 5: Something We Learned (Wide Card - 8 cols) */}
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

        </div>

      </div>
    </section>
  );
}
