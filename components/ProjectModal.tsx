'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github } from 'lucide-react'
import { Project } from '@/lib/data'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="panel custom-scrollbar max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[24px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/8 p-6 sm:p-7">
              <div>
                {project.category && (
                  <span className="mb-4 inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-blue-300">
                    {project.category}
                  </span>
                )}
                <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-2 text-base text-slate-400 sm:text-lg">
                  {project.subtitle}
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full border border-white/8 p-2 text-slate-400 transition-colors duration-200 hover:bg-white/5 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6 p-6 sm:p-7">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[18px] border border-white/8 bg-white/[0.02] p-4 sm:p-5">
                  <h3 className="mb-4 text-xl font-semibold text-white">
                    Problem
                  </h3>
                  <p className="text-sm leading-7 text-slate-300 sm:text-base">
                    {project.problem}
                  </p>
                </div>
                <div className="rounded-[18px] border border-white/8 bg-white/[0.02] p-4 sm:p-5">
                  <h3 className="mb-4 text-xl font-semibold text-white">
                    Solution
                  </h3>
                  <p className="text-sm leading-7 text-slate-300 sm:text-base">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">
                  My Role
                </h3>
                <p className="mb-5 text-sm leading-7 text-slate-300 sm:text-base">
                  {project.role}
                </p>
                
                <h4 className="mb-4 text-lg font-semibold text-white">
                  Key Impact:
                </h4>
                <ul className="space-y-2.5">
                  {project.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 sm:text-base">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 border-t border-white/8 pt-5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-button"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary-button"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
