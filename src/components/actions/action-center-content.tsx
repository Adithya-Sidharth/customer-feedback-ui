
import { useState } from "react"
import { ChevronDown, AlertTriangle, Lightbulb, CheckCircle, TrendingUp, TrendingDown } from 'lucide-react'

interface Recommendation {
  id: string
  title: string
  source: string
  severity: "High" | "Medium" | "Low"
  action: string
  status: "Pending" | "Done"
  expectedOutcome?: string
  feedbackExcerpts?: string[]
  metrics?: {
    metric: string
    before: string
    after: string
    change: string
    isPositive: boolean
  }[]
}

const TOP_RECOMMENDATIONS: Recommendation[] = [
  {
    id: "1",
    title: "Improve Dashboard Loading Speed",
    source: "Customer feedback (42 mentions, 68% negative)",
    severity: "High",
    action: "Optimize backend API calls and image compression.",
    status: "Pending",
    expectedOutcome: "Potential +12% user satisfaction.",
    feedbackExcerpts: [
      '"The dashboard takes too long to load, frustrating for quick checks."',
      '"Performance is slow, especially with large datasets."',
    ],
  },
  {
    id: "2",
    title: "Complex Onboarding Steps",
    source: "Feedback (23 mentions)",
    severity: "Medium",
    action: "Simplify registration & add tooltip guidance.",
    status: "Pending",
    expectedOutcome: "Expected 8% improvement in new user retention.",
    feedbackExcerpts: ['"Too many steps to get started."', '"Setup wizard is confusing."'],
  },
  {
    id: "3",
    title: "Add Export to CSV Feature",
    source: "Feature requests (15 mentions)",
    severity: "Low",
    action: "Implement CSV export for analytics reports.",
    status: "Pending",
    expectedOutcome: "Reduce manual data entry by 30%.",
    feedbackExcerpts: ['"Would love to export data for analysis."', '"Need CSV export capability."'],
  },
]

const ALL_RECOMMENDATIONS: Recommendation[] = [
  ...TOP_RECOMMENDATIONS,
  {
    id: "4",
    title: "Pricing Confusion",
    source: "Feedback & churn data",
    severity: "Low",
    action: "Add pricing FAQ or clear plan comparison",
    status: "Done",
  },
  {
    id: "5",
    title: "High Churn Among New Users",
    source: "Analytics",
    severity: "High",
    action: "Investigate onboarding tutorial engagement",
    status: "Pending",
  },
  {
    id: "6",
    title: "Mobile App Responsiveness",
    source: "Customer feedback (31 mentions)",
    severity: "Medium",
    action: "Optimize UI for mobile devices",
    status: "Pending",
  },
]

const RESOLVED_METRICS = [
  {
    metric: "Sentiment Score",
    before: "62%",
    after: "74%",
    change: "+12%",
    isPositive: true,
  },
  {
    metric: "Churn Rate",
    before: "8%",
    after: "6%",
    change: "−2%",
    isPositive: true,
  },
  {
    metric: "User Retention",
    before: "78%",
    after: "84%",
    change: "+6%",
    isPositive: true,
  },
]

