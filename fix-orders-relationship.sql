-- FIX: Arreglar relación entre Orders y Customers
-- Ejecuta esto en Supabase SQL Editor

-- 1. Primero verificar si la columna customer_id existe en orders
DO $$ 
BEGIN 
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'orders' AND column_name = 'customer_id'
    ) THEN 
        -- Si no existe, agregarla
        ALTER TABLE orders ADD COLUMN customer_id UUID;
        RAISE NOTICE 'Columna customer_id agregada a orders';
    ELSE
        RAISE NOTICE 'Columna customer_id ya existe en orders';
    END IF; 
END $$;

-- 2. Verificar si la columna product_id existe en orders
DO $$ 
BEGIN 
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'orders' AND column_name = 'product_id'
    ) THEN 
        -- Si no existe, agregarla
        ALTER TABLE orders ADD COLUMN product_id UUID;
        RAISE NOTICE 'Columna product_id agregada a orders';
    ELSE
        RAISE NOTICE 'Columna product_id ya existe en orders';
    END IF; 
END $$;

-- 3. Verificar si la columna quantity existe en orders
DO $$ 
BEGIN 
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'orders' AND column_name = 'quantity'
    ) THEN 
        -- Si no existe, agregarla
        ALTER TABLE orders ADD COLUMN quantity INTEGER DEFAULT 1;
        RAISE NOTICE 'Columna quantity agregada a orders';
    ELSE
        RAISE NOTICE 'Columna quantity ya existe en orders';
    END IF; 
END $$;

-- 4. Eliminar constraint existente si hay uno
DO $$
BEGIN
    -- Eliminar FK de customer_id si existe
    IF EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'orders_customer_id_fkey'
    ) THEN
        ALTER TABLE orders DROP CONSTRAINT orders_customer_id_fkey;
        RAISE NOTICE 'Constraint orders_customer_id_fkey eliminado';
    END IF;

    -- Eliminar FK de product_id si existe
    IF EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'orders_product_id_fkey'
    ) THEN
        ALTER TABLE orders DROP CONSTRAINT orders_product_id_fkey;
        RAISE NOTICE 'Constraint orders_product_id_fkey eliminado';
    END IF;
END $$;

-- 5. Crear Foreign Key constraints
ALTER TABLE orders 
ADD CONSTRAINT orders_customer_id_fkey 
FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE;

ALTER TABLE orders 
ADD CONSTRAINT orders_product_id_fkey 
FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE;

-- 6. Crear índices para mejorar el rendimiento
CREATE INDEX IF NOT EXISTS idx_orders_customer_id ON orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_orders_product_id ON orders(product_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at);

-- 7. Actualizar órdenes existentes (si las hay) para vincularlas con clientes
-- Esto es opcional y depende de tu estructura actual
UPDATE orders 
SET customer_id = (SELECT id FROM customers LIMIT 1)
WHERE customer_id IS NULL AND user_id IS NOT NULL;

-- 8. Verificación final
SELECT 
    'orders' as tabla,
    COUNT(*) as total_ordenes,
    COUNT(customer_id) as ordenes_con_cliente,
    COUNT(product_id) as ordenes_con_producto
FROM orders;

-- Mostrar relaciones creadas
SELECT
    tc.table_name, 
    kcu.column_name,
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
    ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage AS ccu
    ON ccu.constraint_name = tc.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY' 
    AND tc.table_name = 'orders';
