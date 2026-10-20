import type { Metadata } from "next";
import {
  Outfit,
  Playfair_Display,
  Fredoka,
  Nunito,
  Comfortaa,
  Caveat,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vienna-stationery.my.id"),
  title: {
    default: "Vienna Stationery — Making Everyday Moments a Little More Lovely",
    template: "%s — Vienna Stationery",
  },
  description:
    "Aesthetic stationery for the dreamers, the planners, and those who find magic in the small details of daily life. Explore journals, notebooks, washi tapes, and more.",
  keywords: [
    "aesthetic stationery",
    "journal stationery Indonesia",
    "notebook aesthetic",
    "washi tape",
    "bullet journal",
    "stationery online",
    "Vienna stationery",
    "desk setup aesthetic",
    "journaling tips",
    "stationery shopee",
  ],
  authors: [{ name: "Vienna Creative Team" }],
  creator: "Vienna Stationery",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://vienna-stationery.my.id",
    siteName: "Vienna Stationery",
    title: "Vienna Stationery — Making Everyday Moments a Little More Lovely",
    description:
      "Aesthetic stationery for dreamers, planners, and those who find magic in the small details.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Vienna Stationery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vienna Stationery",
    description: "Aesthetic stationery for everyday lovely moments.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`
        ${outfit.variable}
        ${playfair.variable}
        ${fredoka.variable}
        ${nunito.variable}
        ${comfortaa.variable}
        ${caveat.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
