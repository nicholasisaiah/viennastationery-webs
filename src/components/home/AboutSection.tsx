import React from "react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about-section" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Curved Photo + Overlapping Sticker Polaroid */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Main Photo with Large Rounded Top-Left Corner */}
              <div
                className="
                  relative w-full h-[360px] sm:h-[440px]
                  rounded-tl-[100px] sm:rounded-tl-[130px] rounded-br-2xl rounded-tr-2xl rounded-bl-2xl
                  overflow-hidden shadow-medium bg-vienna-offwhite
                "
              >
                <Image
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80"
                  alt="Writing in Vienna journal"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 90vw, 45vw"
                />
              </div>

              {/* Overlapping Polaroid Sticker Card (Bottom Right) */}
              <div
                className="
                  absolute -bottom-6 -right-2 sm:right-0
                  w-48 sm:w-56
                  bg-white p-2.5 pb-4
                  rounded-sm shadow-polaroid
                  transform rotate-[3deg] hover-lift transition-transform duration-300
                  z-20
                "
              >
                <div className="relative w-full aspect-square overflow-hidden rounded-xs bg-vienna-blush">
                  <Image
                    src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&q=80"
                    alt="Cute stationery clips and stickers"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <p className="handwritten text-center text-vienna-rose text-base mt-2.5 font-medium">
                  for the little things♡
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            {/* Small uppercase label */}
            <span className="text-vienna-rose font-outfit text-xs font-bold uppercase tracking-[0.2em] inline-flex items-center gap-1">
              A LITTLE ABOUT VIENNA <span aria-hidden="true">♡</span>
            </span>

            {/* Title */}
            <h2 className="font-playfair italic font-bold text-vienna-text-heading text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Stationery should be more than just stationery.
            </h2>

            {/* Paragraph */}
            <p className="font-nunito text-vienna-text-dark text-base sm:text-lg leading-relaxed">
              We believe your tools for expression should spark joy every time you touch them. Vienna was born from a love for delicate textures, soft hues, and the quiet ritual of putting pen to paper.
            </p>

            {/* Blockquote with left pink border */}
            <blockquote className="border-l-2 border-vienna-rose pl-5 py-1 my-4">
              <p className="font-nunito text-vienna-text-muted text-sm sm:text-base italic leading-relaxed">
                Our collections are curated for those who appreciate the aesthetic of organization and the art of the intentional pause.
              </p>
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}
