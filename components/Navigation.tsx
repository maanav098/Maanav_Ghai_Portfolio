'use client'

import { useState, useEffect } from 'react'
import { scrollToSection } from '@/lib/utils'
import { cn } from '@/lib/utils'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/data'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' }
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-white/10 bg-[#05070b]/75 backdrop-blur-2xl"
          : "bg-transparent"
      )}
    >
      <nav className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 text-left"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-display text-sm font-semibold tracking-[0.24em] text-white">
              MG
            </span>
            <span>
              <span className="block font-display text-lg font-semibold tracking-[-0.04em] text-white">
                {profile.name}
              </span>
              <span className="block text-xs uppercase tracking-[0.26em] text-slate-500">
                {profile.headline}
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.resumeUrl}
              download="Maanav_Ghai_Resume.pdf"
              className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10 md:inline-flex"
            >
              Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <button 
              className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors hover:text-white lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <div className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out lg:hidden",
          isMobileMenuOpen ? "max-h-[540px] opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="panel mb-4 space-y-2 border-white/10 p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="w-full rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <a
              href={profile.resumeUrl}
              download="Maanav_Ghai_Resume.pdf"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white"
            >
              Download Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
