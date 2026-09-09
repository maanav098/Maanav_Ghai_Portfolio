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
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [avatarLoadError, setAvatarLoadError] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = ['hero', ...navItems.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      {
        root: null,
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.2, 0.35, 0.6],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [])

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-out',
        isScrolled
          ? 'border-b border-white/10 bg-[#060f21]/72 backdrop-blur-2xl shadow-[0_12px_40px_rgba(2,6,23,0.35)]'
          : 'bg-transparent'
      )}
    >
      <div className="absolute left-0 top-0 h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-amber-300 transition-[width] duration-200 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <nav className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex h-[4.75rem] items-center justify-between sm:h-[4.15rem]">
          <button
            onClick={() => handleNavClick('hero')}
            className="group flex items-center gap-2.5 text-left sm:gap-3"
          >
            {!avatarLoadError && profile.avatarUrl ? (
              <img
                src={profile.avatarUrl}
                alt={`${profile.name} avatar`}
                onError={() => setAvatarLoadError(true)}
                className="h-9 w-9 rounded-2xl border border-cyan-300/35 object-cover shadow-[0_0_24px_rgba(34,211,238,0.22)] transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-cyan-300/35 bg-cyan-300/10 font-display text-[10px] font-semibold tracking-[0.2em] text-white shadow-[0_0_24px_rgba(34,211,238,0.22)] transition-transform duration-300 group-hover:scale-105">
                MG
              </span>
            )}
            <span className="min-w-0">
              <span className="block truncate font-display text-sm font-semibold tracking-[-0.03em] text-white sm:text-base">
                {profile.name}
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.22em] text-slate-500 sm:block">
                {profile.headline}
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-1 rounded-full border border-white/12 bg-white/[0.05] p-1 backdrop-blur-xl lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  'rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200',
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-cyan-400/25 to-amber-300/20 text-white shadow-[0_0_0_1px_rgba(34,211,238,0.3)_inset]'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.resumeUrl}
              download="Maanav_Ghai-Resume.pdf"
              className="hidden items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-100 transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-400/16 md:inline-flex"
            >
              Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <button
              className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-200 transition-colors duration-200 hover:text-white lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            'overflow-hidden transition-all duration-300 ease-in-out lg:hidden',
            isMobileMenuOpen ? 'max-h-[540px] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="panel mb-4 space-y-2 border-white/10 p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  'w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors duration-200',
                  activeSection === item.id
                    ? 'bg-cyan-400/18 text-white'
                    : 'text-slate-200 hover:bg-white/10 hover:text-white'
                )}
              >
                {item.label}
              </button>
            ))}
            <a
              href={profile.resumeUrl}
              download="Maanav_Ghai-Resume.pdf"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(8,145,178,0.35)]"
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
