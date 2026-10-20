import React from "react";
import Image from "next/image";

const PILLARS = [
  {
    title: "CUTE",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80",
    description: "Visual delight in every corner of your workspace.",
  },
  {
    title: "USEFUL",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80",
    description: "Practical layouts designed to help you thrive.",
  },
  {
    title: "CREATIVE",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80",
    description: "Tools that remove barriers between you and your art.",
  },
];

export function PillarsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-outfit text-vienna-text-heading text-xl sm:text-2xl md:text-3xl leading-snug">
            <span className="font-bold">Cute things. Useful things.</span>{" "}
            <span className="font-normal text-vienna-text-muted">
              Little things that make your day better.
            </span>
          </h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 max-w-4xl mx-auto">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col items-center text-center space-y-4 group"
            >
              {/* Circular image with soft shadow */}
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-medium border-4 border-white group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>

              {/* Uppercase label */}
              <h3 className="font-outfit font-bold text-vienna-text-heading text-sm uppercase tracking-[0.25em] pt-2">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="font-nunito text-vienna-text-muted text-xs sm:text-sm max-w-xs leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
