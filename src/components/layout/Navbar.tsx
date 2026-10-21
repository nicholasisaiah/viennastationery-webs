"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavbarProps {
  variant?: "paper" | "cream";
}

export function Navbar({ variant = "cream" }: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const NAV_LINKS = [
    { label: t("nav.about").toUpperCase(), href: "/about" },
    { label: t("nav.shop").toUpperCase(), href: "/shop" },
    { label: t("nav.journal").toUpperCase(), href: "/journal" },
  ];

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const bgClass =
    variant === "paper"
      ? "bg-vienna-paper-gray/95 backdrop-blur-md"
      : "bg-vienna-cream/95 backdrop-blur-md";

  return (
    <header
      className={`
        sticky top-0 z-50
        ${bgClass}
        transition-shadow duration-300
        ${scrolled ? "shadow-soft" : ""}
      `}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[72px]"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-outfit font-extrabold text-vienna-rose text-xl md:text-2xl tracking-wider relative z-50"
          aria-label="Vienna Stationery — Home"
        >
          VIENNA
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10" role="list">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`
                    font-outfit text-xs font-medium tracking-[0.2em]
                    transition-colors duration-200
                    relative pb-1
                    ${
                      isActive
                        ? "text-vienna-text-heading"
                        : "text-vienna-text-muted hover:text-vienna-text-heading"
                    }
                  `}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-vienna-rose rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-2">

          {/* Language Toggle */}
          <div
            className="
              hidden md:flex items-center
              bg-vienna-offwhite border border-vienna-lavender/40
              rounded-pill overflow-hidden text-[10px] font-outfit font-bold
              tracking-widest
            "
            role="group"
            aria-label="Pilih bahasa"
          >
            <button
              onClick={() => setLang("id")}
              className={`
                px-3 py-1.5 transition-all duration-200 cursor-pointer
                ${lang === "id"
                  ? "bg-vienna-rose text-white"
                  : "text-vienna-text-muted hover:text-vienna-text-heading"
                }
              `}
              aria-pressed={lang === "id"}
            >
              ID
            </button>
            <button
              onClick={() => setLang("en")}
              className={`
                px-3 py-1.5 transition-all duration-200 cursor-pointer
                ${lang === "en"
                  ? "bg-vienna-rose text-white"
                  : "text-vienna-text-muted hover:text-vienna-text-heading"
                }
              `}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          {/* Shopee bag button */}
          <a
            href="https://id.shp.ee/JDMuodop"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-9 h-9
              flex items-center justify-center
              rounded-full
              bg-vienna-pink-circle
              text-vienna-rose
              hover:bg-vienna-blush
              transition-colors duration-200
              focus-visible:ring-2 focus-visible:ring-vienna-rose
              cursor-pointer
            "
            aria-label={t("nav.shopCta")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            className="
              md:hidden
              p-2 rounded-lg
              text-vienna-text-heading
              hover:bg-vienna-blush/30
              transition-colors duration-200
              focus-visible:ring-2 focus-visible:ring-vienna-rose
              relative z-50
              cursor-pointer
            "
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            className="
              fixed inset-x-0 top-0 z-40 md:hidden
              bg-vienna-cream pt-20 pb-8 px-6
              shadow-medium animate-fade-in
            "
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Mobile Language Toggle */}
            <div className="flex gap-2 mb-6 pb-4 border-b border-vienna-lavender/30">
              <button
                onClick={() => setLang("id")}
                className={`
                  flex-1 py-2 rounded-pill text-[11px] font-outfit font-bold tracking-widest transition-all cursor-pointer
                  ${lang === "id" ? "bg-vienna-rose text-white" : "bg-vienna-offwhite text-vienna-text-muted"}
                `}
              >
                🇮🇩 Indonesia
              </button>
              <button
                onClick={() => setLang("en")}
                className={`
                  flex-1 py-2 rounded-pill text-[11px] font-outfit font-bold tracking-widest transition-all cursor-pointer
                  ${lang === "en" ? "bg-vienna-rose text-white" : "bg-vienna-offwhite text-vienna-text-muted"}
                `}
              >
                🇬🇧 English
              </button>
            </div>

            <ul className="flex flex-col gap-1" role="list">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = pathname === href || pathname.startsWith(href + "/");
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`
                        block py-3 px-4
                        font-outfit text-sm font-medium tracking-[0.2em]
                        rounded-lg transition-colors duration-200
                        ${isActive
                          ? "text-vienna-rose bg-vienna-pink-circle"
                          : "text-vienna-text-heading hover:bg-vienna-offwhite"
                        }
                      `}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
