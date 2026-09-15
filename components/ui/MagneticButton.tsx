'use client'

import { useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number
}

const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine)'

export function MagneticButton({ children, className, strength = 0.3 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const targetRef = useRef({ x: 0, y: 0 })

  const applyTransform = () => {
    rafRef.current = null
    const el = ref.current
    if (!el) return
    const { x, y } = targetRef.current
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  const scheduleUpdate = () => {
    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(applyTransform)
    }
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia(FINE_POINTER_QUERY).matches) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = event.clientX - rect.left - rect.width / 2
    const relY = event.clientY - rect.top - rect.height / 2
    targetRef.current = { x: relX * strength, y: relY * strength }
    scheduleUpdate()
  }

  const handleMouseLeave = () => {
    targetRef.current = { x: 0, y: 0 }
    scheduleUpdate()
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('inline-block transition-transform duration-300 ease-out will-change-transform', className)}
    >
      {children}
    </div>
  )
}
