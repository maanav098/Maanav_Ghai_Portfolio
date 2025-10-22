'use client'

import { motion } from 'framer-motion'
import { stats } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">
            About
          </h2>

          <div className="space-y-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
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

          {/* Minimal Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-200 dark:border-gray-800"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500">
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
