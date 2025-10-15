'use client'

import { motion } from 'framer-motion'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import ProductCatalogNew from '@/components/ProductCatalogNew'
import { NavBar } from '@/components/NavBarNew'
import { Footer } from '@/components/Footer'

export default function ProductosPage() {
  return (
    <>
      <NavBar />
      <main className="relative min-h-screen">
        {/* Professional Animated Background */}
        <AnimatedBackground variant="professional" intensity="medium" />
        
        {/* Header Section */}
        <section className="relative z-10 pt-32 pb-20 bg-gradient-to-br from-white via-pink-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl font-bold text-pink-600 mb-6">
                <span 
                  className="bg-gradient-to-r from-pink-600 via-pink-400 to-white bg-clip-text text-transparent"
                >
                  CATÁLOGO
                </span>
                <br />
                <span className="text-pink-600">COMPLETO</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Descubre nuestra colección completa de productos de belleza profesional. 
                Desde secadores hasta planchas, cada producto está diseñado para 
                transformar tu experiencia de belleza.
              </p>
              
              {/* Feature highlights */}
              <div className="flex flex-wrap justify-center gap-6 mt-12">
                {[
                  { icon: '🔥', text: 'Tecnología Avanzada' },
                  { icon: '⭐', text: 'Calidad Premium' },
                  { icon: '🚚', text: 'Envío Nacional' },
                  { icon: '💎', text: 'Garantía Extendida' }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20"
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <span className="text-white font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Catalog */}
        <ProductCatalogNew />
      </main>
      <Footer />
    </>
  )
}