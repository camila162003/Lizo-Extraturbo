-- Solución para políticas RLS en Supabase
-- Ejecuta esto en el SQL Editor de Supabase

-- 1. Crear políticas permisivas para la tabla orders existente
CREATE POLICY "Enable all operations for orders" ON orders FOR ALL USING (true) WITH CHECK (true);

-- 2. Si ya existe, eliminarla y recrearla
DROP POLICY IF EXISTS "Enable all operations for orders" ON orders;
CREATE POLICY "Enable all operations for orders" ON orders FOR ALL USING (true) WITH CHECK (true);

-- 3. También para order_items si existe
DROP POLICY IF EXISTS "Enable all operations for order_items" ON order_items;
CREATE POLICY "Enable all operations for order_items" ON order_items FOR ALL USING (true) WITH CHECK (true);

-- 4. Para user_profiles si tiene RLS habilitado
DROP POLICY IF EXISTS "Enable all operations for user_profiles" ON user_profiles;
CREATE POLICY "Enable all operations for user_profiles" ON user_profiles FOR ALL USING (true) WITH CHECK (true);

-- 5. Verificar que RLS esté habilitado pero con políticas permisivas
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Mensaje de confirmación
SELECT 'RLS POLICIES FIXED! Now you can insert orders.' as status;