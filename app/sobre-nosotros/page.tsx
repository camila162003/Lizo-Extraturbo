'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Users, 
  Award, 
  Clock, 
  Heart, 
  Star, 
  CheckCircle,
  Target,
  Zap
} from 'lucide-react'

export default function SobreNosotrosPage() {
  const stats = [
    { icon: Users, label: 'Clientes Satisfechos', value: '10,000+' },
    { icon: Award, label: 'Años de Experiencia', value: '15+' },
    { icon: Clock, label: 'Productos Entregados', value: '50,000+' },
    { icon: Heart, label: 'Calificación Promedio', value: '4.9/5' }
  ]

  const values = [
    {
      icon: Target,
      title: 'Calidad Premium',
      description: 'Seleccionamos cuidadosamente cada producto para garantizar la máxima calidad y durabilidad.'
    },
    {
      icon: Zap,
      title: 'Innovación Constante',
      description: 'Siempre a la vanguardia de las últimas tendencias y tecnologías en el mundo de la belleza.'
    },
    {
      icon: Heart,
      title: 'Pasión por la Belleza',
      description: 'Creemos que cada persona merece sentirse hermosa y confiada con las herramientas adecuadas.'
    },
    {
      icon: CheckCircle,
      title: 'Compromiso Total',
      description: 'Nos comprometemos con la satisfacción de nuestros clientes en cada compra.'
    }
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
              <span className="text-2xl">✨</span>
              <span className="text-rose-600 font-semibold tracking-wide">NUESTRA HISTORIA</span>
              <span className="text-2xl">✨</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-none">
              <span className="bg-gradient-to-r from-rose-600 via-rose-500 to-gray-700 bg-clip-text text-transparent">
                SOBRE
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-700 via-rose-400 to-rose-600 bg-clip-text text-transparent">
                LIZO BELLEZA
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transformando vidas a través de la belleza desde 2009. 
              Somos más que una tienda, somos tu aliado en el camino hacia la confianza y el estilo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">
                  Nuestra Historia
                </span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Lizo Belleza nació en 2009 con una visión clara: democratizar el acceso 
                  a herramientas de belleza profesionales de la más alta calidad. 
                  Comenzamos como una pequeña tienda familiar con grandes sueños.
                </p>
                <p>
                  A lo largo de los años, hemos crecido hasta convertirnos en una de las 
                  principales referencias en Colombia para profesionales y entusiastas 
                  de la belleza, sin nunca perder nuestro toque personal y compromiso 
                  con la excelencia.
                </p>
                <p>
                  Hoy, más de 15 años después, seguimos siendo esa empresa familiar 
                  que se preocupa genuinamente por cada cliente, pero con la experiencia 
                  y el catálogo que solo vienen con años de dedicación y pasión.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/logo y carrusel/Logolizo.jpg"
                  alt="Historia de Lizo Belleza"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
                Nuestros Valores
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y nos mantienen comprometidos 
              con la excelencia en todo lo que hacemos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/60 hover:border-rose-300/60 transition-all duration-300 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full mb-6">
                  <value.icon className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
                Nuestro Equipo
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un equipo apasionado de expertos en belleza dedicados a brindarte 
              la mejor experiencia y asesoramiento personalizado.
            </p>
          </motion.div>

          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 border border-gray-200/60 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full mb-6">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Más que Vendedores, Somos Consultores
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Nuestro equipo está formado por profesionales con años de experiencia 
              en el sector de la belleza. Cada miembro de nuestro equipo está capacitado 
              para ofrecerte asesoramiento experto y ayudarte a encontrar exactamente 
              lo que necesitas para alcanzar tus objetivos de belleza.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-rose-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para Transformar tu Estilo?
            </h2>
            <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
              Únete a miles de clientes satisfechos que han confiado en 
              Lizo Belleza para su transformación.
            </p>
            <motion.button
              className="bg-white text-rose-600 font-bold px-8 py-4 rounded-xl hover:shadow-xl transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = '/productos'}
            >
              Explorar Productos
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}