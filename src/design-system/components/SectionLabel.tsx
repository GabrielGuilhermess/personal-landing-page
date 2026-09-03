import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/design-system/lib/utils";

export interface SectionLabelProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  as?: ElementType;
  children: ReactNode;
}

export default function SectionLabel({ as: Component = "p", className, children, ...props }: SectionLabelProps) {
  return (
    <Component
      className={cn("font-mono text-[13px] leading-[1.5] tracking-[0.04em] text-[var(--muted)]", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
