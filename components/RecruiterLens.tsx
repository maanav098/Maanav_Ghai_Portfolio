'use client'

import { motion } from 'framer-motion'
import { BrainCircuit, Layers3, Rocket } from 'lucide-react'
import { recruiterSignals, stats } from '@/lib/data'

const deliverySignals = [
  {
    title: 'AI-first product thinking',
    text: 'I build with real product constraints in mind: retrieval quality, secure access, integration reliability, and measurable user value.',
    icon: BrainCircuit,
  },
  {
    title: 'Platform and backend depth',
    text: 'I am comfortable owning service contracts, auth, persistence, orchestration, and the platform work that makes AI features usable at scale.',
    icon: Layers3,
  },
  {
    title: 'Execution velocity',
    text: 'I move from architecture to delivery quickly, with ownership across engineering execution, client communication, and team coordination.',
    icon: Rocket,
  },
]

export function RecruiterLens() {
  return (
    <section className="section-shell pt-0">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="panel spotlight-border rounded-[24px] p-6 sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <span className="section-kicker">Recruiter Snapshot</span>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-4xl">
                Why I am a high-signal hire.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                I am best suited for backend-heavy product teams and applied AI roles where clear execution matters as much as experimentation.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/16 bg-black/15 px-4 py-3">
                    <p className="text-xl font-semibold leading-none tracking-[-0.03em] text-white sm:text-2xl">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {recruiterSignals.slice(0, 3).map((signal) => (
                <div key={signal.title} className="rounded-xl border border-white/16 bg-black/15 px-4 py-3">
                  <p className="text-sm font-semibold text-white">{signal.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{signal.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {deliverySignals.map(({ title, text, icon: Icon }) => (
              <div key={title} className="rounded-xl border border-white/16 bg-black/15 p-4">
                <div className="mb-3 inline-flex rounded-lg border border-cyan-300/30 bg-cyan-300/12 p-2 text-cyan-100">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}