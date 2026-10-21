"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

interface AuthorBoxProps {
  name?: string;
  role?: string;
  avatar?: string;
  bio?: string;
}

export function AuthorBox({
  name = "Vienna Creative Team",
  avatar = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  bio,
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
      </div>
    </div>
  );
}
