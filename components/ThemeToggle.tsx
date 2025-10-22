'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4 text-gray-700" />
      case 'dark':
        return <Moon className="w-4 h-4 text-gray-200" />
      default:
        return <Sun className="w-4 h-4" />
    }
  }

  const getThemeColor = () => {
    switch (theme) {
      case 'light':
        return 'bg-gray-200'
      case 'dark':
        return 'bg-gray-700'
      default:
        return 'bg-gray-200'
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
        "relative inline-flex h-10 w-20 items-center rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#0071e3] focus:ring-offset-2",
        getThemeColor()
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-md transition-transform duration-300 ease-in-out",
          getTranslateX()
        )}
      >
        {getThemeIcon()}
      </span>
    </button>
  )
}
