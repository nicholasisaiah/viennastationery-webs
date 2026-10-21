"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const NAV_CARDS = [
  {
    title: "JOURNAL",
    href: "/journal",
    bgClass: "bg-vienna-lavender-light hover:bg-vienna-lavender text-vienna-text-heading",
    iconBg: "bg-white text-vienna-rose",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
    ),
  },
  {
    title: "PEOPLE",
    href: "/people-behind-this-web",
    bgClass: "bg-vienna-blush hover:bg-vienna-rose-light/40 text-vienna-text-heading",
    iconBg: "bg-white text-vienna-rose",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
  {
    title: "SHOP",
    href: "/shop",
    bgClass: "bg-vienna-card-dark hover:bg-black text-white",
    iconBg: "bg-white/20 text-white",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
    ),
  },
];

export function NavigationGridSection() {
  const { t } = useLanguage();

  const NAV_CARDS = [
    {
      title: t("nav.journal").toUpperCase(),
      href: "/journal",
      bgClass: "bg-vienna-lavender-light hover:bg-vienna-lavender text-vienna-text-heading",
      iconBg: "bg-white text-vienna-rose",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>),
    },
    {
      title: t("nav.people").toUpperCase(),
      href: "/people-behind-this-web",
      bgClass: "bg-vienna-blush hover:bg-vienna-rose-light/40 text-vienna-text-heading",
      iconBg: "bg-white text-vienna-rose",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
    },
    {
      title: t("nav.shop").toUpperCase(),
      href: "/shop",
      bgClass: "bg-vienna-card-dark hover:bg-black text-white",
      iconBg: "bg-white/20 text-white",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>),
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title */}
        <h2 className="font-outfit font-bold text-vienna-text-heading text-2xl sm:text-3xl md:text-4xl tracking-tight mb-12">
          {t("navGrid.headline")} <span className="text-vienna-rose-light">♡</span>
        </h2>

        {/* 4 Square Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {NAV_CARDS.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className={`
                aspect-square rounded-2xl p-6
                flex flex-col items-center justify-center gap-4
                shadow-soft hover-lift transition-all duration-300
                ${card.bgClass}
              `}
            >
              <div
                className={`
                  w-14 h-14 sm:w-16 sm:h-16 rounded-full
                  flex items-center justify-center
                  shadow-xs ${card.iconBg}
                `}
              >
                {card.icon}
              </div>
              <span className="font-outfit font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase">
                {card.title}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
