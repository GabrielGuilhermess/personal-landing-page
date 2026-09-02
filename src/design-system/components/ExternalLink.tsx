import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/design-system/lib/utils";

export interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  showIndicator?: boolean;
  newTab?: boolean;
}

export default function ExternalLink({
  showIndicator = true,
  newTab = true,
  className,
  children,
  target,
  rel,
  ...props
}: ExternalLinkProps) {
  const resolvedTarget = target ?? (newTab ? "_blank" : undefined);
  const resolvedRel = rel ?? (resolvedTarget === "_blank" ? "noopener noreferrer" : undefined);

  return (
    <a
      target={resolvedTarget}
      rel={resolvedRel}
      className={cn(
        "inline-flex items-baseline gap-1 text-[var(--text)] underline decoration-[var(--divider)] underline-offset-4 transition-colors duration-[var(--motion-fast)] hover:decoration-current focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {showIndicator ? <span aria-hidden="true">↗</span> : null}
    </a>
  );
}
