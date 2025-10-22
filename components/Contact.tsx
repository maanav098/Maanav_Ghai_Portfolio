'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ExternalLink, MessageCircle, Download } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-950">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl sm:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">
            Let{"'"}s Connect
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-16 leading-relaxed">
            I{"'"}m always open to discussing new opportunities, interesting projects,
            or just having a chat about technology and innovation.
          </p>

          {/* Main Action Buttons - Apple Style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            {/* Chatbot Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#0071e3] hover:bg-[#0077ED] text-white font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 text-base"
              onClick={() => {
                const chatbotButton = document.querySelector('[data-chatbot]') as HTMLButtonElement;
                if (chatbotButton) {
                  chatbotButton.click();
                } else {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }
              }}
            >
              <MessageCircle className="w-5 h-5" />
              Talk to Maanav
            </motion.button>

            {/* Download Resume Button */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/Maanav_Ghai.pdf"
              download="Maanav_Ghai.pdf"
              className="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900 text-[#0071e3] dark:text-[#2997ff] font-medium px-8 py-4 rounded-full border-2 border-[#0071e3] dark:border-[#2997ff] transition-all duration-300 flex items-center gap-3 text-base"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </div>

          {/* Social Links - Apple Style */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-6 justify-center items-center mb-16"
          >
            <a
              href="mailto:maanavghai1409@gmail.com"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors duration-300 text-base"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email</span>
            </a>
            <a
              href="https://linkedin.com/in/maanavghai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors duration-300 text-base"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/maanav098"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors duration-300 text-base"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">GitHub</span>
            </a>
          </motion.div>

          {/* Chatbot Highlight - Minimalist */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="bg-white dark:bg-black rounded-3xl p-8 border border-gray-200 dark:border-gray-800"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircle className="w-6 h-6 text-[#0071e3] dark:text-[#2997ff]" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                AI Assistant Available
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-center text-base">
              Ask me anything about my experience, projects, or just have a casual conversation.
              I{"'"}m powered by AI and available 24/7.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium">
                Experience & Projects
              </span>
              <span className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium">
                Technical Skills
              </span>
              <span className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium">
                Career Goals
              </span>
              <span className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium">
                Casual Chat
              </span>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 space-y-3 text-center"
          >
            <p className="text-base">
              Currently open to Internships, Full-time roles and exciting project collaborations.
            </p>
            <p className="text-sm">
              Willing to work in India and UAE • Also available for remote work worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
