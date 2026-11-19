'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Award,
  Briefcase,
  CheckCircle2,
  Code2,
  ExternalLink,
  LayoutDashboard,
  Maximize2,
  ShieldCheck,
  Sliders,
  Sparkles,
  X
} from 'lucide-react'

interface ShowcaseStep {
  id: string
  title: string
  tabLabel: string
  icon: typeof LayoutDashboard
  image: string
  badge: string
  summary: string
  bullets: string[]
}

const steps: ShowcaseStep[] = [
  {
    id: 'dashboard',
    title: 'Candidate Hub & Session Analytics',
    tabLabel: 'Dashboard',
    icon: LayoutDashboard,
    image: '/projects/intprep/dashboard.png',
    badge: 'Live Session Metrics',
    summary:
      'The central hub provides continuous session tracking, displaying completed interviews, score averages, role practice pathways, and stored resumes on file.',
    bullets: [
      'Tracks total interviews completed and multi-role performance metrics',
      'One-click launch for role tracks: Software Development Engineer, ML Engineer, Data Scientist',
      'Stored resume inventory with real-time extracted skill profiles'
    ]
  },
  {
    id: 'setup',
    title: 'Company & Role-Grounded Practice Setup',
    tabLabel: 'Practice Setup',
    icon: Sliders,
    image: '/projects/intprep/interview-setup.png',
    badge: 'Context-Aware Configurator',
    summary:
      'Instead of generic prompt lists, interviews are configured with company style presets (Google, Amazon, Microsoft, Meta, Startups) mapped to the candidate’s selected resume.',
    bullets: [
      'Company culture and rubric presets tailored to tier-1 enterprise and startup standards',
      'Granular difficulty and round length controls (e.g. 10 questions, ~30–50 mins)',
      'Category toggles for Technical Architecture, System Design, and Algorithmic Coding'
    ]
  },
  {
    id: 'interview',
    title: 'In-Browser Algorithmic Coding Workspace',
    tabLabel: 'Coding Sandbox',
    icon: Code2,
    image: '/projects/intprep/interview.png',
    badge: 'Multi-Language Environment',
    summary:
      'Integrated real-time coding sandbox allowing candidates to solve algorithmic problems with live stdin/stdout execution, constraints, and proctored interface.',
    bullets: [
      'Supports Python, JavaScript, TypeScript, Java, C++, and Go runtimes',
      'Algorithmic problem statements with test cases, examples, and edge-case validations',
      'Integrated speech-to-text via Whisper for explaining design decisions verbally'
    ]
  },
  {
    id: 'citations',
    title: 'Resume Citation Verification (Anti-Hallucination)',
    tabLabel: 'Citation Verification',
    icon: ShieldCheck,
    image: '/projects/intprep/citation-verification.png',
    badge: '12% → 1.6% Hallucination Rate',
    summary:
      'IntPrep’s core technical differentiator: verifying evaluator claims directly against extracted resume text to eliminate AI hallucinations and ensure honest evaluation.',
    bullets: [
      'Drastically reduced hallucinated citation rates from 12% to 1.6% across 25+ benchmark runs',
      'Cross-checks candidate responses against verified resume projects and milestones',
      'Highlights unsupported assertions for transparent recruiter and candidate auditing'
    ]
  },
  {
    id: 'feedback',
    title: 'Multi-Dimensional Evaluation & Seniority Leveling',
    tabLabel: 'Score & Feedback',
    icon: Award,
    image: '/projects/intprep/feedback.png',
    badge: 'Comprehensive Scoring',
    summary:
      'Detailed quantitative scoring breakdown across technical depth, communication, and estimated seniority level (e.g. SDE-2 Mid-Level with readiness indicators).',
    bullets: [
      'Separate scoring rubrics for Overall Score, Technical Depth, and Communication clarity',
      'Actionable diagnostics categorizing "What Worked" and "Where To Grow"',
      'Seniority leveling estimation with percentage readiness for the next tier'
    ]
  },
  {
    id: 'recruiter',
    title: 'Recruiter Screening & Role Matching',
    tabLabel: 'Recruiter Pipeline',
    icon: Briefcase,
    image: '/projects/intprep/recruiter-opening.png',
    badge: 'Hiring Workflow',
    summary:
      'Recruiter workflows connect role openings with stack-tagged criteria (Java, Python, AWS, Docker, Kubernetes) and AI-screened candidate evaluations.',
    bullets: [
      'Structured applicant matching based on required technical competency matrices',
      'Direct review of grounded candidate interviews and verifiable performance scores',
      'Streamlines initial technical screening without manual resume filtering bottlenecks'
    ]
  }
]

