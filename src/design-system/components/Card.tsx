import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/design-system/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  children: ReactNode;
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
} as const;

export default function Card({
  className,
  children,
  hoverable = true,
  padding = "md",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-3xl border bg-[var(--card-bg)] backdrop-blur-sm",
        paddingClasses[padding],
        hoverable ? "hover:-translate-y-1" : "hover:translate-y-0 hover:border-[var(--border-color)] hover:shadow-card",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
