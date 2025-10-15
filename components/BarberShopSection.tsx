'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Scissors, Users, Star, Award, Crown, Sparkles, MapPin, Clock } from 'lucide-react'

export const BarberShopSection = () => {
  const [activeCategory, setActiveCategory] = useState('professional')
  const [activeTab, setActiveTab] = useState('products')

  const professionalProducts = [
    {
      id: 1,
      name: "Barbera Clásica Premium",
      category: "Barberas Tradicionales",
      price: "35,000",
      image: "/imagenes lizo/PNG barberas/barbera ng.png",
      description: "Diseño clásico para profesionales exigentes"
    },
    {
      id: 2,
      name: "Barber Pole USA",
      category: "Postes Barbería",
      price: "350,000",
      image: "/imagenes lizo/PNG barberas/barb met EEUU.png",
      description: "Poste barbero premium estilo americano"
    },
    {
      id: 3,
      name: "Barber Pole Reino Unido", 
      category: "Postes Barbería",
      price: "350,000",
      image: "/imagenes lizo/PNG barberas/barb met inglaterra.png",
      description: "Elegante poste barbero estilo británico"
    },
    {
      id: 4,
      name: "Barbera Colores Premium",
      category: "Barberas Decorativas",
      price: "45,000",
      image: "/imagenes lizo/PNG barberas/barb colores barberia.png",
      description: "Diseños coloridos para espacios modernos"
    },
    {
      id: 5,
      name: "Barbera Madera Noble",
      category: "Barberas Artesanales",
      price: "65,000",
      image: "/imagenes lizo/PNG barberas/barb madera.png",
      description: "Acabado en madera natural premium"
    },
    {
      id: 6,
      name: "Barbera Madera Roja",
      category: "Barberas Artesanales", 
      price: "70,000",
      image: "/imagenes lizo/PNG barberas/barb madera roja.png",
      description: "Madera roja exclusiva artesanal"
    }
  ]

  const toolsAndSupplies = [
    {
      id: 7,
      name: "Cuchilla Dorada Premium",
      category: "Herramientas",
      price: "25,000",
      image: "/imagenes lizo/PNG barberas/cuchilla dorada.png",
      description: "Cuchilla profesional con acabado dorado"
    },
    {
      id: 8,
      name: "Cuchilla Lila-Rosado",
      category: "Herramientas",
      price: "22,000", 
      image: "/imagenes lizo/PNG barberas/cuchilla lila rosado.png",
      description: "Diseño único en tonos lila y rosado"
    },
    {
      id: 9,
      name: "Razuradoras Premium",
      category: "Herramientas",
      price: "85,000",
      image: "/imagenes lizo/PNG barberas/razuradoras-disenos.png",
      description: "Set completo de razuradoras profesionales"
    },
    {
      id: 10,
      name: "Barbera Edición Especial",
      category: "Colección Limitada",
      price: "120,000",
      image: "/imagenes lizo/PNG barberas/barbera esqueleto.png",
      description: "Diseño exclusivo edición limitada"
    }
  ]

  const professionals = [
    {
      id: 1,
      name: "Carlos Martínez",
      specialty: "Barbero Master",
      experience: "15 años",
      image: "/api/placeholder/300/400",
      tools: ["Barbera Lizo Pro", "Tijera Profesional"]
    },
    {
      id: 2,
      name: "María González",
      specialty: "Estilista Senior",
      experience: "12 años",
      image: "/api/placeholder/300/400",
      tools: ["Plancha Cerámica", "Cepillo Nanno"]
    },
    {
      id: 3,
      name: "Diego Ruiz",
      specialty: "Color Expert",
      experience: "10 años",
      image: "/api/placeholder/300/400",
      tools: ["Kit Completo Lizo", "Secador Peso Pluma"]
    }
  ]

  const barberShops = [
    {
      id: 1,
      name: "Barbería Elite Pro",
      location: "Centro, Bogotá",
      rating: 4.9,
      reviews: 150,
      image: "/api/placeholder/400/300",
      services: ["Corte Premium", "Afeitado Clásico", "Diseño de Barba"],
      hours: "Lun-Sab: 9:00 AM - 8:00 PM"
    },
    {
      id: 2,
      name: "Lizo Barber Studio",
      location: "Zona Rosa, Medellín",
      rating: 4.8,
      reviews: 120,
      image: "/api/placeholder/400/300",
      services: ["Corte Profesional", "Tinte Barba", "Spa Capilar"],
      hours: "Mar-Dom: 10:00 AM - 9:00 PM"
    },
    {
      id: 3,
      name: "The Barber House",
      location: "Norte, Cali",
      rating: 4.7,
      reviews: 98,
      image: "/api/placeholder/400/300",
      services: ["Corte Clásico", "Perfilado", "Tratamientos"],
      hours: "Lun-Sab: 8:00 AM - 7:00 PM"
    }
  ]

  return (
    <section className="relative py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
      {/* Logo Watermark */}
      <motion.div
        className="absolute top-8 right-8 opacity-10"
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image
          src="/logo y carrusel/Logolizo.jpg"
          alt="Lizo"
          width={150}
          height={150}
          className="rounded-full"
        />
      </motion.div>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
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
            className="text-5xl lg:text-7xl font-black mb-6 text-gray-800"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              PROFESIONALES
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-600 via-amber-600 to-orange-600 bg-clip-text text-transparent">
              LIZO
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-700 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            💼 Descubre la red de barberos y estilistas que confían en nuestras herramientas profesionales
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab('locations')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'locations'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-amber-600'
              }`}
            >
              🏪 Locales
            </button>
            <button
              onClick={() => setActiveTab('professionals')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'professionals'
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              👨‍💼 Profesionales
            </button>
          </div>
        </motion.div>

        {/* Content Sections */}
        {activeTab === 'locations' && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {barberShops.map((shop, index) => (
              <motion.div
                key={shop.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={shop.image}
                    alt={shop.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Logo Badge */}
                  <div className="absolute top-4 left-4">
                    <Image
                      src="/logo y carrusel/Logolizo.jpg"
                      alt="Lizo"
                      width={40}
                      height={40}
                      className="rounded-lg border-2 border-white/50"
                    />
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-bold text-gray-800">{shop.rating}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{shop.name}</h3>
                    <div className="flex items-center text-white/80 text-sm">
                      <MapPin size={14} className="mr-1" />
                      {shop.location}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock size={14} className="mr-1" />
                      {shop.hours}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users size={14} className="mr-1" />
                      Profesional
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {shop.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    📞 Contactar
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'professionals' && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {professionals.map((pro, index) => (
              <motion.div
                key={pro.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={pro.image}
                    alt={pro.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Logo Badge */}
                  <div className="absolute top-4 right-4">
                    <Image
                      src="/logo y carrusel/Logolizo.jpg"
                      alt="Lizo"
                      width={35}
                      height={35}
                      className="rounded-lg border-2 border-white/50"
                    />
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    <Award size={12} className="inline mr-1" />
                    {pro.experience}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-xl mb-1">{pro.name}</h3>
                    <p className="text-orange-200 font-medium">{pro.specialty}</p>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="font-bold text-gray-800 mb-3">🛠️ Herramientas Favoritas:</h4>
                  <div className="space-y-2 mb-4">
                    {pro.tools.map((tool, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full" />
                        <span className="text-gray-600 text-sm">{tool}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                    👀 Ver Perfil
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group relative px-12 py-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white font-bold text-lg rounded-full overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-600 to-amber-600"
              initial={{ x: "100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">🤝 Únete a la Red Lizo</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}