import { cn } from "@/design-system/lib/utils";

export interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" ? "mx-auto text-center" : "text-left")}>
      {label ? (
        <p className="font-mono text-sm uppercase tracking-[0.25em] text-brand-500 animate-fade-in">{label}</p>
      ) : null}
      <h2 className="font-display text-display-sm font-bold md:text-display-md animate-slide-up">{title}</h2>
      {subtitle ? (
        <p
          className={cn(
            "text-base leading-7 text-[var(--text-secondary)] md:text-lg",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
