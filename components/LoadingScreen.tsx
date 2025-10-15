'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setIsComplete(true)
          setTimeout(() => onComplete(), 800)
          clearInterval(timer)
          return 100
        }
        return prevProgress + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onComplete])

  const logoVariants = {
    initial: { 
      scale: 0.5, 
      rotate: -10, 
      opacity: 0,
      y: 30 
    },
    animate: { 
      scale: 1, 
      rotate: 0, 
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99],
        scale: {
          type: "spring",
          stiffness: 100,
          damping: 15,
        }
      }
    },
    exit: { 
      scale: 1.1, 
      opacity: 0,
      y: -20,
      transition: { duration: 0.5 }
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
      scale: 1.05,
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
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white via-accent-cream to-elegant-100"
        >
          {/* Fondo con patrón sutil */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(232,184,109,0.1)_0%,_transparent_50%)]" />
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_rgba(212,160,74,0.05)_0%,_transparent_50%,_rgba(212,160,74,0.05)_100%)]" />
          </div>

          {/* Contenido principal */}
          <div className="relative flex flex-col items-center space-y-8">
            {/* Logo con animación de revelado */}
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48">
                {/* Efecto de brillo detrás del logo */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-elegant-400/20 to-elegant-600/20 blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <Image
                  src="/logo y carrusel/Logolizo.jpg"
                  alt="Lizo Belleza"
                  fill
                  className="object-contain rounded-xl shadow-2xl"
                  priority
                  onError={(e) => {
                    console.log('Logo error, using fallback');
                    e.currentTarget.src = '/api/placeholder/200/200';
                  }}
                />
              </div>
            </motion.div>

            {/* Texto de marca */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center space-y-2"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-elegant-800">
                Lizo Belleza
              </h1>
              <p className="text-elegant-600 text-lg sm:text-xl font-medium">
                Diseño & Elegancia
              </p>
            </motion.div>

            {/* Barra de progreso elegante */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="w-80 sm:w-96"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-elegant-700 text-sm font-medium">
                  Cargando experiencia premium
                </span>
                <span className="text-elegant-800 text-sm font-bold">
                  {Math.round(progress)}%
                </span>
              </div>
              
              <div className="relative h-1.5 bg-elegant-200 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  variants={progressBarVariants}
                  initial="initial"
                  animate="animate"
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-elegant-500 via-elegant-600 to-elegant-700 rounded-full shadow-lg"
                />
                
                {/* Efecto de brillo en la barra */}
                <motion.div
                  className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{
                    x: [-80, 320],
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

            {/* Indicadores de carga animados */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex space-x-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-elegant-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
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

          {/* Partículas flotantes de fondo */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-elegant-400/30 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${20 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [-20, -60, -20],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}