'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { featuredProducts } from '@/lib/products'

export function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  const categories = [
    { id: 'all', name: 'Todos', icon: '✨' },
    { id: 'secadores', name: 'Secadores', icon: '💨' },
    { id: 'planchas', name: 'Planchas', icon: '🔥' },
    { id: 'pinzas', name: 'Pinzas', icon: '💫' },
    { id: 'barberia', name: 'Barbería', icon: '💈' },
    { id: 'spa', name: 'Spa', icon: '💅' }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? featuredProducts 
    : featuredProducts.filter(product => product.category === selectedCategory)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-rose-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-amber-200/10 to-orange-200/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with logo integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="relative inline-flex items-center justify-center mb-8"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-slate-800 to-slate-600 rounded-full flex items-center justify-center shadow-2xl">
              <Image
                src="/logo y carrusel/Logolizo.jpg"
                alt="Lizo Belleza Logo"
                width={80}
                height={80}
                className="rounded-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  target.parentElement!.innerHTML = '<span class="text-4xl font-bold text-white">LIZO</span>'
                }}
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-dashed border-rose-300 rounded-full"
            ></motion.div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent mb-6"
          >
            Productos Destacados
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-slate-600 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Descubre nuestra selección premium de productos profesionales, 
            diseñados para brindarte los mejores resultados en belleza y cuidado personal
          </motion.p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-slate-800 to-slate-700 text-white shadow-xl'
                  : 'bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white shadow-lg hover:shadow-xl'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-lg">{category.icon}</span>
                {category.name}
              </span>
              {selectedCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Products grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100"
              >
                {/* Product badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                  {product.isNew && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                    >
                      NUEVO
                    </motion.div>
                  )}
                  {product.isPopular && (
                    <motion.div
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                    >
                      POPULAR
                    </motion.div>
                  )}
                  {product.discount && (
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                    >
                      -{product.discount}%
                    </motion.div>
                  )}
                </div>

                {/* Product image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-50 to-white p-6">
                  <motion.div
                    animate={{
                      scale: hoveredProduct === product.id ? 1.1 : 1,
                      rotate: hoveredProduct === product.id ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain transition-all duration-500 group-hover:drop-shadow-2xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = `https://via.placeholder.com/300x300/e2e8f0/64748b?text=${encodeURIComponent(product.name)}`
                      }}
                    />
                  </motion.div>
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{
                      y: hoveredProduct === product.id ? [0, -10, 0] : 0,
                      opacity: hoveredProduct === product.id ? 1 : 0.7
                    }}
                    transition={{
                      y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                      opacity: { duration: 0.3 }
                    }}
                    className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full opacity-70"
                  />
                  <motion.div
                    animate={{
                      y: hoveredProduct === product.id ? [0, -15, 0] : 0,
                      opacity: hoveredProduct === product.id ? 1 : 0.5
                    }}
                    transition={{
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                      opacity: { duration: 0.3 }
                    }}
                    className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-50"
                  />
                </div>

                {/* Product info */}
                <div className="p-6">
                  <motion.h3
                    animate={{
                      color: hoveredProduct === product.id ? '#1e293b' : '#475569'
                    }}
                    className="text-xl font-bold mb-2 line-clamp-2 min-h-[3.5rem]"
                  >
                    {product.name}
                  </motion.h3>
                  
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-400' 
                              : 'text-slate-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-slate-500 text-sm">
                      ({product.reviews} reseñas)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-slate-800">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-slate-500 line-through text-sm">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-slate-800 to-slate-700 text-white py-3 px-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 group"
                    >
                      <span className="group-hover:scale-105 transition-transform duration-300">
                        Agregar al Carrito
                      </span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 text-white rounded-2xl flex items-center justify-center hover:shadow-xl transition-all duration-300"
                    >
                      ♡
                    </motion.button>
                  </div>
                </div>

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredProduct === product.id ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-rose-900/5 pointer-events-none"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)" 
            }}
            whileTap={{ scale: 0.98 }}
            className="group bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Ver Todos los Productos
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}