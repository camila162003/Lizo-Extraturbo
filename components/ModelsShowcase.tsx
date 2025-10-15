'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Scissors, Sparkles, Star, Award, TrendingUp, Heart, Zap } from 'lucide-react'

const models = [
  {
    id: 1,
    name: "Barbería Profesional",
    role: "Cortes de Precisión",
    image: "👨‍🦰",
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    icon: Scissors,
    description: "Estilo y precisión en cada corte",
    stats: { experience: "15+ años", clients: "10K+" }
  },
  {
    id: 2,
    name: "Cabello Radiante",
    role: "Brillo Natural",
    image: "👩‍🦱",
    gradient: "from-pink-500 via-rose-500 to-pink-600",
    icon: Sparkles,
    description: "Cabello saludable y luminoso",
    stats: { shine: "100%", health: "Premium" }
  },
  {
    id: 3,
    name: "Estilo Urbano",
    role: "Tendencias 2024",
    image: "👨‍🦲",
    gradient: "from-purple-500 via-indigo-500 to-purple-600",
    icon: TrendingUp,
    description: "Los cortes más modernos",
    stats: { trend: "Top 1", style: "Urban" }
  },
  {
    id: 4,
    name: "Belleza Profesional",
    role: "Cuidado Total",
    image: "👩‍🦳",
    gradient: "from-orange-500 via-amber-500 to-orange-600",
    icon: Star,
    description: "Tratamientos de lujo",
    stats: { quality: "5★", treatments: "50+" }
  },
  {
    id: 5,
    name: "Barber Shop",
    role: "Clásico y Moderno",
    image: "🧔",
    gradient: "from-green-500 via-emerald-500 to-green-600",
    icon: Award,
    description: "Tradición con innovación",
    stats: { awards: "3+", rating: "4.9★" }
  },
  {
    id: 6,
    name: "Hair Fashion",
    role: "Alta Moda",
    image: "👸",
    gradient: "from-red-500 via-rose-500 to-red-600",
    icon: Heart,
    description: "Estilo de pasarela",
    stats: { fashion: "Haute", events: "100+" }
  }
]

export default function ModelsShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decoración de fondo animada */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 0],
            x: [0, 100, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-[#E91E63]/30 to-[#9C27B0]/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.3, 1, 1.3],
            rotate: [180, 0, 180],
            x: [0, -100, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-[#673AB7]/30 to-[#3F51B5]/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Premium */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-20"
        >
          {/* Badge animado */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] px-8 py-4 rounded-full mb-8 shadow-2xl"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-sm font-black text-white uppercase tracking-widest">
              ✨ Profesionales del Estilo
            </span>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>

          {/* Título espectacular */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-black text-gray-900 mb-6"
          >
            Expertos en{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] via-[#9C27B0] to-[#673AB7] animate-gradient">
                Belleza
              </span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-3 bg-gradient-to-r from-[#E91E63]/20 to-[#9C27B0]/20 blur-2xl -z-10"
              />
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            🌟 Descubre el poder de la transformación profesional
          </motion.p>
        </motion.div>

        {/* Grid de Modelos Premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {models.map((model, i) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.15, 
                type: "spring",
                stiffness: 100
              }}
              className="group relative"
            >
              <motion.div
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  rotateY: 5
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-transparent"
              >
                {/* Gradiente de fondo animado */}
                <div className={`absolute inset-0 bg-gradient-to-br ${model.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Badge de categoría */}
                <div className="absolute top-4 right-4 z-20">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3 }}
                    className={`bg-gradient-to-r ${model.gradient} p-3 rounded-full shadow-xl`}
                  >
                    <model.icon className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Imagen del modelo (emoji gigante) */}
                <div className="relative h-80 bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center overflow-hidden">
                  {/* Círculos decorativos */}
                  <div className="absolute inset-0 opacity-30">
                    <div className={`absolute top-10 left-10 w-40 h-40 bg-gradient-to-br ${model.gradient} rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`} />
                    <div className={`absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br ${model.gradient} rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700`} />
                  </div>

                  {/* Emoji del modelo */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-9xl z-10 relative"
                  >
                    {model.image}
                  </motion.div>

                  {/* Efectos de brillo */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className={`absolute inset-0 bg-gradient-to-t ${model.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                </div>

                {/* Información del modelo */}
                <div className="p-8 relative z-10">
                  {/* Nombre y rol */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#E91E63] group-hover:to-[#9C27B0] transition-all">
                      {model.name}
                    </h3>
                    <p className={`text-sm font-bold bg-gradient-to-r ${model.gradient} bg-clip-text text-transparent uppercase tracking-wider`}>
                      {model.role}
                    </p>
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {model.description}
                  </p>

                  {/* Estadísticas */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(model.stats).map(([key, value], idx) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + idx * 0.1 }}
                        className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-100 group-hover:border-[#E91E63]/30 transition-colors"
                      >
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-bold">
                          {key}
                        </div>
                        <div className={`text-lg font-black bg-gradient-to-r ${model.gradient} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Botón CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${model.gradient} text-white py-4 rounded-xl font-black text-sm shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group/btn`}
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Zap className="w-5 h-5" />
                      VER PRODUCTOS PARA {model.role.split(' ')[0].toUpperCase()}
                    </span>
                  </motion.button>
                </div>

                {/* Indicador de calidad */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.5, type: "spring" }}
                    className={`bg-gradient-to-r ${model.gradient} text-white px-6 py-2 rounded-full text-xs font-black shadow-2xl flex items-center gap-2`}
                  >
                    <Star className="w-4 h-4" />
                    PROFESIONAL CERTIFICADO
                    <Award className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Sección de características premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#E91E63] via-[#9C27B0] to-[#673AB7] rounded-3xl p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decoración */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10 text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white mb-6"
            >
              🌟 Transforma Tu Estilo Hoy
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Únete a miles de profesionales que confían en LIZO Belleza para lucir espectaculares
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#E91E63] px-10 py-4 rounded-full font-black text-lg shadow-2xl hover:shadow-white/50 transition-all"
              >
                🛍️ COMPRAR AHORA
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-black text-lg hover:bg-white/10 transition-all"
              >
                💬 CONTACTAR EXPERTOS
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
