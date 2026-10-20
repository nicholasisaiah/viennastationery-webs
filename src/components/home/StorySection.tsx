import React from "react";
import Image from "next/image";

export function StorySection() {
  return (
    <section className="bg-vienna-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-outfit font-bold text-vienna-text-heading text-2xl sm:text-3xl md:text-4xl tracking-tight">
            It Started With the Little Things.
          </h2>
          <div className="w-12 h-[3px] bg-vienna-rose mx-auto mt-3 rounded-full" aria-hidden="true" />
        </div>

        {/* 3 Staggered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
          
          {/* Card A: White Polaroid Photo of Workspace */}
          <div
            className="
              bg-white p-3.5 pb-10
              rounded-sm shadow-polaroid
              transform -rotate-[2deg] md:-rotate-[3deg] hover-lift transition-transform duration-300
              mx-auto w-full max-w-xs md:max-w-none
            "
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xs bg-vienna-offwhite">
              <Image
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&q=80"
                alt="Workspace with journal and lamp"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 30vw"
              />
            </div>
          </div>

          {/* Card B: Gray Paper-Textured Note Card */}
          <div
            className="
              bg-vienna-paper-gray paper-texture
              p-6 sm:p-7 rounded-sm shadow-medium
              border border-black/5
              transform rotate-[1deg] md:rotate-[1.5deg] md:-translate-y-3 hover-lift transition-transform duration-300
              relative min-h-[340px] flex flex-col justify-between
              mx-auto w-full max-w-xs md:max-w-none
            "
          >
            <div>
              <h3 className="font-playfair italic font-bold text-vienna-text-heading text-xl sm:text-2xl mb-3">
                The Journaling Joy
              </h3>
              <p className="font-nunito text-vienna-text-dark text-xs sm:text-sm leading-relaxed">
                It began in a small apartment with a single shelf of notebooks. We realized that a beautiful journal didn&apos;t just hold notes—it held dreams, plans, and the quietest parts of our day.
              </p>
            </div>

            <div className="flex items-center justify-between pt-6">
              {/* Pink Circle at bottom-left */}
              <div className="w-6 h-6 rounded-full bg-vienna-blush" aria-hidden="true" />
              {/* Handwritten "Circa 2019" at bottom-right */}
              <span className="handwritten text-vienna-text-muted text-lg">
                Circa 2019
              </span>
            </div>
          </div>

          {/* Card C: Photo with Lavender Frame */}
          <div
            className="
              bg-vienna-lavender p-3 pb-8
              rounded-sm shadow-medium
              transform rotate-[2deg] md:rotate-[3deg] hover-lift transition-transform duration-300
              mx-auto w-full max-w-xs md:max-w-none
            "
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xs bg-white">
              <Image
                src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80"
                alt="Hands crafting with stickers and pencils"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 30vw"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
