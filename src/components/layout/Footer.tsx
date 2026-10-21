"use client";

import React from "react";
import Link from "next/link";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const NAVIGATION_LINKS = [
    { label: t("footer.about"), href: "/about" },
    { label: t("footer.shop"), href: "/shop" },
    { label: t("footer.journal"), href: "/journal" },
    { label: t("footer.people"), href: "/people-behind-this-web" },
  ];

  const CUSTOMER_CARE_LINKS = [
    { label: "Shopee", href: "https://id.shp.ee/JDMuodop" },
    { label: "FAQ", href: "#" },
  ];

  return (
    <footer className="bg-vienna-cream" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & Social */}
          <div>
            <Link
              href="/"
              className="font-outfit font-extrabold text-vienna-rose text-xl tracking-wider"
              aria-label="Vienna Stationery — Home"
            >
              VIENNA
            </Link>
            <p className="text-vienna-text-muted text-xs font-nunito mt-3 leading-relaxed">
              {t("footer.tagline")}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-5">
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-vienna-text-muted hover:text-vienna-rose transition-colors duration-200"
                aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                className="text-vienna-text-muted hover:text-vienna-rose transition-colors duration-200"
                aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.17a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.6z" />
                </svg>
              </a>
              {/* Shopee */}
              <a href="https://id.shp.ee/JDMuodop" target="_blank" rel="noopener noreferrer"
                className="text-vienna-text-muted hover:text-vienna-rose transition-colors duration-200"
                aria-label="Shopee Store">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-outfit font-bold text-vienna-text-heading text-xs uppercase tracking-[0.2em] mb-4">
              Navigasi
            </h3>
            <ul className="space-y-3" role="list">
              {NAVIGATION_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href}
                    className="text-vienna-text-muted hover:text-vienna-text-heading text-sm font-nunito transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-outfit font-bold text-vienna-text-heading text-xs uppercase tracking-[0.2em] mb-4">
              Bantuan
            </h3>
            <ul className="space-y-3" role="list">
              {CUSTOMER_CARE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-vienna-text-muted hover:text-vienna-text-heading text-sm font-nunito transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-outfit font-bold text-vienna-text-heading text-xs uppercase tracking-[0.2em] mb-4">
              Newsletter
            </h3>
            <p className="text-vienna-text-muted text-sm font-nunito mb-4">
              {t("journal.newsletter.sub")}
            </p>
            <NewsletterForm variant="inline" />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-vienna-lavender/40">
          <p className="text-center text-vienna-text-light text-xs font-outfit uppercase tracking-[0.15em]">
            © {currentYear} Vienna Stationery. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
