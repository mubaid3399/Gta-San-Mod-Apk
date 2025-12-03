# Performance Testing Checklist

## Quick Testing Guide

### 1. Measure Core Web Vitals

#### Using Chrome DevTools
```
1. Open your website
2. Press F12 (Open DevTools)
3. Go to "Lighthouse" tab
4. Click "Analyze page load"
5. Wait for report to generate
6. Check scores:
   - Performance (should be 80+)
   - LCP (Largest Contentful Paint): < 2.5s
   - FID (First Input Delay): < 100ms
   - CLS (Cumulative Layout Shift): < 0.1
```

#### Using PageSpeed Insights
```
1. Go to https://pagespeed.web.dev/
2. Enter your website URL
3. Check mobile and desktop scores
4. Look for "Core Web Vitals" section
5. Compare before/after results
```

#### Using Web.dev Measurement Tool
```
1. Go to https://web.dev/measure/
2. Enter your website URL
3. Review detailed performance metrics
```

---

### 2. Desktop Performance Testing

#### Chrome DevTools Performance Tab
```
1. Open DevTools (F12)
2. Go to "Performance" tab
3. Click record button
4. Load your website
5. Stop recording
6. Review metrics:
   - FCP (First Contentful Paint)
   - LCP (Largest Contentful Paint)
   - FID/INP (Interaction to Next Paint)
   - TBT (Total Blocking Time)
```

#### Expected Results After Optimization:
- Page Load Time: 50-100% faster
- LCP: < 2.5 seconds
- FCP: < 1.8 seconds
- Total Blocking Time: < 300ms
- JavaScript Execution: 40-50% faster

---

### 3. Mobile Performance Testing

#### Using Mobile Simulation
```
1. Open DevTools (F12)
2. Click device toolbar (top left)
3. Select iPhone 12 or Pixel 5
4. Set network to "Slow 4G"
5. Reload page
6. Check performance on slow network
7. Expected: Page still loads in < 5 seconds
```

#### Using Real Mobile Device
```
1. Connect phone to same WiFi as computer
2. Open Chrome on both devices
3. Go to Settings → Sync & Google Services
4. Enable remote debugging
5. Test website on real 4G/5G
6. Compare with before optimization
```

#### Expected Mobile Improvements:
- 100%+ faster loading
- 3D effects disabled (better performance)
- Smooth scrolling at 60fps
- No layout shifts

---

### 4. Network Analysis

#### Using Chrome DevTools Network Tab
```
1. Open DevTools (F12)
2. Go to "Network" tab
3. Reload page
4. Check:
   - Total page size (should be < 5MB)
   - Number of requests (should be < 100)
   - Largest resources (find optimization opportunities)
   - Cache effectiveness
```

#### Expected Results:
- Images cached for 1 year (304 Not Modified)
- Fonts cached (no repeated downloads)
- CSS/JS minified
- AVIF/WebP formats used for images

---

### 5. JavaScript Bundle Analysis

#### Check Bundle Size
```bash
# Analyze current build
cd my-gtasan-app
npm run build

# Look for the bundle size output:
# Should show improvement after optimization
```

#### Using Next.js Bundle Analyzer
```bash
# Install analyzer
npm i -D @next/bundle-analyzer

# Then update next.config.mjs:
# const withBundleAnalyzer = require('@next/bundle-analyzer')({
#   enabled: process.env.ANALYZE === 'true',
# })
# export default withBundleAnalyzer(nextConfig)

# Run analysis
ANALYZE=true npm run build
```

---

### 6. Rendering Performance

#### Check Frame Rate
```
1. Open DevTools (F12)
2. Go to "Performance" tab
3. In "Rendering" section, enable "Show rendering stats"
4. Scroll page and watch FPS
5. Expected: 60fps on desktop, 30fps on mobile (3D reduced)
```

#### Monitor CPU Usage
```
1. Use Chrome Task Manager (Shift+Esc)
2. Look for high memory/CPU usage
3. ThreeDBackground should use <10% CPU (was 30%+ before)
```

---

### 7. Before & After Comparison

### Metrics to Track

| Metric | Before | After | Target |
|--------|--------|-------|--------|
| **Page Load Time** | TBD | Measure | < 3s |
| **LCP (Largest Contentful Paint)** | TBD | Measure | < 2.5s |
| **FCP (First Contentful Paint)** | TBD | Measure | < 1.8s |
| **FID (First Input Delay)** | TBD | Measure | < 100ms |
| **CLS (Cumulative Layout Shift)** | TBD | Measure | < 0.1 |
| **Total Bundle Size** | TBD | Measure | < 3MB |
| **JavaScript Size** | TBD | Measure | < 1.5MB |
| **CSS Size** | TBD | Measure | < 500KB |
| **Lighthouse Score** | TBD | Measure | 90+ |
| **Mobile Performance** | TBD | Measure | 80+ |

