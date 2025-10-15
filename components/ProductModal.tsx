'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import {
  X,
  Plus,
  Minus,
  ShoppingCart,
  Heart,
  Star,
  Shield,
  Truck,
  Award,
  Check
} from 'lucide-react'
import WompiPayment from './WompiPayment'
import { Product } from '../lib/products'

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)
  const [showPayment, setShowPayment] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }

  if (!product) return null

  const features = [
    'Motor profesional de alta potencia',
    'Tecnología iónica anti-frizz',
    'Control de temperatura variable',
    'Garantía extendida de 2 años',
    'Cable profesional giratorio',
    'Diseño ergonómico premium'
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-gradient-to-br from-pink-900/40 via-black/60 to-pink-800/40 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-pink-50 border-2 border-pink-200"
              >
                <X className="w-6 h-6 text-pink-600" />
              </button>

              <div className="grid md:grid-cols-2 gap-6 p-8 max-h-[90vh] overflow-y-auto">
                <div className="space-y-4">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-pink-50 to-white border-4 border-pink-100 shadow-xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-8"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-br from-pink-50 to-white border border-pink-100">
                      <Truck className="w-6 h-6 text-pink-500" />
                      <span className="text-xs font-semibold text-pink-900">Envío Gratis</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-br from-pink-50 to-white border border-pink-100">
                      <Shield className="w-6 h-6 text-pink-500" />
                      <span className="text-xs font-semibold text-pink-900">Garantía 2 años</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-br from-pink-50 to-white border border-pink-100">
                      <Award className="w-6 h-6 text-pink-500" />
                      <span className="text-xs font-semibold text-pink-900">Calidad Premium</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
                    {product.name}
                  </h2>

                  <div className="flex items-center gap-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < 4 ? 'fill-pink-500 text-pink-500' : 'text-pink-200'}
                      />
                    ))}
                    <span className="text-pink-600 font-semibold">(4.8)</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-600">234 reseñas</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-gradient-to-br from-pink-50 via-white to-pink-50 border-2 border-pink-200">
                    <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
                      {formatPrice(product.price * quantity)}
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">{product.description}</p>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-pink-600">Características:</h3>
                    {features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check size={18} className="text-pink-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-pink-50 to-white border border-pink-100">
                    <span className="text-gray-700 font-semibold">Cantidad:</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 text-white font-bold flex items-center justify-center hover:shadow-lg transition-all"
                      >
                        <Minus size={18} />
                      </button>
                      <span className="text-2xl font-bold text-pink-600 min-w-[50px] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 text-white font-bold flex items-center justify-center hover:shadow-lg transition-all"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowPayment(true)}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold text-lg shadow-xl shadow-pink-300/50 hover:shadow-pink-400/60 transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={22} />
                    Comprar Ahora
                  </button>

                  <button className="w-full py-3 px-6 rounded-xl border-2 border-pink-300 text-pink-600 font-semibold hover:bg-pink-50 transition-all flex items-center justify-center gap-2">
                    <Heart size={20} />
                    Agregar a Favoritos
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {showPayment && (
            <WompiPayment
              product={product}
              quantity={quantity}
              onClose={() => setShowPayment(false)}
              onSuccess={() => {
                setShowPayment(false)
                onClose()
              }}
            />
          )}
        </>
      )}
    </AnimatePresence>
  )
}
