import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaFooterSection } from "@/components/layout/CtaFooterSection";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { WashiTape } from "@/components/ui/WashiTape";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Community — Vienna Stationery",
  description:
    "Join thousands of creative minds sharing their journaling setups, desk tours, and daily rituals. Welcome to the Vienna Community.",
  openGraph: {
    title: "Vienna Community — Share Your Creative World",
    description:
      "A cozy corner for stationery lovers, journalers, and desk-tour enthusiasts.",
    url: "https://vienna-stationery.com/community",
    images: ["/design-reference/people-1.webp"],
  },
};

/* ── Community Wall data (mock user posts) ─────────────────────── */
const COMMUNITY_POSTS = [
  {
    id: "c1",
    image: "/design-reference/home-1.webp",
    username: "@rosamund.pages",
    caption: "October desk reset ✨ New binder, new season.",
    likes: 214,
    tag: "#ViennaDesk",
  },
  {
    id: "c2",
    image: "/design-reference/journal-1.webp",
    username: "@inkandmorning",
    caption: "Morning pages before the world wakes up 🌸",
    likes: 187,
    tag: "#ViennaMorning",
  },
  {
    id: "c3",
    image: "/design-reference/article-1.webp",
    username: "@elliot.journals",
    caption: "Palette swatching with my new markers 💜",
    likes: 302,
    tag: "#ViennaCreate",
  },
  {
    id: "c4",
    image: "/design-reference/home-4.webp",
    username: "@clara.stacks",
    caption: "Minimalist planner spread for the week ☁️",
    likes: 158,
    tag: "#ViennaPlans",
  },
  {
    id: "c5",
    image: "/design-reference/people-2.webp",
    username: "@mori.creates",
    caption: "Finally got the pink calc I've been waiting for 🩷",
    likes: 445,
    tag: "#ViennaDesk",
  },
  {
    id: "c6",
    image: "/design-reference/journal-3.webp",
    username: "@sageandstitch",
    caption: "Autumn journaling spread — falling for fall 🍂",
    likes: 269,
    tag: "#ViennaJournal",
  },
  {
    id: "c7",
    image: "/design-reference/home-2.webp",
    username: "@lena.notepad",
    caption: "Sticker haul is officially out of hand 😅💕",
    likes: 391,
    tag: "#ViennaCreate",
  },
  {
    id: "c8",
    image: "/design-reference/article-2.webp",
    username: "@paperandpetals",
    caption: "Weekly layout: simple, soft, intentional 🌿",
    likes: 176,
    tag: "#ViennaPlans",
  },
];

