import React from "react";
import { Metadata } from "next";
import { ShopPageClient } from "./ShopPageClient";

export const metadata: Metadata = {
  title: "Shop — Vienna Stationery",
  description:
    "Explore our curated collection of aesthetic stationery, notebooks, pens, washi tapes, and desk accessories. Shop the Vienna collection.",
  openGraph: {
    title: "Shop Vienna Stationery — Hand-Picked Essentials for Your Creative Desk",
    description: "Notebooks, pens, washi tapes, and desk accessories curated for dreamers and planners.",
    url: "https://vienna-stationery.com/shop",
    images: ["https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=1200&q=80"],
  },
};

export default function ShopPage() {
  return <ShopPageClient />;
}
