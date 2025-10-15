@echo off
echo ========================================
echo   SUBIR SIN IMAGENES - GitHub
echo ========================================
echo.
echo Las imagenes (2GB) las subiras despues
echo Primero sube el CODIGO para que tu companero trabaje
echo.
pause

cd /d "%~dp0"

echo.
echo [PASO 1] Creando .gitignore para excluir imagenes temporalmente...
echo # Excluir imagenes temporalmente > .gitignore.temp
echo imagenes lizo/ >> .gitignore.temp
echo node_modules/ >> .gitignore.temp
echo .next/ >> .gitignore.temp
echo .env.local >> .gitignore.temp
echo ENV-CONFIG.md >> .gitignore.temp

echo.
echo [PASO 2] Usando .gitignore temporal...
copy /y .gitignore.temp .gitignore

echo.
echo [PASO 3] Limpiando cache de Git...
git rm -r --cached .
git add .

echo.
echo [PASO 4] Commit sin imagenes...
git commit -m "Code only - Images excluded temporarily"

echo.
echo [PASO 5] Configurando Git...
git config http.postBuffer 524288000

echo.
echo [PASO 6] SUBIENDO CODIGO A GITHUB (~50MB)...
git push -u origin main --force

echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================
    echo   EXITO! CODIGO SUBIDO
    echo   https://github.com/camila162003/Lizo-Extraturbo
    echo.
    echo   Tu companero YA PUEDE trabajar!
    echo   Las imagenes las subes despues con Google Drive
    echo ========================================
) else (
    echo ERROR
)
pause
