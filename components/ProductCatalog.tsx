'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { 
  ShoppingCart, 
  Heart, 
  Eye, 
  Star, 
  Filter,
  Grid3X3,
  List,
  Search,
  ArrowRight,
  Zap,
  Award,
  Truck
} from 'lucide-react'

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating: number
  reviews: number
  description: string
  features: string[]
  isNew?: boolean
  isBestSeller?: boolean
  discount?: number
}

const products: Product[] = [
  {
    id: '1',
    name: 'Plancha Profesional Titanio',
    price: 129.99,
    originalPrice: 159.99,
    image: '/imagenes lizo/PNG planchas/plancha1.png',
    category: 'planchas',
    rating: 4.8,
    reviews: 342,
    description: 'Plancha de cabello profesional con tecnología de titanio avanzada.',
    features: ['Titanio premium', 'Calentamiento rápido', 'Control digital'],
    isNew: true,
    discount: 19
  },
  {
    id: '2',
    name: 'Secador Iónico Pro',
    price: 89.99,
    originalPrice: 119.99,
    image: '/imagenes lizo/PNG secadores/secador1.png',
    category: 'secadores',
    rating: 4.9,
    reviews: 567,
    description: 'Secador profesional con tecnología iónica para cabello brillante.',
    features: ['Tecnología iónica', 'Motor AC', '3 velocidades'],
    isBestSeller: true,
    discount: 25
  },
  {
    id: '3',
    name: 'Kit Barbería Profesional',
    price: 199.99,
    image: '/imagenes lizo/PNG barberas/barb madera.png',
    category: 'barberia',
    rating: 4.7,
    reviews: 234,
    description: 'Set completo para barbería profesional con acabados premium.',
    features: ['Madera premium', 'Cuchillas japonesas', 'Estuche incluido'],
    isNew: true
  },
  {
    id: '4',
    name: 'Cortadora Profesional',
    price: 149.99,
    originalPrice: 179.99,
    image: '/imagenes lizo/PNG cortadoras/cortadora1.png',
    category: 'cortadoras',
    rating: 4.6,
    reviews: 189,
    description: 'Cortadora de cabello profesional con cuchillas de acero inoxidable.',
    features: ['Motor potente', 'Batería larga duración', 'Cuchillas premium'],
    discount: 17
  },
  {
    id: '5',
    name: 'Tijeras Profesionales',
    price: 79.99,
    originalPrice: 99.99,
    image: '/imagenes lizo/PNG tijeras/tijera1.png',
    category: 'tijeras',
    rating: 4.8,
    reviews: 156,
    description: 'Tijeras de acero japonés para cortes precisos y profesionales.',
    features: ['Acero japonés', 'Filo perfecto', 'Ergonómicas'],
    discount: 20
  },
  {
    id: '6',
    name: 'Cepillo Desenredante',
    price: 24.99,
    image: '/imagenes lizo/PNG cepillos/cepillo1.png',
    category: 'cepillos',
    rating: 4.5,
    reviews: 89,
    description: 'Cepillo especial para desenredar sin dañar el cabello.',
    features: ['Cerdas suaves', 'Anti-estático', 'Mango ergonómico'],
    isBestSeller: true
  },
  {
    id: '7',
    name: 'Set de Pinzas Premium',
    price: 34.99,
    image: '/imagenes lizo/PNG pinzas/pinza1.png',
    category: 'pinzas',
    rating: 4.4,
    reviews: 67,
    description: 'Set completo de pinzas profesionales para todo tipo de peinados.',
    features: ['Acero inoxidable', 'Agarre perfecto', 'Set completo'],
    isNew: true
  },
  {
    id: '8',
    name: 'Patillera de Precisión',
    price: 69.99,
    originalPrice: 89.99,
    image: '/imagenes lizo/PNG patilleras/patillera1.png',
    category: 'patilleras',
    rating: 4.7,
    reviews: 123,
    description: 'Patillera de precisión para detalles perfectos.',
    features: ['Precisión máxima', 'Batería larga', 'Fácil limpieza'],
    discount: 22
  }
]

