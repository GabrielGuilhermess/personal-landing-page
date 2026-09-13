import type { HTMLAttributes } from "react";
import { cn } from "@/design-system/lib/utils";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  semantic?: boolean;
}

export default function Divider({ orientation = "horizontal", semantic = false, className, ...props }: DividerProps) {
  return (
    <div
      role={semantic ? "separator" : "presentation"}
      aria-orientation={semantic ? orientation : undefined}
      className={cn(
        "shrink-0 bg-[var(--divider)]",
        orientation === "horizontal" ? "h-px w-full" : "w-px self-stretch",
        className,
      )}
      {...props}
    />
  );
}
