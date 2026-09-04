import { Hero } from '@/components/Hero'
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
      <About />
      <RecruiterLens />
      <div className="section-divider" />
      <Work />
      <Skills />
      <EducationSection />
      <CertificationsSection />
      <LeadershipSection />
      <Contact />
    </main>
  )
}
