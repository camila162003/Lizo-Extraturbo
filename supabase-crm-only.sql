-- SOLO LAS TABLAS NUEVAS PARA EL CRM (SIN BORRAR LAS EXISTENTES)
-- Ejecuta esto en Supabase SQL Editor

-- Enable UUID extension (si no está habilitada)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Customers table (NUEVA - para CRM)
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

-- Roles table (NUEVA - para CRM)
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

-- Users table (NUEVA - para CRM)
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

-- Support tickets table (NUEVA - para CRM)
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

-- Notifications table (NUEVA - para CRM)
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

-- System settings table (NUEVA - para CRM)
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

-- Analytics data table (NUEVA - para CRM)
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

-- Security alerts table (NUEVA - para CRM)
CREATE TABLE IF NOT EXISTS security_alerts (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    severity VARCHAR(20) DEFAULT 'low' CHECK (severity IN ('low', 'medium', 'high', 'critical')),
    ip_address INET,
    resolved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Marketing campaigns table (NUEVA - para CRM)
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

-- Agregar columnas al audit_log existente si no las tiene
DO $$ 
BEGIN 
    -- Verificar si ya tiene la estructura correcta
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'audit_log' AND column_name = 'operation'
    ) THEN 
        -- Agregar columnas faltantes
        ALTER TABLE audit_log ADD COLUMN IF NOT EXISTS operation VARCHAR(20);
        ALTER TABLE audit_log ADD COLUMN IF NOT EXISTS user_email VARCHAR(255);
        ALTER TABLE audit_log ADD COLUMN IF NOT EXISTS ip_address INET;
        ALTER TABLE audit_log ADD COLUMN IF NOT EXISTS user_agent TEXT;
        ALTER TABLE audit_log ADD COLUMN IF NOT EXISTS old_values JSONB;
        ALTER TABLE audit_log ADD COLUMN IF NOT EXISTS new_values JSONB;
        ALTER TABLE audit_log ADD COLUMN IF NOT EXISTS changed_fields TEXT[];
        ALTER TABLE audit_log ADD COLUMN IF NOT EXISTS session_id VARCHAR(255);
        ALTER TABLE audit_log ADD COLUMN IF NOT EXISTS api_endpoint VARCHAR(255);
        ALTER TABLE audit_log ADD COLUMN IF NOT EXISTS severity VARCHAR(20) DEFAULT 'info';
        ALTER TABLE audit_log ADD COLUMN IF NOT EXISTS success BOOLEAN DEFAULT TRUE;
        ALTER TABLE audit_log ADD COLUMN IF NOT EXISTS error_message TEXT;
        ALTER TABLE audit_log ADD COLUMN IF NOT EXISTS execution_time_ms INTEGER;
    END IF;
END $$;

-- Agregar columnas faltantes a products existente
DO $$ 
BEGIN 
    -- Agregar columnas que necesita el CRM
    ALTER TABLE products ADD COLUMN IF NOT EXISTS category VARCHAR(100) DEFAULT 'General';
    ALTER TABLE products ADD COLUMN IF NOT EXISTS sales_count INTEGER DEFAULT 0;
    ALTER TABLE products ADD COLUMN IF NOT EXISTS revenue DECIMAL(12,2) DEFAULT 0;
END $$;

-- INSERTAR DATOS DE EJEMPLO PARA EL CRM

-- Insert roles data
INSERT INTO roles (name, description, permissions, users_count, color) VALUES
('Super Admin', 'Acceso completo al sistema', ARRAY['create', 'read', 'update', 'delete', 'configure', 'admin'], 1, 'red'),
('Admin', 'Gestión de productos y clientes', ARRAY['create', 'read', 'update', 'reports'], 3, 'blue'),
('Vendedor', 'Gestión de ventas y clientes', ARRAY['read', 'create_sales', 'view_customers'], 8, 'green'),
('Soporte', 'Atención al cliente', ARRAY['read', 'update_tickets', 'chat'], 5, 'yellow'),
('Analista', 'Análisis y reportes', ARRAY['read', 'generate_reports', 'analytics'], 2, 'purple'),
('Invitado', 'Acceso limitado de solo lectura', ARRAY['read_only'], 12, 'gray')
ON CONFLICT (name) DO NOTHING;

