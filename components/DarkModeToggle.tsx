'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { cn } from '@/lib/utils'

export function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-10 w-20 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        theme === 'dark' 
          ? "bg-slate-700" 
          : "bg-slate-200"
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span
        className={cn(
          "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-200",
          theme === 'dark' ? "translate-x-10" : "translate-x-1"
        )}
      >
        {theme === 'light' ? (
          <Sun className="h-4 w-4 text-slate-600" />
        ) : (
          <Moon className="h-4 w-4 text-slate-400" />
        )}
      </span>
    </button>
  )
}
