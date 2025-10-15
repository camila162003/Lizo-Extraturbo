// Crear órdenes de ejemplo para el CRM
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://qlgtbreqoyjhycpnbzoz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZ3RicmVxb3lqaHljcG5iem96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NTM0ODksImV4cCI6MjA3NTEyOTQ4OX0.l6Ez9esOCEUt-kqNmwwNjxu2o3daOBh--23a9Q_mh3w'

const supabase = createClient(supabaseUrl, supabaseKey)

async function createSampleOrders() {
  console.log('🛒 Creando órdenes de ejemplo...\n')
  
  try {
    // Obtener clientes y productos
    const { data: customers } = await supabase.from('customers').select('id, name').limit(5)
    const { data: products } = await supabase.from('products').select('id, name, price').limit(8)
    
    if (!customers || !products) {
      console.log('❌ Error: No hay clientes o productos')
      return
    }
    
    // Crear órdenes aleatorias
    const orders = []
    for (let i = 0; i < 15; i++) {
      const customer = customers[Math.floor(Math.random() * customers.length)]
      const product = products[Math.floor(Math.random() * products.length)]
      const quantity = Math.floor(Math.random() * 3) + 1
      const statuses = ['pending', 'processing', 'shipped', 'delivered', 'cancelled']
      const status = statuses[Math.floor(Math.random() * statuses.length)]
      
      orders.push({
        customer_id: customer.id,
        product_id: product.id,
        quantity: quantity,
        total: product.price * quantity,
        status: status
      })
    }
    
    // Insertar órdenes
    const { data, error } = await supabase
      .from('orders')
      .insert(orders)
      .select('id, total, status')
    
    if (error) {
      console.log('❌ Error creando órdenes:', error.message)
      return
    }
    
    console.log(`✅ ${data.length} órdenes creadas exitosamente!`)
    
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
    
    console.log('\n🎉 ¡Ahora el Dashboard mostrará estadísticas reales!')
    console.log('🌐 Ve a: http://localhost:3001/admin')
    
  } catch (error) {
    console.log('❌ Error general:', error.message)
  }
}

createSampleOrders()