/* ── Monthly Challenge data ─────────────────────────────────────── */
const HASHTAG_GUIDES = [
  { tag: "#ViennaDesk", color: "bg-vienna-blush", desc: "Show us your desk setup & creative corner." },
  { tag: "#ViennaJournal", color: "bg-vienna-lavender", desc: "Spreads, morning pages, habit trackers." },
  { tag: "#ViennaCreate", color: "bg-vienna-washi-mint", desc: "Your art, swatches, DIY stationery." },
  { tag: "#ViennaMorning", color: "bg-vienna-washi-yellow", desc: "Morning rituals & warm beverage pairings." },
  { tag: "#ViennaPlans", color: "bg-vienna-pink-pastel", desc: "Weekly plans, goals & organization spreads." },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-vienna-cream flex flex-col justify-between font-nunito">
      <div>

        {/* ── 1. HERO ──────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden bg-vienna-paper-gray paper-texture py-20 md:py-28 text-center px-4"
          aria-label="Community hero"
        >
          {/* Decorative floating polaroids */}
          <div className="absolute top-8 left-6 hidden lg:block opacity-70 rotate-[-8deg] shadow-polaroid">
            <div className="bg-white p-2 w-24 rounded-sm">
              <div className="relative w-full aspect-square overflow-hidden rounded-xs">
                <Image
                  src="/design-reference/journal-1.webp"
                  alt="Community post"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <p className="font-caveat text-[10px] text-center text-vienna-text-muted mt-1">our people ♡</p>
            </div>
          </div>
          <div className="absolute top-16 right-8 hidden lg:block opacity-70 rotate-[6deg] shadow-polaroid">
            <div className="bg-white p-2 w-24 rounded-sm">
              <div className="relative w-full aspect-square overflow-hidden rounded-xs">
                <Image
                  src="/design-reference/home-1.webp"
                  alt="Community post"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <p className="font-caveat text-[10px] text-center text-vienna-text-muted mt-1">beautiful desks ✨</p>
            </div>
          </div>
          <div className="absolute bottom-10 left-20 hidden xl:block opacity-60 rotate-[3deg] shadow-polaroid">
            <div className="bg-white p-2 w-20 rounded-sm">
              <div className="relative w-full aspect-square overflow-hidden rounded-xs">
                <Image
                  src="/design-reference/people-2.webp"
                  alt="Community post"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto relative z-10 space-y-5">
            <span className="inline-block text-vienna-rose font-outfit text-xs font-bold uppercase tracking-widest px-4 py-1.5 bg-white/90 rounded-pill shadow-soft">
              Vienna Community ♡
            </span>
            <h1 className="font-comfortaa font-bold text-vienna-text-heading text-4xl sm:text-5xl md:text-6xl leading-tight">
              A Cozy Corner{" "}
              <span className="text-vienna-rose font-playfair italic font-normal">
                for Creatives
              </span>
            </h1>
            <p className="font-nunito text-vienna-text-muted text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
              Share your desk setups, journal spreads, and everyday rituals. This is a space where beauty lives in the details.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button
                href="https://instagram.com"
                variant="primary"
                size="lg"
                ariaLabel="Share on Instagram"
              >
                Share Your Setup
              </Button>
              <Button
                href="#community-wall"
                variant="secondary"
                size="lg"
                ariaLabel="Browse community posts"
              >
                Browse Posts
              </Button>
            </div>
          </div>

          {/* Washi tape accent */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
            <WashiTape color="pink" width="140px" rotation={0} />
          </div>
        </section>

        {/* ── 2. STATS ─────────────────────────────────────────────── */}
        <section className="py-10 border-b border-vienna-lavender/40 bg-white" aria-label="Community stats">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { number: "12.4K", label: "Community Members", emoji: "🌸" },
              { number: "38K+", label: "Posts Shared", emoji: "✨" },
              { number: "5", label: "Active Hashtags", emoji: "🏷️" },
              { number: "Monthly", label: "Creative Challenges", emoji: "🎨" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="font-outfit font-extrabold text-3xl sm:text-4xl text-vienna-rose">
                  {stat.emoji} {stat.number}
                </p>
                <p className="font-nunito text-xs sm:text-sm text-vienna-text-muted uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. COMMUNITY WALL ────────────────────────────────────── */}
        <section
          id="community-wall"
          className="py-16 md:py-24 bg-vienna-cream"
          aria-labelledby="wall-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 space-y-3">
              <h2
                id="wall-heading"
                className="font-outfit font-bold text-vienna-text-heading text-2xl sm:text-3xl md:text-4xl"
              >
                Community Wall{" "}
                <span className="text-vienna-rose-light">♡</span>
              </h2>
              <p className="font-nunito text-vienna-text-muted text-sm sm:text-base max-w-md mx-auto">
                Real setups from real people in our community. Tag us to be featured.
              </p>
            </div>

            {/* Masonry-style grid */}
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-0">
              {COMMUNITY_POSTS.map((post, idx) => (
                <div
                  key={post.id}
                  className="break-inside-avoid mb-4 group"
                >
                  <div
                    className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lift transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    role="article"
                    aria-label={`Post by ${post.username}`}
                  >
                    <div
                      className={`relative w-full ${idx % 3 === 0 ? "aspect-square" : idx % 3 === 1 ? "aspect-[4/5]" : "aspect-[3/4]"} overflow-hidden`}
                    >
                      <Image
                        src={post.image}
                        alt={post.caption}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      {/* Tag overlay */}
                      <div className="absolute top-2 left-2">
                        <span className="bg-white/90 backdrop-blur-sm text-vienna-rose font-outfit text-[10px] font-bold px-2 py-0.5 rounded-full shadow-soft">
                          {post.tag}
                        </span>
                      </div>
                    </div>
                    <div className="px-3 py-2.5 space-y-1">
                      <p className="font-outfit text-xs font-bold text-vienna-rose">
                        {post.username}
                      </p>
                      <p className="font-nunito text-xs text-vienna-text-muted line-clamp-2 leading-snug">
                        {post.caption}
                      </p>
                      <div className="flex items-center gap-1 pt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="#C67D7D"
                          stroke="#C67D7D"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                        <span className="font-outfit text-[10px] text-vienna-text-muted">
                          {post.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-outfit text-xs font-bold text-vienna-rose uppercase tracking-[0.2em] underline underline-offset-4 hover:text-vienna-rose-dark transition-colors"
                aria-label="See more posts on Instagram"
              >
                See More on Instagram ↗
              </a>
            </div>
          </div>
        </section>

        {/* ── 4. MONTHLY CHALLENGE ─────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-vienna-paper-gray paper-texture-heavy"
          aria-labelledby="challenge-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: text */}
              <div className="space-y-5">
                <span className="inline-block text-vienna-rose font-outfit text-xs font-bold uppercase tracking-widest px-4 py-1.5 bg-white rounded-pill shadow-soft">
                  October Challenge
                </span>
                <h2
                  id="challenge-heading"
                  className="font-fredoka font-bold text-vienna-text-heading text-3xl sm:text-4xl leading-tight"
                >
                  #ViennaDesk <br />
                  <span className="text-vienna-rose font-playfair italic font-normal">
                    October Edition
                  </span>
                </h2>
                <p className="font-nunito text-vienna-text-muted text-sm sm:text-base leading-relaxed">
                  This month, we&apos;re celebrating cozy fall desk setups! Share your October workspace — whether it&apos;s adorned with warm candles, earthy tones, or your latest stationery haul. Use{" "}
                  <span className="font-bold text-vienna-rose">#ViennaDesk</span> on Instagram, Pinterest, or TikTok for a chance to be featured in our monthly round-up.
                </p>
                <ul className="space-y-2 text-sm font-nunito text-vienna-text-muted">
                  {[
                    "🗓️ Deadline: October 31, 2026",
                    "📸 Platform: Instagram, Pinterest, or TikTok",
                    "🏷️ Tag: #ViennaDesk + @viennastationery",
                    "🎁 Winner: Featured on our Journal & gets a Vienna gift set",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="https://instagram.com"
                  variant="primary"
                  size="md"
                  ariaLabel="Join the October Challenge"
                >
                  Join the Challenge
                </Button>
              </div>

              {/* Right: polaroid collage */}
              <div className="relative flex items-center justify-center min-h-[300px]">
                <div className="relative w-64 sm:w-72">
                  {/* Back photo */}
                  <div className="absolute -top-4 -right-6 bg-white p-2.5 rounded-sm shadow-polaroid rotate-[7deg] z-0">
                    <div className="relative w-48 h-48 overflow-hidden rounded-xs bg-vienna-lavender-light">
                      <Image
                        src="/design-reference/journal-3.webp"
                        alt="Challenge entry"
                        fill
                        className="object-cover"
                        sizes="192px"
                      />
                    </div>
                    <p className="font-caveat text-[11px] text-center text-vienna-text-muted mt-1.5 px-2">
                      october vibes 🍂
                    </p>
                  </div>

                  {/* Front photo */}
                  <div className="relative bg-white p-3 rounded-sm shadow-polaroid -rotate-[4deg] z-10">
                    <div className="relative w-full aspect-square overflow-hidden rounded-xs bg-vienna-pink-pastel">
                      <Image
                        src="/design-reference/home-1.webp"
                        alt="Vienna desk challenge"
                        fill
                        className="object-cover"
                        sizes="256px"
                      />
                    </div>
                    <p className="font-caveat text-sm text-center text-vienna-text-muted mt-2 px-2">
                      share your corner ♡
                    </p>
                  </div>

                  {/* Washi accent */}
                  <div className="absolute -bottom-3 left-4 z-20">
                    <WashiTape color="yellow" width="80px" rotation={-5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. HASHTAG GUIDE ─────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-white"
          aria-labelledby="hashtags-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 space-y-2">
              <h2
                id="hashtags-heading"
                className="font-outfit font-bold text-vienna-text-heading text-2xl sm:text-3xl"
              >
                Our Community Hashtags
              </h2>
              <p className="font-nunito text-vienna-text-muted text-sm max-w-md mx-auto">
                Use these tags to connect with other Vienna creatives across platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {HASHTAG_GUIDES.map((h) => (
                <div
                  key={h.tag}
                  className={`${h.color} rounded-2xl p-5 space-y-2 border border-white/60 shadow-soft hover:shadow-medium transition-shadow duration-200`}
                >
                  <p className="font-outfit font-extrabold text-lg text-vienna-text-heading">
                    {h.tag}
                  </p>
                  <p className="font-nunito text-sm text-vienna-text-muted leading-snug">
                    {h.desc}
                  </p>
                  <a
                    href={`https://instagram.com/explore/tags/${h.tag.replace("#", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-outfit text-[11px] font-bold text-vienna-rose uppercase tracking-wider hover:underline"
                    aria-label={`Explore ${h.tag} on Instagram`}
                  >
                    Explore on Instagram ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. HOW TO GET FEATURED ───────────────────────────────── */}
        <section
          className="py-16 bg-vienna-offwhite"
          aria-labelledby="featured-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
            <div className="space-y-3">
              <h2
                id="featured-heading"
                className="font-outfit font-bold text-vienna-text-heading text-2xl sm:text-3xl"
              >
                How to Get Featured{" "}
                <span className="text-vienna-rose-light">♡</span>
              </h2>
              <p className="font-nunito text-vienna-text-muted text-sm sm:text-base max-w-lg mx-auto">
                Getting featured on the Vienna Community Wall is easy — just be yourself and share what you love!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  icon: "📸",
                  title: "Take a Photo",
                  desc: "Snap your desk, journal spread, or latest stationery haul. Any aesthetic counts!",
                },
                {
                  step: "02",
                  icon: "🏷️",
                  title: "Tag Vienna",
                  desc: "Use any of our community hashtags and tag @viennastationery in your post.",
                },
                {
                  step: "03",
                  icon: "✨",
                  title: "Get Featured",
                  desc: "We regularly browse our tags and feature the most inspiring posts right here.",
                },
              ].map((step) => (
                <div
                  key={step.step}
                  className="bg-white rounded-2xl p-6 shadow-soft border border-vienna-lavender/40 space-y-3 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-vienna-pink-circle flex items-center justify-center text-xl">
                      {step.icon}
                    </div>
                    <span className="font-outfit font-bold text-xs text-vienna-text-muted tracking-widest uppercase">
                      Step {step.step}
                    </span>
                  </div>
                  <h3 className="font-outfit font-bold text-base text-vienna-text-heading">
                    {step.title}
                  </h3>
                  <p className="font-nunito text-sm text-vienna-text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. QUOTE BANNER ──────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 gradient-cta"
          aria-label="Community quote"
        >
          <div className="max-w-3xl mx-auto px-4 text-center space-y-4">
            <p className="font-playfair italic text-2xl sm:text-3xl md:text-4xl text-vienna-text-heading leading-snug">
              &ldquo;You are not alone in your love for the small, quiet beauties of every day.&rdquo;
            </p>
            <p className="font-outfit text-xs font-bold text-vienna-rose uppercase tracking-widest">
              — Vienna Community Team
            </p>
          </div>
        </section>

        {/* ── 8. NEWSLETTER CTA ─────────────────────────────────────── */}
        <section
          className="py-16 md:py-20 bg-white border-t border-vienna-lavender/30"
          aria-labelledby="community-newsletter-heading"
        >
          <div className="max-w-xl mx-auto px-4 text-center space-y-6">
            <span className="inline-block text-vienna-rose font-outfit text-xs font-bold uppercase tracking-widest px-4 py-1.5 bg-vienna-pink-circle rounded-pill">
              Lovely Letters
            </span>
            <h2
              id="community-newsletter-heading"
              className="font-outfit font-bold text-vienna-text-heading text-2xl sm:text-3xl"
            >
              Stay in the Loop{" "}
              <span className="text-vienna-rose-light">♡</span>
            </h2>
            <p className="font-nunito text-vienna-text-muted text-sm sm:text-base">
              Get our monthly community round-up, challenge announcements, and curated stationery finds — delivered straight to your inbox.
            </p>
            <NewsletterForm variant="card" />
          </div>
        </section>

      </div>

      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <CtaFooterSection />
    </div>
  );
}
