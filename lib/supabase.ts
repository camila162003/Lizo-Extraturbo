import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qlgtbreqoyjhycpnbzoz.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZ3RicmVxb3lqaHljcG5iem96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NTM0ODksImV4cCI6MjA3NTEyOTQ4OX0.l6Ez9esOCEUt-kqNmwwNjxu2o3daOBh--23a9Q_mh3w'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types
export interface Customer {
  id: string
  name: string
  email: string
  phone?: string
  address?: string
  created_at: string
  updated_at: string
  premium_tier?: 'basic' | 'pro' | 'elite' | null
  total_orders: number
  total_spent: number
}

export interface Product {
  id: string
  name: string
  description?: string
  price: number
  original_price?: number
  category: string
  image_url?: string
  images?: string[]
  features?: string[]
  stock: number
  in_stock: boolean
  featured: boolean
  bestseller: boolean
  rating: number
  reviews: number
  created_at: string
  updated_at: string
  sales_count: number
  revenue: number
}

export interface Order {
  id: string
  customer_id: string
  product_id: string
  quantity: number
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  created_at: string
  updated_at: string
}

export interface AnalyticsData {
  id: string
  date: string
  visitors: number
  page_views: number
  sessions: number
  conversion_rate: number
  device_type: 'mobile' | 'desktop' | 'tablet'
  location: string
  created_at: string
}

export interface SecurityAlert {
  id: string
  type: string
  description: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  ip_address?: string
  created_at: string
  resolved: boolean
}

export interface MarketingCampaign {
  id: string
  name: string
  type: 'email' | 'social' | 'sms' | 'ads'
  status: 'active' | 'paused' | 'completed' | 'scheduled'
  reach: number
  conversion_rate: number
  created_at: string
  updated_at: string
}

