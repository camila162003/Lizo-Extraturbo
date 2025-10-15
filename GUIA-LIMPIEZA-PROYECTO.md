# 🧹 GUÍA DE LIMPIEZA DEL PROYECTO

## 📊 PROBLEMA: Proyecto de 5GB (Demasiado pesado)

### 🔴 **LO QUE ESTÁ OCUPANDO ESPACIO:**

1. **`node_modules/`** - ~2-3 GB
   - Son las librerías de Node.js
   - **SE PUEDE ELIMINAR** - se recupera con `npm install`

2. **`.next/`** - ~500 MB - 1 GB
   - Cache de Next.js
   - **SE PUEDE ELIMINAR** - se regenera automáticamente

3. **`imagenes lizo/`** - ~500 MB - 1 GB
   - Imágenes de productos en alta resolución
   - **NECESARIO pero optimizable**

4. **Archivos BACKUP** - ~100-200 MB
   - page.BACKUP.tsx, page.BACKUP2.tsx, etc.
   - **SE PUEDE ELIMINAR** - son copias de respaldo

5. **`tsconfig.tsbuildinfo`** - ~10-50 MB
   - Cache de TypeScript
   - **SE PUEDE ELIMINAR** - se regenera

---

## 🚀 **MÉTODO RÁPIDO: Usar el Script Automático**

### Paso 1: Ejecutar el script de limpieza
```bash
# Doble clic en:
LIMPIAR-PROYECTO.bat
```

Este script elimina automáticamente:
- ✅ `.next/` (cache)
- ✅ `node_modules/` (librerías)
- ✅ Archivos BACKUP
- ✅ Archivos temporales

**Resultado:** Liberas ~3-4 GB

### Paso 2: Recuperar dependencias
```bash
npm install
```

### Paso 3: Iniciar proyecto
```bash
npm run dev
```

---

## 🛠️ **MÉTODO MANUAL: Limpieza Selectiva**

### 1️⃣ **Eliminar node_modules (RECUPERABLE)**
```bash
# PowerShell
Remove-Item "node_modules" -Recurse -Force

# Recuperar después:
npm install
```
**Espacio liberado:** ~2-3 GB

---

### 2️⃣ **Eliminar .next (RECUPERABLE)**
```bash
# PowerShell
Remove-Item ".next" -Recurse -Force

# Se regenera automáticamente al hacer:
npm run dev
```
**Espacio liberado:** ~500 MB - 1 GB

---

### 3️⃣ **Eliminar archivos BACKUP (NO RECUPERABLE)**
```bash
# PowerShell
Get-ChildItem -Recurse -Include *.BACKUP.*, *.bak, *.old | Remove-Item -Force
```
**Archivos a eliminar:**
- `app/page.BACKUP.tsx`
- `app/page.BACKUP2.tsx`
- `components/AdminDashboard.BACKUP.tsx`
- etc.

**Espacio liberado:** ~100-200 MB

---

### 4️⃣ **Optimizar carpeta de imágenes (CUIDADO)**

**Problema:** Imágenes muy pesadas en alta resolución

**Solución A - Comprimir imágenes:**
```bash
# Usar herramientas:
- TinyPNG (online): https://tinypng.com/
- ImageOptim (Windows)
- Squoosh (Google): https://squoosh.app/
```

**Solución B - Usar WebP en lugar de PNG:**
- WebP es 30-50% más liviano
- Next.js lo soporta nativamente

**Solución C - Subir imágenes a CDN:**
- Cloudinary (gratis hasta 25GB)
- Supabase Storage
- AWS S3 + CloudFront

**Espacio liberado:** ~300-500 MB

---

### 5️⃣ **Eliminar archivos innecesarios**

**Archivos que puedes eliminar:**
```
❌ tsconfig.tsbuildinfo     (cache TypeScript)
❌ *.log                     (logs)
❌ .DS_Store                 (Mac)
❌ Thumbs.db                 (Windows)
❌ archivos duplicados con (1), (2), etc.
```

