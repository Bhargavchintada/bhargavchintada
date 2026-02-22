#!/bin/bash

# Cybersecurity Portfolio Deployment Script
# Author: CHINTADA BHARGAV

echo "🔒 CYBERSECURITY PORTFOLIO DEPLOYMENT"
echo "=================================="

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

echo "✅ Docker is running"

# Build and run container
echo "🏗️  Building Docker image..."
docker build -t chintada-cybersecurity-portfolio:latest .

if [ $? -eq 0 ]; then
    echo "✅ Docker image built successfully"
else
    echo "❌ Failed to build Docker image"
    exit 1
fi

# Stop and remove existing container
echo "🛑 Stopping existing container..."
docker stop chintada-portfolio-container 2>/dev/null
docker rm chintada-portfolio-container 2>/dev/null

# Run new container
echo "🚀 Starting new container..."
docker run -d \
    --name chintada-portfolio-container \
    -p 8080:80 \
    --restart unless-stopped \
    chintada-cybersecurity-portfolio:latest

if [ $? -eq 0 ]; then
    echo "✅ Container started successfully"
    echo ""
    echo "🌐 Your cybersecurity portfolio is now live at:"
    echo "   http://localhost:8080"
    echo ""
    echo "📊 Container Status:"
    docker ps | grep chintada-portfolio-container
    echo ""
    echo "🔍 To view logs: docker logs chintada-portfolio-container"
    echo "🛑 To stop: docker stop chintada-portfolio-container"
else
    echo "❌ Failed to start container"
    exit 1
fi
