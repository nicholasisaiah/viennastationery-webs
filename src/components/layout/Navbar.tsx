"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "ABOUT", href: "/about" },
  { label: "SHOP", href: "/shop" },
  { label: "JOURNAL", href: "/journal" },
] as const;

interface NavbarProps {
  variant?: "paper" | "cream";
}

export function Navbar({ variant = "cream" }: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
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
                  {/* Active underline */}
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

        {/* Right icons */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button
            className="
              p-2 rounded-full
              text-vienna-text-muted hover:text-vienna-text-heading
              transition-colors duration-200
              focus-visible:ring-2 focus-visible:ring-vienna-rose
              cursor-pointer
            "
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Bag */}
          <button
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
            aria-label="Shopping bag"
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
          </button>

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
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
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
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <div
            id="mobile-menu"
            className="
              fixed inset-x-0 top-0 z-40 md:hidden
              bg-vienna-cream pt-20 pb-8 px-6
              shadow-medium
              animate-fade-in
            "
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
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
                        rounded-lg
                        transition-colors duration-200
                        ${
                          isActive
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
