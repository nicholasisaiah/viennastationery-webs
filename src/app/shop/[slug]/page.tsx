import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS_DATA } from "@/data/products";
import { ProductDetailClient } from "./ProductDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found" };

  const discount =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  const priceStr = `Rp ${product.price.toLocaleString("id-ID")}`;

  return {
    title: `${product.name} — ${priceStr}`,
    description: product.description.substring(0, 160),
    openGraph: {
      title: `${product.name} ${discount ? `(-${discount}%)` : ""} — Vienna Stationery`,
      description: product.description.substring(0, 200),
      images: [{ url: product.image, width: 800, height: 800, alt: product.name }],
      url: `https://vienna-stationery.my.id/shop/${slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) return notFound();

  // Get related products (same category, excluding current)
  const related = PRODUCTS_DATA
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return <ProductDetailClient product={product} relatedProducts={related} />;
}
