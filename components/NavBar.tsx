'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Menu, 
  X, 
  Search, 
  ShoppingCart, 
  User, 
  Heart,
  Scissors,
  Sparkles,
  Waves,
  Shield
} from 'lucide-react'

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeCategory, setActiveCategory] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const categories = [
    { name: 'Barbería', icon: Scissors, href: '/barberia' },
    { name: 'Belleza', icon: Sparkles, href: '/belleza' },
    { name: 'Spa', icon: Waves, href: '/spa' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-full bg-gradient-to-br from-primary-400 to-wine-600 p-2 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-wine-600 bg-clip-text text-transparent">
                  L
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <h1 className={`text-2xl font-display font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white hero-text-shadow'
              }`}>
                Lizo Belleza
              </h1>
              <p className={`text-sm ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}>
                Profesional Beauty
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 hover:bg-white/10 ${
                    isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white'
                  }`}
                  onMouseEnter={() => setActiveCategory(category.name)}
                  onMouseLeave={() => setActiveCategory('')}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{category.name}</span>
                  {activeCategory === category.name && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-white/20 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                isScrolled ? 'text-gray-400' : 'text-white/70'
              }`} />
              <input
                type="text"
                placeholder="Buscar productos..."
                className={`pl-10 pr-4 py-2 rounded-full border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  isScrolled 
                    ? 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500' 
                    : 'bg-white/20 border-white/30 text-white placeholder-white/70 backdrop-blur-sm'
                }`}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className={`p-2 rounded-full transition-all duration-200 hover:bg-white/10 ${
              isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white'
            }`}>
              <Heart className="w-6 h-6" />
            </button>
            
            <Link 
              href="/cart"
              className={`relative p-2 rounded-full transition-all duration-200 hover:bg-white/10 ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white'
              }`}
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-wine-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>

            <Link 
              href="/login"
              className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-200 button-hover ${
                isScrolled 
                  ? 'border-primary-200 text-primary-600 hover:bg-primary-50' 
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <User className="w-5 h-5" />
              <span className="hidden sm:inline">Cuenta</span>
            </Link>

            <Link 
              href="/admin"
              className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-200 button-hover ${
                isScrolled 
                  ? 'border-purple-200 text-purple-600 hover:bg-purple-50' 
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
              title="Panel Admin"
            >
              <Shield className="w-5 h-5" />
              <span className="hidden sm:inline">Admin</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-full transition-all duration-200 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-4">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="w-5 h-5 text-primary-600" />
                      <span className="font-medium">{category.name}</span>
                    </Link>
                  )
                })}
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Buscar productos..."
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}