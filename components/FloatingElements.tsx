'use client'

import { motion } from 'framer-motion'

export function FloatingElements() {
  return (
      <div className="pointer-events-none fixed inset-0 overflow-hidden [mask-image:radial-gradient(circle_at_center,black,transparent_92%)]">
      {[0, 1, 2].map((item) => (
        <motion.div
          key={item}
            className="absolute rounded-full bg-blue-500/10 blur-3xl"
          style={{
            width: item === 0 ? 340 : item === 1 ? 260 : 180,
            height: item === 0 ? 340 : item === 1 ? 260 : 180,
            left: item === 0 ? '6%' : item === 1 ? '72%' : '48%',
            top: item === 0 ? '12%' : item === 1 ? '58%' : '74%',
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
        className="absolute left-[12%] top-[20%] h-64 w-64 rounded-full border border-white/6"
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
        className="absolute right-[14%] top-[18%] h-28 w-28 rotate-12 rounded-[32px] border border-blue-400/20 bg-blue-500/6"
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
        className="absolute inset-x-0 bottom-[-16rem] mx-auto h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl"
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
    </div>
  )
}
