'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play, Pause, Sparkles, ShoppingBag, Phone } from 'lucide-react'
import Button from './Button'

const slides = [
  {
    id: 1,
    image: '/logo y carrusel/modelo1.jpg',
    title: 'ELEGANCIA PROFESIONAL',
    subtitle: 'Herramientas de belleza premium',
    description: 'Descubre la excelencia en cada producto',
    accent: 'from-pink-500 to-white'
  },
  {
    id: 2,
    image: '/logo y carrusel/modelo2.jpg',
    title: 'PRECISIÓN PERFECTA',
    subtitle: 'Tecnología avanzada',
    description: 'Resultados profesionales en cada uso',
    accent: 'from-pink-600 to-pink-300'
  },
  {
    id: 3,
    image: '/logo y carrusel/modelo3.jpg',
    title: 'ESTILO ÚNICO',
    subtitle: 'Innovación y calidad',
    description: 'Transforma tu visión en realidad',
    accent: 'from-pink-400 to-white'
  },
  {
    id: 4,
    image: '/logo y carrusel/modelo4.jpg',
    title: 'BELLEZA NATURAL',
    subtitle: 'Cuidado premium',
    description: 'Realza tu belleza natural',
    accent: 'from-pink-500 to-pink-200'
  },
  {
    id: 5,
    image: '/logo y carrusel/modelo5.jpg',
    title: 'CALIDAD PREMIUM',
    subtitle: 'Garantía de excelencia',
    description: 'La mejor inversión en tu belleza',
    accent: 'from-pink-600 to-white'
  }
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background Images with Ken Burns Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover object-center"
            priority
            quality={90}
            sizes="100vw"
          />
          {/* Overlay Premium con Gradiente Rosa */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/40 via-black/30 to-pink-800/40" />
          <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].accent} opacity-30`} />
          
          {/* Efecto de brillo sutil */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-transparent via-pink-500/10 to-transparent"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Animated Background Elements - Optimized */}
      <div className="absolute inset-0">
        {/* Floating Sparkles - Reduced for performance */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          >
            <Sparkles size={8} className="text-white" />
          </motion.div>
        ))}

        {/* Gradient Orbs Premium con Rosa */}
        <motion.div
          className={`absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/30 via-pink-400/20 to-pink-600/30 rounded-full blur-3xl`}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-600/20 via-pink-500/15 to-pink-400/20 rounded-full blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>



      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -60 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {/* Subtitle */}
                <motion.div
                  className="flex items-center space-x-3 mb-6"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className={`w-12 h-px bg-gradient-to-r ${slides[currentSlide].accent}`} />
                  <p className="text-white/90 text-lg font-light tracking-wide uppercase">
                    {slides[currentSlide].subtitle}
                  </p>
                </motion.div>
                
                {/* Main Title con Gradiente Rosa */}
                <motion.h1
                  className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.3 }}
                  style={{
                    textShadow: '0 0 40px rgba(236, 72, 153, 0.4), 0 0 20px rgba(0,0,0,0.5)',
                    background: `linear-gradient(135deg, #ffffff, #fce7f3, #ec4899, #fbcfe8, #ffffff)`,
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'gradient-shift 4s ease infinite',
                  }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                
                {/* Description */}
                <motion.p
                  className="text-2xl text-white/80 mb-12 max-w-2xl font-light leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    icon={<ShoppingBag size={20} />}
                    onClick={() => {
                      const catalogSection = document.getElementById('catalogo')
                      catalogSection?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Explorar Productos
                  </Button>
                  
                  <Button
                    variant="whatsapp"
                    size="lg"
                    icon={<Phone size={20} />}
                    href="https://wa.me/573142308028?text=¡Hola! Estoy interesado en conocer más sobre los productos LIZO BELLEZA"
                    external
                  >
                    Contactar WhatsApp
                  </Button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation */}
      <div className="absolute bottom-8 left-8 right-8 z-30">
        <div className="flex items-end justify-between">
          {/* Progress Indicators */}
          <div className="flex-1 max-w-md">
            <div className="flex space-x-3 mb-6">
              {slides.map((slide, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="group relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${slide.accent} rounded-full`}
                      initial={{ scaleX: 0 }}
                      animate={{ 
                        scaleX: index === currentSlide ? 1 : 0,
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      style={{ originX: 0 }}
                    />
                  </div>
                  {index === currentSlide && (
                    <motion.div
                      className="absolute -top-2 left-1/2 transform -translate-x-1/2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${slide.accent} rounded-full`} />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
            
            {/* Controls */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3 text-white/80">
                <span className="text-sm font-medium bg-black/30 backdrop-blur-md px-3 py-1 rounded-full">
                  {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                </span>
              </div>
            </div>
          </div>

          {/* Arrow Navigation */}
          <div className="flex space-x-3">
            <motion.button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-xl flex items-center justify-center text-white hover:bg-black/60 transition-all border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-xl flex items-center justify-center text-white hover:bg-black/60 transition-all border border-white/20 shadow-2xl"
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
    </section>
  )
}

