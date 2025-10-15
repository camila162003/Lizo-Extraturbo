// Verificar estructura de la tabla orders y sus constraints
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://qlgtbreqoyjhycpnbzoz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZ3RicmVxb3lqaHljcG5iem96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NTM0ODksImV4cCI6MjA3NTEyOTQ4OX0.l6Ez9esOCEUt-kqNmwwNjxu2o3daOBh--23a9Q_mh3w'

const supabase = createClient(supabaseUrl, supabaseKey)

async function debugDatabase() {
  console.log('🔍 DIAGNÓSTICO COMPLETO DE BASE DE DATOS\n')
  
  try {
    // 1. Verificar user_profiles con IDs exactos
    console.log('1️⃣ User Profiles con IDs:')
    const { data: profiles } = await supabase
      .from('user_profiles')
      .select('id, full_name, email')
    
    profiles?.forEach((profile, index) => {
      console.log(`   ${index + 1}. ID: ${profile.id} | ${profile.full_name} | ${profile.email}`)
    })
    
    // 2. Verificar productos con IDs exactos
    console.log('\n2️⃣ Productos con IDs:')
    const { data: products } = await supabase
      .from('products')
      .select('id, name, price')
      .limit(5)
    
    products?.forEach((product, index) => {
      console.log(`   ${index + 1}. ID: ${product.id} | ${product.name} | $${product.price}`)
    })
    
    // 3. Verificar órdenes existentes
    console.log('\n3️⃣ Órdenes existentes:')
    const { data: existingOrders } = await supabase
      .from('orders')
      .select('id, user_id, status, total')
      .limit(3)
    
    if (existingOrders && existingOrders.length > 0) {
      existingOrders.forEach((order, index) => {
        console.log(`   ${index + 1}. ID: ${order.id} | User: ${order.user_id} | ${order.status} | $${order.total}`)
      })
    } else {
      console.log('   No hay órdenes existentes')
    }
    
    // 4. Intentar crear UNA orden simple para testing
    console.log('\n4️⃣ Probando crear UNA orden simple...')
    
    if (profiles && profiles.length > 0 && products && products.length > 0) {
      const testUser = profiles[0]
      const testProduct = products[0]
      
      console.log(`   Usando User ID: ${testUser.id}`)
      console.log(`   Usando Product ID: ${testProduct.id}`)
      
      const testOrder = {
        user_id: testUser.id,
        status: 'pending',
        subtotal: testProduct.price,
        shipping: 15000,
        tax: testProduct.price * 0.19,
        discount: 0,
        total: testProduct.price + 15000 + (testProduct.price * 0.19),
        currency: 'COP',
        payment_status: 'pending',
        shipping_address: {
          name: testUser.full_name,
          address: 'Test Address',
          city: 'Bogotá',
          country: 'Colombia'
        },
        billing_address: {
          name: testUser.full_name,
          address: 'Test Address', 
          city: 'Bogotá',
          country: 'Colombia'
        },
        payment_method: {
          type: 'test'
        }
      }
      
      console.log('   Datos de orden:', JSON.stringify(testOrder, null, 2))
      
      const { data: createdOrder, error: orderError } = await supabase
        .from('orders')
        .insert([testOrder])
        .select('*')
      
      if (orderError) {
        console.log(`   ❌ Error: ${orderError.message}`)
        console.log(`   Código: ${orderError.code}`)
        console.log(`   Detalles: ${orderError.details}`)
        console.log(`   Hint: ${orderError.hint}`)
      } else {
        console.log(`   ✅ Orden creada exitosamente!`)
        console.log(`   ID: ${createdOrder[0].id}`)
        console.log(`   Total: $${createdOrder[0].total}`)
        
        // Ahora crear el order_item
        const orderItem = {
          order_id: createdOrder[0].id,
          product_id: testProduct.id,
          quantity: 1,
          unit_price: testProduct.price,
          subtotal: testProduct.price
        }
        
        const { data: createdItem, error: itemError } = await supabase
          .from('order_items')
          .insert([orderItem])
          .select('*')
        
        if (itemError) {
          console.log(`   ⚠️ Error creando item: ${itemError.message}`)
        } else {
          console.log(`   ✅ Order item creado también!`)
        }
      }
    }
    
    console.log('\n🎯 RESULTADO DEL DIAGNÓSTICO:')
    if (profiles?.length > 0 && products?.length > 0) {
      console.log('✅ Hay usuarios y productos disponibles')
      console.log('🔧 El problema debe estar en las políticas RLS o foreign keys')
    } else {
      console.log('❌ Faltan usuarios o productos')
    }
    
  } catch (error) {
    console.log('❌ Error en diagnóstico:', error.message)
  }
}

debugDatabase()