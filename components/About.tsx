'use client'

import { motion } from 'framer-motion'
import { stats } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
            About Me
          </h2>

          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 mb-12">
            <p>
              I'm a Full-Stack & AI Engineer who specializes in building performant, 
              secure, and user-friendly products. With experience across the entire 
              technology stack, I focus on creating clean architectures that scale 
              and deliver measurable business value.
            </p>
            
            <p>
              I work with clean code principles, prioritize measurable outcomes, 
              and believe in the power of collaboration. Whether it's optimizing 
              database queries for millisecond performance or implementing 
              enterprise-grade security practices, I approach every challenge 
              with a focus on clarity and results.
            </p>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
