"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AboutSection } from "@/components/home/AboutSection";
import { StorySection } from "@/components/home/StorySection";
import { CtaFooterSection } from "@/components/layout/CtaFooterSection";
import { WashiTape } from "@/components/ui/WashiTape";
import { Button } from "@/components/ui/Button";
import { TEAM_DATA } from "@/data/team";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutPageClient() {
  const { t, lang } = useLanguage();

  const values = lang === "id"
    ? [
        {
          icon: "✨", color: "bg-vienna-blush", title: "Lucu",
          desc: "Desain yang membuat hatimu berdebar. Setiap produk yang kami kurasi harus lolos uji 'apakah ini membuatku tersenyum?' sebelum sampai di rak kami.",
        },
        {
          icon: "📐", color: "bg-vienna-lavender", title: "Berguna",
          desc: "Keindahan tanpa fungsi hanya dekorasi. Stationery kami dirancang dengan penuh perhatian untuk meningkatkan alur kerja dan ritual kreatifmu.",
        },
        {
          icon: "🎨", color: "bg-vienna-washi-mint", title: "Kreatif",
          desc: "Kami percaya setiap orang punya sisi kreatif yang patut dikembangkan. Alat kami dirancang untuk mengundang eksplorasi, bukan mengintimidasi.",
        },
      ]
    : [
        {
          icon: "✨", color: "bg-vienna-blush", title: "Cute",
          desc: "Design should make your heart flutter. Every product we curate passes the 'does it make me smile?' test before it reaches our shelves.",
        },
        {
          icon: "📐", color: "bg-vienna-lavender", title: "Useful",
          desc: "Beauty without function is just decoration. Our stationery is thoughtfully designed to improve your daily workflows and creative rituals.",
        },
        {
          icon: "🎨", color: "bg-vienna-washi-mint", title: "Creative",
          desc: "We believe everyone has a creative side worth nurturing. Our tools are designed to invite exploration, not intimidate it.",
        },
      ];

  const stats = lang === "id"
    ? [
        { number: "2019", label: "Didirikan", emoji: "📅" },
        { number: "12+", label: "Produk Dikurasi", emoji: "📦" },
        { number: "12K+", label: "Pelanggan Bahagia", emoji: "🌸" },
        { number: "100%", label: "Dibuat dengan Cinta", emoji: "♡" },
      ]
    : [
        { number: "2019", label: "Founded", emoji: "📅" },
        { number: "12+", label: "Curated Products", emoji: "📦" },
        { number: "12K+", label: "Happy Customers", emoji: "🌸" },
        { number: "100%", label: "Made with Love", emoji: "♡" },
      ];

  return (
    <div className="min-h-screen bg-vienna-cream flex flex-col justify-between font-nunito">
      <div>

        {/* ── 1. HERO ──────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden bg-vienna-paper-gray paper-texture py-20 md:py-28 text-center px-4"
          aria-label="About Vienna hero"
        >
          {/* Decorative polaroid accents */}
          <div className="absolute top-8 left-6 hidden lg:block opacity-75 -rotate-[7deg] shadow-polaroid">
            <div className="bg-white p-2 w-24 rounded-sm">
              <div className="relative w-full aspect-square overflow-hidden rounded-xs">
                <Image
                  src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=200&q=80"
                  alt="Vienna stationery"
                  fill className="object-cover" sizes="96px"
                />
              </div>
              <p className="font-caveat text-[10px] text-center text-vienna-text-muted mt-1">{t("about.polaroidCaption")}</p>
            </div>
          </div>
          <div className="absolute top-12 right-8 hidden lg:block opacity-75 rotate-[6deg] shadow-polaroid">
            <div className="bg-white p-2 w-20 rounded-sm">
              <div className="relative w-full aspect-square overflow-hidden rounded-xs">
                <Image
                  src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=200&q=80"
                  alt="Vienna journal" fill className="object-cover" sizes="80px"
                />
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto relative z-10 space-y-5">
            <span className="inline-block text-vienna-rose font-outfit text-xs font-bold uppercase tracking-widest px-4 py-1.5 bg-white/90 rounded-pill shadow-soft">
              {t("about.pageBadge")}
            </span>
            <h1 className="font-playfair italic font-bold text-vienna-text-heading text-4xl sm:text-5xl md:text-6xl leading-tight">
              {t("about.pageHeadline")}
            </h1>
            <p className="font-nunito text-vienna-text-muted text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              {t("about.pageSub")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button href="/journal" variant="primary" size="lg" ariaLabel={t("hero.ctaJournal")}>
                {t("hero.ctaJournal")}
              </Button>
              <Button href="/people-behind-this-web" variant="secondary" size="lg" ariaLabel={lang === "id" ? "Kenali Tim Kami" : "Meet the Team"}>
                {lang === "id" ? "Kenali Tim Kami" : "Meet the Team"}
              </Button>
            </div>
          </div>

          <div className="absolute bottom-0 right-16 z-10">
            <WashiTape color="lavender" width="100px" rotation={3} />
          </div>
        </section>

        {/* ── 2. ABOUT SECTION (from home) ─────────────────────────── */}
        <AboutSection />

        {/* ── 3. OUR VALUES ────────────────────────────────────────── */}
        <section
          className="py-16 md:py-24 bg-vienna-offwhite"
          aria-labelledby="values-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
              <span className="inline-block text-vienna-rose font-outfit text-xs font-bold uppercase tracking-widest px-4 py-1.5 bg-vienna-pink-circle rounded-pill">
                {t("about.valuesBadge")}
              </span>
              <h2
                id="values-heading"
                className="font-outfit font-bold text-vienna-text-heading text-2xl sm:text-3xl md:text-4xl"
              >
                {t("pillars.headline")}
              </h2>
              <div className="w-10 h-0.5 bg-vienna-rose mx-auto rounded-full" aria-hidden="true" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white rounded-2xl p-7 shadow-soft border border-vienna-lavender/30 space-y-4 text-center"
                >
                  <div className={`w-14 h-14 ${v.color} rounded-full flex items-center justify-center text-2xl mx-auto`}>
                    {v.icon}
                  </div>
                  <h3 className="font-outfit font-bold text-xl text-vienna-text-heading">
                    {v.title}
                  </h3>
                  <p className="font-nunito text-sm text-vienna-text-muted leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. STORY SECTION (from home) ─────────────────────────── */}
        <StorySection />

        {/* ── 5. NUMBERS ───────────────────────────────────────────── */}
        <section
          className="py-14 bg-white border-y border-vienna-lavender/30"
          aria-label="Vienna by the numbers"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label} className="space-y-1">
                <p className="font-outfit font-extrabold text-3xl sm:text-4xl text-vienna-rose">
                  {s.emoji} {s.number}
                </p>
                <p className="font-nunito text-xs sm:text-sm text-vienna-text-muted uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. MEET THE TEAM (MINI) ──────────────────────────────── */}
        <section
          className="py-16 md:py-24 bg-vienna-cream paper-texture"
          aria-labelledby="team-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 space-y-3">
              <h2
                id="team-heading"
                className="font-comfortaa font-bold text-vienna-text-heading text-2xl sm:text-3xl"
              >
                {t("about.teamHeadline")}{" "}
                <span className="text-vienna-rose-light">♡</span>
              </h2>
              <p className="font-nunito text-vienna-text-muted text-sm sm:text-base">
                {lang === "id" ? "Tim kecil dengan perasaan besar tentang stationery." : "A small team with big feelings about stationery."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {TEAM_DATA.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl p-6 shadow-soft border border-vienna-lavender/30 space-y-4 text-center hover:shadow-medium transition-shadow duration-300"
                >
                  <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-vienna-lavender shadow-polaroid">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div>
                    <h3 className="font-outfit font-bold text-base text-vienna-text-heading">
                      {member.name}
                    </h3>
                    <p className="font-outfit text-[11px] font-bold text-vienna-rose uppercase tracking-widest mt-0.5">
                      {member.role}
                    </p>
                  </div>
                  <p className="font-caveat text-sm text-vienna-text-muted italic leading-snug">
                    {member.contribution}
                  </p>
                  <div className="pt-2 border-t border-vienna-lavender/30">
                    <span className="font-nunito text-[11px] text-vienna-text-muted">
                      {t("people.obsessed")}{" "}
                      <span className="font-semibold text-vienna-rose">
                        {member.obsessedWith}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/people-behind-this-web"
                className="font-outfit text-xs font-bold text-vienna-rose uppercase tracking-[0.2em] underline underline-offset-4 hover:text-vienna-rose-dark transition-colors"
              >
                {lang === "id" ? "Lihat Cerita Tim Lengkap →" : "See the Full Team Story →"}
              </Link>
            </div>
          </div>
        </section>

        {/* ── 7. QUOTE BANNER ──────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 gradient-cta"
          aria-label="Vienna quote"
        >
          <div className="max-w-3xl mx-auto px-4 text-center space-y-4">
            <p className="font-playfair italic text-2xl sm:text-3xl md:text-4xl text-vienna-text-heading leading-snug">
              {lang === "id"
                ? "\u201CNotebook yang tepat bisa menjadi awal dari segalanya.\u201D"
                : "\u201CThe right notebook can be the beginning of everything.\u201D"
              }
            </p>
            <p className="font-outfit text-xs font-bold text-vienna-rose uppercase tracking-widest">
              — Vienna, Since 2019
            </p>
            <div className="pt-4">
              <Button href="/shop" variant="primary" size="md" ariaLabel={t("hero.ctaShop")}>
                {t("hero.ctaShop")}
              </Button>
            </div>
          </div>
        </section>

      </div>

      <CtaFooterSection />
    </div>
  );
}
