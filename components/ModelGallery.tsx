'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react'

interface ModelImage {
  id: number
  src: string
  alt: string
  title: string
  product: string
  rating: number
}

const modelImages: ModelImage[] = [
  {
    id: 1,
    src: '/logo y carrusel/modelo1.jpg',
    alt: 'Modelo profesional con secadora',
    title: 'Estilo Profesional',
    product: 'Secadora Premium',
    rating: 5
  },
  {
    id: 2,
    src: '/logo y carrusel/modelo2.jpg',
    alt: 'Modelo con plancha para cabello',
    title: 'Alisado Perfecto',
    product: 'Plancha Ceramic Pro',
    rating: 5
  },
  {
    id: 3,
    src: '/logo y carrusel/modelo3.jpg',
    alt: 'Modelo con herramientas de barbería',
    title: 'Corte Masculino',
    product: 'Kit Barbero Elite',
    rating: 5
  },
  {
    id: 4,
    src: '/logo y carrusel/modelo4.jpg',
    alt: 'Modelo con cepillo profesional',
    title: 'Volumen Natural',
    product: 'Cepillo Térmico',
    rating: 5
  },
  {
    id: 5,
    src: '/logo y carrusel/modelo5.jpg',
    alt: 'Modelo con estilo completo',
    title: 'Look Completo',
    product: 'Set Profesional',
    rating: 5
  }
]

export default function ModelGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [favorites, setFavorites] = useState<number[]>([])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % modelImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + modelImages.length) % modelImages.length)
  }

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="py-32 bg-gradient-to-br from-pink-50 via-white to-pink-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ec4899' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v40c11.046 0 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-white/30 rounded-full border border-pink-400/30 backdrop-blur-md mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-2xl">📸</span>
            <span className="text-pink-600 font-semibold tracking-wide">GALERÍA PROFESIONAL</span>
            <span className="text-2xl">✨</span>
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span className="bg-gradient-to-r from-pink-600 via-pink-400 to-white bg-clip-text text-transparent">
              RESULTADOS
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-pink-300 to-pink-600 bg-clip-text text-transparent">
              REALES
            </span>
          </h2>
          
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Mira los increíbles resultados que logran nuestros profesionales.
            <br className="hidden md:block" />
            <span className="text-pink-600 font-semibold">Cada imagen cuenta una historia de transformación.</span>
          </p>
        </motion.div>

        {/* Main Gallery */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7 }}
              className="relative h-full w-full"
            >
              <Image
                src={modelImages[currentIndex].src}
                alt={modelImages[currentIndex].alt}
                fill
                className="object-cover"
                quality={95}
                priority
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="max-w-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-center space-x-4 mb-4"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                    <span className="text-lg font-semibold">{modelImages[currentIndex].rating}.0</span>
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-4xl font-black mb-2"
                  >
                    {modelImages[currentIndex].title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-xl text-gray-200"
                  >
                    Usando: {modelImages[currentIndex].product}
                  </motion.p>
                </div>

                {/* Favorite Button */}
                <motion.button
                  onClick={() => toggleFavorite(modelImages[currentIndex].id)}
                  className={`absolute top-8 right-8 p-3 rounded-full backdrop-blur-md transition-all ${
                    favorites.includes(modelImages[currentIndex].id)
                      ? 'bg-red-500 text-white' 
                      : 'bg-white/20 text-white hover:text-red-400'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Heart 
                    size={24} 
                    fill={favorites.includes(modelImages[currentIndex].id) ? 'currentColor' : 'none'} 
                  />
                </motion.button>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center space-x-4 mt-8">
            {modelImages.map((image, index) => (
              <motion.button
                key={image.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                  index === currentIndex 
                    ? 'border-pink-500 scale-110' 
                    : 'border-transparent hover:border-pink-300'
                }`}
                whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  quality={60}
                />
                {index !== currentIndex && (
                  <div className="absolute inset-0 bg-black/40" />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="px-12 py-6 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-black text-xl rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 mx-auto"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>🔥 OBTÉN ESTOS RESULTADOS</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}