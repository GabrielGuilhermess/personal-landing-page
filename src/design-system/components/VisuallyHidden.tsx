import type { HTMLAttributes } from "react";
import { cn } from "@/design-system/lib/utils";

export type VisuallyHiddenProps = HTMLAttributes<HTMLSpanElement>;

export default function VisuallyHidden({ className, ...props }: VisuallyHiddenProps) {
  return (
    <span
      className={cn(
        "absolute h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)] [clip-path:inset(50%)]",
        className,
      )}
      {...props}
    />
  );
}
