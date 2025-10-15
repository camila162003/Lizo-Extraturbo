import dynamic from 'next/dynamic'
import { supabaseService } from '@/lib/supabase-service'
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

      {/* BENEFICIOS - Sección simple sin animaciones complejas */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-gray-600">
              La mejor experiencia de compra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border-2 border-pink-100 hover:border-pink-300 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E91E63] to-[#9C27B0] rounded-2xl flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Envío Gratis</h3>
              <p className="text-gray-600">En compras superiores a $100.000</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-pink-100 hover:border-pink-300 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E91E63] to-[#9C27B0] rounded-2xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Garantía Total</h3>
              <p className="text-gray-600">12 meses en todos los productos</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-pink-100 hover:border-pink-300 transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E91E63] to-[#9C27B0] rounded-2xl flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Productos Originales</h3>
              <p className="text-gray-600">100% auténticos y verificados</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-600">
              Miles de profesionales confían en nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Carlos Rodríguez",
                role: "Barbero Profesional",
                text: "Las mejores cortadoras que he usado. La precisión es increíble.",
                rating: 5
              },
              {
                name: "María González",
                role: "Estilista",
                text: "Productos de calidad excepcional. Mis clientes están encantados.",
                rating: 5
              },
              {
                name: "Juan Pérez",
                role: "Dueño de Barbería",
                text: "Excelente relación calidad-precio. Envío rápido y seguro.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-pink-50/30 p-8 rounded-2xl border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E91E63] text-[#E91E63]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER & CONTACTO */}
      <section className="py-20 bg-gradient-to-br from-[#E91E63] to-[#9C27B0]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              ¿Listo para mejorar tu negocio?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Únete a miles de profesionales que ya confían en Lizo Belleza
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/productos"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#E91E63] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform"
              >
                <ShoppingBag className="w-5 h-5" />
                Ver Productos
              </Link>
              <Link 
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Contáctanos
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-6 h-6" />
                <span>+57 300 123 4567</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-6 h-6" />
                <span>info@lizobelleza.com</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-6 h-6" />
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESTADÍSTICAS */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black text-[#E91E63] mb-2">10K+</div>
              <div className="text-gray-400">Clientes Felices</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-[#E91E63] mb-2">256</div>
              <div className="text-gray-400">Productos Premium</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-[#E91E63] mb-2">15+</div>
              <div className="text-gray-400">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-[#E91E63] mb-2">100%</div>
              <div className="text-gray-400">Satisfacción Garantizada</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
