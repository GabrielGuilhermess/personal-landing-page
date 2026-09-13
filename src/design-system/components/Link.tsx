import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/design-system/lib/utils";

export type LinkVariant = "default" | "muted" | "brand";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
}

const variants: Record<LinkVariant, string> = {
  default: "text-[var(--text)]",
  muted: "text-[var(--muted)]",
  brand: "text-[var(--brand-primary)]",
};

export default function Link({ variant = "default", className, ...props }: LinkProps) {
  return (
    <a
      className={cn(
        "underline decoration-[var(--divider)] underline-offset-4 transition-colors duration-[var(--motion-fast)] hover:decoration-current focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
