-- 🔓 DESACTIVAR RLS Y PERMITIR INSERTS EN PRODUCTS
-- Ejecutar esto en Supabase SQL Editor

-- Desactivar Row Level Security para la tabla products
ALTER TABLE products DISABLE ROW LEVEL SECURITY;

-- Verificar que se desactivó
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'products';

-- Mensaje de confirmación
SELECT 'RLS desactivado para products - Ahora puedes insertar productos' AS status;
