'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ShoppingBag, Shield, Truck, Star, 
  TrendingUp, Sparkles, ChevronRight, Package,
  Users, CheckCircle, Heart, Eye
} from 'lucide-react'

interface Product {
  id: string
  name: string
  category: string
  price: number
  original_price?: number | null
  description?: string | null
  image?: string | null
  image_url?: string | null
  in_stock?: boolean | null
  featured?: boolean | null
  bestseller?: boolean | null
  rating?: number | null
  reviews?: number | null
  sales_count?: number | null
}

interface Props {
  allProducts: Product[]
  featuredProducts: Product[]
  bestsellers: Product[]
}

export default function FeaturedProductsSection({ allProducts, featuredProducts, bestsellers }: Props) {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-pink-50/20 to-white relative overflow-hidden">
      {/* Decoraciones de fondo animadas */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#E91E63]/20 to-[#9C27B0]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#9C27B0]/20 to-[#673AB7]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header ESPECTACULAR con logo mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-20"
        >
          {/* Badge animado */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] px-8 py-3 rounded-full mb-8 shadow-2xl"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-sm font-black text-white uppercase tracking-widest">
              ⭐ Lo Más Vendido del Mes
            </span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <TrendingUp className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>

          {/* Título principal con gradiente animado */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6 relative"
          >
            Productos{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] via-[#9C27B0] to-[#673AB7] animate-gradient">
                Premium
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-2 bg-gradient-to-r from-[#E91E63]/20 to-[#9C27B0]/20 blur-2xl -z-10"
              />
            </span>
          </motion.h2>

          {/* Descripción elegante */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed"
          >
            🎯 Equipos profesionales con tecnología de última generación
          </motion.p>

          {/* Estadísticas con iconos */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 text-sm font-bold"
          >
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100">
              <Package className="w-5 h-5 text-[#E91E63]" />
              <span className="text-gray-700">{allProducts.length} Productos</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700">{featuredProducts.length} Destacados</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="text-gray-700">{bestsellers.length} Best Sellers</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100">
              <Users className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">+10,000 Clientes</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Grid de productos PREMIUM con información EXPLICATIVA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="group relative"
            >
              <Link href={`/productos/${product.id}`}>
                <motion.div 
                  className="bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-[#E91E63] transition-all duration-500 hover:shadow-2xl hover:shadow-[#E91E63]/30 relative"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#E91E63]/5 via-transparent to-[#9C27B0]/5" />
                  </div>

                  {/* Badges Premium */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    {product.bestseller && (
                      <motion.div 
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                        className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white px-4 py-2 rounded-full text-xs font-black flex items-center gap-2 shadow-xl animate-pulse"
                      >
                        <TrendingUp className="w-4 h-4" />
                        🔥 BEST SELLER
                      </motion.div>
                    )}
                    {product.featured && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 + 0.4 }}
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-black flex items-center gap-2 shadow-xl"
                      >
                        <Sparkles className="w-4 h-4" />
                        ⭐ DESTACADO
                      </motion.div>
                    )}
                    {product.original_price && Math.round(((product.original_price - product.price) / product.original_price) * 100) > 20 && (
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 + 0.5 }}
                        className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-xs font-black shadow-xl"
                      >
                        💰 -{Math.round(((product.original_price - product.price) / product.original_price) * 100)}% OFF
                      </motion.div>
                    )}
                  </div>

                  {/* Stock Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    {product.in_stock ? (
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1"
                      >
                        <CheckCircle className="w-3 h-3" />
                        EN STOCK
                      </motion.div>
                    ) : (
                      <div className="bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        AGOTADO
                      </div>
                    )}
                  </div>

                  {/* Imagen del producto con efecto parallax */}
                  <div className="relative h-80 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
                    {/* Círculos decorativos de fondo */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-10 left-10 w-32 h-32 bg-[#E91E63] rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#9C27B0] rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                    </div>
                    
                    <Image
                      src={product.image_url || product.image || '/placeholder-product.jpg'}
                      alt={product.name}
                      fill
                      className="object-contain p-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 relative z-10"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    
                    {/* Overlay con acciones */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6 gap-3">
                      <motion.button
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring" }}
                        className="bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-2xl"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Heart className="w-5 h-5 text-[#E91E63]" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring" }}
                        className="bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-2xl"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Eye className="w-5 h-5 text-[#9C27B0]" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Info del producto MUY EXPLICATIVA */}
                  <div className="p-6 relative">
                    {/* Categoría con icono */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#E91E63]/10 to-[#9C27B0]/10 flex items-center justify-center">
                        <Package className="w-4 h-4 text-[#E91E63]" />
                      </div>
                      <span className="text-xs font-black text-[#9C27B0] uppercase tracking-wider">
                        {product.category}
                      </span>
                    </div>

                    {/* Nombre del producto */}
                    <h3 className="text-lg font-black text-gray-900 mb-3 line-clamp-2 group-hover:text-[#E91E63] transition-colors min-h-[56px]">
                      {product.name}
                    </h3>

                    {/* Descripción corta */}
                    {product.description && (
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    )}

                    {/* Rating EXPLICATIVO */}
                    <div className="flex items-center justify-between mb-4 bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-xl">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: i * 0.1 + idx * 0.05 }}
                            >
                              <Star 
                                className={`w-4 h-4 ${idx < Math.floor(product.rating || 4.5) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`} 
                              />
                            </motion.div>
                          ))}
                        </div>
                        <span className="text-sm font-bold text-gray-900">
                          {product.rating || 4.5}
                        </span>
                      </div>
                      <span className="text-xs text-gray-600 font-semibold">
                        ({product.reviews || 0} reviews)
                      </span>
                    </div>

                    {/* Características rápidas */}
                    <div className="mb-4 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Shield className="w-4 h-4 text-green-500" />
                        <span className="font-semibold">Garantía Legal Incluida</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Truck className="w-4 h-4 text-blue-500" />
                        <span className="font-semibold">Envío Rápido a Todo Colombia</span>
                      </div>
                      {product.sales_count && product.sales_count > 50 && (
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Users className="w-4 h-4 text-purple-500" />
                          <span className="font-semibold">{product.sales_count}+ Personas lo compraron</span>
                        </div>
                      )}
                    </div>

                    {/* Precio EXPLICATIVO con ahorro */}
                    <div className="mb-4 bg-gradient-to-r from-[#E91E63]/5 to-[#9C27B0]/5 p-4 rounded-xl border border-[#E91E63]/20">
                      <div className="flex items-end justify-between mb-2">
                        <div>
                          <div className="text-xs text-gray-600 font-semibold mb-1">Precio Final</div>
                          <div className="text-3xl font-black text-[#E91E63]">
                            ${product.price.toLocaleString()}
                          </div>
                        </div>
                        {product.original_price && product.original_price > product.price && (
                          <div className="text-right">
                            <div className="text-sm text-gray-400 line-through font-bold">
                              ${product.original_price.toLocaleString()}
                            </div>
                            <div className="text-xs font-black text-green-600">
                              ¡Ahorras ${(product.original_price - product.price).toLocaleString()}!
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 font-semibold">
                        💳 Acepta todas las tarjetas • 📦 Envío asegurado
                      </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="space-y-2">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white py-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:shadow-[#E91E63]/40 transition-all relative overflow-hidden group/btn"
                        onClick={(e) => e.preventDefault()}
                      >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                        <ShoppingBag className="w-5 h-5 relative z-10" />
                        <span className="relative z-10">AGREGAR AL CARRITO</span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full bg-white border-2 border-[#E91E63] text-[#E91E63] py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#E91E63] hover:text-white transition-all"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Eye className="w-4 h-4" />
                        VER DETALLES
                      </motion.button>
                    </div>
                  </div>

                  {/* Indicador de popularidad */}
                  {product.sales_count && product.sales_count > 100 && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-xs font-black shadow-xl z-20 whitespace-nowrap">
                      🔥 ¡MUY POPULAR! {product.sales_count}+ VENDIDOS
                    </div>
                  )}
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Botón Ver Todos */}
        <div className="text-center">
          <Link href="/productos">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white px-12 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-[#E91E63]/40 flex items-center gap-3 mx-auto"
            >
              Ver Todos los Productos ({allProducts.length})
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}
