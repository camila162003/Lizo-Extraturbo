'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { featuredProducts, categories } from '@/lib/products'
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react'

export const ProductShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  const filteredProducts = selectedCategory === 'all' 
    ? featuredProducts.slice(0, 8) // Solo mostrar 8 productos para mejor rendimiento
    : featuredProducts.filter(product => product.category === selectedCategory).slice(0, 6)

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 to-purple-50 overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-rose-200/20 to-pink-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl lg:text-6xl font-black mb-6 text-gray-800"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              PRODUCTOS DESTACADOS
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            ✨ Descubre nuestra colección premium de herramientas profesionales
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-200'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-purple-300 hover:text-purple-600'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ✨ Todos
          </motion.button>
          
          {categories.slice(0, 4).map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-200'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-pink-300 hover:text-pink-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon} {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          layout
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
            >
              <motion.div
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-purple-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  {/* Price Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg"
                    animate={{
                      scale: hoveredProduct === product.id ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    ${product.price}
                  </motion.div>

                  {/* Rating */}
                  <div className="absolute top-4 left-4 flex space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < product.rating 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 20 }}
                    animate={{ y: hoveredProduct === product.id ? 0 : 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ShoppingCart size={16} className="inline mr-2" />
                      Agregar
                    </motion.button>
                    
                    <motion.button
                      className="bg-white/90 backdrop-blur-md text-gray-700 p-2 rounded-xl shadow-lg hover:bg-white transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart size={16} />
                    </motion.button>
                    
                    <motion.button
                      className="bg-white/90 backdrop-blur-md text-gray-700 p-2 rounded-xl shadow-lg hover:bg-white transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye size={16} />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <motion.h3
                    className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300"
                    animate={hoveredProduct === product.id ? {
                      scale: [1, 1.02, 1],
                    } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {product.name}
                  </motion.h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 px-3 py-1 rounded-full text-xs font-medium">
                      Premium
                    </span>
                    <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                      En Stock
                    </span>
                  </div>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0"
                  animate={{
                    opacity: hoveredProduct === product.id ? [0, 1, 0] : 0,
                    x: hoveredProduct === product.id ? [-100, 400] : -100,
                  }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white font-bold text-lg rounded-full overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600"
              initial={{ x: "100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">🚀 Ver Todos los Productos</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}