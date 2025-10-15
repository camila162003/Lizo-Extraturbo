'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import LogoModelos from './LogoModelos'
import CartSidebar from './CartSidebar'
import Button from './Button'
import { 
  Menu, 
  X, 
  Search, 
  ShoppingCart, 
  User, 
  Heart,
  Crown,
  Sparkles,
  Phone,
  Instagram,
  MessageCircle
} from 'lucide-react'

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(3)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Productos', href: '/productos' },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Barbería', href: '/barberia' },
    { name: 'Contacto', href: '/contacto' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-r from-white/95 via-pink-50/95 to-white/95 backdrop-blur-xl shadow-2xl border-b border-pink-200/50' 
          : 'bg-gradient-to-r from-white/80 via-pink-50/80 to-white/80 backdrop-blur-lg'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Premium con Gradiente Rosa */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-pink-500 via-pink-400 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl border border-white/20">
                  <span className="text-2xl font-black text-white">L</span>
                </div>
              </div>
              <div>
                <motion.h1
                  className="text-3xl font-black bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 bg-clip-text text-transparent"
                  style={{ backgroundSize: "200% auto" }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  LIZO
                </motion.h1>
                <p className="text-xs text-pink-500 font-semibold tracking-wider">✨ BELLEZA PREMIUM</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={item.href}
                  className="relative group px-4 py-2 text-gray-700 hover:text-pink-600 transition-all duration-300 font-semibold"
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-white origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* WhatsApp Contact */}
            <Button
              variant="whatsapp"
              size="sm"
              icon={<MessageCircle size={16} />}
              href="https://wa.me/573142308028?text=¡Hola! Estoy interesado en conocer más sobre los productos LIZO BELLEZA"
              external
              className="hidden md:flex"
            >
              WhatsApp
            </Button>

            {/* Instagram */}
            <Button
              variant="glass"
              size="sm"
              icon={<Instagram size={16} />}
              href="https://instagram.com/lizoextraturbopro"
              external
              className="hidden sm:flex"
            >
              Instagram
            </Button>

            {/* Search */}
            <motion.button
              className="p-2.5 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-600/10 hover:from-pink-500/20 hover:to-pink-600/20 border border-pink-300/30 text-pink-600 transition-all shadow-lg hover:shadow-pink-200/50"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Search size={20} />
            </motion.button>

            {/* Cart */}
            <motion.button
              className="relative p-2.5 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-600/10 hover:from-pink-500/20 hover:to-pink-600/20 border border-pink-300/30 text-pink-600 transition-all shadow-lg hover:shadow-pink-200/50"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <motion.span
                  className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                >
                  {cartCount}
                </motion.span>
              )}
            </motion.button>

            {/* User Account */}
            <Link href="/login">
              <motion.button
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-500 text-white transition-all font-bold shadow-lg hover:shadow-pink-300/50"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <User size={18} />
                <span className="hidden sm:inline">Cuenta</span>
              </motion.button>
            </Link>

            {/* Admin Access */}
            <Link href="/admin">
              <motion.button
                className="p-2 rounded-xl bg-pink-600/50 hover:bg-pink-600 border border-pink-400/50 text-pink-300 hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                title="Panel Admin"
              >
                <Crown size={18} />
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-white hover:text-pink-300 hover:bg-white/10 rounded-xl transition-all font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Search */}
                <motion.div
                  className="pt-4 border-t border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-300" size={20} />
                    <input
                      type="text"
                      placeholder="Buscar productos..."
                      className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sparkle Effects - Reduced for performance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="text-pink-400" size={16} />
          </motion.div>
        ))}
      </div>

      {/* Cart Sidebar */}
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </motion.nav>
  )
}