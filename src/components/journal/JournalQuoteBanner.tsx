import React from "react";

export function JournalQuoteBanner() {
  return (
    <section className="relative overflow-hidden gradient-cta py-20 sm:py-24 text-center px-4">
      {/* Radial glow background effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Transparent Fountain Pen Nib Icon Decoration at Bottom Left */}
      <div
        className="absolute -bottom-6 left-8 text-vienna-rose/15 pointer-events-none hidden sm:block transform -rotate-12"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2L15 8H9L12 2Z" />
          <path d="M12 22L7 12H17L12 22Z" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto relative z-10 space-y-4">
        {/* Small Icon at Top */}
        <div className="w-10 h-10 rounded-full bg-white/60 mx-auto flex items-center justify-center text-vienna-rose shadow-xs mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>

        {/* Quote */}
        <blockquote className="font-fredoka font-bold text-vienna-text-heading text-3xl sm:text-4xl md:text-5xl leading-tight">
          &ldquo;A blank page is just an invitation to begin.&rdquo;
        </blockquote>

        {/* Attribution */}
        <p className="font-outfit text-xs font-bold text-vienna-rose uppercase tracking-[0.25em] pt-2">
          — VIENNA STATIONERY
        </p>
      </div>
    </section>
  );
}
