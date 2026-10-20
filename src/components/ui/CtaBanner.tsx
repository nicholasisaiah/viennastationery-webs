import React from "react";
import { Button } from "./Button";

interface CtaBannerProps {
  heading: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
}

export function CtaBanner({
  heading,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  className = "",
}: CtaBannerProps) {
  return (
    <section
      className={`
        gradient-cta
        py-16 md:py-20 lg:py-24
        text-center
        ${className}
      `}
    >
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="font-comfortaa font-light text-vienna-text-heading text-2xl md:text-3xl lg:text-4xl leading-snug">
          {heading}
        </h2>
        {subtitle && (
          <p className="handwritten text-vienna-text-muted text-lg mt-3">
            {subtitle}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Button href={primaryHref} variant="primary" size="lg">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button href={secondaryHref} variant="secondary" size="lg">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
