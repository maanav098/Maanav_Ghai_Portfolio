'use client'

import { motion } from 'framer-motion'
import { certifications } from '@/lib/data'

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-shell">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <span className="section-kicker">Certifications</span>
          <h2 className="section-title mt-6">Proof of curiosity backed by technical fundamentals.</h2>
          <p className="section-copy mt-6">These certifications are not the story by themselves, but they reinforce the areas where I keep sharpening breadth alongside practical product work.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="panel panel-hover rounded-[30px] p-7"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">{item.issuer}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-white">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}