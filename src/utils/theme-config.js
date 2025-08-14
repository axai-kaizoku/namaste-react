export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
}

export const STORAGE_KEY = "app-theme"

// Get system theme preference
export const getSystemTheme = () => {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? THEMES.DARK : THEMES.LIGHT
  }
  return THEMES.LIGHT
}

// Get stored theme or default to system
export const getStoredTheme = () => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && Object.values(THEMES).includes(stored)) {
      return stored
    }
  }
  return THEMES.SYSTEM
}

// Apply theme to document
export const applyTheme = (theme) => {
  const root = document.documentElement
  const actualTheme = theme === THEMES.SYSTEM ? getSystemTheme() : theme

  if (actualTheme === THEMES.DARK) {
    root.classList.add("dark")
  } else {
    root.classList.remove("dark")
  }
}

// Save theme to localStorage
export const saveTheme = (theme) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, theme)
  }
}
