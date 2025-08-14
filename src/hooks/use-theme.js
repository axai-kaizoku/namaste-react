import { useState, useEffect } from "react"
import { THEMES, getStoredTheme, getSystemTheme, applyTheme, saveTheme } from "../utils/theme-config"

export const useTheme = () => {
  const [theme, setTheme] = useState(getStoredTheme())

  // Apply theme on mount and when theme changes
  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  // Listen for system theme changes
  useEffect(() => {
    if (theme === THEMES.SYSTEM) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      const handleChange = () => applyTheme(THEMES.SYSTEM)

      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
    setTheme(newTheme)
    saveTheme(newTheme)
  }

  const setThemeMode = (newTheme) => {
    setTheme(newTheme)
    saveTheme(newTheme)
  }

  const getCurrentTheme = () => {
    return theme === THEMES.SYSTEM ? getSystemTheme() : theme
  }

  return {
    theme,
    currentTheme: getCurrentTheme(),
    toggleTheme,
    setThemeMode,
    isLight: getCurrentTheme() === THEMES.LIGHT,
    isDark: getCurrentTheme() === THEMES.DARK,
    isSystem: theme === THEMES.SYSTEM,
  }
}
