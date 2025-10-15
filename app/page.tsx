import dynamic from 'next/dynamic'
import { supabaseService } from '@/lib/supabase'
import Link from 'next/link'
import { 
  ShoppingBag, Shield, Truck, Star, Phone, Mail, MapPin, 
  MessageCircle, Award, CheckCircle
} from 'lucide-react'

// Cargar componentes dinámicamente
const HeroCarousel = dynamic(() => import('@/components/HeroCarousel'), {
  ssr: false,
  loading: () => <div className="h-screen bg-gradient-to-br from-[#E91E63] via-[#9C27B0] to-[#673AB7]" />
})

const FeaturedProductsSection = dynamic(() => import('@/components/FeaturedProductsSection'), {
  ssr: false,
  loading: () => <div className="h-screen bg-gray-50" />
})

const ModelsShowcase = dynamic(() => import('@/components/ModelsShowcase'), {
  ssr: false,
  loading: () => <div className="h-screen bg-white" />
})

const HairTransformations = dynamic(() => import('@/components/HairTransformations'), {
  ssr: false,
  loading: () => <div className="h-screen bg-gray-900" />
})

export default async function HomePage() {
  // Cargar productos desde Supabase
  const allProducts = await supabaseService.getProducts() || []
  const featuredProducts = (await supabaseService.getFeaturedProducts() || []).slice(0, 8)
  const bestsellers = (await supabaseService.getBestsellers() || []).slice(0, 4)

  return (
    <main className="min-h-screen bg-white">
      {/* HERO CAROUSEL */}
      <HeroCarousel />

      {/* PRODUCTOS DESTACADOS CON DISEÑO PREMIUM */}
      <FeaturedProductsSection 
        allProducts={allProducts}
        featuredProducts={featuredProducts}
        bestsellers={bestsellers}
      />

      {/* SHOWCASE DE MODELOS PROFESIONALES */}
      <ModelsShowcase />

      {/* TRANSFORMACIONES DE CABELLO */}
      <HairTransformations />

      {/* SECCIÓN DE MARCAS Y PARTNERS */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
              Trabajamos con las
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                Mejores Marcas
              </span>
            </h2>
            <p className="text-xl text-gray-600">Productos oficiales de las marcas líderes mundiales</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Wahl", emoji: "✂️" },
              { name: "Andis", emoji: "💈" },
              { name: "BaByliss", emoji: "💇" },
              { name: "Remington", emoji: "🔥" },
              { name: "Philips", emoji: "⚡" },
              { name: "Conair", emoji: "💫" },
            ].map((brand, i) => (
              <div key={i} className="group text-center">
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-gray-100 hover:border-pink-300">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{brand.emoji}</div>
                  <p className="font-black text-gray-700 text-lg">{brand.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CATEGORÍAS CON IMÁGENES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
              Explora por
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                Categoría
              </span>
            </h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas en un solo lugar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { name: "Cortadoras", icon: "💈", color: "from-blue-500 to-cyan-500", count: "68 productos" },
              { name: "Secadores", icon: "💨", color: "from-pink-500 to-rose-500", count: "45 productos" },
              { name: "Planchas", icon: "🔥", color: "from-purple-500 to-indigo-500", count: "52 productos" },
              { name: "Peines", icon: "💅", color: "from-orange-500 to-amber-500", count: "38 productos" },
              { name: "Tijeras", icon: "✂️", color: "from-green-500 to-emerald-500", count: "32 productos" },
              { name: "Cepillos", icon: "🎨", color: "from-teal-500 to-cyan-500", count: "21 productos" },
            ].map((category, i) => (
              <Link key={i} href={`/productos?category=${category.name}`} className="group">
                <div className="relative overflow-hidden rounded-3xl h-64 hover:scale-105 transition-transform duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
                    <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">{category.icon}</div>
                    <h3 className="text-2xl font-black mb-2">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.count}</p>
                    <div className="mt-4 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-bold">
                      Ver Todo →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN DE PROCESO DE COMPRA */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
              Comprar es
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                Super Fácil
              </span>
            </h2>
            <p className="text-xl text-gray-600">En solo 3 pasos tienes tus productos en casa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Elige tus productos",
                description: "Navega por más de 256 productos premium y agrega al carrito lo que necesitas",
                icon: "🛍️",
                color: "from-pink-500 to-rose-500"
              },
              {
                step: "2",
                title: "Paga seguro",
                description: "Aceptamos todas las tarjetas, PSE, Nequi y más opciones seguras",
                icon: "💳",
                color: "from-purple-500 to-indigo-500"
              },
              {
                step: "3",
                title: "Recibe en 24-48h",
                description: "Envío express con tracking en tiempo real directamente a tu puerta",
                icon: "📦",
                color: "from-blue-500 to-cyan-500"
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                {/* Línea conectora (excepto el último) */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-1 bg-gradient-to-r from-gray-300 to-gray-200 -z-10"></div>
                )}
                
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-gray-100">
                  {/* Número del paso */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-2xl font-black mb-6 mx-auto`}>
                    {step.step}
                  </div>

                  {/* Icono grande */}
                  <div className="text-6xl text-center mb-4">{step.icon}</div>

                  {/* Contenido */}
                  <h3 className="text-2xl font-black text-gray-900 mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS - Diseño Visual Impresionante */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0F0C29] via-[#302b63] to-[#24243e]">
        {/* Estrellas de fondo */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            />
          ))}
        </div>

        {/* Círculos decorativos grandes */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header Espectacular */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-xl px-8 py-4 rounded-full mb-8 border-2 border-white/10">
              <Award className="w-6 h-6 text-pink-400 animate-pulse" />
              <span className="text-base font-black text-white uppercase tracking-widest">
                La Diferencia Lizo
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none">
              Beneficios
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-gradient">
                Extraordinarios
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto font-light">
              No vendemos productos, creamos experiencias que transforman tu negocio
            </p>
          </div>

          {/* Grid de Beneficios - SUPER VISUAL */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            {/* Beneficio 1 - Envío */}
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur-2xl opacity-25 group-hover:opacity-75 transition duration-500"></div>
              
              <div className="relative h-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-10 rounded-3xl border border-white/10 group-hover:border-pink-500/50 transition-all duration-500 overflow-hidden">
                {/* Icono flotante grande */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-pink-500 to-purple-600 w-24 h-24 rounded-3xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Truck className="w-12 h-12 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                <h3 className="text-3xl font-black text-white mb-4">Envío Express</h3>
                <p className="text-pink-400 text-xl font-bold mb-6">Gratis desde $100.000</p>
                
                <div className="space-y-4">
                  {[
                    { icon: "🚀", text: "Entrega 24-48 horas" },
                    { icon: "📦", text: "Empaque premium protegido" },
                    { icon: "📍", text: "Tracking en tiempo real" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-gray-300 group-hover:text-white transition-colors">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-lg">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Beneficio 2 - Garantía (DESTACADO) */}
            <div className="group relative md:-mt-8 md:mb-8">
              {/* Badge de más popular */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-2 rounded-full shadow-2xl">
                <span className="text-sm font-black text-gray-900 uppercase tracking-wider">⭐ Más Valorado</span>
              </div>

              {/* Glow effect más fuerte */}
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl blur-3xl opacity-50 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
              
              <div className="relative h-full bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 p-10 rounded-3xl border-2 border-white/20 shadow-2xl overflow-hidden">
                {/* Patrón de fondo */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20px 20px, white 2px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>

                {/* Icono flotante grande */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-white rounded-3xl blur-2xl opacity-50"></div>
                  <div className="relative bg-white w-28 h-28 rounded-3xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                    <Shield className="w-14 h-14 text-purple-600" strokeWidth={2.5} />
                  </div>
                </div>

                <h3 className="text-4xl font-black text-white mb-4">Garantía Premium</h3>
                <p className="text-yellow-300 text-2xl font-black mb-6">12 Meses Totales</p>
                
                <div className="space-y-4">
                  {[
                    { icon: "✨", text: "Reemplazo inmediato sin preguntas" },
                    { icon: "🎯", text: "Soporte técnico 24/7/365" },
                    { icon: "💎", text: "Garantía extendida disponible" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-white transition-colors">
                      <span className="text-3xl">{item.icon}</span>
                      <span className="text-lg font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Beneficio 3 - Autenticidad */}
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-25 group-hover:opacity-75 transition duration-500"></div>
              
              <div className="relative h-full bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl p-10 rounded-3xl border border-white/10 group-hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
                {/* Icono flotante grande */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 w-24 h-24 rounded-3xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Award className="w-12 h-12 text-white" strokeWidth={2.5} />
                  </div>
                </div>

                <h3 className="text-3xl font-black text-white mb-4">100% Auténtico</h3>
                <p className="text-blue-400 text-xl font-bold mb-6">Certificado Oficial</p>
                
                <div className="space-y-4">
                  {[
                    { icon: "🏆", text: "Importadores directos" },
                    { icon: "📜", text: "Certificado de autenticidad" },
                    { icon: "🔒", text: "Productos sellados de fábrica" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-gray-300 group-hover:text-white transition-colors">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-lg">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Estadísticas Visuales Impactantes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { num: "10K+", label: "Clientes Felices", icon: "😊", color: "from-pink-500 to-rose-500" },
              { num: "256", label: "Productos Premium", icon: "✨", color: "from-purple-500 to-indigo-500" },
              { num: "15+", label: "Años Experiencia", icon: "🏆", color: "from-blue-500 to-cyan-500" },
              { num: "4.9★", label: "Calificación", icon: "⭐", color: "from-yellow-500 to-orange-500" }
            ].map((stat, i) => (
              <div key={i} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition duration-500`}></div>
                <div className="relative bg-gray-900/90 backdrop-blur-xl p-6 rounded-2xl border border-white/10 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                    {stat.num}
                  </div>
                  <div className="text-sm md:text-base font-bold text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS - Diseño Ultra Visual */}
      <section className="relative py-24 overflow-hidden bg-white">
        {/* Fondo decorativo con formas */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-100 to-transparent rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-100 to-transparent rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header Ultra Atractivo */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-100 to-orange-100 px-8 py-4 rounded-full mb-8 shadow-lg">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
              ))}
              <span className="text-xl font-black text-gray-900 ml-2">4.9/5.0</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 leading-none">
              Historias
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
                que Inspiran
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto font-light">
              Más de <span className="font-black text-pink-600">10,000 profesionales</span> transformaron su negocio
            </p>
          </div>

          {/* Grid de Testimonios - SUPER VISUAL */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {[
              {
                name: "Carlos Rodríguez",
                role: "Barbero Profesional",
                location: "Bogotá",
                image: "CR",
                color: "from-pink-500 to-rose-600",
                quote: "Compré una cortadora hace 5 años y sigue como nueva. Mis clientes me felicitan por los cortes perfectos. La inversión se pagó sola.",
                highlight: "5 Años Usando",
                badge: "💎"
              },
              {
                name: "María González",
                role: "Dueña de Salón Premium",
                location: "Medellín",
                image: "MG",
                color: "from-purple-500 to-indigo-600",
                quote: "Equipé todo mi salón con Lizo. Los productos son tan buenos que mis clientas preguntan qué marcas uso. Ahora puedo cobrar más.",
                highlight: "ROI en 4 Meses",
                badge: "🚀"
              },
              {
                name: "Juan Pérez",
                role: "Barbería Elite",
                location: "Cali",
                image: "JP",
                color: "from-blue-500 to-cyan-600",
                quote: "El servicio postventa es increíble. Una vez tuve un problema y me enviaron reemplazo en 24 horas. Eso es compromiso real.",
                highlight: "Soporte 24/7",
                badge: "⚡"
              }
            ].map((testimonial, i) => (
              <div key={i} className="group relative">
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${testimonial.color} rounded-3xl blur-xl opacity-25 group-hover:opacity-75 transition duration-500`}></div>
                
                <div className="relative h-full bg-white p-8 rounded-3xl shadow-2xl border-2 border-gray-100 group-hover:border-transparent transition-all duration-500 hover:-translate-y-2">
                  {/* Badge flotante */}
                  <div className="absolute -top-6 left-6 flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 rounded-2xl shadow-xl">
                    <span className="text-2xl">{testimonial.badge}</span>
                    <span className="text-sm font-black text-gray-900">{testimonial.highlight}</span>
                  </div>

                  {/* Avatar grande y colorido */}
                  <div className="flex justify-center mb-6 mt-4">
                    <div className={`relative w-24 h-24 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-500`}>
                      <span className="text-3xl font-black text-white">{testimonial.image}</span>
                      <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Rating visible */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote con diseño atractivo */}
                  <div className="mb-6">
                    <svg className="w-12 h-12 text-gray-200 mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                    </svg>
                    <p className="text-gray-700 text-lg leading-relaxed font-medium">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Info del usuario */}
                  <div className="pt-6 border-t-2 border-gray-100">
                    <p className="font-black text-xl text-gray-900 mb-1">{testimonial.name}</p>
                    <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-1">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-500 font-bold mb-6 text-lg">Confían en nosotros:</p>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6 items-center">
              {[
                { name: "Barbería Elite", icon: "💈" },
                { name: "Salón Premium", icon: "✨" },
                { name: "Beauty Pro", icon: "💅" },
                { name: "Style Masters", icon: "💇" },
                { name: "Hair Studio", icon: "🎨" }
              ].map((brand, i) => (
                <div key={i} className="text-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                  <div className="text-3xl mb-2">{brand.icon}</div>
                  <div className="text-xs font-bold text-gray-400">{brand.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE GARANTÍAS Y SEGURIDAD */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
              Compra con
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Total Confianza
              </span>
            </h2>
            <p className="text-xl text-gray-600">Tu seguridad es nuestra prioridad</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "🔒",
                title: "Pago 100% Seguro",
                description: "Encriptación SSL y pasarelas certificadas",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: "🛡️",
                title: "Garantía 1 Año",
                description: "Garantía oficial del fabricante por 12 meses",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "🚚",
                title: "Envío Inter Rapidísimo",
                description: "Entrega en 24-48 horas a todo Colombia",
                color: "from-orange-500 to-amber-500"
              },
              {
                icon: "↩️",
                title: "Devolución Gratis",
                description: "30 días para cambios sin costo adicional",
                color: "from-purple-500 to-indigo-500"
              }
            ].map((guarantee, i) => (
              <div key={i} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border-2 border-gray-100 hover:border-gray-300 transition-all hover:shadow-xl hover:-translate-y-2">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${guarantee.color} flex items-center justify-center text-4xl mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                    {guarantee.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3 text-center">{guarantee.title}</h3>
                  <p className="text-gray-600 text-center text-sm">{guarantee.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN FAQ VISUAL */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
              Preguntas
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                Frecuentes
              </span>
            </h2>
            <p className="text-xl text-gray-600">Todo lo que necesitas saber</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                q: "¿Los productos son originales?",
                a: "Sí, 100%. Somos importadores directos y cada producto viene con certificado de autenticidad.",
                icon: "✅"
              },
              {
                q: "¿Cuánto demora el envío?",
                a: "Enviamos por Inter Rapidísimo. 24-48 horas a todo Colombia con tracking en tiempo real.",
                icon: "🚚"
              },
              {
                q: "¿Tienen garantía?",
                a: "Sí, todos nuestros productos incluyen garantía oficial de 1 año del fabricante.",
                icon: "🛡️"
              },
              {
                q: "¿Puedo devolver si no me gusta?",
                a: "Claro. Tienes 30 días para devoluciones sin preguntas y sin costo.",
                icon: "↩️"
              },
              {
                q: "¿Aceptan todos los medios de pago?",
                a: "Sí. Aceptamos todas las tarjetas, PSE, Nequi, Daviplata y más.",
                icon: "💳"
              },
              {
                q: "¿Hacen envíos a todo Colombia?",
                a: "Sí, llegamos a todas las ciudades y municipios del país.",
                icon: "📍"
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100">
                <div className="flex gap-4">
                  <div className="text-4xl flex-shrink-0">{faq.icon}</div>
                  <div>
                    <h3 className="text-lg font-black text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL - EXPLOSIÓN VISUAL */}
      <section className="relative py-32 overflow-hidden">
        {/* Fondo con gradiente mega impactante */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff0080] via-[#7928ca] to-[#4c1d95]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        </div>

        {/* Círculos decorativos animados más grandes */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        {/* Partículas flotantes mejoradas */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              <div className="w-2 h-2 bg-white rounded-full shadow-lg"></div>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Mega Badge Superior */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-yellow-400 to-orange-500 px-10 py-5 rounded-full shadow-2xl animate-pulse">
                <span className="text-4xl">🔥</span>
                <div className="text-left">
                  <p className="text-sm font-black text-gray-900 uppercase">Oferta Limitada</p>
                  <p className="text-2xl font-black text-gray-900">-15% HOY</p>
                </div>
              </div>
            </div>

            {/* Título MEGA Impactante */}
            <div className="text-center mb-12">
              <h2 className="text-6xl md:text-9xl font-black text-white mb-6 leading-none drop-shadow-2xl">
                ¿Listo para
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 animate-gradient">
                  Triunfar?
                </span>
              </h2>
              <p className="text-2xl md:text-4xl text-white/90 font-bold mb-4">
                Únete a <span className="text-yellow-300">10,000+</span> profesionales exitosos
              </p>
              <p className="text-xl md:text-2xl text-pink-200 font-medium">
                Primera compra: 15% OFF + Envío Gratis + Garantía Extendida
              </p>
            </div>

            {/* Beneficios rápidos visuales */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              {[
                { icon: "🚀", text: "Envío 24-48h" },
                { icon: "💎", text: "Garantía 12m" },
                { icon: "🏆", text: "100% Original" },
                { icon: "⭐", text: "4.9/5 Rating" }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 text-center hover:bg-white/20 transition-all hover:scale-105">
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <p className="text-white font-bold text-sm">{item.text}</p>
                </div>
              ))}
            </div>
            
            {/* Botones CTA MEGA Visuales */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              {/* Botón principal con animación extrema */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full blur-xl group-hover:blur-2xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                <Link 
                  href="/productos"
                  className="relative flex items-center justify-center gap-4 bg-white text-gray-900 px-16 py-8 rounded-full font-black text-2xl shadow-2xl hover:scale-110 transition-all duration-300"
                >
                  <ShoppingBag className="w-8 h-8 group-hover:rotate-12 transition-transform" strokeWidth={3} />
                  <span>Ver Catálogo</span>
                  <div className="absolute -top-4 -right-4 bg-red-500 text-white text-sm font-black px-4 py-2 rounded-full animate-bounce shadow-xl">
                    -15%
                  </div>
                </Link>
              </div>

              {/* Botón secundario */}
              <Link 
                href="/contacto"
                className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-xl text-white border-4 border-white/30 px-12 py-8 rounded-full font-black text-2xl hover:bg-white/20 hover:border-white/50 transition-all hover:scale-105"
              >
                <MessageCircle className="w-8 h-8" strokeWidth={3} />
                <span>Asesoría Gratis</span>
              </Link>
            </div>

            {/* Información de Contacto Mejorada Visualmente */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Phone, title: "Llámanos", info: "+57 300 123 4567", color: "from-pink-500 to-rose-500" },
                { icon: Mail, title: "Escríbenos", info: "info@lizobelleza.com", color: "from-purple-500 to-indigo-500" },
                { icon: MapPin, title: "Visítanos", info: "Bogotá, Colombia", color: "from-blue-500 to-cyan-500" }
              ].map((contact, i) => (
                <div key={i} className="group relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${contact.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition duration-500`}></div>
                  <div className="relative bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 text-center hover:scale-105 transition-all">
                    <div className="flex justify-center mb-3">
                      <div className={`bg-gradient-to-br ${contact.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl`}>
                        <contact.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                    <p className="text-sm text-white/70 font-bold mb-1">{contact.title}</p>
                    <p className="text-lg font-black text-white">{contact.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Urgencia visual */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-red-500/20 backdrop-blur-xl border-2 border-red-400/50 px-8 py-4 rounded-full">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
                </span>
                <p className="text-white font-black text-lg">
                  ⏰ Oferta válida por tiempo limitado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
