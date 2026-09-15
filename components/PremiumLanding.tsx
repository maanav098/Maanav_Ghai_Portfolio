'use client'

import { CursorSpotlight } from '@/components/ui/CursorSpotlight'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Testimonials } from '@/components/sections/Testimonials'
import { Contact } from '@/components/sections/Contact'

export function PremiumLanding() {
  return (
    <main className="relative">
      <CursorSpotlight />

      <Hero />

      <div className="section-divider" />
      <About />

      <div className="section-divider" />
      <section id="work" className="section-shell">
        <Experience />
        <div className="section-inner">
          <div className="section-divider my-14 sm:my-16" />
        </div>
        <Projects />
      </section>

      <div className="section-divider" />
      <Skills />

      <div className="section-divider" />
      <Testimonials />

      <div className="section-divider" />
      <Contact />
    </main>
  )
}
