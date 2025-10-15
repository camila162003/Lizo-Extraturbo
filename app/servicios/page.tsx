'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Scissors, 
  Sparkles, 
  Users, 
  Clock, 
  Award, 
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

export default function ServiciosPage() {
  const services = [
    {
      icon: Scissors,
      title: 'Asesoramiento Profesional',
      description: 'Consultoría personalizada para elegir las herramientas perfectas según tu tipo de cabello y necesidades.',
      features: ['Análisis de tipo de cabello', 'Recomendaciones personalizadas', 'Guías de uso', 'Seguimiento post-venta'],
      price: 'Gratuito',
      popular: true
    },
    {
      icon: Sparkles,
      title: 'Capacitación y Talleres',
      description: 'Talleres prácticos para dominar el uso de herramientas profesionales y técnicas avanzadas de peinado.',
      features: ['Talleres presenciales', 'Técnicas profesionales', 'Certificado de participación', 'Material de práctica'],
      price: 'Desde $150.000',
      popular: false
    },
    {
      icon: Users,
      title: 'Consultoría para Salones',
      description: 'Asesoramiento integral para salones de belleza y barberías en la selección de equipamiento profesional.',
      features: ['Análisis de necesidades', 'Propuesta personalizada', 'Instalación y configuración', 'Soporte técnico'],
      price: 'Cotización personalizada',
      popular: false
    },
    {
      icon: Award,
      title: 'Servicio Premium',
      description: 'Experiencia VIP con atención personalizada, entrega express y garantía extendida.',
      features: ['Atención VIP', 'Entrega en 24h', 'Garantía extendida', 'Soporte prioritario'],
      price: 'Desde $50.000',
      popular: false
    }
  ]

  const benefits = [
    'Atención personalizada por expertos',
    'Garantía en todos nuestros productos',
    'Entrega rápida en toda Colombia',
    'Soporte técnico especializado',
    'Precios competitivos',
    'Amplio catálogo de marcas premium'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-rose-50/30 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-rose-500/20 to-white/40 rounded-full border border-rose-300/30 backdrop-blur-md mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-2xl">💎</span>
              <span className="text-rose-600 font-semibold tracking-wide">SERVICIOS PREMIUM</span>
              <span className="text-2xl">💎</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
              <span className="bg-gradient-to-r from-rose-600 via-rose-500 to-gray-700 bg-clip-text text-transparent">
                NUESTROS
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-700 via-rose-400 to-rose-600 bg-clip-text text-transparent">
                SERVICIOS
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Más que vender productos, ofrecemos una experiencia completa de belleza 
              con servicios personalizados para profesionales y entusiastas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl ${
                  service.popular 
                    ? 'border-rose-300 ring-2 ring-rose-200' 
                    : 'border-gray-200/60 hover:border-rose-300/60'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      MÁS POPULAR
                    </span>
                  </div>
                )}

                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full flex items-center justify-center">
                    <service.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="text-rose-500 flex-shrink-0" size={16} />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div>
                    <span className="text-2xl font-bold text-gray-800">{service.price}</span>
                  </div>
                  <motion.button
                    className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Solicitar
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">
                ¿Por Qué Elegirnos?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beneficios que nos distinguen y hacen de nosotros tu mejor aliado en belleza.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-gray-200/60 hover:border-rose-300/60 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-rose-500 flex-shrink-0" size={20} />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">
                Nuestro Proceso
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un proceso simple y eficiente diseñado para garantizar tu satisfacción total.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consulta', desc: 'Analizamos tus necesidades específicas' },
              { step: '02', title: 'Recomendación', desc: 'Sugerimos las mejores opciones para ti' },
              { step: '03', title: 'Adquisición', desc: 'Realizas tu compra con total confianza' },
              { step: '04', title: 'Seguimiento', desc: 'Te acompañamos después de la compra' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-rose-300 to-transparent transform -translate-y-1/2 z-[-1]" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-rose-600">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Necesitas Asesoramiento Personalizado?
            </h2>
            <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para ayudarte a encontrar 
              exactamente lo que necesitas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="flex items-center space-x-2 bg-white text-rose-600 font-bold px-6 py-3 rounded-xl hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={20} />
                <span>Llamar Ahora</span>
              </motion.button>
              
              <motion.button
                className="flex items-center space-x-2 bg-rose-700 text-white font-bold px-6 py-3 rounded-xl hover:shadow-xl transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={20} />
                <span>Enviar Email</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}