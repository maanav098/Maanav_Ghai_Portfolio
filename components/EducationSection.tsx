'use client'

import { motion } from 'framer-motion'
import { education } from '@/lib/data'
import { formatDate } from '@/lib/utils'

export function EducationSection() {
  return (
    <section id="education" className="section-shell">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <span className="section-kicker">Education</span>
          <h2 className="section-title mt-6">Academic foundation with a strong bias toward building.</h2>
          <p className="section-copy mt-6">My formal base is computer science. The real differentiator has been applying that foundation inside enterprise software, AI systems, and product delivery.</p>
        </motion.div>

        <div className="grid gap-6">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="panel panel-hover rounded-[32px] p-8"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-white">{item.school}</h3>
                  <p className="mt-3 text-lg text-slate-300">{item.degree} in {item.field}</p>
                  {item.gpa && <p className="mt-3 text-sm text-slate-500">{item.gpa}</p>}
                </div>
                <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-400">
                  {formatDate(item.startDate)} - {formatDate(item.endDate)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}