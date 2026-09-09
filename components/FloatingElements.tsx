'use client'

import { motion } from 'framer-motion'

export function FloatingElements() {
  return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden [mask-image:radial-gradient(circle_at_center,black,transparent_92%)]">
      <div className="noise-overlay" />
      {[0, 1, 2].map((item) => (
        <motion.div
          key={item}
            className="absolute rounded-full blur-3xl"
          style={{
            width: item === 0 ? 380 : item === 1 ? 290 : 200,
            height: item === 0 ? 380 : item === 1 ? 290 : 200,
            left: item === 0 ? '4%' : item === 1 ? '74%' : '50%',
            top: item === 0 ? '9%' : item === 1 ? '56%' : '74%',
            background:
              item === 0
                ? 'rgba(34, 211, 238, 0.13)'
                : item === 1
                  ? 'rgba(245, 158, 11, 0.1)'
                  : 'rgba(56, 189, 248, 0.1)',
          }}
          animate={{
              x: item === 1 ? [0, -20, 0] : [0, 16, 0],
              y: item === 2 ? [0, -20, 0] : [0, 14, 0],
              scale: [1, 1.08, 1],
          }}
          transition={{
              duration: 15 + item * 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.div
        className="absolute left-[12%] top-[20%] h-64 w-64 rounded-full border border-white/8"
        animate={{
            scale: [1, 1.06, 1],
            opacity: [0.08, 0.13, 0.08],
        }}
        transition={{
            duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute right-[14%] top-[18%] h-28 w-28 rotate-12 rounded-[32px] border border-cyan-300/24 bg-cyan-400/8"
        animate={{
            y: [0, 12, 0],
            rotate: [12, 20, 12],
            opacity: [0.14, 0.24, 0.14],
        }}
        transition={{
            duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute inset-x-0 bottom-[-16rem] mx-auto h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl"
        animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
            duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.svg
        viewBox="0 0 1440 560"
        className="absolute bottom-[-7rem] left-0 w-full opacity-35"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path
          fill="rgba(34, 211, 238, 0.12)"
          d="M0,320L60,304C120,288,240,256,360,234.7C480,213,600,203,720,208C840,213,960,235,1080,245.3C1200,256,1320,256,1380,256L1440,256L1440,560L1380,560C1320,560,1200,560,1080,560C960,560,840,560,720,560C600,560,480,560,360,560C240,560,120,560,60,560L0,560Z"
        />
      </motion.svg>
    </div>
  )
}
