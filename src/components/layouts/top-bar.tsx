import { ThemeToggle } from "./theme-toggle"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
* TopBar now derives its title from the current router pathname.
* It maps known paths to human-readable titles and falls back to "Dashboard".
*/
export default function TopBar() {
  const location = useLocation()
  const pathname = location.pathname

  const routeTitleMap: { path: string; title: string }[] = [
    { path: "/dashboard/setup/product-setup", title: "Product Setup" },
    { path: "/dashboard/settings", title: "Settings" },
    { path: "/dashboard", title: "Dashboard" },
    { path: "/dashboard/insights", title: "Insights" },
    { path: "/dashboard/actions", title: "Action Center" },
  ]

  function getTitle(path: string) {
    // Prefer exact match first
    const exact = routeTitleMap.find((r) => r.path === path)
    if (exact) return exact.title

    // then look for startsWith (useful for nested routes like /dashboard/users)
    const starts = routeTitleMap.find((r) => path.startsWith(r.path))
    if (starts) return starts.title

    // fallback
    return "Dashboard"
  }

  const title = getTitle(pathname)

  // Optional: keep the document title in sync
  useEffect(() => {
    const previous = document.title
    document.title = `${title} — AnalyzePoint`
    return () => {
      document.title = previous
    }
  }, [title])

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <h1 className="top-bar-title">{title}</h1>
      </div>
      <div className="top-bar-right">
        <button className="top-bar-icon">🔔</button>
        <ThemeToggle />
        <button className="top-bar-avatar">
          <img src="/diverse-user-avatars.png" alt="User avatar" />
        </button>
      </div>
    </div>
  )
}
