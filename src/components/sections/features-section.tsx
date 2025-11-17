import { FeatureCard } from "@/components/ui/feature-card"
import { Zap, TrendingUp, Clock } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Fast AI Sentiment Analysis",
      description:
        "Process thousands of customer reviews and feedback in seconds with our advanced natural language processing algorithms.",
      gradient: "from-red-500 to-orange-500",
    },
    {
      icon: TrendingUp,
      title: "Actionable Insights",
      description:
        "Get clear, data-driven recommendations that help you improve customer satisfaction and business performance.",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      icon: Clock,
      title: "Real-Time Reporting",
      description:
        "Monitor customer sentiment as it happens with live dashboards and instant alerts for critical feedback.",
      gradient: "from-yellow-500 to-red-500",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
              Smarter Decisions
            </span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Everything you need to understand and act on customer feedback
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
