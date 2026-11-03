"use client";
import React from "react";
import { TIMELINE_STEPS } from "@/data/timeline";
import { useLanguage } from "@/contexts/LanguageContext";

export function TimelineSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-comfortaa font-bold text-vienna-text-heading text-2xl sm:text-3xl md:text-4xl tracking-tight">
            {t("people.timelineHeadline")}
          </h2>
        </div>

        {/* ── Desktop Horizontal Timeline ── */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">

          {/*
            Layout: 3-row grid per column
              Row 0 (h-36)  — card TOP  (even steps: 0,2,4)
              Row 1 (h-8)   — dot + horizontal line zone
              Row 2 (h-36)  — card BOTTOM (odd steps: 1,3,5)
          */}
          <div className="grid grid-cols-6 gap-3 relative">

            {/* Horizontal line sits in the middle row */}
            <div
              className="absolute left-0 right-0 h-[2px] bg-vienna-lavender z-0"
              style={{ top: "calc(9rem + 1rem)" }}   /* h-36 + half of h-8 */
              aria-hidden="true"
            />

            {TIMELINE_STEPS.map((step, idx) => {
              const isTop = idx % 2 === 0; // 0,2,4 → card on top; 1,3,5 → card on bottom

              return (
                <div key={step.stepNumber} className="flex flex-col items-center">

                  {/* TOP CARD SLOT — fixed height so dot row is always aligned */}
                  <div className="h-36 flex items-end pb-2 w-full">
                    {isTop && (
                      <div
                        className={`
                          w-full p-3 rounded-xl shadow-soft hover-lift transition-transform duration-300
                          ${step.bgClass}
                        `}
                      >
                        <span className="font-outfit text-[10px] font-bold text-vienna-rose uppercase tracking-widest block mb-1">
                          {step.stepNumber}. {step.title}
                        </span>
                        <p className="font-nunito text-vienna-text-muted text-xs leading-snug">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* DOT — always at the same vertical position */}
                  <div className="h-8 flex items-center justify-center relative z-10">
                    <div
                      className="w-3 h-3 rounded-full bg-vienna-rose border-2 border-white shadow-sm"
                      aria-hidden="true"
                    />
                  </div>

                  {/* BOTTOM CARD SLOT — fixed height */}
                  <div className="h-36 flex items-start pt-2 w-full">
                    {!isTop && (
                      <div
                        className={`
                          w-full p-3 rounded-xl shadow-soft hover-lift transition-transform duration-300
                          ${step.bgClass}
                        `}
                      >
                        <span className="font-outfit text-[10px] font-bold text-vienna-rose uppercase tracking-widest block mb-1">
                          {step.stepNumber}. {step.title}
                        </span>
                        <p className="font-nunito text-vienna-text-muted text-xs leading-snug">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile & Tablet Vertical Timeline ── */}
        <div className="lg:hidden relative max-w-md mx-auto pl-6 border-l-2 border-vienna-lavender space-y-8 py-4">
          {TIMELINE_STEPS.map((step) => (
            <div key={step.stepNumber} className="relative">
              {/* Dot marker */}
              <div
                className="
                  w-3.5 h-3.5 rounded-full bg-vienna-rose border-2 border-white shadow-xs
                  absolute -left-[31px] top-4
                "
                aria-hidden="true"
              />
              <div className={`p-5 rounded-xl shadow-soft ${step.bgClass}`}>
                <span className="font-outfit text-xs font-bold text-vienna-rose uppercase tracking-widest block mb-1">
                  {step.stepNumber}. {step.title}
                </span>
                <p className="font-nunito text-vienna-text-muted text-sm leading-snug">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
