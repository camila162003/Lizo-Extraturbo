'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  X,
  Plus,
  Minus,
  ShoppingCart,
  Trash2,
  MessageCircle,
  Package,
  CreditCard,
  Heart,
  Star
} from 'lucide-react'
import Button from './Button'

interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  category: string
}

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'SECADOR PESO PLUMA',
      price: 850000,
      image: '/imagenes lizo/PNG secadores/extraturbo 5500.png',
      quantity: 1,
      category: 'secadores'
    },
    {
      id: 9,
      name: 'PLANCHA MD 60',
      price: 580000,
      image: '/imagenes lizo/PNG planchas/infraroja MD60.png',
      quantity: 1,
      category: 'planchas'
    },
    {
      id: 30,
      name: 'BELLA CAPELLI 5 EN 1',
      price: 180000,
      image: '/imagenes lizo/PNG cepillos/bella capelli 5en1.png',
      quantity: 1,
      category: 'cepillos'
    }
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id)
      return
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }

  const handleWhatsAppOrder = () => {
    const orderDetails = cartItems.map(item => 
      `📦 ${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}`
    ).join('\n')

    const message = `¡Hola LIZO BELLEZA! 🛒

Quiero realizar el siguiente pedido:

${orderDetails}

💰 TOTAL: ${formatPrice(getTotalPrice())}
📝 Total de productos: ${getTotalItems()}

¿Podrían confirmarme disponibilidad y darme información sobre el envío?

¡Gracias!`
    
    const whatsappUrl = `https://wa.me/573142308028?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, type: "spring", damping: 25 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[480px] bg-gradient-to-br from-gray-900 to-black border-l border-white/10 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <ShoppingCart className="text-pink-400" size={24} />
                  <h2 className="text-2xl font-bold text-white">Mi Carrito</h2>
                  {cartItems.length > 0 && (
                    <span className="bg-pink-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                      {getTotalItems()}
                    </span>
                  )}
                </div>
                <Button
                  variant="glass"
                  size="sm"
                  icon={<X size={18} />}
                  onClick={onClose}
                >
                  Cerrar
                </Button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <ShoppingCart className="text-gray-500 mx-auto mb-4" size={64} />
                  <h3 className="text-xl font-semibold text-gray-400 mb-2">
                    Tu carrito está vacío
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Agrega algunos productos increíbles a tu carrito
                  </p>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => {
                      onClose()
                      const catalogSection = document.getElementById('catalogo')
                      catalogSection?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    Explorar Productos
                  </Button>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-4"
                    >
                      <div className="flex space-x-4">
                        {/* Product Image */}
                        <div className="relative w-20 h-20 bg-white/10 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-contain p-2"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-semibold mb-1 truncate">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-400 mb-2">
                            {item.category}
                          </p>
                          <p className="text-pink-400 font-bold">
                            {formatPrice(item.price)}
                          </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col items-end space-y-2">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-400 hover:text-red-300 transition-colors p-1"
                          >
                            <Trash2 size={16} />
                          </button>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-2 bg-white/10 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 text-gray-400 hover:text-white transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="text-white font-semibold px-2 min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 text-gray-400 hover:text-white transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Item Total */}
                      <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center">
                        <span className="text-sm text-gray-400">Subtotal:</span>
                        <span className="text-white font-bold">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </motion.div>
                  ))}

                  {/* Clear Cart */}
                  {cartItems.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        icon={<Trash2 size={16} />}
                        onClick={clearCart}
                        className="w-full text-red-400 border-red-400/50 hover:bg-red-400/10"
                      >
                        Vaciar Carrito
                      </Button>
                    </motion.div>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-gray-900/50">
                {/* Summary */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Productos ({getTotalItems()})</span>
                    <span className="text-white">{formatPrice(getTotalPrice())}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400">Envío</span>
                    <span className="text-green-400">A consultar</span>
                  </div>
                  <hr className="border-white/10 my-3" />
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-white">Total</span>
                    <span className="text-2xl font-bold text-pink-400">
                      {formatPrice(getTotalPrice())}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    variant="whatsapp"
                    size="lg"
                    icon={<MessageCircle size={20} />}
                    onClick={handleWhatsAppOrder}
                    className="w-full"
                  >
                    Ordenar por WhatsApp
                  </Button>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      size="md"
                      icon={<Heart size={16} />}
                      onClick={() => {
                        // Save for later functionality
                        console.log('Save for later')
                      }}
                    >
                      Guardar
                    </Button>
                    <Button
                      variant="glass"
                      size="md"
                      icon={<Package size={16} />}
                      onClick={() => {
                        const message = 'Hola, quiero información sobre envíos y métodos de pago'
                        const whatsappUrl = `https://wa.me/573142308028?text=${encodeURIComponent(message)}`
                        window.open(whatsappUrl, '_blank')
                      }}
                    >
                      Info Envío
                    </Button>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Star size={12} className="text-yellow-400" />
                    <span>Calidad garantizada</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Package size={12} className="text-green-400" />
                    <span>Envío seguro</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}