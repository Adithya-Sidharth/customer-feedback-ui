
import { useState } from "react"

interface FeedbackVisualizationProps {
  dateRange: string
}

export default function FeedbackVisualization({ dateRange }: FeedbackVisualizationProps) {
  const [metric, setMetric] = useState("activeUsers")
  const [chartType, setChartType] = useState("bar") // add toggle between bar and line chart types

  const metrics = [
    { value: "activeUsers", label: "Active Users" },
    { value: "sentimentScore", label: "Sentiment Score" },
    { value: "retention", label: "Retention %" },
    { value: "sessions", label: "Sessions" },
    { value: "churnRate", label: "Churn Rate" },
  ]

  // Sample data for chart
  const chartData = {
    activeUsers: [
      { day: "Mon", value: 4200 },
      { day: "Tue", value: 5100 },
      { day: "Wed", value: 4800 },
      { day: "Thu", value: 6200 },
      { day: "Fri", value: 5900 },
      { day: "Sat", value: 7100 },
      { day: "Sun", value: 6800 },
    ],
    sentimentScore: [
      { day: "Mon", value: 72 },
      { day: "Tue", value: 75 },
      { day: "Wed", value: 70 },
      { day: "Thu", value: 78 },
      { day: "Fri", value: 76 },
      { day: "Sat", value: 80 },
      { day: "Sun", value: 79 },
    ],
    retention: [
      { day: "Mon", value: 85 },
      { day: "Tue", value: 87 },
      { day: "Wed", value: 84 },
      { day: "Thu", value: 88 },
      { day: "Fri", value: 86 },
      { day: "Sat", value: 89 },
      { day: "Sun", value: 88 },
    ],
    sessions: [
      { day: "Mon", value: 1200 },
      { day: "Tue", value: 1450 },
      { day: "Wed", value: 1350 },
      { day: "Thu", value: 1680 },
      { day: "Fri", value: 1520 },
      { day: "Sat", value: 1890 },
      { day: "Sun", value: 1750 },
    ],
    churnRate: [
      { day: "Mon", value: 2.5 },
      { day: "Tue", value: 2.3 },
      { day: "Wed", value: 2.8 },
      { day: "Thu", value: 2.0 },
      { day: "Fri", value: 2.2 },
      { day: "Sat", value: 1.9 },
      { day: "Sun", value: 2.1 },
    ],
  }

  const currentData = chartData[metric as keyof typeof chartData]
  const maxValue = Math.max(...currentData.map((d) => d.value))
  const minValue = Math.min(...currentData.map((d) => d.value))
  const range = maxValue - minValue || 1

  const renderLineChart = () => {
    const points = currentData.map((point, index) => {
      const x = (index / (currentData.length - 1 || 1)) * 100
      const y = 100 - ((point.value - minValue) / range) * 100
      return { x, y, ...point }
    })

    const pathData = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ")
    const gridLines = 4

    return (
      <div className="feedback-chart-container line-chart">
        <div className="feedback-chart-y-axis">
          <div className="feedback-y-label">{maxValue.toLocaleString()}</div>
          <div className="feedback-y-label" style={{ flex: 1 }}></div>
          <div className="feedback-y-label">{minValue.toLocaleString()}</div>
        </div>

        <div className="line-chart-area">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="line-chart-svg">
            {/* Grid lines */}
            {Array.from({ length: gridLines }).map((_, i) => {
              const y = (i / (gridLines - 1 || 1)) * 100
              return (
                <line
                  key={`grid-${i}`}
                  x1="0"
                  y1={y}
                  x2="100"
                  y2={y}
                  stroke="#e6e6e6"
                  strokeWidth="0.5"
                  className="line-chart-grid"
                />
              )
            })}
            {/* Line path */}
            <path d={pathData} stroke="#ff6a00" strokeWidth="2" fill="none" className="line-chart-path" />
            {/* Data points */}
            {points.map((p, i) => (
              <circle
                key={`point-${i}`}
                cx={p.x}
                cy={p.y}
                r="2"
                fill="#ff6a00"
                className="line-chart-point"
              >
                <title>{p.value.toLocaleString()}</title>
              </circle>
            ))}
          </svg>

          <div className="line-chart-labels">
            {currentData.map((point, index) => (
              <div key={index} className="feedback-chart-label">
                {point.day}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const renderBarChart = () => (
    <div className="feedback-chart-container">
      <div className="feedback-chart-y-axis">
        <div className="feedback-y-label">{maxValue.toLocaleString()}</div>
        <div className="feedback-y-label" style={{ flex: 1 }}></div>
        <div className="feedback-y-label">{minValue.toLocaleString()}</div>
      </div>

      <div className="feedback-chart-area">
        {currentData.map((point, index) => (
          <div key={index} className="feedback-bar-container">
            <div
              className="feedback-bar"
              style={{
                height: `${((point.value - minValue) / range) * 100}%`,
              }}
            >
              <span className="feedback-tooltip">{point.value.toLocaleString()}</span>
            </div>
            <div className="feedback-chart-label">{point.day}</div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="feedback-visualization-card">
      <div className="feedback-viz-header">
        <h3 className="feedback-viz-title">Feedback Performance Trends</h3>

        <div className="feedback-viz-controls">
          <div className="metric-selector">
            <select value={metric} onChange={(e) => setMetric(e.target.value)} className="metric-select">
              {metrics.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>

          <div className="chart-type-toggle">
            <button
              onClick={() => setChartType("bar")}
              className={`chart-toggle-btn ${chartType === "bar" ? "active" : ""}`}
              title="Bar Chart View"
            >
              Bar
            </button>
            <button
              onClick={() => setChartType("line")}
              className={`chart-toggle-btn ${chartType === "line" ? "active" : ""}`}
              title="Line Chart View"
            >
              Line
            </button>
          </div>
        </div>
      </div>

      {chartType === "bar" ? renderBarChart() : renderLineChart()}

      <div className="chart-sample-notice">
        <span className="sample-badge">Sample Data</span>
        <span className="sample-text">This is placeholder data demonstrating the visualization. Live data will populate here when integrated.</span>
      </div>
    </div>
  )
}
