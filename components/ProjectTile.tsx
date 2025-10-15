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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={onClick}
      type="button"
  className="card p-6 text-left hover:shadow-lg transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <div className="space-y-4">
        {/* Header */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full border border-slate-200 dark:border-slate-700"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs rounded-full border border-slate-200 dark:border-slate-700">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Role */}
        <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {project.role}
          </span>
        </div>
      </div>
    </motion.button>
  )
}
