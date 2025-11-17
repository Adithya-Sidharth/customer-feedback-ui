import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "secondary" | "ghost" | "link";
  size?: "sm" | "default" | "lg" | "icon";
  asChild?: boolean;
}

/**
 * Type-safe CustomButton that supports:
 * - variant, size, asChild
 * - cloning a child element and merging className safely (avoids TS2769)
 */
export function CustomButton({
  className,
  variant = "primary",
  size = "default",
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const baseClasses = "btn";
  const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "btn-primary",
    outline: "btn-outline",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
    link: "btn-link",
  };
  const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "btn-sm",
    default: "btn-default",
    lg: "btn-lg",
    icon: "btn-icon",
  };

  // If we want to render the child element instead of a button wrapper
  if (asChild && React.isValidElement(children)) {
    // children is narrowed to ReactElement by isValidElement
    const childElement = children as React.ReactElement;

    // Safely read any existing className from the child's props (may not exist)
    const childExistingClass =
      (childElement.props && (childElement.props as any).className) ?? undefined;

    // Merge classes (local cn util)
    const mergedClassName = cn(
      baseClasses,
      variantClasses[variant as keyof typeof variantClasses],
      sizeClasses[size as keyof typeof sizeClasses],
      className,
      childExistingClass
    );

    // Clone the child while preserving its other props, and inject merged className + any button props
    return React.cloneElement(childElement, {
      ...childElement.props,
      ...props, // page-level props (like onClick) should override child's props if same key
      className: mergedClassName,
    });
  }

  // Default: render a button element
  return (
    <button className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)} {...props}>
      {children}
    </button>
  );
}

export default CustomButton;