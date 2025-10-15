'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Sparkles, Zap, Code, Star, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/contexts/ThemeContext'

export function Hero() {
  const { theme } = useTheme()
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(${theme === 'dark' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(169, 193, 163, 0.18)'} 1px, transparent 1px),
              linear-gradient(90deg, ${theme === 'dark' ? 'rgba(99, 102, 241, 0.1)' : 'rgba(169, 193, 163, 0.18)'} 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border rounded-full"
          style={{ borderColor: theme === 'dark' ? 'rgba(124, 58, 237, 0.2)' : 'rgba(169, 193, 163, 0.35)' }}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 rounded-lg"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(124, 58, 237, 0.1))'
              : 'linear-gradient(135deg, rgba(143, 185, 150, 0.18), rgba(169, 193, 163, 0.15))'
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container-max text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Enhanced Animated Avatar */}
          <div className="relative mb-8">
            <div className="relative inline-block group">
              {/* Multiple Glow Effects */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-glow" />
              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              
              {/* Floating Icons with Enhanced Animation */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-4 -left-4 text-blue-500"
              >
                <Code className="w-6 h-6" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -5, 5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -top-4 -right-4 text-purple-500"
              >
                <Zap className="w-6 h-6" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [-5, 15, -5],
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.15, 1],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -bottom-4 -left-4 text-green-500"
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>

              {/* Main Avatar with Enhanced Effects */}
              <motion.div 
                className="relative w-32 h-32 mx-auto rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg cursor-pointer overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={cn(
                  "w-full h-full flex items-center justify-center transition-all duration-500",
                  theme === 'dark'
                    ? "bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-600"
                    : "bg-gradient-to-br from-[#A9C1A3] via-[#8FB996] to-[#5A7D7C]"
                )}>
                  <span className="relative z-10">MG</span>
                </div>
                
                {/* Enhanced Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                    animate={{
                      x: [-100, 100, -100],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
              </motion.div>
              
              {/* Interactive Hover Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Name and Title with Enhanced Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-4 relative"
          >
            <span className={cn(
              "bg-clip-text text-transparent",
              theme === 'dark'
                ? "bg-gradient-to-r from-white via-cyan-400 to-purple-400"
                : "bg-gradient-to-r from-[#2F3E46] via-[#5A7D7C] to-[#8FB996]"
            )}>
              Maanav Ghai
            </span>
            {/* Floating Star */}
            <motion.div
              className="absolute -top-2 -right-2 text-yellow-400"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Star className="w-6 h-6" />
            </motion.div>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-6"
          >
            Full-Stack & AI Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto"
          >
            I build fast, secure, human-friendly products.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="mailto:maanavghai1409@gmail.com"
              className="btn-primary inline-flex items-center gap-2 group relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Contact
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: -100 }}
                whileHover={{ x: 100 }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
            
            <motion.a
              href="/Maanav_Ghai.pdf"
              download="Maanav_Ghai.pdf"
              className="btn-secondary inline-flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          {/* Enhanced Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 text-sm"
          >
            {['React', 'Next.js', 'Python', 'Flask', 'AI'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 transition-all duration-200 cursor-default"
                style={{
                  background: theme === 'dark' ? undefined : 'rgba(169, 193, 163, 0.18)',
                  borderColor: theme === 'dark' ? undefined : 'rgba(169, 193, 163, 0.5)'
                }}
                whileHover={{ scale: 1.1, y: -2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