export default function ActionCenterContent() {
  const [category, setCategory] = useState("All")
  const [urgency, setUrgency] = useState("All")
  const [timePeriod, setTimePeriod] = useState("7 Days")
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set())
  const [resolvedItems, setResolvedItems] = useState<string[]>([])

  const handleMarkAsResolved = (id: string) => {
    setResolvedItems([...resolvedItems, id])
  }

  const toggleExpand = (id: string) => {
    const newExpandedIds = new Set(expandedIds)
    if (newExpandedIds.has(id)) {
      newExpandedIds.delete(id)
    } else {
      newExpandedIds.add(id)
    }
    setExpandedIds(newExpandedIds)
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "#DC2626"
      case "Medium":
        return "#F97316"
      case "Low":
        return "#16A34A"
      default:
        return "#6B7280"
    }
  }

  const getSeverityBgColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "#FEE2E2"
      case "Medium":
        return "#FFEDD5"
      case "Low":
        return "#DCFCE7"
      default:
        return "#F3F4F6"
    }
  }

  return (
    <div className="dashboard-content">
      {/* Header Section */}
      <div className="action-center-header">
        <div className="action-center-title-section">
          <h1 className="action-center-title">Action Center</h1>
        </div>

        <div className="action-center-filters">
          <div className="filter-group">
            <label className="filter-label">Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="filter-select">
              <option>All</option>
              <option>Performance</option>
              <option>UX</option>
              <option>Pricing</option>
              <option>Support</option>
              <option>Other</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Urgency</label>
            <select value={urgency} onChange={(e) => setUrgency(e.target.value)} className="filter-select">
              <option>All</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          <div className="filter-group">
            <label className="filter-label">Time Period</label>
            <select value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} className="filter-select">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </select>
          </div>

          <button className="export-button">Export</button>
        </div>
      </div>

      {/* Top Priority Recommendations */}
      <div className="action-center-section">
        <h2 className="section-title">Top Priority Recommendations</h2>
        <div className="top-recommendations-grid">
          {TOP_RECOMMENDATIONS.filter((rec) => !resolvedItems.includes(rec.id)).map((recommendation) => (
            <div
              key={recommendation.id}
              className="recommendation-card"
              style={{
                borderLeftColor: getSeverityColor(recommendation.severity),
              }}
            >
              <div className="recommendation-header">
                <div>
                  <h3 className="recommendation-title">{recommendation.title}</h3>
                  <p className="recommendation-source">{recommendation.source}</p>
                </div>
                <div
                  className="severity-badge"
                  style={{
                    backgroundColor: getSeverityBgColor(recommendation.severity),
                    color: getSeverityColor(recommendation.severity),
                  }}
                >
                  {recommendation.severity === "High" && <AlertTriangle size={14} />}
                  {recommendation.severity === "Medium" && <Lightbulb size={14} />}
                  {recommendation.severity === "Low" && <CheckCircle size={14} />}
                  <span>{recommendation.severity}</span>
                </div>
              </div>

              <div className="recommendation-content">
                <div className="recommendation-field">
                  <label className="field-label">Recommendation:</label>
                  <p className="field-value">{recommendation.action}</p>
                </div>

                <div className="recommendation-field">
                  <label className="field-label">Expected Outcome:</label>
                  <p className="field-value">{recommendation.expectedOutcome}</p>
                </div>
              </div>

              <div className="recommendation-buttons">
                <button onClick={() => handleMarkAsResolved(recommendation.id)} className="btn btn-primary">
                  Mark as Resolved
                </button>
                <button className="btn btn-secondary">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Recommendations Table */}
      <div className="action-center-section">
        <h2 className="section-title">All Recommendations</h2>
        <div className="recommendations-table-container">
          <table className="recommendations-table">
            <thead>
              <tr>
                <th>Issue / Topic</th>
                <th>Source</th>
                <th>Severity</th>
                <th>Suggested Action</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {ALL_RECOMMENDATIONS.map((recommendation) => (
                <>
                  <tr
                    key={recommendation.id}
                    className={`table-row ${expandedIds.has(recommendation.id) ? "expanded" : ""}`}
                  >
                    <td className="table-cell-title">
                      <span>{recommendation.title}</span>
                    </td>
                    <td className="table-cell-source">{recommendation.source}</td>
                    <td className="table-cell-severity">
                      <span
                        className="severity-badge-table"
                        style={{
                          backgroundColor: getSeverityBgColor(recommendation.severity),
                          color: getSeverityColor(recommendation.severity),
                        }}
                      >
                        {recommendation.severity}
                      </span>
                    </td>
                    <td className="table-cell-action">{recommendation.action}</td>
                    <td className="table-cell-status">
                      {recommendation.status === "Done" ? (
                        <span className="status-done">✅ Done</span>
                      ) : (
                        <span className="status-pending">☐ Pending</span>
                      )}
                    </td>
                    <td className="table-cell-expand">
                      <button className="expand-icon-button" onClick={() => toggleExpand(recommendation.id)}>
                        <ChevronDown size={16} style={{
                          transform: expandedIds.has(recommendation.id) ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }} />
                      </button>
                    </td>
                  </tr>
                  {expandedIds.has(recommendation.id) && recommendation.feedbackExcerpts && (
                    <tr className="expanded-row">
                      <td colSpan={6}>
                        <div className="expanded-row-content">
                          <div className="expanded-section">
                            <h4 className="expanded-title">Feedback Excerpts</h4>
                            <div className="feedback-quotes">
                              {recommendation.feedbackExcerpts.map((quote, index) => (
                                <p key={index} className="feedback-quote">
                                  {quote}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Resolved / Impact Tracker */}
      {resolvedItems.length > 0 && (
        <div className="action-center-section">
          <h2 className="section-title">Resolved Impact Tracker</h2>
          <div className="impact-tracker-container">
            <table className="impact-tracker-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Before Fix</th>
                  <th>After Fix</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                {RESOLVED_METRICS.map((metric, index) => (
                  <tr key={index}>
                    <td className="metric-name">{metric.metric}</td>
                    <td className="metric-value">{metric.before}</td>
                    <td className="metric-value">{metric.after}</td>
                    <td className="metric-change">
                      <span className={`change-value ${metric.isPositive ? "positive" : "negative"}`}>
                        {metric.isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                        {metric.change}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
