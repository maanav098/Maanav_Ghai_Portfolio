'use client'

import { motion } from 'framer-motion'
import { Project } from '@/lib/data'
import { ArrowUpRight } from 'lucide-react'

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
      className="panel panel-hover spotlight-border group w-full rounded-[22px] p-5 text-left transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40 sm:p-6"
    >
      <div className="space-y-3.5">
        <div className="flex items-start justify-between gap-4">
          <div>
            {project.category && (
              <span className="mb-3 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-cyan-100">
                {project.category}
              </span>
            )}
          <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-cyan-200 sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            {project.subtitle}
          </p>
          </div>
          <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 p-2 text-cyan-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <p className="line-clamp-2 text-sm leading-6 text-slate-300">
          {project.description}
        </p>

        <p className="rounded-lg border border-white/16 bg-black/15 px-3 py-2 text-xs leading-6 text-slate-200 sm:text-sm">
          {project.impact[0]}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="tag"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="pt-0.5 text-sm font-medium text-cyan-200 transition-colors duration-300 group-hover:text-cyan-100">
          Explore case study
        </div>
      </div>
    </motion.button>
  )
}
