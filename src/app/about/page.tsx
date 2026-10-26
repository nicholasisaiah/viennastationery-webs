import React from "react";
import { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Vienna — Our Story, Our People, Our Why",
  description:
    "Vienna Stationery began with a love for quiet mornings and beautiful notebooks. Learn about our story, values, and the people who make it all happen.",
  openGraph: {
    title: "About Vienna — Making Everyday Moments a Little More Lovely",
    description: "The story behind the stationery, the people, and the details.",
    url: "https://vienna-stationery.com/about",
    images: ["https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80"],
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
