// Test de conexión a Supabase y creación de tablas
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://qlgtbreqoyjhycpnbzoz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZ3RicmVxb3lqaHljcG5iem96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NTM0ODksImV4cCI6MjA3NTEyOTQ4OX0.l6Ez9esOCEUt-kqNmwwNjxu2o3daOBh--23a9Q_mh3w'

const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
  console.log('🔄 Probando conexión a Supabase...\n')
  
  try {
    // Test 1: Verificar conexión básica
    console.log('1️⃣ Verificando conexión básica...')
    const { data, error } = await supabase.from('customers').select('count', { count: 'exact' })
    
    if (error) {
      console.log('❌ Error de conexión:', error.message)
      console.log('📝 Necesitas ejecutar el SQL en Supabase primero')
      return false
    }
    
    console.log('✅ Conexión exitosa')
    console.log(`📊 Clientes en la base de datos: ${data.length > 0 ? data.length : 'No data yet'}`)
    
    // Test 2: Verificar todas las tablas
    console.log('\n2️⃣ Verificando tablas...')
    const tables = ['customers', 'products', 'orders', 'users', 'roles', 'support_tickets', 'notifications', 'analytics_data', 'security_alerts', 'marketing_campaigns', 'system_settings', 'audit_log']
    
    for (const table of tables) {
      try {
        const { count } = await supabase.from(table).select('*', { count: 'exact', head: true })
        console.log(`✅ ${table}: ${count} registros`)
      } catch (err) {
        console.log(`❌ ${table}: Error - ${err.message}`)
      }
    }
    
    // Test 3: Verificar datos de ejemplo
    console.log('\n3️⃣ Verificando datos de ejemplo...')
    const { data: customers } = await supabase.from('customers').select('*').limit(3)
    console.log(`👥 Clientes de ejemplo: ${customers?.length || 0}`)
    
    const { data: products } = await supabase.from('products').select('*').limit(3)
    console.log(`📦 Productos de ejemplo: ${products?.length || 0}`)
    
    const { data: orders } = await supabase.from('orders').select('*').limit(3)
    console.log(`🛒 Órdenes de ejemplo: ${orders?.length || 0}`)
    
    console.log('\n🎉 ¡ESTADO DE LA BASE DE DATOS!')
    if (customers?.length > 0 && products?.length > 0) {
      console.log('✅ Base de datos COMPLETAMENTE configurada y con datos')
      console.log('✅ El CRM está LISTO para usar')
    } else {
      console.log('⚠️  Base de datos conectada pero sin datos')
      console.log('📝 Ejecuta el SQL completo en Supabase para cargar datos')
    }
    
    return true
    
  } catch (error) {
    console.log('❌ Error general:', error.message)
    return false
  }
}

testConnection()