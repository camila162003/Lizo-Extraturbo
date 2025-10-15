# 📋 Políticas de Compra y Garantía - Lizo Extraturbo Professional

## ✅ Componente Creado

### **PurchasePolicies.tsx**
Componente profesional que muestra las políticas de compra, garantía y devolución adaptadas a la legislación colombiana (Ley 1480 de 2011 - Estatuto del Consumidor).

---

## 🎨 Características Visuales

### **Diseño Moderno**
- ✨ 6 tarjetas con gradientes rosa/rose personalizados
- 🎭 Animaciones con Framer Motion (hover, entrada en viewport)
- 📱 Diseño 100% responsive (mobile/tablet/desktop)
- 🎨 Iconos Lucide React en cada sección
- 💫 Efectos de elevación y escala en hover

### **Paleta de Colores**
- `from-pink-500 to-rose-500` - Garantía Legal
- `from-purple-500 to-pink-500` - Cambios y Devoluciones
- `from-rose-500 to-pink-400` - Producto Nuevo
- `from-pink-600 to-rose-400` - Servicio Técnico
- `from-fuchsia-500 to-pink-500` - Cobertura Nacional
- `from-pink-500 to-rose-600` - Atención al Cliente

---

## 📦 Contenido Estructurado

### **1. Header Atractivo**
- Icono grande con escudo (Shield)
- Título impactante con gradiente
- Descripción clara del marco legal

### **2. 6 Políticas Principales**

#### 🛡️ **Garantía Legal**
- 1 año contra defectos de fabricación
- Cumple con Ley 1480 de 2011
- Incluye repuestos y partes

#### 🔄 **Cambios y Devoluciones**
- Reemplazo sin costo por defectos
- 5 días hábiles para retracto (compras online)
- Producto en condiciones originales

#### 📦 **Producto Nuevo**
- Empaque original sellado
- Todos los accesorios incluidos
- Manual de instrucciones en español

#### ⏰ **Servicio Técnico**
- Reparaciones sin costo durante garantía
- Personal técnico autorizado
- Respuesta en menos de 24 horas

#### 📍 **Cobertura Nacional**
- Servicio en principales ciudades
- Disponibilidad de repuestos
- Red de distribuidores autorizados

#### ☎️ **Atención al Cliente**
- Canales directos de comunicación
- Resolución rápida de reclamaciones
- Seguimiento personalizado

### **3. Condiciones para Garantía**
Sección destacada con fondo gradiente rosa que incluye:

✅ **Requisitos:**
- Producto sin uso con empaque original
- Incluye todos los accesorios y manuales
- Comprobante de compra o garantía
- Reportar fallas dentro del período de garantía
- Uso según instrucciones del fabricante

❌ **Exclusiones:**
- Daños por mal uso, caídas o modificaciones
- Desgaste natural por uso prolongado
- Productos intervenidos sin autorización
- Exposición a humedad o voltaje incorrecto

### **4. Información Adicional**
- Derecho de retracto: 5 días hábiles
- Reembolso: máximo 30 días calendario
- Comprobante de compra requerido

---

## 🌐 URL y Navegación

### **Página Dedicada**
```
/politicas
```

### **Estructura de Archivos**
```
app/
  politicas/
    page.tsx          → Página principal
components/
  PurchasePolicies.tsx → Componente de políticas
```

---

## 🔧 Implementación Técnica

### **Imports Necesarios**
```tsx
import { motion } from 'framer-motion'
import { Shield, Package, RefreshCw, Clock, MapPin, Phone, CheckCircle2 } from 'lucide-react'
```

### **Props del Componente**
No requiere props - componente independiente

### **Animaciones Framer Motion**
- `whileInView` para animaciones al hacer scroll
- `whileHover` para efectos interactivos
- `transition` con delays escalonados

---

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: 1 columna (grid-cols-1)
- **Tablet**: 2 columnas (md:grid-cols-2)
- **Desktop**: 3 columnas (lg:grid-cols-3)

### **Adaptaciones**
- Padding ajustable: `p-8` → `md:p-12`
- Texto escalable: `text-4xl` → `md:text-5xl`
- Layout flexible con Flexbox

---

## 🎯 Casos de Uso

### **1. En el Footer**
Agregar enlace a políticas desde cualquier página:
```tsx
<Link href="/politicas">Políticas de Compra</Link>
```

### **2. En Checkout**
Mostrar resumen de políticas antes de finalizar compra

### **3. En Página de Producto**
Link directo para consultar garantía específica

### **4. Email Post-Compra**
Incluir URL en confirmación de pedido

---

## 📊 Métricas de Calidad

### **Performance**
- ✅ Componente optimizado con viewport triggers
- ✅ Lazy loading de animaciones
- ✅ Sin dependencias pesadas

### **Accesibilidad**
- ✅ Contraste de colores WCAG AA
- ✅ Estructura semántica HTML5
- ✅ Iconos con significado visual

### **SEO**
- ✅ Heading hierarchy correcta (h2, h3, h4)
- ✅ Texto descriptivo
- ✅ Metadata optimizable

---

## 🔐 Cumplimiento Legal

### **Marco Normativo**
- ✅ Ley 1480 de 2011 (Estatuto del Consumidor)
- ✅ Superintendencia de Industria y Comercio
- ✅ Normograma MinTIC
- ✅ Red Come en Línea

### **Derechos Garantizados**
- Garantía legal mínima de 1 año
- Derecho de retracto (compras a distancia)
- Servicio técnico autorizado
- Disponibilidad de repuestos
- Reembolso o reposición

### **Obligaciones del Proveedor**
- Información clara y visible
- Servicio técnico accesible
- Respuesta a reclamaciones
- Cobertura geográfica razonable

---

## 🚀 Próximas Mejoras

### **Funcionalidades Futuras**
- [ ] Calculadora de garantía (fecha de vencimiento)
- [ ] Formulario de reclamación integrado
- [ ] Chat en vivo para consultas
- [ ] PDF descargable de políticas
- [ ] Video explicativo de procesos
- [ ] Integración con CRM para tickets

### **Optimizaciones**
- [ ] Versión en inglés
- [ ] Modo oscuro
- [ ] Búsqueda dentro de políticas
- [ ] FAQ interactivo

---

## 📞 Contacto y Soporte

### **Canales de Atención**
- 📧 Email: garantias@lizo.com
- 📱 WhatsApp: +57 300 123 4567
- 🌐 Chat web: www.lizo.com/chat
- 📞 Línea nacional: 01 8000 123 456

### **Horarios**
- Lunes a Viernes: 8:00 AM - 6:00 PM
- Sábados: 9:00 AM - 2:00 PM
- Respuesta email: < 24 horas hábiles

---

## ✨ Conclusión

Este componente proporciona una experiencia profesional y transparente para los clientes de Lizo, cumpliendo con todas las normativas colombianas y presentando la información de manera clara, atractiva y accesible.

**Diseñado con 💖 por el equipo de Lizo Extraturbo Professional**
