'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Modelo {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

const modelos: Modelo[] = [
  {
    id: 1,
    src: '/logo y carrusel/modelo1.jpg',
    alt: 'Modelo con estilo elegante',
    title: 'Elegancia Natural',
    description: 'Descubre tu belleza auténtica con nuestros productos profesionales'
  },
  {
    id: 2,
    src: '/logo y carrusel/modelo2.jpg',
    alt: 'Modelo con peinado profesional',
    title: 'Estilo Profesional',
    description: 'Herramientas de calidad salon para resultados perfectos'
  },
  {
    id: 3,
    src: '/logo y carrusel/modelo3.jpg',
    alt: 'Modelo con look moderno',
    title: 'Tendencias Actuales',
    description: 'Mantente a la vanguardia con nuestras últimas colecciones'
  },
  {
    id: 4,
    src: '/logo y carrusel/modelo4.jpg',
    alt: 'Modelo con estilo sofisticado',
    title: 'Sofisticación',
    description: 'Experimenta la diferencia de la calidad premium'
  },
  {
    id: 5,
    src: '/logo y carrusel/modelo5.jpg',
    alt: 'Modelo con look glamouroso',
    title: 'Glamour Total',
    description: 'Transforma tu rutina de belleza con nuestros productos exclusivos'
  }
]

export default function ModelosCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % modelos.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % modelos.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + modelos.length) % modelos.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-accent-cream to-elegant-50">
      <div className="container mx-auto px-4">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-elegant-800 mb-4">
            Inspiración & 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-elegant-600 to-gold-600">
              Elegancia
            </span>
          </h2>
          <p className="text-xl text-elegant-600 max-w-3xl mx-auto">
            Descubre cómo nuestros productos transforman cada look en una obra de arte
          </p>
        </motion.div>

        {/* Carrusel principal */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-elegant-100 to-elegant-200">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={modelos[currentSlide].src}
                  alt={modelos[currentSlide].alt}
                  fill
                  className="object-cover"
                  priority={currentSlide === 0}
                  onError={(e) => {
                    console.log('Image error:', modelos[currentSlide].src);
                    e.currentTarget.src = '/api/placeholder/800/600';
                  }}
                />
                
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Contenido sobre la imagen */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-2xl"
                  >
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                      {modelos[currentSlide].title}
                    </h3>
                    <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                      {modelos[currentSlide].description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Botones de navegación */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicadores de puntos */}
          <div className="flex justify-center mt-8 space-x-3">
            {modelos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-elegant-600 scale-125 shadow-lg'
                    : 'bg-elegant-300 hover:bg-elegant-400'
                }`}
              />
            ))}
          </div>

          {/* Miniaturas */}
          <div className="hidden lg:flex justify-center mt-8 space-x-4">
            {modelos.map((modelo, index) => (
              <motion.button
                key={modelo.id}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  index === currentSlide
                    ? 'border-elegant-600 shadow-lg'
                    : 'border-elegant-200 hover:border-elegant-400'
                }`}
              >
                <Image
                  src={modelo.src}
                  alt={modelo.alt}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/api/placeholder/80/80';
                  }}
                />
                {index !== currentSlide && (
                  <div className="absolute inset-0 bg-black/30" />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Estadísticas o features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-elegant-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-2xl font-bold text-white">100%</span>
            </div>
            <h4 className="text-lg font-semibold text-elegant-800 mb-2">
              Productos Profesionales
            </h4>
            <p className="text-elegant-600">
              Calidad de salón en cada herramienta y producto
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-premium-500 to-premium-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-2xl font-bold text-white">24/7</span>
            </div>
            <h4 className="text-lg font-semibold text-elegant-800 mb-2">
              Soporte Especializado
            </h4>
            <p className="text-elegant-600">
              Asesoría profesional cuando la necesites
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-2xl font-bold text-white">5★</span>
            </div>
            <h4 className="text-lg font-semibold text-elegant-800 mb-2">
              Satisfacción Garantizada
            </h4>
            <p className="text-elegant-600">
              Miles de clientes satisfechos nos respaldan
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}