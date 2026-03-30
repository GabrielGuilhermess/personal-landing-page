import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/design-system/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export const buttonBaseClasses =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-transparent px-4 font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-60";

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand-500 text-white shadow-glow hover:bg-brand-600",
  secondary: "bg-[var(--bg-tertiary)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]",
  ghost: "bg-transparent text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]",
  outline:
    "border-[var(--border-color)] bg-transparent text-[var(--text-primary)] hover:border-brand-500 hover:text-brand-500",
};

export const buttonSizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 text-sm",
  md: "h-11 text-sm",
  lg: "h-12 text-base",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    children,
    variant,
    size,
    icon,
    iconPosition = "left",
    isLoading = false,
    fullWidth = false,
    disabled,
    type = "button",
    ...props
  },
  ref,
) {
  const shouldShowLeftIcon = !isLoading && icon && iconPosition === "left";
  const shouldShowRightIcon = !isLoading && icon && iconPosition === "right";

  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        buttonBaseClasses,
        buttonVariantClasses[variant],
        buttonSizeClasses[size],
        fullWidth && "w-full",
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <svg
          aria-hidden="true"
          className="h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.2" strokeWidth="4" />
          <path d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      ) : null}
      {shouldShowLeftIcon ? <span className="flex shrink-0 items-center">{icon}</span> : null}
      {children ? <span>{children}</span> : null}
      {shouldShowRightIcon ? <span className="flex shrink-0 items-center">{icon}</span> : null}
    </button>
  );
});

export default Button;
