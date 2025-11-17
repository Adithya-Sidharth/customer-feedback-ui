"use client"

interface ActionItem {
  title: string
  description: string
  actionText: string
  icon: string
}

const recommendations: ActionItem[] = [
  {
    title: "Investigate Slow Load Times",
    description: "27 users mentioned slow page load times this week. Consider optimizing assets.",
    actionText: "Create Task",
    icon: "⚡",
  },
  {
    title: "Improve Mobile Experience",
    description: "15 feedback mentions about mobile responsiveness. Mobile traffic is up 23%.",
    actionText: "Create Task",
    icon: "📱",
  },
  {
    title: "Simplify User Navigation",
    description: "12 users found the navigation flow confusing. Redesign may improve retention.",
    actionText: "Create Task",
    icon: "🗺️",
  },
]

export default function ActionRecommendations() {
  return (
    <div className="actions-section">
      <h2 className="actions-title">Recommended Actions</h2>
      <p className="actions-subtitle">AI-powered suggestions based on user feedback and analytics</p>

      <div className="actions-grid">
        {recommendations.map((action, index) => (
          <div key={index} className="action-card">
            <div className="action-icon">{action.icon}</div>
            <div className="action-content">
              <h3 className="action-title">{action.title}</h3>
              <p className="action-description">{action.description}</p>
              <button className="action-button">{action.actionText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
