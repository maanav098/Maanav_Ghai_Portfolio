'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { capabilityPillars, skills } from '@/lib/data'

const Scene3D = dynamic(() => import('@/components/3d/Scene3D'), { ssr: false })
const SkillOrbs = dynamic(() => import('@/components/3d/SkillOrbs'), { ssr: false })

export function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="panel spotlight-border mb-8 grid gap-6 overflow-hidden rounded-[24px] p-4 sm:p-6 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="space-y-4">
            <span className="section-kicker">Interactive Skill Cloud</span>
            <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
              Explore core skills in a live 3D scene.
            </h3>
            <p className="text-sm leading-7 text-slate-300 sm:text-base">
              Hover any orb to reveal the stack. Motion responds to your cursor so the scene feels alive while keeping controls simple.
            </p>

            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/8 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-100">Focused skill</p>
              <p className="mt-2 font-display text-xl tracking-[-0.02em] text-white sm:text-2xl">
                {activeSkill ?? 'Hover an orb to inspect'}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Responsive', 'Accessible fallback', 'Pointer-reactive', 'Performance-aware'].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative h-[310px] overflow-hidden rounded-[20px] border border-white/12 bg-gradient-to-br from-slate-950/80 via-cyan-950/35 to-slate-950/80 sm:h-[360px]">
            <Scene3D
              className="h-full w-full"
              performance="medium"
              fallback={
                <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_65%)] px-6 text-center text-sm text-slate-200">
                  3D scene is unavailable on this device. Skills remain fully accessible below.
                </div>
              }
            >
              <SkillOrbs theme="dark" onSkillChange={setActiveSkill} />
            </Scene3D>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent p-3 text-center text-xs uppercase tracking-[0.14em] text-slate-300">
              Hover orbs to inspect skills
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-2">
          {capabilityPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="panel panel-hover spotlight-border rounded-[22px] p-5 sm:p-6"
            >
              <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-cyan-200/90">Capability 0{index + 1}</p>
              <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">{pillar.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {pillar.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="panel spotlight-border mt-8 rounded-[22px] p-5 sm:p-6"
        >
          <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-white">Tooling and stack</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {skills.map((skillCategory) => (
              <div key={skillCategory.category} className="rounded-2xl border border-white/10 bg-black/15 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{skillCategory.category}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {skillCategory.items.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
