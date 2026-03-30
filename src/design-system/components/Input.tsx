import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/design-system/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: ReactNode;
}

const fieldBaseClasses =
  "h-11 w-full rounded-xl border bg-[var(--bg-secondary)] px-4 text-sm text-[var(--text-primary)] transition-colors placeholder:text-[var(--text-tertiary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400";

const feedbackClasses = "mt-2 text-sm";

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, label, error, hint, leftIcon, id, ...props },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div>
      {label ? (
        <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]" htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <div className="relative">
        {leftIcon ? (
          <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[var(--text-tertiary)]">
            {leftIcon}
          </span>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          aria-describedby={errorId ?? hintId}
          aria-invalid={Boolean(error)}
          className={cn(
            fieldBaseClasses,
            leftIcon && "pl-11",
            error
              ? "border-rose-500/80 focus-visible:ring-rose-400"
              : "border-[var(--border-color)] focus-visible:border-brand-500",
            className,
          )}
          {...props}
        />
      </div>
      {error ? <p className={cn(feedbackClasses, "text-rose-500")} id={errorId}>{error}</p> : null}
      {!error && hint ? <p className={cn(feedbackClasses, "text-[var(--text-tertiary)]")} id={hintId}>{hint}</p> : null}
    </div>
  );
});

export default Input;
