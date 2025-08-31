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
    <section id="work" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My professional journey and key projects that demonstrate my skills and impact.
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 text-center">
            Professional Experience
          </h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