const categories = [
  { id: 'all', name: 'Todos', count: products.length },
  { id: 'planchas', name: 'Planchas', count: products.filter(p => p.category === 'planchas').length },
  { id: 'secadores', name: 'Secadores', count: products.filter(p => p.category === 'secadores').length },
  { id: 'barberia', name: 'Barbería', count: products.filter(p => p.category === 'barberia').length },
  { id: 'cortadoras', name: 'Cortadoras', count: products.filter(p => p.category === 'cortadoras').length },
  { id: 'tijeras', name: 'Tijeras', count: products.filter(p => p.category === 'tijeras').length },
  { id: 'cepillos', name: 'Cepillos', count: products.filter(p => p.category === 'cepillos').length },
  { id: 'pinzas', name: 'Pinzas', count: products.filter(p => p.category === 'pinzas').length },
  { id: 'patilleras', name: 'Patilleras', count: products.filter(p => p.category === 'patilleras').length },
]

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [favorites, setFavorites] = useState<string[]>([])
  const [cart, setCart] = useState<string[]>([])

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const addToCart = (productId: string) => {
    setCart(prev => [...prev, productId])
    // Show success animation or notification here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            CATÁLOGO PROFESIONAL
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Descubre nuestra colección premium de herramientas de belleza y barbería
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="bg-black/20 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* View Mode */}
            <div className="flex items-center space-x-2 bg-white/10 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-purple-500 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid3X3 size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'list' 
                    ? 'bg-purple-500 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-xl border transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent'
                    : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="group bg-black/20 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                layout
              >
                {/* Product Image */}
                <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-lg">
                        NUEVO
                      </span>
                    )}
                    {product.isBestSeller && (
                      <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-lg">
                        MÁS VENDIDO
                      </span>
                    )}
                    {product.discount && (
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-lg">
                        -{product.discount}%
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.button
                      onClick={() => toggleFavorite(product.id)}
                      className={`p-2 rounded-lg backdrop-blur-md border transition-all ${
                        favorites.includes(product.id)
                          ? 'bg-red-500/30 border-red-400 text-red-300'
                          : 'bg-black/30 border-white/20 text-white/70'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart size={16} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                    </motion.button>
                    
                    <motion.button
                      onClick={() => setSelectedProduct(product)}
                      className="p-2 rounded-lg bg-black/30 backdrop-blur-md border border-white/20 text-white/70 hover:text-white transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye size={16} />
                    </motion.button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-purple-400 text-sm font-medium capitalize">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="text-yellow-400" size={14} fill="currentColor" />
                      <span className="text-gray-300 text-sm">{product.rating}</span>
                      <span className="text-gray-500 text-sm">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-lg"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-white">
                        ${product.price}
                      </div>
                      {product.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </div>
                      )}
                    </div>
                    
                    <motion.button
                      onClick={() => addToCart(product.id)}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ShoppingCart size={16} />
                      <span>Agregar</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No se encontraron productos
            </h3>
            <p className="text-gray-400">
              Intenta ajustar tus filtros o términos de búsqueda
            </p>
          </motion.div>
        )}

        {/* Trust Indicators */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {[
            { icon: Zap, title: 'Entrega Rápida', description: 'Envío en 24-48 horas' },
            { icon: Award, title: 'Calidad Premium', description: 'Productos certificados' },
            { icon: Truck, title: 'Envío Gratis', description: 'En compras +$50' },
          ].map((item, index) => (
            <div key={index} className="text-center p-6 bg-black/20 backdrop-blur-md rounded-2xl border border-white/10">
              <item.icon className="text-purple-400 mx-auto mb-4" size={48} />
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Cart indicator */}
      {cart.length > 0 && (
        <motion.div
          className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg cursor-pointer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center space-x-2">
            <ShoppingCart size={20} />
            <span className="font-semibold">{cart.length}</span>
          </div>
        </motion.div>
      )}
    </div>
  )
}