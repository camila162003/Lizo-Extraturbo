'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Quote, Star, ThumbsUp, Heart } from 'lucide-react'

export const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Ana Martínez",
      role: "Estilista Senior - Salon Élite",
      image: "/api/placeholder/150/150",
      rating: 5,
      text: "LIZO BELLEZA cambió mi negocio para siempre. Desde que uso sus equipos, mis clientas reservan cita con meses de anticipación. La calidad es incomparable y la inversión se recupera súper rápido.",
      product: "Plancha Infrarroja MD60",
      years: "8 años transformando vidas"
    },
    {
      id: 2,
      name: "Roberto Silva",
      role: "Barbero Master - BarberShop Central",
      image: "/api/placeholder/150/150",
      rating: 5,
      text: "¡Increíble! El secador turbo 6200W es una máquina de hacer dinero. Trabajo 50% más rápido, mis clientes quedan fascinados y mi facturación se triplicó. LIZO es sinónimo de éxito.",
      product: "Secador Turbo 6200W",
      years: "12 años cortando con excelencia"
    },
    {
      id: 3,
      name: "Carmen López",
      role: "Colorista Expert - Beauty Studio",
      image: "/api/placeholder/150/150",
      rating: 5,
      text: "Con LIZO logro efectos que antes creía imposibles. Mis trabajos salen en revistas y redes sociales. Las herramientas son tan precisas que cada servicio es una obra de arte que mis clientas pagan felices.",
      product: "Kit Profesional Completo",
      years: "6 años creando magia"
    },
    {
      id: 4,
      name: "Miguel Hernández",
      role: "Dueño - Barbería Moderna",
      image: "/api/placeholder/150/150",
      rating: 5,
      text: "Mejor decisión de mi vida empresarial. Equipé toda mi barbería con LIZO y en 2 meses recuperé la inversión. Ahora tengo lista de espera y mis barberos trabajan con orgullo. ¡Calidad que vende sola!",
      product: "Equipamiento Completo Premium",
      years: "15 años construyendo imperio"
    }
  ]

  return (
    <section className="relative py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Logo Pattern */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i % 4) * 25}%`,
              top: `${Math.floor(i / 4) * 33}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Image
              src="/logo y carrusel/Logolizo.jpg"
              alt="Lizo"
              width={80}
              height={80}
              className="rounded-full"
            />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl lg:text-7xl font-black mb-6 text-white"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              ÉXITOS
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
              COMPROBADOS
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            💬 Historias reales de profesionales que transformaron sus negocios con LIZO BELLEZA
          </motion.p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          key={activeTestimonial}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20">
            {/* Quote Icon */}
            <motion.div
              className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Quote size={24} className="text-white" />
            </motion.div>

            {/* Logo Badge */}
            <div className="absolute -top-4 right-8">
              <Image
                src="/logo y carrusel/Logolizo.jpg"
                alt="Lizo"
                width={50}
                height={50}
                className="rounded-full border-4 border-white/30"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Profile */}
              <div className="text-center lg:text-left">
                <motion.div
                  className="relative w-32 h-32 mx-auto lg:mx-0 mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    fill
                    className="object-cover rounded-full border-4 border-blue-300/50"
                  />
                  
                  {/* Verified Badge */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center border-2 border-white">
                    <ThumbsUp size={14} className="text-white" />
                  </div>
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {testimonials[activeTestimonial].name}
                </h3>
                <p className="text-blue-200 mb-2">{testimonials[activeTestimonial].role}</p>
                <p className="text-blue-300 text-sm">{testimonials[activeTestimonial].years}</p>

                {/* Rating */}
                <div className="flex justify-center lg:justify-start space-x-1 mt-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="lg:col-span-2">
                <motion.blockquote
                  className="text-xl lg:text-2xl text-white font-light leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  "{testimonials[activeTestimonial].text}"
                </motion.blockquote>

                {/* Product Used */}
                <div className="flex items-center space-x-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                  <span className="text-blue-200">Producto usado:</span>
                  <span className="text-white font-semibold">{testimonials[activeTestimonial].product}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={testimonial.id}
              onClick={() => setActiveTestimonial(index)}
              className={`w-16 h-16 rounded-full overflow-hidden border-3 transition-all duration-300 ${
                index === activeTestimonial
                  ? 'border-blue-400 scale-110 shadow-lg shadow-blue-400/50'
                  : 'border-white/30 hover:border-white/60'
              }`}
              whileHover={{ scale: index === activeTestimonial ? 1.1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={64}
                height={64}
                className="object-cover"
              />
            </motion.button>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { icon: "👥", number: "500+", label: "Profesionales" },
            { icon: "⭐", number: "4.9", label: "Rating Promedio" },
            { icon: "🏪", number: "150+", label: "Locales Equipados" },
            { icon: "💝", number: "98%", label: "Satisfacción" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-black text-white mb-1">{stat.number}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group relative px-12 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-lg rounded-full overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
              initial={{ x: "100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10 flex items-center space-x-2">
              <Heart size={20} />
              <span>Únete a Nuestros Testimonios</span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}