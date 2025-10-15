// Script para agregar órdenes usando la tabla existente
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://qlgtbreqoyjhycpnbzoz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZ3RicmVxb3lqaHljcG5iem96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NTM0ODksImV4cCI6MjA3NTEyOTQ4OX0.l6Ez9esOCEUt-kqNmwwNjxu2o3daOBh--23a9Q_mh3w'

const supabase = createClient(supabaseUrl, supabaseKey)

async function createOrdersWithExistingTable() {
  console.log('🛒 Adaptando órdenes al esquema existente...\n')
  
  try {
    // Verificar estructura de orders existente
    console.log('1️⃣ Verificando tabla orders existente...')
    const { data: orders } = await supabase.from('orders').select('*').limit(1)
    console.log('✅ Tabla orders accesible')
    
    // Obtener user_profiles (equivalente a customers)
    const { data: users } = await supabase.from('user_profiles').select('id, full_name, email').limit(5)
    const { data: products } = await supabase.from('products').select('id, name, price').limit(8)
    
    if (!users || !products) {
      console.log('❌ Error: No hay usuarios o productos')
      return
    }
    
    console.log(`👥 ${users.length} usuarios encontrados`)
    console.log(`📦 ${products.length} productos encontrados`)
    
    // Crear órdenes usando el esquema existente
    const newOrders = []
    for (let i = 0; i < 10; i++) {
      const user = users[Math.floor(Math.random() * users.length)]
      const product = products[Math.floor(Math.random() * products.length)]
      const quantity = Math.floor(Math.random() * 3) + 1
      const subtotal = product.price * quantity
      const shipping = 15000 // 15k COP shipping
      const tax = subtotal * 0.19 // 19% IVA
      const total = subtotal + shipping + tax
      
      const statuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled']
      const paymentStatuses = ['pending', 'paid', 'failed']
      
      newOrders.push({
        user_id: user.id,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        subtotal: subtotal,
        shipping: shipping,
        tax: tax,
        discount: 0,
        total: total,
        currency: 'COP',
        payment_status: paymentStatuses[Math.floor(Math.random() * paymentStatuses.length)],
        shipping_address: {
          name: user.full_name,
          address: 'Dirección de ejemplo',
          city: 'Bogotá',
          country: 'Colombia'
        },
        billing_address: {
          name: user.full_name,
          address: 'Dirección de ejemplo',
          city: 'Bogotá',
          country: 'Colombia'
        },
        payment_method: {
          type: 'credit_card',
          brand: 'visa'
        }
      })
    }
    
    // Insertar órdenes
    const { data, error } = await supabase
      .from('orders')
      .insert(newOrders)
      .select('id, total, status, payment_status')
    
    if (error) {
      console.log('❌ Error creando órdenes:', error.message)
      return
    }
    
    console.log(`\n✅ ${data.length} órdenes creadas exitosamente!`)
    
    // Mostrar estadísticas
    const totalRevenue = data.reduce((sum, order) => sum + order.total, 0)
    console.log(`💰 Revenue total: $${totalRevenue.toLocaleString('es-CO')} COP`)
    
    const statusCount = data.reduce((acc, order) => {
      acc[order.status] = (acc[order.status] || 0) + 1
      return acc
    }, {})
    
    console.log('\n📊 Órdenes por estado:')
    Object.entries(statusCount).forEach(([status, count]) => {
      console.log(`   ${status}: ${count}`)
    })
    
    console.log('\n🎉 ¡Ahora tienes datos reales de ventas!')
    console.log('🔄 Recarga el Dashboard para ver las estadísticas actualizadas')
    
  } catch (error) {
    console.log('❌ Error general:', error.message)
  }
}

createOrdersWithExistingTable()