import { ArrowUpRight, Github } from 'lucide-react'
import { profile } from '@/lib/data'

const repositories = [
  {
    name: 'IntPrep',
    description: 'Resume-aware AI interview practice and recruiter screening.',
    href: 'https://github.com/maanav098/Intprep.co',
    language: 'FastAPI · React · TypeScript',
  },
  {
    name: 'RouteMate',
    description: 'A sales-team API with GPS-checked visits and idempotent orders.',
    href: 'https://github.com/maanav098/routemate',
    language: 'Bun · Hono · SQLite',
  },
  {
    name: 'Nexpend',
    description: 'OCR-assisted financial document tracking.',
    href: 'https://github.com/maanav098/Nexpend-AI',
    language: 'Python · React · Oracle',
  },
  {
    name: 'SmartSolve AI',
    description: 'A Gemini-powered multimodal assistant.',
    href: 'https://github.com/maanav098/SmartSolve-AI',
    language: 'React · TypeScript · Gemini',
  },
]

export function ContributionGraph() {
  return (
    <section id="contributions" className="section-shell section-atmosphere pt-12 sm:pt-16 lg:pt-20">
      <div className="section-inner">
        <div className="mb-10">
          <div className="section-kicker">GitHub</div>
          <h2 className="mt-6 max-w-5xl font-display text-4xl font-semibold tracking-[-0.07em] text-white sm:text-5xl lg:text-[5.25rem] lg:leading-[0.96]">
            Selected <span className="text-[#9d3a30]">repositories.</span>
          </h2>
          <p className="section-copy mt-5 max-w-2xl">
            A few public projects to explore without relying on a live contribution-graph request.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {repositories.map((repository) => (
            <a
              key={repository.name}
              href={repository.href}
              target="_blank"
              rel="noopener noreferrer"
              className="panel panel-hover spotlight-border group rounded-[20px] p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">{repository.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{repository.description}</p>
                  <p className="mt-3 text-xs font-medium text-cyan-100">{repository.language}</p>
                </div>
                <ArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0 text-slate-400 transition group-hover:text-white" />
              </div>
            </a>
          ))}
        </div>

        <a
          href={profile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="secondary-button mt-5"
        >
          <Github aria-hidden="true" className="h-4 w-4" />
          View all repositories
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
