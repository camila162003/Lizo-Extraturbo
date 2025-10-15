'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedBackgroundProps {
  variant?: 'default' | 'particles' | 'orbs' | 'waves' | 'professional'
  intensity?: 'low' | 'medium' | 'high'
  className?: string
}

export const AnimatedBackground = ({ 
  variant = 'professional', 
  intensity = 'medium',
  className = ''
}: AnimatedBackgroundProps) => {
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    delay: number
    color: string
  }>>([])

  const getParticleCount = () => {
    switch (intensity) {
      case 'low': return 15
      case 'medium': return 30
      case 'high': return 50
      default: return 30
    }
  }

  useEffect(() => {
    const colors = ['from-pink-400/10 to-purple-400/10', 'from-purple-400/10 to-blue-400/10', 'from-blue-400/10 to-cyan-400/10', 'from-rose-400/10 to-pink-400/10']
    
    const newParticles = Array.from({ length: getParticleCount() }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 120 + 40,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)]
    }))
    setParticles(newParticles)
  }, [intensity])

  const renderProfessionalBackground = () => (
    <>
      {/* Sophisticated Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-rose-900/50" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-900/20 to-purple-900/30" />
      
      {/* Elegant Floating Orbs */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full bg-gradient-to-r ${particle.color} blur-2xl`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.sin(particle.id) * 40, 0],
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Sophisticated Beauty Elements */}
      <motion.div
        className="absolute top-1/5 left-1/6 w-32 h-32 opacity-10"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-pink-300/30 to-purple-300/30 rounded-full blur-xl" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/6 w-24 h-24 opacity-15"
        animate={{
          rotate: [360, 0],
          x: [0, 30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-rose-300/30 to-pink-300/30 rounded-full blur-xl" />
      </motion.div>

      {/* Flowing Lines */}
      <motion.div
        className="absolute top-1/3 left-0 w-full h-px overflow-hidden"
        animate={{
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div
          className="h-full w-1/3 bg-gradient-to-r from-transparent via-pink-300/30 to-transparent"
          animate={{
            x: ['-100%', '300%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-0 w-full h-px overflow-hidden"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <motion.div
          className="h-full w-1/4 bg-gradient-to-r from-transparent via-purple-300/30 to-transparent"
          animate={{
            x: ['300%', '-100%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Premium Sparkles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            left: `${15 + (i * 7)}%`,
            top: `${20 + Math.sin(i) * 60}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 0.8, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeOut"
          }}
        >
          <div className="w-1 h-1 bg-gradient-to-r from-pink-200/60 to-purple-200/60 rounded-full shadow-lg shadow-pink-200/30" />
        </motion.div>
      ))}

      {/* Elegant Mesh Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>
    </>
  )

  const renderDefault = () => (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900" />
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full bg-gradient-to-r ${particle.color} blur-xl`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  )

  const renderContent = () => {
    switch (variant) {
      case 'professional':
        return renderProfessionalBackground()
      case 'default':
      default:
        return renderDefault()
    }
  }

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {renderContent()}
    </div>
  )
}