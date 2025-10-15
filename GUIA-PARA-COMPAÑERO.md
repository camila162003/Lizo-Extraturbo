# 👨‍💻 GUÍA PARA TU COMPAÑERO - LIZO BELLEZA

## 📋 CÓMO BAJAR Y CONFIGURAR EL PROYECTO

---

## ✅ REQUISITOS PREVIOS

Antes de empezar, asegúrate de tener instalado:

- ✅ **Node.js 18+** - [Descargar aquí](https://nodejs.org/)
- ✅ **Git** - [Descargar aquí](https://git-scm.com/)
- ✅ **Visual Studio Code** (recomendado) - [Descargar aquí](https://code.visualstudio.com/)

**Verificar instalación:**
```bash
node --version    # Debe mostrar v18.x.x o superior
npm --version     # Debe mostrar 9.x.x o superior
git --version     # Debe mostrar 2.x.x o superior
```

---

## 🚀 PASO 1: CLONAR EL PROYECTO

### Opción A: Con GitHub Desktop (MÁS FÁCIL)
1. Descarga [GitHub Desktop](https://desktop.github.com/)
2. Abre GitHub Desktop
3. File → Clone Repository
4. Pega la URL: `https://github.com/TU-USUARIO/lizo-belleza`
5. Elige dónde guardarlo
6. Clic en "Clone"

### Opción B: Con terminal
```bash
# Navega a donde quieres el proyecto
cd C:\Users\TuNombre\Desktop

# Clona el repositorio
git clone https://github.com/TU-USUARIO/lizo-belleza.git

# Entra a la carpeta
cd lizo-belleza
```

---

## 🔐 PASO 2: CONFIGURAR VARIABLES DE ENTORNO

**⚠️ MUY IMPORTANTE:** El proyecto NO incluye las credenciales de Supabase por seguridad.

### 1. Pide el archivo `ENV-CONFIG.md` a tu compañero
   - Este archivo contiene todas las credenciales
   - **NO está en GitHub por seguridad**
   - Pídeselo por WhatsApp, email, o medio seguro

### 2. Crea el archivo `.env.local`
```bash
# En la raíz del proyecto (misma carpeta que package.json)
# Crea un archivo llamado: .env.local
```

### 3. Copia el contenido
Abre el archivo `ENV-CONFIG.md` que te dieron y copia todo el bloque que dice:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://qlgtbreqoyjhycpnbzoz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6...
```

### 4. Pégalo en `.env.local`
Tu archivo `.env.local` debe quedar así:
```
NEXT_PUBLIC_SUPABASE_URL=https://qlgtbreqoyjhycpnbzoz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

---

## 📦 PASO 3: INSTALAR DEPENDENCIAS

```bash
# Asegúrate de estar en la carpeta del proyecto
cd lizo-belleza

# Instala todas las dependencias (tarda 3-5 minutos)
npm install
```

**⏳ Esto instalará ~2-3 GB de librerías (node_modules)**

Si sale algún error, prueba:
```bash
npm install --legacy-peer-deps
```

---

## 🎨 PASO 4: INICIAR EL PROYECTO

```bash
npm run dev
```

Verás algo como:
```
✓ Ready in 3.5s
○ Local:   http://localhost:3000
```

---

## 🌐 PASO 5: ABRIR EN EL NAVEGADOR

1. Abre tu navegador (Chrome, Edge, Firefox)
2. Ve a: **http://localhost:3000**
3. ¡Deberías ver la página principal de LIZO Belleza! 🎉

---

## ✅ VERIFICACIÓN

### Todo está bien si ves:
- ✅ La página principal carga correctamente
- ✅ Se ven los productos (256+)
- ✅ Las imágenes se cargan
- ✅ No hay errores rojos en la terminal

### Si hay problemas:
❌ **"Cannot find module"**
```bash
# Borra node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
```

❌ **"SUPABASE_URL is not defined"**
```bash
# Verifica que existe el archivo .env.local
# Verifica que tiene las variables correctas
# Reinicia el servidor (Ctrl+C y npm run dev)
```

❌ **"Port 3000 already in use"**
```bash
# Cambia el puerto
npm run dev -- -p 3001
# O cierra la aplicación que usa el puerto 3000
```

---

## 📂 ESTRUCTURA DEL PROYECTO

```
lizo-belleza/
├── app/                    # Páginas de la aplicación
│   ├── page.tsx           # Página principal
│   ├── productos/         # Catálogo
│   ├── admin/             # Panel admin
│   └── ...
├── components/            # Componentes React
├── lib/                   # Utilidades
├── public/               # Assets públicos
├── .env.local            # ⚠️ CREA ESTE ARCHIVO (no existe)
├── package.json          # Dependencias
└── README.md             # Documentación
```

---

## 🛠️ COMANDOS ÚTILES

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm run start

# Ver errores de linting
npm run lint

# Verificar tipos TypeScript
npm run type-check
```

---

## 🔄 ACTUALIZAR EL PROYECTO

Cuando tu compañero haga cambios y los suba a GitHub:

```bash
# Detén el servidor (Ctrl+C)

# Descarga los cambios
git pull origin main

# Si cambiaron dependencias, reinstala
npm install

# Vuelve a iniciar
npm run dev
```

---

## 💾 HACER CAMBIOS Y SUBIRLOS

### 1. Crear una rama para tus cambios
```bash
git checkout -b feature/mi-nueva-funcionalidad
```

### 2. Hacer cambios en el código
Edita los archivos que necesites...

### 3. Ver qué cambió
```bash
git status
```

### 4. Agregar cambios
```bash
git add .
```

### 5. Hacer commit
```bash
git commit -m "Descripción clara de tus cambios"
```

### 6. Subir a GitHub
```bash
git push origin feature/mi-nueva-funcionalidad
```

### 7. Crear Pull Request
- Ve a GitHub
- Verás un botón "Compare & pull request"
- Describe tus cambios
- Tu compañero revisará y aprobará

---

## 📚 ARCHIVOS IMPORTANTES A REVISAR

1. **`README.md`** - Documentación general del proyecto
2. **`REPORTE-BUGS-Y-MEJORAS.md`** - Bugs conocidos y mejoras pendientes
3. **`ENV-CONFIG.md`** - Configuración de variables (te lo dará tu compañero)
4. **`GUIA-LIMPIEZA-PROYECTO.md`** - Si el proyecto ocupa mucho espacio

---

## 🐛 PROBLEMAS COMUNES

### "npm: command not found"
**Solución:** Instala Node.js desde nodejs.org

### "git: command not found"
**Solución:** Instala Git desde git-scm.com

### "Cannot connect to Supabase"
**Solución:** 
- Verifica que `.env.local` existe
- Verifica que tiene las credenciales correctas
- Reinicia el servidor

### "El sitio se ve roto sin estilos"
**Solución:**
```bash
npm run build
npm run dev
```

### "Ocupa 5GB el proyecto"
**Solución:** 
- Ejecuta `LIMPIAR-PROYECTO.bat`
- O lee `GUIA-LIMPIEZA-PROYECTO.md`

---

## 💡 TIPS PARA TRABAJAR EN EQUIPO

1. **Siempre haz `git pull` antes de empezar a trabajar**
2. **Crea ramas para nuevas funcionalidades** (`feature/nombre`)
3. **Haz commits frecuentes con mensajes claros**
4. **No subas archivos `.env.local`** (ya está en .gitignore)
5. **Usa VS Code con extensiones:**
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense
   - GitLens

---

## 📞 SI TIENES PROBLEMAS

1. **Revisa la documentación:**
   - `README.md`
   - `REPORTE-BUGS-Y-MEJORAS.md`
   
2. **Pregunta a tu compañero:**
   - Comparte capturas de pantalla del error
   - Copia el mensaje de error completo
   
3. **Busca en la terminal:**
   - Lee el error completo (puede estar más arriba)
   - Busca en Google el mensaje exacto

---

## ✅ CHECKLIST DE INSTALACIÓN

- [ ] Node.js instalado (v18+)
- [ ] Git instalado
- [ ] Proyecto clonado
- [ ] Archivo `.env.local` creado con credenciales
- [ ] `npm install` ejecutado sin errores
- [ ] `npm run dev` funciona
- [ ] Puedo ver la página en http://localhost:3000
- [ ] Los productos se cargan correctamente
- [ ] No hay errores en la consola del navegador

---

## 🎉 ¡LISTO PARA DESARROLLAR!

Si llegaste hasta aquí y todo funciona, ¡ya puedes empezar a trabajar!

**Próximos pasos sugeridos:**
1. Explora el código en `app/page.tsx`
2. Revisa los componentes en `components/`
3. Lee el `REPORTE-BUGS-Y-MEJORAS.md` para ver qué falta
4. Coordina con tu compañero qué vas a hacer

---

**Fecha:** Octubre 2025  
**Proyecto:** LIZO Belleza v1.0  
**Para dudas:** Contacta a tu compañero de desarrollo

---

## 🚨 IMPORTANTE - NO HACER

- ❌ NO subas `.env.local` a GitHub
- ❌ NO compartas credenciales públicamente
- ❌ NO elimines `node_modules/` manualmente (usa el script)
- ❌ NO hagas `git push -f` (force push)
- ❌ NO edites directamente en la rama `main` (usa ramas)

---

**¡Éxito en el desarrollo! 🚀**
