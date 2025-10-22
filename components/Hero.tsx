'use client'

import { motion } from 'framer-motion'
import { Download, Mail, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black">
      {/* Apple-style gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-white dark:from-gray-900/50 dark:via-black dark:to-black" />

      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          {/* Apple-style large headline */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6 leading-[1.1]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-gray-900 dark:text-white">
              Maanav Ghai
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Building human-centered AI products
            <br />
            <span className="text-[#0071e3] dark:text-[#2997ff]">with design precision.</span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto font-normal"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Software Developer • AI Enthusiast • Full Stack Developer
          </motion.p>

          {/* Apple-style CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="/Maanav_Ghai.pdf"
              download="Maanav_Ghai_Resume.pdf"
              className="inline-flex items-center gap-2 bg-[#0071e3] hover:bg-[#0077ED] text-white px-6 py-3 rounded-full text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900 text-[#0071e3] dark:text-[#2997ff] px-6 py-3 rounded-full text-base font-medium transition-all duration-300 border border-[#0071e3] dark:border-[#2997ff]"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
