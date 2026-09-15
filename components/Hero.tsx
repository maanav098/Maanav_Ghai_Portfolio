'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView, useReducedMotion } from 'framer-motion'
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Briefcase,
  MapPin,
  Mail,
} from 'lucide-react'
import { profile, stats } from '@/lib/data'
import { BlackHoleHeroSection } from '@/components/ui/blackhole-hero-section'

function useNarrow(query = '(max-width: 767px)') {
  const [narrow, setNarrow] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    const sync = () => setNarrow(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [query])

  return narrow
}

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const lastPointerUpdate = useRef(0)
  const isInView = useInView(sectionRef, { amount: 0.2 })
  const narrow = useNarrow()
  const reduceMotion = useReducedMotion()
  const [isCalmMode, setIsCalmMode] = useState(false)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  const reactiveMotionEnabled = !reduceMotion && !isCalmMode

  const focus = useMemo<[number, number]>(() => {
    const baseX = narrow ? 0.5 : 0.72
    const baseY = narrow ? 0.78 : 0.46
    const x = Math.min(0.86, Math.max(0.36, baseX + pointer.x * (narrow ? 0.03 : 0.05)))
    const y = Math.min(0.86, Math.max(0.28, baseY + pointer.y * (narrow ? 0.03 : 0.05)))
    return [x, y]
  }, [narrow, pointer.x, pointer.y])

  const elevation = (narrow ? -7 : -5.8) + (reactiveMotionEnabled ? pointer.y * 1.4 : 0)
  const azimuth = reactiveMotionEnabled ? pointer.x * 8 : 0
  const cardTilt = reactiveMotionEnabled
    ? { rotateX: -pointer.y * 4.2, rotateY: pointer.x * 5.5 }
    : { rotateX: 0, rotateY: 0 }

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!reactiveMotionEnabled) return

    const now = performance.now()
    if (now - lastPointerUpdate.current < 32) return
    lastPointerUpdate.current = now

    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1
    setPointer({ x, y })
  }

  const handlePointerLeave = () => {
    setPointer({ x: 0, y: 0 })
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative overflow-hidden px-6 pb-8 pt-28 sm:px-8 sm:pt-24 lg:px-12"
    >
      <BlackHoleHeroSection
        className="min-h-[80svh] rounded-[30px] border border-white/10"
        focus={focus}
        scrim={narrow ? 'top' : 'left'}
        scrimStrength={narrow ? 0.92 : 0.84}
        distance={24}
        elevation={elevation}
        azimuth={azimuth}
        roll={narrow ? -12 : -18}
        fov={narrow ? 58 : 42}
        glow={narrow ? 0.7 : 0.92}
        steps={reduceMotion ? 110 : isCalmMode ? 130 : narrow ? 165 : 210}
        resolution={reduceMotion ? 0.48 : isCalmMode ? 0.52 : narrow ? 0.56 : 0.64}
        maxDpr={narrow ? 1.05 : 1.2}
        starBrightness={reduceMotion ? 0 : isCalmMode ? 0.015 : 0.05}
        spinSpeed={reduceMotion ? 0.02 : isCalmMode ? 0.035 : 0.055}
        paused={Boolean(reduceMotion || !isInView)}
      >
      <div className="section-inner relative z-10 grid min-h-[80svh] items-center gap-10 py-8 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <motion.div
              className="glass-chip inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium text-slate-100 sm:text-sm"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Briefcase className="h-4 w-4 text-cyan-200" />
              Available for high-impact product teams
            </motion.div>

            <button
              type="button"
              onClick={() => setIsCalmMode((value) => !value)}
              className="glass-chip inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium text-slate-100 transition-colors hover:text-white"
              aria-pressed={isCalmMode}
              aria-label="Toggle calm motion mode"
            >
              <span className={`h-2 w-2 rounded-full ${isCalmMode ? 'bg-emerald-300' : 'bg-cyan-300'}`} />
              {isCalmMode ? 'Calm Mode' : 'Reactive Mode'}
            </button>
          </div>

          <motion.h1
            className="font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.55rem] lg:leading-[1.03]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.firstName}
            <span className="headline-gradient"> {profile.lastName}</span>
            <span className="mt-3 block text-base font-medium tracking-[-0.01em] text-slate-300 sm:text-lg lg:text-[1.2rem]">
              {profile.headline}
            </span>
          </motion.h1>

          <motion.h2
            className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.tagline}
          </motion.h2>

          <motion.p
            className="mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.summaryShort}
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-2.5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.focusAreas.slice(0, 3).map((focus) => (
              <span
                key={focus}
                className="glass-chip inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium text-slate-100 sm:text-sm"
              >
                {focus}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href={profile.resumeUrl} download="Maanav_Ghai-Resume.pdf" className="primary-button">
              <Download className="h-5 w-5" />
              Download Resume
            </a>
            <a href="#work" className="secondary-button">
              View Experience
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{profile.location}</span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-white">
              <Mail className="h-4 w-4" /> Email
            </a>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-white">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={cardTilt}
          className="panel rounded-[22px] border-white/15 bg-black/30 p-5 backdrop-blur-xl sm:p-6"
        >
          <div className="mb-6 flex items-center gap-3">
            <MapPin className="h-4 w-4 text-slate-400" />
            <p className="text-sm font-medium text-slate-200">Current role and focus</p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Role</p>
              <h3 className="mt-2 font-display text-xl font-semibold leading-[1.15] tracking-[-0.02em] text-white">
                Digital Specialist Engineer at Infosys
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Working on enterprise learning platforms with Spring Boot, Angular, and AI-backed features.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Primary strengths</p>
              <div className="mt-3 grid gap-2">
                {['Applied AI integration', 'Backend system design', 'Clear product execution'].map((item) => (
                  <div key={item} className="glass-chip rounded-xl border px-3 py-2 text-sm text-slate-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Delivery outcomes</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {stats.slice(0, 3).map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/10 bg-black/15 p-3 transition-colors duration-300 hover:border-cyan-300/35">
                    <p className="font-display text-lg font-semibold tracking-[-0.03em] text-white">{item.value}</p>
                    <p className="mt-1 text-[11px] leading-5 text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      </BlackHoleHeroSection>
    </section>
  )
}
