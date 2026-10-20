import React from "react";
import { Metadata } from "next";
import {
  Button,
  WashiTape,
  PolaroidFrame,
  SectionHeading,
  ArticleCard,
  ProductCard,
  Pill,
  PaperTextureBackground,
  CtaBanner,
  NewsletterForm,
} from "@/components/ui";
import { CtaFooterSection } from "@/components/layout/CtaFooterSection";
import { ARTICLES_DATA } from "@/data/articles";
import { PRODUCTS_DATA } from "@/data/products";

export const metadata: Metadata = {
  title: "Vienna Design System — Visual Reference & Component Library",
  description:
    "Explore the color palette, typography system, reusable scrapbook components, and UI library for Vienna Stationery.",
};

export default function DesignSystemPage() {
  const sampleArticle = ARTICLES_DATA[0];
  const sampleProduct = PRODUCTS_DATA[0];

  return (
    <div className="min-h-screen bg-vienna-cream flex flex-col justify-between">
      <div>
        {/* Header */}
        <section className="bg-vienna-paper-gray paper-texture py-16 border-b border-vienna-lavender">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-vienna-rose font-outfit text-xs font-bold uppercase tracking-widest px-4 py-1.5 bg-white/80 rounded-pill shadow-soft">
              Design Reference & UI Kit
            </span>
            <h1 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-bold text-vienna-text-heading mt-4">
              Vienna Design System <span className="text-vienna-rose-light">♡</span>
            </h1>
            <p className="font-nunito text-vienna-text-muted text-base md:text-lg max-w-2xl mx-auto mt-3">
              Halaman ini menampilkan seluruh warna, tipografi, bingkai polaroid, washi tape, 
              tombol pill, dan komponen UI reusable untuk membandingkan secara langsung dengan Figma.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 my-16">
          {/* 1. COLOR PALETTE */}
          <section aria-labelledby="colors-heading" className="space-y-6">
            <SectionHeading subtitle="Warna utama, latar bertekstur, aksen lavender, dan tag washi tape.">
              1. Color Palette
            </SectionHeading>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Pink Rose", variable: "--vienna-rose", hex: "#C67D7D", bgClass: "bg-vienna-rose", textLight: true, role: "Primary Logo & Button" },
                { name: "Rose Dark", variable: "--vienna-rose-dark", hex: "#B06A6A", bgClass: "bg-vienna-rose-dark", textLight: true, role: "Primary Hover" },
                { name: "Rose Light", variable: "--vienna-rose-light", hex: "#D4A0A0", bgClass: "bg-vienna-rose-light", textLight: true, role: "Heart Accents" },
                { name: "Blush", variable: "--vienna-blush", hex: "#F2D5D5", bgClass: "bg-vienna-blush", textLight: false, role: "Pills & Highlights" },
                { name: "Pink Circle", variable: "--vienna-pink-circle", hex: "#F9E8E8", bgClass: "bg-vienna-pink-circle", textLight: false, role: "Icon Circle Background" },
                { name: "Pink Pastel", variable: "--vienna-pink-pastel", hex: "#FADCE2", bgClass: "bg-vienna-pink-pastel", textLight: false, role: "Soft Card Background" },
                
                { name: "Paper Gray", variable: "--vienna-paper-gray", hex: "#E8E4DF", bgClass: "bg-vienna-paper-gray", textLight: false, role: "Hero Background (Home/People)" },
                { name: "Cream", variable: "--vienna-cream", hex: "#FAF9F6", bgClass: "bg-vienna-cream", textLight: false, role: "Main Page Background" },
                { name: "Off White", variable: "--vienna-offwhite", hex: "#F5F3EF", bgClass: "bg-vienna-offwhite", textLight: false, role: "Alternate Section" },
                { name: "Pure White", variable: "--vienna-white", hex: "#FFFFFF", bgClass: "bg-white", textLight: false, role: "Polaroids & Cards" },
                
                { name: "Lavender", variable: "--vienna-lavender", hex: "#E8DFF0", bgClass: "bg-vienna-lavender", textLight: false, role: "Borders & Frames" },
                { name: "Lavender Card", variable: "--vienna-lavender-card", hex: "#ECDFF5", bgClass: "bg-vienna-lavender-card", textLight: false, role: "Community Card" },

                { name: "Text Heading", variable: "--vienna-text-heading", hex: "#2E2E2E", bgClass: "bg-vienna-text-heading", textLight: true, role: "Headings & Dark Cards" },
                { name: "Text Dark", variable: "--vienna-text-dark", hex: "#3D3D3D", bgClass: "bg-vienna-text-dark", textLight: true, role: "Body Copy" },
                { name: "Text Muted", variable: "--vienna-text-muted", hex: "#8A8A8A", bgClass: "bg-vienna-text-muted", textLight: true, role: "Captions & Subtitles" },
                { name: "Washi Pink", variable: "--vienna-washi-pink", hex: "#F7D6D6", bgClass: "bg-vienna-washi-pink", textLight: false, role: "Washi Tape Pink" },
                { name: "Washi Yellow", variable: "--vienna-washi-yellow", hex: "#F7EAC4", bgClass: "bg-vienna-washi-yellow", textLight: false, role: "Washi Tape Yellow" },
                { name: "Washi Mint", variable: "--vienna-washi-mint", hex: "#D4EDE1", bgClass: "bg-vienna-washi-mint", textLight: false, role: "Washi Tape Mint" },
              ].map((c) => (
                <div
                  key={c.variable}
                  className="bg-white rounded-xl p-3 border border-vienna-lavender shadow-soft flex flex-col"
                >
                  <div
                    className={`w-full h-20 rounded-lg ${c.bgClass} shadow-inner mb-3 border border-black/5 flex items-end justify-end p-2`}
                  >
                    <span className={`text-[10px] font-mono ${c.textLight ? "text-white" : "text-vienna-text-heading"} bg-black/10 px-1.5 py-0.5 rounded`}>
                      {c.hex}
                    </span>
                  </div>
                  <h4 className="font-outfit font-bold text-xs text-vienna-text-heading">
                    {c.name}
                  </h4>
                  <p className="font-mono text-[10px] text-vienna-text-muted mt-0.5">
                    {c.variable}
                  </p>
                  <p className="text-[11px] font-nunito text-vienna-rose mt-2 pt-2 border-t border-vienna-lavender/40">
                    {c.role}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 2. TYPOGRAPHY SYSTEM */}
          <section aria-labelledby="typography-heading" className="space-y-6">
            <SectionHeading subtitle="Setiap font digunakan secara konsisten sesuai peran halaman pada Figma.">
              2. Typography System
            </SectionHeading>

            <div className="space-y-6 bg-white rounded-2xl p-6 md:p-8 border border-vienna-lavender shadow-soft">
              {/* Outfit */}
              <div className="pb-6 border-b border-vienna-lavender">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-outfit font-bold text-vienna-rose text-sm">
                    Outfit (Google Font)
                  </span>
                  <span className="text-xs text-vienna-text-muted font-mono">
                    Used in: Home Page Headings, Subtitles, Buttons, Badges
                  </span>
                </div>
                <p className="font-outfit text-3xl font-extrabold text-vienna-text-heading">
                  Making Everyday Moments a Little More Lovely.
                </p>
              </div>

              {/* Playfair Display Italic */}
              <div className="pb-6 border-b border-vienna-lavender">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-playfair font-bold text-vienna-rose text-sm">
                    Playfair Display Italic (Google Font)
                  </span>
                  <span className="text-xs text-vienna-text-muted font-mono">
                    Used in: Editorial accents & Quote Highlights
                  </span>
                </div>
                <p className="font-playfair italic text-3xl text-vienna-rose">
                  &ldquo;Little things can make ordinary days feel special.&rdquo;
                </p>
              </div>

              {/* Fredoka */}
              <div className="pb-6 border-b border-vienna-lavender">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-fredoka font-bold text-vienna-rose text-sm">
                    Fredoka (Google Font)
                  </span>
                  <span className="text-xs text-vienna-text-muted font-mono">
                    Used in: Journal & Article Titles (Rounded & Playful)
                  </span>
                </div>
                <p className="font-fredoka text-3xl font-bold text-vienna-text-heading">
                  How to Make Your Study Desk Feel More Like You
                </p>
              </div>

              {/* Nunito */}
              <div className="pb-6 border-b border-vienna-lavender">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-nunito font-bold text-vienna-rose text-sm">
                    Nunito (Google Font)
                  </span>
                  <span className="text-xs text-vienna-text-muted font-mono">
                    Used in: Main Body Copy, Paragraphs, Articles
                  </span>
                </div>
                <p className="font-nunito text-base text-vienna-text-dark leading-relaxed">
                  We believe your tools for expression should spark joy every time you touch them.
                  Vienna was born from a love for delicate textures, soft hues, and the quiet ritual of putting pen to paper.
                </p>
              </div>

              {/* Comfortaa */}
              <div className="pb-6 border-b border-vienna-lavender">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-comfortaa font-bold text-vienna-rose text-sm">
                    Comfortaa (Google Font)
                  </span>
                  <span className="text-xs text-vienna-text-muted font-mono">
                    Used in: People Page & Soft Friendly Headers
                  </span>
                </div>
                <p className="font-comfortaa text-2xl md:text-3xl text-vienna-text-heading">
                  The people behind the little details.
                </p>
              </div>

              {/* Caveat */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-caveat font-bold text-vienna-rose text-base">
                    Caveat (Handwritten Font)
                  </span>
                  <span className="text-xs text-vienna-text-muted font-mono">
                    Used in: Polaroid Captions & Handwritten Notes
                  </span>
                </div>
                <p className="font-caveat text-2xl text-vienna-rose">
                  for the little things ♡ &bull; the early drafts... &bull; finding the right pink
                </p>
              </div>
            </div>
          </section>

          {/* 3. BUTTON VARIANTS & SIZES */}
          <section aria-labelledby="buttons-heading" className="space-y-6">
            <SectionHeading subtitle="Pill-shaped buttons dengan gaya primary solid dan secondary outline.">
              3. Buttons & Interactive Controls
            </SectionHeading>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-vienna-lavender shadow-soft space-y-8">
              <div>
                <h4 className="font-outfit font-bold text-sm uppercase tracking-wider text-vienna-text-muted mb-4">
                  Primary Buttons (Solid Pink)
                </h4>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" size="sm">Get to Know Vienna</Button>
                  <Button variant="primary" size="md">Get to Know Vienna</Button>
                  <Button variant="primary" size="lg">Explore Collection</Button>
                  <Button variant="primary" disabled size="md">Disabled</Button>
                </div>
              </div>

              <div>
                <h4 className="font-outfit font-bold text-sm uppercase tracking-wider text-vienna-text-muted mb-4">
                  Secondary Buttons (Outline Pink)
                </h4>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="secondary" size="sm">Shop on Shopee</Button>
                  <Button variant="secondary" size="md">Shop on Shopee</Button>
                  <Button variant="secondary" size="lg">Back to Vienna</Button>
                  <Button variant="secondary" disabled size="md">Disabled</Button>
                </div>
              </div>
            </div>
          </section>

          {/* 4. SCRAPBOOK ELEMENTS */}
          <section aria-labelledby="scrapbook-heading" className="space-y-6">
            <SectionHeading subtitle="Bingkai polaroid dengan efek rotasi, bayangan lembut, dan pita washi tape bertekstur.">
              4. Scrapbook Elements: Polaroid & Washi Tape
            </SectionHeading>

            <div className="bg-white rounded-2xl p-6 border border-vienna-lavender shadow-soft">
              <h4 className="font-outfit font-bold text-sm uppercase tracking-wider text-vienna-text-muted mb-4">
                Washi Tape Palette
              </h4>
              <div className="flex flex-wrap items-center gap-8 py-4">
                <div className="flex items-center gap-3">
                  <WashiTape color="pink" width="70px" rotation={-4} />
                  <span className="text-xs font-outfit text-vienna-text-muted">Pink</span>
                </div>
                <div className="flex items-center gap-3">
                  <WashiTape color="yellow" width="70px" rotation={3} />
                  <span className="text-xs font-outfit text-vienna-text-muted">Yellow</span>
                </div>
                <div className="flex items-center gap-3">
                  <WashiTape color="mint" width="70px" rotation={-2} />
                  <span className="text-xs font-outfit text-vienna-text-muted">Mint</span>
                </div>
                <div className="flex items-center gap-3">
                  <WashiTape color="lavender" width="70px" rotation={5} />
                  <span className="text-xs font-outfit text-vienna-text-muted">Lavender</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 justify-items-center">
              <PolaroidFrame
                src="/design-reference/home-1.webp"
                alt="Desk study view"
                caption="for the little things ♡"
                rotation={-4}
                showWashiTape={true}
                washiColor="pink"
                washiRotation={-6}
                width={260}
                height={260}
              />
              <PolaroidFrame
                src="/design-reference/article-1.webp"
                alt="The early drafts"
                caption="the early drafts..."
                rotation={3}
                showWashiTape={true}
                washiColor="yellow"
                washiRotation={5}
                width={260}
                height={260}
              />
              <PolaroidFrame
                src="/design-reference/journal-1.webp"
                alt="Finding the right pink"
                caption="finding the right pink"
                rotation={-2}
                showWashiTape={true}
                washiColor="lavender"
                washiRotation={-3}
                width={260}
                height={260}
              />
            </div>
          </section>

          {/* 5. PILLS & TAGS */}
          <section aria-labelledby="pills-heading" className="space-y-6">
            <SectionHeading subtitle="Komponen Pill untuk kategori filter dan tag topik.">
              5. Pills & Category Tags
            </SectionHeading>

            <div className="bg-white rounded-2xl p-6 border border-vienna-lavender shadow-soft flex flex-wrap items-center gap-3">
              <Pill variant="active">ALL</Pill>
              <Pill variant="default">STATIONERY</Pill>
              <Pill variant="default">STUDY & LIFESTYLE</Pill>
              <Pill variant="default">JOURNALING</Pill>
              <Pill variant="default">ORGANIZATION</Pill>
              <Pill variant="dark">MUST HAVE</Pill>
            </div>
          </section>

          {/* 6. CONTENT CARDS */}
          <section aria-labelledby="cards-heading" className="space-y-6">
            <SectionHeading subtitle="Kartu artikel dan produk sesuai tata letak Figma.">
              6. Article & Product Cards
            </SectionHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-outfit font-bold text-sm uppercase tracking-wider text-vienna-text-muted mb-4">
                  Article Card Component
                </h4>
                <ArticleCard
                  title={sampleArticle.title}
                  category={sampleArticle.category}
                  excerpt={sampleArticle.excerpt}
                  image={sampleArticle.image}
                  href="/journal/how-to-make-your-study-desk-feel-more-like-you"
                />
              </div>

              <div>
                <h4 className="font-outfit font-bold text-sm uppercase tracking-wider text-vienna-text-muted mb-4">
                  Product Card Component
                </h4>
                <div className="max-w-xs">
                  <ProductCard
                    name={sampleProduct.name}
                    price={sampleProduct.price}
                    image={sampleProduct.image}
                    badge={sampleProduct.badge}
                    href="/shop"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* 7. PAPER TEXTURE */}
          <section aria-labelledby="texture-heading" className="space-y-6">
            <SectionHeading subtitle="Tekstur kertas lembut buatan CSS/SVG noise tanpa gambar eksternal berat.">
              7. Paper Texture Background Demo
            </SectionHeading>

            <PaperTextureBackground variant="gray" heavy={false} className="rounded-2xl p-8 border border-vienna-lavender">
              <div className="max-w-md mx-auto text-center space-y-3">
                <h3 className="font-outfit font-bold text-xl text-vienna-text-heading">
                  Paper Texture Container
                </h3>
                <p className="text-vienna-text-muted text-sm font-nunito">
                  Gaya latar abu bertekstur kertas halus ini digunakan pada Hero Home dan Halaman People Behind.
                </p>
              </div>
            </PaperTextureBackground>
          </section>

          {/* 8. CTA BANNER */}
          <section aria-labelledby="cta-heading" className="space-y-6">
            <SectionHeading subtitle="Spanduk ajakan bertindak dengan gradasi warna pink ke lavender.">
              8. CTA Banner (Pink-Lavender Gradient)
            </SectionHeading>

            <div className="rounded-2xl overflow-hidden shadow-soft">
              <CtaBanner
                heading="Stay a little longer?"
                subtitle="We're so glad you're here."
                primaryLabel="Explore Vienna"
                primaryHref="/shop"
                secondaryLabel="Shop on Shopee"
                secondaryHref="#"
              />
            </div>
          </section>

          {/* 9. NEWSLETTER FORM */}
          <section aria-labelledby="newsletter-heading" className="space-y-6">
            <SectionHeading subtitle="Formulir langganan buletin (varian kartu & varian inline footer).">
              9. Newsletter Form Components
            </SectionHeading>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h4 className="font-outfit font-bold text-sm uppercase tracking-wider text-vienna-text-muted mb-4">
                  Card Variant (Centered Journal Banner)
                </h4>
                <NewsletterForm variant="card" />
              </div>

              <div>
                <h4 className="font-outfit font-bold text-sm uppercase tracking-wider text-vienna-text-muted mb-4">
                  Inline Variant (Footer Newsletter)
                </h4>
                <div className="bg-white p-6 rounded-xl border border-vienna-lavender shadow-soft">
                  <p className="text-vienna-text-muted text-sm font-nunito mb-3">
                    Lovely letters to your inbox.
                  </p>
                  <NewsletterForm variant="inline" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <CtaFooterSection />
    </div>
  );
}
