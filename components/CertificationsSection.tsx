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
          className="mb-10 max-w-3xl"
        >
          <span className="section-kicker">Certifications</span>
          <h2 className="section-title mt-5">Proof of curiosity backed by fundamentals.</h2>
          <p className="section-copy mt-4">These reinforce breadth while day-to-day work stays focused on product delivery.</p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="panel rounded-[18px] p-5"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{item.issuer}</p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.02em] text-white">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}