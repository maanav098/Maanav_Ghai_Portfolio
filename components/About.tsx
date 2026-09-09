'use client'

import { motion } from 'framer-motion'
import { profile, stats } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start"
        >
          <div className="space-y-6">
            <span className="section-kicker">About</span>
            <h2 className="section-title text-left">I build calm systems for complex products.</h2>
            <p className="section-copy max-w-xl">{profile.summary}</p>

            <div className="glass-chip space-y-2 rounded-2xl border p-4 sm:p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Quick Summary</p>
              <p className="text-sm leading-7 text-slate-200">{profile.recruiterSummary}</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="panel panel-hover spotlight-border rounded-2xl p-4"
              >
                <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-cyan-200/90">Metric</p>
                <p className="font-display text-2xl font-semibold leading-none tracking-[-0.03em] text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                {stat.note && <p className="mt-1 text-xs leading-6 text-slate-500">{stat.note}</p>}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="panel spotlight-border mt-10 rounded-[24px] p-6 sm:p-8"
        >
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">What I build</p>
              <p className="mt-2 text-sm leading-7 text-slate-200">Secure, scalable products where backend architecture and AI features feel seamless to the end user.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">How I work</p>
              <p className="mt-2 text-sm leading-7 text-slate-200">I move from ambiguity to clarity fast, write maintainable code, and keep teams aligned through direct communication.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/15 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Best fit</p>
              <p className="mt-2 text-sm leading-7 text-slate-200">Product teams that want an engineer who can own backend depth and ship practical AI with confidence.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
