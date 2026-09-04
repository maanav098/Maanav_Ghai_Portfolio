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
      className="panel panel-hover group w-full rounded-[32px] p-7 text-left transition-all duration-500 focus-visible:outline-none sm:p-8"
    >
      <div className="space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            {project.category && (
              <span className="mb-4 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-500">
                {project.category}
              </span>
            )}
          <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-blue-300 sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 text-base text-slate-500">
            {project.subtitle}
          </p>
          </div>
          <span className="rounded-full border border-white/10 p-2 text-slate-400 transition-colors group-hover:text-white">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <p className="line-clamp-3 text-base leading-7 text-slate-300">
          {project.description}
        </p>

        <div className="grid gap-4 rounded-[26px] border border-white/8 bg-black/20 p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Problem</p>
            <p className="mt-2 text-sm leading-7 text-slate-300 line-clamp-3">{project.problem}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Outcome</p>
            <p className="mt-2 text-sm leading-7 text-slate-300 line-clamp-3">{project.impact[0]}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="tag"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  )
}
