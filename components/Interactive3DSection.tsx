'use client'

import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function PlanchaModel() {
  const modelRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)
  const { scene } = useGLTF('/imagenes lizo/plancha1.glb')

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      
      if (hovered) {
        modelRef.current.scale.setScalar(THREE.MathUtils.lerp(modelRef.current.scale.x, 1.1, 0.1))
      } else {
        modelRef.current.scale.setScalar(THREE.MathUtils.lerp(modelRef.current.scale.x, 1, 0.1))
      }
    }
  })

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={2}
      position={[0, -1, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  )
}

export const Interactive3DSection = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-rose-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl lg:text-7xl font-black mb-8"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <span className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
                EXPERIENCIA
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
                INTERACTIVA
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-purple-100 mb-8 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              🎯 Explora nuestros productos en una experiencia 3D inmersiva. 
              Gira, acerca y descubre cada detalle de nuestras herramientas profesionales.
            </motion.p>

            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                "🔄 Rotación 360° completa",
                "🔍 Zoom para ver detalles",
                "✨ Efectos visuales realistas",
                "💫 Interacción intuitiva"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-pink-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">🛒 Comprar Ahora</span>
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-purple-300/30 text-purple-100 font-bold rounded-full backdrop-blur-md hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📋 Especificaciones
              </motion.button>
            </motion.div>
          </motion.div>

          {/* 3D Model Section */}
          <motion.div
            className="relative h-[600px] rounded-3xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* 3D Canvas Container */}
            <div className="relative w-full h-full bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md border border-purple-300/20 rounded-3xl overflow-hidden">
              <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                style={{ background: 'transparent' }}
                onCreated={() => setIsLoaded(true)}
              >
                <Suspense fallback={null}>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                  <directionalLight position={[-10, -10, -5]} intensity={0.5} />
                  
                  <PlanchaModel />
                  
                  <Environment preset="studio" />
                  <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2} far={3} />
                  
                  <OrbitControls
                    enablePan={false}
                    enableZoom={true}
                    enableRotate={true}
                    minDistance={3}
                    maxDistance={8}
                    autoRotate={false}
                  />
                </Suspense>
              </Canvas>

              {/* Loading Overlay */}
              {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-purple-900/80 backdrop-blur-md">
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="w-16 h-16 border-4 border-pink-400/30 border-t-pink-400 rounded-full mx-auto mb-4"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <p className="text-pink-200 font-medium">Cargando modelo 3D...</p>
                  </motion.div>
                </div>
              )}

              {/* Control Instructions */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                transition={{ delay: 1 }}
              >
                <div className="flex justify-between items-center text-sm text-pink-200">
                  <div className="flex items-center space-x-4">
                    <span>🖱️ Arrastra para rotar</span>
                    <span>🔍 Scroll para zoom</span>
                  </div>
                  <div className="text-xs opacity-75">Modelo 3D Interactivo</div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full backdrop-blur-md border border-white/10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r from-rose-400/20 to-pink-400/20 rounded-full backdrop-blur-md border border-white/10"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}