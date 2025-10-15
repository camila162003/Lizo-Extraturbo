'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from './Button'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter,
  Scissors,
  Sparkles,
  Heart,
  Clock,
  MessageCircle
} from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://instagram.com/lizoextraturbopro', 
      label: 'Instagram',
      color: 'from-pink-500 to-pink-600'
    },
    { 
      icon: MessageCircle, 
      href: 'https://wa.me/573142308028?text=¡Hola! Estoy interesado en conocer más sobre los productos LIZO BELLEZA', 
      label: 'WhatsApp',
      color: 'from-green-500 to-green-600'
    },
  ]

  const quickLinks = [
    { name: 'Sobre Nosotros', href: '/about' },
    { name: 'Contacto', href: '/contact' },
    { name: 'Términos y Condiciones', href: '/terms' },
    { name: 'Política de Privacidad', href: '/privacy' },
    { name: 'Devoluciones', href: '/returns' },
  ]

  const categories = [
    { name: 'Secadores', href: '/productos/secadores' },
    { name: 'Planchas', href: '/productos/planchas' },
    { name: 'Cepillos', href: '/productos/cepillos' },
    { name: 'Tijeras', href: '/productos/tijeras' },
    { name: 'Barbería', href: '/barberia' },
    { name: 'Spa', href: '/spa' },
  ]

  return (
    <footer className="bg-gradient-to-br from-pink-50 via-white to-pink-50 text-gray-800 relative overflow-hidden">
      {/* Efectos de fondo premium */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full blur-3xl"></div>
      </div>

      {/* Newsletter Section Premium */}
      <div className="border-b border-pink-200/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-pink-400/20 rounded-full border border-pink-400/30 backdrop-blur-md mb-6">
              <Sparkles className="text-pink-600" size={20} />
              <span className="text-pink-600 font-bold text-sm">SUSCRÍBETE</span>
            </div>
            <h3 className="text-4xl font-black mb-4 bg-gradient-to-r from-pink-600 to-pink-500 bg-clip-text text-transparent">
              Mantente al día con nuestras novedades
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Recibe consejos exclusivos, ofertas especiales y nuevos productos directamente en tu email
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email aquí..."
                className="flex-1 px-6 py-4 bg-white/80 backdrop-blur-md border-2 border-pink-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-gray-800 placeholder-gray-400 shadow-lg"
              />
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  // Newsletter subscription logic
                  console.log('Newsletter subscription')
                }}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-pink-300/50"
              >
                Suscribirse
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-white">L</span>
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-pink-600">Lizo Belleza</h2>
                <p className="text-sm text-gray-500">Profesional Beauty</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Transformamos la belleza profesional con productos de calidad premium. 
              Tu éxito es nuestra pasión.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center text-pink-600">
              <Heart className="w-5 h-5 mr-2 text-pink-400" />
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-pink-600 transition-colors inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center text-pink-600">
              <Scissors className="w-5 h-5 mr-2 text-pink-400" />
              Categorías
            </h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-gray-600 hover:text-pink-600 transition-colors inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center text-pink-600">
              <Sparkles className="w-5 h-5 mr-2 text-pink-400" />
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <a href="tel:+573142308028" className="text-gray-600 hover:text-pink-600 transition-colors">
                  +57 314 230 8028
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <a href="mailto:info@lizobelleza.com" className="text-gray-600 hover:text-pink-600 transition-colors">
                  info@lizobelleza.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-pink-400 flex-shrink-0" />
                <div className="text-gray-600">
                  <p>Lun - Vie: 9:00 - 18:00</p>
                  <p>Sáb: 9:00 - 14:00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-pink-200">
        <div className="container mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <p className="text-gray-500 text-sm">
              © {currentYear} Lizo Belleza. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-pink-500 mx-1" />
              <span>para profesionales de la belleza</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}