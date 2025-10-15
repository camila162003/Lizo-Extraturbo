/**
 * TEST CRM FUNCTIONS
 * Script para probar todas las funciones del CRM
 * 
 * Para ejecutar: node test-crm-functions.js
 */

const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://qlgtbreqoyjhycpnbzoz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZ3RicmVxb3lqaHljcG5iem96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NTM0ODksImV4cCI6MjA3NTEyOTQ4OX0.l6Ez9esOCEUt-kqNmwwNjxu2o3daOBh--23a9Q_mh3w'

const supabase = createClient(supabaseUrl, supabaseKey)

async function testCRMFunctions() {
  console.log('🧪 INICIANDO PRUEBAS DEL CRM...\n')

  try {
    // ==================== TEST 1: CUSTOMERS ====================
    console.log('📋 TEST 1: Clientes')
    const { data: customers, error: customersError } = await supabase
      .from('customers')
      .select('*')
      .limit(5)
    
    if (customersError) {
      console.log('❌ Error en clientes:', customersError.message)
    } else {
      console.log(`✅ ${customers?.length || 0} clientes encontrados`)
      if (customers && customers.length > 0) {
        console.log('   📝 Ejemplo:', customers[0].name, '-', customers[0].email)
      }
    }

    // ==================== TEST 2: PRODUCTS ====================
    console.log('\n📦 TEST 2: Productos')
    const { data: products, error: productsError } = await supabase
      .from('products')
      .select('*')
      .limit(5)
    
    if (productsError) {
      console.log('❌ Error en productos:', productsError.message)
    } else {
      console.log(`✅ ${products?.length || 0} productos encontrados`)
      if (products && products.length > 0) {
        console.log(`   📝 Ejemplo: ${products[0].name} - $${products[0].price}`)
      }
    }

    // ==================== TEST 3: ORDERS ====================
    console.log('\n🛒 TEST 3: Órdenes')
    const { data: orders, error: ordersError } = await supabase
      .from('orders')
      .select(`
        *,
        customers(name, email),
        products(name, price)
      `)
      .limit(5)
    
    if (ordersError) {
      console.log('❌ Error en órdenes:', ordersError.message)
    } else {
      console.log(`✅ ${orders?.length || 0} órdenes encontradas`)
      if (orders && orders.length > 0) {
        console.log(`   📝 Ejemplo: ${orders[0].customers?.name || 'Cliente'} - $${orders[0].total} - ${orders[0].status}`)
      }
    }

    // ==================== TEST 4: ANALYTICS ====================
    console.log('\n📊 TEST 4: Analytics')
    const { data: analytics, error: analyticsError } = await supabase
      .from('analytics_data')
      .select('*')
      .limit(5)
    
    if (analyticsError) {
      console.log('❌ Error en analytics:', analyticsError.message)
    } else {
      console.log(`✅ ${analytics?.length || 0} registros de analytics`)
      if (analytics && analytics.length > 0) {
        console.log(`   📝 Ejemplo: ${analytics[0].date} - ${analytics[0].visitors} visitantes`)
      }
    }

    // ==================== TEST 5: SECURITY ALERTS ====================
    console.log('\n🔒 TEST 5: Alertas de Seguridad')
    const { data: alerts, error: alertsError } = await supabase
      .from('security_alerts')
      .select('*')
      .limit(5)
    
    if (alertsError) {
      console.log('❌ Error en alertas:', alertsError.message)
    } else {
      console.log(`✅ ${alerts?.length || 0} alertas encontradas`)
      if (alerts && alerts.length > 0) {
        console.log(`   📝 Ejemplo: ${alerts[0].type} - ${alerts[0].severity}`)
      }
    }

    // ==================== TEST 6: MARKETING CAMPAIGNS ====================
    console.log('\n📢 TEST 6: Campañas de Marketing')
    const { data: campaigns, error: campaignsError } = await supabase
      .from('marketing_campaigns')
      .select('*')
      .limit(5)
    
    if (campaignsError) {
      console.log('❌ Error en campañas:', campaignsError.message)
    } else {
      console.log(`✅ ${campaigns?.length || 0} campañas encontradas`)
      if (campaigns && campaigns.length > 0) {
        console.log(`   📝 Ejemplo: ${campaigns[0].name} - ${campaigns[0].status}`)
      }
    }

    // ==================== TEST 7: SUPPORT TICKETS ====================
    console.log('\n🎫 TEST 7: Tickets de Soporte')
    const { data: tickets, error: ticketsError } = await supabase
      .from('support_tickets')
      .select('*')
      .limit(5)
    
    if (ticketsError) {
      console.log('❌ Error en tickets:', ticketsError.message)
    } else {
      console.log(`✅ ${tickets?.length || 0} tickets encontrados`)
      if (tickets && tickets.length > 0) {
        console.log(`   📝 Ejemplo: ${tickets[0].subject} - ${tickets[0].status}`)
      }
    }

    // ==================== TEST 8: NOTIFICATIONS ====================
    console.log('\n🔔 TEST 8: Notificaciones')
    const { data: notifications, error: notificationsError } = await supabase
      .from('notifications')
      .select('*')
      .limit(5)
    
    if (notificationsError) {
      console.log('❌ Error en notificaciones:', notificationsError.message)
    } else {
      console.log(`✅ ${notifications?.length || 0} notificaciones encontradas`)
      if (notifications && notifications.length > 0) {
        console.log(`   📝 Ejemplo: ${notifications[0].title}`)
      }
    }

    // ==================== TEST 9: ROLES ====================
    console.log('\n👥 TEST 9: Roles')
    const { data: roles, error: rolesError } = await supabase
      .from('roles')
      .select('*')
      .limit(5)
    
    if (rolesError) {
      console.log('❌ Error en roles:', rolesError.message)
    } else {
      console.log(`✅ ${roles?.length || 0} roles encontrados`)
      if (roles && roles.length > 0) {
        console.log(`   📝 Ejemplo: ${roles[0].name} - ${roles[0].users_count} usuarios`)
      }
    }

    // ==================== TEST 10: USERS ====================
    console.log('\n👤 TEST 10: Usuarios')
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select(`
        *,
        roles(name)
      `)
      .limit(5)
    
    if (usersError) {
      console.log('❌ Error en usuarios:', usersError.message)
    } else {
      console.log(`✅ ${users?.length || 0} usuarios encontrados`)
      if (users && users.length > 0) {
        console.log(`   📝 Ejemplo: ${users[0].name} - ${users[0].roles?.name || 'Sin rol'}`)
      }
    }

    // ==================== RESUMEN ====================
    console.log('\n' + '='.repeat(60))
    console.log('📊 RESUMEN DE PRUEBAS DEL CRM')
    console.log('='.repeat(60))
    
    const tests = [
      { name: 'Clientes', error: customersError },
      { name: 'Productos', error: productsError },
      { name: 'Órdenes', error: ordersError },
      { name: 'Analytics', error: analyticsError },
      { name: 'Alertas', error: alertsError },
      { name: 'Campañas', error: campaignsError },
      { name: 'Tickets', error: ticketsError },
      { name: 'Notificaciones', error: notificationsError },
      { name: 'Roles', error: rolesError },
      { name: 'Usuarios', error: usersError }
    ]

    const passed = tests.filter(t => !t.error).length
    const failed = tests.filter(t => t.error).length

    console.log(`\n✅ Pruebas exitosas: ${passed}/10`)
    console.log(`❌ Pruebas fallidas: ${failed}/10`)
    
    if (failed > 0) {
      console.log('\n⚠️  TABLAS FALTANTES:')
      tests.filter(t => t.error).forEach(t => {
        console.log(`   - ${t.name}`)
      })
      console.log('\n💡 Ejecuta el script supabase-schema.sql en Supabase para crear las tablas faltantes')
    } else {
      console.log('\n🎉 ¡TODAS LAS FUNCIONES DEL CRM ESTÁN OPERATIVAS!')
    }

  } catch (error) {
    console.error('\n❌ Error general:', error.message)
  }
}

// Ejecutar pruebas
testCRMFunctions()
