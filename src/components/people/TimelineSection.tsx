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
          <div className="grid grid-cols-6 gap-3 relative">

            {/* Horizontal backbone line — sits at the dot row */}
            <div
              className="absolute left-0 right-0 h-[2px] bg-vienna-lavender/70 z-0"
              style={{ top: "calc(9rem + 1rem)" }}
              aria-hidden="true"
            />

            {TIMELINE_STEPS.map((step, idx) => {
              const isTop = idx % 2 === 0; // 0,2,4 → top; 1,3,5 → bottom

              return (
                <div key={step.stepNumber} className="flex flex-col items-center">

                  {/* ── TOP CARD SLOT (h-36) ── */}
                  <div className="h-36 flex flex-col items-center justify-end w-full">
                    {isTop ? (
                      <>
                        {/* Card */}
                        <div
                          className={`
                            w-full p-3 rounded-xl shadow-soft hover-lift
                            transition-transform duration-300 ${step.bgClass}
                          `}
                        >
                          <span className="font-outfit text-[10px] font-bold text-vienna-rose uppercase tracking-widest block mb-1">
                            {step.stepNumber}. {step.title}
                          </span>
                          <p className="font-nunito text-vienna-text-muted text-xs leading-snug">
                            {step.description}
                          </p>
                        </div>
                        {/* Vertical connector: card → dot */}
                        <div className="w-[2px] bg-vienna-lavender/70 flex-1 min-h-[8px]" aria-hidden="true" />
                      </>
                    ) : (
                      /* Empty top slot for bottom cards */
                      <div className="flex-1" />
                    )}
                  </div>

                  {/* ── DOT (always on the line) ── */}
                  <div className="h-8 flex items-center justify-center relative z-10">
                    <div
                      className="w-3.5 h-3.5 rounded-full bg-vienna-rose border-[3px] border-white shadow-sm ring-1 ring-vienna-rose/30"
                      aria-hidden="true"
                    />
                  </div>

                  {/* ── BOTTOM CARD SLOT (h-36) ── */}
                  <div className="h-36 flex flex-col items-center justify-start w-full">
                    {!isTop ? (
                      <>
                        {/* Vertical connector: dot → card */}
                        <div className="w-[2px] bg-vienna-lavender/70 flex-1 min-h-[8px]" aria-hidden="true" />
                        {/* Card */}
                        <div
                          className={`
                            w-full p-3 rounded-xl shadow-soft hover-lift
                            transition-transform duration-300 ${step.bgClass}
                          `}
                        >
                          <span className="font-outfit text-[10px] font-bold text-vienna-rose uppercase tracking-widest block mb-1">
                            {step.stepNumber}. {step.title}
                          </span>
                          <p className="font-nunito text-vienna-text-muted text-xs leading-snug">
                            {step.description}
                          </p>
                        </div>
                      </>
                    ) : (
                      /* Empty bottom slot for top cards */
                      <div className="flex-1" />
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile & Tablet Vertical Timeline ── */}
        <div className="lg:hidden relative max-w-md mx-auto pl-6 border-l-2 border-vienna-lavender/70 space-y-8 py-4">
          {TIMELINE_STEPS.map((step) => (
            <div key={step.stepNumber} className="relative">
              <div
                className="
                  w-3.5 h-3.5 rounded-full bg-vienna-rose border-[3px] border-white shadow-xs ring-1 ring-vienna-rose/30
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
