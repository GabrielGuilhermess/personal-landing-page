import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/design-system/lib/utils";
import {
  buttonBaseClasses,
  buttonSizeClasses,
  buttonVariantClasses,
  type ButtonSize,
  type ButtonVariant,
} from "./Button";

export interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: ButtonVariant;
  size: ButtonSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
}

function LinkButtonContent({
  children,
  icon,
  iconPosition,
}: {
  children: ReactNode;
  icon?: ReactNode;
  iconPosition: "left" | "right";
}) {
  return (
    <>
      {icon && iconPosition === "left" ? <span className="flex shrink-0 items-center">{icon}</span> : null}
      {children ? <span>{children}</span> : null}
      {icon && iconPosition === "right" ? <span className="flex shrink-0 items-center">{icon}</span> : null}
    </>
  );
}

export default function LinkButton({
  className,
  children,
  variant,
  size,
  icon,
  iconPosition = "left",
  disabled = false,
  rel,
  target,
  ...props
}: LinkButtonProps) {
  const sharedClassName = cn(
    buttonBaseClasses,
    buttonVariantClasses[variant],
    buttonSizeClasses[size],
    disabled && "cursor-not-allowed opacity-50",
    className,
  );

  if (disabled) {
    return (
      <span aria-disabled="true" className={sharedClassName}>
        <LinkButtonContent icon={icon} iconPosition={iconPosition}>
          {children}
        </LinkButtonContent>
      </span>
    );
  }

  const resolvedRel = target === "_blank" ? rel ?? "noreferrer" : rel;

  return (
    <a className={sharedClassName} rel={resolvedRel} target={target} {...props}>
      <LinkButtonContent icon={icon} iconPosition={iconPosition}>
        {children}
      </LinkButtonContent>
    </a>
  );
}
