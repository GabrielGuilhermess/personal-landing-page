import type { ReactNode } from "react";
import { cn } from "@/design-system/lib/utils";
import Disclosure from "./Disclosure";

export interface DisclosureItemProps {
  index?: string;
  title: string;
  summary: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
  summaryClassName?: string;
  summaryContentClassName?: string;
  summaryValueClassName?: string;
  contentClassName?: string;
}

export default function DisclosureItem({
  index,
  title,
  summary,
  children,
  defaultOpen = false,
  className,
  summaryClassName,
  summaryContentClassName,
  summaryValueClassName,
  contentClassName,
}: DisclosureItemProps) {
  return (
    <Disclosure
      defaultOpen={defaultOpen}
      className={cn("border-b border-[var(--divider)]", className)}
      summaryClassName={cn("py-4", summaryClassName)}
      contentClassName={cn("pb-4 pl-0 text-sm leading-[1.65] text-[var(--muted)]", contentClassName)}
      summary={
        <div
          className={cn(
            "flex min-w-0 flex-wrap items-baseline gap-x-4 gap-y-1",
            summaryContentClassName,
          )}
        >
          {index ? <span className="font-mono text-[13px] text-[var(--muted)]">{index}</span> : null}
          <span className="font-medium text-[var(--text)]">{title}</span>
          <span className={cn("min-w-0 text-sm text-[var(--muted)]", summaryValueClassName)}>{summary}</span>
        </div>
      }
    >
      {children}
    </Disclosure>
  );
}
