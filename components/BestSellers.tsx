'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { bestSellers } from '@/lib/products'

export function BestSellers() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-rose-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Premium header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="relative inline-flex items-center justify-center mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-4xl">🏆</span>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-dashed border-rose-400 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-12px] border-2 border-dotted border-pink-300 rounded-full"
            ></motion.div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent mb-6"
          >
            Productos Más Vendidos
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Los favoritos de nuestros clientes. Productos probados y aprobados por miles de profesionales
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center items-center gap-8 mt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-rose-400">500K+</div>
              <div className="text-gray-400 text-sm">Productos Vendidos</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">4.9/5</div>
              <div className="text-gray-400 text-sm">Calificación Promedio</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">10K+</div>
              <div className="text-gray-400 text-sm">Reseñas Positivas</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.03 }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              className="group relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-200"
            >
              {/* Ranking badge */}
              <div className="absolute top-4 left-4 z-20">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg ${
                    index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                    index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-600' :
                    index === 2 ? 'bg-gradient-to-br from-amber-600 to-amber-800' :
                    'bg-gradient-to-br from-slate-500 to-slate-700'
                  }`}
                >
                  #{index + 1}
                </motion.div>
              </div>

              {/* Product badges */}
              <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                {product.isPopular && (
                  <motion.div
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                  >
                    POPULAR
                  </motion.div>
                )}
                {product.discount && (
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                  >
                    -{product.discount}%
                  </motion.div>
                )}
              </div>

              {/* Product image */}
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-white p-8">
                <motion.div
                  animate={{
                    scale: hoveredProduct === product.id ? 1.15 : 1,
                    rotate: hoveredProduct === product.id ? 8 : 0
                  }}
                  transition={{ duration: 0.4 }}
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
                
                {/* Premium floating elements */}
                <motion.div
                  animate={{
                    y: hoveredProduct === product.id ? [0, -15, 0] : 0,
                    opacity: hoveredProduct === product.id ? 1 : 0.6
                  }}
                  transition={{
                    y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 0.3 }
                  }}
                  className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full opacity-60"
                />
                <motion.div
                  animate={{
                    y: hoveredProduct === product.id ? [0, -20, 0] : 0,
                    opacity: hoveredProduct === product.id ? 1 : 0.4
                  }}
                  transition={{
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
                    opacity: { duration: 0.3 }
                  }}
                  className="absolute bottom-6 left-6 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-40"
                />
                <motion.div
                  animate={{
                    y: hoveredProduct === product.id ? [0, -12, 0] : 0,
                    opacity: hoveredProduct === product.id ? 1 : 0.3
                  }}
                  transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
                    opacity: { duration: 0.3 }
                  }}
                  className="absolute top-1/2 left-8 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-30"
                />

                {/* Glow effect */}
                <motion.div
                  animate={{
                    opacity: hoveredProduct === product.id ? 0.8 : 0,
                    scale: hoveredProduct === product.id ? 1.2 : 0.8
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-gradient-to-br from-rose-400/20 via-pink-400/20 to-purple-400/20 rounded-3xl blur-xl"
                />
              </div>

              {/* Product info */}
              <div className="p-8">
                <motion.h3
                  animate={{
                    color: hoveredProduct === product.id ? '#1e293b' : '#374151'
                  }}
                  className="text-2xl font-bold mb-3 line-clamp-2 min-h-[4rem]"
                >
                  {product.name}
                </motion.h3>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                {/* Enhanced rating */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 px-3 py-1 rounded-full">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 + i * 0.05 }}
                        className={`text-lg ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-500' 
                            : 'text-gray-300'
                        }`}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm font-medium">
                    {product.rating} ({product.reviews} reseñas)
                  </span>
                </div>

                {/* Premium price display */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  
                  {/* Sales indicator */}
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-1">Vendidos</div>
                    <div className="text-2xl font-bold text-green-600">{product.reviews * 3}+</div>
                  </div>
                </div>

                {/* Premium actions */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 text-white py-4 px-6 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                      Comprar Ahora
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 8 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 text-white rounded-2xl flex items-center justify-center hover:shadow-2xl transition-all duration-300 text-xl"
                  >
                    ♡
                  </motion.button>
                </div>
              </div>

              {/* Premium hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredProduct === product.id ? 1 : 0 
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-rose-900/5 to-pink-900/5 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 25px 50px rgba(255,255,255,0.1)" 
            }}
            whileTap={{ scale: 0.98 }}
            className="group bg-gradient-to-r from-white via-gray-100 to-white text-slate-800 px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Ver Todos los Best Sellers
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-rose-100 to-pink-100"
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