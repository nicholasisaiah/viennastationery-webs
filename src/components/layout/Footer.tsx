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

            {/* Shopee store link only */}
            <div className="flex items-center gap-4 mt-5">
              <a href="https://id.shp.ee/JDMuodop" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-vienna-text-muted hover:text-vienna-rose transition-colors duration-200 text-xs font-outfit font-bold uppercase tracking-wider"
                aria-label="Shopee Store">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
                <span>{t("footer.shopeeBtn")}</span>
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
