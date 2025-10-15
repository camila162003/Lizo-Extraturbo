'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { supabaseService } from '@/lib/supabase'
import { 
  User, 
  ShoppingBag, 
  Package, 
  Heart,
  MapPin,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  TrendingUp,
  Award,
  Bell,
  Settings,
  LogOut,
  Home,
  CreditCard,
  Truck,
  CheckCircle,
  Clock,
  Gift,
  Star,
  Crown,
  Sparkles,
  Tag,
  History,
  Download,
  RefreshCw,
  Edit3,
  Eye,
  AlertCircle,
  ChevronRight,
  Scissors,
  Zap,
  Shield
} from 'lucide-react'

// 🎨 LIZO CUSTOMER DESIGN SYSTEM
const LIZO_CUSTOMER = {
  gradients: {
    primary: 'bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600',
    secondary: 'bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500',
    success: 'bg-gradient-to-r from-emerald-500 to-green-500',
    premium: 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500',
    elegant: 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900',
    card: 'bg-white/90 backdrop-blur-xl',
    glass: 'bg-white/60 backdrop-blur-2xl'
  },
  shadows: {
    soft: 'shadow-lg shadow-pink-500/10',
    medium: 'shadow-xl shadow-pink-500/20',
    hard: 'shadow-2xl shadow-pink-500/30'
  }
}

// 🎨 LIZO LOGO COMPONENT
const LizoCustomerLogo = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizes = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-2xl',
    lg: 'w-16 h-16 text-3xl'
  }

  return (
    <motion.div 
      className={`${sizes[size]} bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg`}
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <Scissors className="w-6 h-6 text-white" />
    </motion.div>
  )
}

interface CustomerData {
  id: string
  name: string
  email: string
  phone?: string
  address?: string
  premium_tier?: 'basic' | 'pro' | 'elite' | null
  total_orders: number
  total_spent: number
  created_at: string
}

interface OrderData {
  id: string
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  created_at: string
  products?: {
    name: string
    price: number
  }
}

