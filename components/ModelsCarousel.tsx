'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'

const models = [
  {
    id: 1,
    name: "Elegancia Natural",
    image: "/logo y carrusel/modelo1.jpg",
    description: "Estilo sofisticado con productos Lizo"
  },
  {
    id: 2,
    name: "Belleza Radiante",
    image: "/logo y carrusel/modelo2.jpg",
    description: "Brillo y glamour profesional"
  },
  {
    id: 3,
    name: "Perfección Moderna",
    image: "/logo y carrusel/modelo3.jpg",
    description: "Tendencias contemporáneas"
  },
  {
    id: 4,
    name: "Estilo Clásico",
    image: "/logo y carrusel/modelo4.jpg",
    description: "Elegancia atemporal"
  },
  {
    id: 5,
    name: "Vanguardia Total",
    image: "/logo y carrusel/modelo5.jpg",
    description: "Innovación en cada look"
  }
]

export const ModelsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % models.length)
    }, 4000)
    
    return () => clearInterval(timer)
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % models.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + models.length) % models.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-rose-900">
      {/* Main Carousel */}
      <div className="relative h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={models[currentIndex].image}
              alt={models[currentIndex].name}
              fill
              className="object-cover"
              priority={currentIndex === 0}
            />
            
            {/* Elegant Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-rose-900/30" />
          </motion.div>
        </AnimatePresence>

        {/* Logo in Corner */}
        <motion.div
          className="absolute top-8 left-8 z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/logo y carrusel/Logolizo.jpg"
            alt="Lizo Belleza"
            width={120}
            height={120}
            className="rounded-2xl shadow-2xl border-4 border-white/20 backdrop-blur-md"
          />
        </motion.div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-end justify-start p-16 z-10">
          <motion.div
            key={`content-${currentIndex}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <motion.h1
              className="text-6xl lg:text-8xl font-black text-white mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
                LIZO
              </span>
              <br />
              <span className="text-white">BELLEZA</span>
            </motion.h1>
            
            <motion.h2
              className="text-3xl lg:text-4xl font-light text-pink-200 mb-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {models[currentIndex].name}
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-200 mb-8 font-light"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {models[currentIndex].description}
            </motion.p>
            
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Explorar Productos</span>
              </motion.button>
              
              <motion.button
                className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Catálogo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-8 z-20">
          <motion.button
            onClick={prevSlide}
            className="w-16 h-16 bg-black/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={24} />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            className="w-16 h-16 bg-black/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Play/Pause Button */}
        <motion.button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-8 right-8 w-12 h-12 bg-black/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-all duration-300 z-20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </motion.button>

        {/* Thumbnails Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
          {models.map((model, index) => (
            <motion.button
              key={model.id}
              onClick={() => goToSlide(index)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex 
                  ? 'border-pink-400 shadow-lg shadow-pink-400/50' 
                  : 'border-white/30 hover:border-white/60'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src={model.image}
                alt={model.name}
                fill
                className="object-cover"
              />
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Progress Bar */}
        {isPlaying && (
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
            <motion.div
              className="h-full bg-gradient-to-r from-pink-400 to-purple-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
              key={currentIndex}
            />
          </div>
        )}
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-pink-300/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/6 w-24 h-24 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  )
}