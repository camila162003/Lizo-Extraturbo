'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import Button from '@/components/Button'
import { NavBar } from '@/components/NavBarNew'
import { Footer } from '@/components/Footer'
import { Crown, Star, Zap, Award, Shield, Diamond, Sparkles, MessageCircle } from 'lucide-react'

const premiumProducts = [
  {
    id: 1,
    name: 'STEAMLINER ELITE',
    price: 950000,
    image: '/imagenes lizo/PNG planchas/steam liner A.png',
    features: ['Vapor profesional', 'Placas de titanio', 'Control inteligente', 'Garantía 3 años'],
    description: 'La plancha más avanzada de nuestra colección'
  },
  {
    id: 2,
    name: 'SECADOR PESO PLUMA PRO',
    price: 850000,
    image: '/imagenes lizo/PNG secadores/extraturbo 5500.png',
    features: ['Ultra liviano', 'Motor AC profesional', 'Iones negativos', 'Tecnología infrarroja'],
    description: 'Secado profesional con máxima potencia'
  },
  {
    id: 3,
    name: 'MD 60 PROFESSIONAL',
    price: 580000,
    image: '/imagenes lizo/PNG planchas/infraroja MD60.png',
    features: ['Infrarrojos avanzados', 'Cerámica premium', 'Temperatura digital', 'Auto-apagado'],
    description: 'Tecnología infrarroja para resultados perfectos'
  }
]

const premiumBenefits = [
  {
    icon: Crown,
    title: 'Exclusividad Premium',
    description: 'Acceso a productos de edición limitada y lanzamientos exclusivos'
  },
  {
    icon: Shield,
    title: 'Garantía Extendida',
    description: 'Hasta 3 años de garantía en productos premium seleccionados'
  },
  {
    icon: Star,
    title: 'Soporte VIP',
    description: 'Atención personalizada y soporte técnico especializado 24/7'
  },
  {
    icon: Diamond,
    title: 'Calidad Superior',
    description: 'Materiales de primera calidad y tecnología de última generación'
  }
]

export default function PremiumPage() {
  const handleWhatsAppContact = () => {
    const message = `¡Hola LIZO BELLEZA! 👑

Estoy interesado en conocer más sobre la línea PREMIUM.

¿Podrían proporcionarme información sobre:
• Productos exclusivos disponibles
• Beneficios de la membresía premium
• Promociones especiales

¡Gracias!`
    
    const whatsappUrl = `https://wa.me/573142308028?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <NavBar />
      <main className="relative min-h-screen">
        {/* Professional Animated Background */}
        <AnimatedBackground variant="professional" intensity="high" />
        
        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-full border border-yellow-400/30 backdrop-blur-md mb-8"
              >
                <Crown className="text-yellow-400" size={24} />
                <span className="text-yellow-400 text-lg font-semibold">COLECCIÓN PREMIUM</span>
                <Crown className="text-yellow-400" size={24} />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl font-bold text-white mb-6"
              >
                <span 
                  className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent"
                >
                  LIZO
                </span>
                <br />
                <span className="text-white">PREMIUM</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
              >
                Experimenta la excelencia absoluta con nuestra línea premium. 
                Productos exclusivos diseñados para profesionales que buscan 
                la perfección en cada detalle.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <Button
                  variant="primary"
                  size="lg"
                  icon={<MessageCircle size={20} />}
                  onClick={handleWhatsAppContact}
                >
                  Consultar Premium
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  icon={<Crown size={20} />}
                  onClick={() => {
                    const premiumSection = document.getElementById('premium-products')
                    premiumSection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Ver Colección
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Premium Benefits */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Beneficios <span className="text-yellow-400">Exclusivos</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Únete al círculo premium y disfruta de ventajas únicas
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {premiumBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center">
                    <benefit.icon className="text-black" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Products */}
        <section id="premium-products" className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Productos <span className="text-yellow-400">Premium</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Nuestra selección más exclusiva para profesionales exigentes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {premiumProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500"
                >
                  {/* Premium Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Crown size={14} />
                    <span>PREMIUM</span>
                  </div>

                  {/* Product Image */}
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Product Info */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <Sparkles className="text-yellow-400" size={14} />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-bold text-yellow-400">
                        {new Intl.NumberFormat('es-CO', {
                          style: 'currency',
                          currency: 'COP',
                          minimumFractionDigits: 0
                        }).format(product.price)}
                      </span>
                      <div className="flex items-center space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="text-yellow-400 fill-current" size={16} />
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-4">
                      <Button
                        variant="primary"
                        size="md"
                        className="flex-1"
                        onClick={() => {
                          const message = `¡Hola LIZO BELLEZA! 👑

Estoy interesado en el producto PREMIUM:
📦 ${product.name}
💰 ${new Intl.NumberFormat('es-CO', {
                            style: 'currency',
                            currency: 'COP',
                            minimumFractionDigits: 0
                          }).format(product.price)}

¿Podrían darme más información sobre disponibilidad y beneficios premium?

¡Gracias!`
                          const whatsappUrl = `https://wa.me/573142308028?text=${encodeURIComponent(message)}`
                          window.open(whatsappUrl, '_blank')
                        }}
                      >
                        Consultar
                      </Button>
                      <Button
                        variant="outline"
                        size="md"
                        icon={<Crown size={16} />}
                        onClick={() => {
                          const message = `¡Hola! Quiero más detalles sobre ${product.name}`
                          const whatsappUrl = `https://wa.me/573142308028?text=${encodeURIComponent(message)}`
                          window.open(whatsappUrl, '_blank')
                        }}
                      >
                        Info
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 backdrop-blur-md rounded-3xl border border-yellow-400/20 p-12"
            >
              <Crown className="text-yellow-400 mx-auto mb-6" size={48} />
              <h2 className="text-4xl font-bold text-white mb-6">
                ¿Listo para la experiencia Premium?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Únete al círculo exclusivo de profesionales que confían en LIZO BELLEZA Premium
              </p>
              <Button
                variant="primary"
                size="xl"
                icon={<MessageCircle size={24} />}
                onClick={handleWhatsAppContact}
              >
                Contactar Ahora
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}