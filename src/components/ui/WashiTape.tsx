import React from "react";

type WashiColor = "pink" | "yellow" | "mint" | "lavender";

interface WashiTapeProps {
  color?: WashiColor;
  rotation?: number;
  width?: string;
  className?: string;
}

const colorMap: Record<WashiColor, string> = {
  pink: "bg-vienna-washi-pink",
  yellow: "bg-vienna-washi-yellow",
  mint: "bg-vienna-washi-mint",
  lavender: "bg-vienna-washi-lavender",
};

export function WashiTape({
  color = "pink",
  rotation = -6,
  width = "60px",
  className = "",
}: WashiTapeProps) {
  return (
    <div
      className={`${colorMap[color]} ${className}`}
      style={{
        width,
        height: "14px",
        transform: `rotate(${rotation}deg)`,
        opacity: 0.85,
        borderRadius: "1px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        // Subtle striped pattern for tape texture
        backgroundImage: `repeating-linear-gradient(
          90deg,
          transparent,
          transparent 2px,
          rgba(255,255,255,0.3) 2px,
          rgba(255,255,255,0.3) 4px
        )`,
      }}
      aria-hidden="true"
    />
  );
}
