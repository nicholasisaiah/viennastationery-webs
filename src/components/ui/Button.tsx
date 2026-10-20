"use client";

import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-xs",
  md: "px-7 py-2.5 text-sm",
  lg: "px-9 py-3 text-base",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: `
    bg-vienna-rose text-white
    hover:bg-vienna-rose-dark
    focus-visible:ring-2 focus-visible:ring-vienna-rose focus-visible:ring-offset-2
    shadow-soft
  `,
  secondary: `
    bg-transparent text-vienna-rose
    border-2 border-vienna-rose
    hover:bg-vienna-rose hover:text-white
    focus-visible:ring-2 focus-visible:ring-vienna-rose focus-visible:ring-offset-2
  `,
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  ariaLabel,
}: ButtonProps) {
  const classes = `
    inline-flex items-center justify-center
    font-outfit font-semibold tracking-wide
    rounded-pill
    transition-all duration-250 ease-out
    cursor-pointer select-none
    disabled:opacity-50 disabled:cursor-not-allowed
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
