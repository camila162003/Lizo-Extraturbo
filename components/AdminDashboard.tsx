'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { supabaseService, initializeDatabase } from '@/lib/supabase'
import { 
  BarChart3, 
  Users, 
  Package, 
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Calendar,
  Bell,
  Settings,
  LogOut,
  Home,
  Plus,
  Search,
  Filter,
  Download,
  Edit3,
  Trash2,
  Eye,
  Star,
  AlertCircle,
  CheckCircle,
  Clock,
  RefreshCw,
  Shield,
  Crown,
  Globe,
  Activity,
  Database,
  Mail,
  MessageSquare,
  FileText,
  Zap,
  Target,
  TrendingDown,
  Lock,
  Unlock,
  Key,
  UserCheck,
  AlertTriangle,
  Wifi,
  Monitor,
  Smartphone,
  MapPin,
  BarChart,
  Sparkles,
  Award,
  Gem,
  Briefcase,
  Headphones,
  Phone,
  AtSign,
  ExternalLink,
  CheckCircle2,
  XCircle,
  Info,
  Palette,
  Heart,
  Scissors,
  Brush,
  Scan,
  PieChart,
  LineChart,
  MousePointer,
  Users2,
  CreditCard,
  Gift
} from 'lucide-react'

// 🎨 LIZO PREMIUM DESIGN SYSTEM - ULTRA LUXURY EDITION
const LIZO_PREMIUM = {
  gradients: {
    heroGlow: 'bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-rose-500/20',
    cardGlass: 'bg-white/90 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-pink-500/10',
    cardPremium: 'bg-gradient-to-br from-white via-pink-50/30 to-purple-50/20 backdrop-blur-xl',
    buttonPrimary: 'bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:from-pink-600 hover:via-rose-600 hover:to-pink-700',
    buttonGlow: 'shadow-lg shadow-pink-500/50 hover:shadow-2xl hover:shadow-pink-600/60',
    textGradient: 'bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent',
    statusSuccess: 'bg-gradient-to-r from-emerald-500 to-green-500',
    statusWarning: 'bg-gradient-to-r from-amber-500 to-orange-500',
    statusDanger: 'bg-gradient-to-r from-rose-500 to-red-500',
    statusInfo: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    shimmer: 'bg-gradient-to-r from-transparent via-white/60 to-transparent',
    aurora: 'bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-rose-400/20'
  },
  effects: {
    glow: 'drop-shadow-2xl drop-shadow-pink-500/50',
    floatingShadow: 'shadow-[0_20px_60px_-15px_rgba(236,72,153,0.3)]',
    hoverLift: 'hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300',
    shimmerAnimation: 'animate-shimmer',
    pulseGlow: 'animate-pulse-glow',
    floatUp: 'animate-float-up'
  },
  animations: {
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.4 }
    },
    slideRight: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5 }
    },
    springBounce: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
}

// 🎨 LIZO EXTRATURBO BRAND COLORS & DESIGN SYSTEM
const LIZO_THEME = {
  colors: {
    primary: {
      50: '#fef7ee',
      100: '#fdeacc',
      500: '#f97316', // LIZO Orange
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12'
    },
    luxury: {
      50: '#fefbff',
      100: '#fef3f2',
      500: '#ef4444', // Luxury Red
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d'
    },
    beauty: {
      50: '#fdf4ff',
      100: '#fae8ff',
      500: '#d946ef', // Beauty Purple
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75'
    },
    professional: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      500: '#0ea5e9', // Professional Blue
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e'
    },
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d'
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f'
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d'
    },
    dark: {
      50: '#f8fafc',
      100: '#f1f5f9',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617'
    }
  },
  gradients: {
    primary: 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500',
    luxury: 'bg-gradient-to-r from-purple-600 via-pink-600 to-red-600',
    professional: 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600',
    success: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    elegant: 'bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900'
  },
  shadows: {
    elegant: 'shadow-2xl shadow-purple-500/25',
    luxury: 'shadow-xl shadow-pink-500/30',
    premium: 'shadow-lg shadow-orange-500/20'
  }
}

