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
    <section id="work" className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="py-32 sm:py-40"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white mb-20 text-center">
            Experience
          </h2>

          <div className="space-y-12 max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="py-32 sm:py-40"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white mb-20 text-center">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <ProjectTile
                key={project.id}
                project={project}
                index={index}
                onClick={() => openProjectModal(project)}
              />
            ))}
          </div>
        </motion.div>

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeProjectModal}
        />
      </div>
    </section>
  )
}
