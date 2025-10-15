# 🚀 GUÍA RÁPIDA: SUBIR PROYECTO A GITHUB

## 📋 PASOS PARA SUBIR EL PROYECTO

### 1️⃣ **Crear Repositorio en GitHub**

1. Ve a [github.com](https://github.com)
2. Haz clic en el botón **"New"** (repositorio nuevo)
3. Configura tu repositorio:
   - **Nombre:** `lizo-belleza`
   - **Descripción:** `Plataforma E-commerce y CRM para productos de belleza`
   - **Visibilidad:** 🔒 Private (recomendado) o 🌐 Public
   - ⚠️ **NO marques:** "Add README" ni ".gitignore" ni "license"
4. Clic en **"Create repository"**

---

### 2️⃣ **Conectar tu Proyecto Local con GitHub**

Copia los comandos que GitHub te muestra (algo como esto):

```bash
cd "C:\Users\Daniel\Desktop\Lizo Belleza Diseño Final\Lizo Belleza Diseño Final"

# Conectar con GitHub
git remote add origin https://github.com/TU-USUARIO/lizo-belleza.git

# Renombrar rama a 'main'
git branch -M main

# Subir todo
git push -u origin main
```

**⚠️ IMPORTANTE:** Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub.

---

### 3️⃣ **Ejecutar en PowerShell**

Abre PowerShell en tu proyecto y ejecuta:

```powershell
cd "C:\Users\Daniel\Desktop\Lizo Belleza Diseño Final\Lizo Belleza Diseño Final"

# Reemplaza TU-USUARIO con tu usuario de GitHub
git remote add origin https://github.com/TU-USUARIO/lizo-belleza.git
git branch -M main
git push -u origin main
```

---

### 4️⃣ **Autenticación**

GitHub te pedirá autenticación:

#### Opción A: Personal Access Token (Recomendado)
1. Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Clic en "Generate new token (classic)"
3. Marca `repo` (acceso completo a repositorios)
4. Copia el token (guárdalo, no lo volverás a ver)
5. Úsalo como contraseña cuando Git te lo pida

#### Opción B: GitHub Desktop
1. Descarga [GitHub Desktop](https://desktop.github.com/)
2. File → Add Local Repository
3. Selecciona tu carpeta del proyecto
4. Publish repository

---

## ✅ VERIFICACIÓN

### Después de subir, verifica:

1. **En GitHub:**
   - Ve a tu repositorio: `https://github.com/TU-USUARIO/lizo-belleza`
   - Deberías ver todos tus archivos
   - ✅ README.md visible
   - ✅ Sin carpeta `node_modules/`
   - ✅ Sin carpeta `.next/`
   - ✅ Sin archivo `.env.local`

2. **Archivos que NO deben estar:**
   - ❌ `node_modules/` (excluido por .gitignore)
   - ❌ `.next/` (excluido por .gitignore)
   - ❌ `.env.local` (excluido por .gitignore)
   - ❌ `ENV-CONFIG.md` (excluido por .gitignore)

---

## 🔐 VARIABLES DE ENTORNO

**⚠️ MUY IMPORTANTE:** Las variables de entorno NO se subieron a GitHub (están en `.gitignore`).

### Para configurarlas en otro lugar:

1. **Archivo separado:** Ya tienes `ENV-CONFIG.md` con todas las credenciales
2. **Guárdalo en un lugar seguro** (Drive, 1Password, etc.)
3. **NO lo subas a GitHub nunca**

### Para deploy (Vercel/Netlify):
Las variables de entorno se agregan en el dashboard del hosting, no en GitHub.

---

## 📦 CLONAR EN OTRA COMPUTADORA

Para clonar tu proyecto en otro lugar:

```bash
# Clonar repositorio
git clone https://github.com/TU-USUARIO/lizo-belleza.git
cd lizo-belleza

# Crear archivo .env.local
# (copia el contenido de ENV-CONFIG.md)

# Instalar dependencias
npm install

# Iniciar
npm run dev
```

---

## 🔄 COMANDOS ÚTILES DE GIT

### Subir cambios nuevos:
```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

### Ver estado:
```bash
git status
```

### Ver historial:
```bash
git log --oneline
```

### Deshacer cambios:
```bash
git checkout -- archivo.tsx
```

### Crear rama nueva:
```bash
git checkout -b feature/nueva-funcionalidad
```

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### ❌ Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/TU-USUARIO/lizo-belleza.git
```

### ❌ Error: "failed to push some refs"
```bash
git pull origin main --rebase
git push origin main
```

### ❌ Error: "Permission denied"
- Verifica tu token de acceso
- O usa GitHub Desktop

### ❌ Error: "Large files detected"
Si Git se queja de archivos muy grandes:
```bash
# Ver qué archivos son grandes
git ls-files --stage | sort -k4 -n -r | head -20

# Si es node_modules o .next, asegúrate de que estén en .gitignore
```

---

## 📊 RESUMEN DEL PROYECTO SUBIDO

### ✅ Lo que SÍ se sube:
- 📄 Código fuente (`.tsx`, `.ts`, `.js`)
- 🎨 Estilos (`globals.css`, Tailwind config)
- 📋 Configuración (`package.json`, `tsconfig.json`, `next.config.js`)
- 📝 Documentación (`.md` files)
- 🖼️ Imágenes del proyecto (`imagenes lizo/`)
- 📦 Scripts SQL (`supabase-schema.sql`)

### ❌ Lo que NO se sube:
- 🚫 `node_modules/` (se instala con npm)
- 🚫 `.next/` (se genera automáticamente)
- 🚫 `.env.local` (credenciales sensibles)
- 🚫 Archivos BACKUP
- 🚫 Cache de TypeScript

---

## 🎯 PRÓXIMOS PASOS

1. ✅ **Proyecto subido a GitHub**
2. 📋 **Variables de entorno guardadas** en `ENV-CONFIG.md`
3. 🚀 **Deploy a Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Import Git Repository
   - Selecciona tu repo `lizo-belleza`
   - Agrega variables de entorno desde `ENV-CONFIG.md`
   - Deploy

---

## 📞 AYUDA

Si tienes problemas:
1. Verifica que `.gitignore` existe y tiene el contenido correcto
2. Verifica que no hay archivos gigantes (>100MB)
3. Usa GitHub Desktop si los comandos no funcionan
4. Consulta la documentación de Git: https://git-scm.com/doc

---

**🎉 ¡Listo! Tu proyecto está en GitHub de forma segura y profesional.**

**Fecha:** 14 de Octubre 2025  
**Proyecto:** LIZO Belleza  
**Versión:** 1.0.0
