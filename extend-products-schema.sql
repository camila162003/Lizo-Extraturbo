-- 🎯 EXTENDER ESQUEMA DE PRODUCTOS PARA E-COMMERCE COMPLETO
-- Ejecutar esto en Supabase SQL Editor para agregar columnas faltantes

-- Agregar columnas de e-commerce a la tabla products
ALTER TABLE products 
  ADD COLUMN IF NOT EXISTS image_url TEXT,
  ADD COLUMN IF NOT EXISTS original_price DECIMAL(12,2),
  ADD COLUMN IF NOT EXISTS images JSONB DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS features JSONB DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS in_stock BOOLEAN DEFAULT true,
  ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS bestseller BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS rating DECIMAL(3,2) DEFAULT 4.5,
  ADD COLUMN IF NOT EXISTS reviews INTEGER DEFAULT 0;

-- Crear índices para mejorar el rendimiento
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured);
CREATE INDEX IF NOT EXISTS idx_products_bestseller ON products(bestseller);
CREATE INDEX IF NOT EXISTS idx_products_in_stock ON products(in_stock);
CREATE INDEX IF NOT EXISTS idx_products_rating ON products(rating DESC);

-- Ver estructura completa de la tabla
SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns
WHERE table_name = 'products'
ORDER BY ordinal_position;
