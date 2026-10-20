import React from "react";

interface PaperTextureBackgroundProps {
  children: React.ReactNode;
  variant?: "gray" | "cream" | "offwhite";
  heavy?: boolean;
  className?: string;
}

export function PaperTextureBackground({
  children,
  variant = "gray",
  heavy = false,
  className = "",
}: PaperTextureBackgroundProps) {
  const bgColors = {
    gray: "bg-vienna-paper-gray",
    cream: "bg-vienna-cream",
    offwhite: "bg-vienna-offwhite",
  };

  return (
    <div
      className={`
        relative
        ${bgColors[variant]}
        paper-texture
        ${heavy ? "paper-texture-heavy" : ""}
        ${className}
      `}
    >
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}
