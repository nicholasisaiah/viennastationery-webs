"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/contexts/LanguageContext";

interface Comment {
  id: string;
  author: string;
  content: string;
  created_at: string;
  likes: number;
}

interface Props {
  slug: string;
}

const LIKE_PREFIX = "vienna_liked_comment_";

export function CommentsSection({ slug }: Props) {
  const { t } = useLanguage();
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [newAuthor, setNewAuthor] = useState("");
  const [newContent, setNewContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());

  // Load liked comment IDs from localStorage
  useEffect(() => {
    const liked = new Set<string>();
    for (const key of Object.keys(localStorage)) {
      if (key.startsWith(LIKE_PREFIX)) {
        liked.add(key.replace(LIKE_PREFIX, ""));
      }
    }
    setLikedIds(liked);
  }, []);

  // Initial fetch
  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("id, author, content, created_at, likes")
        .eq("article_slug", slug)
        .order("created_at", { ascending: false });

      if (!error && data) setComments(data);
      setLoading(false);
    };

    fetchComments();

    // Real-time listener — subscribe to INSERT events on this article's comments
    const channel = supabase
      .channel(`comments:${slug}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "comments",
          filter: `article_slug=eq.${slug}`,
        },
        (payload) => {
          setComments((prev) => [payload.new as Comment, ...prev]);
        }
      )
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "comments",
          filter: `article_slug=eq.${slug}`,
        },
        (payload) => {
          setComments((prev) =>
            prev.map((c) =>
              c.id === (payload.new as Comment).id
                ? { ...c, likes: (payload.new as Comment).likes }
                : c
            )
          );
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContent.trim() || submitting) return;
    setSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    const { error } = await supabase.from("comments").insert({
      article_slug: slug,
      author: newAuthor.trim() || (lang === "id" ? "Pembaca Anonim" : "Anonymous Reader"),
      content: newContent.trim(),
    });

    if (!error) {
      setNewAuthor("");
      setNewContent("");
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    } else {
      setSubmitError(
        lang === "id"
          ? "Gagal mengirim komentar. Coba lagi."
          : "Failed to send comment. Please try again."
      );
    }
    setSubmitting(false);
  };

  const handleLikeComment = async (commentId: string, currentLikes: number) => {
    const key = `${LIKE_PREFIX}${commentId}`;
    const alreadyLiked = likedIds.has(commentId);
    const newLikes = alreadyLiked
      ? Math.max(0, currentLikes - 1)
      : currentLikes + 1;

    // Optimistic UI
    setComments((prev) =>
      prev.map((c) => (c.id === commentId ? { ...c, likes: newLikes } : c))
    );
    setLikedIds((prev) => {
      const next = new Set(prev);
      alreadyLiked ? next.delete(commentId) : next.add(commentId);
      return next;
    });

    if (alreadyLiked) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, "1");
    }

    await supabase.rpc("increment_comment_likes", {
      p_id: commentId,
      p_amount: alreadyLiked ? -1 : 1,
    });
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const diff = (Date.now() - date.getTime()) / 1000;
    if (diff < 60) return lang === "id" ? "Baru saja" : "Just now";
    if (diff < 3600) {
      const mins = Math.floor(diff / 60);
      return lang === "id" ? `${mins} menit yang lalu` : `${mins} min ago`;
    }
    if (diff < 86400) {
      const hours = Math.floor(diff / 3600);
      return lang === "id" ? `${hours} jam yang lalu` : `${hours}h ago`;
    }
    return date.toLocaleDateString(lang === "id" ? "id-ID" : "en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section id="thoughts-and-whispers" className="py-12 my-10 border-t border-vienna-lavender/50">
      <h3 className="font-fredoka font-bold text-vienna-text-heading text-2xl sm:text-3xl mb-8">
        {t("article.commentsHeadline")}{" "}
        <span className="text-vienna-rose text-xl sm:text-2xl font-normal ml-1 font-outfit">
          ({comments.length})
        </span>
      </h3>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-12 space-y-3">
        <input
          type="text"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          placeholder={lang === "id" ? "Namamu (opsional)" : "Your name (optional)"}
          maxLength={60}
          className="w-full px-4 py-3 rounded-xl border border-vienna-lavender bg-white text-vienna-text-dark text-sm font-nunito placeholder:text-vienna-text-light focus:outline-none focus:ring-2 focus:ring-vienna-rose shadow-soft"
        />
        <textarea
          id="comment-textarea"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          placeholder={t("article.commentPlaceholder")}
          rows={3}
          maxLength={1000}
          required
          className="w-full p-4 rounded-2xl border border-vienna-lavender bg-white text-vienna-text-dark text-sm font-nunito placeholder:text-vienna-text-light focus:outline-none focus:ring-2 focus:ring-vienna-rose shadow-soft resize-none"
        />
        <div className="flex items-center justify-between">
          <span className="font-nunito text-[11px] text-vienna-text-muted">
            {newContent.length}/1000
          </span>
          <button
            type="submit"
            disabled={submitting || !newContent.trim()}
            className="px-7 py-2.5 bg-vienna-rose text-white font-outfit font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-pill hover:bg-vienna-rose-dark disabled:opacity-50 transition-colors duration-200 shadow-soft cursor-pointer"
          >
            {submitting ? t("common.loading") : t("article.commentCta")}
          </button>
        </div>
        {/* Error / success feedback */}
        {submitError && (
          <p className="text-red-500 text-xs font-nunito mt-1">{submitError}</p>
        )}
        {submitSuccess && (
          <p className="text-emerald-600 text-xs font-nunito mt-1">
            {lang === "id" ? "✓ Komentarmu berhasil dikirim!" : "✓ Comment sent successfully!"}
          </p>
        )}
      </form>

      {/* Comments List */}
      {loading ? (
        <div className="space-y-6">
          {[1, 2].map((i) => (
            <div key={i} className="animate-pulse flex gap-4">
              <div className="w-10 h-10 rounded-full bg-vienna-lavender/50 flex-shrink-0" />
              <div className="flex-1 space-y-2 pt-1">
                <div className="h-3 bg-vienna-lavender/40 rounded w-1/4" />
                <div className="h-3 bg-vienna-lavender/30 rounded w-3/4" />
                <div className="h-3 bg-vienna-lavender/20 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      ) : comments.length === 0 ? (
        <div className="text-center py-10 space-y-2">
          <p className="text-3xl">🌸</p>
          <p className="font-nunito text-vienna-text-muted text-sm">
            {t("article.noComments")}
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {comments.map((comment) => {
            const isLiked = likedIds.has(comment.id);
            return (
              <div key={comment.id} className="flex gap-4 items-start">
                {/* Initials avatar */}
                <div className="w-10 h-10 rounded-full bg-vienna-pink-circle border border-vienna-lavender flex items-center justify-center flex-shrink-0">
                  <span className="font-outfit font-bold text-vienna-rose text-sm">
                    {comment.author.charAt(0).toUpperCase()}
                  </span>
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-nunito font-bold text-vienna-text-heading text-sm sm:text-base">
                      {comment.author}
                    </h4>
                    <span className="font-nunito italic text-vienna-text-muted text-xs flex-shrink-0">
                      {formatDate(comment.created_at)}
                    </span>
                  </div>

                  <p className="font-nunito text-vienna-text-dark text-sm leading-relaxed pt-1">
                    {comment.content}
                  </p>

                  <div className="flex items-center gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => handleLikeComment(comment.id, comment.likes)}
                      className={`inline-flex items-center gap-1.5 text-xs font-outfit font-medium cursor-pointer transition-colors ${
                        isLiked
                          ? "text-vienna-rose font-bold"
                          : "text-vienna-text-muted hover:text-vienna-rose"
                      }`}
                      aria-pressed={isLiked}
                      aria-label={`Like comment by ${comment.author}`}
                    >
                      <span aria-hidden="true">{isLiked ? "♥" : "♡"}</span>
                      <span>{comment.likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
