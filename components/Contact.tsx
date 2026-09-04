'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Download, ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/data'

export function Contact() {
  return (
    <section id="contact" className="section-shell pb-28">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="panel spotlight-border mx-auto max-w-5xl rounded-[36px] p-8 text-center sm:p-12"
        >
          <span className="section-kicker">Contact</span>
          <h2 className="section-title mt-6">Let&apos;s build something that actually matters.</h2>
          <p className="section-copy mx-auto mt-6 max-w-2xl">
            {profile.availability}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={`mailto:${profile.email}`} className="primary-button">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a href={profile.resumeUrl} download="Maanav_Ghai_Resume.pdf" className="secondary-button">
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="secondary-button"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">{profile.email}</span>
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">GitHub</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mt-10 grid gap-4 text-left sm:grid-cols-3"
          >
            <div className="rounded-[28px] border border-white/8 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Best Fit</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">Applied AI engineering, platform teams, and backend-heavy product roles.</p>
            </div>
            <div className="rounded-[28px] border border-white/8 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Location</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">Based in India. Open to strong teams across on-site, hybrid, and remote setups.</p>
            </div>
            <div className="rounded-[28px] border border-white/8 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">What You Get</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">Full-stack ownership, AI integration depth, and delivery that stays grounded in product outcomes.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
