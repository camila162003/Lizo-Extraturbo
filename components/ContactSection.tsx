'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Phone, 
  MessageCircle, 
  Instagram, 
  Music, 
  MapPin, 
  Clock, 
  Send,
  Star,
  Crown,
  Sparkles,
  Award
} from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'productos'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Abrir WhatsApp con mensaje pre-filled
    const whatsappMessage = `¡Hola LIZO BELLEZA! 🌟
    
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Interés: ${formData.service}

Mensaje: ${formData.message}

¡Estoy interesado en sus productos premium!`
    
    const whatsappUrl = `https://wa.me/573142308028?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
    
    setIsSubmitting(false)
    setFormData({ name: '', email: '', phone: '', message: '', service: 'productos' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "WhatsApp Directo",
      value: "+57 314 230 8028",
      description: "Atención inmediata 24/7",
      action: () => window.open('https://wa.me/573142308028', '_blank'),
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Instagram,
      title: "Instagram Oficial",
      value: "@lizoextraturbopro",
      description: "Productos, tips y promociones",
      action: () => window.open('https://www.instagram.com/lizoextraturbopro?igsh=MTV4dnhwMmk4OWF4OQ==', '_blank'),
      color: "from-pink-500 to-purple-600",
      bgColor: "bg-pink-500/10"
    },
    {
      icon: Music,
      title: "TikTok Oficial",
      value: "@lizoextraturbo113",
      description: "Tutoriales y demostraciones",
      action: () => window.open('https://www.tiktok.com/@lizoextraturbo113?_t=ZS-90HRpaT8Uon&_r=1', '_blank'),
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-500/10"
    }
  ]

  const services = [
    { value: 'productos', label: 'Productos Premium' },
    { value: 'barberia', label: 'Equipos Barbería' },
    { value: 'mayorista', label: 'Ventas al Mayor' },
    { value: 'distribuidores', label: 'Red de Distribuidores' },
    { value: 'soporte', label: 'Soporte Técnico' },
    { value: 'otros', label: 'Otros Servicios' }
  ]

  return (
    <section id="contacto" className="py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Premium */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Orbs */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}

        {/* Sparkle Rain */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full border border-purple-400/30 backdrop-blur-md mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Crown className="text-yellow-400" size={24} />
            <span className="text-purple-300 font-semibold tracking-wide">ASESORÍA ESPECIALIZADA</span>
            <Sparkles className="text-pink-400" size={20} />
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              CONSULTA
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-white bg-clip-text text-transparent">
              GRATUITA
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            💬 Obtén asesoría personalizada de nuestros expertos en belleza profesional.
            <br className="hidden md:block" />
            <span className="text-purple-400 font-semibold">Recomendaciones especializadas para maximizar tus resultados.</span>
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className={`group relative bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-500 cursor-pointer ${method.bgColor}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={method.action}
            >
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="text-white" size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {method.title}
                </h3>
                
                <p className="text-lg text-purple-300 font-semibold mb-2">
                  {method.value}
                </p>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {method.description}
                </p>

                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                >
                  <Sparkles className="text-yellow-400" size={20} />
                </motion.div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    Envíanos un Mensaje
                  </span>
                </h3>
                <p className="text-gray-300">
                  Completa el formulario y te contactaremos por WhatsApp inmediatamente
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-purple-300 font-semibold mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-purple-300 font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-purple-300 font-semibold mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-purple-300 font-semibold mb-2">
                      Servicio de Interés
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    >
                      {services.map(service => (
                        <option key={service.value} value={service.value} className="bg-gray-800">
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-purple-300 font-semibold mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-black/30 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Conectando con WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle size={20} />
                      <span>Enviar por WhatsApp</span>
                      <Send className="group-hover:translate-x-1 transition-transform" size={16} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Location Info */}
            <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Ubicación</h4>
                  <p className="text-gray-400">Servicio Nacional</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Distribuimos a toda Colombia con envíos seguros y rápidos. 
                Consulta disponibilidad en tu ciudad.
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Horarios</h4>
                  <p className="text-gray-400">Atención al Cliente</p>
                </div>
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Lunes - Viernes:</span>
                  <span className="text-green-400 font-semibold">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="text-green-400 font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="text-yellow-400 font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-2 mt-4">
                  <span>WhatsApp 24/7:</span>
                  <span className="text-purple-400 font-semibold">Disponible</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-6">¿Por qué elegir LIZO?</h4>
              <div className="space-y-4">
                {[
                  { icon: Award, text: "Calidad Premium Garantizada", color: "text-yellow-400" },
                  { icon: Star, text: "98% Satisfacción del Cliente", color: "text-green-400" },
                  { icon: Crown, text: "Líderes en Innovación", color: "text-purple-400" },
                  { icon: Sparkles, text: "Soporte Técnico Experto", color: "text-pink-400" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <item.icon className={`${item.color}`} size={20} />
                    <span className="text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}