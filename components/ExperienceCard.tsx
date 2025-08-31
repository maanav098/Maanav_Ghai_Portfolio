'use client'

import { motion } from 'framer-motion'
import { formatDate } from '@/lib/utils'
import { Experience } from '@/lib/data'
import { cn } from '@/lib/utils'

interface ExperienceCardProps {
  experience: Experience
  index: number
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card p-6 hover:shadow-lg transition-all duration-200"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
            {experience.position}
          </h3>
          <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-1">
            {experience.company}
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span>{formatDate(experience.startDate)} - {formatDate(experience.endDate)}</span>
            <span>•</span>
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <ul className="space-y-2">
          {experience.description.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
              <span className="text-blue-500 mt-2 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Metrics */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
        <div className="flex flex-wrap gap-2">
          {experience.metrics.map((metric, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm font-medium rounded-full border border-green-200 dark:border-green-800"
            >
              {metric}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
