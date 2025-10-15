@echo off
echo ========================================
echo   RESET TOTAL + SUBIR CODIGO
echo ========================================
echo.
echo Vamos a:
echo 1. BORRAR todo el historial de Git
echo 2. Excluir imagenes desde el inicio
echo 3. Subir solo codigo limpio
echo.
pause

cd /d "%~dp0"

echo.
echo [PASO 1] ELIMINANDO historial de Git...
rmdir /s /q .git
echo OK - Git eliminado

echo.
echo [PASO 2] Creando .gitignore ANTES de inicializar...
(
echo # Excluir imagenes
echo imagenes lizo/
echo.
echo # Excluir dependencias
echo node_modules/
echo .next/
echo.
echo # Excluir configuracion sensible
echo .env.local
echo ENV-CONFIG.md
echo.
echo # Excluir temporales
echo *.log
echo .DS_Store
) > .gitignore

echo OK - .gitignore creado

echo.
echo [PASO 3] Inicializando Git NUEVO...
git init
git branch -M main
echo OK - Git inicializado

echo.
echo [PASO 4] Agregando SOLO archivos permitidos...
git add .
echo OK - Archivos agregados (sin imagenes)

echo.
echo [PASO 5] Primer commit limpio...
git commit -m "Initial commit: Code only (images excluded)"
echo OK - Commit creado

echo.
echo [PASO 6] Configurando remote...
git remote add origin https://github.com/camila162003/Lizo-Extraturbo.git
echo OK - Remote configurado

echo.
echo [PASO 7] Configurando Git para push grande...
git config http.postBuffer 524288000

echo.
echo [PASO 8] SUBIENDO A GITHUB (FORZADO, sin imagenes)...
echo.
git push -u origin main --force

echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================
    echo   *** EXITO ***
    echo   https://github.com/camila162003/Lizo-Extraturbo
    echo.
    echo   CODIGO SUBIDO - Sin imagenes
    echo   Peso: ~50-100MB
    echo.
    echo   Para subir imagenes despues:
    echo   - Usa Google Drive / OneDrive
    echo   - O GitHub Releases
    echo ========================================
) else (
    echo ========================================
    echo   ERROR - Codigo: %ERRORLEVEL%
    echo ========================================
)
echo.
pause
