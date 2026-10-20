import React from "react";
import { Button } from "@/components/ui/Button";

export function PeopleQuoteBanner() {
  return (
    <section className="gradient-cta py-16 sm:py-20 md:py-24 text-center px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <blockquote className="font-playfair italic font-bold text-vienna-text-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          &ldquo;Made with ideas, little details, and a lot of love for stationery.&rdquo;
        </blockquote>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button href="/journal" variant="primary" size="lg">
            Explore the Journal
          </Button>
          <Button href="/" variant="secondary" size="lg">
            Back to Vienna
          </Button>
        </div>
      </div>
    </section>
  );
}
