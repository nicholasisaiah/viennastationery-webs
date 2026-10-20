import React from "react";
import Image from "next/image";
import { WashiTape } from "./WashiTape";

type WashiColor = "pink" | "yellow" | "mint" | "lavender";

interface PolaroidFrameProps {
  src: string;
  alt: string;
  caption?: string;
  rotation?: number;
  showWashiTape?: boolean;
  washiColor?: WashiColor;
  washiRotation?: number;
  width?: number;
  height?: number;
  className?: string;
}

export function PolaroidFrame({
  src,
  alt,
  caption,
  rotation = 0,
  showWashiTape = false,
  washiColor = "pink",
  washiRotation = -8,
  width = 280,
  height = 280,
  className = "",
}: PolaroidFrameProps) {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Washi tape decoration */}
      {showWashiTape && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
          <WashiTape color={washiColor} rotation={washiRotation} width="55px" />
        </div>
      )}

      {/* Polaroid frame */}
      <div
        className="
          bg-white p-3 pb-12
          rounded-sm
          shadow-polaroid
          hover-lift
        "
      >
        <div className="relative overflow-hidden rounded-xs" style={{ width, height }}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes={`${width}px`}
          />
        </div>

        {/* Caption */}
        {caption && (
          <p
            className="
              handwritten text-center
              text-vienna-text-muted text-sm
              mt-2 px-1
            "
          >
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
