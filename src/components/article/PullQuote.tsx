import React from "react";
import { PaperTextureBackground } from "@/components/ui/PaperTextureBackground";

interface PullQuoteProps {
  children: React.ReactNode;
  author?: string;
  role?: string;
  className?: string;
}

export function PullQuote({
  children,
  author,
  role,
  className = "",
}: PullQuoteProps) {
  return (
    <blockquote className={`my-8 ${className}`}>
      <PaperTextureBackground
        variant="offwhite"
        className="
          p-6 sm:p-8 rounded-r-2xl rounded-l-xs
          border-l-4 border-vienna-rose
          shadow-soft
        "
      >
        <p className="font-outfit text-vienna-text-heading text-lg sm:text-xl md:text-2xl font-normal leading-relaxed italic">
          &ldquo;{children}&rdquo;
        </p>

        {author && (
          <span className="font-outfit text-xs font-bold text-vienna-rose uppercase tracking-[0.2em] block mt-4">
            — {author}
            {role ? `, ${role}` : ""}
          </span>
        )}
      </PaperTextureBackground>
    </blockquote>
  );
}
