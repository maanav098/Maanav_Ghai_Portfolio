'use client'

import { motion } from 'framer-motion'
import { stats, profile } from '@/lib/data'

const loopItems = [
  ...profile.focusAreas,
  'Product-minded execution',
  'Clear system communication',
  'Enterprise-grade delivery',
]

export function SignalStrip() {
  const tickerItems = [...loopItems, ...loopItems]

  return (
    <section className="section-shell section-atmosphere py-8 sm:py-10" aria-label="Delivery signals">
      <div className="section-inner">
        <div className="panel spotlight-border rounded-[24px] p-4 sm:p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="section-kicker">Delivery Signals</p>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Premium Profile Snapshot</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/14 bg-black/20 px-4 py-3"
              >
                <p className="font-display text-2xl font-semibold tracking-[-0.03em] text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="edge-fade-mask mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] py-3">
            <motion.div
              className="flex w-max gap-2.5 px-3"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
            >
              {tickerItems.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="glass-chip inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium text-slate-100"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
