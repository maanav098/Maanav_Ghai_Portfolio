'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ChevronDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { profile, stats } from '@/lib/data'
import { MagneticButton } from '@/components/ui/MagneticButton'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const cardY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section ref={sectionRef} id="hero" className="section-shell relative min-h-[100svh] overflow-hidden pt-32 sm:pt-28">
      <motion.div
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(180deg,black,transparent)]"
      >
        <div className="absolute left-[-10%] top-[-16%] h-96 w-96 rounded-full bg-cyan-300/22 blur-[120px]" />
        <div className="absolute right-[-8%] bottom-[-14%] h-[26rem] w-[26rem] rounded-full bg-amber-300/16 blur-[140px]" />
      </motion.div>

      <div className="section-inner relative z-10">
        <motion.div style={{ y: contentY }} className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-7 flex flex-wrap items-center gap-3"
            >
              <span className="glass-chip inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium text-slate-100 sm:text-sm">
                <Sparkles className="h-4 w-4 text-cyan-200" />
                Full-Stack AI Engineer
              </span>
              <span className="glass-chip hidden items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium text-slate-100 sm:inline-flex sm:text-sm">
                Premium product execution
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="display-hero"
            >
              {profile.firstName}
              <br />
              <span className="headline-gradient">{profile.lastName}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="mt-6 max-w-2xl text-xl font-medium text-slate-100/90 sm:text-2xl"
            >
              {profile.tagline}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
              className="mt-4 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base"
            >
              {profile.summaryShort}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.36 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <MagneticButton>
                <a href={profile.resumeUrl} download="Maanav_Ghai_Resume.pdf" className="primary-button">
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="#contact" className="secondary-button">
                  Let&apos;s Work Together
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.44 }}
              className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300"
            >
              <a
                href={`mailto:${profile.email}`}
                className="glass-chip inline-flex items-center gap-2 rounded-full border px-3 py-1.5 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-chip inline-flex items-center gap-2 rounded-full border px-3 py-1.5 hover:text-white"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-chip inline-flex items-center gap-2 rounded-full border px-3 py-1.5 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </motion.div>
          </div>

          <motion.div
            style={{ y: cardY }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="panel spotlight-border rounded-[26px] border-white/15 bg-black/28 p-5 sm:p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              {profile.avatarUrl ? (
                <Image
                  src={profile.avatarUrl}
                  alt={`${profile.name} avatar`}
                  width={58}
                  height={58}
                  className="h-[58px] w-[58px] rounded-2xl border border-cyan-300/30 object-cover"
                />
              ) : (
                <span className="flex h-[58px] w-[58px] items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 font-display text-sm font-semibold text-white">
                  MG
                </span>
              )}
              <div>
                <p className="font-display text-xl font-semibold tracking-[-0.02em] text-white">{profile.name}</p>
                <p className="text-sm text-slate-300">{profile.location}</p>
              </div>
            </div>

            <div className="space-y-3">
              {profile.focusAreas.slice(0, 4).map((item) => (
                <div key={item} className="rounded-xl border border-white/12 bg-white/[0.03] px-3 py-2 text-sm text-slate-100">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <p className="font-display text-lg font-semibold tracking-[-0.03em] text-white">{stat.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 flex justify-center lg:mt-20"
        >
          <a href="#about" className="flex flex-col items-center gap-1 text-slate-400 transition-colors hover:text-cyan-200">
            <span className="text-[11px] uppercase tracking-[0.24em]">Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
