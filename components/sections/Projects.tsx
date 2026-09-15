'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Sparkles } from 'lucide-react'
import { projects } from '@/lib/data'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { TiltCard } from '@/components/ui/TiltCard'

const gradients = [
  'radial-gradient(circle at 24% 20%, rgba(34,211,238,0.38), transparent 46%), radial-gradient(circle at 78% 82%, rgba(245,158,11,0.22), transparent 48%), linear-gradient(150deg,#061126 0%,#0a1a35 60%,#040b18 100%)',
  'radial-gradient(circle at 76% 18%, rgba(245,158,11,0.3), transparent 46%), radial-gradient(circle at 20% 84%, rgba(34,211,238,0.26), transparent 48%), linear-gradient(150deg,#0a0f22 0%,#141026 60%,#050810 100%)',
]

export function Projects() {
  return (
    <div className="section-inner">
      <SectionHeader
        kicker="Projects"
        title="Featured work, shipped end to end."
        copy="Two production-minded builds that show how I connect AI capability to real user workflows."
      />

      <div className="grid gap-16 sm:gap-20">
        {projects.map((project, index) => {
          const reversed = index % 2 === 1
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className={`grid gap-8 lg:grid-cols-2 lg:items-center ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <TiltCard max={5} className="relative overflow-hidden rounded-[28px] border border-white/12 p-1">
                <div
                  className="flex aspect-[4/3] w-full flex-col justify-between rounded-[24px] p-6 sm:p-8"
                  style={{ background: gradients[index % gradients.length] }}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-cyan-100">
                      {project.category ?? 'Project'}
                    </span>
                    <Sparkles className="h-5 w-5 text-cyan-200/80" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[11px] font-medium text-slate-100 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>

              <div>
                <h3 className="display-spotlight">{project.title}</h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-cyan-200/90 sm:text-base">
                  {project.subtitle}
                </p>
                <p className="mt-5 text-sm leading-8 text-slate-200 sm:text-base">{project.description}</p>

                <div className="mt-6 grid gap-2">
                  {project.impact.slice(0, 3).map((point) => (
                    <div key={point} className="flex items-start gap-2 text-sm leading-7 text-slate-200">
                      <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-button mt-7 inline-flex"
                  >
                    <Github className="h-5 w-5" />
                    View Repository
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.article>
          )
        })}
      </div>
    </div>
  )
}
