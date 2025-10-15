'use client'

import { motion } from 'framer-motion'
import { Sparkles, Scissors, Heart, Star, TrendingUp, Award, Zap } from 'lucide-react'

const scenarios = [
  {
    id: 1,
    title: "Barbería Profesional",
    emoji: "💈",
    gradient: "from-slate-700 via-gray-800 to-slate-900",
    description: "Cortes de precisión y estilo masculino",
    features: ["Fade perfecto", "Barba diseñada", "Estilo urbano"],
    icon: Scissors,
    popular: true
  },
  {
    id: 2,
    title: "Cabello Radiante",
    emoji: "✨",
    gradient: "from-rose-400 via-pink-500 to-fuchsia-600",
    description: "Brillo natural y sedosidad extrema",
    features: ["Hidratación profunda", "Brillo duradero", "Suavidad total"],
    icon: Sparkles,
    popular: true
  },
  {
    id: 3,
    title: "Transformación Total",
    emoji: "💇‍♀️",
    gradient: "from-purple-500 via-violet-600 to-indigo-700",
    description: "Cambio de look espectacular",
    features: ["Asesoría incluida", "Productos premium", "Resultados garantizados"],
    icon: Star,
    popular: false
  },
  {
    id: 4,
    title: "Estilo Profesional",
    emoji: "👔",
    gradient: "from-blue-600 via-cyan-600 to-teal-700",
    description: "Para la persona exitosa y moderna",
    features: ["Look corporativo", "Mantenimiento fácil", "Elegancia natural"],
    icon: Award,
    popular: false
  }
]

export default function HairTransformations() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Estrellas brillantes de fondo */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -50, -100]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeOut"
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Oscuro Premium */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E91E63] to-[#9C27B0] px-8 py-4 rounded-full mb-8 shadow-2xl shadow-[#E91E63]/50"
          >
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-sm font-black text-white uppercase tracking-widest">
              ✨ Transformaciones Espectaculares
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Tu Mejor{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] via-[#9C27B0] to-[#673AB7]">
                Versión
              </span>
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-3 bg-gradient-to-r from-[#E91E63]/30 to-[#9C27B0]/30 blur-2xl -z-10"
              />
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Descubre el poder de una imagen renovada
          </p>
        </motion.div>

        {/* Grid de Escenarios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {scenarios.map((scenario, i) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700 hover:border-[#E91E63] transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#E91E63]/30"
              >
                {/* Badge popular */}
                {scenario.popular && (
                  <div className="absolute top-4 right-4 z-20">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-black flex items-center gap-1 shadow-xl"
                    >
                      <TrendingUp className="w-3 h-3" />
                      HOT
                    </motion.div>
                  </div>
                )}

                {/* Emoji gigante con gradiente de fondo */}
                <div className={`relative h-64 bg-gradient-to-br ${scenario.gradient} flex items-center justify-center overflow-hidden`}>
                  {/* Efectos de brillo */}
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.5, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/10"
                  />
                  
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-8xl z-10 filter drop-shadow-2xl"
                  >
                    {scenario.emoji}
                  </motion.div>

                  {/* Icono flotante */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0, -5, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm p-3 rounded-full"
                  >
                    <scenario.icon className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-2xl font-black text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#E91E63] group-hover:to-[#9C27B0] transition-all">
                    {scenario.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {scenario.description}
                  </p>

                  {/* Features con checks */}
                  <div className="space-y-3 mb-6">
                    {scenario.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + idx * 0.1 }}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#E91E63] to-[#9C27B0] flex items-center justify-center flex-shrink-0">
                          <Zap className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300 font-semibold">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Botón CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${scenario.gradient} text-white py-4 rounded-xl font-black text-sm shadow-lg hover:shadow-2xl transition-all`}
                  >
                    DESCUBRIR PRODUCTOS
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Banner inspiracional */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-[#E91E63] via-[#9C27B0] to-[#673AB7] rounded-3xl p-16 text-center overflow-hidden shadow-2xl"
        >
          {/* Decoración animada */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-20"
          >
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          </motion.div>

          <div className="relative z-10">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              ✨💇‍♀️💈
            </motion.div>
            
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
              ¿Listo Para Tu Transformación?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Únete a más de 10,000 personas que ya transformaron su estilo con LIZO Belleza
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#E91E63] px-12 py-5 rounded-full font-black text-lg shadow-2xl hover:shadow-white/50 transition-all flex items-center gap-2"
              >
                <Heart className="w-6 h-6" />
                COMPRAR AHORA
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Star className="w-6 h-6" />
                VER CATÁLOGO
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
