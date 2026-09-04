'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { experiences, projects } from '@/lib/data'
import { ExperienceCard } from './ExperienceCard'
import { ProjectTile } from './ProjectTile'
import { ProjectModal } from './ProjectModal'
import { Project } from '@/lib/data'

export function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="work" className="section-shell">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl"
        >
          <span className="section-kicker">Experience and Projects</span>
          <h2 className="section-title mt-5">Selected work with clear delivery outcomes.</h2>
          <p className="section-copy mt-5">
            Real production responsibilities, technical scope, and practical impact.
          </p>
        </motion.div>

        <div>
          <div className="mb-6 flex items-center justify-between gap-4">
            <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">Experience</h3>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Timeline</span>
          </div>

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">Selected Projects</h3>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Case Studies</span>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectTile
                key={project.id}
                project={project}
                index={index}
                onClick={() => openProjectModal(project)}
              />
            ))}
          </div>
        </div>

        <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeProjectModal} />
      </div>
    </section>
  )
}
