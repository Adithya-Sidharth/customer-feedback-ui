import { Moon, Sun } from "lucide-react"
import { useTheme } from "../../lib/use-theme"

export function ThemeToggle() {
  const { theme, updateTheme, isDark } = useTheme()

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"
    updateTheme(newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="top-bar-icon theme-toggle"
      aria-label="Toggle dark mode"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}
