'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { categories } from '@/lib/products'

export function CategoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % categories.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % categories.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-rose-50 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full mb-6 shadow-xl"
          >
            <span className="text-3xl">✨</span>
          </motion.div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent mb-6">
            Nuestras Categorías Premium
          </h2>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Explora nuestra colección completa de productos profesionales de belleza, 
            cuidadosamente seleccionados para salones y uso personal
          </p>
        </motion.div>

        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main carousel container */}
          <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl bg-white">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.4 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    nextSlide()
                  } else if (swipe > swipeConfidenceThreshold) {
                    prevSlide()
                  }
                }}
                className="absolute inset-0"
              >
                <div className="h-full bg-gradient-to-br from-white via-slate-50 to-rose-50 flex">
                  {/* Content side */}
                  <div className="flex-1 p-12 flex flex-col justify-center relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/50 to-white/80 pointer-events-none"></div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="relative z-10"
                    >
                      <div className="text-6xl mb-6 filter drop-shadow-lg">
                        {categories[currentIndex].icon}
                      </div>
                      
                      <motion.h3
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4"
                      >
                        {categories[currentIndex].name}
                      </motion.h3>
                      
                      <motion.p
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-slate-600 text-xl mb-6 leading-relaxed"
                      >
                        {categories[currentIndex].description}
                      </motion.p>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center gap-4 mb-8"
                      >
                        <div className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          {categories[currentIndex].productCount} productos
                        </div>
                        <div className="flex items-center gap-1 text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-lg">⭐</span>
                          ))}
                        </div>
                      </motion.div>
                      
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                        whileTap={{ scale: 0.98 }}
                        className="group bg-gradient-to-r from-slate-800 to-slate-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
                      >
                        Explorar Categoría
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Image side */}
                  <div className="flex-1 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20"></div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className="relative w-full h-full flex items-center justify-center p-8"
                    >
                      <div className="relative w-80 h-80 filter drop-shadow-2xl">
                        <Image
                          src={categories[currentIndex].image}
                          alt={categories[currentIndex].name}
                          fill
                          className="object-contain transform hover:scale-110 transition-transform duration-700"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.src = `https://via.placeholder.com/400x400/e2e8f0/64748b?text=${encodeURIComponent(categories[currentIndex].name)}`
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-slate-700 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-20 group"
            >
              <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-slate-700 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-20 group"
            >
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Enhanced dots indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToSlide(index)}
                className={`relative group transition-all duration-300 ${
                  index === currentIndex ? 'p-2' : 'p-1'
                }`}
              >
                <div className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-slate-700 to-slate-600 shadow-lg'
                    : 'w-3 h-3 bg-slate-300 hover:bg-slate-400 group-hover:scale-125'
                }`}></div>
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded-lg text-xs font-medium shadow-lg"
                  >
                    {category.name}
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-4 mx-auto max-w-md">
            <div className="w-full bg-slate-200 rounded-full h-1 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-slate-700 to-slate-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / categories.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}