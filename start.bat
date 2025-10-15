@echo off
echo Iniciando Lizo Belleza...
echo Directorio actual: %CD%
echo.
echo Verificando archivos...
if exist "app" (
    echo ✓ Directorio app encontrado
) else (
    echo ✗ Directorio app NO encontrado
    pause
    exit
)

if exist "package.json" (
    echo ✓ package.json encontrado
) else (
    echo ✗ package.json NO encontrado
    pause
    exit
)

echo.
echo Iniciando servidor Next.js...
npx next dev
pause