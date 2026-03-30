import { forwardRef, useId, type TextareaHTMLAttributes } from "react";
import { cn } from "@/design-system/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, label, error, hint, id, ...props },
  ref,
) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;
  const hintId = hint ? `${textareaId}-hint` : undefined;
  const errorId = error ? `${textareaId}-error` : undefined;

  return (
    <div>
      {label ? (
        <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]" htmlFor={textareaId}>
          {label}
        </label>
      ) : null}
      <textarea
        ref={ref}
        id={textareaId}
        aria-describedby={errorId ?? hintId}
        aria-invalid={Boolean(error)}
        className={cn(
          "min-h-[120px] w-full resize-y rounded-xl border bg-[var(--bg-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] transition-colors placeholder:text-[var(--text-tertiary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400",
          error
            ? "border-rose-500/80 focus-visible:ring-rose-400"
            : "border-[var(--border-color)] focus-visible:border-brand-500",
          className,
        )}
        {...props}
      />
      {error ? <p className="mt-2 text-sm text-rose-500" id={errorId}>{error}</p> : null}
      {!error && hint ? <p className="mt-2 text-sm text-[var(--text-tertiary)]" id={hintId}>{hint}</p> : null}
    </div>
  );
});

export default Textarea;
