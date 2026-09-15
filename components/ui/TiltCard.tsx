'use client'

import { useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TiltCardProps {
  children: ReactNode
  className?: string
  max?: number
}

const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine)'

export function TiltCard({ children, className, max = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const targetRef = useRef({ rx: 0, ry: 0 })

  const applyTransform = () => {
    rafRef.current = null
    const el = ref.current
    if (!el) return
    const { rx, ry } = targetRef.current
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
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
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    targetRef.current = { rx: -py * max, ry: px * max }
    scheduleUpdate()
  }

  const handleMouseLeave = () => {
    targetRef.current = { rx: 0, ry: 0 }
    scheduleUpdate()
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn('transition-transform duration-500 ease-out will-change-transform', className)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}
