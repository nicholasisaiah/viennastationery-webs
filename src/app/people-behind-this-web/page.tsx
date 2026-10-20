import React from "react";
import { Metadata } from "next";
import {
  PeopleHeroSection,
  WhoMadeThisSection,
  MeetThePeopleSection,
  ThingsAboutUsSection,
  TimelineSection,
  DraftsCollageSection,
  PeopleQuoteBanner,
  PeopleJsonLd,
} from "@/components/people";
import { CtaFooterSection } from "@/components/layout/CtaFooterSection";

export const metadata: Metadata = {
  title: "People Behind This Web — Vienna Stationery",
  description:
    "Meet the team, curators, and creators behind Vienna Stationery. Discover the story, timeline, and little details of our creative journey.",
  openGraph: {
    title: "People Behind This Web — Vienna Stationery",
    description: "The people behind the little details.",
    url: "https://vienna-stationery.com/people-behind-this-web",
    images: ["https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80"],
  },
};

export default function PeoplePage() {
  return (
    <div className="min-h-screen bg-vienna-cream flex flex-col justify-between font-nunito">
      <PeopleJsonLd />

      <div>
        {/* 1. HERO */}
        <PeopleHeroSection />

        {/* 2. SO... WHO MADE THIS? */}
        <WhoMadeThisSection />

        {/* 3. MEET THE PEOPLE ♡ */}
        <MeetThePeopleSection />

        {/* 4. A FEW THINGS ABOUT US */}
        <ThingsAboutUsSection />

        {/* 5. FROM IDEA → LITTLE DETAILS → THIS WEBSITE. */}
        <TimelineSection />

        {/* 6. SOMEWHERE BETWEEN THE DRAFTS AND THE FINAL VERSION ♡ */}
        <DraftsCollageSection />

        {/* 7. BANNER KUTIPAN */}
        <PeopleQuoteBanner />
      </div>

      {/* 8. FOOTER */}
      <CtaFooterSection />
    </div>
  );
}
