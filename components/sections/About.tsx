'use client'

import { motion } from 'framer-motion'
import { profile } from '@/lib/data'
import { SectionHeader, fadeUp, stagger } from '@/components/sections/SectionHeader'
import { TiltCard } from '@/components/ui/TiltCard'

const pillars = [
  {
    title: 'What I build',
    value: 'Production systems where backend reliability and AI capability work together without friction.',
  },
  {
    title: 'How I work',
    value: 'Strong architecture decisions, clear communication, and a bias for shipping practical outcomes.',
  },
  {
    title: 'Best fit',
    value: 'Teams building serious product experiences that need technical depth and ownership.',
  },
]

export function About() {
  return (
    <section id="about" className="section-shell section-atmosphere">
      <div className="section-inner">
        <SectionHeader
          kicker="About"
          title="Realistic engineering impact, not inflated claims."
          copy={profile.summary}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid gap-4 md:grid-cols-3"
        >
          {pillars.map((item) => (
            <motion.div key={item.title} variants={fadeUp} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
              <TiltCard className="panel panel-hover rounded-[22px] p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/90">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">{item.value}</p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
