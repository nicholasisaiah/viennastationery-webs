"use client";

import React, { useEffect, useState } from "react";

export function ReadingProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      if (documentHeight > 0) {
        const currentProgress = (window.scrollY / documentHeight) * 100;
        setScrollPercentage(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-vienna-rose/20"
      aria-hidden="true"
    >
      <div
        className="h-full bg-vienna-rose transition-all duration-150 ease-out"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}
