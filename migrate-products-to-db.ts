// 🎯 SCRIPT PARA MIGRAR PRODUCTOS DE real-products.ts A SUPABASE
// Ejecutar con: npx tsx migrate-products-to-db.ts

import { supabase, supabaseService } from './lib/supabase'
import { realProducts } from './lib/real-products'

async function migrateProducts() {
  console.log('🚀 Iniciando migración de productos a Supabase...\n')

  try {
    // 1. Limpiar productos existentes (opcional - comentar si quieres mantener los existentes)
    console.log('🗑️  Limpiando productos existentes...')
    const { error: deleteError } = await supabase
      .from('products')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000') // Eliminar todos
    
    if (deleteError) {
      console.warn('⚠️  No se pudieron eliminar productos existentes:', deleteError.message)
    } else {
      console.log('✅ Productos existentes eliminados\n')
    }

    // 2. Insertar productos de real-products.ts
    console.log(`📦 Insertando ${realProducts.length} productos...\n`)
    
    let successCount = 0
    let errorCount = 0

    for (const product of realProducts) {
      try {
        const { data, error } = await supabase
          .from('products')
          .insert([{
            // id: Se genera automáticamente con uuid_generate_v4()
            name: product.name,
            description: product.description,
            price: product.price,
            original_price: product.originalPrice,
            category: product.category,
            image_url: product.image,
            images: product.images, // JSONB array
            features: product.features, // JSONB array
            stock: product.inStock ? 50 : 0, // Stock inicial
            in_stock: product.inStock,
            featured: product.featured,
            bestseller: product.bestseller,
            rating: product.rating,
            reviews: product.reviews,
            sales_count: product.bestseller ? product.reviews : Math.floor(product.reviews / 2),
            revenue: product.price * (product.bestseller ? product.reviews : Math.floor(product.reviews / 2))
          }])
          .select()

        if (error) {
          console.error(`❌ Error insertando "${product.name}":`, error.message)
          errorCount++
        } else {
          console.log(`✅ [${successCount + 1}/${realProducts.length}] ${product.name}`)
          successCount++
        }
      } catch (err: any) {
        console.error(`❌ Error insertando "${product.name}":`, err.message)
        errorCount++
      }
    }

    // 3. Resumen
    console.log('\n' + '='.repeat(60))
    console.log('📊 RESUMEN DE MIGRACIÓN')
    console.log('='.repeat(60))
    console.log(`✅ Productos insertados: ${successCount}`)
    console.log(`❌ Errores: ${errorCount}`)
    console.log(`📦 Total procesados: ${realProducts.length}`)

    // 4. Verificar productos en la base de datos
    console.log('\n🔍 Verificando productos en la base de datos...')
    const products = await supabaseService.getProducts()
    console.log(`✅ Total de productos en DB: ${products?.length || 0}`)

    // 5. Mostrar productos destacados
    const featured = await supabaseService.getFeaturedProducts()
    console.log(`⭐ Productos destacados: ${featured?.length || 0}`)

    // 6. Mostrar bestsellers
    const bestsellers = await supabaseService.getBestsellers()
    console.log(`🔥 Best sellers: ${bestsellers?.length || 0}`)

    // 7. Productos por categoría
    const categories = ['Planchas', 'Secadores', 'Tijeras', 'Pinzas', 'Cepillos']
    console.log('\n📂 PRODUCTOS POR CATEGORÍA:')
    for (const category of categories) {
      const categoryProducts = await supabaseService.getProductsByCategory(category)
      console.log(`   ${category}: ${categoryProducts?.length || 0} productos`)
    }

    console.log('\n' + '='.repeat(60))
    console.log('✨ MIGRACIÓN COMPLETADA EXITOSAMENTE')
    console.log('='.repeat(60))
    console.log('\n💡 Próximo paso: Ejecutar extend-products-schema.sql en Supabase SQL Editor')
    console.log('💡 Luego actualizar app/page.tsx para usar supabaseService.getFeaturedProducts()\n')

  } catch (error: any) {
    console.error('\n❌ ERROR CRÍTICO EN LA MIGRACIÓN:', error.message)
    console.error(error)
    process.exit(1)
  }
}

// Ejecutar migración
migrateProducts()
  .then(() => {
    console.log('👋 Proceso finalizado')
    process.exit(0)
  })
  .catch((error) => {
    console.error('💥 Error fatal:', error)
    process.exit(1)
  })
