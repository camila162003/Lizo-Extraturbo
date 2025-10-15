'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Maximize, Sparkles, Star } from 'lucide-react'

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen()
        setIsFullscreen(true)
      } else {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  return (
    <section className="py-32 bg-gradient-to-br from-black via-purple-900/20 to-pink-900/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-400/30 backdrop-blur-md mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="text-purple-300" size={20} />
            <span className="text-purple-300 font-semibold tracking-wide">DEMOSTRACIÓN PREMIUM</span>
            <Star className="text-pink-400" size={20} />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              TECNOLOGÍA
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-white bg-clip-text text-transparent">
              EN ACCIÓN
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Descubre la diferencia de la calidad profesional LIZO BELLEZA
            <br className="hidden md:block" />
            <span className="text-purple-400 font-semibold">Resultados que hablan por sí solos</span>
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative group">
            {/* Premium Video Frame */}
            <div className="relative bg-gradient-to-br from-purple-900/30 via-black/50 to-pink-900/30 p-8 rounded-3xl backdrop-blur-md border border-white/10">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black/50">
                {/* Video Element */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  loop
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  poster="/imagenes lizo/PNG planchas/plancha1.png"
                >
                  <source src="/imagenes lizo/planchavideo.mp4" type="video/mp4" />
                  Tu navegador no soporta video HTML5.
                </video>

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Play Button Overlay */}
                {!isPlaying && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={togglePlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(168, 85, 247, 0.7)",
                          "0 0 0 20px rgba(168, 85, 247, 0)",
                          "0 0 0 0 rgba(168, 85, 247, 0.7)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Play className="text-white ml-1" size={32} fill="currentColor" />
                    </motion.div>
                  </motion.div>
                )}

                {/* Video Controls */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: isPlaying ? 1 : 0.7,
                    y: 0 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.button
                      onClick={togglePlay}
                      className="p-3 bg-black/50 backdrop-blur-md rounded-xl border border-white/20 text-white hover:bg-black/70 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </motion.button>

                    <motion.button
                      onClick={toggleMute}
                      className="p-3 bg-black/50 backdrop-blur-md rounded-xl border border-white/20 text-white hover:bg-black/70 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </motion.button>
                  </div>

                  <motion.button
                    onClick={toggleFullscreen}
                    className="p-3 bg-black/50 backdrop-blur-md rounded-xl border border-white/20 text-white hover:bg-black/70 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Maximize size={20} />
                  </motion.button>
                </motion.div>

                {/* Premium Badge */}
                <div className="absolute top-4 left-4">
                  <motion.div
                    className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold text-sm rounded-full shadow-lg"
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring", bounce: 0.5 }}
                  >
                    CALIDAD PREMIUM
                  </motion.div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full opacity-20 blur-xl" />
            </div>

            {/* Floating Elements */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Product Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            {
              icon: "🔥",
              title: "Calentamiento Rápido",
              description: "Listo para usar en menos de 30 segundos"
            },
            {
              icon: "⚡",
              title: "Tecnología Avanzada",
              description: "Placas de titanio con distribución uniforme"
            },
            {
              icon: "💎",
              title: "Resultados Profesionales",
              description: "Acabado de salón en la comodidad de tu hogar"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-black/20 backdrop-blur-md rounded-2xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="group px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 mx-auto"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explorar Toda la Colección</span>
            <Sparkles className="group-hover:rotate-12 transition-transform" size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}