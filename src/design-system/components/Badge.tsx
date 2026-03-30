import type { ReactNode } from "react";
import { cn } from "@/design-system/lib/utils";

export interface BadgeProps {
  variant: "default" | "brand" | "success" | "warning" | "danger";
  size?: "sm" | "md";
  children: ReactNode;
}

const badgeVariantClasses = {
  default: "border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)]",
  brand: "bg-brand-500/10 text-brand-600 dark:text-brand-400",
  success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  danger: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
} as const;

const badgeSizeClasses = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-1.5 text-sm",
} as const;

export default function Badge({ children, variant, size = "md" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        badgeVariantClasses[variant],
        badgeSizeClasses[size],
      )}
    >
      {children}
    </span>
  );
}
