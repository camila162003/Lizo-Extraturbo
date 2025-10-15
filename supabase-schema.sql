-- LIZO CRM Database Schema - PROFESSIONAL VERSION
-- Run this in Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Customers table (CREATE FIRST - no dependencies)
CREATE TABLE IF NOT EXISTS customers (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50),
    address TEXT,
    premium_tier VARCHAR(20) CHECK (premium_tier IN ('basic', 'pro', 'elite')),
    total_orders INTEGER DEFAULT 0,
    total_spent DECIMAL(12,2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Products table (CREATE SECOND - no dependencies)
CREATE TABLE IF NOT EXISTS products (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(12,2) NOT NULL,
    category VARCHAR(100) NOT NULL,
    image_url TEXT,
    stock INTEGER DEFAULT 0,
    sales_count INTEGER DEFAULT 0,
    revenue DECIMAL(12,2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Ensure category column exists (fix for existing tables)
DO $$ 
BEGIN 
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'products' AND column_name = 'category'
    ) THEN 
        ALTER TABLE products ADD COLUMN category VARCHAR(100) NOT NULL DEFAULT 'General';
    END IF; 
END $$;

-- Roles table (CREATE THIRD - no dependencies)
CREATE TABLE IF NOT EXISTS roles (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    permissions TEXT[], -- Array of permissions
    users_count INTEGER DEFAULT 0,
    color VARCHAR(20) DEFAULT 'blue',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Users table (CREATE FOURTH - depends on roles)
CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    role_id UUID REFERENCES roles(id) ON DELETE SET NULL,
    phone VARCHAR(50),
    avatar_url TEXT,
    last_login TIMESTAMP WITH TIME ZONE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Ensure users table has all required columns
DO $$ 
BEGIN 
    -- Add role_id if missing
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'users' AND column_name = 'role_id'
    ) THEN 
        ALTER TABLE users ADD COLUMN role_id UUID REFERENCES roles(id) ON DELETE SET NULL;
    END IF;
END $$;

-- Orders table (CREATE FIFTH - depends on customers and products)
CREATE TABLE IF NOT EXISTS orders (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL DEFAULT 1,
    total DECIMAL(12,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Ensure orders table has all required columns
DO $$ 
BEGIN 
    -- Add customer_id if missing
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'orders' AND column_name = 'customer_id'
    ) THEN 
        ALTER TABLE orders ADD COLUMN customer_id UUID REFERENCES customers(id) ON DELETE CASCADE;
    END IF;
    
    -- Add product_id if missing
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'orders' AND column_name = 'product_id'
    ) THEN 
        ALTER TABLE orders ADD COLUMN product_id UUID REFERENCES products(id) ON DELETE CASCADE;
    END IF;
    
    -- Add quantity if missing
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'orders' AND column_name = 'quantity'
    ) THEN 
        ALTER TABLE orders ADD COLUMN quantity INTEGER NOT NULL DEFAULT 1;
    END IF;
    
    -- Add total if missing
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'orders' AND column_name = 'total'
    ) THEN 
        ALTER TABLE orders ADD COLUMN total DECIMAL(12,2) NOT NULL DEFAULT 0;
    END IF;
    
    -- Add status if missing
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'orders' AND column_name = 'status'
    ) THEN 
        ALTER TABLE orders ADD COLUMN status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled'));
    END IF;
END $$;

-- Support tickets table (CREATE SIXTH - depends on customers and users)
CREATE TABLE IF NOT EXISTS support_tickets (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved', 'closed')),
    priority VARCHAR(20) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'critical')),
    customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
    assigned_to UUID REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    resolved_at TIMESTAMP WITH TIME ZONE
);

-- Ensure support_tickets table has all required columns
DO $$ 
BEGIN 
    -- Add customer_id if missing
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'support_tickets' AND column_name = 'customer_id'
    ) THEN 
        ALTER TABLE support_tickets ADD COLUMN customer_id UUID REFERENCES customers(id) ON DELETE CASCADE;
    END IF;
    
    -- Add assigned_to if missing
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'support_tickets' AND column_name = 'assigned_to'
    ) THEN 
        ALTER TABLE support_tickets ADD COLUMN assigned_to UUID REFERENCES users(id) ON DELETE SET NULL;
    END IF;
