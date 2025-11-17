
import { useEffect, useState } from "react"

export type Theme = "light" | "dark" | "system"

const THEME_STORAGE_KEY = "ap-theme"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("system")
  const [mounted, setMounted] = useState(false)

  // Initialize theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null
    const initial = stored || "system"
    setTheme(initial)
    applyTheme(initial)
    setMounted(true)
  }, [])

  const applyTheme = (newTheme: Theme) => {
    const html = document.documentElement
    let effectiveTheme = newTheme

    if (newTheme === "system") {
      effectiveTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }

    if (effectiveTheme === "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    localStorage.setItem(THEME_STORAGE_KEY, newTheme)
    applyTheme(newTheme)
  }

  return {
    theme,
    updateTheme,
    mounted,
    isDark: mounted ? document.documentElement.classList.contains("dark") : false,
  }
}
