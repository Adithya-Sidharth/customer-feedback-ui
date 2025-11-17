import type { LucideIcon } from "lucide-react"
import { CustomCard, CustomCardContent } from "@/components/ui/custom-card"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  gradient: string
}

export function FeatureCard({ icon: Icon, title, description, gradient }: FeatureCardProps) {
  const gradientClasses = {
    "from-red-500 to-orange-500": "gradient-red-orange",
    "from-orange-500 to-yellow-500": "gradient-orange-yellow",
    "from-yellow-500 to-red-500": "gradient-yellow-red",
  }

  const gradientClass = gradientClasses[gradient as keyof typeof gradientClasses] || "gradient-red-orange"

  return (
    <CustomCard className="feature-card">
      <CustomCardContent>
        <div className={`feature-icon ${gradientClass}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>

        <h3 className="feature-title">{title}</h3>

        <p className="feature-description">{description}</p>
      </CustomCardContent>

      {/* Subtle gradient border effect */}
      <div className={`feature-overlay ${gradientClass}`} />
    </CustomCard>
  )
}
