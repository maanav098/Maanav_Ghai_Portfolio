'use client'

import { motion } from 'framer-motion'
import { Project } from '@/lib/data'

interface ProjectTileProps {
  project: Project
  index: number
  onClick: () => void
}

export function ProjectTile({ project, index, onClick }: ProjectTileProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      onClick={onClick}
      type="button"
      className="group text-left transition-all duration-500 focus-visible:outline-none w-full py-12 border-b border-gray-200 dark:border-gray-800 last:border-b-0"
    >
      <div className="space-y-4">
        {/* Header */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-2 tracking-tight group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-base text-gray-500 dark:text-gray-500">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-xs text-gray-500 dark:text-gray-500 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  )
}
