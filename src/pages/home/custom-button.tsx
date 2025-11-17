import * as React from "react"
import "./homepage.css"
import "./components.css"

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ")
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "secondary" | "ghost" | "link"
  size?: "sm" | "default" | "lg" | "icon"
  asChild?: boolean
}

export function CustomButton({
  className,
  variant = "primary",
  size = "default",
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const baseClasses = "btn"
  const variantClasses = {
    primary: "btn-primary",
    outline: "btn-outline",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
    link: "btn-link",
  }
  const sizeClasses = {
    sm: "btn-sm",
    default: "btn-default",
    lg: "btn-lg",
    icon: "btn-icon",
  }

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>
    return React.cloneElement(child, {
      className: cn(baseClasses, variantClasses[variant], sizeClasses[size], className, child.props.className),
      ...props,
    })
  }

  return (
    <button className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)} {...props}>
      {children}
    </button>
  )
}
