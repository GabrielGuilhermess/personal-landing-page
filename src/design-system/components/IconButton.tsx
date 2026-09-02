import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/design-system/lib/utils";

export type IconButtonSize = "sm" | "md";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: ReactNode;
  size?: IconButtonSize;
}

const sizes: Record<IconButtonSize, string> = {
  sm: "h-8 w-8",
  md: "h-9 w-9",
};

export default function IconButton({ label, icon, size = "md", className, type = "button", ...props }: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-[var(--radius-control)] border border-[var(--divider)] bg-transparent text-[var(--text)] transition-colors duration-[var(--motion-fast)] hover:bg-[var(--surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:cursor-not-allowed disabled:opacity-50",
        sizes[size],
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  );
}
