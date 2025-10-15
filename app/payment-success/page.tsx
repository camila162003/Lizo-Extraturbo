'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Package, Truck, Phone } from 'lucide-react'
import Link from 'next/link'

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      <motion.div
        className="max-w-md w-full bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-green-500/30 p-8 text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Success Icon */}
        <motion.div
          className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
        >
          <CheckCircle className="text-white" size={40} />
        </motion.div>

        {/* Success Message */}
        <motion.h1
          className="text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          ¡Pago Exitoso!
        </motion.h1>

        <motion.p
          className="text-gray-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Tu compra ha sido procesada correctamente. Recibirás un email de confirmación en breve.
        </motion.p>

        {/* Process Steps */}
        <motion.div
          className="space-y-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center space-x-3 text-green-400">
            <CheckCircle size={20} />
            <span>Pago confirmado</span>
          </div>
          <div className="flex items-center space-x-3 text-yellow-400">
            <Package size={20} />
            <span>Preparando tu pedido</span>
          </div>
          <div className="flex items-center space-x-3 text-blue-400">
            <Truck size={20} />
            <span>Envío en 24-48 horas</span>
          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/"
            className="block w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
          >
            Continuar Comprando
          </Link>
          
          <a
            href="https://wa.me/573142308028?text=¡Hola! Acabo de realizar una compra y tengo algunas consultas."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 w-full py-3 bg-green-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
          >
            <Phone size={20} />
            <span>Contactar Soporte</span>
          </a>
        </motion.div>

        {/* Lizo Logo */}
        <motion.div
          className="mt-8 pt-6 border-t border-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <img 
            src="/logo y carrusel/Logolizo.jpg" 
            alt="Lizo Belleza" 
            className="w-12 h-12 rounded-full mx-auto mb-2"
          />
          <p className="text-gray-400 text-sm">LIZO BELLEZA</p>
        </motion.div>
      </motion.div>
    </div>
  )
}