-- Insert users data
INSERT INTO users (name, email, role_id, phone, is_active) 
SELECT 'Daniel Felipe Muñoz', 'munodanielfelipe8@gmail.com', r.id, '3025295978', true
FROM roles r WHERE r.name = 'Super Admin'
ON CONFLICT (email) DO NOTHING;

-- Insert system settings
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

-- Actualizar productos existentes con datos CRM
UPDATE products SET 
    category = CASE 
        WHEN name ILIKE '%secador%' THEN 'Secadores'
        WHEN name ILIKE '%barbero%' OR name ILIKE '%barber%' THEN 'Barbería'
        WHEN name ILIKE '%plancha%' THEN 'Planchas'
        WHEN name ILIKE '%tijera%' THEN 'Tijeras'
        WHEN name ILIKE '%cepillo%' THEN 'Cepillos'
        WHEN name ILIKE '%cortadora%' THEN 'Cortadoras'
        WHEN name ILIKE '%pinza%' THEN 'Pinzas'
        ELSE 'General'
    END,
    sales_count = FLOOR(RANDOM() * 50) + 10,
    revenue = price * (FLOOR(RANDOM() * 50) + 10)
WHERE category IS NULL OR sales_count IS NULL;

-- Insert sample analytics data
INSERT INTO analytics_data (date, visitors, page_views, sessions, conversion_rate, device_type, location) VALUES
(CURRENT_DATE - INTERVAL '30 days', 2847, 15692, 8934, 3.24, 'mobile', 'Colombia'),
(CURRENT_DATE - INTERVAL '29 days', 2654, 14523, 8234, 3.18, 'desktop', 'Colombia'),
(CURRENT_DATE - INTERVAL '28 days', 3012, 16789, 9456, 3.45, 'mobile', 'México'),
(CURRENT_DATE - INTERVAL '27 days', 2789, 15234, 8567, 3.28, 'tablet', 'Argentina'),
(CURRENT_DATE - INTERVAL '26 days', 2934, 16123, 9012, 3.52, 'mobile', 'Colombia'),
(CURRENT_DATE - INTERVAL '25 days', 3156, 17445, 9823, 3.67, 'desktop', 'Colombia');

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

-- Insert sample support tickets
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

-- Insert sample notifications
INSERT INTO notifications (title, message, type, is_read) VALUES
('Nuevo pedido recibido', 'Cliente Ana María González realizó un pedido por $280,000 COP', 'success', FALSE),
('Alerta de seguridad', 'Intento de acceso desde IP desconocida detectado', 'warning', FALSE),
('Campaña completada', 'Promoción Black Friday ha finalizado con 8.4% de conversión', 'info', TRUE),
('Producto agotado', 'Kit Barbero Elite Pro tiene solo 2 unidades restantes', 'warning', FALSE),
('Backup completado', 'Respaldo automático de base de datos realizado exitosamente', 'success', TRUE),
('Nueva reseña recibida', 'Cliente dejó una reseña de 5 estrellas para Secadora Premium', 'success', FALSE);

-- Enable RLS para las nuevas tablas
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE system_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE security_alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketing_campaigns ENABLE ROW LEVEL SECURITY;

-- Crear políticas básicas para acceso público (temporal para testing)
CREATE POLICY "Enable read access for all users" ON customers FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON customers FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON customers FOR UPDATE USING (true);

CREATE POLICY "Enable read access for all users" ON users FOR SELECT USING (true);
CREATE POLICY "Enable insert access for all users" ON users FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable update access for all users" ON users FOR UPDATE USING (true);

CREATE POLICY "Enable read access for all users" ON roles FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON support_tickets FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON notifications FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON system_settings FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON analytics_data FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON security_alerts FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON marketing_campaigns FOR SELECT USING (true);

-- Mensaje de éxito
SELECT 'CRM TABLES CREATED SUCCESSFULLY! 🎉' as status;