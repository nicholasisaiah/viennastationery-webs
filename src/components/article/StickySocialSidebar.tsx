"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  slug: string;
}

const LIKE_PREFIX = "vienna_liked_article_";

export function StickySocialSidebar({ slug }: Props) {
  const { t, lang } = useLanguage();
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [commentCount, setCommentCount] = useState(0);
  const [copied, setCopied] = useState(false);

  // Restore like state from localStorage
  useEffect(() => {
    setHasLiked(!!localStorage.getItem(`${LIKE_PREFIX}${slug}`));
  }, [slug]);

  // Fetch article stats + real-time subscription
  useEffect(() => {
    if (!slug) return;

    const fetchStats = async () => {
      const { data } = await supabase
        .from("article_stats")
        .select("likes, comment_count")
        .eq("slug", slug)
        .single();

      if (data) {
        setLikes(data.likes ?? 0);
        setCommentCount(data.comment_count ?? 0);
      }
    };

    fetchStats();

    const channel = supabase
      .channel(`article_stats:${slug}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "article_stats",
          filter: `slug=eq.${slug}`,
        },
        (payload) => {
          const row = payload.new as { likes: number; comment_count: number };
          setLikes(row.likes ?? 0);
          setCommentCount(row.comment_count ?? 0);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [slug]);

  const handleLike = async () => {
    const key = `${LIKE_PREFIX}${slug}`;
    const amount = hasLiked ? -1 : 1;

    // Optimistic update
    setHasLiked(!hasLiked);
    setLikes((prev) => Math.max(0, prev + amount));

    if (hasLiked) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, "1");
    }

    await supabase.rpc("increment_article_likes", {
      p_slug: slug,
      p_amount: amount,
    });
  };

  const scrollToComments = () => {
    const el = document.getElementById("thoughts-and-whispers");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        document.getElementById("comment-textarea")?.focus();
      }, 500);
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Desktop Left Sticky Sidebar */}
      <aside
        className="hidden lg:flex flex-col items-center gap-6 sticky top-28 z-20 self-start w-14 py-2 select-none"
        aria-label="Article actions"
      >
        {/* Like */}
        <div className="flex flex-col items-center gap-1.5">
          <button
            onClick={handleLike}
            className={`w-11 h-11 rounded-full flex items-center justify-center shadow-soft transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-vienna-rose ${
              hasLiked ? "bg-vienna-pink-circle" : "bg-white"
            }`}
            aria-label={`Like article. Likes: ${likes}`}
            aria-pressed={hasLiked}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18" height="18" viewBox="0 0 24 24"
              fill={hasLiked ? "#C67D7D" : "none"}
              stroke="#C67D7D" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <span className="font-outfit text-[11px] font-bold text-vienna-rose tracking-wide">
            {likes}
          </span>
        </div>

        {/* Comment */}
        <div className="flex flex-col items-center gap-1.5">
          <button
            onClick={scrollToComments}
            className="w-11 h-11 rounded-full flex items-center justify-center bg-white shadow-soft transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 text-vienna-text-muted hover:text-vienna-rose"
            aria-label="Jump to comments"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>
          <span className="font-outfit text-[11px] font-medium text-vienna-text-muted tracking-wide">
            {commentCount}
          </span>
        </div>

        <div className="h-4" aria-hidden="true" />

        {/* Copy link */}
        <button
          onClick={copyLink}
          className="flex flex-col items-center gap-1 text-vienna-text-muted hover:text-vienna-rose transition-colors p-1 cursor-pointer"
          aria-label="Copy link to clipboard"
          title={copied ? (lang === "id" ? "Disalin!" : "Copied!") : (lang === "id" ? "Salin link" : "Copy link")}
        >
          {copied ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C67D7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          )}
          {copied && (
            <span className="font-outfit text-[9px] font-bold text-vienna-rose">
              {lang === "id" ? "Disalin!" : "Copied!"}
            </span>
          )}
        </button>
      </aside>

      {/* Mobile Floating Bottom Bar */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-white/95 backdrop-blur-md px-6 py-2.5 rounded-pill shadow-lift border border-vienna-lavender flex items-center gap-6">
        <button
          onClick={handleLike}
          className="flex items-center gap-1.5 text-xs font-outfit font-bold text-vienna-rose cursor-pointer"
          aria-pressed={hasLiked}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
            fill={hasLiked ? "#C67D7D" : "none"} stroke="#C67D7D" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <span>{likes}</span>
        </button>

        <button
          onClick={scrollToComments}
          className="flex items-center gap-1.5 text-xs font-outfit font-bold text-vienna-text-muted hover:text-vienna-rose cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span>{commentCount}</span>
        </button>

        <button
          onClick={copyLink}
          className="text-xs font-outfit font-bold text-vienna-text-muted hover:text-vienna-rose cursor-pointer transition-colors"
        >
          {copied
            ? (lang === "id" ? "✓ Disalin!" : "✓ Copied!")
            : t("article.shareLabel").toUpperCase()
          }
        </button>
      </div>
    </>
  );
}
