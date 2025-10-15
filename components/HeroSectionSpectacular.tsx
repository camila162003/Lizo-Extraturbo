'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export const HeroSection = () => {
  const [currentModel, setCurrentModel] = useState(0)
  const models = [
    '/logo y carrusel/modelo1.jpg',
    '/logo y carrusel/modelo2.jpg',
    '/logo y carrusel/modelo3.jpg',
    '/logo y carrusel/modelo4.jpg',
    '/logo y carrusel/modelo5.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentModel((prev) => (prev + 1) % models.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [models.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spectacular Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900">
        {/* Floating Beauty Elements */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-pink-400/30 to-purple-400/30 blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${50 + Math.random() * 100}px`,
              height: `${50 + Math.random() * 100}px`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, 30, 0],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Geometric Beauty Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-32 h-32 border-4 border-pink-300/40 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-rose-300/30 to-purple-300/30 transform rotate-45"
          animate={{
            rotate: [45, 225, 45],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Beauty Sparkles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-3 h-3 bg-gradient-to-r from-white to-pink-200 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: [0, -60, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Logo with Spectacular Animation */}
            <motion.div
              className="mb-12 flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1.5, 
                delay: 0.3,
                type: "spring",
                stiffness: 100 
              }}
            >
              <motion.div
                className="relative"
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl blur-lg opacity-30" />
                <Image
                  src="/logo y carrusel/Logolizo.jpg"
                  alt="Lizo Belleza Logo"
                  width={250}
                  height={100}
                  className="relative object-contain rounded-2xl shadow-2xl"
                  priority
                />
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-6xl lg:text-8xl font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.span
                className="block bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                BELLEZA
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-rose-300 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5
                }}
              >
                PROFESIONAL
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-2xl text-pink-100 mb-12 leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              ✨ Las herramientas más exclusivas que usan los mejores profesionales
              <br />
              💎 Calidad premium que transforma tu negocio y potencia tus resultados
              <br />
              🚀 Tecnología de vanguardia al alcance de tus manos
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.button
                className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-bold text-lg rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">🛍️ DESCUBRIR PRODUCTOS PREMIUM</span>
              </motion.button>
              
              <motion.button
                className="group px-10 py-5 border-3 border-pink-300 text-pink-100 font-bold text-lg rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#ffffff",
                  color: "#ffffff"
                }}
                whileTap={{ scale: 0.95 }}
              >
                � ASESORÍA ESPECIALIZADA
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Rotating Models Gallery */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-rose-500 rounded-3xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="absolute inset-1 bg-black rounded-3xl overflow-hidden">
                {/* Model Images with Spectacular Transitions */}
                {models.map((model, index) => (
                  <motion.div
                    key={model}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ 
                      opacity: currentModel === index ? 1 : 0,
                      scale: currentModel === index ? 1 : 1.1,
                    }}
                    transition={{ 
                      duration: 1.5,
                      ease: "easeInOut"
                    }}
                  >
                    <Image
                      src={model}
                      alt={`Professional Model ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-pink-900/30" />
                  </motion.div>
                ))}

                {/* Model Info Overlay */}
                <motion.div
                  className="absolute bottom-8 left-8 right-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <div className="bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-pink-400/30">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      💫 Resultados Profesionales
                    </h3>
                    <p className="text-pink-200">
                      "LIZO BELLEZA transformó completamente mi salón. Equipos profesionales que superan todas las expectativas"
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Floating Beauty Icons */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-3xl"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ✨
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-2xl"
                animate={{
                  x: [0, 20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                💎
              </motion.div>
            </div>

            {/* Model Navigation Dots */}
            <motion.div
              className="flex justify-center mt-8 space-x-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              {models.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentModel === index 
                      ? 'bg-gradient-to-r from-pink-400 to-purple-500 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  onClick={() => setCurrentModel(index)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-pink-300 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-pink-300 rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}