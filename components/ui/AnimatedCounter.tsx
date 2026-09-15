'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

interface AnimatedCounterProps {
  value: string
  className?: string
}

// Splits values like "1M+", "95%", "8" into an animatable number plus a static suffix.
function parseValue(value: string) {
  const match = value.match(/^([\d.]+)(.*)$/)
  if (!match) {
    return { number: null, prefix: '', suffix: value }
  }
  return { number: parseFloat(match[1]), prefix: '', suffix: match[2] }
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [display, setDisplay] = useState('0')
  const { number, suffix } = parseValue(value)

  useEffect(() => {
    if (!isInView) return

    if (number === null) {
      setDisplay(value)
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setDisplay(`${number}${suffix}`)
      return
    }

    const isDecimal = value.includes('.')
    const controls = animate(0, number, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(`${isDecimal ? latest.toFixed(1) : Math.round(latest)}${suffix}`)
      },
    })

    return () => controls.stop()
  }, [isInView, number, suffix, value])

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  )
}