**PowerShell:**
```powershell
Remove-Item "tsconfig.tsbuildinfo" -Force
Get-ChildItem -Recurse -Include *.log | Remove-Item -Force
```

**Espacio liberado:** ~50-100 MB

---

## 📦 **CREAR .gitignore PARA EVITAR SUBIR BASURA**

Crea/edita el archivo `.gitignore`:

```gitignore
# Dependencias
node_modules/
.pnp
.pnp.js

# Testing
/coverage

# Next.js
/.next/
/out/

# Producción
/build

# Varios
.DS_Store
*.pem
Thumbs.db

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# Local env
.env*.local

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# Backups
*.backup
*.bak
*.old
*.BACKUP.*
```

---

## 🎯 **RESULTADO FINAL**

### Antes de la limpieza:
```
📁 Proyecto total: ~5 GB
```

### Después de la limpieza:
```
📁 node_modules:        ELIMINADO (se recupera con npm install)
📁 .next:               ELIMINADO (se regenera automáticamente)
📁 Archivos BACKUP:     ELIMINADO
📁 Cache TypeScript:    ELIMINADO
📁 Imágenes:            OPTIMIZADAS (si aplicas compresión)

📁 Proyecto total:      ~500 MB - 1 GB
```

**Espacio liberado:** ~4 GB ✨

---

## ⚠️ **IMPORTANTE: QUÉ NO ELIMINAR**

**NO elimines estas carpetas/archivos:**
- ❌ `app/` - Código de tu aplicación
- ❌ `components/` - Componentes React
- ❌ `lib/` - Utilidades y servicios
- ❌ `public/` - Assets públicos
- ❌ `package.json` - Dependencias del proyecto
- ❌ `.env` o `.env.local` - Variables de entorno
- ❌ Carpetas de imágenes reales (sin comprimir primero)

---

## 🔄 **RECUPERAR DESPUÉS DE LA LIMPIEZA**

```bash
# 1. Recuperar dependencias
npm install

# 2. Limpiar cache (opcional)
npm run build

# 3. Iniciar desarrollo
npm run dev
```

---

## 💡 **TIPS PARA MANTENER EL PROYECTO LIVIANO**

1. **Usar `.gitignore`** - No subir node_modules al repositorio
2. **Eliminar .next periódicamente** - Se acumula cache
3. **Optimizar imágenes antes de agregar** - Usar WebP, comprimir
4. **No crear archivos BACKUP** - Usar Git en su lugar
5. **Limpiar logs regularmente** - Eliminar archivos .log
6. **Usar CDN para assets pesados** - No guardarlos localmente

---

## 🚨 **SI ALGO SALE MAL**

### Problema: "No encuentra módulos después de limpiar"
**Solución:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Problema: "Error al compilar después de limpiar"
**Solución:**
```bash
rm -rf .next
npm run dev
```

### Problema: "Eliminé algo importante por error"
**Solución:**
- Restaurar desde Git: `git checkout -- archivo.tsx`
- Restaurar desde Papelera de reciclaje
- Restaurar desde backup (si tienes)

---

## ✅ **CHECKLIST DE LIMPIEZA**

- [ ] Ejecutado `LIMPIAR-PROYECTO.bat`
- [ ] Eliminado `node_modules/`
- [ ] Eliminado `.next/`
- [ ] Eliminado archivos BACKUP
- [ ] Eliminado cache TypeScript
- [ ] Optimizado imágenes (opcional)
- [ ] Creado/actualizado `.gitignore`
- [ ] Recuperado dependencias: `npm install`
- [ ] Verificado que el proyecto funciona: `npm run dev`
- [ ] Proyecto ahora pesa < 1 GB ✨

---

**Fecha:** 14 de Octubre 2025  
**Proyecto:** LIZO Belleza  
**Espacio liberado:** ~4 GB
