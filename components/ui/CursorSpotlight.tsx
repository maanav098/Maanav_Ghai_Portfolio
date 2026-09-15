'use client'

import { useEffect, useRef } from 'react'

const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine)'
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

// Single global rAF loop drives a fixed radial glow that follows the cursor. Desktop-only.
export function CursorSpotlight() {
  const elRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia(FINE_POINTER_QUERY).matches) return
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return

    const el = elRef.current
    if (!el) return

    let rafId: number | null = null
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let visible = false

    const render = () => {
      rafId = null
      el.style.transform = `translate3d(${targetX - 260}px, ${targetY - 260}px, 0)`
      el.style.opacity = visible ? '1' : '0'
    }

    const schedule = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(render)
      }
    }

    const handleMove = (event: MouseEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      visible = true
      schedule()
    }

    const handleLeave = () => {
      visible = false
      schedule()
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('mouseleave', handleLeave, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={elRef}
      aria-hidden="true"
      className="cursor-spotlight hidden opacity-0 lg:block"
    />
  )
}
