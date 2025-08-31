'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { ThemeType, themes } from '@/lib/themes'

interface ThemeContextType {
  theme: ThemeType
  toggleTheme: () => void
  setTheme: (theme: ThemeType) => void
  colors: typeof themes.light
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeType>('dark') // Default to dark mode

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme && themes[savedTheme]) {
      setThemeState(savedTheme)
    } else if (prefersDark) {
      setThemeState('dark') // Default to dark if prefers dark
    } else {
      setThemeState('dark') // Still default to dark for better first impression
    }
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    // Remove all theme classes first
    root.classList.remove('light', 'dark') 
    // Add the current theme class
    root.classList.add(theme)
    localStorage.setItem('theme', theme)

    // Set CSS variables based on the current theme
    const currentColors = themes[theme]
    for (const [key, value] of Object.entries(currentColors)) {
      root.style.setProperty(`--color-${key}`, value)
    }
  }, [theme])

  const toggleTheme = () => {
    setThemeState((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme)
  }

  const colors = themes[theme]

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
