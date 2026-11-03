"use client";

import React, { useState } from "react";
import { PaperTextureBackground } from "@/components/ui/PaperTextureBackground";
import { useLanguage } from "@/contexts/LanguageContext";

export function LovelyLettersNewsletter() {
  const { t, lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage(
        lang === "id"
          ? "Masukkan alamat email yang valid."
          : "Please enter a valid email address."
      );
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "journal" }),
      });

      const data = await res.json();

      console.log("[newsletter] API response:", res.status, data);

      if (res.status === 201) {
        setStatus("success");
        setMessage(
          lang === "id"
            ? "Terima kasih sudah berlangganan! Cek inbox kamu ♡"
            : "Thank you for subscribing! Check your inbox ♡"
        );
        setEmail("");
      } else if (res.status === 409) {
        setStatus("error");
        setMessage(
          lang === "id"
            ? "Email ini sudah terdaftar dalam Lovely Letters! ♡"
            : "This email is already subscribed to Lovely Letters! ♡"
        );
      } else {
        setStatus("error");
        setMessage(
          lang === "id"
            ? `Gagal mendaftar: ${data.detail || data.error || "Coba lagi nanti."}`
            : `Failed to subscribe: ${data.detail || data.error || "Please try again later."}`
        );
        console.error("[newsletter] Error detail:", data);
      }
    } catch (err) {
      setStatus("error");
      setMessage(
        lang === "id"
          ? "Terjadi kesalahan jaringan. Silakan coba lagi."
          : "A network error occurred. Please try again."
      );
      console.error("Newsletter fetch error:", err);
    }
  };

  return (
    <section className="bg-vienna-cream py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <PaperTextureBackground
          variant="offwhite"
          className="
            rounded-3xl p-8 sm:p-12 md:p-16 text-center
            shadow-medium border border-vienna-lavender/40
          "
        >
          <div className="max-w-xl mx-auto space-y-4">
            
            <span className="text-vienna-rose text-[10px] font-outfit font-bold uppercase tracking-[0.25em]">
              {t("journal.newsletter.badge")}
            </span>

            <h2 className="font-fredoka font-bold text-vienna-text-heading text-3xl sm:text-4xl">
              {t("journal.newsletter.headline")}{" "}
              <span className="text-vienna-rose-light" aria-hidden="true">♡</span>
            </h2>

            <p className="font-nunito text-vienna-text-muted text-sm sm:text-base leading-relaxed">
              {t("journal.newsletter.sub")}
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 max-w-md mx-auto"
              aria-label={
                lang === "id"
                  ? "Berlangganan newsletter Lovely Letters"
                  : "Subscribe to Lovely Letters newsletter"
              }
            >
              <label htmlFor="journal-newsletter-email" className="sr-only">
                {t("journal.newsletter.placeholder")}
              </label>
              <input
                id="journal-newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                placeholder={t("journal.newsletter.placeholder")}
                className="
                  w-full sm:flex-1
                  px-6 py-3.5
                  rounded-pill
                  border border-vienna-lavender
                  bg-white
                  text-vienna-text-dark text-sm font-nunito
                  placeholder:text-vienna-text-light
                  focus:outline-none focus:ring-2 focus:ring-vienna-rose focus:border-transparent
                  shadow-xs transition-shadow duration-200
                "
                required
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="
                  w-full sm:w-auto
                  px-8 py-3.5
                  bg-vienna-rose text-white
                  font-outfit font-semibold text-sm tracking-wide
                  rounded-pill
                  hover:bg-vienna-rose-dark
                  transition-colors duration-200
                  focus-visible:ring-2 focus-visible:ring-vienna-rose focus-visible:ring-offset-2
                  cursor-pointer disabled:opacity-50
                "
              >
                {status === "loading" ? t("common.loading") : t("journal.newsletter.cta")}
              </button>
            </form>

            {status !== "idle" && (
              <p
                className={`text-sm pt-2 font-nunito ${
                  status === "success" ? "text-green-600 font-semibold" : "text-red-500"
                }`}
                role="status"
                aria-live="polite"
              >
                {message}
              </p>
            )}

            <p className="text-vienna-text-light text-xs font-nunito pt-2">
              {t("journal.newsletter.privacy")}
            </p>

          </div>
        </PaperTextureBackground>

      </div>
    </section>
  );
}
