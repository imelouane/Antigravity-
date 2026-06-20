# watch_deploy.ps1
# Este script monitorea los archivos del proyecto y hace git add, commit y push automáticos ante cualquier cambio.

$ErrorActionPreference = "Continue"

# Ruta local del proyecto
$folder = Get-Location
Write-Host "=== Monitoreo de Despliegue en Tiempo Real ===" -ForegroundColor Green
Write-Host "Monitoreando: $folder" -ForegroundColor Cyan
Write-Host "Subiendo a: https://github.com/imelouane/Antigravity-.git" -ForegroundColor Cyan
Write-Host "Verificando en: https://consultomik.es/" -ForegroundColor Cyan
Write-Host "--------------------------------------------------" -ForegroundColor Gray

# Configurar el vigilante de archivos (FileSystemWatcher)
$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $folder
$watcher.Filter = "*.*"
$watcher.IncludeSubdirectories = $true
$watcher.EnableRaisingEvents = $true

# Variable para evitar disparos dobles rápidos (debouncing)
$lastRun = [DateTime]::MinValue

$action = {
    $path = $Event.SourceEventArgs.FullPath
    $changeType = $Event.SourceEventArgs.ChangeType
    
    # Ignorar carpetas del sistema, git y node_modules
    if ($path -match '\\\.git\\' -or $path -match '\\node_modules\\' -or $path -match '\\\.idea\\' -or $path -match '\\\.vscode\\') {
        return
    }
    
    # Evitar ejecutar múltiples veces por el mismo cambio rápido
    $now = [DateTime]::Now
    if ($now.Subtract($lastRun).TotalSeconds -lt 2) {
        return
    }
    $script:lastRun = $now

    Write-Host "`n[$(Get-Date -Format 'HH:mm:ss')] Cambio detectado ($changeType): $(Split-Path $path -Leaf)" -ForegroundColor Yellow
    Write-Host "Sincronizando con el servidor..." -ForegroundColor DarkGray
    
    # Pequeña espera para asegurar que el archivo terminó de escribirse
    Start-Sleep -Milliseconds 800
    
    try {
        git add .
        # Usar un mensaje descriptivo con la hora y el archivo
        $file = Split-Path $path -Leaf
        git commit -m "Auto-despliegue: Modificado $file [$(Get-Date -Format 'HH:mm:ss')]"
        git push origin main
        Write-Host "¡Cambio subido con éxito! Vercel actualizará la web en unos segundos." -ForegroundColor Green
    } catch {
        Write-Host "Error durante la sincronización: $_" -ForegroundColor Red
    }
}

# Registrar eventos
$handlers = @()
$handlers += Register-ObjectEvent $watcher "Changed" -Action $action
$handlers += Register-ObjectEvent $watcher "Created" -Action $action
$handlers += Register-ObjectEvent $watcher "Deleted" -Action $action

Write-Host "Vigilante activo. Haz cualquier cambio en tus archivos (HTML, CSS, JS) y se reflejará en la web." -ForegroundColor Green
Write-Host "Presiona Ctrl+C en esta terminal para detener el monitoreo." -ForegroundColor Yellow

# Bucle infinito para mantener el script corriendo
try {
    while ($true) {
        Start-Sleep -Seconds 1
    }
} finally {
    # Limpiar eventos al salir
    Write-Host "`nDeteniendo monitoreo y limpiando eventos..." -ForegroundColor Yellow
    foreach ($handler in $handlers) {
        Unregister-Event -SourceIdentifier $handler.Name -ErrorAction SilentlyContinue
    }
    $watcher.Dispose()
    Write-Host "Monitoreo finalizado." -ForegroundColor Green
}
