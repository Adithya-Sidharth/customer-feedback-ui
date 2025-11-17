import { Link, useLocation, useNavigate } from "react-router-dom"
import { LayoutDashboard, Package, BarChart3, Target, Settings } from 'lucide-react'

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Product Setup", icon: Package, href: "/dashboard/setup/product-setup" },
  { label: "Insights", icon: BarChart3, href: "/dashboard/insights" },
  { label: "Action Center", icon: Target, href: "/dashboard/actions" },
  { label: "Settings", icon: Settings, href: "/dashboard/settings" },
]

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const location = useLocation()
  const pathname = location.pathname
  const navigate = useNavigate()

  const handleLogout = () => {
    // If you also need to clear tokens later, do it here
    navigate("/") // Redirects to HomePage
  }

  return (
    <aside className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <div className="sidebar-header">
        <button className="sidebar-toggle" onClick={onToggle}>
          ☰
        </button>
        {isOpen && <span className="sidebar-brand">AnalyzePoint</span>}
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href))
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              to={item.href}
              className={`sidebar-item ${isActive ? "active" : ""}`}
            >
              <span className="sidebar-icon">
                <Icon className="w-5 h-5" />
              </span>
              {isOpen && <span className="sidebar-label">{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      <div className="sidebar-footer">
        <button
          className="sidebar-item sidebar-logout"
          onClick={handleLogout}
        >
          <span className="sidebar-icon">🚪</span>
          {isOpen && <span className="sidebar-label">Logout</span>}
        </button>
      </div>
    </aside>
  )
}