import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/design-system/lib/utils";

export interface ContainerProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  as?: ElementType;
  children?: ReactNode;
}

export default function Container({ as: Component = "div", className, children, ...props }: ContainerProps) {
  return (
    <Component className={cn("section-container", className)} {...props}>
      {children}
    </Component>
  );
}
