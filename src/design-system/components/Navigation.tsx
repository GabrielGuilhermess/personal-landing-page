import type { HTMLAttributes } from "react";
import { cn } from "@/design-system/lib/utils";

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface NavigationProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  items: NavigationItem[];
  activeId?: string;
  orientation?: "horizontal" | "vertical";
  label?: string;
}

export default function Navigation({
  items,
  activeId,
  orientation = "horizontal",
  label = "Navegação principal",
  className,
  ...props
}: NavigationProps) {
  return (
    <nav aria-label={label} className={className} {...props}>
      <ul className={cn("flex gap-4", orientation === "vertical" ? "flex-col items-start" : "flex-row flex-wrap items-center")}>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              aria-current={activeId === item.id ? "location" : undefined}
              className={cn(
                "text-sm text-[var(--muted)] underline-offset-4 transition-colors duration-[var(--motion-fast)] hover:text-[var(--text)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
                activeId === item.id && "text-[var(--text)]",
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
