'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          {/* Heading */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white tracking-tight">
              Let's work together
            </h2>
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
              Open to full-time roles, internships, and exciting collaborations.
            </p>
          </div>

          {/* Primary CTA */}
          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const chatbotButton = document.querySelector('[data-chatbot]') as HTMLButtonElement
                if (chatbotButton) {
                  chatbotButton.click();
                } else {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }
              }}
              className="bg-[#0071e3] dark:bg-[#2997ff] text-white font-medium px-8 py-4 rounded-full hover:bg-[#0077ed] dark:hover:bg-[#409cff] transition-all duration-300 text-base"
            >
              Get in touch
            </motion.button>
          </div>

          {/* Contact Methods */}
          <div className="flex flex-wrap justify-center gap-8 pt-12 border-t border-gray-200 dark:border-gray-800">
            <a
              href="mailto:maanavghai1409@gmail.com"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors duration-300 text-base"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com/in/maanavghai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors duration-300 text-base"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/maanav098"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors duration-300 text-base"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="pt-12"
          >
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Available for work in India and UAE • Open to remote worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} Maanav Ghai. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="mailto:maanavghai1409@gmail.com"
                className="text-sm text-gray-500 dark:text-gray-500 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/maanavghai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 dark:text-gray-500 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/maanav098"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 dark:text-gray-500 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
