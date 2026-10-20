import React from "react";

interface PillProps {
  children: React.ReactNode;
  variant?: "default" | "active" | "dark";
  className?: string;
}

export function Pill({
  children,
  variant = "default",
  className = "",
}: PillProps) {
  const variantClasses = {
    default: "bg-white text-vienna-text-dark border border-vienna-lavender hover:bg-vienna-lavender-light",
    active: "bg-vienna-rose text-white",
    dark: "bg-vienna-text-heading text-white",
  };

  return (
    <span
      className={`
        inline-flex items-center
        px-4 py-1.5
        rounded-pill
        text-xs font-outfit font-medium uppercase tracking-wider
        transition-colors duration-200
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
