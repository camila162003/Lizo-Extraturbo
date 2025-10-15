'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Product3DViewer() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Tecnología Innovadora
            <span className="text-yellow-400 block">LIZO</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre la última tecnología en equipos de belleza profesional
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 
                          backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8 
                          hover:border-yellow-400/60 transition-all duration-300 
                          hover:shadow-2xl hover:shadow-yellow-400/20">
            
            <motion.video
              className="w-full h-auto rounded-lg shadow-2xl"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                filter: 'brightness(1.1) contrast(1.1)',
              }}
            >
              <source src="/imagenes lizo/plancha animated2.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </motion.video>
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-yellow-400/30 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-yellow-400/30 rounded-full"></div>
        <div className="absolute top-1/2 left-0 w-12 h-12 border-2 border-yellow-400/30 rounded-full"></div>
      </div>
    </section>
  );
}