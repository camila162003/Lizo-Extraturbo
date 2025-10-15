'use client'

import { motion } from 'framer-motion'
import { Scissors, Award, Shield, TrendingUp, Filter, Grid, List } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function BarberiaPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Todos los Productos', count: 45 },
    { id: 'maquinas', name: 'Máquinas Cortadoras', count: 12 },
    { id: 'tijeras', name: 'Tijeras Profesionales', count: 8 },
    { id: 'navajas', name: 'Navajas y Rastrillos', count: 6 },
    { id: 'productos', name: 'Productos de Cuidado', count: 10 },
    { id: 'accesorios', name: 'Accesorios', count: 9 },
  ]

  const products = [
    {
      id: 1,
      name: 'Máquina Cortadora Profesional X1',
      price: 450000,
      originalPrice: 520000,
      image: '/lizo/barberia/maquina-x1.jpg',
      rating: 4.9,
      reviews: 89,
      category: 'maquinas',
      features: ['Motor de 7200 RPM', 'Cuchillas de acero japonés', 'Batería 4 horas'],
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Kit Tijeras Barbero Premium',
      price: 320000,
      originalPrice: 380000,
      image: '/lizo/barberia/tijeras-premium.jpg',
      rating: 4.8,
      reviews: 156,
      category: 'tijeras',
      features: ['Acero inoxidable', 'Ergonómicas', 'Estuche incluido'],
      badge: 'Premium'
    },
    {
      id: 3,
      name: 'Navaja Straight Razor Clásica',
      price: 180000,
      originalPrice: 210000,
      image: '/lizo/barberia/navaja-clasica.jpg',
      rating: 4.7,
      reviews: 67,
      category: 'navajas',
      features: ['Hoja de acero al carbón', 'Mango de madera', 'Afilado perfecto'],
      badge: 'Clásico'
    },
    {
      id: 4,
      name: 'Aceite para Barba Hidratante',
      price: 45000,
      originalPrice: 55000,
      image: '/lizo/barberia/aceite-barba.jpg',
      rating: 4.6,
      reviews: 203,
      category: 'productos',
      features: ['Aceites naturales', 'Aroma masculino', '50ml'],
      badge: 'Natural'
    },
    {
      id: 5,
      name: 'Cepillo Barba Cerdas Naturales',
      price: 35000,
      originalPrice: 42000,
      image: '/lizo/barberia/cepillo-barba.jpg',
      rating: 4.5,
      reviews: 124,
      category: 'accesorios',
      features: ['Cerdas de jabalí', 'Mango ergonómico', 'Distribución perfecta'],
      badge: 'Eco'
    },
    {
      id: 6,
      name: 'Máquina Perfiladora Detalle',
      price: 280000,
      originalPrice: 320000,
      image: '/lizo/barberia/perfiladora.jpg',
      rating: 4.8,
      reviews: 91,
      category: 'maquinas',
      features: ['Precisión extrema', 'Inalámbrica', 'Cuchilla T-blade'],
      badge: 'Precisión'
    },
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white rounded-full" />
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-white rounded-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/50 rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Scissors className="w-12 h-12 text-yellow-500 mr-4" />
              <h1 className="text-5xl md:text-7xl font-display font-bold">
                BARBERÍA
                <span className="block text-3xl md:text-4xl text-gray-400 font-normal mt-2">
                  PROFESIONAL
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Herramientas de precisión y productos premium para el barbero contemporáneo que valora la tradición y la innovación.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all"
              >
                Explorar Catálogo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 rounded-full font-bold text-lg hover:bg-yellow-500 hover:text-black transition-all"
              >
                Ver Ofertas
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 right-16 w-20 h-20 bg-yellow-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-16 w-16 h-16 bg-orange-500/20 rounded-full blur-xl"
        />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, value: '15+', label: 'Años de Experiencia' },
              { icon: Shield, value: '500+', label: 'Barberos Satisfechos' },
              { icon: TrendingUp, value: '98%', label: 'Calidad Garantizada' }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-yellow-500" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Herramientas Profesionales
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Selección curada de los mejores productos para barbería profesional
            </p>
          </motion.div>

          {/* Filter Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12 space-y-4 lg:space-y-0">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-yellow-500 text-black'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${
                    viewMode === 'grid' ? 'bg-yellow-500 text-black' : 'text-gray-400'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${
                    viewMode === 'list' ? 'bg-yellow-500 text-black' : 'text-gray-400'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-500/50 transition-all group ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
              >
                {/* Product Image */}
                <div className={`bg-gradient-to-br from-gray-700 to-gray-800 relative ${
                  viewMode === 'list' ? 'w-1/3' : 'h-64'
                }`}>
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                      {product.badge}
                    </span>
                  </div>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <Scissors className="w-16 h-16 mx-auto mb-2" />
                      <p className="font-medium">{product.name}</p>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                    {product.name}
                  </h3>

                  {/* Features */}
                  <ul className="text-sm text-gray-400 mb-4 space-y-1">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-yellow-500">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-3 rounded-lg font-bold hover:from-yellow-400 hover:to-orange-400 transition-all"
                  >
                    Agregar al Carrito
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              ¿Listo para Elevar tu Barbería?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Únete a cientos de barberos profesionales que confían en nuestros productos
            </p>
            <Link
              href="/contact"
              className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-colors"
            >
              Contactar Asesor Comercial
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}