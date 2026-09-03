"use client";

import { useEffect, useState } from "react";
import { cn } from "@/design-system/lib/utils";
import { useTheme, type Theme } from "@/design-system/providers/ThemeProvider";

export interface ThemeControlProps {
  className?: string;
}

function ThemeGlyph({ theme }: { theme: Theme }) {
  if (theme === "dark") {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4" fill="none">
        <path d="M14.8 12.9A6 6 0 0 1 7.1 5.2a6 6 0 1 0 7.7 7.7Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4" fill="none">
      <circle cx="10" cy="10" r="3.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 2.5v2M10 15.5v2M2.5 10h2M15.5 10h2M4.7 4.7l1.4 1.4M13.9 13.9l1.4 1.4M15.3 4.7l-1.4 1.4M6.1 13.9l-1.4 1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function ThemeControl({ className }: ThemeControlProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const targetTheme: Theme = mounted && theme === "dark" ? "light" : "dark";
  const label = mounted ? `Ativar tema ${targetTheme === "dark" ? "escuro" : "claro"}` : "Alternar tema";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-[var(--radius-control)] border border-[var(--divider)] bg-transparent text-[var(--muted)] transition-colors duration-[var(--motion-fast)] hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
        className,
      )}
    >
      <ThemeGlyph theme={targetTheme} />
    </button>
  );
}