export default function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isLoading, setIsLoading] = useState(true)
  const [customerData, setCustomerData] = useState<CustomerData | null>(null)
  const [orders, setOrders] = useState<OrderData[]>([])
  const [notifications, setNotifications] = useState(3)

  // Simular ID de cliente actual (en producción vendría de auth)
  const currentCustomerId = 'customer-1'

  useEffect(() => {
    loadCustomerData()
  }, [])

  const loadCustomerData = async () => {
    try {
      setIsLoading(true)
      
      // Cargar todos los clientes y tomar el primero como ejemplo
      const customers = await supabaseService.getCustomers()
      if (customers && customers.length > 0) {
        setCustomerData(customers[0])
        
        // Cargar órdenes del cliente
        const allOrders = await supabaseService.getOrders()
        const customerOrders = allOrders?.filter(
          (order: any) => order.customer_id === customers[0].id
        ) || []
        setOrders(customerOrders.slice(0, 5))
      }
    } catch (error) {
      console.error('Error loading customer data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'text-green-600 bg-green-100'
      case 'shipped': return 'text-blue-600 bg-blue-100'
      case 'processing': return 'text-yellow-600 bg-yellow-100'
      case 'pending': return 'text-orange-600 bg-orange-100'
      case 'cancelled': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered': return 'Entregado'
      case 'shipped': return 'Enviado'
      case 'processing': return 'Procesando'
      case 'pending': return 'Pendiente'
      case 'cancelled': return 'Cancelado'
      default: return 'Desconocido'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return CheckCircle
      case 'shipped': return Truck
      case 'processing': return RefreshCw
      case 'pending': return Clock
      case 'cancelled': return AlertCircle
      default: return Package
    }
  }

  const getPremiumBadge = (tier?: string | null) => {
    if (!tier) return null
    
    const badges = {
      basic: { color: 'from-blue-400 to-blue-600', icon: Star, text: 'BASIC' },
      pro: { color: 'from-purple-400 to-purple-600', icon: Crown, text: 'PRO' },
      elite: { color: 'from-yellow-400 to-yellow-600', icon: Sparkles, text: 'ELITE' }
    }
    
    const badge = badges[tier as keyof typeof badges]
    if (!badge) return null

    return (
      <motion.div
        className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${badge.color} rounded-xl text-white shadow-lg`}
        whileHover={{ scale: 1.05 }}
      >
        <badge.icon className="w-5 h-5" />
        <span className="font-bold text-sm">{badge.text}</span>
      </motion.div>
    )
  }

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 rounded-3xl p-8 text-white relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-black mb-2">
              ¡Bienvenido, {customerData?.name?.split(' ')[0] || 'Cliente'}! 👋
            </h2>
            <p className="text-pink-100">
              Nos alegra tenerte de vuelta. Aquí está tu resumen personalizado.
            </p>
          </div>
          {customerData?.premium_tier && getPremiumBadge(customerData.premium_tier)}
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="bg-white rounded-3xl p-6 border border-pink-200 shadow-lg"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-pink-600" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-gray-600 text-sm mb-1">Total de Pedidos</p>
          <p className="text-3xl font-black text-gray-800">{customerData?.total_orders || 0}</p>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl p-6 border border-pink-200 shadow-lg"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-gray-600 text-sm mb-1">Total Gastado</p>
          <p className="text-3xl font-black text-gray-800">
            {formatPrice(customerData?.total_spent || 0)}
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl p-6 border border-pink-200 shadow-lg"
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <Sparkles className="w-5 h-5 text-purple-500" />
          </div>
          <p className="text-gray-600 text-sm mb-1">Puntos de Recompensa</p>
          <p className="text-3xl font-black text-gray-800">
            {Math.floor((customerData?.total_spent || 0) / 1000)}
          </p>
        </motion.div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-3xl p-8 border border-pink-200 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Pedidos Recientes</h3>
          <button 
            onClick={() => setActiveTab('orders')}
            className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-semibold"
          >
            <span>Ver todos</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No tienes pedidos aún</p>
            <Link 
              href="/productos"
              className="inline-block mt-4 px-6 py-3 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-colors"
            >
              Explorar Productos
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => {
              const StatusIcon = getStatusIcon(order.status)
              return (
                <motion.div
                  key={order.id}
                  className="flex items-center justify-between p-4 bg-pink-50 rounded-2xl hover:bg-pink-100 transition-colors"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <StatusIcon className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Pedido #{order.id.slice(0, 8)}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {order.products?.name || 'Producto'}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {formatDate(order.created_at)}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-800 mb-2">
                      {formatPrice(order.total)}
                    </p>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {getStatusText(order.status)}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-6 text-white"
          whileHover={{ scale: 1.02 }}
        >
          <Gift className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-bold mb-2">Ofertas Exclusivas</h3>
          <p className="text-pink-100 mb-4">
            Descubre las mejores ofertas para miembros premium
          </p>
          <Link
            href="/premium"
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white text-pink-600 rounded-xl font-semibold hover:bg-pink-50 transition-colors"
          >
            <span>Ver Ofertas</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-6 text-white"
          whileHover={{ scale: 1.02 }}
        >
          <Tag className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-bold mb-2">Programa de Puntos</h3>
          <p className="text-purple-100 mb-4">
            Acumula puntos y obtén descuentos increíbles
          </p>
          <button className="inline-flex items-center space-x-2 px-4 py-2 bg-white text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-colors">
            <span>Mis Puntos</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  )

  const renderOrders = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">Mis Pedidos</h2>
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-pink-200 rounded-xl text-sm focus:ring-2 focus:ring-pink-400">
            <option>Todos</option>
            <option>Entregados</option>
            <option>En camino</option>
            <option>Pendientes</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {orders.map((order) => {
          const StatusIcon = getStatusIcon(order.status)
          return (
            <motion.div
              key={order.id}
              className="bg-white rounded-3xl p-6 border border-pink-200 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center">
                    <StatusIcon className="w-8 h-8 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Pedido #{order.id.slice(0, 8)}
                    </h3>
                    <p className="text-gray-600">{order.products?.name || 'Producto'}</p>
                    <p className="text-gray-500 text-sm">{formatDate(order.created_at)}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-800 mb-2">
                    {formatPrice(order.total)}
                  </p>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-pink-100">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Fecha: {formatDate(order.created_at)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Package className="w-4 h-4" />
                    <span>1 producto</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 bg-pink-100 text-pink-600 rounded-xl hover:bg-pink-200 transition-colors text-sm font-medium">
                    Ver Detalles
                  </button>
                  {order.status === 'delivered' && (
                    <button className="px-4 py-2 bg-purple-100 text-purple-600 rounded-xl hover:bg-purple-200 transition-colors text-sm font-medium">
                      Reordenar
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )

  const renderProfile = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Mi Perfil</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <motion.div
            className="bg-white rounded-3xl p-8 border border-pink-200 shadow-lg text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                {customerData?.name?.charAt(0) || 'C'}
              </div>
              {customerData?.premium_tier && (
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <Crown className="w-6 h-6 text-white" />
                </div>
              )}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              {customerData?.name || 'Cliente'}
            </h3>
            <p className="text-gray-600 mb-4">{customerData?.email || 'email@ejemplo.com'}</p>
            
            {customerData?.premium_tier && (
              <div className="mb-4">
                {getPremiumBadge(customerData.premium_tier)}
              </div>
            )}

            <button className="w-full px-4 py-3 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-colors font-semibold">
              Editar Perfil
            </button>
          </motion.div>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <motion.div
            className="bg-white rounded-3xl p-8 border border-pink-200 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
              <User className="w-6 h-6 text-pink-500" />
              <span>Información Personal</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-600 text-sm mb-2">Nombre Completo</label>
                <input
                  type="text"
                  value={customerData?.name || ''}
                  className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  readOnly
                />
              </div>
              
              <div>
                <label className="block text-gray-600 text-sm mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  value={customerData?.email || ''}
                  className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  readOnly
                />
              </div>
              
              <div>
                <label className="block text-gray-600 text-sm mb-2">Teléfono</label>
                <input
                  type="tel"
                  value={customerData?.phone || ''}
                  className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  readOnly
                />
              </div>
              
              <div>
                <label className="block text-gray-600 text-sm mb-2">Miembro Desde</label>
                <input
                  type="text"
                  value={formatDate(customerData?.created_at || new Date().toISOString())}
                  className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  readOnly
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-gray-600 text-sm mb-2">Dirección</label>
                <input
                  type="text"
                  value={customerData?.address || 'No especificada'}
                  className="w-full px-4 py-3 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  readOnly
                />
              </div>
            </div>
          </motion.div>

          {/* Account Statistics */}
          <motion.div
            className="bg-white rounded-3xl p-8 border border-pink-200 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
              <Award className="w-6 h-6 text-pink-500" />
              <span>Estadísticas de Cuenta</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-pink-50 rounded-xl">
                <p className="text-3xl font-bold text-pink-600">
                  {customerData?.total_orders || 0}
                </p>
                <p className="text-gray-600 text-sm mt-1">Pedidos</p>
              </div>
              
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <p className="text-3xl font-bold text-green-600">
                  {formatPrice(customerData?.total_spent || 0)}
                </p>
                <p className="text-gray-600 text-sm mt-1">Total Gastado</p>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <p className="text-3xl font-bold text-purple-600">
                  {Math.floor((customerData?.total_spent || 0) / 1000)}
                </p>
                <p className="text-gray-600 text-sm mt-1">Puntos</p>
              </div>
              
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <p className="text-3xl font-bold text-blue-600">
                  {customerData?.premium_tier ? 'PRO' : 'BASIC'}
                </p>
                <p className="text-gray-600 text-sm mt-1">Nivel</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Configuración</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notifications */}
        <motion.div
          className="bg-white rounded-3xl p-8 border border-pink-200 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
            <Bell className="w-6 h-6 text-pink-500" />
            <span>Notificaciones</span>
          </h3>
          
          <div className="space-y-4">
            {[
              { label: 'Email de promociones', enabled: true },
              { label: 'Notificaciones de pedidos', enabled: true },
              { label: 'Ofertas exclusivas', enabled: false },
              { label: 'Newsletter mensual', enabled: true }
            ].map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-pink-50 rounded-xl">
                <span className="text-gray-800 font-medium">{setting.label}</span>
                <button 
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    setting.enabled ? 'bg-pink-500' : 'bg-gray-300'
                  }`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    setting.enabled ? 'right-1' : 'left-1'
                  }`} />
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security */}
        <motion.div
          className="bg-white rounded-3xl p-8 border border-pink-200 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
            <Shield className="w-6 h-6 text-pink-500" />
            <span>Seguridad</span>
          </h3>
          
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pink-200 rounded-xl flex items-center justify-center">
                  <Edit3 className="w-5 h-5 text-pink-600" />
                </div>
                <span className="text-gray-800 font-medium">Cambiar Contraseña</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-200 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-gray-800 font-medium">Autenticación de Dos Factores</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>

            <button className="w-full flex items-center justify-between p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-200 rounded-xl flex items-center justify-center">
                  <Download className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-800 font-medium">Descargar mis Datos</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Scissors className="w-8 h-8 text-white" />
          </div>
          <p className="text-gray-600 font-medium">Cargando tu panel...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <motion.header
        className="bg-white/80 backdrop-blur-xl border-b border-pink-200 sticky top-0 z-50 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <LizoCustomerLogo size="md" />
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  LIZO
                </h1>
                <p className="text-xs text-gray-600">Mi Panel</p>
              </div>
            </Link>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <motion.button
                className="relative p-3 bg-pink-100 rounded-2xl hover:bg-pink-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bell className="w-6 h-6 text-pink-600" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs font-bold flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </motion.button>

              <div className="flex items-center space-x-3 px-4 py-2 bg-pink-50 rounded-2xl">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center text-white font-bold">
                  {customerData?.name?.charAt(0) || 'C'}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">
                    {customerData?.name?.split(' ')[0] || 'Cliente'}
                  </p>
                  <p className="text-xs text-gray-600">
                    {customerData?.premium_tier ? 'Miembro Premium' : 'Miembro'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.div
            className="lg:w-80"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-pink-200 sticky top-24 shadow-lg">
              <nav className="space-y-2">
                {[
                  { id: 'overview', label: 'Inicio', icon: Home, color: 'pink' },
                  { id: 'orders', label: 'Mis Pedidos', icon: ShoppingBag, color: 'blue' },
                  { id: 'profile', label: 'Mi Perfil', icon: User, color: 'purple' },
                  { id: 'favorites', label: 'Favoritos', icon: Heart, color: 'red' },
                  { id: 'rewards', label: 'Recompensas', icon: Gift, color: 'yellow' },
                  { id: 'settings', label: 'Configuración', icon: Settings, color: 'gray' }
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl font-semibold transition-all ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-pink-50'
                    }`}
                    whileHover={{ scale: activeTab === item.id ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm">{item.label}</span>
                  </motion.button>
                ))}

                <hr className="my-4 border-pink-200" />

                <Link href="/" className="w-full flex items-center space-x-3 px-4 py-3 rounded-2xl font-semibold text-gray-700 hover:bg-pink-50 transition-all">
                  <Home className="w-5 h-5" />
                  <span className="text-sm">Ir a la Tienda</span>
                </Link>

                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-2xl font-semibold text-red-600 hover:bg-red-50 transition-all">
                  <LogOut className="w-5 h-5" />
                  <span className="text-sm">Cerrar Sesión</span>
                </button>
              </nav>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <div className="flex-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'overview' && renderOverview()}
              {activeTab === 'orders' && renderOrders()}
              {activeTab === 'profile' && renderProfile()}
              {activeTab === 'settings' && renderSettings()}
              {activeTab === 'favorites' && (
                <div className="text-center py-12">
                  <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Sección en desarrollo</p>
                </div>
              )}
              {activeTab === 'rewards' && (
                <div className="text-center py-12">
                  <Gift className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">Sección en desarrollo</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
