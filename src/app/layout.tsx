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
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Analytics } from "@vercel/analytics/next";

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
    default: "Vienna Stationery — Momen Sehari-hari yang Sedikit Lebih Indah",
    template: "%s — Vienna Stationery",
  },
  description:
    "Stationery estetik untuk para pemimpi, perencana, dan mereka yang menemukan keindahan dalam detail-detail kecil kehidupan sehari-hari. Jelajahi jurnal, notebook, washi tape, dan lainnya.",
  keywords: [
    "stationery estetik",
    "stationery aesthetic",
    "jurnal stationery Indonesia",
    "notebook aesthetic Indonesia",
    "washi tape",
    "bullet journal Indonesia",
    "stationery online Indonesia",
    "Vienna stationery",
    "desk setup estetik",
    "tips journaling",
    "stationery shopee",
    "alat tulis estetik",
    "binder setup",
    "stationery murah aesthetic",
    "notebook pastel",
  ],
  authors: [{ name: "Vienna Creative Team" }],
  creator: "Vienna Stationery",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://vienna-stationery.my.id",
    siteName: "Vienna Stationery",
    title: "Vienna Stationery — Momen Sehari-hari yang Sedikit Lebih Indah",
    description:
      "Stationery estetik untuk para pemimpi, perencana, dan mereka yang menemukan keindahan dalam detail-detail kecil.",
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
    description: "Stationery estetik untuk momen sehari-hari yang lebih indah.",
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
  icons: {
    icon: [
      { url: "/images/vienna-logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/images/vienna-logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/images/vienna-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
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
        <LanguageProvider>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
