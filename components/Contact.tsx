'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Download, ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/data'

export function Contact() {
  return (
    <section id="contact" className="section-shell pb-22">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="panel mx-auto max-w-4xl rounded-[22px] p-6 text-center sm:p-8"
        >
          <span className="section-kicker">Contact</span>
          <h2 className="section-title mt-5 text-balance">Open to thoughtful product and engineering roles.</h2>
          <p className="section-copy mx-auto mt-5 max-w-2xl">{profile.availability}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`mailto:${profile.email}`} className="primary-button">
              <Mail className="h-5 w-5" />
              Email Me
            </a>
            <a href={profile.resumeUrl} download="Maanav_Ghai-Resume.pdf" className="secondary-button">
              <Download className="h-5 w-5" />
              Download Resume
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a href={`mailto:${profile.email}`} className="secondary-button">
              <Mail className="h-5 w-5" />
              <span className="font-medium">{profile.email}</span>
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="secondary-button">
              <Linkedin className="h-5 w-5" />
              <span className="font-medium">LinkedIn</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="secondary-button">
              <Github className="h-5 w-5" />
              <span className="font-medium">GitHub</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mt-7 grid gap-4 text-left sm:grid-cols-3"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Best fit</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">Applied AI engineering, platform teams, and backend-heavy product roles.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Location</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">Based in India. Open to strong teams across on-site, hybrid, and remote setups.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">What you get</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">Full-stack ownership, AI integration depth, and delivery grounded in product outcomes.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
