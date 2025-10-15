'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LogoModelos from './LogoModelos'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [loadingText, setLoadingText] = useState('Cargando experiencia premium...')

  const loadingTexts = [
    'Cargando experiencia premium...',
    'Preparando productos de belleza...',
    'Activando modo profesional...',
    'Creando tu espacio de belleza...',
    'Listo para transformar tu estilo...'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setIsComplete(true)
          setTimeout(() => onComplete(), 800)
          clearInterval(timer)
          return 100
        }
        return prevProgress + Math.random() * 8 + 2
      })
    }, 100)

    // Text rotation
    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        const currentIndex = loadingTexts.indexOf(prev)
        return loadingTexts[(currentIndex + 1) % loadingTexts.length]
      })
    }, 1200)

    return () => {
      clearInterval(timer)
      clearInterval(textInterval)
    }
  }, [onComplete])

  const logoVariants = {
    initial: { 
      scale: 0.3, 
      rotate: -20, 
      opacity: 0,
      y: 50 
    },
    animate: { 
      scale: 1, 
      rotate: 0, 
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.6, -0.05, 0.01, 0.99],
        scale: {
          type: "spring",
          stiffness: 120,
          damping: 15,
        }
      }
    },
    exit: { 
      scale: 1.2, 
      opacity: 0,
      y: -30,
      filter: "blur(10px)",
      transition: { duration: 0.8 }
    }
  }

  const progressBarVariants = {
    initial: { width: 0 },
    animate: { 
      width: `${progress}%`,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(20px)",
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          variants={containerVariants}
          exit="exit"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900/60 to-pink-900/60"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-pink-400/40 to-purple-400/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -120, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative flex flex-col items-center space-y-10 z-10">
            {/* Logo with advanced animation */}
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative"
            >
              <LogoModelos 
                size="xl" 
                showModels={true} 
                animated={true}
                className="mx-auto"
              />
            </motion.div>

            {/* Brand text with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-center space-y-3"
            >
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2"
                style={{
                  background: 'linear-gradient(135deg, #ffffff, #f8fafc, #e2e8f0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 30px rgba(255,255,255,0.3)',
                }}
              >
                LIZO BELLEZA
              </h1>
              <p className="text-gray-300 text-xl sm:text-2xl font-light tracking-wide">
                Diseño & Elegancia Premium
              </p>
            </motion.div>

            {/* Enhanced progress bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="w-80 sm:w-96"
            >
              <div className="flex justify-between items-center mb-4">
                <motion.span 
                  key={loadingText}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-gray-300 text-sm font-medium"
                >
                  {loadingText}
                </motion.span>
                <motion.span 
                  className="text-white text-sm font-bold"
                  animate={{ 
                    scale: progress === 100 ? [1, 1.1, 1] : 1 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {Math.round(progress)}%
                </motion.span>
              </div>
              
              <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  variants={progressBarVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg"
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '400%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 0.5,
                  }}
                />
              </div>
            </motion.div>

            {/* Floating dots animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex space-x-3"
            >
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}