export function IntPrepGallery() {
  const [activeTab, setActiveTab] = useState<string>(steps[0].id)
  const [zoomImage, setZoomImage] = useState<string | null>(null)

  const activeStep = steps.find((s) => s.id === activeTab) || steps[0]
  const ActiveIcon = activeStep.icon

  return (
    <section className="mt-16">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="section-kicker">Interactive Product Showcase</span>
          <h2 className="section-title mt-2">Live Interface Walkthrough</h2>
          <p className="section-copy mt-2 max-w-2xl text-slate-300">
            Explore authentic captured screens from the live production deployment on{' '}
            <a
              href="https://intprep.behavior.systems"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
            >
              intprep.behavior.systems
            </a>
            .
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200 sm:self-auto">
          <Sparkles className="h-3.5 w-3.5" />
          Production V1.0
        </span>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {steps.map((step) => {
          const Icon = step.icon
          const isActive = step.id === activeTab
          return (
            <button
              key={step.id}
              onClick={() => setActiveTab(step.id)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-xl border px-4 py-2.5 text-xs font-medium transition-all ${
                isActive
                  ? 'border-cyan-400/50 bg-cyan-500/15 text-white shadow-[0_0_20px_rgba(34,211,238,0.25)]'
                  : 'border-white/10 bg-black/30 text-slate-400 hover:border-white/20 hover:text-slate-200'
              }`}
            >
              <Icon className={`h-4 w-4 ${isActive ? 'text-cyan-300' : 'text-slate-400'}`} />
              {step.tabLabel}
            </button>
          )
        })}
      </div>

      {/* Main Showcase Panel */}
      <div className="panel mt-4 overflow-hidden rounded-[24px] p-4 sm:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center"
          >
            {/* Visual Frame */}
            <div className="group/frame relative overflow-hidden rounded-2xl border border-white/15 bg-black/60 shadow-2xl">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between border-b border-white/10 bg-slate-950/80 px-4 py-2 backdrop-blur-md">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-0.5 font-mono text-[11px] text-slate-300">
                  <span className="text-cyan-400">https://</span>
                  <span>intprep.behavior.systems</span>
                </div>
                <button
                  onClick={() => setZoomImage(activeStep.image)}
                  className="rounded-md border border-white/10 p-1 text-slate-400 transition-colors hover:border-white/25 hover:text-white"
                  title="Expand screenshot"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Screenshot Image */}
              <div
                className="relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden bg-slate-950"
                onClick={() => setZoomImage(activeStep.image)}
              >
                <Image
                  src={activeStep.image}
                  alt={activeStep.title}
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover/frame:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-3 right-3 rounded-md border border-white/15 bg-black/60 px-2.5 py-1 text-[11px] font-medium text-slate-200 backdrop-blur-md">
                  Click to enlarge
                </span>
              </div>
            </div>

            {/* Explanation & Tech Details */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200">
                  <ActiveIcon className="h-3 w-3" />
                  {activeStep.badge}
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                {activeStep.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                {activeStep.summary}
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
                  Engineering Highlights
                </span>
                <ul className="mt-3 space-y-2.5">
                  {activeStep.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs leading-5 text-slate-200 sm:text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://intprep.behavior.systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button min-h-10 px-4 py-2 text-xs"
                >
                  Visit live feature <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
            onClick={() => setZoomImage(null)}
          >
            <div
              className="relative max-h-[92vh] max-w-6xl overflow-hidden rounded-2xl border border-white/20 bg-slate-950 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/90 px-4 py-2.5">
                <span className="font-mono text-xs text-slate-300">
                  IntPrep High-Resolution Screen Capture
                </span>
                <button
                  onClick={() => setZoomImage(null)}
                  className="rounded-lg p-1 text-slate-400 hover:bg-white/10 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="relative max-h-[82vh] overflow-auto">
                <Image
                  src={zoomImage}
                  alt="Expanded screenshot"
                  width={1920}
                  height={1200}
                  className="w-full object-contain"
                  unoptimized
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
