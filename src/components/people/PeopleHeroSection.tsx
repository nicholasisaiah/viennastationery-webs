import React from "react";
import { PaperTextureBackground } from "@/components/ui/PaperTextureBackground";
import { PolaroidFrame } from "@/components/ui/PolaroidFrame";

export function PeopleHeroSection() {
  return (
    <PaperTextureBackground variant="gray" className="py-16 sm:py-24 md:py-28 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Center Content */}
        <div className="max-w-2xl mx-auto text-center space-y-5">
          <span className="text-vienna-rose font-outfit text-xs font-bold uppercase tracking-[0.2em] inline-block">
            PEOPLE BEHIND THIS WEB <span aria-hidden="true">♡</span>
          </span>

          <h1 className="font-comfortaa font-light text-vienna-text-heading text-4xl sm:text-5xl md:text-6xl leading-[1.15] tracking-tight">
            The people behind the little details.
          </h1>

          <p className="font-nunito text-vienna-text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            We&apos;re a small collective of dreamers who believe that the digital world deserves as much texture and care as a fresh page in a new journal.
          </p>
        </div>

        {/* Floating Polaroid Decorations (Desktop absolute, Mobile inline) */}
        <div className="mt-8 lg:mt-0">
          
          {/* Polaroid Left (the early drafts...) */}
          <div className="lg:absolute lg:top-8 lg:left-8 xl:left-16 flex justify-center lg:block transform -rotate-6 hover:rotate-0 hover-lift transition-transform duration-300">
            <PolaroidFrame
              src="https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?w=400&q=80"
              alt="The early drafts photo"
              caption="the early drafts..."
              showWashiTape={true}
              washiColor="pink"
              washiRotation={-8}
              width={180}
              height={180}
            />
          </div>

          {/* Polaroid Right (finding the right pink) */}
          <div className="lg:absolute lg:top-20 lg:right-8 xl:right-16 flex justify-center lg:block mt-6 lg:mt-0 transform rotate-6 hover:rotate-0 hover-lift transition-transform duration-300">
            <PolaroidFrame
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80"
              alt="Finding the right pink photo"
              caption="finding the right pink"
              showWashiTape={true}
              washiColor="yellow"
              washiRotation={6}
              width={180}
              height={180}
            />
          </div>

        </div>

      </div>
    </PaperTextureBackground>
  );
}
