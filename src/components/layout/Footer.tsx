import React from "react";
import Link from "next/link";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

const NAVIGATION_LINKS = [
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Journal", href: "/journal" },
] as const;

const CUSTOMER_CARE_LINKS = [
  { label: "Shipping", href: "#" },
  { label: "Returns", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Contact", href: "#" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

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

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-5">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vienna-text-muted hover:text-vienna-rose transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vienna-text-muted hover:text-vienna-rose transition-colors duration-200"
                aria-label="Follow us on Pinterest"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vienna-text-muted hover:text-vienna-rose transition-colors duration-200"
                aria-label="Follow us on TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.17a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.6z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-outfit font-bold text-vienna-text-heading text-xs uppercase tracking-[0.2em] mb-4">
              Navigation
            </h3>
            <ul className="space-y-3" role="list">
              {NAVIGATION_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-vienna-text-muted hover:text-vienna-text-heading text-sm font-nunito transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-outfit font-bold text-vienna-text-heading text-xs uppercase tracking-[0.2em] mb-4">
              Customer Care
            </h3>
            <ul className="space-y-3" role="list">
              {CUSTOMER_CARE_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-vienna-text-muted hover:text-vienna-text-heading text-sm font-nunito transition-colors duration-200"
                  >
                    {label}
                  </Link>
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
              Lovely letters to your inbox.
            </p>
            <NewsletterForm variant="inline" />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-vienna-lavender/40">
          <p className="text-center text-vienna-text-light text-xs font-outfit uppercase tracking-[0.15em]">
            © {currentYear} Vienna Stationery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
