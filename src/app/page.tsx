import React from "react";
import { Metadata } from "next";
import {
  HeroSection,
  AboutSection,
  StorySection,
  PillarsSection,
  BentoGridSection,
  FavoritesSection,
  QuoteBannerSection,
  NavigationGridSection,
} from "@/components/home";
import { CtaFooterSection } from "@/components/layout/CtaFooterSection";

export const metadata: Metadata = {
  title: "Vienna Stationery — Making Everyday Moments a Little More Lovely",
  description:
    "Aesthetic stationery for the dreamers, the planners, and those who find magic in the small details of daily life. Welcome to the world of Vienna.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO */}
      <HeroSection />

      {/* 2. A LITTLE ABOUT VIENNA ♡ */}
      <AboutSection />

      {/* 3. IT STARTED WITH THE LITTLE THINGS. */}
      <StorySection />

      {/* 4. CUTE / USEFUL / CREATIVE */}
      <PillarsSection />

      {/* 5. THE VIENNA WORLD (Bento grid) */}
      <BentoGridSection />

      {/* 6. A FEW VIENNA FAVORITES ♡ */}
      <FavoritesSection />

      {/* 7. BANNER KUTIPAN */}
      <QuoteBannerSection />

      {/* 8. THERE'S MORE TO VIENNA ♡ */}
      <NavigationGridSection />

      {/* 9. CTA PENUTUP + FOOTER */}
      <CtaFooterSection />
    </div>
  );
}
