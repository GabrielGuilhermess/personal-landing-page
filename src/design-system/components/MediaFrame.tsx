import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/design-system/lib/utils";

export type MediaFrameRadius = "none" | "detail" | "control" | "surface";

export interface MediaFrameProps extends HTMLAttributes<HTMLDivElement> {
  aspectRatio?: CSSProperties["aspectRatio"];
  radius?: MediaFrameRadius;
  children: ReactNode;
}

const radii: Record<MediaFrameRadius, string> = {
  none: "rounded-none",
  detail: "rounded-[var(--radius-detail)]",
  control: "rounded-[var(--radius-control)]",
  surface: "rounded-[var(--radius-surface)]",
};

export default function MediaFrame({
  aspectRatio = "16 / 9",
  radius = "surface",
  className,
  style,
  children,
  ...props
}: MediaFrameProps) {
  return (
    <div
      className={cn("relative overflow-hidden border border-[var(--divider)] bg-[var(--surface)]", radii[radius], className)}
      style={{ aspectRatio, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
