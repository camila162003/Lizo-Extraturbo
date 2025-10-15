'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface LogoModelosProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showModels?: boolean
  animated?: boolean
  className?: string
}

const modelImages = [
  '/logo y carrusel/modelo1.jpg',
  '/logo y carrusel/modelo2.jpg', 
  '/logo y carrusel/modelo3.jpg',
  '/logo y carrusel/modelo4.jpg',
  '/logo y carrusel/modelo5.jpg'
]

export default function LogoModelos({ 
  size = 'md', 
  showModels = true, 
  animated = true,
  className = ''
}: LogoModelosProps) {
  const [currentModel, setCurrentModel] = useState(0)

  const sizeClasses = {
    sm: 'w-20 h-20',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64'
  }

  const modelSizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  }

  useEffect(() => {
    if (!animated || !showModels) return

    const interval = setInterval(() => {
      setCurrentModel(prev => (prev + 1) % modelImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [animated, showModels])

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Logo principal */}
      <motion.div
        className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
        initial={animated ? { scale: 0.8, opacity: 0 } : {}}
        animate={animated ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
      >
        {/* Efecto de brillo de fondo */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 blur-xl"
          animate={animated ? {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          } : {}}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Contenedor del logo */}
        <div className="relative w-full h-full bg-gradient-to-br from-white to-gray-100 rounded-2xl p-2 border border-white/20">
          <Image
            src="/logo y carrusel/Logolizo.jpg"
            alt="Lizo Belleza"
            fill
            className="object-contain rounded-lg"
            priority
          />
        </div>

        {/* Overlay con branding */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"
          initial={animated ? { opacity: 0 } : {}}
          animate={animated ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        
        {/* Texto del logo */}
        {size !== 'sm' && (
          <motion.div
            className="absolute bottom-2 left-2 right-2"
            initial={animated ? { opacity: 0, y: 20 } : {}}
            animate={animated ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3 className="text-white font-bold text-xs leading-tight">
              LIZO BELLEZA
            </h3>
          </motion.div>
        )}
      </motion.div>

      {/* Modelos orbitales */}
      {showModels && (
        <div className="absolute inset-0">
          {modelImages.map((model, index) => {
            const angle = (index * (360 / modelImages.length)) * (Math.PI / 180)
            const radius = size === 'xl' ? 140 : size === 'lg' ? 100 : size === 'md' ? 70 : 50
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            
            return (
              <motion.div
                key={index}
                className={`absolute ${modelSizeClasses[size]} rounded-full overflow-hidden border-2 border-white/30 shadow-lg`}
                style={{
                  left: '50%',
                  top: '50%',
                  marginLeft: `${x - (size === 'xl' ? 40 : size === 'lg' ? 32 : size === 'md' ? 24 : 16)}px`,
                  marginTop: `${y - (size === 'xl' ? 40 : size === 'lg' ? 32 : size === 'md' ? 24 : 16)}px`,
                }}
                initial={animated ? { scale: 0, opacity: 0 } : {}}
                animate={animated ? { 
                  scale: currentModel === index ? 1.2 : 1, 
                  opacity: currentModel === index ? 1 : 0.7,
                  rotate: animated ? [0, 360] : 0
                } : {}}
                transition={{
                  scale: { duration: 0.3 },
                  opacity: { duration: 0.3 },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              >
                <Image
                  src={model}
                  alt={`Modelo ${index + 1}`}
                  fill
                  className="object-cover"
                />
                
                {/* Highlight para el modelo activo */}
                {currentModel === index && animated && (
                  <motion.div
                    className="absolute inset-0 border-2 border-pink-400 rounded-full"
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.div>
            )
          })}
          
          {/* Órbita animada */}
          {animated && (
            <motion.div
              className="absolute inset-0 border border-pink-400/30 rounded-full"
              style={{
                width: size === 'xl' ? '280px' : size === 'lg' ? '200px' : size === 'md' ? '140px' : '100px',
                height: size === 'xl' ? '280px' : size === 'lg' ? '200px' : size === 'md' ? '140px' : '100px',
                left: '50%',
                top: '50%',
                marginLeft: size === 'xl' ? '-140px' : size === 'lg' ? '-100px' : size === 'md' ? '-70px' : '-50px',
                marginTop: size === 'xl' ? '-140px' : size === 'lg' ? '-100px' : size === 'md' ? '-70px' : '-50px',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          )}
        </div>
      )}

      {/* Efectos de partículas */}
      {animated && size !== 'sm' && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-pink-400/60 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}