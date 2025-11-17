import * as React from "react"
import "./homepage.css"
import "./components.css"


function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ")
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CustomCard({ className, ...props }: CardProps) {
  return <div className={cn("card", className)} {...props} />
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CustomCardContent({ className, ...props }: CardContentProps) {
  return <div className={cn("card-content", className)} {...props} />
}
