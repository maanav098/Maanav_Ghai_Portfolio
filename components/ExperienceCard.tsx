'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { formatDate } from '@/lib/utils'
import { Experience } from '@/lib/data'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

interface ExperienceCardProps {
  experience: Experience
  index: number
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const visibleDescription = isExpanded ? experience.description : experience.description.slice(0, 3)
  const visibleMetrics = isExpanded ? experience.metrics : experience.metrics.slice(0, 3)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="panel panel-hover spotlight-border rounded-[22px] p-5 sm:p-6"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-2.5">
              {experience.isCurrentRole && (
                <span className="rounded-full border border-cyan-300/35 bg-cyan-300/14 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100">
                  Current Role
                </span>
              )}
              <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300">
                {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
              </span>
            </div>

          <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-white sm:text-[1.65rem]">
            {experience.position}
          </h3>
          <p className="mt-1.5 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 sm:text-base">
            {experience.company}
            <ArrowUpRight className="h-4 w-4" />
          </p>

          <p className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-500 sm:text-sm sm:normal-case sm:tracking-normal">{experience.location}</p>

          <div className="mt-4 space-y-2.5">
            {visibleDescription.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}

            {experience.description.length > 3 && (
              <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition-colors hover:text-cyan-100"
              >
                {isExpanded ? 'Show less' : 'Show full role details'}
                <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
            )}
          </div>
        </div>

          <div className="md:max-w-[20rem]">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Evidence</p>
            <div className="mt-3 grid gap-2">
            {visibleMetrics.map((metric, i) => (
              <div
                key={i}
                  className="rounded-lg border border-white/14 bg-white/[0.04] px-3 py-2 text-xs text-slate-100 sm:text-sm"
              >
                {metric}
              </div>
            ))}

            {!isExpanded && experience.metrics.length > 3 && (
              <p className="text-xs text-slate-500">+{experience.metrics.length - 3} more outcomes</p>
            )}
            </div>
          </div>
        </div>

        {experience.highlights && experience.highlights.length > 0 && (
          <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] p-3.5">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-100">Why this matters</p>
            <div className="mt-3 grid gap-2.5 md:grid-cols-2">
              {experience.highlights.map((highlight) => (
                <p key={highlight} className="text-sm leading-6 text-slate-300">{highlight}</p>
              ))}
            </div>
          </div>
        )}

        {experience.technologies && experience.technologies.length > 0 && (
          <div className="border-t border-white/8 pt-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <span key={technology} className="tag">
                  {technology}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
