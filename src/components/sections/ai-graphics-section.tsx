import { CustomCard, CustomCardContent } from "@/components/ui/custom-card"
import { Bot, MessageSquare, BarChart3, Brain } from "lucide-react"

export function AIGraphicsSection() {
  return (
    <section className="ai-graphics-section">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="features-title">
            AI-Powered Customer <span className="features-gradient-text">Feedback Analysis</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            See how our AI transforms raw feedback into meaningful insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* AI Process Visualization */}
          <div className="space-y-6">
            <div className="ai-process-step">
              <div className="ai-process-icon step-1">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Collect Feedback</h3>
                <p className="text-gray-600">Gather customer reviews, surveys, and social media mentions</p>
              </div>
            </div>

            <div className="ai-process-step">
              <div className="ai-process-icon step-2">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">AI Analysis</h3>
                <p className="text-gray-600">Advanced NLP algorithms analyze sentiment and extract insights</p>
              </div>
            </div>

            <div className="ai-process-step">
              <div className="ai-process-icon step-3">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Actionable Reports</h3>
                <p className="text-gray-600">Get clear recommendations and real-time dashboards</p>
              </div>
            </div>
          </div>

          {/* AI Bot Visualization */}
          <div className="relative">
            <CustomCard className="ai-bot-card">
              <CustomCardContent>
                <div className="text-center">
                  <div className="ai-bot-icon">
                    <Bot className="h-12 w-12 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Analysis Engine</h3>

                  <div className="space-y-3 text-left">
                    <div className="sentiment-bar positive">
                      <span className="text-sm text-gray-700">Positive Sentiment</span>
                      <span className="text-sm font-semibold text-green-600">78%</span>
                    </div>
                    <div className="sentiment-bar neutral">
                      <span className="text-sm text-gray-700">Neutral Sentiment</span>
                      <span className="text-sm font-semibold text-yellow-600">15%</span>
                    </div>
                    <div className="sentiment-bar negative">
                      <span className="text-sm text-gray-700">Negative Sentiment</span>
                      <span className="text-sm font-semibold text-red-600">7%</span>
                    </div>
                  </div>
                </div>
              </CustomCardContent>
            </CustomCard>

            {/* Floating feedback bubbles */}
            <div className="floating-bubble bubble-1">
              <p className="text-xs text-gray-600">"Great service!"</p>
            </div>
            <div className="floating-bubble bubble-2">
              <p className="text-xs text-gray-600">"Love this product"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
