import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/design-system/lib/utils";

export type TextVariant =
  | "display"
  | "heading-lg"
  | "heading-md"
  | "heading-sm"
  | "body-lg"
  | "body"
  | "body-sm"
  | "metadata"
  | "mono";

export type TextTone = "default" | "muted" | "brand";
export type TextWeight = "regular" | "medium" | "semibold";

export interface TextProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  as?: ElementType;
  variant?: TextVariant;
  tone?: TextTone;
  weight?: TextWeight;
  children?: ReactNode;
}

const variants: Record<TextVariant, string> = {
  display: "text-[40px] leading-[1.05] tracking-[-0.03em] md:text-[56px]",
  "heading-lg": "text-[32px] leading-[1.15] tracking-[-0.02em]",
  "heading-md": "text-[24px] leading-[1.15] tracking-[-0.015em]",
  "heading-sm": "text-[18px] leading-[1.15]",
  "body-lg": "text-[18px] leading-[1.5]",
  body: "text-[16px] leading-[1.5]",
  "body-sm": "text-[14px] leading-[1.5]",
  metadata: "text-[13px] leading-[1.5]",
  mono: "font-mono text-[13px] leading-[1.5]",
};

const tones: Record<TextTone, string> = {
  default: "text-[var(--text)]",
  muted: "text-[var(--muted)]",
  brand: "text-[var(--brand-primary)]",
};

const weights: Record<TextWeight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
};

export default function Text({
  as: Component = "p",
  variant = "body",
  tone = "default",
  weight = "regular",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component className={cn(variants[variant], tones[tone], weights[weight], className)} {...props}>
      {children}
    </Component>
  );
}
