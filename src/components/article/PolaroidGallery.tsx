import React from "react";
import Image from "next/image";

interface PolaroidGalleryItem {
  src: string;
  alt: string;
  caption: string;
  borderVariant?: "pink" | "lavender";
}

interface PolaroidGalleryProps {
  items: PolaroidGalleryItem[];
}

export function PolaroidGallery({ items }: PolaroidGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
      {items.map((item, idx) => {
        const borderClass =
          item.borderVariant === "lavender" || idx % 2 === 1
            ? "border-vienna-lavender"
            : "border-vienna-blush";

        return (
          <div key={idx} className="flex flex-col items-center">
            {/* Image Frame */}
            <div
              className={`
                w-full bg-white p-3 pb-4 rounded-2xl
                border-2 ${borderClass}
                shadow-soft hover-lift transition-transform duration-300
              `}
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-vienna-offwhite">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <p className="font-nunito italic text-center text-vienna-text-muted text-xs sm:text-sm mt-3 px-2">
                {item.caption}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
