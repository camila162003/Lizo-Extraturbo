'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { RotateCw, ZoomIn, Eye, Sparkles } from 'lucide-react'

export const ProductShowcase3D = () => {
  const [currentAngle, setCurrentAngle] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const productImages = [
    '/imagenes lizo/PNG planchas/miniplancha.png',
    '/imagenes lizo/PNG secadores/extraturbo 5500.png',
    '/imagenes lizo/PNG secadores/kf8946.png',
    '/imagenes lizo/PNG cepillos/cepillo-nanno.png'
  ]

  const currentProduct = {
    name: "Plancha Profesional Cerámica",
    description: "Tecnología avanzada para resultados perfectos",
    price: "$89.99",
    features: [
      "Cerámica de alta calidad",
      "Calentamiento rápido",
      "Control de temperatura",
      "Diseño ergonómico"
    ]
  }

  const rotateProduct = () => {
    setCurrentAngle(prev => prev + 90)
  }

  const toggleZoom = () => {
    setIsZoomed(!isZoomed)
  }

  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-rose-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl lg:text-7xl font-black mb-8"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                VISTA
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
                360°
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-purple-100 mb-8 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              ✨ Explora cada detalle de nuestros productos profesionales con nuestra galería interactiva
            </motion.p>

            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                "🔄 Rotación interactiva",
                "🔍 Zoom de alta calidad",
                "💎 Detalles profesionales",
                "⚡ Tecnología avanzada"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-pink-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">🛒 Ver Catálogo</span>
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-purple-300/30 text-purple-100 font-bold rounded-full backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📋 Información
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Interactive Product Viewer */}
          <motion.div
            className="relative h-[600px] rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md border border-purple-300/20 rounded-3xl overflow-hidden">
              
              {/* Product Display Area */}
              <div className="relative w-full h-full flex items-center justify-center p-8">
                {/* Logo Corner */}
                <div className="absolute top-4 left-4">
                  <Image
                    src="/logo y carrusel/Logolizo.jpg"
                    alt="Lizo"
                    width={45}
                    height={45}
                    className="rounded-lg border-2 border-white/30"
                  />
                </div>

                <motion.div
                  className="relative w-80 h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 backdrop-blur-md"
                  animate={{
                    rotateY: currentAngle,
                    scale: isZoomed ? 1.2 : 1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Main Product Image */}
                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={productImages[0]}
                      alt="Producto Principal"
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                    
                    {/* Premium Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-3xl blur-2xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Price Tag */}
                    <motion.div
                      className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-bold shadow-lg"
                      animate={{
                        y: [0, -5, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {currentProduct.price}
                    </motion.div>
                  </motion.div>

                  {/* Floating Sparkles */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 text-yellow-300"
                      style={{
                        left: `${15 + i * 10}%`,
                        top: `${10 + Math.random() * 80}%`,
                      }}
                      animate={{
                        scale: [0, 1.2, 0],
                        rotate: [0, 180, 360],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeOut"
                      }}
                    >
                      <Sparkles size={12} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Control Panel */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <motion.button
                      onClick={rotateProduct}
                      className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-xl font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <RotateCw size={16} />
                      <span>Rotar</span>
                    </motion.button>
                    
                    <motion.button
                      onClick={toggleZoom}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${
                        isZoomed 
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                          : 'bg-white/20 text-pink-200 hover:bg-white/30'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ZoomIn size={16} />
                      <span>{isZoomed ? 'Normal' : 'Zoom'}</span>
                    </motion.button>
                  </div>
                  
                  <div className="text-xs text-pink-200 opacity-75">
                    Vista Interactiva
                  </div>
                </div>
              </motion.div>

              {/* Product Info Overlay */}
              <motion.div
                className="absolute top-6 right-6 bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/10 max-w-xs"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-white">
                  <h3 className="font-bold text-lg mb-2">{currentProduct.name}</h3>
                  <p className="text-pink-200 text-sm mb-3">{currentProduct.description}</p>
                  
                  <div className="space-y-1 mb-3">
                    {currentProduct.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs">
                        <div className="w-1 h-1 bg-green-400 rounded-full" />
                        <span className="text-blue-200">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
                      <span className="text-xs text-pink-200">4.9/5</span>
                    </div>
                    <motion.button
                      className="bg-gradient-to-r from-pink-500 to-purple-600 px-3 py-1 rounded-lg text-xs font-bold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver Más
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full backdrop-blur-md border border-white/10 flex items-center justify-center"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Eye size={20} className="text-pink-300" />
              </motion.div>

              <motion.div
                className="absolute bottom-20 right-4 w-8 h-8 bg-gradient-to-r from-rose-400/20 to-pink-400/20 rounded-full backdrop-blur-md border border-white/10"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Product Gallery */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Más Productos Destacados
            </span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {productImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative h-32 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl overflow-hidden border border-purple-300/20">
                  <Image
                    src={image}
                    alt={`Producto ${index + 1}`}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
                  >
                    <span className="text-white text-sm font-semibold">Ver Producto</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}