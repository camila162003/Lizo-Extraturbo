@echo off
echo ============================================
echo    LIMPIEZA AUTOMATICA DE PROYECTO
echo    Elimina archivos innecesarios (5GB)
echo ============================================
echo.

cd /d "%~dp0"

echo [1/4] Eliminando cache .next...
if exist ".next" (
    rmdir /s /q ".next"
    echo   OK - .next eliminado
) else (
    echo   SKIP - .next no existe
)

echo.
echo [2/4] Eliminando node_modules (se recupera con npm install)...
if exist "node_modules" (
    echo   Esto puede tardar 1-2 minutos...
    rmdir /s /q "node_modules"
    echo   OK - node_modules eliminado
) else (
    echo   SKIP - node_modules no existe
)

echo.
echo [3/4] Eliminando archivos BACKUP...
for /r %%i in (*.BACKUP.* *.bak *.old *.backup) do (
    if exist "%%i" (
        del /q "%%i"
        echo   Eliminado: %%~nxi
    )
)

echo.
echo [4/4] Eliminando archivos temporales...
if exist "tsconfig.tsbuildinfo" del /q "tsconfig.tsbuildinfo"
if exist "*.log" del /q "*.log"

echo.
echo ============================================
echo    LIMPIEZA COMPLETADA!
echo ============================================
echo.
echo Espacio liberado: ~3-4 GB
echo.
echo SIGUIENTE PASO:
echo   npm install     (para recuperar node_modules)
echo   npm run dev     (para iniciar el proyecto)
echo.
pause
