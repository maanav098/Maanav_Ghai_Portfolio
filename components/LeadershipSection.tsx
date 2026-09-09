'use client'

import { motion } from 'framer-motion'
import { leadership } from '@/lib/data'

export function LeadershipSection() {
  return (
    <section id="leadership" className="section-shell">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl"
        >
          <span className="section-kicker">Leadership</span>
          <h2 className="section-title mt-5">Collaboration as an execution multiplier.</h2>
          <p className="section-copy mt-4">Leadership here is practical: clearer communication, better coordination, and stronger delivery outcomes.</p>
        </motion.div>

        <div className="grid gap-4">
          {leadership.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="panel panel-hover spotlight-border rounded-[22px] p-5 sm:p-6"
            >
              <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{item.organization}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-white">{item.role}</h3>
                </div>
                <div>
                  <p className="text-sm leading-7 text-slate-300 sm:text-base">{item.description}</p>
                  <p className="mt-4 rounded-xl border border-cyan-300/20 bg-cyan-300/8 px-3 py-2 text-sm leading-7 text-cyan-100 sm:text-base">{item.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}