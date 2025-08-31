'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { Code, Zap, Database, Cpu, Globe, Rocket, Sparkles, Star } from 'lucide-react'

const floatingIcons = [
  { icon: Code, delay: 0, color: 'text-blue-500' },
  { icon: Zap, delay: 1, color: 'text-purple-500' },
  { icon: Database, delay: 2, color: 'text-green-500' },
  { icon: Cpu, delay: 3, color: 'text-orange-500' },
  { icon: Globe, delay: 4, color: 'text-pink-500' },
  { icon: Rocket, delay: 5, color: 'text-cyan-500' },
]

export function FloatingElements() {
  const { theme } = useTheme()

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.color} opacity-20`}
          style={{
            left: `${20 + (index * 15)}%`,
            top: `${30 + (index * 10)}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <item.icon className="w-6 h-6" />
        </motion.div>
      ))}
      
      {/* Creative Geometric Shapes */}
      <motion.div
        className="absolute left-10 top-20 w-32 h-32 border border-indigo-200/20 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute right-20 top-40 w-24 h-24 bg-gradient-to-br from-cyan-200/10 to-purple-200/10 rounded-lg"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -180, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Theme-specific floating elements */}
      {theme === 'dark' && (
        <>
          {/* Cyan Particles */}
          <motion.div
            className="absolute right-20 top-1/4 w-2 h-2 bg-cyan-400 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute left-1/4 bottom-1/3 w-3 h-3 bg-purple-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute right-1/3 top-1/2 w-1 h-1 bg-pink-400 rounded-full"
            animate={{
              scale: [1, 3, 1],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          
          {/* Glowing Orbs */}
          <motion.div
            className="absolute left-1/3 top-1/4 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-sm"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
        </>
      )}

      {/* Light Mode Specific Elements */}
      {theme === 'light' && (
        <>
          {/* Subtle Indigo Gradients */}
          <motion.div
            className="absolute left-1/4 top-1/3 w-40 h-40 bg-gradient-to-br from-indigo-100/30 to-cyan-100/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Floating Stars */}
          <motion.div
            className="absolute right-1/4 top-1/2 text-indigo-300/40"
            animate={{
              y: [-5, 5, -5],
              rotate: [0, 360, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <Star className="w-4 h-4" />
          </motion.div>
          
          <motion.div
            className="absolute left-1/2 bottom-1/4 text-cyan-300/40"
            animate={{
              y: [5, -5, 5],
              rotate: [0, -360, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <Sparkles className="w-3 h-3" />
          </motion.div>
        </>
      )}

      {/* Interactive Mouse Follow Effect */}
      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-r from-indigo-200/5 to-cyan-200/5 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
