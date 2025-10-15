'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductModal from '@/components/ProductModal'
import OptimizedImage from '@/components/OptimizedImage'
import { products as importedProducts } from '../lib/products'
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  Star, 
  Filter,
  Grid,
  List,
  ChevronDown,
  Zap,
  Award,
  Crown,
  Sparkles,
  Eye,
  MessageCircle,
  CreditCard
} from 'lucide-react'

// Usar productos del archivo products.ts
const products = importedProducts

const categories = [
  { id: 'all', name: 'Todos', icon: '✨', count: products.length },
  { id: 'secadores', name: 'Secadores', icon: '🌪️', count: products.filter(p => p.category === 'secadores').length },
  { id: 'planchas', name: 'Planchas', icon: '🔥', count: products.filter(p => p.category === 'planchas').length },
  { id: 'pinzas', name: 'Pinzas', icon: '💫', count: products.filter(p => p.category === 'pinzas').length },
  { id: 'tijeras', name: 'Tijeras', icon: '✂️', count: products.filter(p => p.category === 'tijeras').length },
  { id: 'cortadoras', name: 'Cortadoras', icon: '⚡', count: products.filter(p => p.category === 'cortadoras').length },
  { id: 'cepillos', name: 'Cepillos', icon: '🌟', count: products.filter(p => p.category === 'cepillos').length },
]

export default function ProductCatalogNew() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [favorites, setFavorites] = useState<string[]>([])
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchTerm])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }

  const openProductModal = (product: typeof products[0]) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Abriendo modal para:', product.name)
    }
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeProductModal = () => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Cerrando modal')
    }
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const handleQuickOrder = (product: typeof products[0]) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Orden rápida para:', product.name)
    }
    openProductModal(product)
  }

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Premium con Gradiente Rosa */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50/40 to-pink-100/30">
        {/* Animated Particles Premium */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [0, 1.2, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-pink-400/20 rounded-full border border-pink-400/40 backdrop-blur-md mb-8 shadow-lg shadow-pink-200/50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-2xl">✨</span>
            <span className="text-pink-600 font-bold tracking-wide">CATÁLOGO PREMIUM</span>
            <span className="text-2xl">✨</span>
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent">
              PRODUCTOS
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">
              EXCLUSIVOS
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Descubre la colección más completa de herramientas profesionales.
            <br className="hidden md:block" />
            <span className="text-rose-600 font-semibold">Haz clic en cualquier producto para ver detalles.</span>
          </p>

          {/* TEST BUTTON - Removido para producción */}
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="mb-12 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-rose-400" size={20} />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white scale-105'
                  : 'bg-white/90 backdrop-blur-md text-gray-600 hover:bg-rose-50 hover:text-rose-600 border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedCategory === category.id ? 'bg-white/20' : 'bg-white/10'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <AnimatePresence>
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="group relative bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/60 hover:border-rose-300/60 transition-all duration-500 hover:shadow-xl hover:shadow-rose-500/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.01 }}
              >
                {/* Badge */}
                {product.isNew && (
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold rounded-full">
                    NUEVO
                  </div>
                )}
                {product.isPopular && !product.isNew && (
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-xs font-bold rounded-full">
                    POPULAR
                  </div>
                )}

                {/* Favorite Button */}
                <motion.button
                  onClick={() => toggleFavorite(product.id)}
                  className={`absolute top-4 right-4 z-20 p-2 rounded-full backdrop-blur-md transition-all ${
                    favorites.includes(product.id) 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white/60 text-gray-600 hover:text-red-400'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart size={16} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                </motion.button>

                {/* Product Image */}
                <div 
                  className="relative h-64 w-full cursor-pointer group/image"
                  onClick={() => openProductModal(product)}
                >
                  <OptimizedImage
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover/image:scale-105 transition-transform duration-500"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    hoverScale={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  
                  {/* Hover Overlay Premium con Rosa */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-600/40 via-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300 border border-pink-200">
                      <Eye className="text-pink-600" size={24} />
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={`${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-400 ml-2">{product.rating}</span>
                  </div>

                  {/* Product Name con efecto rosa */}
                  <h3 
                    className="font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors cursor-pointer text-lg line-clamp-1"
                    onClick={() => openProductModal(product)}
                  >
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-black bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation()
                          openProductModal(product)
                        }}
                        className="flex items-center space-x-1 px-3 py-2 bg-rose-50 text-rose-600 font-medium rounded-lg hover:bg-rose-100 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        title="Ver detalles"
                      >
                        <Eye size={14} />
                        <span className="hidden sm:inline text-sm">Ver</span>
                      </motion.button>

                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleQuickOrder(product)
                        }}
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        title="Comprar con Wompi"
                      >
                        <CreditCard size={14} />
                        <span className="hidden sm:inline text-sm">Comprar</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">😔</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No se encontraron productos</h3>
            <p className="text-gray-600">Intenta con otros términos de búsqueda o categoría</p>
          </motion.div>
        )}
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeProductModal}
      />
    </section>
  )
}