"use client"

interface InsightsHeaderProps {
  dateRange: string
  onDateRangeChange: (range: string) => void
}

export default function InsightsHeader({ dateRange, onDateRangeChange }: InsightsHeaderProps) {
  const dateRangeOptions = [
    { value: "7", label: "7 Days" },
    { value: "30", label: "30 Days" },
    { value: "90", label: "90 Days" },
  ]

  const handleExport = () => {
    console.log("[v0] Export clicked for date range:", dateRange)
    // Export functionality can be implemented here
  }

  return (
    <div className="insights-header">
      <div className="insights-header-left">
        <h1 className="insights-page-title">Feedback Analytics / Insights</h1>
      </div>

      <div className="insights-header-right">
        <div className="date-range-dropdown">
          <select value={dateRange} onChange={(e) => onDateRangeChange(e.target.value)} className="date-range-select">
            {dateRangeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button onClick={handleExport} className="export-button">
          <span>📤</span>
          Export
        </button>
      </div>
    </div>
  )
}
