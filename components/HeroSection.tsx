'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShoppingBag, Star, Users, Award } from 'lucide-react'

const heroSlides = [
  {
    id: 1,
    title: "Belleza Profesional",
    subtitle: "Transforma tu Rutina de Cuidado",
    description: "Descubre productos de calidad salon que elevan tu experiencia de belleza a otro nivel",
    image: "/logo y carrusel/modelo1.jpg",
    cta: "Explorar Colección"
  },
  {
    id: 2,
    title: "Herramientas de Precision",
    subtitle: "Para Profesionales Exigentes",
    description: "Equipamiento de última generación para resultados perfectos en cada aplicación",
    image: "/logo y carrusel/modelo2.jpg",
    cta: "Ver Productos"
  },
  {
    id: 3,
    title: "Innovación & Diseño",
    subtitle: "La Evolución de la Belleza",
    description: "Tecnología avanzada combinada con diseño elegante para una experiencia única",
    image: "/logo y carrusel/modelo3.jpg",
    cta: "Descubrir Más"
  }
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Parallax */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.1
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-center"
              priority={index === 0}
              onError={(e) => {
                e.currentTarget.src = '/api/placeholder/1920/1080';
              }}
            />
          </motion.div>
        ))}
        
        {/* Elegant Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white space-y-8"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-4 mb-8"
            >
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/logo y carrusel/Logolizo.jpg"
                  alt="Lizo Belleza Logo"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/api/placeholder/64/64';
                  }}
                />
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold">Lizo Belleza</h1>
                <p className="text-gold-300 text-sm">Diseño & Elegancia</p>
              </div>
            </motion.div>

            {/* Dynamic Content */}
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                {heroSlides[currentSlide].title}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-elegant-400 text-4xl lg:text-5xl mt-2">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </h2>

              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                {heroSlides[currentSlide].description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-elegant-600 to-gold-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>{heroSlides[currentSlide].cta}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Ver Catálogo
                </motion.button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20"
            >
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gold-500 to-elegant-600 rounded-xl mb-3 mx-auto">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gold-400">5.0</div>
                <div className="text-sm text-gray-300">Calificación</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-premium-500 to-premium-600 rounded-xl mb-3 mx-auto">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-premium-400">10K+</div>
                <div className="text-sm text-gray-300">Clientes</div>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-elegant-500 to-elegant-600 rounded-xl mb-3 mx-auto">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-elegant-400">Pro</div>
                <div className="text-sm text-gray-300">Calidad</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="space-y-6">
              {[
                { icon: "💄", title: "Productos Premium", desc: "Calidad profesional para uso diario" },
                { icon: "✨", title: "Innovación Constante", desc: "Últimas tendencias en belleza" },
                { icon: "🎯", title: "Resultados Perfectos", desc: "Herramientas de precisión profesional" },
                { icon: "🌟", title: "Experiencia Única", desc: "Atención personalizada y especializada" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
                >
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-300">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gold-400 scale-125 shadow-lg'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-gold-400 rounded-full animate-pulse opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-elegant-400 rounded-full animate-pulse opacity-40" />
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-premium-400 rounded-full animate-pulse opacity-80" />
    </section>
  )
}