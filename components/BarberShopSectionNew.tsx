'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Scissors, Users, Star, Award, Crown, Sparkles } from 'lucide-react'

export const BarberShopSection = () => {
  const [activeCategory, setActiveCategory] = useState('professional')

  const professionalProducts = [
    {
      id: 1,
      name: "Barbera Clásica Premium",
      category: "Barberas Tradicionales",
      price: "35,000",
      image: "/imagenes lizo/PNG barberas/barbera ng.png",
      description: "Diseño clásico para profesionales exigentes"
    },
    {
      id: 2,
      name: "Barber Pole USA",
      category: "Postes Barbería",
      price: "350,000",
      image: "/imagenes lizo/PNG barberas/barb met EEUU.png",
      description: "Poste barbero premium estilo americano"
    },
    {
      id: 3,
      name: "Barber Pole Reino Unido", 
      category: "Postes Barbería",
      price: "350,000",
      image: "/imagenes lizo/PNG barberas/barb met inglaterra.png",
      description: "Elegante poste barbero estilo británico"
    },
    {
      id: 4,
      name: "Barbera Colores Premium",
      category: "Barberas Decorativas",
      price: "45,000",
      image: "/imagenes lizo/PNG barberas/barb colores barberia.png",
      description: "Diseños coloridos para espacios modernos"
    },
    {
      id: 5,
      name: "Barbera Madera Noble",
      category: "Barberas Artesanales",
      price: "65,000",
      image: "/imagenes lizo/PNG barberas/barb madera.png",
      description: "Acabado en madera natural premium"
    },
    {
      id: 6,
      name: "Barbera Madera Roja",
      category: "Barberas Artesanales", 
      price: "70,000",
      image: "/imagenes lizo/PNG barberas/barb madera roja.png",
      description: "Madera roja exclusiva artesanal"
    }
  ]

  const toolsAndSupplies = [
    {
      id: 7,
      name: "Cuchilla Dorada Premium",
      category: "Herramientas",
      price: "25,000",
      image: "/imagenes lizo/PNG barberas/cuchilla dorada.png",
      description: "Cuchilla profesional con acabado dorado"
    },
    {
      id: 8,
      name: "Cuchilla Lila-Rosado",
      category: "Herramientas",
      price: "22,000", 
      image: "/imagenes lizo/PNG barberas/cuchilla lila rosado.png",
      description: "Diseño único en tonos lila y rosado"
    },
    {
      id: 9,
      name: "Razuradoras Premium",
      category: "Herramientas",
      price: "85,000",
      image: "/imagenes lizo/PNG barberas/razuradoras-disenos.png",
      description: "Set completo de razuradoras profesionales"
    },
    {
      id: 10,
      name: "Barbera Edición Especial",
      category: "Colección Limitada",
      price: "120,000",
      image: "/imagenes lizo/PNG barberas/barbera esqueleto.png",
      description: "Diseño exclusivo edición limitada"
    }
  ]

  const categories = [
    { id: 'professional', name: 'Productos Profesionales', icon: '💈', products: professionalProducts },
    { id: 'tools', name: 'Herramientas & Suministros', icon: '🔧', products: toolsAndSupplies }
  ]

  const activeProducts = categories.find(cat => cat.id === activeCategory)?.products || []

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(parseInt(price))
  }

  return (
    <section className="py-32 bg-gradient-to-br from-white via-pink-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569-13.431-30-30-30v60c16.569 0 30-13.431 30-30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
            <span className="text-pink-600">💈</span>
            <span className="text-pink-600 font-semibold tracking-wide">EQUIPAMIENTO ÉLITE</span>
            <Crown className="text-pink-400" size={20} />
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span className="bg-gradient-to-r from-pink-600 via-pink-400 to-white bg-clip-text text-transparent">
              MAESTROS
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-pink-300 to-pink-600 bg-clip-text text-transparent">
              BARBEROS
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            🏆 Los equipos que usan los barberos más exitosos del país.
            <br className="hidden md:block" />
            <span className="text-pink-600 font-semibold">Invierte en herramientas que multiplican tus ganancias.</span>
          </p>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex bg-white/60 backdrop-blur-md rounded-2xl p-2 border border-pink-200">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-xl font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-pink-600 hover:bg-pink-100'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-2xl">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {activeProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="group bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden border border-pink-200 hover:border-pink-400 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-pink-600/90 backdrop-blur-md text-white text-xs font-bold rounded-full border border-pink-400/30">
                    {product.category}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-2 bg-white/80 backdrop-blur-md text-pink-600 font-bold rounded-xl border border-pink-200">
                    {formatPrice(product.price)}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">5.0</span>
                  </div>

                  <motion.button
                    className="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver Más
                  </motion.button>
                </div>
              </div>

              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Services Section */}
        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-white/30 rounded-full border border-pink-400/30 backdrop-blur-md mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Award className="text-pink-500" size={20} />
            <span className="text-pink-600 font-semibold tracking-wide">SERVICIOS PROFESIONALES</span>
            <Sparkles className="text-pink-500" size={20} />
          </motion.div>

          <h3 className="text-4xl md:text-6xl font-black mb-8 leading-none">
            <span className="bg-gradient-to-r from-pink-600 via-pink-400 to-white bg-clip-text text-transparent">
              EXPERTOS EN
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
              BARBERÍA
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              {
                icon: "✂️",
                title: "Cortes Profesionales",
                description: "Técnicas avanzadas y estilos únicos"
              },
              {
                icon: "🧔",
                title: "Cuidado de Barba",
                description: "Arreglo y styling de barba premium"
              },
              {
                icon: "💈",
                title: "Experiencia Completa",
                description: "Servicio integral de barbería clásica"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-8 bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 hover:border-yellow-400/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.button
            className="group mt-16 px-12 py-6 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xl rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 mx-auto"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explorar Catálogo Barbería</span>
            <Scissors className="group-hover:rotate-12 transition-transform" size={24} />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-red-400 to-yellow-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </section>
  )
}