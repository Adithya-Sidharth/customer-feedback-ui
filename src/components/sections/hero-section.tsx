import { CustomButton } from "@/components/ui/custom-button"
import { Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="hero-section relative overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-20 lg:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="hero-badge relative rounded-full bg-gradient-to-r from-red-500 to-yellow-500 p-1">
              <div className="hero-badge-inner flex items-center space-x-2 rounded-full bg-white px-4 py-2">
                <Sparkles className="h-5 w-5 text-orange-500" />
                <span className="text-sm font-medium text-gray-900">AI-Powered Analytics</span>
              </div>
            </div>
          </div>

          <h1 className="hero-title text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl text-balance">
            Transform Customer Feedback into{" "}
            <span className="hero-gradient-text bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Actionable Insights
            </span>
          </h1>

          <p className="hero-description mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto text-pretty">
            AnalyzePoint uses advanced AI to analyze customer feedback in real-time, delivering sentiment analysis and
            actionable insights that drive business growth.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <CustomButton
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg bg-transparent"
            >
              Watch Video
            </CustomButton>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="hero-background-decoration absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-red-400 to-yellow-400 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </section>
  )
}
