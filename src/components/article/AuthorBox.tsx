"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface AuthorBoxProps {
  name?: string;
  role?: string;
  avatar?: string;
  bio?: string;
  instagramUrl?: string;
}

export function AuthorBox({
  name = "Vienna Creative Team",
  avatar = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  bio,
  instagramUrl = "https://instagram.com/viennastationery",
}: AuthorBoxProps) {
  const { t } = useLanguage();
  const displayBio = bio ?? t("article.authorBio");
  return (
    <div className="bg-vienna-lavender-light/60 border border-vienna-lavender rounded-2xl md:rounded-3xl p-6 sm:p-8 my-10 shadow-soft flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
      {/* Avatar */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-soft flex-shrink-0">
        <Image
          src={avatar}
          alt={name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>

      {/* Info */}
      <div className="space-y-2 flex-1">
        <h3 className="font-fredoka font-bold text-vienna-text-heading text-xl sm:text-2xl">
          {name}
        </h3>
        <p className="font-nunito text-vienna-text-muted text-xs sm:text-sm leading-relaxed">
          {displayBio}
        </p>

        <div className="pt-2">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              font-outfit text-xs font-bold text-vienna-rose uppercase tracking-[0.2em]
              hover:text-vienna-rose-dark transition-colors
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>{t("article.followCta")}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
