'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Chrome,
  Smartphone,
  Sparkles,
  ArrowLeft,
  Crown,
  Users
} from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState<'cliente' | 'admin'>('cliente')
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simular autenticación con mejor manejo de errores
    console.log('Form submitted:', formData, 'User type:', userType)
    
    try {
      // Validaciones básicas
      if (!formData.email || !formData.password) {
        alert('Por favor completa todos los campos requeridos')
        setIsLoading(false)
        return
      }

      if (!isLogin && formData.password !== formData.confirmPassword) {
        alert('Las contraseñas no coinciden')
        setIsLoading(false)
        return
      }

      // Simular delay de autenticación
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simular autenticación exitosa
      if (userType === 'admin') {
        router.push('/admin/dashboard')
      } else {
        router.push('/dashboard')
      }
    } catch (error) {
      console.error('Error de autenticación:', error)
      alert('Error al procesar la solicitud')
    } finally {
      setIsLoading(false)
    }
    if (isLogin) {
      // Redirigir según el tipo de usuario
      if (userType === 'admin') {
        router.push('/admin')
      } else {
        router.push('/dashboard')
      }
    } else {
      // Registro exitoso, redirigir al dashboard del cliente
      router.push('/dashboard')
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-pink-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Spectacular Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Large floating orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl" 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-300/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-3/4 left-3/4 w-48 h-48 bg-white/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
        {/* Back Button */}
        <Link 
          href="/"
          className="absolute -top-16 left-0 flex items-center text-gray-600 hover:text-pink-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver al inicio
        </Link>

        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-pink-200/50 relative overflow-hidden">
          {/* Animated border effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-200/20 via-white/20 to-pink-300/20 rounded-3xl"
            animate={{ 
              rotate: 360,
              background: [
                "linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(255, 255, 255, 0.2), rgba(244, 63, 94, 0.1))",
                "linear-gradient(135deg, rgba(244, 63, 94, 0.1), rgba(236, 72, 153, 0.1), rgba(255, 255, 255, 0.2))",
                "linear-gradient(225deg, rgba(255, 255, 255, 0.2), rgba(244, 63, 94, 0.1), rgba(236, 72, 153, 0.1))",
                "linear-gradient(315deg, rgba(236, 72, 153, 0.1), rgba(255, 255, 255, 0.2), rgba(244, 63, 94, 0.1))"
              ]
            }}
            transition={{ 
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              background: { duration: 4, repeat: Infinity }
            }}
          />
          
          <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
              className="w-20 h-20 bg-gradient-to-r from-pink-500 via-pink-400 to-white rounded-full flex items-center justify-center mx-auto mb-6 relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 via-pink-400 to-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <span className="text-3xl font-bold text-white relative z-10">L</span>
            </motion.div>
            <h1 className="text-4xl font-black text-gray-800 mb-3 bg-gradient-to-r from-pink-600 via-pink-400 to-gray-800 bg-clip-text text-transparent">
              {isLogin ? 'BIENVENIDO' : 'ÚNETE A LIZO'}
            </h1>
            <p className="text-gray-600 text-lg">
              {isLogin 
                ? '✨ Accede a tu mundo de belleza profesional' 
                : '💎 Únete a la revolución de la belleza'
              }
            </p>
          </div>

          {/* User Type Selector - Solo para Login */}
          {isLogin && (
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-gray-600 text-sm mb-3 text-center">Tipo de acceso:</p>
              <div className="flex bg-pink-50 rounded-2xl p-1 border border-pink-200">
                <motion.button
                  onClick={() => setUserType('cliente')}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center space-x-2 ${
                    userType === 'cliente' 
                      ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-pink-600'
                  }`}
                  whileHover={{ scale: userType === 'cliente' ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Users size={16} />
                  <span>Cliente</span>
                </motion.button>
                <motion.button
                  onClick={() => setUserType('admin')}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center space-x-2 ${
                    userType === 'admin' 
                      ? 'bg-gradient-to-r from-pink-600 to-pink-700 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-pink-600'
                  }`}
                  whileHover={{ scale: userType === 'admin' ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Crown size={16} />
                  <span>Administrador</span>
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Toggle Buttons */}
          <div className="flex bg-pink-50 rounded-2xl p-1 mb-8 border border-pink-200">
            <motion.button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all ${
                isLogin 
                  ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-xl' 
                  : 'text-gray-600 hover:text-pink-600'
              }`}
              whileHover={{ scale: isLogin ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ✨ Iniciar Sesión
            </motion.button>
            <motion.button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all ${
                !isLogin 
                  ? 'bg-gradient-to-r from-pink-600 to-pink-700 text-white shadow-xl' 
                  : 'text-gray-600 hover:text-pink-600'
              }`}
              whileHover={{ scale: !isLogin ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              💎 Registrarse
            </motion.button>
          </div>

          {/* Form */}
          <AnimatePresence mode="wait">
            <motion.form
              key={isLogin ? 'login' : 'register'}
              initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {!isLogin && (
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400/60" />
                  <input
                    type="text"
                    name="name"
                    placeholder="✨ Nombre completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/60 border border-pink-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/80"
                    required={!isLogin}
                  />
                </motion.div>
              )}

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-4 bg-white/60 border border-pink-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent backdrop-blur-sm"
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-12 py-4 bg-white/60 border border-pink-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent backdrop-blur-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-pink-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {!isLogin && (
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    placeholder="Confirmar contraseña"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/60 border border-pink-200 rounded-xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent backdrop-blur-sm"
                    required={!isLogin}
                  />
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center text-gray-600">
                    <input type="checkbox" className="mr-2 rounded text-pink-500 focus:ring-pink-400" />
                    Recordarme
                  </label>
                  <Link href="/forgot-password" className="text-pink-600 hover:text-pink-700">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group disabled:opacity-50"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(236, 72, 153, 0.3)",
                    "0 0 40px rgba(236, 72, 153, 0.5)",
                    "0 0 20px rgba(236, 72, 153, 0.3)"
                  ]
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Cargando...</span>
                    </div>
                  ) : (
                    isLogin ? '🚀 INICIAR SESIÓN' : '✨ CREAR CUENTA'
                  )}
                </span>
              </motion.button>
            </motion.form>
          </AnimatePresence>

          {/* Social Login */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-pink-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">O continúa con</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center px-4 py-3 border border-pink-200 rounded-xl text-gray-600 hover:bg-pink-50 transition-all backdrop-blur-sm"
              >
                <Chrome className="w-5 h-5 mr-2" />
                Google
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center px-4 py-3 border border-pink-200 rounded-xl text-gray-600 hover:bg-pink-50 transition-all backdrop-blur-sm"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Facebook
              </motion.button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Al {isLogin ? 'iniciar sesión' : 'registrarte'}, aceptas nuestros{' '}
              <Link href="/terms" className="text-pink-600 hover:text-pink-700">
                términos de servicio
              </Link>{' '}
              y{' '}
              <Link href="/privacy" className="text-pink-600 hover:text-pink-700">
                política de privacidad
              </Link>
            </p>
          </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}