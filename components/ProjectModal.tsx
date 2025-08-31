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
            transition={{ duration: 0.2 }}
            className={cn(
              "rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto",
                             theme === 'dark' 
                 ? "bg-black border border-cyan-500/30" 
                 : "bg-white dark:bg-slate-900"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  {project.subtitle}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                    Problem
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                    Solution
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Role & Impact */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  My Role
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.role}
                </p>
                
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                  Key Impact:
                </h4>
                <ul className="space-y-2">
                  {project.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                      <span className="text-indigo-500 mt-2 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Demo Section */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                <h4 className="font-medium text-slate-900 dark:text-white mb-3">
                  Interactive Demo
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {project.demo && (
                                         <button className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-lg hover:from-indigo-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105">
                       <Play className="w-4 h-4" />
                       Live Demo
                     </button>
                  )}
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105">
                    <Code className="w-4 h-4" />
                    Code Walkthrough
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-200 transform hover:scale-105">
                    <BarChart3 className="w-4 h-4" />
                    Performance Metrics
                  </button>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
                {project.demo && (
                                     <a
                     href={project.demo}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200"
                   >
                     <ExternalLink className="w-4 h-4" />
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
