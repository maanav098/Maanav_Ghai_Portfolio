import { motion } from 'framer-motion'
import { capabilityPillars } from '@/lib/data'
import { SectionHeader, fadeUp, stagger } from '@/components/sections/SectionHeader'
import { TiltCard } from '@/components/ui/TiltCard'

export function Skills() {
  return (
    <section id="skills" className="section-shell section-atmosphere">
      <div className="section-inner">
        <SectionHeader
          kicker="Skills"
          title="Capabilities built for real product environments."
          copy="A practical blend of AI integration, backend depth, and frontend delivery for production systems."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid gap-4 lg:grid-cols-2"
        >
          {capabilityPillars.map((pillar) => (
            <motion.div key={pillar.title} variants={fadeUp} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
              <TiltCard max={4} className="panel panel-hover rounded-[22px] p-5 sm:p-6">
                <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white sm:text-[2rem]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-200">{pillar.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {pillar.skills.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
