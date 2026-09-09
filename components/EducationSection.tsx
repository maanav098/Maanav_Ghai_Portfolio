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
          className="mb-10 max-w-3xl"
        >
          <span className="section-kicker">Education</span>
          <h2 className="section-title mt-5">Academic foundation with a bias toward building.</h2>
          <p className="section-copy mt-4">My formal base is computer science, strengthened by real enterprise and product execution.</p>
        </motion.div>

        <div className="grid gap-4">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="panel panel-hover spotlight-border rounded-[22px] p-5 sm:p-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-cyan-200/90">Academic Base</p>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white">{item.school}</h3>
                  <p className="mt-2 text-base text-slate-200">{item.degree} in {item.field}</p>
                  {item.gpa && <p className="mt-2 text-sm text-slate-500">{item.gpa}</p>}
                </div>
                <div className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-cyan-100">
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