'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, Play, Code, BarChart3 } from 'lucide-react'
import { Project } from '@/lib/data'
import { cn } from '@/lib/utils'
import { useTheme } from '@/contexts/ThemeContext'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { theme } = useTheme()
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
            className="bg-white dark:bg-black rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-gray-200 dark:border-gray-800">
              <div>
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">
                  {project.subtitle}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Problem
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Solution
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Role & Impact */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  My Role
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-base leading-relaxed">
                  {project.role}
                </p>
                
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                  Key Impact:
                </h4>
                <ul className="space-y-3">
                  {project.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-base">
                      <span className="text-[#0071e3] dark:text-[#2997ff] mt-1 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200 dark:border-gray-800">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-medium"
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
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0071e3] dark:bg-[#2997ff] text-white rounded-full hover:bg-[#0077ed] dark:hover:bg-[#409cff] transition-all duration-300 font-medium"
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
