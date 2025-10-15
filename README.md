# 🌟 Lizo Belleza - Plataforma eCommerce + CRM

Una plataforma completa de comercio electrónico y CRM administrativo para productos de belleza, spa y barbería profesional.

## ✨ Características Principales

### 🎨 Diseño Visual Impactante
- **Paleta de colores**: Blanco + rojo vino/morado elegante
- **Animaciones suaves**: Hover effects, transiciones de opacidad, partículas animadas
- **Tipografía moderna**: Montserrat y Poppins
- **Efectos glassmorphism**: Fondos difuminados y reflejos suaves
- **Responsive design**: Adaptable a todos los dispositivos

### 🏪 Módulos Principales

#### 🏠 **Landing Page**
- Hero con modelo sosteniendo herramientas profesionales
- Banner rotatorio con 3 slides (belleza, barbería, spa)
- Sección "Lo más vendido" y "Nuevos lanzamientos"
- Carrusel de categorías con miniaturas animadas

#### 🛍️ **Catálogo de Productos**
- Tarjetas con hover animado e imagen ampliada
- Filtros dinámicos por categoría
- Vista detallada con galería de imágenes
- Sistema de carrito y checkout

#### 👤 **Sistema de Autenticación**
- Login/Registro con tabs animados
- Fondo parallax con efectos blur
- Integración con redes sociales
- Validaciones en tiempo real

#### 💼 **CRM Administrativo**
- Gestión completa de clientes con fichas individuales
- Historial de compras y notas personalizadas
- Gráficos de ventas mensuales y clientes activos
- Control de stock con alertas visuales

#### 🤖 **Chat IA (Beta)**
- Burbuja flotante con animación de pulso
- Respuestas predefinidas para consejos básicos
- Interfaz de chat moderna con burbujas
- Mensaje inicial personalizado

### 🎯 Categorías Especializadas

#### ✂️ **Barbería**
- Estética masculina con tonos oscuros
- Textura metálica y diseño varonil
- Productos: máquinas, tijeras, navajas, aceites

#### 💅 **Belleza**
- Tonos claros, neutros y suaves
- Ambiente elegante y sofisticado
- Productos: secadores, planchas, cepillos

#### 🧘 **Spa**
- Colores relajantes y naturales
- Enfoque en bienestar y tranquilidad
- Productos especializados en relajación

## 🚀 Tecnologías Utilizadas

- **Framework**: Next.js 14 with App Router
- **Lenguaje**: TypeScript
- **Styling**: TailwindCSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Base de datos**: Supabase
- **Autenticación**: Supabase Auth
- **Pagos**: ePayco (modo sandbox)
- **Notificaciones**: React Hot Toast

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Cuenta de Supabase (configurada en .env)

### Pasos de instalación

1. **Clonar o usar los archivos existentes**
```bash
cd "Lizo Belleza Diseño Final"
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
El archivo `.env` ya está configurado con:
- Supabase URL y claves
- ePayco en modo test
- Configuraciones de desarrollo

4. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

5. **Abrir en el navegador**
```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
lizo-belleza-platform/
├── app/                          # App Router de Next.js
│   ├── globals.css              # Estilos globales y utilidades
│   ├── layout.tsx               # Layout principal con navegación
│   ├── page.tsx                 # Página de inicio
│   ├── login/
│   │   └── page.tsx            # Página de autenticación
│   └── barberia/
│       └── page.tsx            # Página especializada barbería
├── components/                   # Componentes reutilizables
│   ├── NavBar.tsx              # Navegación principal
│   ├── Footer.tsx              # Pie de página
│   ├── HeroSection.tsx         # Sección hero principal
│   ├── ChatBot.tsx             # Chat IA con burbujas
│   ├── CategoriesCarousel.tsx  # Carrusel de categorías
│   ├── BestSellers.tsx         # Productos más vendidos
│   ├── FeaturedProducts.tsx    # Productos destacados
│   └── ParallaxBackground.tsx  # Fondo con efectos parallax
├── public/                      # Archivos estáticos
│   └── lizo/                   # Imágenes locales del proyecto
├── .env                        # Variables de entorno (configurado)
├── package.json                # Dependencias del proyecto
├── tailwind.config.js          # Configuración de TailwindCSS
├── tsconfig.json              # Configuración de TypeScript
└── next.config.js             # Configuración de Next.js
```

## 🎨 Paleta de Colores

```css
/* Colores Principales */
--primary-500: #ec4899        /* Rosa vibrante */
--wine-500: #dc2626          /* Rojo vino */
--wine-700: #991b1b          /* Rojo vino oscuro */

/* Categorías Especializadas */
--barberia: #1f2937 → #374151 /* Grises oscuros */
--belleza: #ec4899 → #be185d  /* Rosa/magenta */
--spa: #10b981 → #059669      /* Verde relajante */
```

## 🔧 Configuraciones Importantes

### Base de Datos (Supabase)
- URL: configurada en .env
- Autenticación habilitada
- Modo de desarrollo activo

### Pagos (ePayco)
- Modo sandbox/pruebas
- Claves públicas y privadas configuradas
- Integración lista para producción

### Chat IA
- Respuestas predefinidas para:
  - Recomendaciones de productos
  - Consejos de cuidado capilar
  - Información general de categorías
  - Ubicación de productos

## 🚦 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Ejecuta en modo desarrollo

# Producción
npm run build        # Construye para producción
npm run start        # Ejecuta la versión de producción

# Calidad
npm run lint         # Ejecuta ESLint
npm run type-check   # Verifica tipos de TypeScript
```

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Componentes adaptativos**: Navegación, carruseles, grids
- **Touch friendly**: Botones y elementos táctiles optimizados

## 🎯 Funcionalidades Destacadas

### Animaciones y Efectos
- **Parallax scrolling** en secciones principales
- **Hover effects** en tarjetas de productos
- **Loading animations** con logo rotativo
- **Particle systems** en el hero
- **Smooth transitions** entre páginas

### Experiencia de Usuario
- **Search functionality** en la navegación
- **Filter system** por categorías y precios
- **Wishlist** para productos favoritos
- **Cart persistence** entre sesiones
- **Progressive loading** de imágenes

### Optimizaciones
- **Code splitting** automático con Next.js
- **Image optimization** con next/image
- **SEO optimized** con metadatos completos
- **Performance monitoring** integrado

## 🔐 Seguridad

- **Autenticación segura** con Supabase
- **Validación de formularios** con Zod
- **Sanitización de inputs** en todos los formularios
- **HTTPS ready** para producción
- **CORS configurado** correctamente

## 📈 Analytics y Monitoreo

- **Google Analytics ready** (variable en .env)
- **Error tracking** con manejo de errores
- **Performance metrics** para optimización
- **User behavior tracking** preparado

## 🤝 Contribución

Este proyecto está diseñado para ser fácilmente extensible:

1. **Agregar nuevos productos**: Modificar los arrays de productos en los componentes
2. **Nuevas categorías**: Añadir en CategoriesCarousel y crear páginas específicas
3. **Funcionalidades del chat**: Expandir las respuestas en ChatBot.tsx
4. **Estilos personalizados**: Modificar tailwind.config.js y globals.css

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto:
- **Email**: soporte@lizoextraturbo.com
- **Documentación**: README.md (este archivo)
- **Issues**: Revisar configuraciones en .env

## 🏆 Créditos

**Diseñado para Lizo Belleza**
- Plataforma profesional de belleza y barbería
- Enfoque en experiencia de usuario premium
- Tecnología moderna y escalable

---

*Hecho con ❤️ para profesionales de la belleza*