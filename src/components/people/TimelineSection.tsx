import React from "react";
import { TIMELINE_STEPS } from "@/data/timeline";

export function TimelineSection() {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-comfortaa font-bold text-vienna-text-heading text-2xl sm:text-3xl md:text-4xl tracking-tight">
            From idea &rarr; little details &rarr; this website.
          </h2>
        </div>

        {/* Desktop Horizontal Timeline (6 Steps) */}
        <div className="hidden lg:block relative max-w-6xl mx-auto py-12">
          
          {/* Horizontal Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-vienna-lavender -translate-y-1/2 z-0" aria-hidden="true" />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {TIMELINE_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={step.stepNumber} className="relative flex flex-col items-center">
                  
                  {/* Top / Bottom Placement */}
                  <div
                    className={`
                      w-full p-4 rounded-xl shadow-soft hover-lift transition-transform duration-300
                      ${step.bgClass}
                      ${isEven ? "mb-12" : "mt-12 order-last"}
                    `}
                  >
                    <span className="font-outfit text-[10px] font-bold text-vienna-rose uppercase tracking-widest block mb-1">
                      {step.stepNumber}. {step.title}
                    </span>
                    <p className="font-nunito text-vienna-text-muted text-xs leading-snug">
                      {step.description}
                    </p>
                  </div>

                  {/* Dot Marker on Timeline Line */}
                  <div
                    className="
                      w-3 h-3 rounded-full bg-vienna-rose border-2 border-white shadow-xs
                      absolute top-1/2 -translate-y-1/2 z-20
                    "
                    aria-hidden="true"
                  />

                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
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
