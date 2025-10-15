'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ShoppingBag, Shield, Truck, Star, Phone, Mail, MapPin, 
  MessageCircle, Award, CheckCircle, Heart, Clock, 
  TrendingUp, Sparkles, ChevronRight, Zap, Gift, Package
} from 'lucide-react'
import { realProducts, getFeaturedProducts, getBestsellers } from '@/lib/real-products'

// Cargar componentes dinámicamente
const HeroCarousel = dynamic(() => import('@/components/HeroCarousel'), {
  ssr: false,
  loading: () => <div className="h-screen bg-gradient-to-br from-[#E91E63] via-[#9C27B0] to-[#673AB7]" />
})

export default function HomePage() {
  // Productos destacados REALES
  const featuredProducts = getFeaturedProducts().slice(0, 8)
  const bestsellers = getBestsellers().slice(0, 4)

  return (
    <main className="min-h-screen bg-white">
      {/* HERO CAROUSEL - FOTOS REALES */}
      <HeroCarousel />

      {/* PRODUCTOS DESTACADOS - DISEÑO LIMPIO Y PROFESIONAL */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {/* Header con diseño elegante */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E91E63]/10 to-[#9C27B0]/10 px-6 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-[#E91E63]" />
              <span className="text-sm font-bold text-[#E91E63] uppercase tracking-wider">
                Lo Más Vendido
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
              Productos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] to-[#9C27B0]">Premium</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Equipos profesionales con tecnología de última generación
            </p>
          </motion.div>

          {/* Grid de productos REAL con imágenes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link href={`/productos/${product.id}`}>
                  <div className="bg-white rounded-3xl overflow-hidden border-2 border-gray-100 hover:border-[#E91E63] transition-all duration-300 hover:shadow-2xl hover:shadow-[#E91E63]/20 hover:-translate-y-2">
                    {/* Badges */}
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                      {product.bestseller && (
                        <div className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                          <TrendingUp className="w-3 h-3" />
                          BEST SELLER
                        </div>
                      )}
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) > 20 && (
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                        </div>
                      )}
                    </div>

                    {/* Imagen del producto REAL */}
                    <div className="relative h-72 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      {/* Botón de favorito */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart className="w-5 h-5 text-[#E91E63]" />
                      </motion.button>
                    </div>

                    {/* Info del producto */}
                    <div className="p-6">
                      {/* Categoría */}
                      <div className="text-xs font-bold text-[#9C27B0] uppercase tracking-wider mb-2">
                        {product.category}
                      </div>

                      {/* Nombre */}
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#E91E63] transition-colors">
                        {product.name}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>

                      {/* Precio */}
                      <div className="flex items-baseline gap-3 mb-4">
                        <div className="text-2xl font-black text-[#E91E63]">
                          ${product.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-400 line-through">
                          ${product.originalPrice.toLocaleString()}
                        </div>
                      </div>

                      {/* Botón CTA */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-[#E91E63]/30 transition-all"
                      >
                        <ShoppingBag className="w-5 h-5" />
                        Agregar al Carrito
                      </motion.button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Botón Ver Todos */}
          <div className="text-center">
            <Link href="/productos">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#E91E63] to-[#9C27B0] text-white px-12 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-[#E91E63]/40 flex items-center gap-3 mx-auto"
              >
                Ver Todos los Productos ({realProducts.length})
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Lizo Belleza?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más de 15 años de experiencia brindando calidad y confianza
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Envío Gratis",
                desc: "En compras +$100.000",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Compra Segura",
                desc: "Pago con ePayco",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Garantía Legal",
                desc: "Ley 1480 de 2011",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "+10,000 Clientes",
                desc: "Satisfechos",
                color: "from-rose-500 to-pink-600"
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${benefit.color} text-white mb-4`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS CON PRECIOS Y BOTONES */}
      <section id="productos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Productos Destacados
            </h2>
            <p className="text-xl text-gray-600">Lo más vendido de nuestra tienda</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                {i < 3 && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Crown className="w-4 h-4" />
                    TOP {i + 1}
                  </div>
                )}
                
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShoppingBag className="w-16 h-16 text-gray-400" />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="w-5 h-5 text-rose-500" />
                  </motion.button>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-gray-600">{product.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">(4.8)</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-rose-600">
                      ${product.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500 line-through">
                      ${Math.round(product.price * 1.3).toLocaleString()}
                    </div>
                  </div>
                  <Link href={`/productos/${product.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Agregar al Carrito
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/productos">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-12 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
              >
                Ver Todos los Productos ({products.length})
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER + DESCUENTO */}
      <section className="py-20 bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-blob" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-white rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex p-4 rounded-full bg-white/20 backdrop-blur-sm mb-6"
            >
              <Gift className="w-12 h-12 text-white" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ¡Obtén 15% de Descuento!
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Suscríbete a nuestro newsletter y recibe ofertas exclusivas, tips de belleza y novedades directamente en tu email
            </p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-8"
            >
              <input
                type="email"
                placeholder="tucorreo@ejemplo.com"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-xl"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-2xl hover:bg-gray-800 transition-all"
              >
                <Send className="w-5 h-5" />
                Suscribirse
              </motion.button>
            </motion.form>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Sin spam
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Cancela cuando quieras
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                +5,000 suscriptores
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MÉTODOS DE PAGO CON ePAYCO */}
      <section className="py-20 bg-gradient-to-b from-pink-50/30 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Métodos de Pago Seguros
            </h2>
            <p className="text-xl text-gray-600">Paga de forma segura con ePayco</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-12 shadow-2xl"
            >
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { icon: <CreditCard />, title: "Tarjetas de Crédito", desc: "Visa, Mastercard, Amex" },
                  { icon: <Package />, title: "Contra Entrega", desc: "Paga al recibir" },
                  { icon: <CheckCircle />, title: "PSE", desc: "Débito bancario" }
                ].map((method, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-4">
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600">{method.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">100% Seguro con ePayco</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Todas las transacciones están protegidas con encriptación SSL de 256 bits
                </p>
                <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
                  <img src="/epayco-logo.png" alt="ePayco" className="h-8" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                  <span className="font-bold text-gray-700">Powered by ePayco</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS DE CLIENTES */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-600">Miles de personas confían en nosotros</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María Rodríguez",
                role: "Estilista Profesional",
                image: "👩‍💼",
                rating: 5,
                text: "Compro todos mis productos profesionales aquí. La calidad es excepcional y el servicio al cliente impecable. ¡100% recomendado!",
                date: "Hace 2 semanas"
              },
              {
                name: "Carlos Mendoza",
                role: "Dueño de Barbería",
                image: "👨‍💼",
                rating: 5,
                text: "Llevo 3 años comprando en Lizo Belleza. Precios competitivos, envío rápido y productos originales. Mi barbería confía en ellos.",
                date: "Hace 1 mes"
              },
              {
                name: "Ana Martínez",
                role: "Cliente Frecuente",
                image: "👩",
                rating: 5,
                text: "Me encanta la variedad de productos y las ofertas. El sistema de puntos es genial. Siempre encuentro lo que busco.",
                date: "Hace 3 días"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative"
              >
                <div className="absolute -top-4 -left-4 bg-gradient-to-br from-rose-500 to-pink-500 text-white p-3 rounded-full shadow-xl">
                  <Quote className="w-6 h-6" />
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{testimonial.image}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  {testimonial.date}
                </div>

                <div className="absolute bottom-4 right-4">
                  <ThumbsUp className="w-5 h-5 text-rose-500" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-100 to-pink-100 px-8 py-4 rounded-full">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <div className="text-left">
                <div className="font-bold text-gray-900 text-lg">4.9/5 Calificación</div>
                <div className="text-gray-600 text-sm">Basado en +2,500 reseñas</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* POLÍTICAS Y GARANTÍAS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Políticas y Garantías
            </h2>
            <p className="text-xl text-gray-600">Compra con total confianza</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Garantía Legal",
                desc: "Cumplimos con la Ley 1480 de 2011 del Estatuto del Consumidor en Colombia",
                points: ["Garantía mínima de 6 meses", "Devoluciones gratuitas", "Soporte técnico incluido"]
              },
              {
                icon: <Package className="w-12 h-12" />,
                title: "Envíos Seguros",
                desc: "Envíos asegurados con rastreo en tiempo real",
                points: ["Seguro de envío incluido", "Rastreo GPS", "Empaque premium"]
              },
              {
                icon: <Star className="w-12 h-12" />,
                title: "Calidad Certificada",
                desc: "Productos 100% originales y certificados",
                points: ["Certificados de calidad", "Productos originales", "Importación legal"]
              }
            ].map((policy, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-white to-pink-50/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="bg-gradient-to-br from-rose-500 to-pink-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {policy.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{policy.title}</h3>
                <p className="text-gray-600 mb-6">{policy.desc}</p>
                <ul className="space-y-3">
                  {policy.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8 text-center"
          >
            <p className="text-gray-700 text-lg">
              <strong className="text-rose-600">Ley 1480 de 2011:</strong> Todos nuestros productos cuentan con garantía legal. 
              Tienes derecho a devolución dentro de los primeros 5 días sin justificación.
            </p>
          </motion.div>
        </div>
      </section>

      {/* UBICACIONES Y CONTACTO */}
      <section className="py-20 bg-gradient-to-b from-pink-50/30 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Encuéntranos
            </h2>
            <p className="text-xl text-gray-600">Estamos aquí para ayudarte</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl h-96"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8158189949343!2d-74.07209842507584!3d4.647926995349735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a2e2e2e2e2e%3A0x0!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>

            {/* Información de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Contáctanos</h3>
                <p className="text-gray-600 text-lg mb-8">
                  ¿Tienes alguna pregunta? Nuestro equipo está listo para ayudarte
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: <MapPin className="w-6 h-6" />,
                    title: "Dirección",
                    info: "Calle 123 #45-67, Bogotá, Colombia",
                    action: "Ver en Mapa",
                    href: "https://maps.google.com",
                    color: "from-red-500 to-rose-600"
                  },
                  {
                    icon: <Phone className="w-6 h-6" />,
                    title: "Teléfono",
                    info: "+57 314 230 8028",
                    action: "Llamar",
                    href: "tel:+573142308028",
                    color: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: <MessageCircle className="w-6 h-6" />,
                    title: "WhatsApp",
                    info: "+57 314 230 8028",
                    action: "Chatear",
                    href: "https://wa.me/573142308028",
                    color: "from-green-500 to-emerald-600"
                  },
                  {
                    icon: <Mail className="w-6 h-6" />,
                    title: "Email",
                    info: "contacto@lizobelleza.com",
                    action: "Enviar Email",
                    href: "mailto:contacto@lizobelleza.com",
                    color: "from-purple-500 to-purple-600"
                  }
                ].map((contact, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${contact.color} text-white`}>
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">{contact.title}</h4>
                        <p className="text-gray-600">{contact.info}</p>
                      </div>
                      <a href={contact.href} target="_blank" rel="noopener noreferrer">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-4 py-2 rounded-lg bg-gradient-to-r ${contact.color} text-white font-semibold text-sm`}
                        >
                          {contact.action}
                        </motion.button>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-rose-600" />
                  <h4 className="font-bold text-gray-900">Horario de Atención</h4>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  <p>Sábados: 9:00 AM - 2:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES (FAQ) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600">Respuestas a las dudas más comunes</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "¿Cuánto tiempo tarda el envío?",
                a: "Los envíos dentro de Bogotá tardan 24-48 horas. A nivel nacional, entre 3-5 días hábiles. Todos los envíos incluyen rastreo GPS en tiempo real."
              },
              {
                q: "¿Puedo devolver un producto si no me gusta?",
                a: "Sí, según la Ley 1480 de 2011, tienes 5 días hábiles para devolver cualquier producto sin necesidad de justificación. El producto debe estar sin usar y en su empaque original."
              },
              {
                q: "¿Los productos son originales?",
                a: "Absolutamente. Todos nuestros productos son 100% originales, importados directamente de fabricantes certificados. Incluyen hologramas de autenticidad y garantía legal."
              },
              {
                q: "¿Qué métodos de pago aceptan?",
                a: "Aceptamos tarjetas de crédito/débito (Visa, Mastercard, Amex), PSE, pago contra entrega y transferencias bancarias. Todos los pagos están protegidos con ePayco."
              },
              {
                q: "¿Tienen tienda física?",
                a: "Somos 100% online para ofrecerte mejores precios. Sin embargo, tenemos punto de retiro en Bogotá (Calle 123 #45-67) de lunes a viernes de 9AM a 6PM."
              },
              {
                q: "¿Ofrecen descuentos para compras al por mayor?",
                a: "Sí, tenemos precios especiales para salones de belleza, barberías y spas. Contáctanos por WhatsApp al +57 314 230 8028 para cotizaciones personalizadas."
              }
            ].map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-gradient-to-br from-white to-pink-50/30 rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
              >
                <summary className="cursor-pointer p-6 font-bold text-lg text-gray-900 flex items-center justify-between hover:text-rose-600 transition-colors">
                  <span className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {i + 1}
                    </div>
                    {faq.q}
                  </span>
                  <ChevronRight className="w-6 h-6 text-gray-400 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-700 leading-relaxed pl-20">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">¿No encuentras la respuesta que buscas?</p>
            <Link href="/contacto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all"
              >
                Contáctanos
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MARCAS Y CONFIANZA */}
      <section className="py-16 bg-gradient-to-b from-pink-50/30 to-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Marcas Reconocidas Mundialmente
            </h3>
            <p className="text-gray-600">Trabajamos con las mejores marcas de la industria</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {[
              { name: "Wahl", bg: "from-blue-500 to-blue-600" },
              { name: "Andis", bg: "from-red-500 to-red-600" },
              { name: "BaByliss", bg: "from-purple-500 to-purple-600" },
              { name: "Oster", bg: "from-green-500 to-emerald-600" },
              { name: "Remington", bg: "from-orange-500 to-orange-600" },
              { name: "Philips", bg: "from-blue-500 to-cyan-600" }
            ].map((brand, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${brand.bg} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all flex items-center justify-center h-24`}>
                  <span className="text-white font-bold text-xl">{brand.name}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: <Award />, text: "Distribuidor Autorizado" },
              { icon: <Shield />, text: "Garantía Oficial" },
              { icon: <Package />, text: "Productos Originales" },
              { icon: <Star />, text: "+15 Años Experiencia" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md"
              >
                <div className="text-rose-600">{item.icon}</div>
                <span className="text-gray-700 font-semibold text-sm">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOG / TIPS DE BELLEZA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tips & Tendencias
            </h2>
            <p className="text-xl text-gray-600">Aprende de los expertos</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Barbería",
                title: "5 Técnicas de Fade para Barberos Profesionales",
                excerpt: "Domina los cortes fade más populares del 2024 con estas técnicas profesionales...",
                image: "✂️",
                readTime: "5 min",
                date: "Oct 10, 2024",
                color: "from-blue-500 to-blue-600"
              },
              {
                category: "Cuidado",
                title: "Cómo Elegir el Shampoo Perfecto para Tu Tipo de Cabello",
                excerpt: "Guía completa para identificar tu tipo de cabello y elegir los productos correctos...",
                image: "🧴",
                readTime: "7 min",
                date: "Oct 8, 2024",
                color: "from-pink-500 to-rose-600"
              },
              {
                category: "Tendencias",
                title: "Los Cortes Más Populares de 2024",
                excerpt: "Descubre los estilos que están marcando tendencia este año en el mundo de la belleza...",
                image: "💇",
                readTime: "4 min",
                date: "Oct 5, 2024",
                color: "from-purple-500 to-purple-600"
              }
            ].map((article, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
                <div className={`h-48 bg-gradient-to-br ${article.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-8xl opacity-20 absolute">{article.image}</div>
                  <div className="text-6xl z-10">{article.image}</div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-900">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-rose-600 font-semibold"
                  >
                    Leer más
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all flex items-center gap-2 mx-auto"
              >
                <BookOpen className="w-5 h-5" />
                Ver Todos los Artículos
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ¡Descubre Tu Estilo Único!
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Únete a más de 10,000 clientes satisfechos
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/productos">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-rose-600 px-12 py-4 rounded-full text-lg font-bold shadow-2xl"
                >
                  Ver Productos
                </motion.button>
              </Link>
              <Link href="/contacto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-12 py-4 rounded-full text-lg font-bold"
                >
                  Contactar
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

