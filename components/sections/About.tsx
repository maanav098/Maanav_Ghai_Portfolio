'use client'

import { motion } from 'framer-motion'
import { profile } from '@/lib/data'
import { fadeUp, stagger } from '@/components/sections/SectionHeader'
import { TiltCard } from '@/components/ui/TiltCard'

const highlights = [
  { value: '8', label: 'Microservices Built / Led' },
  { value: '95%', label: 'Reporting Time Reduced' },
  { value: '1M+', label: 'Records Handled' },
]

const bring = [
  'Full-stack product engineering',
  'Java + Spring Boot',
  'RAG + LLM integrations',
  'Secure backend systems',
  'Clean architecture',
  'Practical AI delivery',
  'API design and ownership',
  'Testing and reliability',
]

const interests = [
  'System design',
  'Backend architecture',
  'AI product work',
  'Developer tooling',
  'Open-source systems',
  'Data-driven products',
]

export function About() {
  return (
    <section id="about" className="section-shell section-atmosphere">
      <div className="section-inner">
        <div className="mb-8">
          <div className="section-kicker">About</div>
          <h2 className="mt-6 max-w-5xl font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-[5rem] lg:leading-[0.9]">
            I turn messy requirements into tools people can trust.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
          <div className="space-y-5">
            <p className="max-w-4xl text-lg leading-8 text-slate-200 sm:text-xl">
              I engineer practical software that connects backend systems, product thinking, and real-world
              problem solving. My work spans Java, Spring Boot, microservices, secure APIs, and AI-assisted
              experiences that are grounded in the way teams actually operate.
            </p>

            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="panel rounded-[20px] p-4 sm:p-5">
                  <div className="font-display text-3xl font-semibold tracking-[-0.05em] text-white">{item.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-300">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="panel rounded-[24px] p-5 sm:p-6">
              <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">Why I build</h3>
              <p className="mt-3 text-base leading-8 text-slate-200">
                I enjoy building tools that make complex systems understandable and usable. The strongest software
                is not just technically sound; it helps people move faster, make better decisions, and operate with
                more clarity. That is the lens I bring to backend work, AI experimentation, and product delivery.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-200">
                My goal is simple: create systems that are reliable in production, useful in the real world, and
                grounded in measurable impact rather than buzzwords.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }}>
              <motion.div variants={fadeUp} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
                <div className="panel rounded-[22px] p-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-200/80">What I bring</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {bring.map((item) => (
                      <span key={item} className="tag">{item}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
              <TiltCard className="panel rounded-[22px] p-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-200/80">Interests</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {interests.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
