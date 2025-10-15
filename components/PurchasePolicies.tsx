'use client'

import { motion } from 'framer-motion'
import { Shield, Package, RefreshCw, Clock, MapPin, Phone, CheckCircle2 } from 'lucide-react'

export default function PurchasePolicies() {
  const policies = [
    {
      icon: Shield,
      title: 'Garantía Legal',
      description: 'Todos nuestros productos tienen garantía de 1 año contra defectos de fabricación, según la Ley 1480 de 2011.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: RefreshCw,
      title: 'Cambios y Devoluciones',
      description: 'Si el producto presenta defectos, lo reemplazamos sin costo. Tienes 5 días hábiles para retracto en compras online.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Package,
      title: 'Producto Nuevo',
      description: 'Garantizamos productos nuevos con empaque original, accesorios completos y manual de instrucciones incluido.',
      color: 'from-rose-500 to-pink-400'
    },
    {
      icon: Clock,
      title: 'Servicio Técnico',
      description: 'Contamos con servicio técnico autorizado para reparaciones durante la garantía, sin costo para ti.',
      color: 'from-pink-600 to-rose-400'
    },
    {
      icon: MapPin,
      title: 'Cobertura Nacional',
      description: 'Disponibilidad de repuestos y servicio técnico en las principales ciudades de Colombia.',
      color: 'from-fuchsia-500 to-pink-500'
    },
    {
      icon: Phone,
      title: 'Atención al Cliente',
      description: 'Canales de comunicación directa para resolver cualquier inquietud o reclamación de manera rápida.',
      color: 'from-pink-500 to-rose-600'
    }
  ]

  const conditions = [
    'Producto sin uso con empaque original',
    'Incluye todos los accesorios y manuales',
    'Comprobante de compra o garantía',
    'Reportar fallas dentro del período de garantía',
    'Uso según instrucciones del fabricante'
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            Compra con <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600">Confianza</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestras políticas están diseñadas bajo la Ley 1480 de 2011 del Estatuto del Consumidor colombiano, 
            garantizando tus derechos y nuestra calidad profesional.
          </p>
        </motion.div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-8 border border-pink-200 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${policy.color} rounded-2xl mb-6`}>
                <policy.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{policy.title}</h3>
              <p className="text-gray-600 leading-relaxed">{policy.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Conditions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-10 md:p-12 shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Condiciones para Garantía
              </h3>
              <p className="text-pink-100 text-lg mb-6">
                Para hacer válida tu garantía o devolución, asegúrate de cumplir con estos requisitos:
              </p>
              <div className="space-y-4">
                {conditions.map((condition, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <span className="text-white font-medium">{condition}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-4">Exclusiones de Garantía</h4>
              <ul className="space-y-3 text-pink-100">
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Daños por mal uso, caídas o modificaciones no autorizadas
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Desgaste natural por uso prolongado
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Productos intervenidos por personal no autorizado
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2">•</span>
                  Exposición a humedad o voltaje incorrecto
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white font-semibold text-lg">
                  📞 Contáctanos para cualquier consulta
                </p>
                <p className="text-pink-100 mt-2">
                  Respuesta en menos de 24 horas hábiles
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl p-8 border border-pink-200 max-w-4xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              <span className="font-bold text-gray-800">Derecho de Retracto:</span> Para compras online, 
              tienes hasta <span className="font-bold text-pink-600">5 días hábiles</span> después de la entrega 
              para devolver el producto sin uso. Reembolsamos en un plazo máximo de 30 días calendario.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