---

### 8. Specific Feature Testing

#### Font Loading
```
1. Slow down network (DevTools → Network → Slow 4G)
2. Reload page
3. Check: Text should appear quickly (font-display:swap)
4. No text flickering after font loads
```

#### Google Analytics
```
1. Open DevTools → Network tab
2. Filter: "gtag" or "google-analytics"
3. Check: GA loads AFTER page interactive
4. Does not appear in critical path
```

#### 3D Background
```
Desktop:
1. Load page on desktop
2. Check: 3D animation visible and smooth (60fps)
3. Scroll page: No lag or frame drops

Mobile:
1. Load page on phone
2. Check: No 3D animation (disabled for performance)
3. Page loads instantly
```

#### Caching
```
1. First visit: Full load (all files downloaded)
2. Second visit: Files served from cache (304 status codes)
3. Check Network tab:
   - Static assets: 304 (cached)
   - Dynamic content: 200 (fresh)
```

---

### 9. Google PageSpeed Insights Testing

1. **Visit**: https://pagespeed.web.dev/
2. **Enter URL**: Your website domain
3. **Check Results**:
   - **Desktop Performance**: Should be 80-95
   - **Mobile Performance**: Should be 75-90
   - **Core Web Vitals**: All green
   - **Opportunities**: Review and implement if critical

4. **Before vs After**:
   - Desktop score should improve 10-20 points
   - Mobile score should improve 15-25 points

---

### 10. Real User Monitoring

#### Google Analytics
```
1. Go to Analytics dashboard
2. Check Web Vitals report
3. Monitor over 1-2 weeks
4. Look for improvements in:
   - Page load time
   - Bounce rate
   - Session duration
```

#### Chrome User Experience Report
```
1. Visit: https://developer.chrome.com/docs/crux/
2. Enter your domain
3. Check historical data
4. Should see improvement in next update
```

---

## Performance Optimization Checklist

- [ ] Build successful with no errors
- [ ] Lighthouse score ≥ 80 (desktop)
- [ ] Lighthouse score ≥ 75 (mobile)
- [ ] LCP < 2.5 seconds
- [ ] FCP < 1.8 seconds
- [ ] CLS < 0.1
- [ ] No JavaScript errors in console
- [ ] 3D animation disabled on mobile
- [ ] Fonts load without flickering
- [ ] Google Analytics doesn't block rendering
- [ ] All images cached (304 status)
- [ ] Bundle size < 3MB total
- [ ] No duplicate packages in node_modules

---

## Troubleshooting

### If Performance Didn't Improve
```
1. Clear browser cache (Ctrl+Shift+Del)
2. Hard refresh (Ctrl+Shift+R)
3. Test in incognito mode
4. Wait 5-10 minutes for CDN cache clear
5. Test in different browser
6. Check network tab for failed resources
```

### If 3D is Still Slow
```
1. Device might have weak GPU
2. Check GPU acceleration in DevTools
3. Consider disabling 3D on all devices:
   - Edit: app/components/animations/ThreeDBackground.jsx
   - Change: if (isMobile) return; → return; // Disable all
```

### If Fonts Are Flickering
```
1. Check font-display:swap in CSS
2. Verify preconnect links in layout.js
3. Fonts should appear as fallback immediately
4. Custom font loads in background
```

---

## Deployment Steps

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Deploy to Other Hosts
```bash
# Build production version
npm run build

# Start production server
npm start

# The .next folder contains optimized files
```

---

## Monitoring Performance

### Set Up Continuous Monitoring
1. Use Vercel Analytics (if using Vercel)
2. Use Google Analytics for user metrics
3. Check PageSpeed Insights monthly
4. Monitor Lighthouse scores

### Weekly Checklist
- [ ] Check Google Analytics Web Vitals
- [ ] Run Lighthouse audit
- [ ] Review Chrome DevTools performance
- [ ] Check for new JavaScript errors
- [ ] Monitor mobile performance

---

## Additional Resources

- [Web.dev Performance Guide](https://web.dev/performance/)
- [Next.js Performance](https://nextjs.org/learn/seo/performance)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)

---

**Last Updated**: 2025-12-03
**Status**: Ready for Testing and Deployment
