'use client'

import { motion } from 'framer-motion'
import { formatDate } from '@/lib/utils'
import { Experience } from '@/lib/data'
import { ArrowUpRight } from 'lucide-react'

interface ExperienceCardProps {
  experience: Experience
  index: number
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="panel rounded-[32px] p-7 sm:p-8"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              {experience.isCurrentRole && (
                <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                  Current Role
                </span>
              )}
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-400">
                {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
              </span>
            </div>

          <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
            {experience.position}
          </h3>
          <p className="mt-3 inline-flex items-center gap-2 text-base font-medium text-blue-300">
            {experience.company}
            <ArrowUpRight className="h-4 w-4" />
          </p>

          <p className="mt-3 text-sm text-slate-500">{experience.location}</p>

          <div className="mt-6 space-y-3">
            {experience.description.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                <p className="text-base leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

          <div className="md:max-w-sm">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Evidence</p>
            <div className="mt-4 grid gap-3">
            {experience.metrics.map((metric, i) => (
              <div
                key={i}
                  className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-sm font-medium text-slate-200"
              >
                {metric}
              </div>
            ))}
            </div>
          </div>
        </div>

        {experience.highlights && experience.highlights.length > 0 && (
          <div className="rounded-[28px] border border-blue-400/12 bg-blue-500/[0.04] p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-blue-300">Why this experience matters</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {experience.highlights.map((highlight) => (
                <p key={highlight} className="text-sm leading-7 text-slate-300">{highlight}</p>
              ))}
            </div>
          </div>
        )}

        {experience.technologies && experience.technologies.length > 0 && (
          <div className="border-t border-white/8 pt-6">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
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