// 🎯 ENHANCED LOGO COMPONENT WITH ANIMATIONS
const LizoLogo = ({ size = 'md', variant = 'default' }: { size?: 'sm' | 'md' | 'lg' | 'xl', variant?: 'default' | 'luxury' | 'professional' | 'elegant' }) => {
  const sizes = {
    sm: { container: 'w-8 h-8', text: 'text-lg', icon: 'w-5 h-5' },
    md: { container: 'w-12 h-12', text: 'text-2xl', icon: 'w-7 h-7' },
    lg: { container: 'w-16 h-16', text: 'text-3xl', icon: 'w-10 h-10' },
    xl: { container: 'w-24 h-24', text: 'text-5xl', icon: 'w-16 h-16' }
  }
  
  const variants = {
    default: LIZO_THEME.gradients.primary,
    luxury: LIZO_THEME.gradients.luxury,
    professional: LIZO_THEME.gradients.professional,
    elegant: LIZO_THEME.gradients.elegant
  }

  return (
    <motion.div 
      className={`${sizes[size].container} ${variants[variant]} rounded-2xl flex items-center justify-center relative overflow-hidden ${LIZO_THEME.shadows.elegant}`}
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Animated background sparkles */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className={`${sizes[size].icon} text-white absolute top-1 left-1`} />
        <Sparkles className={`${sizes[size].icon} text-white absolute bottom-1 right-1 scale-75`} />
      </motion.div>
      
      {/* Main logo content */}
      <motion.div 
        className="relative z-10 flex items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Scissors className={`${sizes[size].icon} text-white mr-1`} />
        <span className={`${sizes[size].text} font-black text-white tracking-tight`}>
          L
        </span>
      </motion.div>
      
      {/* Luxury shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  )
}

interface DashboardStats {
  totalRevenue: number
  totalOrders: number
  totalCustomers: number
  totalProducts: number
  monthlyGrowth: number
  orderGrowth: number
  customerGrowth: number
  productGrowth: number
}

interface RecentOrder {
  id: string
  customer: string
  product: string
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered'
  date: string
}

interface TopProduct {
  id: string
  name: string
  sales: number
  revenue: number
  category: string
  image: string
}

const mockStats: DashboardStats = {
  totalRevenue: 15750000,
  totalOrders: 342,
  totalCustomers: 1205,
  totalProducts: 89,
  monthlyGrowth: 12.5,
  orderGrowth: 8.3,
  customerGrowth: 15.2,
  productGrowth: 3.1
}

const mockRecentOrders: RecentOrder[] = [
  {
    id: 'ORD-1001',
    customer: 'Ana María González',
    product: 'Secadora Premium Ionic 2000W',
    total: 280000,
    status: 'delivered',
    date: '2024-10-09'
  },
  {
    id: 'ORD-1002',
    customer: 'Carlos Rodríguez',
    product: 'Kit Barbero Elite Pro',
    total: 450000,
    status: 'shipped',
    date: '2024-10-09'
  },
  {
    id: 'ORD-1003',
    customer: 'María Elena Vásquez',
    product: 'Plancha Cerámica Professional',
    total: 195000,
    status: 'processing',
    date: '2024-10-08'
  },
  {
    id: 'ORD-1004',
    customer: 'José Miguel Torres',
    product: 'Cepillo Térmico Profesional',
    total: 85000,
    status: 'pending',
    date: '2024-10-08'
  }
]

const mockTopProducts: TopProduct[] = [
  {
    id: '1',
    name: 'Secadora Premium Ionic 2000W',
    sales: 45,
    revenue: 12600000,
    category: 'Secadores',
    image: '/imagenes lizo/PNG secadores/secador rj.png'
  },
  {
    id: '2',
    name: 'Kit Barbero Elite Pro',
    sales: 28,
    revenue: 12600000,
    category: 'Barbería',
    image: '/imagenes lizo/PNG cortadoras/cortadora 1.png'
  },
  {
    id: '3',
    name: 'Plancha Cerámica Professional',
    sales: 38,
    revenue: 7410000,
    category: 'Planchas',
    image: '/imagenes lizo/PNG planchas/plancha 1.png'
  },
  {
    id: '4',
    name: 'Tijeras Acero Inoxidable Premium',
    sales: 22,
    revenue: 2750000,
    category: 'Tijeras',
    image: '/imagenes lizo/PNG tijeras/tijera 1.png'
  }
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isLoading, setIsLoading] = useState(true)
  const [securityAlerts, setSecurityAlerts] = useState(0)
  const [premiumUsers, setPremiumUsers] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  
  // Real data states
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    totalCustomers: 0,
    totalProducts: 0,
    monthlyGrowth: 0,
    orderGrowth: 0,
    customerGrowth: 0,
    productGrowth: 0
  })
  const [dashboardData, setDashboardData] = useState<{
    customers: any[]
    products: any[]
    orders: any[]
    analytics: any[]
    securityAlerts: any[]
    marketingCampaigns: any[]
  }>({
    customers: [],
    products: [],
    orders: [],
    analytics: [],
    securityAlerts: [],
    marketingCampaigns: []
  })

  // Initialize and load data
  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true)
        
        // Initialize database if needed
        await initializeDatabase()
        
        // Load all data
        const [statsData, customers, products, orders, analytics, securityAlertsData, marketingCampaigns] = await Promise.all([
          supabaseService.getDashboardStats(),
          supabaseService.getCustomers(),
          supabaseService.getProducts(),
          supabaseService.getOrders(),
          supabaseService.getAnalytics(),
          supabaseService.getSecurityAlerts(),
          supabaseService.getMarketingCampaigns()
        ])

        setStats(statsData)
        setDashboardData({
          customers: customers || [],
          products: products || [],
          orders: orders || [],
          analytics: analytics || [],
          securityAlerts: securityAlertsData || [],
          marketingCampaigns: marketingCampaigns || []
        })
        
        setSecurityAlerts(securityAlertsData?.length || 0)
        setPremiumUsers(customers?.filter(c => c.premium_tier)?.length || 0)
        
        console.log('✅ Dashboard data loaded successfully')
      } catch (error) {
        console.error('❌ Error loading dashboard data:', error)
        // Use fallback mock data
        setStats(mockStats)
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'text-green-600 bg-green-100'
      case 'shipped': return 'text-blue-600 bg-blue-100'
      case 'processing': return 'text-yellow-600 bg-yellow-100'
      case 'pending': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered': return 'Entregado'
      case 'shipped': return 'Enviado'
      case 'processing': return 'Procesando'
      case 'pending': return 'Pendiente'
      default: return 'Desconocido'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return CheckCircle
      case 'shipped': return Package
      case 'processing': return RefreshCw
      case 'pending': return Clock
      default: return AlertCircle
    }
  }

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl p-6 text-white"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="w-8 h-8 text-pink-200" />
            <span className="text-pink-200 text-sm">+{stats.monthlyGrowth}%</span>
          </div>
          <div>
            <p className="text-pink-100 text-sm">Ingresos Totales</p>
            <p className="text-3xl font-black">{formatPrice(stats.totalRevenue)}</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl p-6 border border-pink-200"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <ShoppingCart className="w-8 h-8 text-pink-500" />
            <span className="text-green-600 text-sm">+{stats.orderGrowth}%</span>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Total Pedidos</p>
            <p className="text-3xl font-black text-gray-800">{stats.totalOrders}</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl p-6 border border-pink-200"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <Users className="w-8 h-8 text-pink-500" />
            <span className="text-green-600 text-sm">+{stats.customerGrowth}%</span>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Total Clientes</p>
            <p className="text-3xl font-black text-gray-800">{stats.totalCustomers}</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-3xl p-6 border border-pink-200"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between mb-4">
            <Package className="w-8 h-8 text-pink-500" />
            <span className="text-green-600 text-sm">+{stats.productGrowth}%</span>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Total Productos</p>
            <p className="text-3xl font-black text-gray-800">{stats.totalProducts}</p>
          </div>
        </motion.div>
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Chart Placeholder */}
        <div className="bg-white rounded-3xl p-8 border border-pink-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Ingresos Mensuales</h3>
            <div className="flex items-center space-x-2">
              <select className="px-3 py-2 border border-pink-200 rounded-xl text-sm">
                <option>Últimos 6 meses</option>
                <option>Último año</option>
              </select>
            </div>
          </div>
          
          {/* Simulated Chart */}
          <div className="h-64 bg-gradient-to-t from-pink-50 to-pink-100 rounded-2xl flex items-end justify-center p-6">
            <div className="flex items-end space-x-4 h-full">
              {[65, 45, 78, 52, 89, 67].map((height, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-t from-pink-500 to-pink-400 rounded-t-lg"
                  style={{ height: `${height}%`, width: '40px' }}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-3xl p-8 border border-pink-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Pedidos Recientes</h3>
            <button 
              onClick={() => setActiveTab('orders')}
              className="text-pink-600 hover:text-pink-700 font-semibold"
            >
              Ver todos
            </button>
          </div>
          
          <div className="space-y-4">
            {isLoading ? (
              // Loading skeleton
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-pink-50 rounded-2xl animate-pulse">
                  <div className="w-10 h-10 bg-pink-200 rounded-xl"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-pink-200 rounded w-3/4"></div>
                    <div className="h-3 bg-pink-200 rounded w-1/2"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-pink-200 rounded w-20"></div>
                    <div className="h-3 bg-pink-200 rounded w-16"></div>
                  </div>
                </div>
              ))
            ) : (
              dashboardData.orders.slice(0, 4).map((order) => {
                const StatusIcon = getStatusIcon(order.status)
                return (
                  <motion.div
                    key={order.id}
                    className="flex items-center space-x-4 p-4 bg-pink-50 rounded-2xl hover:bg-pink-100 transition-colors"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                      <StatusIcon className="w-5 h-5 text-pink-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 truncate">
                        {order.customers?.name || 'Cliente desconocido'}
                      </h4>
                      <p className="text-gray-600 text-sm truncate">
                        {order.products?.name || 'Producto desconocido'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800">{formatPrice(order.total)}</p>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </span>
                    </div>
                  </motion.div>
                )
              })
            )}
          </div>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white rounded-3xl p-8 border border-pink-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Productos Más Vendidos</h3>
          <button 
            onClick={() => setActiveTab('products')}
            className="text-pink-600 hover:text-pink-700 font-semibold"
          >
            Ver todos
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockTopProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-pink-50 rounded-2xl p-6 hover:bg-pink-100 transition-colors"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-pink-200 text-pink-800 rounded-full text-xs font-medium">
                  #{index + 1}
                </span>
                <span className="text-pink-600 text-sm font-semibold">{product.category}</span>
              </div>
              
              <div className="w-full h-24 bg-white rounded-xl mb-4 flex items-center justify-center">
                <Package className="w-8 h-8 text-pink-400" />
              </div>
              
              <h4 className="font-bold text-gray-800 mb-2 text-sm">{product.name}</h4>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Ventas:</span>
                  <span className="font-semibold">{product.sales}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Ingresos:</span>
                  <span className="font-semibold text-pink-600">{formatPrice(product.revenue)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderOrders = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">Gestión de Pedidos</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar pedidos..."
              className="pl-10 pr-4 py-2 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-pink-100 text-pink-600 rounded-xl hover:bg-pink-200 transition-colors">
            <Filter className="w-5 h-5" />
            <span>Filtros</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-colors">
            <Download className="w-5 h-5" />
            <span>Exportar</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-pink-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-pink-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">ID Pedido</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Cliente</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Producto</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Total</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Estado</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Fecha</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pink-100">
              {mockRecentOrders.map((order) => (
                <motion.tr
                  key={order.id}
                  className="hover:bg-pink-50 transition-colors"
                  whileHover={{ scale: 1.01 }}
                >
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.product}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">{formatPrice(order.total)}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {getStatusText(order.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-600 hover:text-pink-600 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderProducts = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">Gestión de Productos</h2>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-colors">
            <Plus className="w-5 h-5" />
            <span>Nuevo Producto</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockTopProducts.map((product, index) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-2xl border border-pink-200 overflow-hidden hover:shadow-lg transition-all"
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="h-48 bg-pink-50 flex items-center justify-center">
              <Package className="w-16 h-16 text-pink-400" />
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="px-2 py-1 bg-pink-100 text-pink-600 rounded-lg text-xs font-medium">
                  {product.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">4.8</span>
                </div>
              </div>
              
              <h3 className="font-bold text-gray-800 mb-2 text-sm">{product.name}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Ventas:</span>
                  <span className="font-semibold">{product.sales}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Ingresos:</span>
                  <span className="font-semibold text-pink-600">{formatPrice(product.revenue)}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="flex-1 px-3 py-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 transition-colors text-sm">
                  <Edit3 className="w-4 h-4 mx-auto" />
                </button>
                <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                  <Eye className="w-4 h-4 mx-auto" />
                </button>
                <button className="flex-1 px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors text-sm">
                  <Trash2 className="w-4 h-4 mx-auto" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  const renderCustomers = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">Gestión de Clientes</h2>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-colors">
            <Plus className="w-5 h-5" />
            <span>Nuevo Cliente</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {dashboardData.customers.length > 0 ? (
          dashboardData.customers.map((customer: any, index: number) => (
          <motion.div
            key={customer.id}
            className="bg-white rounded-2xl border border-pink-200 p-6 hover:shadow-lg transition-all"
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                {customer.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{customer.name}</h3>
                <p className="text-sm text-gray-600">{customer.email}</p>
                <p className="text-xs text-gray-500">{customer.phone}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-pink-50 rounded-xl">
                <p className="text-sm text-gray-600">Compras</p>
                <p className="text-xl font-bold text-pink-600">{customer.orders}</p>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-600">Total Gastado</p>
                <p className="text-xl font-bold text-green-600">{formatPrice(customer.total_spent)}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="flex-1 px-3 py-2 bg-pink-100 text-pink-600 rounded-lg hover:bg-pink-200 transition-colors text-sm">
                Ver Detalles
              </button>
              <button className="flex-1 px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                Contactar
              </button>
            </div>
          </motion.div>
        ))
        ) : (
          <div className="col-span-2 text-center py-12">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No hay clientes registrados</p>
          </div>
        )}
      </div>
    </div>
  )

  const renderAnalytics = () => (
    <div className="space-y-8">
      {/* Google Analytics Style Dashboard */}
      <div className="bg-white rounded-3xl p-8 border border-pink-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center space-x-3">
            <Activity className="w-8 h-8 text-pink-500" />
            <span>Analytics Dashboard</span>
          </h2>
          <div className="flex items-center space-x-3">
            <select className="px-4 py-2 border border-pink-200 rounded-xl text-sm">
              <option>Últimos 30 días</option>
              <option>Últimos 7 días</option>
              <option>Últimos 90 días</option>
              <option>Último año</option>
            </select>
            <button className="px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-colors">
              Exportar Reporte
            </button>
          </div>
        </div>

        {/* Real-time metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white" whileHover={{ scale: 1.02 }}>
            <div className="flex items-center justify-between mb-2">
              <Users className="w-6 h-6" />
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <p className="text-blue-100 text-sm">Usuarios Activos</p>
            <p className="text-3xl font-black">2,847</p>
            <p className="text-blue-200 text-xs">+127 en la última hora</p>
          </motion.div>

          <motion.div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white" whileHover={{ scale: 1.02 }}>
            <div className="flex items-center justify-between mb-2">
              <Globe className="w-6 h-6" />
              <span className="text-green-200 text-sm">+18.5%</span>
            </div>
            <p className="text-green-100 text-sm">Sesiones</p>
            <p className="text-3xl font-black">15,692</p>
            <p className="text-green-200 text-xs">Desde la medianoche</p>
          </motion.div>

          <motion.div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white" whileHover={{ scale: 1.02 }}>
            <div className="flex items-center justify-between mb-2">
              <MousePointer className="w-6 h-6" />
              <span className="text-purple-200 text-sm">3.2%</span>
            </div>
            <p className="text-purple-100 text-sm">Tasa de Conversión</p>
            <p className="text-3xl font-black">3.24%</p>
            <p className="text-purple-200 text-xs">Meta: 3.5%</p>
          </motion.div>

          <motion.div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white" whileHover={{ scale: 1.02 }}>
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-6 h-6" />
              <span className="text-orange-200 text-sm">-12s</span>
            </div>
            <p className="text-orange-100 text-sm">Tiempo Promedio</p>
            <p className="text-3xl font-black">4:32</p>
            <p className="text-orange-200 text-xs">Por sesión</p>
          </motion.div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Traffic Chart */}
          <div className="bg-pink-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-pink-500" />
              <span>Tráfico del Sitio Web</span>
            </h3>
            <div className="h-64 bg-gradient-to-t from-pink-100 to-pink-200 rounded-xl flex items-end justify-center p-4">
              <div className="flex items-end space-x-2 h-full w-full">
                {[85, 92, 78, 95, 88, 91, 96, 89, 93, 87, 94, 90].map((height, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-t from-pink-500 to-pink-400 rounded-t flex-1"
                    style={{ height: `${height}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Device Analytics */}
          <div className="bg-pink-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
              <Monitor className="w-5 h-5 text-pink-500" />
              <span>Dispositivos</span>
            </h3>
            <div className="space-y-4">
              {[
                { device: 'Móvil', percentage: 68, icon: Smartphone, color: 'bg-blue-500' },
                { device: 'Desktop', percentage: 25, icon: Monitor, color: 'bg-green-500' },
                { device: 'Tablet', percentage: 7, icon: Smartphone, color: 'bg-purple-500' }
              ].map((item) => (
                <div key={item.device} className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-gray-800">{item.device}</span>
                      <span className="text-gray-600">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${item.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percentage}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Geographic Data */}
        <div className="bg-pink-50 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-pink-500" />
            <span>Ubicaciones de Usuarios</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { country: 'Colombia', users: 8547, percentage: 42.3 },
              { country: 'México', users: 3621, percentage: 18.1 },
              { country: 'Argentina', users: 2890, percentage: 14.4 },
              { country: 'España', users: 2156, percentage: 10.7 },
              { country: 'Perú', users: 1834, percentage: 9.1 },
              { country: 'Otros', users: 1095, percentage: 5.4 }
            ].map((location, index) => (
              <motion.div
                key={location.country}
                className="bg-white rounded-xl p-4 border border-pink-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-800">{location.country}</span>
                  <span className="text-pink-600 font-bold">{location.percentage}%</span>
                </div>
                <p className="text-gray-600 text-sm">{location.users.toLocaleString()} usuarios</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderSecurity = () => (
    <div className="space-y-8">
      {/* Security Center Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-3xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold flex items-center space-x-3">
              <Shield className="w-8 h-8" />
              <span>Security Center</span>
            </h2>
            <p className="text-red-100 mt-2">Centro de seguridad y monitoreo avanzado</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-red-100">Estado: Protegido</span>
            </div>
            <p className="text-red-200 text-sm">Última verificación: hace 2 minutos</p>
          </div>
        </div>
      </div>

      {/* Security Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl p-8 border border-pink-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
              <span>Alertas de Seguridad</span>
              <span className="px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold">{securityAlerts}</span>
            </h3>
            
            <div className="space-y-4">
              {[
                {
                  type: 'Intento de acceso sospechoso',
                  description: 'Múltiples intentos de login desde IP desconocida',
                  time: 'hace 15 minutos',
                  severity: 'high',
                  ip: '192.168.1.1'
                },
                {
                  type: 'Actualización de seguridad disponible',
                  description: 'Nueva versión de seguridad para el sistema',
                  time: 'hace 2 horas',
                  severity: 'medium',
                  ip: null
                },
                {
                  type: 'Acceso desde dispositivo nuevo',
                  description: 'Usuario admin accedió desde dispositivo no reconocido',
                  time: 'hace 1 día',
                  severity: 'low',
                  ip: '10.0.0.5'
                }
              ].map((alert, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-2xl border-l-4 ${
                    alert.severity === 'high' ? 'bg-red-50 border-red-500' :
                    alert.severity === 'medium' ? 'bg-yellow-50 border-yellow-500' :
                    'bg-blue-50 border-blue-500'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{alert.type}</h4>
                      <p className="text-gray-600 text-sm mt-1">{alert.description}</p>
                      {alert.ip && (
                        <p className="text-gray-500 text-xs mt-1">IP: {alert.ip}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-gray-500 text-xs">{alert.time}</span>
                      <div className="mt-1">
                        <button className="px-3 py-1 bg-pink-500 text-white rounded-lg text-xs hover:bg-pink-600 transition-colors">
                          Revisar
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Security Score */}
          <div className="bg-white rounded-3xl p-6 border border-pink-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span>Puntuación de Seguridad</span>
            </h3>
            <div className="text-center">
              <div className="relative inline-flex items-center justify-center w-24 h-24 mb-4">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="#f3f4f6" strokeWidth="8" fill="none" />
                  <circle 
                    cx="48" 
                    cy="48" 
                    r="40" 
                    stroke="#10b981" 
                    strokeWidth="8" 
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.87)}`}
                    className="transition-all duration-1000"
                  />
                </svg>
                <span className="absolute text-2xl font-bold text-green-600">87%</span>
              </div>
              <p className="text-gray-600 text-sm">Excelente nivel de seguridad</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-3xl p-6 border border-pink-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Acciones Rápidas</h3>
            <div className="space-y-3">
              {[
                { label: 'Escaneo de Seguridad', icon: Shield, color: 'green' },
                { label: 'Backup de Datos', icon: Database, color: 'blue' },
                { label: 'Logs de Acceso', icon: FileText, color: 'purple' },
                { label: 'Configurar 2FA', icon: Key, color: 'orange' }
              ].map((action) => (
                <motion.button
                  key={action.label}
                  className={`w-full flex items-center space-x-3 p-3 bg-${action.color}-50 hover:bg-${action.color}-100 rounded-xl transition-colors`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <action.icon className={`w-5 h-5 text-${action.color}-600`} />
                  <span className="font-medium text-gray-800">{action.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderPremium = () => (
    <div className="space-y-8">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold flex items-center space-x-3">
                <Crown className="w-8 h-8" />
                <span>Premium Management</span>
              </h2>
              <p className="text-yellow-100 mt-2">Gestión avanzada de membresías premium</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-black">{premiumUsers}</p>
              <p className="text-yellow-200">Usuarios Premium</p>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Ingresos Premium', value: '$45,680', change: '+23%', icon: DollarSign, color: 'green' },
          { label: 'Nuevos Premium', value: '28', change: '+15%', icon: UserCheck, color: 'blue' },
          { label: 'Retención', value: '94.2%', change: '+2.1%', icon: Award, color: 'purple' },
          { label: 'Upgrade Rate', value: '12.8%', change: '+3.2%', icon: TrendingUp, color: 'pink' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-white rounded-3xl p-6 border border-pink-200"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`w-8 h-8 text-${stat.color}-500`} />
              <span className={`text-${stat.color}-600 text-sm font-semibold`}>{stat.change}</span>
            </div>
            <div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
              <p className="text-3xl font-black text-gray-800">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Premium Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Premium Plans */}
        <div className="bg-white rounded-3xl p-8 border border-pink-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
            <Crown className="w-6 h-6 text-yellow-500" />
            <span>Planes Premium</span>
          </h3>
          
          <div className="space-y-4">
            {[
              { 
                name: 'Premium Basic', 
                price: '$29.99', 
                users: 45, 
                features: ['Acceso Prioritario', 'Soporte 24/7', 'Sin Anuncios'],
                color: 'blue'
              },
              { 
                name: 'Premium Pro', 
                price: '$59.99', 
                users: 78, 
                features: ['Todo lo anterior', 'Consultas Ilimitadas', 'Productos Exclusivos'],
                color: 'purple'
              },
              { 
                name: 'Premium Elite', 
                price: '$99.99', 
                users: 33, 
                features: ['Todo lo anterior', 'Asesoría Personal', 'Envío Express'],
                color: 'yellow'
              }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`p-6 bg-${plan.color}-50 rounded-2xl border border-${plan.color}-200`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-gray-800">{plan.name}</h4>
                    <p className={`text-2xl font-black text-${plan.color}-600`}>{plan.price}/mes</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 text-sm">{plan.users} usuarios</p>
                    <span className={`px-3 py-1 bg-${plan.color}-200 text-${plan.color}-800 rounded-full text-xs font-bold`}>
                      Activo
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  {plan.features.map((feature, i) => (
                    <p key={i} className="text-gray-600 text-sm flex items-center space-x-2">
                      <CheckCircle className={`w-4 h-4 text-${plan.color}-500`} />
                      <span>{feature}</span>
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Premium Analytics */}
        <div className="bg-white rounded-3xl p-8 border border-pink-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
            <BarChart className="w-6 h-6 text-pink-500" />
            <span>Analytics Premium</span>
          </h3>
          
          {/* Revenue Chart */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Ingresos por Plan</h4>
            <div className="h-48 bg-gradient-to-t from-pink-50 to-pink-100 rounded-xl flex items-end justify-center p-4">
              <div className="flex items-end space-x-4 h-full w-full">
                {[65, 85, 45].map((height, index) => (
                  <motion.div
                    key={index}
                    className={`rounded-t-lg flex-1 ${
                      index === 0 ? 'bg-gradient-to-t from-blue-500 to-blue-400' :
                      index === 1 ? 'bg-gradient-to-t from-purple-500 to-purple-400' :
                      'bg-gradient-to-t from-yellow-500 to-yellow-400'
                    }`}
                    style={{ height: `${height}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Premium Benefits */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Beneficios Más Utilizados</h4>
            <div className="space-y-3">
              {[
                { benefit: 'Soporte Prioritario', usage: 89, color: 'green' },
                { benefit: 'Productos Exclusivos', usage: 76, color: 'blue' },
                { benefit: 'Envío Express', usage: 64, color: 'purple' },
                { benefit: 'Asesoría Personal', usage: 52, color: 'pink' }
              ].map((item) => (
                <div key={item.benefit}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-800 text-sm font-medium">{item.benefit}</span>
                    <span className="text-gray-600 text-sm">{item.usage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-${item.color}-500`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.usage}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderMarketing = () => (
    <div className="space-y-8">
      {/* Marketing Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold flex items-center space-x-3">
              <Target className="w-8 h-8" />
              <span>Marketing Center</span>
            </h2>
            <p className="text-indigo-100 mt-2">Campañas, automatización y análisis de marketing</p>
          </div>
          <div className="text-right">
            <p className="text-indigo-100">ROI Promedio</p>
            <p className="text-3xl font-black">285%</p>
          </div>
        </div>
      </div>

      {/* Campaign Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Campañas Activas', value: '12', icon: Zap, color: 'yellow' },
          { label: 'Emails Enviados', value: '24.5K', icon: Mail, color: 'blue' },
          { label: 'Tasa de Apertura', value: '34.8%', icon: Eye, color: 'green' },
          { label: 'Conversiones', value: '892', icon: Target, color: 'purple' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-white rounded-3xl p-6 border border-pink-200"
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`w-8 h-8 text-${stat.color}-500`} />
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <p className="text-gray-600 text-sm">{stat.label}</p>
              <p className="text-3xl font-black text-gray-800">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Active Campaigns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl p-8 border border-pink-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
            <Zap className="w-6 h-6 text-yellow-500" />
            <span>Campañas Activas</span>
          </h3>
          
          <div className="space-y-4">
            {[
              {
                name: 'Promoción Black Friday',
                type: 'Email Marketing',
                status: 'active',
                performance: 'excellent',
                reach: '15.2K',
                conversion: '8.4%'
              },
              {
                name: 'Lanzamiento Productos Premium',
                type: 'Social Media',
                status: 'scheduled',
                performance: 'good',
                reach: '8.7K',
                conversion: '5.2%'
              },
              {
                name: 'Retención de Clientes',
                type: 'Automated',
                status: 'active',
                performance: 'average',
                reach: '3.1K',
                conversion: '12.1%'
              }
            ].map((campaign, index) => (
              <motion.div
                key={campaign.name}
                className="p-4 bg-gray-50 rounded-2xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">{campaign.name}</h4>
                    <p className="text-gray-600 text-sm">{campaign.type}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    campaign.status === 'active' ? 'bg-green-100 text-green-600' :
                    campaign.status === 'scheduled' ? 'bg-blue-100 text-blue-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {campaign.status === 'active' ? 'Activa' : 
                     campaign.status === 'scheduled' ? 'Programada' : 'Pausada'}
                  </span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-gray-500 text-xs">Alcance</p>
                    <p className="font-semibold text-gray-800">{campaign.reach}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Conversión</p>
                    <p className="font-semibold text-gray-800">{campaign.conversion}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Performance</p>
                    <div className={`w-3 h-3 rounded-full mx-auto ${
                      campaign.performance === 'excellent' ? 'bg-green-500' :
                      campaign.performance === 'good' ? 'bg-blue-500' :
                      'bg-yellow-500'
                    }`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Email Marketing */}
        <div className="bg-white rounded-3xl p-8 border border-pink-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
            <Mail className="w-6 h-6 text-blue-500" />
            <span>Email Marketing</span>
          </h3>
          
          {/* Email Performance */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Performance Últimos 30 días</h4>
            <div className="space-y-3">
              {[
                { metric: 'Emails Enviados', value: '24,567', change: '+12.3%' },
                { metric: 'Tasa de Apertura', value: '34.8%', change: '+2.1%' },
                { metric: 'Clicks', value: '8.9%', change: '+1.4%' },
                { metric: 'Conversiones', value: '3.2%', change: '+0.8%' }
              ].map((item, index) => (
                <div key={item.metric} className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                  <span className="text-gray-800 font-medium">{item.metric}</span>
                  <div className="text-right">
                    <span className="font-bold text-gray-800">{item.value}</span>
                    <span className="text-green-600 text-sm ml-2">{item.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center space-x-2 p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors">
              <Plus className="w-5 h-5" />
              <span>Nueva Campaña</span>
            </button>
            <button className="w-full flex items-center justify-center space-x-2 p-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors">
              <Users2 className="w-5 h-5" />
              <span>Segmentar Audiencia</span>
            </button>
            <button className="w-full flex items-center justify-center space-x-2 p-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors">
              <BarChart className="w-5 h-5" />
              <span>Ver Analytics</span>
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Integration */}
      <div className="bg-white rounded-3xl p-8 border border-pink-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
          <MessageSquare className="w-6 h-6 text-pink-500" />
          <span>Redes Sociales</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { platform: 'Instagram', followers: '45.2K', engagement: '4.8%', posts: '124', color: 'pink' },
            { platform: 'Facebook', followers: '32.1K', engagement: '3.2%', posts: '89', color: 'blue' },
            { platform: 'TikTok', followers: '28.7K', engagement: '6.1%', posts: '67', color: 'purple' }
          ].map((social, index) => (
            <motion.div
              key={social.platform}
              className={`p-6 bg-${social.color}-50 rounded-2xl border border-${social.color}-200`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-center">
                <h4 className={`font-bold text-${social.color}-800 text-lg mb-2`}>{social.platform}</h4>
                <p className={`text-2xl font-black text-${social.color}-600 mb-1`}>{social.followers}</p>
                <p className="text-gray-600 text-sm mb-4">seguidores</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Engagement:</span>
                    <span className={`font-semibold text-${social.color}-600`}>{social.engagement}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Posts este mes:</span>
                    <span className={`font-semibold text-${social.color}-600`}>{social.posts}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderReports = () => (
    <div className="space-y-8">
      {/* Reports Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold flex items-center space-x-3">
              <FileText className="w-8 h-8" />
              <span>Centro de Reportes</span>
            </h2>
            <p className="text-green-100 mt-2">Informes avanzados y análisis de datos</p>
          </div>
          <div className="text-right">
            <button className="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-md rounded-xl text-white font-semibold hover:bg-opacity-30 transition-colors">
              Generar Reporte
            </button>
          </div>
        </div>
      </div>

      {/* Report Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Reportes Financieros',
            description: 'Ingresos, gastos y rentabilidad',
            icon: DollarSign,
            color: 'green',
            reports: ['Estado de Resultados', 'Flujo de Caja', 'ROI por Producto', 'Análisis de Márgenes']
          },
          {
            title: 'Reportes de Ventas',
            description: 'Performance comercial y tendencias',
            icon: TrendingUp,
            color: 'blue',
            reports: ['Ventas por Período', 'Top Productos', 'Performance Vendedores', 'Análisis de Conversión']
          },
          {
            title: 'Reportes de Clientes',
            description: 'Comportamiento y satisfacción',
            icon: Users,
            color: 'purple',
            reports: ['Segmentación de Clientes', 'LTV (Lifetime Value)', 'Churn Rate', 'Satisfacción del Cliente']
          }
        ].map((category, index) => (
          <motion.div
            key={category.title}
            className="bg-white rounded-3xl p-8 border border-pink-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center mb-6">
              <div className={`w-16 h-16 bg-${category.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <category.icon className={`w-8 h-8 text-${category.color}-600`} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
            
            <div className="space-y-2">
              {category.reports.map((report, i) => (
                <motion.button
                  key={report}
                  className={`w-full text-left p-3 bg-${category.color}-50 hover:bg-${category.color}-100 rounded-xl transition-colors`}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-gray-800 font-medium text-sm">{report}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-3xl p-8 border border-pink-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Reportes Recientes</h3>
          <button className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors">
            <Plus className="w-5 h-5" />
            <span>Nuevo Reporte</span>
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Nombre del Reporte</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Tipo</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Fecha</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Tamaño</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Estado</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                {
                  name: 'Reporte Mensual de Ventas - Octubre 2024',
                  type: 'Ventas',
                  date: '2024-10-09',
                  size: '2.4 MB',
                  status: 'ready'
                },
                {
                  name: 'Análisis de Comportamiento de Clientes Q3',
                  type: 'Clientes',
                  date: '2024-10-08',
                  size: '5.1 MB',
                  status: 'ready'
                },
                {
                  name: 'Estado Financiero - Septiembre 2024',
                  type: 'Financiero',
                  date: '2024-10-07',
                  size: '1.8 MB',
                  status: 'processing'
                },
                {
                  name: 'Performance de Marketing Digital',
                  type: 'Marketing',
                  date: '2024-10-06',
                  size: '3.2 MB',
                  status: 'ready'
                }
              ].map((report, index) => (
                <motion.tr
                  key={report.name}
                  className="hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-800">{report.name}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      report.type === 'Ventas' ? 'bg-blue-100 text-blue-600' :
                      report.type === 'Clientes' ? 'bg-purple-100 text-purple-600' :
                      report.type === 'Financiero' ? 'bg-green-100 text-green-600' :
                      'bg-pink-100 text-pink-600'
                    }`}>
                      {report.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{report.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{report.size}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      report.status === 'ready' ? 'bg-green-100 text-green-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>
                      {report.status === 'ready' ? 'Listo' : 'Procesando'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-green-600 transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Report Templates */}
      <div className="bg-white rounded-3xl p-8 border border-pink-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Plantillas de Reportes</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Dashboard Ejecutivo', description: 'Resumen ejecutivo con KPIs principales', icon: BarChart3 },
            { name: 'Análisis de Productos', description: 'Performance detallado por producto', icon: Package },
            { name: 'Reporte de Satisfacción', description: 'Métricas de experiencia del cliente', icon: Star },
            { name: 'Análisis Competitivo', description: 'Comparación con la competencia', icon: Target }
          ].map((template, index) => (
            <motion.div
              key={template.name}
              className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <template.icon className="w-6 h-6 text-pink-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{template.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                <button className="px-4 py-2 bg-pink-500 text-white rounded-lg text-sm hover:bg-pink-600 transition-colors">
                  Usar Plantilla
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )

  // Gestión de Roles
  const renderRoles = () => (
    <div className="space-y-8">
      {/* Roles Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold flex items-center space-x-3">
              <UserCheck className="w-8 h-8" />
              <span>Gestión de Roles</span>
            </h2>
            <p className="text-indigo-100 mt-2">Administrar permisos y accesos del sistema</p>
          </div>
          <button className="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-md rounded-xl text-white font-semibold hover:bg-opacity-30 transition-colors">
            Crear Rol
          </button>
        </div>
      </div>

      {/* Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            name: 'Super Admin',
            description: 'Acceso completo al sistema',
            users: 1,
            permissions: ['Crear', 'Leer', 'Actualizar', 'Eliminar', 'Configurar'],
            color: 'red'
          },
          {
            name: 'Admin',
            description: 'Gestión de productos y clientes',
            users: 3,
            permissions: ['Crear', 'Leer', 'Actualizar', 'Reportes'],
            color: 'blue'
          },
          {
            name: 'Vendedor',
            description: 'Gestión de ventas y clientes',
            users: 8,
            permissions: ['Leer', 'Crear Ventas', 'Ver Clientes'],
            color: 'green'
          },
          {
            name: 'Soporte',
            description: 'Atención al cliente',
            users: 5,
            permissions: ['Leer', 'Actualizar Tickets', 'Chat'],
            color: 'yellow'
          },
          {
            name: 'Analista',
            description: 'Análisis y reportes',
            users: 2,
            permissions: ['Leer', 'Generar Reportes', 'Analytics'],
            color: 'purple'
          },
          {
            name: 'Invitado',
            description: 'Acceso limitado de solo lectura',
            users: 12,
            permissions: ['Solo Lectura'],
            color: 'gray'
          }
        ].map((role, index) => (
          <motion.div
            key={role.name}
            className="bg-white rounded-3xl p-6 border border-pink-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">{role.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-bold bg-pink-100 text-pink-600`}>
                {role.users} usuarios
              </span>
            </div>
            <p className="text-gray-600 mb-4">{role.description}</p>
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-800 text-sm">Permisos:</h4>
              <div className="flex flex-wrap gap-2">
                {role.permissions.map((permission) => (
                  <span key={permission} className="px-2 py-1 bg-pink-100 text-pink-600 rounded-lg text-xs">
                    {permission}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 px-3 py-2 bg-pink-500 text-white rounded-lg text-sm hover:bg-pink-600 transition-colors">
                Editar
              </button>
              <button className="px-3 py-2 border border-gray-300 text-gray-600 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                Ver Usuarios
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  // Soporte Técnico
  const renderSupport = () => (
    <div className="space-y-8">
      {/* Support Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold flex items-center space-x-3">
              <MessageSquare className="w-8 h-8" />
              <span>Soporte Técnico</span>
            </h2>
            <p className="text-blue-100 mt-2">Centro de ayuda y asistencia técnica</p>
          </div>
          <div className="text-right">
            <p className="text-blue-100 text-sm">Contacto de emergencia</p>
            <p className="text-white font-bold">📱 3025295978</p>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Admin Contact */}
        <motion.div
          className="bg-white rounded-3xl p-8 border border-pink-200"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Administrador Principal</h3>
            <p className="text-gray-600 mb-6">Soporte técnico y configuración del sistema</p>
            
            <div className="space-y-4">
              <div className="bg-pink-50 p-4 rounded-xl">
                <p className="text-gray-700 font-semibold">📧 Email:</p>
                <a href="mailto:munodanielfelipe8@gmail.com" className="text-pink-600 hover:text-pink-700 font-bold">
                  munodanielfelipe8@gmail.com
                </a>
              </div>
              
              <div className="bg-green-50 p-4 rounded-xl">
                <p className="text-gray-700 font-semibold">📱 WhatsApp:</p>
                <a href="https://wa.me/573025295978" className="text-green-600 hover:text-green-700 font-bold">
                  +57 3025295978
                </a>
              </div>
            </div>

            <div className="mt-6 flex space-x-3">
              <a 
                href="mailto:munodanielfelipe8@gmail.com"
                className="flex-1 px-4 py-3 bg-pink-500 text-white rounded-xl font-semibold hover:bg-pink-600 transition-colors"
              >
                ✉️ Enviar Email
              </a>
              <a 
                href="https://wa.me/573025295978"
                className="flex-1 px-4 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
              >
                📱 WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        {/* Support Center */}
        <motion.div
          className="bg-white rounded-3xl p-8 border border-pink-200"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6">Centro de Ayuda</h3>
          
          <div className="space-y-4">
            {[
              { title: 'Documentación', description: 'Guías y manuales completos', icon: FileText, color: 'blue' },
              { title: 'Videos Tutoriales', description: 'Aprende paso a paso', icon: Monitor, color: 'red' },
              { title: 'FAQ', description: 'Preguntas frecuentes', icon: MessageSquare, color: 'green' },
              { title: 'Chat en Vivo', description: 'Asistencia inmediata', icon: Zap, color: 'yellow' }
            ].map((item, index) => (
              <div key={item.title} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="flex items-center space-x-3">
                  <item.icon className="w-6 h-6 text-gray-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Support Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Tickets Resueltos', value: '1,247', icon: CheckCircle, color: 'green' },
          { label: 'Tiempo Respuesta', value: '< 2h', icon: Clock, color: 'blue' },
          { label: 'Satisfacción', value: '98.5%', icon: Star, color: 'yellow' },
          { label: 'Tickets Activos', value: '23', icon: AlertCircle, color: 'red' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-white rounded-2xl p-6 border border-pink-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  // Notificaciones
  const renderNotifications = () => (
    <div className="space-y-8">
      {/* Notifications Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold flex items-center space-x-3">
              <Bell className="w-8 h-8" />
              <span>Centro de Notificaciones</span>
            </h2>
            <p className="text-orange-100 mt-2">Gestión de alertas y comunicaciones</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-md rounded-xl text-white font-semibold hover:bg-opacity-30 transition-colors">
              Marcar como Leídas
            </button>
            <button className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-md rounded-xl text-white font-semibold hover:bg-opacity-30 transition-colors">
              Nueva Notificación
            </button>
          </div>
        </div>
      </div>

      {/* Notification Categories */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { type: 'Críticas', count: 3, color: 'red', icon: AlertTriangle },
          { type: 'Importantes', count: 12, color: 'yellow', icon: AlertCircle },
          { type: 'Informativas', count: 28, color: 'blue', icon: Bell },
          { type: 'Sistema', count: 7, color: 'gray', icon: Settings }
        ].map((category, index) => (
          <motion.div
            key={category.type}
            className="bg-white rounded-2xl p-6 border border-pink-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{category.type}</h3>
                  <p className="text-gray-600 text-sm">{category.count} pendientes</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-bold">
                {category.count}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Notifications */}
      <div className="bg-white rounded-3xl p-8 border border-pink-200">
        <h3 className="text-xl font-bold text-gray-800 mb-6">Notificaciones Recientes</h3>
        
        <div className="space-y-4">
          {[
            {
              title: 'Nuevo pedido recibido',
              message: 'Cliente Ana María González realizó un pedido por $280,000 COP',
              time: 'Hace 5 minutos',
              type: 'success',
              icon: ShoppingCart
            },
            {
              title: 'Alerta de seguridad',
              message: 'Intento de acceso desde IP desconocida detectado',
              time: 'Hace 15 minutos',
              type: 'warning',
              icon: Shield
            },
            {
              title: 'Campaña completada',
              message: 'Promoción Black Friday ha finalizado con 8.4% de conversión',
              time: 'Hace 2 horas',
              type: 'info',
              icon: Target
            },
            {
              title: 'Producto agotado',
              message: 'Kit Barbero Elite Pro tiene solo 2 unidades restantes',
              time: 'Hace 4 horas',
              type: 'warning',
              icon: Package
            }
          ].map((notification, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                notification.type === 'success' ? 'bg-green-100' :
                notification.type === 'warning' ? 'bg-yellow-100' :
                notification.type === 'error' ? 'bg-red-100' : 'bg-blue-100'
              }`}>
                <notification.icon className={`w-5 h-5 ${
                  notification.type === 'success' ? 'text-green-600' :
                  notification.type === 'warning' ? 'text-yellow-600' :
                  notification.type === 'error' ? 'text-red-600' : 'text-blue-600'
                }`} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800">{notification.title}</h4>
                <p className="text-gray-600 text-sm">{notification.message}</p>
                <p className="text-gray-500 text-xs mt-1">{notification.time}</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-pink-600 hover:bg-pink-50 rounded-lg transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )

  // Configuración
  const renderSettings = () => (
    <div className="space-y-8">
      {/* Settings Header */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-3xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold flex items-center space-x-3">
              <Settings className="w-8 h-8" />
              <span>Configuración del Sistema</span>
            </h2>
            <p className="text-gray-300 mt-2">Ajustes generales y configuración avanzada</p>
          </div>
          <button className="px-6 py-3 bg-white bg-opacity-20 backdrop-blur-md rounded-xl text-white font-semibold hover:bg-opacity-30 transition-colors">
            Guardar Cambios
          </button>
        </div>
      </div>

      {/* Settings Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'General',
            description: 'Configuración básica del sistema',
            icon: Settings,
            color: 'blue',
            settings: ['Nombre de la empresa', 'Logo', 'Zona horaria', 'Idioma']
          },
          {
            title: 'Seguridad',
            description: 'Configuración de seguridad y acceso',
            icon: Shield,
            color: 'red',
            settings: ['2FA', 'Políticas de contraseña', 'Sesiones', 'Logs de auditoría']
          },
          {
            title: 'Notificaciones',
            description: 'Preferencias de comunicación',
            icon: Bell,
            color: 'yellow',
            settings: ['Email automático', 'SMS', 'Push notifications', 'Webhooks']
          },
          {
            title: 'Pagos',
            description: 'Configuración de métodos de pago',
            icon: DollarSign,
            color: 'green',
            settings: ['Pasarelas de pago', 'Monedas', 'Impuestos', 'Facturación']
          },
          {
            title: 'Integrations',
            description: 'APIs y servicios externos',
            icon: Globe,
            color: 'purple',
            settings: ['Google Analytics', 'WhatsApp API', 'Email provider', 'CRM externo']
          },
          {
            title: 'Backup',
            description: 'Respaldos y recuperación',
            icon: Database,
            color: 'gray',
            settings: ['Backup automático', 'Retención', 'Recuperación', 'Exportar datos']
          }
        ].map((category, index) => (
          <motion.div
            key={category.title}
            className="bg-white rounded-3xl p-6 border border-pink-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <category.icon className="w-6 h-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              {category.settings.map((setting) => (
                <div key={setting} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                  <span className="text-gray-700 text-sm">{setting}</span>
                  <button className="text-pink-600 text-xs hover:text-pink-700">
                    Configurar
                  </button>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 px-4 py-2 bg-pink-500 text-white rounded-xl text-sm hover:bg-pink-600 transition-colors">
              Administrar
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-pink-50/30 to-purple-50/30 relative overflow-hidden">
      {/* � ANIMATED BACKGROUND EFFECTS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-400/10 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* 🎨 ULTRA PREMIUM HEADER */}
      <motion.header 
        className="relative z-10 backdrop-blur-2xl bg-white/80 border-b border-white/20 shadow-2xl shadow-pink-500/5"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/10 to-transparent"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="relative container mx-auto px-8">
          <div className="flex items-center justify-between h-24">
            {/* 💎 ULTRA PREMIUM LOGO */}
            <motion.div 
              className="flex items-center space-x-6"
              whileHover={{ scale: 1.02 }}
              transition={LIZO_PREMIUM.animations.springBounce}
            >
              <Link href="/" className="flex items-center space-x-4">
                <motion.div
                  className="relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl blur-xl opacity-50" />
                  <LizoLogo size="xl" variant="luxury" />
                </motion.div>
                <div>
                  <h1 className="text-3xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    LIZO BELLEZA
                  </h1>
                  <p className="text-sm font-medium text-gray-500">
                    ✨ Premium Dashboard
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* 🎯 PREMIUM ACTION BUTTONS */}
            <div className="flex items-center space-x-6">
              {/* Search Bar Premium */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                <input
                  type="text"
                  placeholder="Buscar en el CRM..."
                  className="w-80 px-6 py-3 pl-12 bg-white/90 backdrop-blur-xl border border-pink-200/50 rounded-2xl text-sm 
                    focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 shadow-lg shadow-pink-500/10
                    transition-all duration-300"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-pink-500" />
              </motion.div>

              {/* Notifications */}
              <motion.button
                className="relative p-3 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl shadow-lg shadow-pink-500/50 
                  hover:shadow-2xl hover:shadow-pink-600/60 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                whileTap={{ scale: 0.95 }}
              >
                <Bell className="w-6 h-6 text-white" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs font-bold flex items-center justify-center animate-pulse">
                  {15}
                </span>
              </motion.button>

              {/* User Profile Premium */}
              <motion.div
                className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-200/50"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-gray-800">Admin</p>
                  <p className="text-xs text-pink-600 font-medium">Premium ✨</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
      </motion.header>

      {/* 🎨 MAIN DASHBOARD CONTENT */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* 📱 ENHANCED SIDEBAR */}
          <motion.div 
            className="lg:w-80"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-200/50 sticky top-8 shadow-2xl">
              <div className="mb-6">
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-4 text-white mb-4">
                  <h3 className="font-bold text-lg">Panel de Control</h3>
                  <p className="text-pink-100 text-sm">Gestión empresarial avanzada</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="text-center p-3 bg-green-50 rounded-xl">
                    <p className="text-2xl font-bold text-green-600">{premiumUsers}</p>
                    <p className="text-xs text-green-700">Usuarios Premium</p>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-xl">
                    <p className="text-2xl font-bold text-red-600">{securityAlerts}</p>
                    <p className="text-xs text-red-700">Alertas Activas</p>
                  </div>
                </div>
              </div>

              <nav className="space-y-2">
                {[
                  { id: 'overview', label: 'Dashboard', icon: BarChart3, color: 'blue' },
                  { id: 'analytics', label: 'Analytics', icon: Activity, color: 'purple' },
                  { id: 'orders', label: 'Pedidos', icon: ShoppingCart, color: 'green' },
                  { id: 'products', label: 'Productos', icon: Package, color: 'orange' },
                  { id: 'customers', label: 'Clientes', icon: Users, color: 'indigo' },
                  { id: 'premium', label: 'Premium', icon: Crown, color: 'yellow' },
                  { id: 'security', label: 'Security Center', icon: Shield, color: 'red' },
                  { id: 'marketing', label: 'Marketing', icon: Target, color: 'cyan' },
                  { id: 'reports', label: 'Reportes', icon: FileText, color: 'gray' },
                  { id: 'roles', label: 'Gestión de Roles', icon: UserCheck, color: 'violet' },
                  { id: 'support', label: 'Soporte Técnico', icon: MessageSquare, color: 'blue' },
                  { id: 'notifications', label: 'Notificaciones', icon: Bell, color: 'orange' },
                  { id: 'settings', label: 'Configuración', icon: Settings, color: 'gray' },
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl font-semibold transition-all ${
                      activeTab === item.id
                        ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                    }`}
                    whileHover={{ scale: activeTab === item.id ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm">{item.label}</span>
                    {activeTab === item.id && (
                      <motion.div
                        className="ml-auto w-2 h-2 bg-white rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.button>
                ))}
                
                <hr className="my-6 border-pink-200" />
                
                <Link href="/" className="w-full flex items-center space-x-3 px-4 py-3 rounded-2xl font-semibold text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-all">
                  <Home className="w-5 h-5" />
                  <span className="text-sm">Ir al Sitio</span>
                </Link>
                
                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-2xl font-semibold text-red-600 hover:bg-red-50 transition-all">
                  <LogOut className="w-5 h-5" />
                  <span className="text-sm">Cerrar Sesión</span>
                </button>
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'overview' && renderOverview()}
              {activeTab === 'analytics' && renderAnalytics()}
              {activeTab === 'orders' && renderOrders()}
              {activeTab === 'products' && renderProducts()}
              {activeTab === 'customers' && renderCustomers()}
              {activeTab === 'premium' && renderPremium()}
              {activeTab === 'security' && renderSecurity()}
              {activeTab === 'marketing' && renderMarketing()}
              {activeTab === 'reports' && renderReports()}
              {activeTab === 'roles' && renderRoles()}
              {activeTab === 'support' && renderSupport()}
              {activeTab === 'notifications' && renderNotifications()}
              {activeTab === 'settings' && renderSettings()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}