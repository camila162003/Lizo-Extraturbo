'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { bestSellers } from '@/lib/products'

export const BestSellersSpectacular = () => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Spectacular Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-rose-900">
        {/* Dark Magic Particles */}
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Dark Geometric Elements */}
        <motion.div
          className="absolute top-1/3 left-1/6 w-40 h-40 border-2 border-purple-400/20 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-slate-700/10 to-purple-700/10 transform rotate-45"
          animate={{
            rotate: [45, 405, 45],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
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
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <span className="bg-gradient-to-r from-white via-purple-200 to-slate-200 bg-clip-text text-transparent">
              MÁS
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-300 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              VENDIDOS
            </span>
          </motion.h2>
          
          <motion.p
            className="text-2xl text-purple-100 font-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            🏆 Los productos preferidos por profesionales de todo el mundo
          </motion.p>
        </motion.div>

        {/* Spectacular Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
            >
              <motion.div
                className="relative w-full rounded-3xl overflow-hidden cursor-pointer h-[500px]"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 15,
                  z: 100
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Dark Animated Border */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-slate-600 via-purple-600 to-pink-600 rounded-3xl"
                  animate={{ 
                    rotate: 360,
                    background: [
                      "linear-gradient(45deg, #475569, #9333ea, #ec4899)",
                      "linear-gradient(135deg, #ec4899, #475569, #9333ea)",
                      "linear-gradient(225deg, #9333ea, #ec4899, #475569)",
                      "linear-gradient(315deg, #475569, #9333ea, #ec4899)"
                    ]
                  }}
                  transition={{ 
                    rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                    background: { duration: 6, repeat: Infinity }
                  }}
                />
                
                <div className="absolute inset-1 bg-gradient-to-br from-slate-900/98 to-purple-900/98 rounded-3xl overflow-hidden backdrop-blur-md">
                  {/* Rank Badge */}
                  <motion.div
                    className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black font-black text-xl z-20"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 360],
                      boxShadow: [
                        "0 0 20px rgba(250, 204, 21, 0.5)",
                        "0 0 40px rgba(251, 146, 60, 0.8)",
                        "0 0 20px rgba(250, 204, 21, 0.5)"
                      ]
                    }}
                    transition={{
                      scale: { duration: 2, repeat: Infinity },
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      boxShadow: { duration: 1.5, repeat: Infinity }
                    }}
                  >
                    #{index + 1}
                  </motion.div>

                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden mt-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Dark Overlay Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Price Tag */}
                    <motion.div
                      className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full font-bold text-lg"
                      animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          "0 0 15px rgba(147, 51, 234, 0.5)",
                          "0 0 30px rgba(236, 72, 153, 0.8)",
                          "0 0 15px rgba(147, 51, 234, 0.5)"
                        ]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity
                      }}
                    >
                      ${product.price}
                    </motion.div>

                    {/* Best Seller Badge */}
                    <motion.div
                      className="absolute bottom-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full font-bold text-sm"
                      animate={{
                        x: [0, 5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    >
                      🔥 BEST SELLER
                    </motion.div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <motion.h3
                      className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300"
                      animate={hoveredProduct === product.id ? {
                        scale: [1, 1.05, 1],
                      } : {}}
                      transition={{ duration: 0.5 }}
                    >
                      {product.name}
                    </motion.h3>
                    
                    <motion.p
                      className="text-slate-300 mb-4 opacity-80"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.8 }}
                      transition={{ delay: index * 0.1 + 0.7 }}
                    >
                      {product.description}
                    </motion.p>

                    {/* Rating Stars */}
                    <motion.div
                      className="flex space-x-1 mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <motion.span
                          key={i}
                          className={`text-xl ${
                            i < product.rating ? 'text-yellow-400' : 'text-gray-600'
                          }`}
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 360, 0]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.1
                          }}
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Action Button */}
                    <motion.button
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-full transition-all duration-300"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 15px 30px rgba(147, 51, 234, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      👑 OBTENER AHORA
                    </motion.button>
                  </div>

                  {/* Dark Floating Elements */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      rotate: -360,
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <span className="text-2xl">👑</span>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-r from-slate-600 to-purple-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      y: [0, -15, 0],
                      scale: [1, 1.3, 1]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="text-lg">💎</span>
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
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button
            className="group relative px-12 py-6 bg-gradient-to-r from-slate-700 via-purple-700 to-pink-700 text-white font-bold text-xl rounded-full overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 30px rgba(147, 51, 234, 0.5)",
                "0 0 60px rgba(236, 72, 153, 0.8)",
                "0 0 30px rgba(71, 85, 105, 0.5)"
              ]
            }}
            transition={{
              boxShadow: { duration: 4, repeat: Infinity }
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />
            <span className="relative z-10">🏆 VER MÁS BEST SELLERS</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}