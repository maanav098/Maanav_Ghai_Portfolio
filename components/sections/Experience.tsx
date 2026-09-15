'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { experiences, stats } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import { SectionHeader, fadeUp, stagger } from '@/components/sections/SectionHeader'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

export function Experience() {
  return (
    <div className="section-inner">
        <SectionHeader
          kicker="Experience"
          title="Work history with measurable outcomes."
          copy="Focused on shipping production-grade systems, balancing architecture quality with delivery speed."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="panel rounded-[20px] p-4 text-center sm:p-5"
            >
              <AnimatedCounter
                value={stat.value}
                className="block font-display text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl"
              />
              <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-slate-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="relative grid gap-2 pl-8 sm:pl-9"
        >
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative pb-8 last:pb-0"
            >
              {index !== experiences.length - 1 && <span className="timeline-rail" />}
              <span className="timeline-dot absolute -left-8 top-1.5 sm:-left-9" />

              <div className="panel panel-hover spotlight-border rounded-[22px] p-5 sm:p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      {experience.isCurrentRole && (
                        <span className="rounded-full border border-cyan-300/35 bg-cyan-300/14 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100">
                          Current Role
                        </span>
                      )}
                      <span className="rounded-full border border-white/16 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300">
                        {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-white">
                      {experience.position}
                    </h3>
                    <p className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-cyan-100">
                      {experience.company}
                      <ArrowUpRight className="h-4 w-4" />
                    </p>
                    <p className="mt-2 text-sm text-slate-300">{experience.location}</p>
                  </div>

                  <div className="grid gap-2 md:max-w-[22rem]">
                    {experience.metrics.slice(0, 3).map((metric) => (
                      <span key={metric} className="rounded-xl border border-white/12 bg-black/20 px-3 py-2 text-xs text-slate-200 sm:text-sm">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="mt-4 grid gap-2">
                  {experience.description.slice(0, 2).map((point) => (
                    <li key={point} className="text-sm leading-7 text-slate-200">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
    </div>
  )
}
