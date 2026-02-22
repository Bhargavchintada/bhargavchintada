# Cybersecurity Portfolio Deployment Script (PowerShell)
# Author: CHINTADA BHARGAV

Write-Host "🔒 CYBERSECURITY PORTFOLIO DEPLOYMENT" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan

# Check if Docker is running
try {
    $dockerInfo = docker info 2>$null
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Docker is not running. Please start Docker first." -ForegroundColor Red
        exit 1
    }
    Write-Host "✅ Docker is running" -ForegroundColor Green
} catch {
    Write-Host "❌ Docker is not installed or not running. Please install/start Docker first." -ForegroundColor Red
    exit 1
}

# Build and run container
Write-Host "🏗️  Building Docker image..." -ForegroundColor Yellow
docker build -t chintada-cybersecurity-portfolio:latest .

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Docker image built successfully" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to build Docker image" -ForegroundColor Red
    exit 1
}

# Stop and remove existing container
Write-Host "🛑 Stopping existing container..." -ForegroundColor Yellow
docker stop chintada-portfolio-container 2>$null
docker rm chintada-portfolio-container 2>$null

# Run new container
Write-Host "🚀 Starting new container..." -ForegroundColor Yellow
docker run -d --name chintada-portfolio-container -p 8080:80 --restart unless-stopped chintada-cybersecurity-portfolio:latest

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Container started successfully" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Your cybersecurity portfolio is now live at:" -ForegroundColor Cyan
    Write-Host "   http://localhost:8080" -ForegroundColor White
    Write-Host ""
    Write-Host "📊 Container Status:" -ForegroundColor Cyan
    docker ps | findstr chintada-portfolio-container
    Write-Host ""
    Write-Host "🔍 To view logs: docker logs chintada-portfolio-container" -ForegroundColor Gray
    Write-Host "🛑 To stop: docker stop chintada-portfolio-container" -ForegroundColor Gray
} else {
    Write-Host "❌ Failed to start container" -ForegroundColor Red
    exit 1
}
