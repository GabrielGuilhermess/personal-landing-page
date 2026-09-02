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
}

export default function DisclosureItem({
  index,
  title,
  summary,
  children,
  defaultOpen = false,
  className,
}: DisclosureItemProps) {
  return (
    <Disclosure
      defaultOpen={defaultOpen}
      className={cn("border-b border-[var(--divider)]", className)}
      summaryClassName="py-4"
      contentClassName="pb-4 pl-0 text-sm leading-[1.65] text-[var(--muted)]"
      summary={
        <div className="flex min-w-0 flex-wrap items-baseline gap-x-4 gap-y-1">
          {index ? <span className="font-mono text-[13px] text-[var(--muted)]">{index}</span> : null}
          <span className="font-medium text-[var(--text)]">{title}</span>
          <span className="min-w-0 text-sm text-[var(--muted)]">{summary}</span>
        </div>
      }
    >
      {children}
    </Disclosure>
  );
}