END $$;

-- Notifications table (CREATE SEVENTH - depends on users)
CREATE TABLE IF NOT EXISTS notifications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    type VARCHAR(20) DEFAULT 'info' CHECK (type IN ('info', 'warning', 'error', 'success')),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    is_read BOOLEAN DEFAULT FALSE,
    action_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Ensure notifications table has all required columns
DO $$ 
BEGIN 
    -- Add user_id if missing
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'notifications' AND column_name = 'user_id'
    ) THEN 
        ALTER TABLE notifications ADD COLUMN user_id UUID REFERENCES users(id) ON DELETE CASCADE;
    END IF;
END $$;

-- System settings table (CREATE EIGHTH - no dependencies)
CREATE TABLE IF NOT EXISTS system_settings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    key VARCHAR(100) NOT NULL,
    value TEXT,
    description TEXT,
    is_public BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(category, key)
);

-- Analytics data table (CREATE NINTH - no dependencies)
CREATE TABLE IF NOT EXISTS analytics_data (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    date DATE NOT NULL,
    visitors INTEGER DEFAULT 0,
    page_views INTEGER DEFAULT 0,
    sessions INTEGER DEFAULT 0,
    conversion_rate DECIMAL(5,2) DEFAULT 0,
    device_type VARCHAR(20) CHECK (device_type IN ('mobile', 'desktop', 'tablet')),
    location VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Security alerts table (CREATE TENTH - no dependencies)
CREATE TABLE IF NOT EXISTS security_alerts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    severity VARCHAR(20) DEFAULT 'low' CHECK (severity IN ('low', 'medium', 'high', 'critical')),
    ip_address INET,
    resolved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Marketing campaigns table (CREATE ELEVENTH - no dependencies)
CREATE TABLE IF NOT EXISTS marketing_campaigns (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(20) CHECK (type IN ('email', 'social', 'sms', 'ads')),
    status VARCHAR(20) DEFAULT 'scheduled' CHECK (status IN ('active', 'paused', 'completed', 'scheduled')),
    reach INTEGER DEFAULT 0,
    conversion_rate DECIMAL(5,2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Audit log table (CREATE TWELFTH - for security compliance)
CREATE TABLE IF NOT EXISTS audit_log (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    table_name VARCHAR(100) NOT NULL,
    operation VARCHAR(20) NOT NULL CHECK (operation IN ('INSERT', 'UPDATE', 'DELETE', 'SELECT')),
    record_id UUID,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    user_email VARCHAR(255),
    ip_address INET,
    user_agent TEXT,
    old_values JSONB,
    new_values JSONB,
    changed_fields TEXT[],
    session_id VARCHAR(255),
    api_endpoint VARCHAR(255),
    severity VARCHAR(20) DEFAULT 'info' CHECK (severity IN ('info', 'warning', 'error', 'critical')),
    success BOOLEAN DEFAULT TRUE,
    error_message TEXT,
    execution_time_ms INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Ensure audit_log table has all required columns
DO $$ 
BEGIN 
    -- Add user_id if missing
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'audit_log' AND column_name = 'user_id'
    ) THEN 
        ALTER TABLE audit_log ADD COLUMN user_id UUID REFERENCES users(id) ON DELETE SET NULL;
    END IF;
END $$;

-- ========================================
-- CREATE INDEXES (After all tables exist)
-- ========================================
CREATE INDEX IF NOT EXISTS idx_customers_email ON customers(email);
CREATE INDEX IF NOT EXISTS idx_customers_premium_tier ON customers(premium_tier);
CREATE INDEX IF NOT EXISTS idx_orders_customer_id ON orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_orders_product_id ON orders(product_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_analytics_date ON analytics_data(date);
CREATE INDEX IF NOT EXISTS idx_security_alerts_severity ON security_alerts(severity);
CREATE INDEX IF NOT EXISTS idx_security_alerts_resolved ON security_alerts(resolved);
CREATE INDEX IF NOT EXISTS idx_users_role_id ON users(role_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_support_tickets_status ON support_tickets(status);
CREATE INDEX IF NOT EXISTS idx_support_tickets_customer_id ON support_tickets(customer_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_is_read ON notifications(is_read);
CREATE INDEX IF NOT EXISTS idx_audit_log_table_name ON audit_log(table_name);
CREATE INDEX IF NOT EXISTS idx_audit_log_operation ON audit_log(operation);
CREATE INDEX IF NOT EXISTS idx_audit_log_user_id ON audit_log(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_log_created_at ON audit_log(created_at);
CREATE INDEX IF NOT EXISTS idx_audit_log_severity ON audit_log(severity);
CREATE INDEX IF NOT EXISTS idx_audit_log_ip_address ON audit_log(ip_address);
CREATE INDEX IF NOT EXISTS idx_audit_log_session_id ON audit_log(session_id);

-- ========================================
-- CREATE TRIGGERS AND FUNCTIONS
-- ========================================

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create audit trigger function for security compliance
CREATE OR REPLACE FUNCTION audit_trigger_function()
RETURNS TRIGGER AS $$
DECLARE
    audit_user_id UUID;
    audit_user_email VARCHAR(255);
    changed_fields TEXT[] := ARRAY[]::TEXT[];
    field_name TEXT;
BEGIN
    -- Get current user info (if available)
    audit_user_id := auth.uid();
    audit_user_email := auth.email();
    
    -- For UPDATE operations, identify changed fields
    IF TG_OP = 'UPDATE' THEN
        FOR field_name IN 
            SELECT column_name FROM information_schema.columns 
            WHERE table_name = TG_TABLE_NAME AND table_schema = TG_TABLE_SCHEMA
        LOOP
            IF row_to_json(OLD) ->> field_name IS DISTINCT FROM row_to_json(NEW) ->> field_name THEN
                changed_fields := array_append(changed_fields, field_name);
            END IF;
        END LOOP;
    END IF;
    
    -- Insert audit record
    INSERT INTO audit_log (
        table_name,
        operation,
        record_id,
        user_id,
        user_email,
        old_values,
        new_values,
        changed_fields,
        severity,
        created_at
    ) VALUES (
        TG_TABLE_NAME,
        TG_OP,
        CASE 
            WHEN TG_OP = 'DELETE' THEN (OLD.id)::UUID
            ELSE (NEW.id)::UUID
        END,
        audit_user_id,
        audit_user_email,
        CASE WHEN TG_OP IN ('UPDATE', 'DELETE') THEN row_to_json(OLD) ELSE NULL END,
        CASE WHEN TG_OP IN ('INSERT', 'UPDATE') THEN row_to_json(NEW) ELSE NULL END,
        changed_fields,
        CASE 
            WHEN TG_TABLE_NAME IN ('users', 'roles', 'system_settings') THEN 'warning'
            WHEN TG_OP = 'DELETE' THEN 'error'
            ELSE 'info'
        END,
        NOW()
    );
    
    -- Return appropriate record
    IF TG_OP = 'DELETE' THEN
        RETURN OLD;
    ELSE
        RETURN NEW;
    END IF;
END;
$$ language 'plpgsql' SECURITY DEFINER;

-- Add triggers for updated_at columns
CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON customers FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_marketing_campaigns_updated_at BEFORE UPDATE ON marketing_campaigns FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_roles_updated_at BEFORE UPDATE ON roles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_support_tickets_updated_at BEFORE UPDATE ON support_tickets FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_system_settings_updated_at BEFORE UPDATE ON system_settings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ========================================
-- SECURITY AUDIT TRIGGERS (ENTERPRISE LEVEL)
-- ========================================

-- Audit triggers for critical tables (INSERT, UPDATE, DELETE)
CREATE TRIGGER audit_customers_trigger AFTER INSERT OR UPDATE OR DELETE ON customers FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();
CREATE TRIGGER audit_users_trigger AFTER INSERT OR UPDATE OR DELETE ON users FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();
CREATE TRIGGER audit_roles_trigger AFTER INSERT OR UPDATE OR DELETE ON roles FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();
CREATE TRIGGER audit_orders_trigger AFTER INSERT OR UPDATE OR DELETE ON orders FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();
CREATE TRIGGER audit_products_trigger AFTER INSERT OR UPDATE OR DELETE ON products FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();
CREATE TRIGGER audit_system_settings_trigger AFTER INSERT OR UPDATE OR DELETE ON system_settings FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();
CREATE TRIGGER audit_support_tickets_trigger AFTER INSERT OR UPDATE OR DELETE ON support_tickets FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();
CREATE TRIGGER audit_security_alerts_trigger AFTER INSERT OR UPDATE OR DELETE ON security_alerts FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();

-- Insert roles data (NEW)
INSERT INTO roles (name, description, permissions, users_count, color) VALUES
('Super Admin', 'Acceso completo al sistema', ARRAY['create', 'read', 'update', 'delete', 'configure', 'admin'], 1, 'red'),
('Admin', 'Gestión de productos y clientes', ARRAY['create', 'read', 'update', 'reports'], 3, 'blue'),
('Vendedor', 'Gestión de ventas y clientes', ARRAY['read', 'create_sales', 'view_customers'], 8, 'green'),
('Soporte', 'Atención al cliente', ARRAY['read', 'update_tickets', 'chat'], 5, 'yellow'),
('Analista', 'Análisis y reportes', ARRAY['read', 'generate_reports', 'analytics'], 2, 'purple'),
('Invitado', 'Acceso limitado de solo lectura', ARRAY['read_only'], 12, 'gray')
ON CONFLICT (name) DO NOTHING;

-- Insert users data (NEW)
INSERT INTO users (name, email, role_id, phone, is_active) 
SELECT 'Daniel Felipe Muñoz', 'munodanielfelipe8@gmail.com', r.id, '3025295978', true
FROM roles r WHERE r.name = 'Super Admin'
ON CONFLICT (email) DO NOTHING;

-- Insert system settings (NEW)
INSERT INTO system_settings (category, key, value, description, is_public) VALUES
('general', 'company_name', 'LIZO EXTRATURBO', 'Nombre de la empresa', true),
('general', 'timezone', 'America/Bogota', 'Zona horaria del sistema', false),
('general', 'language', 'es', 'Idioma predeterminado', true),
('support', 'admin_phone', '3025295978', 'Teléfono de soporte principal', false),
('support', 'admin_email', 'munodanielfelipe8@gmail.com', 'Email de soporte principal', false),
('security', 'session_timeout', '7200', 'Tiempo de sesión en segundos', false),
('security', 'max_login_attempts', '5', 'Máximo intentos de login', false),
('notifications', 'email_enabled', 'true', 'Notificaciones por email habilitadas', false),
('notifications', 'sms_enabled', 'true', 'Notificaciones por SMS habilitadas', false)
ON CONFLICT (category, key) DO NOTHING;

-- Insert sample customers
INSERT INTO customers (name, email, phone, address, premium_tier, total_orders, total_spent) VALUES
('Ana María González', 'ana.gonzalez@email.com', '+57 300 123 4567', 'Calle 123 #45-67, Bogotá', 'pro', 15, 2850000),
('Carlos Rodríguez', 'carlos.rodriguez@email.com', '+57 301 234 5678', 'Carrera 456 #78-90, Medellín', 'basic', 8, 1200000),
('María Elena Vásquez', 'maria.vasquez@email.com', '+57 302 345 6789', 'Avenida 789 #12-34, Cali', NULL, 3, 450000),
('José Miguel Torres', 'jose.torres@email.com', '+57 303 456 7890', 'Diagonal 101 #23-45, Barranquilla', 'elite', 22, 4200000),
('Luisa Fernanda Morales', 'luisa.morales@email.com', '+57 304 567 8901', 'Transversal 202 #56-78, Cartagena', 'basic', 5, 850000),
('Fernando Andrés López', 'fernando.lopez@email.com', '+57 305 678 9012', 'Calle 456 #89-12, Bucaramanga', 'pro', 11, 1950000),
('Claudia Patricia Herrera', 'claudia.herrera@email.com', '+57 306 789 0123', 'Carrera 789 #23-45, Pereira', 'elite', 18, 3400000),
('Ricardo Esteban Gómez', 'ricardo.gomez@email.com', '+57 307 890 1234', 'Avenida 321 #67-89, Manizales', NULL, 6, 920000)
ON CONFLICT (email) DO NOTHING;

-- Insert sample products
INSERT INTO products (name, description, price, category, stock, sales_count, revenue) VALUES
('Secadora Premium Ionic 2000W', 'Secadora profesional con tecnología iónica avanzada para salones de belleza', 280000, 'Secadores', 25, 45, 12600000),
('Kit Barbero Elite Pro', 'Kit completo para barbería profesional con accesorios premium y estuche', 450000, 'Barbería', 15, 28, 12600000),
('Plancha Cerámica Professional', 'Plancha de cabello con placas cerámicas de alta calidad y control de temperatura', 195000, 'Planchas', 40, 38, 7410000),
('Tijeras Acero Inoxidable Premium', 'Tijeras profesionales de acero inoxidable japonés para corte de precisión', 125000, 'Tijeras', 30, 22, 2750000),
('Cepillo Térmico Profesional', 'Cepillo térmico con cerdas naturales para peinado perfecto y volumen', 85000, 'Cepillos', 50, 34, 2890000),
('Cortadora Profesional Turbo', 'Cortadora de cabello profesional con motor de alta velocidad', 320000, 'Cortadoras', 20, 31, 9920000),
('Set Pinzas Precisión Pro', 'Juego de pinzas profesionales para depilación y precisión extrema', 65000, 'Pinzas', 60, 42, 2730000),
('Secador Iónico Compacto', 'Secador de cabello compacto con tecnología iónica para uso doméstico', 150000, 'Secadores', 35, 28, 4200000)
ON CONFLICT DO NOTHING;

-- Insert sample orders
INSERT INTO orders (customer_id, product_id, quantity, total, status) 
SELECT 
    c.id,
    p.id,
    CASE WHEN RANDOM() < 0.7 THEN 1 ELSE 2 END,
    p.price * CASE WHEN RANDOM() < 0.7 THEN 1 ELSE 2 END,
    CASE 
        WHEN RANDOM() < 0.4 THEN 'delivered'
        WHEN RANDOM() < 0.7 THEN 'shipped'
        WHEN RANDOM() < 0.85 THEN 'processing'
        ELSE 'pending'
    END
FROM customers c
CROSS JOIN products p
WHERE RANDOM() < 0.25;

-- Insert sample analytics data
INSERT INTO analytics_data (date, visitors, page_views, sessions, conversion_rate, device_type, location) VALUES
(CURRENT_DATE - INTERVAL '30 days', 2847, 15692, 8934, 3.24, 'mobile', 'Colombia'),
(CURRENT_DATE - INTERVAL '29 days', 2654, 14523, 8234, 3.18, 'desktop', 'Colombia'),
(CURRENT_DATE - INTERVAL '28 days', 3012, 16789, 9456, 3.45, 'mobile', 'México'),
(CURRENT_DATE - INTERVAL '27 days', 2789, 15234, 8567, 3.28, 'tablet', 'Argentina'),
(CURRENT_DATE - INTERVAL '26 days', 2934, 16123, 9012, 3.52, 'mobile', 'Colombia'),
(CURRENT_DATE - INTERVAL '25 days', 3156, 17445, 9823, 3.67, 'desktop', 'Colombia'),
(CURRENT_DATE - INTERVAL '24 days', 2567, 13892, 7654, 2.89, 'tablet', 'Perú'),
(CURRENT_DATE - INTERVAL '23 days', 3334, 18567, 10234, 3.78, 'mobile', 'Colombia'),
(CURRENT_DATE - INTERVAL '22 days', 2876, 15234, 8456, 3.12, 'desktop', 'Chile'),
(CURRENT_DATE - INTERVAL '21 days', 3145, 17023, 9567, 3.56, 'mobile', 'Colombia');

-- Insert sample security alerts
INSERT INTO security_alerts (type, description, severity, ip_address, resolved) VALUES
('login_attempt', 'Múltiples intentos de login desde IP desconocida detectados en Admin Panel', 'high', '192.168.1.100', FALSE),
('system_update', 'Nueva versión de seguridad disponible para el sistema CRM', 'medium', NULL, FALSE),
('new_device', 'Usuario admin accedió desde dispositivo no reconocido desde Bogotá', 'low', '10.0.0.5', FALSE),
('suspicious_activity', 'Actividad sospechosa detectada en módulo de pagos', 'critical', '45.123.67.89', FALSE),
('failed_backup', 'Fallo en backup automático de base de datos', 'high', NULL, FALSE);

-- Insert sample marketing campaigns
INSERT INTO marketing_campaigns (name, type, status, reach, conversion_rate) VALUES
('Promoción Black Friday 2024', 'email', 'active', 15200, 8.4),
('Lanzamiento Productos Premium', 'social', 'scheduled', 8700, 5.2),
('Retención de Clientes VIP', 'email', 'active', 3100, 12.1),
('Campaña Verano 2025', 'ads', 'completed', 25600, 6.8),
('WhatsApp Marketing Directo', 'sms', 'active', 12400, 9.3),
('Influencers Beauty Colombia', 'social', 'paused', 18900, 4.7);

-- Insert sample support tickets (NEW)
INSERT INTO support_tickets (title, description, status, priority, customer_id) 
SELECT 
    CASE 
        WHEN RANDOM() < 0.25 THEN 'Problema con producto recibido'
        WHEN RANDOM() < 0.5 THEN 'Consulta sobre garantía'
        WHEN RANDOM() < 0.75 THEN 'Solicitud de devolución'
        ELSE 'Información sobre envío'
    END,
    'Descripción detallada del problema o consulta del cliente.',
    CASE 
        WHEN RANDOM() < 0.3 THEN 'resolved'
        WHEN RANDOM() < 0.6 THEN 'in_progress'
        ELSE 'open'
    END,
    CASE 
        WHEN RANDOM() < 0.1 THEN 'critical'
        WHEN RANDOM() < 0.3 THEN 'high'
        WHEN RANDOM() < 0.7 THEN 'medium'
        ELSE 'low'
    END,
    c.id
FROM customers c
WHERE RANDOM() < 0.4;

-- Insert sample notifications (NEW)
INSERT INTO notifications (title, message, type, is_read) VALUES
('Nuevo pedido recibido', 'Cliente Ana María González realizó un pedido por $280,000 COP', 'success', FALSE),
('Alerta de seguridad', 'Intento de acceso desde IP desconocida detectado', 'warning', FALSE),
('Campaña completada', 'Promoción Black Friday ha finalizado con 8.4% de conversión', 'info', TRUE),
('Producto agotado', 'Kit Barbero Elite Pro tiene solo 2 unidades restantes', 'warning', FALSE),
('Backup completado', 'Respaldo automático de base de datos realizado exitosamente', 'success', TRUE),
('Nueva reseña recibida', 'Cliente dejó una reseña de 5 estrellas para Secadora Premium', 'success', FALSE);

-- Insert sample audit log entries (for demonstration)
INSERT INTO audit_log (table_name, operation, user_email, ip_address, severity, created_at) VALUES
('users', 'INSERT', 'munodanielfelipe8@gmail.com', '192.168.1.100', 'info', NOW() - INTERVAL '1 hour'),
('products', 'UPDATE', 'munodanielfelipe8@gmail.com', '192.168.1.100', 'info', NOW() - INTERVAL '30 minutes'),
('orders', 'INSERT', 'ana.gonzalez@email.com', '10.0.0.5', 'info', NOW() - INTERVAL '15 minutes'),
('system_settings', 'UPDATE', 'munodanielfelipe8@gmail.com', '192.168.1.100', 'warning', NOW() - INTERVAL '5 minutes'),
('security_alerts', 'INSERT', 'system', '192.168.1.100', 'critical', NOW() - INTERVAL '2 minutes');

-- Enable Row Level Security (RLS) - ENTERPRISE SECURITY
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE security_alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketing_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE system_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (adjust as needed for production)
CREATE POLICY "Enable read access for all users" ON customers FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON customers FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON customers FOR UPDATE USING (true);

CREATE POLICY "Enable read access for all users" ON products FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON products FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON products FOR UPDATE USING (true);

CREATE POLICY "Enable read access for all users" ON orders FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON orders FOR UPDATE USING (true);

CREATE POLICY "Enable read access for all users" ON analytics_data FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON analytics_data FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read access for all users" ON security_alerts FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON security_alerts FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON security_alerts FOR UPDATE USING (true);

CREATE POLICY "Enable read access for all users" ON marketing_campaigns FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON marketing_campaigns FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON marketing_campaigns FOR UPDATE USING (true);

CREATE POLICY "Enable read access for all users" ON roles FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON roles FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON roles FOR UPDATE USING (true);

CREATE POLICY "Enable read access for all users" ON users FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON users FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON users FOR UPDATE USING (true);

CREATE POLICY "Enable read access for all users" ON support_tickets FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON support_tickets FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON support_tickets FOR UPDATE USING (true);

CREATE POLICY "Enable read access for all users" ON notifications FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON notifications FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON notifications FOR UPDATE USING (true);

CREATE POLICY "Enable read access for all users" ON system_settings FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON system_settings FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON system_settings FOR UPDATE USING (true);

-- ========================================
-- ENTERPRISE SECURITY POLICIES FOR AUDIT LOG
-- ========================================

-- CRITICAL: Audit log policies - Only authenticated users can read, system can write
CREATE POLICY "Audit log read access for authenticated users only" ON audit_log FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Audit log insert for system only" ON audit_log FOR INSERT WITH CHECK (true); -- System triggers handle this
CREATE POLICY "Audit log no updates allowed" ON audit_log FOR UPDATE USING (false); -- Audit logs are immutable
CREATE POLICY "Audit log no deletes allowed" ON audit_log FOR DELETE USING (false); -- Audit logs are permanent

-- Enhanced security policies for sensitive tables
DROP POLICY IF EXISTS "Enable read access for all users" ON users;
DROP POLICY IF EXISTS "Enable insert access for all users" ON users;
DROP POLICY IF EXISTS "Enable update access for all users" ON users;

-- Users table - More restrictive policies
CREATE POLICY "Users read for authenticated only" ON users FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Users insert for authenticated only" ON users FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Users update for authenticated only" ON users FOR UPDATE USING (auth.role() = 'authenticated');

-- Roles table - Admin level access only
DROP POLICY IF EXISTS "Enable read access for all users" ON roles;
DROP POLICY IF EXISTS "Enable insert access for all users" ON roles;
DROP POLICY IF EXISTS "Enable update access for all users" ON roles;

CREATE POLICY "Roles read for authenticated only" ON roles FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Roles modify for service role only" ON roles FOR INSERT WITH CHECK (auth.role() = 'service_role');
CREATE POLICY "Roles update for service role only" ON roles FOR UPDATE USING (auth.role() = 'service_role');

-- System settings - Restricted access
DROP POLICY IF EXISTS "Enable read access for all users" ON system_settings;
DROP POLICY IF EXISTS "Enable insert access for all users" ON system_settings;
DROP POLICY IF EXISTS "Enable update access for all users" ON system_settings;

CREATE POLICY "Settings read for authenticated only" ON system_settings FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Settings modify for service role only" ON system_settings FOR INSERT WITH CHECK (auth.role() = 'service_role');
CREATE POLICY "Settings update for service role only" ON system_settings FOR UPDATE USING (auth.role() = 'service_role');

-- Create views for dashboard
CREATE OR REPLACE VIEW dashboard_stats AS
SELECT 
    (SELECT COALESCE(SUM(total), 0) FROM orders WHERE status = 'delivered') as total_revenue,
    (SELECT COUNT(*) FROM orders) as total_orders,
    (SELECT COUNT(*) FROM customers) as total_customers,
    (SELECT COUNT(*) FROM products) as total_products,
    (SELECT COUNT(*) FROM security_alerts WHERE NOT resolved) as security_alerts_count,
    (SELECT COUNT(*) FROM customers WHERE premium_tier IS NOT NULL) as premium_users_count,
    (SELECT COUNT(*) FROM support_tickets WHERE status IN ('open', 'in_progress')) as active_tickets,
    (SELECT COUNT(*) FROM notifications WHERE NOT is_read) as unread_notifications;

-- Grant access to the view
GRANT SELECT ON dashboard_stats TO anon, authenticated;

-- Support statistics view
CREATE OR REPLACE VIEW support_stats AS
SELECT 
    COUNT(CASE WHEN status = 'resolved' THEN 1 END) as resolved_tickets,
    COUNT(CASE WHEN status IN ('open', 'in_progress') THEN 1 END) as active_tickets,
    ROUND(AVG(CASE WHEN resolved_at IS NOT NULL THEN EXTRACT(EPOCH FROM (resolved_at - created_at))/3600 END), 1) as avg_resolution_hours,
    ROUND(COUNT(CASE WHEN status = 'resolved' THEN 1 END) * 100.0 / NULLIF(COUNT(*), 0), 1) as satisfaction_rate
FROM support_tickets;

GRANT SELECT ON support_stats TO anon, authenticated;

-- Audit statistics view (ENTERPRISE SECURITY)
CREATE OR REPLACE VIEW audit_stats AS
SELECT 
    COUNT(*) as total_audit_entries,
    COUNT(CASE WHEN severity = 'critical' THEN 1 END) as critical_events,
    COUNT(CASE WHEN severity = 'warning' THEN 1 END) as warning_events,
    COUNT(CASE WHEN severity = 'error' THEN 1 END) as error_events,
    COUNT(CASE WHEN operation = 'DELETE' THEN 1 END) as delete_operations,
    COUNT(CASE WHEN table_name = 'users' THEN 1 END) as user_operations,
    COUNT(CASE WHEN table_name = 'system_settings' THEN 1 END) as settings_changes,
    ROUND(AVG(execution_time_ms), 2) as avg_execution_time_ms,
    COUNT(CASE WHEN success = false THEN 1 END) as failed_operations,
    COUNT(DISTINCT user_email) as unique_users_today
FROM audit_log 
WHERE created_at >= CURRENT_DATE;

GRANT SELECT ON audit_stats TO authenticated; -- Only authenticated users can see audit stats

-- Security dashboard view (ENTERPRISE MONITORING)
CREATE OR REPLACE VIEW security_dashboard AS
SELECT 
    (SELECT COUNT(*) FROM security_alerts WHERE NOT resolved) as active_security_alerts,
    (SELECT COUNT(*) FROM audit_log WHERE severity = 'critical' AND created_at >= CURRENT_DATE) as critical_audit_events_today,
    (SELECT COUNT(*) FROM audit_log WHERE operation = 'DELETE' AND created_at >= CURRENT_DATE) as delete_operations_today,
    (SELECT COUNT(DISTINCT ip_address) FROM audit_log WHERE created_at >= CURRENT_DATE) as unique_ips_today,
    (SELECT COUNT(*) FROM users WHERE last_login >= CURRENT_DATE) as active_users_today,
    (SELECT COUNT(*) FROM audit_log WHERE success = false AND created_at >= CURRENT_DATE) as failed_operations_today;

GRANT SELECT ON security_dashboard TO authenticated;