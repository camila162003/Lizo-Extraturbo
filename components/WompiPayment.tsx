'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Shield, Lock, CheckCircle, AlertCircle } from 'lucide-react'

interface WompiPaymentProps {
  product: {
    id: string
    name: string
    price: number
    image: string
    description: string
  }
  quantity: number
  onClose: () => void
  onSuccess: () => void
}

export default function WompiPayment({ product, quantity, onClose, onSuccess }: WompiPaymentProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'nequi' | 'bancolombia'>('card')
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    phone: '',
    document: ''
  })

  const total = product.price * quantity
  const WOMPI_PUBLIC_KEY = "pub_test_OaYpEcg4w6nfs5Xrj8IxB9zJPZHaEgGk" // Clave pública de prueba

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }

  const handlePayment = async () => {
    setIsProcessing(true)

    try {
      // Datos del producto para Wompi
      const reference = `LIZO-${product.id}-${Date.now()}`
      
      // Configuración de Wompi
      const wompiData = {
        currency: 'COP',
        amount_in_cents: total * 100, // Wompi requiere el monto en centavos
        reference: reference,
        public_key: WOMPI_PUBLIC_KEY,
        redirect_url: window.location.origin + '/payment-success',
        customer_data: {
          phone_number: customerData.phone,
          full_name: customerData.name,
          legal_id: customerData.document,
          legal_id_type: 'CC'
        },
        customer_email: customerData.email,
        shipping_address: {
          address_line_1: 'Dirección del cliente',
          country: 'CO',
          region: 'Cundinamarca',
          city: 'Bogotá',
          name: customerData.name,
          phone_number: customerData.phone
        }
      }

      // Crear el link de pago
      const response = await fetch('https://checkout.wompi.co/api/link_payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${WOMPI_PUBLIC_KEY}`
        },
        body: JSON.stringify(wompiData)
      })

      if (response.ok) {
        const result = await response.json()
        
        // Abrir Wompi Checkout
        if (result.data && result.data.checkout_url) {
          window.open(result.data.checkout_url, '_blank')
          onSuccess()
        } else {
          // Fallback: Usar Widget de Wompi
          const checkout = new (window as any).WidgetCheckout({
            currency: 'COP',
            amountInCents: total * 100,
            reference: reference,
            publicKey: WOMPI_PUBLIC_KEY,
            customerData: {
              email: customerData.email,
              fullName: customerData.name,
              phoneNumber: customerData.phone,
              legalId: customerData.document,
              legalIdType: 'CC'
            },
            redirectUrl: window.location.origin + '/payment-success'
          })
          
          checkout.open()
          onSuccess()
        }
      } else {
        throw new Error('Error al procesar el pago')
      }
    } catch (error) {
      console.error('Error en el pago:', error)
      alert('Error al procesar el pago. Por favor intenta nuevamente.')
    } finally {
      setIsProcessing(false)
    }
  }

  const isFormValid = customerData.name && customerData.email && customerData.phone && customerData.document

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-purple-500/30 overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/logo y carrusel/Logolizo.jpg" alt="Lizo" className="w-12 h-12 rounded-full" />
              <div>
                <h2 className="text-2xl font-bold text-white">Pago Seguro</h2>
                <p className="text-purple-100">Powered by Wompi</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
            >
              <span className="text-white text-xl">×</span>
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Resumen del producto */}
          <div className="bg-gray-800/50 rounded-2xl p-4">
            <div className="flex items-center space-x-4">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-xl" />
              <div className="flex-1">
                <h3 className="font-bold text-white">{product.name}</h3>
                <p className="text-gray-400 text-sm">{product.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-gray-300">Cantidad: {quantity}</span>
                  <span className="text-2xl font-bold text-white">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Datos del cliente */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <Shield className="text-green-400" size={20} />
              <span>Información del Cliente</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre completo"
                value={customerData.name}
                onChange={(e) => setCustomerData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={customerData.email}
                onChange={(e) => setCustomerData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                value={customerData.phone}
                onChange={(e) => setCustomerData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Número de documento"
                value={customerData.document}
                onChange={(e) => setCustomerData(prev => ({ ...prev, document: e.target.value }))}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Métodos de pago */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <CreditCard className="text-blue-400" size={20} />
              <span>Método de Pago</span>
            </h3>
            
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setPaymentMethod('card')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  paymentMethod === 'card' 
                    ? 'border-purple-500 bg-purple-500/20' 
                    : 'border-gray-600 bg-gray-800/50'
                }`}
              >
                <CreditCard className="mx-auto mb-2 text-white" size={24} />
                <span className="text-white text-sm font-semibold">Tarjeta</span>
              </button>
              
              <button
                onClick={() => setPaymentMethod('nequi')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  paymentMethod === 'nequi' 
                    ? 'border-purple-500 bg-purple-500/20' 
                    : 'border-gray-600 bg-gray-800/50'
                }`}
              >
                <div className="mx-auto mb-2 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">N</span>
                </div>
                <span className="text-white text-sm font-semibold">Nequi</span>
              </button>
              
              <button
                onClick={() => setPaymentMethod('bancolombia')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  paymentMethod === 'bancolombia' 
                    ? 'border-purple-500 bg-purple-500/20' 
                    : 'border-gray-600 bg-gray-800/50'
                }`}
              >
                <div className="mx-auto mb-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-black text-xs font-bold">B</span>
                </div>
                <span className="text-white text-sm font-semibold">Bancolombia</span>
              </button>
            </div>
          </div>

          {/* Seguridad */}
          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
            <div className="flex items-center space-x-3">
              <Lock className="text-green-400" size={20} />
              <div>
                <p className="text-green-300 font-semibold">Pago 100% Seguro</p>
                <p className="text-green-200 text-sm">Protegido por Wompi - PCI DSS Compliant</p>
              </div>
            </div>
          </div>

          {/* Total y botón de pago */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-2xl font-bold">
              <span className="text-white">Total:</span>
              <span className="text-green-400">{formatPrice(total)}</span>
            </div>
            
            <motion.button
              onClick={handlePayment}
              disabled={!isFormValid || isProcessing}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                isFormValid && !isProcessing
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-lg hover:scale-105'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
              whileHover={isFormValid ? { scale: 1.02 } : {}}
              whileTap={isFormValid ? { scale: 0.98 } : {}}
            >
              {isProcessing ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Procesando...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle size={20} />
                  <span>Pagar Ahora</span>
                </div>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}