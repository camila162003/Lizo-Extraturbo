'use client'

import { motion } from 'framer-motion'
import { AnimatedBackground } from '@/components/AnimatedBackground'
import ContactSection from '@/components/ContactSection'
import { NavBar } from '@/components/NavBarNew'
import { Footer } from '@/components/Footer'
import { MessageCircle, Phone, Instagram, MapPin, Clock, Mail } from 'lucide-react'
import Button from '@/components/Button'

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    subtitle: 'Respuesta inmediata',
    info: '+57 314 230 8028',
    description: 'Chatea con nosotros para consultas rápidas y pedidos',
    action: () => window.open('https://wa.me/573142308028?text=¡Hola LIZO BELLEZA! Tengo una consulta...', '_blank'),
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Instagram,
    title: 'Instagram',
    subtitle: 'Síguenos',
    info: '@lizoextraturbopro',
    description: 'Descubre nuestros productos y tips de belleza',
    action: () => window.open('https://instagram.com/lizoextraturbopro', '_blank'),
    color: 'from-pink-500 to-purple-600'
  },
  {
    icon: Phone,
    title: 'Teléfono',
    subtitle: 'Llamada directa',
    info: '+57 314 230 8028',
    description: 'Atención personalizada de lunes a sábado',
    action: () => window.open('tel:+573142308028'),
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Mail,
    title: 'Email',
    subtitle: 'Consultas formales',
    info: 'info@lizobelleza.com',
    description: 'Para cotizaciones y consultas empresariales',
    action: () => window.open('mailto:info@lizobelleza.com'),
    color: 'from-indigo-500 to-purple-600'
  }
]

const businessHours = [
  { day: 'Lunes - Viernes', hours: '9:00 AM - 6:00 PM' },
  { day: 'Sábado', hours: '9:00 AM - 4:00 PM' },
  { day: 'Domingo', hours: 'Cerrado' }
]

const faqs = [
  {
    question: '¿Cuál es el tiempo de entrega?',
    answer: 'Manejamos entregas nacionales en 3-5 días hábiles. Para Bogotá y ciudades principales, el tiempo puede ser de 1-2 días hábiles.'
  },
  {
    question: '¿Tienen garantía los productos?',
    answer: 'Sí, todos nuestros productos cuentan con garantía. Los productos premium tienen hasta 3 años de garantía extendida.'
  },
  {
    question: '¿Hacen envíos a todo el país?',
    answer: 'Sí, realizamos envíos a todo el territorio nacional. Los costos de envío varían según la ubicación y el peso del producto.'
  },
  {
    question: '¿Puedo ver los productos antes de comprar?',
    answer: 'Ofrecemos showroom virtual por WhatsApp y videollamadas para que puedas ver los productos en detalle antes de tu compra.'
  }
]

export default function ContactoPage() {
  return (
    <>
      <NavBar />
      <main className="relative min-h-screen">
        {/* Professional Animated Background */}
        <AnimatedBackground variant="professional" intensity="medium" />
        
        {/* Hero Section */}
        <section className="relative z-10 pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
                <span 
                  className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                >
                  CONTÁCTANOS
                </span>
              </h1>
              <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Estamos aquí para ayudarte. Elige la forma que prefieras para 
                comunicarte con nuestro equipo de especialistas en belleza.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  onClick={method.action}
                >
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{method.title}</h3>
                  <p className="text-sm text-gray-400 mb-3 text-center">{method.subtitle}</p>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${method.color} bg-clip-text text-transparent mb-4 text-center`}>
                    {method.info}
                  </p>
                  <p className="text-sm text-gray-300 text-center leading-relaxed">{method.description}</p>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8"
              >
                <div className="flex items-center space-x-3 mb-8">
                  <Clock className="text-purple-400" size={32} />
                  <h2 className="text-3xl font-bold text-white">Horarios de Atención</h2>
                </div>
                
                <div className="space-y-6">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-4 border-b border-white/10 last:border-b-0">
                      <span className="text-lg text-gray-300">{schedule.day}</span>
                      <span className="text-lg font-semibold text-white">{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-400/20">
                  <div className="flex items-center space-x-3 mb-3">
                    <MessageCircle className="text-green-400" size={24} />
                    <span className="text-green-400 font-semibold">WhatsApp 24/7</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Nuestro WhatsApp está disponible las 24 horas para consultas urgentes. 
                    Respondemos lo más pronto posible.
                  </p>
                </div>
              </motion.div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-8">Preguntas Frecuentes</h2>
                
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="border-b border-white/10 pb-6 last:border-b-0"
                    >
                      <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button
                    variant="outline"
                    size="md"
                    icon={<MessageCircle size={20} />}
                    onClick={() => window.open('https://wa.me/573142308028?text=¡Hola! Tengo una pregunta que no está en las FAQ...', '_blank')}
                    className="w-full"
                  >
                    ¿Tienes otra pregunta?
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactSection />

        {/* Quick Actions */}
        <section className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-white mb-8">¿Necesitas ayuda inmediata?</h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  variant="whatsapp"
                  size="lg"
                  icon={<MessageCircle size={24} />}
                  onClick={() => window.open('https://wa.me/573142308028?text=¡Hola LIZO BELLEZA! Necesito ayuda inmediata...', '_blank')}
                >
                  Chat WhatsApp
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  icon={<Phone size={24} />}
                  onClick={() => window.open('tel:+573142308028')}
                >
                  Llamar Ahora
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}