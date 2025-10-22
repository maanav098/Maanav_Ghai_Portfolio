'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'

export function Skills() {
  return (
    <section id="skills" className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Skills
          </h2>
        </motion.div>

        {/* Minimal Grid View */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {skillCategory.category}
              </h3>
              <div className="space-y-2">
                {skillCategory.items.map((skill) => (
                  <p
                    key={skill}
                    className="text-base text-gray-600 dark:text-gray-400"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
