'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { featuredProducts, categories } from '@/lib/products'

export const FeaturedProductsSpectacular = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  const filteredProducts = selectedCategory === 'all' 
    ? featuredProducts 
    : featuredProducts.filter(product => product.category === selectedCategory)

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Spectacular Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900">
        {/* Animated Particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Floating Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-48 h-48 border-4 border-purple-300/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-36 h-36 bg-gradient-to-r from-pink-400/10 to-purple-400/10 transform rotate-45"
          animate={{
            rotate: [45, 405, 45],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Spectacular Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-6xl lg:text-8xl font-black mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              PRODUCTOS
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-300 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              DESTACADOS
            </span>
          </motion.h2>
          
          <motion.p
            className="text-2xl text-purple-100 font-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            💫 Los productos más vendidos que están revolucionando la industria de la belleza. 
            <br />Calidad profesional comprobada por miles de estilistas exitosos
          </motion.p>
        </motion.div>

        {/* Spectacular Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.button
            onClick={() => setSelectedCategory('all')}
            className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                : 'bg-white/10 text-purple-100 hover:bg-white/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ✨ TODOS
          </motion.button>
          
          {categories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                  : 'bg-white/10 text-purple-100 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon} {category.name.toUpperCase()}
            </motion.button>
          ))}
        </motion.div>

        {/* Spectacular Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          layout
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
            >
              <motion.div
                className="relative w-full rounded-3xl overflow-hidden cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  z: 50
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 rounded-3xl"
                  animate={{ 
                    rotate: 360,
                    background: [
                      "linear-gradient(45deg, #ec4899, #a855f7, #6366f1)",
                      "linear-gradient(135deg, #6366f1, #ec4899, #a855f7)",
                      "linear-gradient(225deg, #a855f7, #6366f1, #ec4899)",
                      "linear-gradient(315deg, #ec4899, #a855f7, #6366f1)"
                    ]
                  }}
                  transition={{ 
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    background: { duration: 5, repeat: Infinity }
                  }}
                />
                
                <div className="absolute inset-1 bg-gradient-to-br from-purple-900/95 to-indigo-900/95 rounded-3xl overflow-hidden backdrop-blur-md">
                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Price Tag */}
                    <motion.div
                      className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full font-bold text-lg"
                      animate={{
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          "0 0 10px rgba(236, 72, 153, 0.5)",
                          "0 0 20px rgba(168, 85, 247, 0.8)",
                          "0 0 10px rgba(236, 72, 153, 0.5)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    >
                      ${product.price}
                    </motion.div>

                    {/* Rating Stars */}
                    <motion.div
                      className="absolute top-4 left-4 flex space-x-1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <motion.span
                          key={i}
                          className={`text-2xl ${
                            i < product.rating ? 'text-yellow-400' : 'text-gray-400'
                          }`}
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 360, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1
                          }}
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <motion.h3
                      className="text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300"
                      animate={hoveredProduct === product.id ? {
                        scale: [1, 1.05, 1],
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {product.name}
                    </motion.h3>
                    
                    <motion.p
                      className="text-purple-200 mb-4 opacity-80"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.8 }}
                      transition={{ delay: index * 0.1 + 0.7 }}
                    >
                      {product.description}
                    </motion.p>

                    {/* Action Button */}
                    <motion.button
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 rounded-full transition-all duration-300 hover:shadow-lg"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(236, 72, 153, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🛒 AGREGAR AL CARRITO
                    </motion.button>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      scale: { duration: 1.5, repeat: Infinity }
                    }}
                  >
                    <span className="text-2xl">💎</span>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.3, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="text-lg">✨</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.button
            className="group relative px-12 py-6 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-bold text-xl rounded-full overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 30px rgba(236, 72, 153, 0.5)",
                "0 0 60px rgba(168, 85, 247, 0.8)",
                "0 0 30px rgba(99, 102, 241, 0.5)"
              ]
            }}
            transition={{
              boxShadow: { duration: 3, repeat: Infinity }
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
            <span className="relative z-10">�️ EXPLORAR CATÁLOGO COMPLETO</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}