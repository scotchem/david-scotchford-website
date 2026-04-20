# Deployment Guide - David Scotchford Website

## Quick Start

The website is production-ready and can be deployed to any static hosting service.

### Build for Production
```bash
pnpm build
```

This creates a `dist/` folder containing all the optimized files ready for deployment.

## Deployment Options

### Option 1: Vercel (Recommended)
Vercel is the easiest option with automatic deployments from Git.

1. Push your project to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Select your repository
5. Vercel will automatically detect Vite and configure everything
6. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Option 2: Netlify
1. Push your project to GitHub
2. Go to https://netlify.com
3. Click "New site from Git"
4. Select your repository
5. Set build command: `pnpm build`
6. Set publish directory: `dist`
7. Click "Deploy site"

### Option 3: GitHub Pages
1. Add to `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/repository-name/',
  plugins: [react()],
})
```

2. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Option 4: Traditional Web Server (Apache, Nginx)

1. Build the project: `pnpm build`
2. Upload the `dist/` folder to your server
3. Configure your web server to serve `index.html` for all routes

#### Nginx Configuration
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/david-scotchford/dist;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Apache Configuration
```apache
<Directory /var/www/david-scotchford/dist>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</Directory>
```

### Option 5: AWS S3 + CloudFront

1. Create S3 bucket
2. Upload `dist/` contents
3. Create CloudFront distribution pointing to S3
4. Configure Route 53 for domain

## Custom Domain Setup

### For Vercel/Netlify
1. Go to project settings
2. Add your domain
3. Update DNS records as instructed

### For GitHub Pages
1. Go to repository settings
2. Scroll to "GitHub Pages"
3. Set custom domain
4. Update DNS records

### DNS Configuration
Add CNAME record:
```
CNAME  yourdomain.com  your-hosting-provider.com
```

Or A records (check your provider):
```
A  yourdomain.com  IP_ADDRESS
```

## SSL/HTTPS

All modern hosting providers (Vercel, Netlify, GitHub Pages) provide free SSL certificates.

For traditional servers:
- Use Let's Encrypt (free): https://letsencrypt.org
- Use Certbot: https://certbot.eff.org

## Performance Optimization

### Already Optimized
- Minified CSS and JavaScript
- Efficient image handling
- Optimized font loading
- Gzip compression

### Additional Optimization
1. Enable gzip compression on your server
2. Set cache headers for static assets
3. Use a CDN for faster global delivery
4. Monitor Core Web Vitals

## Environment Variables

Currently, the website doesn't require environment variables. If you add features that need them:

1. Create `.env.local` file
2. Add variables: `VITE_API_URL=https://api.example.com`
3. Access in code: `import.meta.env.VITE_API_URL`

## Monitoring & Maintenance

### Check Site Health
- Test all navigation links
- Verify contact form works
- Check responsive design on mobile
- Test on different browsers

### Analytics
Add Google Analytics:
1. Get tracking ID from Google Analytics
2. Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### SEO
Add meta tags to `index.html`:
```html
<meta name="description" content="David Scotchford - Premium Live Entertainment Creator">
<meta name="keywords" content="choreography, entertainment, cruise, theatrical">
<meta name="author" content="David Scotchford">
<meta property="og:title" content="David Scotchford">
<meta property="og:description" content="Premium Live Entertainment Creator">
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">
```

## Troubleshooting

### Blank Page After Deployment
- Check browser console for errors
- Verify all files uploaded correctly
- Check base URL in `vite.config.ts`
- Clear browser cache

### Styling Not Applied
- Verify CSS files in `dist/assets/`
- Check for MIME type issues
- Ensure web server serves CSS as `text/css`

### Routes Not Working
- Ensure web server redirects all routes to `index.html`
- Check SPA configuration for your host

### Slow Performance
- Enable gzip compression
- Use a CDN
- Optimize images
- Check server response times

## Updating Content

After making changes:

1. Make edits locally
2. Test with `pnpm dev`
3. Build: `pnpm build`
4. Deploy `dist/` folder
5. Clear CDN cache if using one

## Rollback

Keep previous `dist/` backups to quickly rollback if needed.

## Support

For deployment issues:
- Check hosting provider documentation
- Review Vite deployment guide: https://vitejs.dev/guide/static-deploy.html
- Check React documentation

---

**Last Updated**: April 2024
