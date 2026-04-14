# Deployment Guide

## Quick Deployment Options

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

**Custom Domain**: Add your domain in Project Settings → Domains

### Option 2: Netlify

1. Build the project locally:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder to Netlify
4. Your site is live!

**Continuous Deployment**:
- Connect your GitHub repository
- Build command: `npm run build`
- Publish directory: `dist`

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/'
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Option 4: AWS S3 + CloudFront

1. Build the project:
   ```bash
   npm run build
   ```

2. Create an S3 bucket
3. Enable static website hosting
4. Upload the `dist` folder contents
5. Set up CloudFront for HTTPS and CDN

## Pre-Deployment Checklist

- [ ] Update all personal information (email, GitHub, LinkedIn)
- [ ] Add your resume PDF to `public/resume.pdf`
- [ ] Update project GitHub links to your actual repositories
- [ ] Add live demo URLs if available
- [ ] Test all navigation links
- [ ] Test on mobile devices
- [ ] Check all external links open in new tabs
- [ ] Verify contact form/email links work
- [ ] Run production build locally: `npm run build && npm run preview`
- [ ] Check for console errors
- [ ] Test page load speed
- [ ] Verify SEO meta tags in `index.html`

## Environment Variables

This project doesn't require environment variables by default. If you add a contact form backend or analytics:

1. Create `.env` file (already in .gitignore)
2. Add variables:
   ```
   VITE_API_URL=your-api-url
   VITE_ANALYTICS_ID=your-analytics-id
   ```
3. Access in code: `import.meta.env.VITE_API_URL`

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Update DNS or use Netlify DNS

## Performance Optimization

Already implemented:
- ✅ Vite for fast builds and optimized bundles
- ✅ CSS variables for minimal CSS
- ✅ Inline SVG icons (no icon library overhead)
- ✅ Google Fonts with display=swap
- ✅ Lazy loading ready structure

Additional optimizations:
- Add image optimization if you include photos
- Implement code splitting for larger apps
- Add service worker for offline support
- Use CDN for static assets

## Analytics Setup

### Google Analytics
1. Get tracking ID from Google Analytics
2. Add to `index.html` before `</head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Plausible Analytics (Privacy-friendly alternative)
1. Add to `index.html` before `</head>`:
   ```html
   <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
   ```

## Monitoring

- **Uptime**: Use UptimeRobot or Pingdom
- **Performance**: Use Lighthouse CI or WebPageTest
- **Errors**: Use Sentry for error tracking

## Backup Strategy

1. Keep code in GitHub (version control)
2. Export deployment settings from hosting provider
3. Keep local copy of `dist` folder after each deployment
4. Document any custom configurations

## Troubleshooting

### Build Fails
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `npm run build -- --force`

### Routing Issues (404 on refresh)
- Add `_redirects` file to `public/` folder:
  ```
  /*    /index.html   200
  ```

### Slow Load Times
- Check bundle size: `npm run build -- --report`
- Optimize images
- Enable compression on hosting provider

## Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- GitHub Pages: [pages.github.com](https://pages.github.com)