// Database Functions
export const supabaseService = {
  // ==================== CUSTOMERS ====================
  async getCustomers() {
    const { data, error } = await supabase
      .from('customers')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  async getCustomerById(id: string) {
    const { data, error } = await supabase
      .from('customers')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data
  },

  async createCustomer(customer: Omit<Customer, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('customers')
      .insert([{
        ...customer,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
    
    if (error) throw error
    return data?.[0]
  },

  async updateCustomer(id: string, updates: Partial<Customer>) {
    const { data, error } = await supabase
      .from('customers')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data?.[0]
  },

  async deleteCustomer(id: string) {
    const { error } = await supabase
      .from('customers')
      .delete()
      .eq('id', id)
    
    if (error) throw error
    return true
  },

  // ==================== PRODUCTS ====================
  async getProducts() {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('sales_count', { ascending: false })
    
    if (error) throw error
    return data
  },

  async getFeaturedProducts() {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('featured', true)
      .eq('in_stock', true)
      .order('rating', { ascending: false })
    
    if (error) throw error
    return data
  },

  async getBestsellers() {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('bestseller', true)
      .eq('in_stock', true)
      .order('sales_count', { ascending: false })
    
    if (error) throw error
    return data
  },

  async getProductsByCategory(category: string) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category', category)
      .eq('in_stock', true)
      .order('rating', { ascending: false })
    
    if (error) throw error
    return data
  },

  async getProductById(id: string) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data
  },

  async searchProducts(query: string) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .or(`name.ilike.%${query}%,description.ilike.%${query}%,category.ilike.%${query}%`)
      .eq('in_stock', true)
      .order('rating', { ascending: false })
    
    if (error) throw error
    return data
  },

  async createProduct(product: Omit<Product, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('products')
      .insert([{
        ...product,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
    
    if (error) throw error
    return data?.[0]
  },

  async updateProduct(id: string, updates: Partial<Product>) {
    const { data, error } = await supabase
      .from('products')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data?.[0]
  },

  async deleteProduct(id: string) {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id)
    
    if (error) throw error
    return true
  },

  async updateProductStock(id: string, quantity: number) {
    const { data, error } = await supabase
      .from('products')
      .update({
        stock: quantity,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data?.[0]
  },

  // ==================== ORDERS ====================
  async getOrders() {
    // Primero intentar con la tabla CRM orders
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          customers(name, email),
          products(name, price)
        `)
        .order('created_at', { ascending: false })
      
      if (error && error.message.includes('Could not find')) {
        // Si no existe la tabla CRM orders, usar la tabla e-commerce
        const { data: ecommerceOrders, error: eError } = await supabase
          .from('orders')
          .select(`
            *,
            user_profiles!user_id(full_name, email),
            order_items(*, products(name, price))
          `)
          .order('created_at', { ascending: false })
        
        if (eError) throw eError
        
        // Adaptar formato para el CRM
        return ecommerceOrders?.map(order => ({
          id: order.id,
          customer_id: order.user_id,
          total: order.total,
          status: order.status,
          created_at: order.created_at,
          customers: {
            name: order.user_profiles?.full_name || 'Cliente',
            email: order.user_profiles?.email || 'Sin email'
          },
          products: {
            name: order.order_items?.[0]?.products?.name || 'Producto',
            price: order.order_items?.[0]?.products?.price || 0
          },
          quantity: order.order_items?.[0]?.quantity || 1
        })) || []
      }
      
      return data || []
    } catch (error) {
      console.error('Error fetching orders:', error)
      return []
    }
  },

  async getOrderById(id: string) {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        customers(name, email, phone),
        products(name, price, category)
      `)
      .eq('id', id)
      .single()
    
    if (error) throw error
    return data
  },

  async createOrder(order: Omit<Order, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('orders')
      .insert([{
        ...order,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
    
    if (error) throw error
    
    // Actualizar estadísticas del cliente
    if (data?.[0]) {
      await this.updateCustomerStats(order.customer_id)
    }
    
    return data?.[0]
  },

  async updateOrderStatus(id: string, status: Order['status']) {
    const { data, error } = await supabase
      .from('orders')
      .update({
        status,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data?.[0]
  },

  async deleteOrder(id: string) {
    const { error } = await supabase
      .from('orders')
      .delete()
      .eq('id', id)
    
    if (error) throw error
    return true
  },

  // Actualizar estadísticas del cliente
  async updateCustomerStats(customerId: string) {
    const { data: orders } = await supabase
      .from('orders')
      .select('total')
      .eq('customer_id', customerId)
      .eq('status', 'delivered')
    
    const totalOrders = orders?.length || 0
    const totalSpent = orders?.reduce((sum, order) => sum + order.total, 0) || 0
    
    await this.updateCustomer(customerId, {
      total_orders: totalOrders,
      total_spent: totalSpent
    } as Partial<Customer>)
  },

  // ==================== ANALYTICS ====================
  async getAnalytics(startDate?: string, endDate?: string) {
    let query = supabase
      .from('analytics_data')
      .select('*')
    
    if (startDate) {
      query = query.gte('date', startDate)
    }
    if (endDate) {
      query = query.lte('date', endDate)
    }
    
    const { data, error } = await query.order('date', { ascending: false })
    
    if (error) throw error
    return data
  },

  async insertAnalytics(analytics: Omit<AnalyticsData, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('analytics_data')
      .insert([{
        ...analytics,
        created_at: new Date().toISOString()
      }])
      .select()
    
    if (error) throw error
    return data?.[0]
  },

  // Obtener estadísticas de tráfico por período
  async getTrafficStats(days: number = 30) {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)
    
    const { data, error } = await supabase
      .from('analytics_data')
      .select('*')
      .gte('date', startDate.toISOString().split('T')[0])
      .order('date', { ascending: true })
    
    if (error) throw error
    return data
  },

  // Obtener conversión por dispositivo
  async getDeviceStats() {
    const { data, error } = await supabase
      .from('analytics_data')
      .select('device_type, visitors, conversion_rate')
      .order('created_at', { ascending: false })
      .limit(100)
    
    if (error) throw error
    
    // Agrupar por tipo de dispositivo
    const stats: any = {}
    data?.forEach(item => {
      if (!stats[item.device_type]) {
        stats[item.device_type] = { visitors: 0, conversions: 0 }
      }
      stats[item.device_type].visitors += item.visitors
      stats[item.device_type].conversions += (item.visitors * item.conversion_rate / 100)
    })
    
    return stats
  },

  // Obtener top ubicaciones
  async getTopLocations(limit: number = 10) {
    const { data, error } = await supabase
      .from('analytics_data')
      .select('location, visitors')
      .order('visitors', { ascending: false })
      .limit(limit)
    
    if (error) throw error
    return data
  },

  // ==================== SECURITY ====================
  async getSecurityAlerts(resolved?: boolean) {
    let query = supabase
      .from('security_alerts')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (resolved !== undefined) {
      query = query.eq('resolved', resolved)
    }
    
    const { data, error } = await query
    if (error) throw error
    return data
  },

  async createSecurityAlert(alert: Omit<SecurityAlert, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('security_alerts')
      .insert([{
        ...alert,
        created_at: new Date().toISOString()
      }])
      .select()
    
    if (error) throw error
    return data?.[0]
  },

  async resolveSecurityAlert(id: string) {
    const { data, error } = await supabase
      .from('security_alerts')
      .update({ resolved: true })
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data?.[0]
  },

  async deleteSecurityAlert(id: string) {
    const { error } = await supabase
      .from('security_alerts')
      .delete()
      .eq('id', id)
    
    if (error) throw error
    return true
  },

  // Obtener alertas por severidad
  async getAlertsBySeverity(severity: SecurityAlert['severity']) {
    const { data, error } = await supabase
      .from('security_alerts')
      .select('*')
      .eq('severity', severity)
      .eq('resolved', false)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  // ==================== MARKETING ====================
  async getMarketingCampaigns() {
    const { data, error } = await supabase
      .from('marketing_campaigns')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  async createMarketingCampaign(campaign: Omit<MarketingCampaign, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('marketing_campaigns')
      .insert([{
        ...campaign,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
    
    if (error) throw error
    return data?.[0]
  },

  async updateMarketingCampaign(id: string, updates: Partial<MarketingCampaign>) {
    const { data, error } = await supabase
      .from('marketing_campaigns')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data?.[0]
  },

  async deleteMarketingCampaign(id: string) {
    const { error } = await supabase
      .from('marketing_campaigns')
      .delete()
      .eq('id', id)
    
    if (error) throw error
    return true
  },

  // ==================== SUPPORT TICKETS ====================
  async getSupportTickets(status?: string) {
    let query = supabase
      .from('support_tickets')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (status) {
      query = query.eq('status', status)
    }
    
    const { data, error } = await query
    if (error) throw error
    return data
  },

  async createSupportTicket(ticket: any) {
    const { data, error } = await supabase
      .from('support_tickets')
      .insert([{
        ...ticket,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
    
    if (error) throw error
    return data?.[0]
  },

  async updateSupportTicket(id: string, updates: any) {
    const { data, error} = await supabase
      .from('support_tickets')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data?.[0]
  },

  async closeSupportTicket(id: string) {
    return this.updateSupportTicket(id, { status: 'closed' })
  },

  // ==================== NOTIFICATIONS ====================
  async getNotifications(isRead?: boolean) {
    let query = supabase
      .from('notifications')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (isRead !== undefined) {
      query = query.eq('is_read', isRead)
    }
    
    const { data, error } = await query
    if (error) throw error
    return data
  },

  async createNotification(notification: any) {
    const { data, error } = await supabase
      .from('notifications')
      .insert([{
        ...notification,
        is_read: false,
        created_at: new Date().toISOString()
      }])
      .select()
    
    if (error) throw error
    return data?.[0]
  },

  async markNotificationAsRead(id: string) {
    const { data, error } = await supabase
      .from('notifications')
      .update({ is_read: true })
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data?.[0]
  },

  async markAllNotificationsAsRead() {
    const { error } = await supabase
      .from('notifications')
      .update({ is_read: true })
      .eq('is_read', false)
    
    if (error) throw error
    return true
  },

  async deleteNotification(id: string) {
    const { error } = await supabase
      .from('notifications')
      .delete()
      .eq('id', id)
    
    if (error) throw error
    return true
  },

  // ==================== ROLES & PERMISSIONS ====================
  async getRoles() {
    const { data, error } = await supabase
      .from('roles')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  async createRole(role: any) {
    const { data, error } = await supabase
      .from('roles')
      .insert([{
        ...role,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
    
    if (error) throw error
    return data?.[0]
  },

  async updateRole(id: string, updates: any) {
    const { data, error } = await supabase
      .from('roles')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data?.[0]
  },

  async deleteRole(id: string) {
    const { error } = await supabase
      .from('roles')
      .delete()
      .eq('id', id)
    
    if (error) throw error
    return true
  },

  // ==================== USERS ====================
  async getUsers() {
    const { data, error } = await supabase
      .from('users')
      .select(`
        *,
        roles(name, color, permissions)
      `)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  async createUser(user: any) {
    const { data, error } = await supabase
      .from('users')
      .insert([{
        ...user,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }])
      .select()
    
    if (error) throw error
    return data?.[0]
  },

  async updateUser(id: string, updates: any) {
    const { data, error } = await supabase
      .from('users')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data?.[0]
  },

  async deleteUser(id: string) {
    const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', id)
    
    if (error) throw error
    return true
  },

  // Dashboard Stats - Adaptado para esquemas híbridos
  async getDashboardStats() {
    try {
      // Get total revenue from e-commerce orders
      const { data: ecommerceOrders } = await supabase
        .from('orders')
        .select('total, status')
      
      const totalRevenue = ecommerceOrders?.reduce((sum, order) => 
        order.status === 'delivered' || order.status === 'completed' ? sum + order.total : sum, 0) || 0

      // Get total orders count
      const { count: totalOrders } = await supabase
        .from('orders')
        .select('*', { count: 'exact' })

      // Get total customers from CRM table
      const { count: totalCustomers } = await supabase
        .from('customers')
        .select('*', { count: 'exact' })

      // Get total products
      const { count: totalProducts } = await supabase
        .from('products')
        .select('*', { count: 'exact' })

      // Get security alerts count
      const { count: securityAlerts } = await supabase
        .from('security_alerts')
        .select('*', { count: 'exact' })
        .eq('resolved', false)

      // Get premium customers
      const { count: premiumCustomers } = await supabase
        .from('customers')
        .select('*', { count: 'exact' })
        .not('premium_tier', 'is', null)

      // Get active support tickets
      const { count: activeTickets } = await supabase
        .from('support_tickets')
        .select('*', { count: 'exact' })
        .in('status', ['open', 'in_progress'])

      // Get unread notifications
      const { count: unreadNotifications } = await supabase
        .from('notifications')
        .select('*', { count: 'exact' })
        .eq('is_read', false)

      return {
        totalRevenue: totalRevenue || 0,
        totalOrders: totalOrders || 0,
        totalCustomers: totalCustomers || 0,
        totalProducts: totalProducts || 0,
        securityAlertsCount: securityAlerts || 0,
        premiumUsersCount: premiumCustomers || 0,
        activeTickets: activeTickets || 0,
        unreadNotifications: unreadNotifications || 0,
        monthlyGrowth: 12.5, // Calculate this based on historical data
        orderGrowth: 8.3,
        customerGrowth: 15.2,
        productGrowth: 3.1
      }
    } catch (error) {
      console.error('Error fetching dashboard stats:', error)
      return {
        totalRevenue: 0,
        totalOrders: 0,
        totalCustomers: 0,
        totalProducts: 0,
        securityAlertsCount: 0,
        premiumUsersCount: 0,
        activeTickets: 0,
        unreadNotifications: 0,
        monthlyGrowth: 0,
        orderGrowth: 0,
        customerGrowth: 0,
        productGrowth: 0
      }
    }
  }
}

// Initialize database tables with sample data
export const initializeDatabase = async () => {
  try {
    // Check if tables exist and have data
    const { data: customers } = await supabase.from('customers').select('id').limit(1)
    
    if (!customers || customers.length === 0) {
      // Insert sample customers
      await supabase.from('customers').insert([
        {
          name: 'Ana María González',
          email: 'ana.gonzalez@email.com',
          phone: '+57 300 123 4567',
          address: 'Calle 123 #45-67, Bogotá',
          premium_tier: 'pro',
          total_orders: 15,
          total_spent: 2850000
        },
        {
          name: 'Carlos Rodríguez',
          email: 'carlos.rodriguez@email.com',
          phone: '+57 301 234 5678',
          address: 'Carrera 456 #78-90, Medellín',
          premium_tier: 'basic',
          total_orders: 8,
          total_spent: 1200000
        },
        {
          name: 'María Elena Vásquez',
          email: 'maria.vasquez@email.com',
          phone: '+57 302 345 6789',
          address: 'Avenida 789 #12-34, Cali',
          premium_tier: null,
          total_orders: 3,
          total_spent: 450000
        }
      ])

      // Insert sample products
      await supabase.from('products').insert([
        {
          name: 'Secadora Premium Ionic 2000W',
          description: 'Secadora profesional con tecnología iónica',
          price: 280000,
          category: 'Secadores',
          stock: 25,
          sales_count: 45,
          revenue: 12600000
        },
        {
          name: 'Kit Barbero Elite Pro',
          description: 'Kit completo para barbería profesional',
          price: 450000,
          category: 'Barbería',
          stock: 15,
          sales_count: 28,
          revenue: 12600000
        },
        {
          name: 'Plancha Cerámica Professional',
          description: 'Plancha de cabello con placas cerámicas',
          price: 195000,
          category: 'Planchas',
          stock: 40,
          sales_count: 38,
          revenue: 7410000
        }
      ])

      console.log('✅ Database initialized with sample data')
    }
  } catch (error) {
    console.error('❌ Error initializing database:', error)
  }
}