'use client'

import { motion } from 'framer-motion'
import { profile, stats } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]"
        >
          <div className="space-y-6">
            <span className="section-kicker">About</span>
            <h2 className="section-title text-left">The version of me a strong engineering org would want to meet.</h2>
            <p className="section-copy max-w-xl">
              {profile.summary}
            </p>
            <div className="rounded-[30px] border border-blue-400/12 bg-blue-500/[0.06] p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-blue-300">Recruiter Read</p>
              <p className="mt-3 text-base leading-8 text-slate-200">{profile.recruiterSummary}</p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="panel panel-hover rounded-[30px] p-6"
              >
                <p className="font-display text-4xl font-semibold tracking-[-0.05em] text-white">{stat.value}</p>
                <p className="mt-3 text-base font-medium text-slate-200">{stat.label}</p>
                {stat.note && <p className="mt-2 text-sm leading-7 text-slate-500">{stat.note}</p>}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="panel mt-12 rounded-[34px] p-8 sm:p-10"
        >
          <div className="grid gap-5 lg:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">What I build</p>
              <p className="mt-3 text-base leading-8 text-slate-300">Enterprise-grade products where AI capability needs proper backend design, secure APIs, and a usable frontend surface.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Why I stand out</p>
              <p className="mt-3 text-base leading-8 text-slate-300">I am strongest when the problem spans architecture, implementation, and product clarity instead of staying inside one layer of the stack.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Best fit</p>
              <p className="mt-3 text-base leading-8 text-slate-300">Teams building serious AI products, strong internal platforms, or full-stack systems where measurable delivery is valued more than noise.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
