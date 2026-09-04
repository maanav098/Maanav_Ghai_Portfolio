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
          className="mb-16 max-w-3xl"
        >
          <span className="section-kicker">Experience and Projects</span>
          <h2 className="section-title mt-6">A clearer case for how I work, what I shipped, and why it matters.</h2>
          <p className="section-copy mt-6">This section is intentionally detailed. A strong hiring manager should be able to understand my progression, my technical range, and the business value behind the work without guessing.</p>
        </motion.div>

        <div>
          <div className="mb-8 flex items-center justify-between">
            <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-white">Experience</h3>
            <span className="text-sm uppercase tracking-[0.22em] text-slate-500">Detailed Timeline</span>
          </div>

          <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-white">Selected Projects</h3>
            <span className="text-sm uppercase tracking-[0.22em] text-slate-500">Built Outside Core Work</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
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

        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeProjectModal}
        />
      </div>
    </section>
  )
}
