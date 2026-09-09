import { Hero } from '@/components/Hero'
import { SignalStrip } from '@/components/SignalStrip'
import { RecruiterLens } from '@/components/RecruiterLens'
import { About } from '@/components/About'
import { Work } from '@/components/Work'
import { Skills } from '@/components/Skills'
import { EducationSection } from '@/components/EducationSection'
import { CertificationsSection } from '@/components/CertificationsSection'
import { LeadershipSection } from '@/components/LeadershipSection'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <div className="section-divider" />
      <SignalStrip />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <RecruiterLens />
      <div className="section-divider" />
      <Work />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <EducationSection />
      <div className="section-divider" />
      <CertificationsSection />
      <div className="section-divider" />
      <LeadershipSection />
      <div className="section-divider" />
      <Contact />
    </main>
  )
}
