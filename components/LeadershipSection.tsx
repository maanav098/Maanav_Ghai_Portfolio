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
          className="mb-16 max-w-3xl"
        >
          <span className="section-kicker">Leadership</span>
          <h2 className="section-title mt-6">Collaboration is a real skill, not a filler line.</h2>
          <p className="section-copy mt-6">I enjoy building with teams, not just inside codebases. Leadership matters because delivery gets better when communication and ownership scale with the work.</p>
        </motion.div>

        <div className="grid gap-6">
          {leadership.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="panel spotlight-border rounded-[32px] p-8 sm:p-10"
            >
              <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{item.organization}</p>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-white">{item.role}</h3>
                </div>
                <div>
                  <p className="text-base leading-8 text-slate-300">{item.description}</p>
                  <p className="mt-5 text-base leading-8 text-blue-300">{item.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}