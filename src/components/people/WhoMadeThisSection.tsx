import React from "react";
import Image from "next/image";

export function WhoMadeThisSection() {
  return (
    <section className="bg-vienna-paper-gray paper-texture py-16 md:py-24 border-t border-vienna-lavender/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo in Lavender Frame + Floating Quote Card */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Main Photo with Lavender Border Frame & Rounded Corners */}
              <div className="bg-vienna-lavender-light p-3 sm:p-4 rounded-3xl shadow-medium border-2 border-vienna-lavender">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white">
                  <Image
                    src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80"
                    alt="Hands writing in journal with fountain pen"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 45vw"
                  />
                </div>
              </div>

              {/* Small White Card Overlapping at Bottom Right */}
              <div
                className="
                  absolute -bottom-6 -right-2 sm:right-0
                  max-w-[220px] sm:max-w-[260px]
                  bg-white p-4 rounded-xl shadow-polaroid
                  border border-vienna-lavender/50
                  transform rotate-[2deg] hover-lift transition-transform duration-300
                  z-20
                "
              >
                <p className="font-playfair italic text-vienna-rose text-xs sm:text-sm leading-relaxed text-center">
                  &ldquo;Our best ideas always happen over a shared bowl of washi tape.&rdquo;
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-6 space-y-5 pt-6 lg:pt-0">
            <span className="text-vienna-rose font-outfit text-xs font-bold uppercase tracking-[0.2em]">
              SO... WHO MADE THIS?
            </span>

            <h2 className="font-comfortaa font-bold text-vienna-text-heading text-3xl sm:text-4xl leading-tight">
              A collaboration of heart and pixels.
            </h2>

            <p className="font-nunito text-vienna-text-dark text-base sm:text-lg leading-relaxed">
              From the creative direction that sets the mood, to the code that brings the tiny animations to life, every corner of this web has been touched by someone who loves stationery as much as you do.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
