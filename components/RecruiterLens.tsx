'use client'

import { motion } from 'framer-motion'
import { recruiterSignals, stats } from '@/lib/data'

export function RecruiterLens() {
  return (
    <section className="section-shell pt-0">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="panel spotlight-border rounded-[36px] p-7 sm:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="section-kicker">First 30 Seconds</span>
              <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">What a strong recruiter should understand immediately.</h2>
              <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">You are not a generic fresher portfolio case. The strongest signal here is early enterprise AI delivery with measurable backend and product impact.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-[24px] border border-white/8 bg-black/20 p-4">
                    <p className="text-3xl font-semibold tracking-[-0.05em] text-white">{stat.value}</p>
                    <p className="mt-2 text-sm font-medium text-slate-200">{stat.label}</p>
                    {stat.note && <p className="mt-2 text-xs leading-6 text-slate-500">{stat.note}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {recruiterSignals.map((signal) => (
                <div key={signal.title} className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">{signal.title}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{signal.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}