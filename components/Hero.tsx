'use client'

import { motion } from 'framer-motion'
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Briefcase,
  MapPin,
  Mail,
} from 'lucide-react'
import { profile } from '@/lib/data'

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[84svh] items-center overflow-hidden px-6 pb-10 pt-24 sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-blue-500/8 blur-[120px]" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-sky-400/6 blur-[130px]" />
      </div>

      <div className="section-inner relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.02] px-4 py-1.5 text-xs font-medium text-slate-200 sm:text-sm"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Briefcase className="h-4 w-4 text-blue-300" />
            Full-Stack AI Engineer
          </motion.div>

          <motion.h1
            className="font-display text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.55rem] lg:leading-[1.03]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.name}
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
            Building production-grade applications across Java, Spring, Angular, and applied AI systems with a strong focus on clarity, stability, and measurable outcomes.
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
            className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400"
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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="panel rounded-[20px] p-6 sm:p-7"
        >
          <div className="mb-6 flex items-center gap-3">
            <MapPin className="h-4 w-4 text-slate-400" />
            <p className="text-sm font-medium text-slate-300">Current role and focus</p>
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
                  <div key={item} className="rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
