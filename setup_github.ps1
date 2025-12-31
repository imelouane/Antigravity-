$ErrorActionPreference = "Stop"

Write-Host "Verificando Git..."
try {
    git --version
} catch {
    Write-Error "Git no parece estar disponible en este terminal. Por favor, reinicia VS Code completamente o abre un nuevo terminal externo."
    exit
}

Write-Host "Inicializando repositorio..."
if (!(Test-Path .git)) {
    git init
}

Write-Host "Comprobando configuración de usuario..."
$userEmail = git config user.email
if (-not $userEmail) {
    Write-Host "No se ha detectado configuración de usuario de Git."
    $email = Read-Host "Introduce tu email para Git"
    $name = Read-Host "Introduce tu nombre para Git"
    git config --global user.email $email
    git config --global user.name $name
}

Write-Host "Añadiendo archivos..."
git add .

Write-Host "Realizando commit..."
try {
    git commit -m "Subida inicial del proyecto Antigravity"
} catch {
    Write-Host "Nada que commitear o error en commit (puede que ya esté hecho)."
}

Write-Host "Configurando rama y remoto..."
git branch -M main

# Check if origin exists
try {
    git remote get-url origin
    # If it exists, set it to the correct user provided url just in case
    git remote set-url origin https://github.com/imelouane/Antigravity-.git
} catch {
    git remote add origin https://github.com/imelouane/Antigravity-.git
}

Write-Host "Subiendo a GitHub..."
Write-Host "Si aparece una ventana emergente de inicio de sesión, por favor completa los pasos."
git push -u origin main

Write-Host "¡Proceso completado!"
Pause
