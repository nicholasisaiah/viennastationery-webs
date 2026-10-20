"use client";

import React, { useState } from "react";

interface NewsletterFormProps {
  variant?: "inline" | "card";
  className?: string;
}

export function NewsletterForm({
  variant = "inline",
  className = "",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    // Simulated submission
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3000);
  };

  if (variant === "card") {
    return (
      <div
        className={`
          bg-vienna-offwhite/80 backdrop-blur-sm
          rounded-xl md:rounded-2xl
          p-8 md:p-12
          text-center
          shadow-soft
          ${className}
        `}
      >
        <h3 className="font-fredoka font-bold text-vienna-text-heading text-2xl md:text-3xl">
          Keep a little room for inspiration.{" "}
          <span className="text-vienna-rose-light" aria-hidden="true">♡</span>
        </h3>
        <p className="text-vienna-text-muted font-nunito mt-3 text-sm md:text-base max-w-md mx-auto">
          Join our &ldquo;Lovely Letters&rdquo; community for weekly creative prompts,
          stationery launches, and quiet inspiration delivered to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 max-w-md mx-auto"
          aria-label="Newsletter signup"
        >
          <label htmlFor="newsletter-email-card" className="sr-only">
            Your email address
          </label>
          <input
            id="newsletter-email-card"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            placeholder="Your email address..."
            className="
              w-full sm:flex-1
              px-5 py-3
              rounded-pill
              border border-vienna-lavender
              bg-white
              text-vienna-text-dark text-sm
              font-nunito
              placeholder:text-vienna-text-light
              focus:outline-none focus:ring-2 focus:ring-vienna-rose focus:border-transparent
              transition-shadow duration-200
            "
            required
            aria-describedby={status !== "idle" ? "newsletter-status-card" : undefined}
          />
          <button
            type="submit"
            className="
              px-7 py-3
              bg-vienna-rose text-white
              font-outfit font-semibold text-sm
              rounded-pill
              hover:bg-vienna-rose-dark
              transition-colors duration-200
              focus-visible:ring-2 focus-visible:ring-vienna-rose focus-visible:ring-offset-2
              cursor-pointer
            "
          >
            Join the Journal
          </button>
        </form>

        {status !== "idle" && (
          <p
            id="newsletter-status-card"
            className={`text-sm mt-3 font-nunito ${
              status === "success" ? "text-green-600" : "text-red-500"
            }`}
            role="status"
            aria-live="polite"
          >
            {status === "success"
              ? "Welcome to the Lovely Letters! ♡"
              : "Please enter a valid email address."}
          </p>
        )}
      </div>
    );
  }

  // Inline variant (footer)
  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center gap-2 ${className}`}
      aria-label="Newsletter signup"
    >
      <label htmlFor="newsletter-email-inline" className="sr-only">
        Your email address
      </label>
      <input
        id="newsletter-email-inline"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status !== "idle") setStatus("idle");
        }}
        placeholder="Your email"
        className="
          flex-1 min-w-0
          px-4 py-2.5
          rounded-pill
          border border-vienna-lavender
          bg-white
          text-vienna-text-dark text-sm
          font-nunito
          placeholder:text-vienna-text-light
          focus:outline-none focus:ring-2 focus:ring-vienna-rose focus:border-transparent
          transition-shadow duration-200
        "
        required
        aria-describedby={status !== "idle" ? "newsletter-status-inline" : undefined}
      />
      <button
        type="submit"
        className="
          w-10 h-10 flex-shrink-0
          flex items-center justify-center
          bg-vienna-rose text-white
          rounded-full
          hover:bg-vienna-rose-dark
          transition-colors duration-200
          focus-visible:ring-2 focus-visible:ring-vienna-rose focus-visible:ring-offset-2
          cursor-pointer
        "
        aria-label="Subscribe to newsletter"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>

      {status !== "idle" && (
        <p
          id="newsletter-status-inline"
          className={`text-xs ml-2 font-nunito ${
            status === "success" ? "text-green-600" : "text-red-500"
          }`}
          role="status"
          aria-live="polite"
        >
          {status === "success" ? "♡" : "!"}
        </p>
      )}
    </form>
  );
}
