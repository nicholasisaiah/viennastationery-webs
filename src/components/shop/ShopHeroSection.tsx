import React from "react";
import { PaperTextureBackground } from "@/components/ui/PaperTextureBackground";
import { Button } from "@/components/ui/Button";
import { PolaroidFrame } from "@/components/ui/PolaroidFrame";

export function ShopHeroSection() {
  return (
    <PaperTextureBackground variant="gray" className="py-14 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-5 text-left max-w-xl">
            <span className="text-vienna-rose font-outfit text-xs font-bold uppercase tracking-[0.2em] inline-block">
              THE VIENNA SHOP <span aria-hidden="true">♡</span>
            </span>

            <h1 className="font-outfit font-extrabold text-vienna-text-heading text-4xl sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
              Little things for your{" "}
              <span className="font-playfair italic font-normal text-vienna-rose">
                Desk.
              </span>
            </h1>

            <p className="font-nunito text-vienna-text-muted text-base sm:text-lg leading-relaxed">
              Hand-picked stationery, pastel binders, and workspace essentials designed to bring quiet joy to your everyday routines.
            </p>

            <div className="pt-2">
              <Button
                href="https://id.shp.ee/JDMuodop"
                variant="primary"
                size="lg"
                ariaLabel="Shop on Shopee main store"
              >
                Shop on Shopee
              </Button>
            </div>
          </div>

          {/* Right Column: 3 Tilted Product Polaroids */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[300px] sm:min-h-[360px]">
            <div className="relative w-full max-w-sm aspect-[4/3]">
              
              {/* Polaroid 1 (Left tilt) */}
              <div className="absolute top-0 left-0 transform -rotate-6 hover:rotate-0 hover-lift transition-transform duration-300 z-10">
                <PolaroidFrame
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80"
                  alt="Dream Binder"
                  caption="the dream binder"
                  showWashiTape={true}
                  washiColor="pink"
                  washiRotation={-6}
                  width={160}
                  height={150}
                />
              </div>

              {/* Polaroid 2 (Right tilt) */}
              <div className="absolute top-6 right-0 transform rotate-4 hover:rotate-0 hover-lift transition-transform duration-300 z-20">
                <PolaroidFrame
                  src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&q=80"
                  alt="Soft Touch Calculator"
                  caption="soft touch"
                  showWashiTape={true}
                  washiColor="yellow"
                  washiRotation={5}
                  width={160}
                  height={150}
                />
              </div>

              {/* Polaroid 3 (Bottom center) */}
              <div className="absolute -bottom-4 left-1/4 transform rotate-2 hover:rotate-0 hover-lift transition-transform duration-300 z-30">
                <PolaroidFrame
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80"
                  alt="Palette Swatch Set"
                  caption="pastel palette"
                  showWashiTape={false}
                  width={150}
                  height={140}
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </PaperTextureBackground>
  );
}
