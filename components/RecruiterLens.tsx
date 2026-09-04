'use client'

import { motion } from 'framer-motion'
import { BrainCircuit, Layers3, Rocket } from 'lucide-react'
import { recruiterSignals, stats } from '@/lib/data'

const deliverySignals = [
  {
    title: 'AI-first product thinking',
    text: 'Builds with real product constraints in mind — retrieval quality, secure access, integration reliability, and measurable user value.',
    icon: BrainCircuit,
  },
  {
    title: 'Platform and backend depth',
    text: 'Comfortable in service contracts, auth, persistence, orchestration, and the systems that make AI features usable at scale.',
    icon: Layers3,
  },
  {
    title: 'Execution velocity',
    text: 'Moves from architecture to delivery quickly, with strong ownership across engineering work, client communication, and team coordination.',
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
          className="panel rounded-[24px] p-6 sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <span className="section-kicker">Recruiter Snapshot</span>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-4xl">
                Why teams shortlist me quickly.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                This profile is strongest for backend-heavy product teams and applied AI roles that need clean execution, not just experimentation.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                    <p className="text-xl font-semibold leading-none tracking-[-0.03em] text-white sm:text-2xl">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {recruiterSignals.slice(0, 3).map((signal) => (
                <div key={signal.title} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                  <p className="text-sm font-semibold text-white">{signal.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{signal.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {deliverySignals.map(({ title, text, icon: Icon }) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <div className="mb-3 inline-flex rounded-lg border border-blue-400/20 bg-blue-500/10 p-2 text-blue-300">
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