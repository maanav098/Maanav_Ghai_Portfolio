'use client'

import { motion } from 'framer-motion'

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
}

export const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

interface SectionHeaderProps {
  kicker: string
  title: string
  copy: string
  align?: 'left' | 'center'
}

export function SectionHeader({ kicker, title, copy, align = 'left' }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={align === 'center' ? 'mx-auto mb-8 max-w-3xl text-center' : 'mb-8 max-w-3xl'}
    >
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title mt-4">{title}</h2>
      <p className="section-copy mt-4">{copy}</p>
    </motion.div>
  )
}
