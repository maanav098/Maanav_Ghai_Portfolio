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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="group py-12 border-b border-gray-200 dark:border-gray-800 last:border-b-0"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div className="flex-1">
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-3 tracking-tight">
            {experience.position}
          </h3>
          <p className="text-lg font-medium text-[#0071e3] dark:text-[#2997ff] mb-4">
            {experience.company}
          </p>
          
          {/* Description */}
          <div className="space-y-2 mb-6">
            {experience.description.map((item, i) => (
              <p key={i} className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {item}
              </p>
            ))}
          </div>

          {/* Metrics */}
          <div className="flex flex-wrap gap-2">
            {experience.metrics.map((metric, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-500 md:text-right whitespace-nowrap">
          <div>{formatDate(experience.startDate)} - {formatDate(experience.endDate)}</div>
          <div className="mt-1">{experience.location}</div>
        </div>
      </div>
    </motion.div>
  )
}
