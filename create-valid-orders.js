// Script mejorado para crear órdenes con IDs válidos
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://qlgtbreqoyjhycpnbzoz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZ3RicmVxb3lqaHljcG5iem96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NTM0ODksImV4cCI6MjA3NTEyOTQ4OX0.l6Ez9esOCEUt-kqNmwwNjxu2o3daOBh--23a9Q_mh3w'

const supabase = createClient(supabaseUrl, supabaseKey)

async function createValidOrders() {
  console.log('🔍 Verificando datos existentes...\n')
  
  try {
    // 1. Verificar usuarios existentes
    const { data: profiles, error: profilesError } = await supabase
      .from('user_profiles')
      .select('id, full_name, email')
    
    console.log(`👥 User profiles encontrados: ${profiles?.length || 0}`)
    if (profiles?.length > 0) {
      console.log('   Primeros usuarios:', profiles.slice(0, 3).map(u => u.full_name || u.email))
    }
    
    // 2. Verificar productos existentes
    const { data: products, error: productsError } = await supabase
      .from('products')
      .select('id, name, price')
      .limit(10)
    
    console.log(`📦 Productos encontrados: ${products?.length || 0}`)
    if (products?.length > 0) {
      console.log('   Primeros productos:', products.slice(0, 3).map(p => p.name))
    }
    
    // 3. Si no hay user_profiles, crear algunos
    if (!profiles || profiles.length === 0) {
      console.log('\n🔧 Creando user_profiles de ejemplo...')
      
      const newProfiles = [
        {
          email: 'ana.gonzalez@email.com',
          full_name: 'Ana María González',
          phone: '+57 300 123 4567',
          is_admin: false,
          loyalty_points: 150
        },
        {
          email: 'carlos.rodriguez@email.com', 
          full_name: 'Carlos Rodríguez',
          phone: '+57 301 234 5678',
          is_admin: false,
          loyalty_points: 80
        },
        {
          email: 'munodanielfelipe8@gmail.com',
          full_name: 'Daniel Felipe Muñoz',
          phone: '3025295978',
          is_admin: true,
          loyalty_points: 500
        }
      ]
      
      const { data: createdProfiles, error: createError } = await supabase
        .from('user_profiles')
        .insert(newProfiles)
        .select('id, full_name, email')
      
      if (createError) {
        console.log('❌ Error creando profiles:', createError.message)
        return
      }
      
      console.log(`✅ ${createdProfiles.length} user_profiles creados`)
      profiles.push(...createdProfiles)
    }
    
    // 4. Crear órdenes con IDs válidos
    if (profiles && profiles.length > 0 && products && products.length > 0) {
      console.log('\n🛒 Creando órdenes válidas...')
      
      const orders = []
      for (let i = 0; i < 5; i++) {
        const user = profiles[Math.floor(Math.random() * profiles.length)]
        const product = products[Math.floor(Math.random() * products.length)]
        const quantity = Math.floor(Math.random() * 3) + 1
        const subtotal = product.price * quantity
        const shipping = 15000
        const tax = subtotal * 0.19
        const total = subtotal + shipping + tax
        
        orders.push({
          order_number: `ORD-${Date.now()}-${i}`,
          user_id: user.id,
          status: ['pending', 'processing', 'shipped', 'delivered'][Math.floor(Math.random() * 4)],
          subtotal: subtotal,
          shipping: shipping,
          tax: tax,
          discount: 0,
          total: total,
          currency: 'COP',
          payment_status: ['pending', 'paid'][Math.floor(Math.random() * 2)],
          shipping_address: {
            name: user.full_name,
            address: 'Calle 123 #45-67',
            city: 'Bogotá',
            country: 'Colombia',
            phone: user.phone || '3001234567'
          },
          billing_address: {
            name: user.full_name,
            address: 'Calle 123 #45-67', 
            city: 'Bogotá',
            country: 'Colombia',
            phone: user.phone || '3001234567'
          },
          payment_method: {
            type: 'credit_card',
            brand: 'visa',
            last4: '4242'
          }
        })
      }
      
      const { data: createdOrders, error: ordersError } = await supabase
        .from('orders')
        .insert(orders)
        .select('id, order_number, total, status')
      
      if (ordersError) {
        console.log('❌ Error creando órdenes:', ordersError.message)
        return
      }
      
      console.log(`✅ ${createdOrders.length} órdenes creadas exitosamente!`)
      
      // 5. Crear order_items para cada orden
      console.log('\n📦 Creando items de órdenes...')
      
      const orderItems = []
      for (let order of createdOrders) {
        const product = products[Math.floor(Math.random() * products.length)]
        const quantity = Math.floor(Math.random() * 3) + 1
        
        orderItems.push({
          order_id: order.id,
          product_id: product.id,
          quantity: quantity,
          unit_price: product.price,
          subtotal: product.price * quantity
        })
      }
      
      const { data: createdItems, error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems)
        .select('*')
      
      if (itemsError) {
        console.log('⚠️ Advertencia creando items:', itemsError.message)
      } else {
        console.log(`✅ ${createdItems.length} order items creados`)
      }
      
      // 6. Estadísticas finales
      const totalRevenue = createdOrders.reduce((sum, order) => sum + order.total, 0)
      console.log(`\n💰 Revenue total: $${totalRevenue.toLocaleString('es-CO')} COP`)
      
      const statusCount = createdOrders.reduce((acc, order) => {
        acc[order.status] = (acc[order.status] || 0) + 1
        return acc
      }, {})
      
      console.log('\n📊 Órdenes por estado:')
      Object.entries(statusCount).forEach(([status, count]) => {
        console.log(`   ${status}: ${count}`)
      })
      
      console.log('\n🎉 ¡DATOS DE VENTAS CREADOS EXITOSAMENTE!')
      console.log('🔄 Recarga http://localhost:3001/admin para ver las estadísticas')
    }
    
  } catch (error) {
    console.log('❌ Error general:', error.message)
  }
}

createValidOrders()