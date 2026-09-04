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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="panel custom-scrollbar max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[34px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/8 p-8">
              <div>
                {project.category && (
                  <span className="mb-4 inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-blue-300">
                    {project.category}
                  </span>
                )}
                <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                  {project.title}
                </h2>
                <p className="mt-2 text-lg text-slate-400">
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

            <div className="p-8 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="rounded-[28px] border border-white/8 bg-black/20 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-white">
                    Problem
                  </h3>
                  <p className="text-base leading-8 text-slate-300">
                    {project.problem}
                  </p>
                </div>
                <div className="rounded-[28px] border border-white/8 bg-black/20 p-6">
                  <h3 className="mb-4 text-xl font-semibold text-white">
                    Solution
                  </h3>
                  <p className="text-base leading-8 text-slate-300">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold text-white">
                  My Role
                </h3>
                <p className="mb-6 text-base leading-8 text-slate-300">
                  {project.role}
                </p>
                
                <h4 className="mb-4 text-lg font-semibold text-white">
                  Key Impact:
                </h4>
                <ul className="space-y-3">
                  {project.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-slate-300">
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

              <div className="flex flex-wrap gap-4 border-t border-white/8 pt-6">
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
