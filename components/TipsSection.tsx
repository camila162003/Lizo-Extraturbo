'use client'

import { motion } from 'framer-motion'

export function TipsSection() {
  const tips = [
    {
      title: 'Cuidado del Cabello Graso',
      description: 'Consejos profesionales para manejar y tratar el cabello graso de tus clientes',
      image: '/lizo/tips/cabello-graso.jpg',
      category: 'Cuidado Capilar',
      readTime: '3 min'
    },
    {
      title: 'Técnicas de Corte Moderno',
      description: 'Descubre las últimas tendencias en cortes masculinos y femeninos',
      image: '/lizo/tips/cortes-modernos.jpg',
      category: 'Técnicas',
      readTime: '5 min'
    },
    {
      title: 'Mantenimiento de Herramientas',
      description: 'Cómo mantener tus herramientas profesionales en perfecto estado',
      image: '/lizo/tips/mantenimiento.jpg',
      category: 'Herramientas',
      readTime: '4 min'
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
          Tips & Consejos Profesionales
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Conocimiento experto para elevar tu técnica y resultados
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tips.map((tip, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <div className="h-48 bg-gradient-to-br from-primary-100 to-wine-100 overflow-hidden">
              <div className="w-full h-full bg-white/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <div className="text-center text-gray-600">
                  <div className="w-16 h-16 mx-auto mb-2 bg-primary-200 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <p className="font-medium">{tip.category}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  {tip.category}
                </span>
                <span className="text-sm text-gray-500">{tip.readTime} lectura</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {tip.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                {tip.description}
              </p>

              <motion.button
                whileHover={{ x: 5 }}
                className="text-primary-600 font-semibold flex items-center group"
              >
                Leer más
                <svg 
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}