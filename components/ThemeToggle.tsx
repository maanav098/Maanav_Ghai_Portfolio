'use client'

import { Sun, Zap } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4 text-[#5A7D7C]" />
      case 'dark':
        return <Zap className="w-4 h-4 text-cyan-400" /> // Using Zap for the glowing dark theme
      default:
        return <Sun className="w-4 h-4" />
    }
  }

  const getThemeColor = () => {
    switch (theme) {
      case 'light':
        return 'bg-[#E3E9E2]'
      case 'dark':
        // Use the futuristic gradient for the new dark theme
        return 'bg-gradient-to-r from-cyan-500/30 to-purple-500/30'
      default:
        return 'bg-[#E3E9E2]'
    }
  }

  const getTranslateX = () => {
    switch (theme) {
      case 'light':
        return 'translate-x-1'
      case 'dark':
        return 'translate-x-10'
      default:
        return 'translate-x-1'
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-10 w-20 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        getThemeColor()
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-200",
          getTranslateX()
        )}
      >
        {getThemeIcon()}
      </span>
    </button>
  )
}
