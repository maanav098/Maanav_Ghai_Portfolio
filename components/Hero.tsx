'use client'

import { motion } from 'framer-motion'
import { Download, ArrowRight, Github, Linkedin, Sparkles, Briefcase, BrainCircuit, Server, Presentation } from 'lucide-react'
import { profile, recruiterSignals } from '@/lib/data'

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 sm:px-8 lg:px-12">
      <div className="section-inner relative z-10 grid gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <motion.div
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Sparkles className="h-4 w-4 text-blue-400" />
            Building AI-native enterprise products with clean execution.
          </motion.div>

          <motion.h1 
            className="font-display text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[5.7rem] lg:leading-[0.98]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.name}
            <span className="mt-4 block text-xl tracking-[-0.03em] text-blue-300 sm:text-2xl lg:text-3xl">{profile.headlineFull}</span>
          </motion.h1>

          <motion.h2
            className="mt-8 max-w-3xl text-xl font-medium leading-8 text-slate-300 sm:text-2xl sm:leading-9"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.tagline}
            <span className="block pt-3 text-slate-500">Currently shipping Spring AI and RAG features inside production enterprise systems at Infosys.</span>
          </motion.h2>

          <motion.p
            className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {profile.summaryShort}
          </motion.p>

          <motion.div
            className="mt-8 grid gap-4 sm:grid-cols-2"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-[28px] border border-white/8 bg-white/[0.03] p-5">
              <div className="mb-3 inline-flex rounded-2xl border border-blue-400/20 bg-blue-500/10 p-2 text-blue-300">
                <Briefcase className="h-4 w-4" />
              </div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Current Role</p>
              <p className="mt-2 text-lg font-semibold text-white">Digital Specialist Engineer at Infosys</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">Shipping enterprise learning systems with Spring Boot, Angular, and Spring AI.</p>
            </div>
            <div className="rounded-[28px] border border-white/8 bg-white/[0.03] p-5">
              <div className="mb-3 inline-flex rounded-2xl border border-blue-400/20 bg-blue-500/10 p-2 text-blue-300">
                <BrainCircuit className="h-4 w-4" />
              </div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Hiring Signal</p>
              <p className="mt-2 text-lg font-semibold text-white">AI features with backend rigor</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">Not just model experimentation. Real APIs, retrieval pipelines, auth, contracts, and shipped workflows.</p>
            </div>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={profile.resumeUrl}
              download="Maanav_Ghai_Resume.pdf"
              className="primary-button"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <a
              href="#work"
              className="secondary-button"
            >
              View Experience
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>{profile.location}</span>
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
          className="panel spotlight-border rounded-[36px] p-6 sm:p-8"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Recruiter Snapshot</p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-white">Why I&apos;d get shortlisted</h3>
            </div>
            <div className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
              Scan First
            </div>
          </div>

          <div className="space-y-4">
            {recruiterSignals.map((item, index) => (
              <div key={item.title} className="rounded-3xl border border-white/8 bg-white/[0.03] p-4">
                <div className="mb-3 inline-flex rounded-2xl border border-white/8 bg-black/20 p-2 text-slate-300">
                  {index === 0 ? <BrainCircuit className="h-4 w-4" /> : index === 1 ? <Server className="h-4 w-4" /> : index === 2 ? <Presentation className="h-4 w-4" /> : <Briefcase className="h-4 w-4" />}
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
