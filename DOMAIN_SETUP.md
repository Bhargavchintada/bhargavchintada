# Domain Setup Guide for bhargavchintada.me

## 🌐 Domain Configuration Options

### Option 1: Vercel Deployment (Recommended)
1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Cybersecurity Portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/bhargav-chintada-portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a static site
   - Add your custom domain: `bhargavchintada.me`

3. **DNS Configuration**:
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add DNS record:
     ```
     Type: CNAME
     Name: @
     Value: cname.vercel-dns.com
     ```

### Option 2: Netlify Deployment
1. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag & drop your portfolio folder
   - Or connect your GitHub repository

2. **Add Custom Domain**:
   - Site settings → Domain management
   - Add `bhargavchintada.me`

3. **DNS Configuration**:
   ```
   Type: CNAME
   Name: @
   Value: your-site-name.netlify.app
   ```

### Option 3: GitHub Pages
1. **Enable GitHub Pages**:
   - Repository → Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, folder: /root

2. **DNS Configuration**:
   ```
   Type: CNAME
   Name: @
   Value: yourusername.github.io
   ```

### Option 4: Self-Hosted with Docker
1. **Update nginx.conf**:
   ```nginx
   server_name bhargavchintada.me www.bhargavchintada.me;
   ```

2. **Deploy with Docker**:
   ```bash
   docker build -t bhargav-portfolio .
   docker run -d -p 80:80 --name portfolio bhargav-portfolio
   ```

## 🔧 DNS Records Needed

### For Vercel:
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
TTL: 300 (or default)
```

### For Netlify:
```
Type: CNAME
Name: @
Value: your-site-name.netlify.app
TTL: 300 (or default)
```

### For GitHub Pages:
```
Type: CNAME
Name: @
Value: yourusername.github.io
TTL: 300 (or default)
```

## 📋 SSL Certificate
All platforms above provide:
- ✅ Free SSL certificates
- ✅ Automatic HTTPS redirects
- ✅ CDN integration
- ✅ Global CDN distribution

## 🚀 Quick Deployment Commands

### Vercel CLI:
```bash
npm install -g vercel
vercel --prod
```

### Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir .
```

## 📊 After Deployment

1. **Test your domain**: https://bhargavchintada.me
2. **Check SSL**: Ensure HTTPS is working
3. **Test mobile**: Verify responsive design
4. **Test contact form**: Ensure functionality
5. **Monitor performance**: Use Google PageSpeed Insights

## 🔍 SEO Optimization

Your portfolio includes:
- ✅ Canonical URL: `https://bhargavchintada.me`
- ✅ Meta tags for cybersecurity keywords
- ✅ Semantic HTML5 structure
- ✅ Mobile-responsive design
- ✅ Fast loading with optimized assets

## 📞 Support

For deployment issues:
- Vercel: support@vercel.com
- Netlify: support@netlify.com
- GitHub Pages: github.com/support
