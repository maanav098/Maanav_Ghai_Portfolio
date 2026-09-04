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
          className="mb-10 max-w-3xl"
        >
          <span className="section-kicker">Skills</span>
          <h2 className="section-title mt-5">Capability areas that define how I contribute.</h2>
          <p className="section-copy mt-5">
            Focused on applied AI, backend reliability, frontend delivery, and engineering fundamentals.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-2">
          {capabilityPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="panel rounded-[18px] p-5 sm:p-6"
            >
              <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-400 sm:text-base">{pillar.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {pillar.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="panel rounded-[18px] p-5"
            >
              <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                {skillCategory.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skillCategory.items.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
