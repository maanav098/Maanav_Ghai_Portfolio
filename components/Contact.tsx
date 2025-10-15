'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ExternalLink, MessageCircle, Download } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            I{"'"}m always open to discussing new opportunities, interesting projects,
            or just having a chat about technology and innovation.
          </p>

          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            {/* Chatbot Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 text-lg"
              onClick={() => {
                // Find and click the chatbot button to open it
                const chatbotButton = document.querySelector('[data-chatbot]') as HTMLButtonElement;
                if (chatbotButton) {
                  chatbotButton.click();
                } else {
                  // Fallback: scroll to bottom where chatbot usually is
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }
              }}
            >
              <MessageCircle className="w-6 h-6" />
              Talk to Maanav
            </motion.button>

            {/* Download Resume Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Maanav_Ghai.pdf"
              download="Maanav_Ghai.pdf"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 text-lg"
            >
              <Download className="w-6 h-6" />
              Download Resume
            </motion.a>
          </div>

          {/* Secondary Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="mailto:maanavghai1409@gmail.com"
              className="btn-secondary inline-flex items-center gap-2"
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

          {/* Chatbot Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 mb-8 border border-blue-200 dark:border-blue-800"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <MessageCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Chat with AI Maanav
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Ask me anything about my experience, projects, or just have a casual conversation.
              I{"'"}m powered by AI and can answer questions about my work 24/7!
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                💼 Experience & Projects
              </span>
              <span className="bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full">
                🛠️ Technical Skills
              </span>
              <span className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">
                🎯 Career Goals
              </span>
              <span className="bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full">
                💬 Casual Chat
              </span>
            </div>
          </motion.div>

          {/* Additional Info */}
          <div className="text-slate-600 dark:text-slate-400 space-y-2">
            <p>
              Currently open to Internships, Full-time roles and exciting project collaborations.
            </p>
              <p className="text-sm">
                Willing to work in India and UAE • Also available for remote work worldwide
              </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
