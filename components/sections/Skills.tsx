'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { capabilityPillars, skills } from '@/lib/data'
import { SectionHeader, fadeUp, stagger } from '@/components/sections/SectionHeader'
import { TiltCard } from '@/components/ui/TiltCard'

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(skills[0].category)
  const activeGroup = skills.find((group) => group.category === activeCategory) ?? skills[0]

  return (
    <section id="skills" className="section-shell section-atmosphere">
      <div className="section-inner">
        <SectionHeader
          kicker="Skills"
          title="Capabilities built for real product environments."
          copy="A practical blend of AI integration, backend depth, and frontend delivery for production systems."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid gap-4 lg:grid-cols-2"
        >
          {capabilityPillars.map((pillar) => (
            <motion.div key={pillar.title} variants={fadeUp} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
              <TiltCard max={4} className="panel panel-hover rounded-[22px] p-5">
                <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-200">{pillar.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {pillar.skills.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="panel mt-8 rounded-[22px] p-5 sm:p-6"
        >
          <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-white">Tooling and stack</h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((group) => (
              <button
                key={group.category}
                type="button"
                data-active={activeCategory === group.category}
                onClick={() => setActiveCategory(group.category)}
                className="tab-pill"
              >
                {group.category}
              </button>
            ))}
          </div>

          <motion.div
            key={activeGroup.category}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 flex flex-wrap gap-2 rounded-2xl border border-white/12 bg-black/20 p-4"
          >
            {activeGroup.items.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
