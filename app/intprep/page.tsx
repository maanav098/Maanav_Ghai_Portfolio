import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IntPrep Case Study | Maanav Ghai',
  description: 'How IntPrep grounds AI mock interviews in candidate resumes and company context, and how the application is deployed.',
  alternates: {
    canonical: '/intprep',
  },
}

const architectureSteps = [
  {
    title: 'Candidate context',
    detail: 'Resume, target role, and company context sourced through cached web search.',
  },
  {
    title: 'React + TypeScript app',
    detail: 'The interview and recruiter experiences run in a browser SPA.',
  },
  {
    title: 'FastAPI + Pydantic',
    detail: 'Coordinates AI question generation, resume checks, interview sessions, and recruiter workflows.',
  },
  {
    title: 'Grounded interview tools',
    detail: 'Whisper speech-to-text, sandboxed coding, and checks that match resume references to the uploaded resume text.',
  },
  {
    title: 'SQLite + deployment',
    detail: 'Idempotent SQLite migrations; Docker containers behind Caddy on AWS EC2 with automatic TLS.',
  },
]

export default function IntPrepCaseStudy() {
  return (
    <article className="section-shell min-h-screen pt-32">
      <div className="section-inner max-w-5xl">
        <a href="/#work" className="secondary-button min-h-11 px-4 py-2 text-sm">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to projects
        </a>

        <header className="mt-10 max-w-4xl">
          <p className="section-kicker">Case Study · AI Product</p>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">
            IntPrep
          </h1>
          <p className="mt-4 text-xl leading-8 text-slate-200 sm:text-2xl">
            Interview practice grounded in the candidate’s own experience.
          </p>
          <p className="section-copy mt-5 max-w-3xl">
            I built IntPrep to make interview preparation more specific and trustworthy than generic question lists:
            it combines a candidate’s resume with role and company context, then checks generated resume references
            against the actual resume text.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://intprep.behavior.systems"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button min-h-11 px-4 py-2 text-sm"
            >
              Live demo <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/maanav098/Intprep.co"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button min-h-11 px-4 py-2 text-sm"
            >
              <Github aria-hidden="true" className="h-4 w-4" />
              Repository <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </header>

        <section className="mt-14">
          <h2 className="section-title">How the AI interview flow works</h2>
          <figure className="panel mt-6 rounded-[24px] p-5 sm:p-7" aria-label="IntPrep architecture flow">
            <ol className="grid gap-3 md:grid-cols-5">
              {architectureSteps.map((step, index) => (
                <li key={step.title} className="relative rounded-2xl border border-white/12 bg-black/20 p-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
                    Step {index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{step.detail}</p>
                  {index < architectureSteps.length - 1 ? (
                    <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-cyan-200 md:block" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
            <figcaption className="mt-4 text-sm leading-6 text-slate-400">
              Candidate context flows through the web app and API to grounded interview tools and persistent session data;
              the containers are served through Caddy on AWS EC2.
            </figcaption>
          </figure>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="panel rounded-[22px] p-5">
              <h3 className="font-display text-xl font-semibold text-white">Why build it</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Generic preparation often ignores what a candidate has actually done. IntPrep uses resume and
                company context to make practice more relevant, while making unsupported resume references easier to catch.
              </p>
            </div>
            <div className="panel rounded-[22px] p-5">
              <h3 className="font-display text-xl font-semibold text-white">What changed</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Across 25+ runs, the reported hallucinated-citation rate moved from 12% to 1.6%. Company-aware
                question sourcing uses cached web search.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-14 grid gap-4 md:grid-cols-2">
          <div className="panel rounded-[22px] p-5 sm:p-6">
            <h2 className="font-display text-2xl font-semibold text-white">Deployment</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              The app uses a FastAPI and Pydantic backend with a React and TypeScript SPA, SQLite with idempotent
              migrations, and Docker containers. It is deployed on AWS EC2 behind a Caddy reverse proxy with automatic TLS.
            </p>
          </div>
          <div className="panel rounded-[22px] p-5 sm:p-6">
            <h2 className="font-display text-2xl font-semibold text-white">What I’d improve next</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              I would expand the evaluation set beyond the current runs, add production observability for retrieval
              quality and latency, and give candidates clearer controls over transcript and resume retention.
            </p>
          </div>
        </section>

        <p className="mt-10 border-t border-white/10 pt-5 text-sm text-slate-400">
          Stack: FastAPI · React · TypeScript · Docker · AWS EC2 · SQLite · WorkOS · Whisper
        </p>
      </div>
    </article>
  )
}
