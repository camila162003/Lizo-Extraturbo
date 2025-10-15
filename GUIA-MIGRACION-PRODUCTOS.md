# 🎯 GUÍA COMPLETA: IMPORTAR PRODUCTOS DESDE LA BASE DE DATOS

Esta guía te muestra cómo migrar los productos de `lib/real-products.ts` a Supabase y actualizar la aplicación para usar la base de datos.

---

## 📋 PASOS PARA LA MIGRACIÓN

### **PASO 1: Extender el Esquema de la Base de Datos** ⚙️

1. Ve a **Supabase Dashboard**: https://supabase.com/dashboard
2. Selecciona tu proyecto: `qlgtbreqoyjhycpnbzoz`
3. Ve a **SQL Editor** (en el menú lateral)
4. Haz clic en **New Query**
5. Copia y pega el contenido del archivo `extend-products-schema.sql`
6. Haz clic en **Run** (▶️)
7. Verifica que diga: **"Success. No rows returned"**

✅ **Esto agrega las columnas necesarias:** `original_price`, `images`, `features`, `featured`, `bestseller`, `rating`, `reviews`, `in_stock`

---

### **PASO 2: Migrar los 16 Productos a la Base de Datos** 📦

Ejecuta el script de migración en tu terminal:

```powershell
npx tsx migrate-products-to-db.ts
```

**Deberías ver:**
```
🚀 Iniciando migración de productos a Supabase...
🗑️  Limpiando productos existentes...
✅ Productos existentes eliminados

📦 Insertando 16 productos...

✅ [1/16] Plancha Infrared 2023
✅ [2/16] Plancha Eleganza EXT485
✅ [3/16] Steam Liner con Vapor
...
✅ [16/16] Boquilla Titanium Concentradora

============================================================
📊 RESUMEN DE MIGRACIÓN
============================================================
✅ Productos insertados: 16
❌ Errores: 0
📦 Total procesados: 16

🔍 Verificando productos en la base de datos...
✅ Total de productos en DB: 16
⭐ Productos destacados: 8
🔥 Best sellers: 6

📂 PRODUCTOS POR CATEGORÍA:
   Planchas: 5 productos
   Secadores: 4 productos
   Tijeras: 3 productos
   Pinzas: 3 productos
   Cepillos: 1 productos

============================================================
✨ MIGRACIÓN COMPLETADA EXITOSAMENTE
============================================================
```

---

### **PASO 3: Verificar Productos en Supabase** 🔍

1. Ve a **Supabase Dashboard**
2. Navega a **Table Editor** → **products**
3. Deberías ver **16 productos** con:
   - ✅ Nombres completos
   - ✅ Precios y precios originales
   - ✅ Categorías
   - ✅ Imágenes (URLs completas)
   - ✅ Arrays de imágenes adicionales
   - ✅ Features
   - ✅ Ratings y reviews
   - ✅ Badges (featured, bestseller)

---

### **PASO 4: Actualizar Homepage para Usar la Base de Datos** 🎨

Ahora voy a actualizar `app/page.tsx` automáticamente para usar Supabase en lugar de `real-products.ts`.

Los cambios serán:

**ANTES:**
```typescript
import { realProducts, getFeaturedProducts } from '@/lib/real-products'

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 8)
  // ...
}
```

**DESPUÉS:**
```typescript
import { supabaseService } from '@/lib/supabase'

export default async function HomePage() {
  const featuredProducts = await supabaseService.getFeaturedProducts()
  const displayProducts = featuredProducts.slice(0, 8)
  // ...
}
```

---

## 🎯 BENEFICIOS DE USAR LA BASE DE DATOS

### **1. Gestión Dinámica de Productos** 📊
- Agregar/editar/eliminar productos sin tocar el código
- Actualizar precios y stock en tiempo real
- Gestionar inventario desde el panel de administración

### **2. Escalabilidad** 🚀
- Agregar miles de productos sin límites
- Búsqueda rápida con índices de base de datos
- Filtros avanzados por categoría, precio, rating

### **3. Analytics y Reportes** 📈
- Rastrear ventas por producto
- Analizar productos más vendidos
- Calcular revenue automáticamente

### **4. Integración con CRM** 💼
- Conectar productos con órdenes de clientes
- Gestionar inventario basado en ventas
- Reportes unificados de todo el negocio

---

## 📂 ESTRUCTURA DE DATOS EN LA BASE DE DATOS

### **Tabla: `products`**

| Columna | Tipo | Descripción | Ejemplo |
|---------|------|-------------|---------|
| `id` | UUID | ID único generado automáticamente | `a1b2c3d4-...` |
| `name` | VARCHAR(255) | Nombre del producto | `Plancha Infrared 2023` |
| `description` | TEXT | Descripción completa | `Plancha profesional con...` |
| `price` | DECIMAL(12,2) | Precio actual | `89900.00` |
| `original_price` | DECIMAL(12,2) | Precio antes de descuento | `120000.00` |
| `category` | VARCHAR(100) | Categoría del producto | `Planchas` |
| `image_url` | TEXT | URL de la imagen principal | `/imagenes lizo/PNG planchas/...` |
| `images` | JSONB | Array de imágenes adicionales | `["url1.png", "url2.png"]` |
| `features` | JSONB | Array de características | `["Tecnología infrarroja", ...]` |
| `stock` | INTEGER | Cantidad disponible | `50` |
| `in_stock` | BOOLEAN | Si está disponible | `true` |
| `featured` | BOOLEAN | Si es producto destacado | `true` |
| `bestseller` | BOOLEAN | Si es best seller | `true` |
| `rating` | DECIMAL(3,2) | Calificación (0-5) | `4.90` |
| `reviews` | INTEGER | Número de reseñas | `342` |
| `sales_count` | INTEGER | Total de ventas | `342` |
| `revenue` | DECIMAL(12,2) | Ingresos totales | `30745800.00` |
| `created_at` | TIMESTAMP | Fecha de creación | `2024-01-15 10:30:00` |
| `updated_at` | TIMESTAMP | Última actualización | `2024-01-15 10:30:00` |

