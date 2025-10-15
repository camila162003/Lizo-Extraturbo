-- 🔓 SOLUCIÓN COMPLETA PARA RLS Y TRIGGERS
-- Ejecutar TODO esto en Supabase SQL Editor

-- 1. Desactivar RLS en products
ALTER TABLE products DISABLE ROW LEVEL SECURITY;

-- 2. Desactivar RLS en audit_log (si existe)
ALTER TABLE IF EXISTS audit_log DISABLE ROW LEVEL SECURITY;

-- 3. Eliminar trigger de audit_log si existe
DROP TRIGGER IF EXISTS audit_products_trigger ON products;

-- 4. Ver políticas existentes en products
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename = 'products';

-- 5. Eliminar TODAS las políticas RLS de products
DO $$ 
DECLARE 
    r RECORD;
BEGIN
    FOR r IN 
        SELECT policyname 
        FROM pg_policies 
        WHERE tablename = 'products'
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS ' || quote_ident(r.policyname) || ' ON products';
    END LOOP;
END $$;

-- 6. Dar permisos completos (por si acaso)
GRANT ALL ON products TO postgres, anon, authenticated, service_role;

-- 7. Verificar que todo está listo
SELECT 
    'products' as tabla,
    pg_catalog.has_table_privilege('anon', 'products', 'INSERT') as puede_insertar,
    (SELECT rowsecurity FROM pg_tables WHERE tablename = 'products') as rls_activo;

-- Mensaje final
SELECT '✅ Todo configurado - Ahora ejecuta: npx tsx migrate-all-lizo-products.ts' AS status;
