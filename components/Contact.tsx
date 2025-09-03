'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and innovation.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="mailto:maanavghai1409@gmail.com"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/maanavghai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/maanav098"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          {/* Additional Info */}
          <div className="text-slate-600 dark:text-slate-400 space-y-2">
            <p>
              Currently open to full-time roles and exciting project collaborations.
            </p>
            <p className="text-sm">
              Based in India and UAE • Available for remote work worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
