'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { categories } from '@/lib/products'

export const CategoriesCarouselSpectacular = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(timer)
  }, [currentIndex])

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % categories.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length)
  }

  const getVisibleCategories = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % categories.length
      visible.push({ ...categories[index], position: i })
    }
    return visible
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  }

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Spectacular Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-rose-900">
        {/* Animated Background Elements */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-pink-400/20 to-purple-400/20 blur-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${30 + Math.random() * 60}px`,
              height: `${30 + Math.random() * 60}px`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Geometric Beauty Patterns */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-40 h-40 border-4 border-pink-300/30 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-rose-300/20 to-purple-300/20 transform rotate-45"
          animate={{
            rotate: [45, 405, 45],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Spectacular Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-6xl lg:text-8xl font-black mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
              CATEGORÍAS
            </span>
            <br />
            <span className="bg-gradient-to-r from-rose-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              PREMIUM
            </span>
          </motion.h2>
          
          <motion.p
            className="text-2xl text-pink-100 font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            💫 Explora nuestras colecciones exclusivas de herramientas profesionales
          </motion.p>
        </motion.div>

        {/* Spectacular 3D Carousel */}
        <div className="relative h-[500px] perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.6 },
                scale: { duration: 0.6 },
                rotateY: { duration: 0.8 }
              }}
              className="absolute inset-0 z-30"
            >
              <motion.div
                className="group relative w-80 h-full mx-auto rounded-3xl overflow-hidden cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  z: 50
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-rose-500 rounded-3xl"
                  animate={{ 
                    rotate: 360,
                    background: [
                      "linear-gradient(45deg, #ec4899, #a855f7, #f43f5e)",
                      "linear-gradient(135deg, #f43f5e, #ec4899, #a855f7)",
                      "linear-gradient(225deg, #a855f7, #f43f5e, #ec4899)",
                      "linear-gradient(315deg, #ec4899, #a855f7, #f43f5e)"
                    ]
                  }}
                  transition={{ 
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    background: { duration: 4, repeat: Infinity }
                  }}
                />
                
                <div className="absolute inset-1 bg-gradient-to-br from-purple-900/95 to-pink-900/95 rounded-3xl overflow-hidden backdrop-blur-md">
                  {/* Category Content */}
                  <div className="relative h-full flex flex-col justify-center items-center p-8 text-center">
                    {/* Floating Icon */}
                    <motion.div
                      className="mb-8 text-8xl"
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {categories[currentIndex].icon}
                    </motion.div>

                    {/* Category Name */}
                    <motion.h3
                      className="text-4xl font-black text-white mb-4"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      {categories[currentIndex].name}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-pink-200 text-lg mb-6 font-light"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {categories[currentIndex].description}
                    </motion.p>

                    {/* Product Count */}
                    <motion.div
                      className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold text-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      ✨ {categories[currentIndex].productCount} Productos
                    </motion.div>

                    {/* Floating Beauty Elements */}
                    <motion.div
                      className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full opacity-60"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <motion.div
                      className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-r from-rose-300 to-pink-400 rounded-full opacity-50"
                      animate={{
                        x: [0, 10, 0],
                        y: [0, -10, 0],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                  >
                    <motion.div
                      className="text-white text-2xl font-bold"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      🛍️ EXPLORAR
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <motion.button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-2xl z-40"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(236, 72, 153, 0.5)",
                "0 0 40px rgba(168, 85, 247, 0.8)",
                "0 0 20px rgba(236, 72, 153, 0.5)"
              ]
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity }
            }}
          >
            <span className="text-3xl">←</span>
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white shadow-2xl z-40"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(168, 85, 247, 0.5)",
                "0 0 40px rgba(236, 72, 153, 0.8)",
                "0 0 20px rgba(168, 85, 247, 0.5)"
              ]
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity, delay: 1 }
            }}
          >
            <span className="text-3xl">→</span>
          </motion.button>
        </div>

        {/* Navigation Dots */}
        <motion.div
          className="flex justify-center mt-16 space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {categories.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-6 h-6 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-gradient-to-r from-pink-400 to-purple-500 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              animate={currentIndex === index ? {
                boxShadow: [
                  "0 0 10px rgba(236, 72, 153, 0.5)",
                  "0 0 20px rgba(168, 85, 247, 0.8)",
                  "0 0 10px rgba(236, 72, 153, 0.5)"
                ]
              } : {}}
              transition={{
                boxShadow: { duration: 1.5, repeat: Infinity }
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}