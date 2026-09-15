'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { recruiterSignals, profile } from '@/lib/data'
import { SectionHeader, fadeUp, stagger } from '@/components/sections/SectionHeader'

export function Testimonials() {
  return (
    <section id="signals" className="section-shell">
      <div className="section-inner">
        <SectionHeader
          kicker="Why It Works"
          title="Signals recruiters and teams actually care about."
          copy={profile.recruiterSummary}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid gap-4 md:grid-cols-2"
        >
          {recruiterSignals.map((signal) => (
            <motion.div key={signal.title} variants={fadeUp} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
              <div className="quote-card">
                <Quote className="h-6 w-6 text-cyan-300/70" />
                <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.02em] text-white sm:text-xl">
                  {signal.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-200">{signal.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
