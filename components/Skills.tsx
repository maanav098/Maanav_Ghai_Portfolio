'use client'

import { motion } from 'framer-motion'
import { capabilityPillars, skills } from '@/lib/data'

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl"
        >
          <span className="section-kicker">Skills</span>
          <h2 className="section-title mt-6">Skills grouped the way hiring teams actually evaluate candidates.</h2>
          <p className="section-copy mt-6">Instead of a tag dump, this section shows the main capability areas that define how I contribute across AI, backend systems, frontend delivery, and engineering fundamentals.</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {capabilityPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="panel rounded-[32px] p-7 sm:p-8"
            >
              <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">{pillar.title}</h3>
              <p className="mt-3 text-base leading-8 text-slate-400">{pillar.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {pillar.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="panel panel-hover rounded-[30px] p-7"
            >
              <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                {skillCategory.category}
              </h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {skillCategory.items.map((skill) => (
                  <span
                    key={skill}
                    className="tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
