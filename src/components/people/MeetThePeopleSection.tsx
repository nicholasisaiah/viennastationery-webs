"use client";
import React from "react";
import Image from "next/image";
import { TEAM_DATA } from "@/data/team";
import { useLanguage } from "@/contexts/LanguageContext";

const CARD_VARIANTS = [
  { bg: "bg-vienna-cream border-vienna-lavender/50", offset: "lg:mt-0" },
  { bg: "bg-vienna-lavender-card border-vienna-lavender", offset: "lg:mt-8" },
  { bg: "bg-vienna-blush border-vienna-pink-pastel", offset: "lg:mt-4" },
];

export function MeetThePeopleSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="font-comfortaa font-bold text-vienna-text-heading text-3xl sm:text-4xl tracking-tight">
            {t("people.meetHeadline")} <span className="text-vienna-rose-light" aria-hidden="true">♡</span>
          </h2>
          <p className="font-nunito text-vienna-text-muted text-sm sm:text-base mt-2">
            {t("people.meetSub")}
          </p>
        </div>

        {/* 3 Staggered Team Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
          {TEAM_DATA.map((member, idx) => {
            const variant = CARD_VARIANTS[idx % CARD_VARIANTS.length];

            return (
              <div
                key={member.id}
                className={`
                  p-6 sm:p-7 rounded-2xl
                  shadow-soft hover-lift transition-all duration-300
                  border flex flex-col justify-between min-h-[440px]
                  ${variant.bg} ${variant.offset}
                `}
              >
                <div>
                  {/* Photo inside white polaroid frame */}
                  <div className="bg-white p-2.5 pb-3 rounded-xl shadow-soft mb-5">
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-vienna-offwhite">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 90vw, 30vw"
                      />
                    </div>
                  </div>

                  {/* Name & Role */}
                  <h3 className="font-fredoka font-bold text-vienna-text-heading text-2xl">
                    {member.name}
                  </h3>
                  <span className="text-vienna-rose font-outfit text-[10px] font-bold uppercase tracking-[0.2em] block mt-1">
                    {member.role}
                  </span>

                  {/* Dotted Pink Separator */}
                  <div className="w-full border-b-2 border-dotted border-vienna-rose/30 my-4" aria-hidden="true" />

                  {/* Contribution */}
                  <div className="space-y-1">
                    <span className="font-outfit text-[10px] font-bold text-vienna-text-muted uppercase tracking-wider block">
                      {t("people.contribution")}
                    </span>
                    <p className="font-playfair italic text-vienna-text-dark text-xs sm:text-sm leading-relaxed">
                      {member.contribution}
                    </p>
                  </div>
                </div>

                {/* Currently Obsessed With */}
                <div className="pt-4 mt-4 border-t border-black/5">
                  <span className="font-outfit text-[10px] font-bold text-vienna-text-muted uppercase tracking-wider block mb-1.5">
                    {t("people.obsessed")}
                  </span>
                  <span className="inline-block px-3.5 py-1 bg-white text-vienna-text-dark text-xs font-nunito font-medium rounded-pill shadow-xs border border-vienna-lavender/40">
                    {member.obsessedWith}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
