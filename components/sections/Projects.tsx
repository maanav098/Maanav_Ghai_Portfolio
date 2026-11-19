'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, FileText, Github, Sparkles } from 'lucide-react'
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
        title="Projects built around real workflows."
        copy="A selected portfolio of AI, backend, and machine-learning work. Live links are included where a public deployment exists."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => {
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col"
            >
              <TiltCard max={4} className="group relative h-full overflow-hidden rounded-[24px] border border-white/12 p-1">
                <div
                  className="relative flex h-full min-h-[270px] flex-col overflow-hidden rounded-[20px] p-5 sm:p-6"
                  style={{ background: gradients[index % gradients.length] }}
                >
                  {project.image && (
                    <div
                      className="pointer-events-none absolute inset-0 bg-cover bg-top opacity-[0.08] transition-opacity duration-700 ease-out group-hover:opacity-20"
                      style={{ backgroundImage: `url(${project.image})` }}
                      aria-hidden="true"
                    />
                  )}

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-cyan-100">
                      {project.category ?? 'Project'}
                    </span>
                    <Sparkles className="h-5 w-5 text-cyan-200/80" />
                  </div>

                  {project.image && (
                    <div className="group/mockup relative z-10 mt-5 overflow-hidden rounded-xl border border-white/15 bg-black/50 shadow-2xl transition-all duration-300 hover:border-cyan-400/50">
                      <div className="flex items-center justify-between border-b border-white/10 bg-slate-950/80 px-3 py-1.5 backdrop-blur-sm">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-rose-500/70" />
                          <span className="h-2 w-2 rounded-full bg-amber-500/70" />
                          <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
                        </div>
                        <span className="truncate font-mono text-[10px] text-slate-400">
                          {project.demo ? project.demo.replace('https://', '') : project.title.toLowerCase() + '.app'}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                          Live UI
                        </span>
                      </div>
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                        <Image
                          src={project.image}
                          alt={`${project.title} live interface preview`}
                          width={600}
                          height={375}
                          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover/mockup:scale-105"
                          loading="lazy"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                    </div>
                  )}

                  <div className="relative z-10 mt-6 flex flex-1 flex-col">
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-cyan-200/90">
                      {project.subtitle}
                    </p>
                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-200">
                      {project.description}
                    </p>

                    <dl className="mt-5 grid gap-2.5 text-xs leading-5 text-slate-200">
                      {[
                        ['Problem', project.problem],
                        ['Solution', project.solution],
                        ['Stack', project.tech.join(' · ')],
                        ['Result', project.impact?.[0]],
                      ].map(([label, content]) => content ? (
                        <div key={label} className="grid gap-1 rounded-xl border border-white/10 bg-black/20 p-3 sm:grid-cols-[4.5rem_1fr] sm:gap-3">
                          <dt className="font-semibold uppercase tracking-[0.12em] text-cyan-100">{label}</dt>
                          <dd>{content}</dd>
                        </div>
                      ) : null)}
                    </dl>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="primary-button min-h-11 px-4 py-2 text-sm"
                        >
                          <ExternalLink aria-hidden="true" className="h-4 w-4" />
                          Live demo
                        </a>
                      ) : (
                        <span className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-4 py-2 text-xs text-slate-400">
                          No public live demo
                        </span>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="secondary-button min-h-11 px-4 py-2 text-sm"
                        >
                          <Github aria-hidden="true" className="h-4 w-4" />
                          View repository
                          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                        </a>
                      )}
                      {project.sourcePrivate && (
                        <span className="inline-flex min-h-11 items-center rounded-full border border-white/15 px-4 py-2 text-xs text-slate-400">
                          Source private
                        </span>
                      )}
                      {project.caseStudy && (
                        <a href={project.caseStudy} className="secondary-button min-h-11 px-4 py-2 text-sm">
                          <FileText aria-hidden="true" className="h-4 w-4" />
                          Case study
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.article>
          )
        })}
      </div>
    </div>
  )
}
