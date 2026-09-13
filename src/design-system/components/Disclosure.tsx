"use client";

import { useState, type DetailsHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/design-system/lib/utils";

export interface DisclosureProps extends Omit<DetailsHTMLAttributes<HTMLDetailsElement>, "open" | "onToggle"> {
  summary: ReactNode;
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  summaryClassName?: string;
  contentClassName?: string;
}

export default function Disclosure({
  summary,
  children,
  open,
  defaultOpen = false,
  onOpenChange,
  className,
  summaryClassName,
  contentClassName,
  ...props
}: DisclosureProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const resolvedOpen = open ?? internalOpen;

  return (
    <details
      open={resolvedOpen}
      className={cn("group", className)}
      onToggle={(event) => {
        const nextOpen = event.currentTarget.open;
        if (open === undefined) {
          setInternalOpen(nextOpen);
        }
        onOpenChange?.(nextOpen);
      }}
      {...props}
    >
      <summary
        className={cn(
          "cursor-pointer list-none rounded-[var(--radius-detail)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] [&::-webkit-details-marker]:hidden",
          summaryClassName,
        )}
      >
        {summary}
      </summary>
      <div className={contentClassName}>{children}</div>
    </details>
  );
}
