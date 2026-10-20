import React from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  showHeart?: boolean;
  align?: "left" | "center";
  font?: "fredoka" | "outfit" | "comfortaa";
  className?: string;
}

export function SectionHeading({
  children,
  subtitle,
  showHeart = true,
  align = "left",
  font = "fredoka",
  className = "",
}: SectionHeadingProps) {
  const fontClass =
    font === "fredoka"
      ? "font-fredoka"
      : font === "comfortaa"
        ? "font-comfortaa"
        : "font-outfit";

  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} ${className}`}>
      <h2
        className={`
          ${fontClass} font-bold
          text-vienna-text-heading
          text-2xl md:text-3xl lg:text-4xl
          leading-tight
        `}
      >
        {children}
        {showHeart && (
          <span className="text-vienna-rose-light ml-2 inline-block" aria-hidden="true">
            ♡
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="text-vienna-text-muted font-nunito mt-2 text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