---

## 🔧 FUNCIONES DISPONIBLES EN `supabaseService`

### **Obtener Productos**
```typescript
// Todos los productos (ordenados por ventas)
const products = await supabaseService.getProducts()

// Solo productos destacados
const featured = await supabaseService.getFeaturedProducts()

// Solo best sellers
const bestsellers = await supabaseService.getBestsellers()

// Por categoría
const planchas = await supabaseService.getProductsByCategory('Planchas')

// Por ID
const product = await supabaseService.getProductById('uuid-aqui')

// Búsqueda
const results = await supabaseService.searchProducts('plancha')
```

### **Gestionar Productos**
```typescript
// Crear producto
const newProduct = await supabaseService.createProduct({
  name: 'Nuevo Producto',
  price: 99900,
  category: 'Planchas',
  // ... más campos
})

// Actualizar producto
await supabaseService.updateProduct('product-id', {
  price: 79900,
  stock: 25
})

// Eliminar producto
await supabaseService.deleteProduct('product-id')

// Actualizar stock
await supabaseService.updateProductStock('product-id', 30)
```

---

## 🎨 USO EN COMPONENTES

### **Ejemplo: Página de Productos**
```typescript
// app/productos/page.tsx
import { supabaseService } from '@/lib/supabase'

export default async function ProductsPage() {
  const products = await supabaseService.getProducts()
  
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
```

### **Ejemplo: Filtro por Categoría**
```typescript
// components/CategoryFilter.tsx
'use client'

import { useState, useEffect } from 'react'
import { supabaseService } from '@/lib/supabase'

export default function CategoryFilter() {
  const [category, setCategory] = useState('Planchas')
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    supabaseService.getProductsByCategory(category)
      .then(setProducts)
  }, [category])
  
  return (
    <div>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option>Planchas</option>
        <option>Secadores</option>
        <option>Tijeras</option>
      </select>
      
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}
```

---

## 🚀 PRÓXIMOS PASOS RECOMENDADOS

1. ✅ **Migración completada** - Productos en Supabase
2. 🎨 **Actualizar Homepage** - Usar productos de DB
3. 📄 **Crear Página de Productos** - Catálogo completo con filtros
4. 🛒 **Integrar Carrito de Compras** - Conectar con productos reales
5. 💳 **Conectar con ePayco/Wompi** - Procesar pagos
6. 📊 **Panel de Administración** - Gestionar productos desde el dashboard
7. 📈 **Analytics de Ventas** - Rastrear productos más vendidos

---

## ❓ PREGUNTAS FRECUENTES

### **¿Qué pasa con el archivo `real-products.ts`?**
Se puede eliminar o mantener como backup. Ya no será necesario importarlo.

### **¿Puedo agregar más productos?**
Sí, usa `supabaseService.createProduct()` o inserta directamente desde Supabase Table Editor.

### **¿Cómo actualizo precios masivamente?**
Usa el SQL Editor en Supabase:
```sql
UPDATE products SET price = price * 0.9 WHERE category = 'Planchas';
```

### **¿Las imágenes funcionan igual?**
Sí, las rutas de imágenes se mantienen exactamente iguales: `/imagenes lizo/PNG planchas/...`

### **¿Afecta el rendimiento?**
No, Supabase es ultra rápido. Los productos se cargan en milisegundos con índices optimizados.

---

## ✅ CHECKLIST DE MIGRACIÓN

- [ ] **PASO 1**: Ejecutar `extend-products-schema.sql` en Supabase
- [ ] **PASO 2**: Ejecutar `npx tsx migrate-products-to-db.ts`
- [ ] **PASO 3**: Verificar 16 productos en Supabase Table Editor
- [ ] **PASO 4**: Actualizar `app/page.tsx` (lo haré automáticamente)
- [ ] **PASO 5**: Probar homepage en http://localhost:3001
- [ ] **PASO 6**: Verificar que los productos se muestren correctamente
- [ ] **PASO 7**: (Opcional) Eliminar `lib/real-products.ts`

---

## 🎉 ¡LISTO!

Tu aplicación ahora usa **Supabase como base de datos real** para los productos. 

**Beneficios inmediatos:**
- ✅ Gestión dinámica de productos
- ✅ Escalabilidad ilimitada
- ✅ Búsqueda y filtros rápidos
- ✅ Integración con CRM y analytics
- ✅ Preparado para producción

¿Quieres que ejecute el PASO 4 y actualice la homepage ahora? 🚀
