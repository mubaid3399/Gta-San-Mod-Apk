# Performance Optimization Guide for GTA San Andreas Website

**Current PageSpeed Score:** 44/100 🔴
**Target Score:** 90+/100 🟢

## Critical Issues & Solutions

### 1. Image Optimization (HIGHEST PRIORITY)

#### Problems:
- FCP: 5.4s (needs to be < 1.8s)
- LCP: 6.5s (needs to be < 2.5s) - Likely caused by hero image
- 18 KiB savings available from image optimization

#### Solutions:

**A. Optimize Hero Image:**
```bash
# Convert hero images to WebP format
# Use tools like: https://squoosh.app/
# Or install sharp for batch conversion:
npm install -D sharp

# Create optimized versions:
# - Original: /public/heroimage2.png (1200x630)
# - WebP: /public/heroimage2.webp (smaller file size)
# - AVIF: /public/heroimage2.avif (even smaller)
# - Placeholder: /public/heroimage2-blur.jpg (tiny, 20px wide)
```

**B. Add Image Preloading:**
Add to [app/layout.js](my-gtasan-app/app/layout.js:111-119):
```jsx
<head>
  {/* CRITICAL: Preload hero image */}
  <link
    rel="preload"
    as="image"
    href="/heroimage2.webp"
    type="image/webp"
    fetchpriority="high"
  />

  {/* Existing head content... */}
</head>
```

**C. Use Blur Placeholder:**
Update HeroSection component to use blur data URL:
```jsx
<Image
  src={backgroundImage}
  alt="Hero Background"
  fill
  className="object-cover"
  priority
  quality={85} // Reduce from default 100
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Add tiny blur image
  sizes="100vw"
/>
```

---

### 2. JavaScript Optimization (TBT: 690ms → Target: <200ms)

#### Problems:
- 1,455 KiB unused JavaScript
- Total Blocking Time: 690ms
- Main thread work: 5.5s
- 17 long tasks

#### Solutions:

**A. Dynamic Imports for Heavy Components:**

Create [app/components/DynamicComponents.js](my-gtasan-app/app/components/DynamicComponents.js):
```javascript
import dynamic from 'next/dynamic';

// Load heavy 3D components only when needed
export const ThreeDBackground = dynamic(
  () => import('./animations/ThreeDBackground'),
  {
    ssr: false,
    loading: () => <div className="min-h-screen bg-gray-900" />
  }
);

// Load animation libraries lazily
export const LottieAnimation = dynamic(
  () => import('./animations/LottieAnimation'),
  { ssr: false }
);

// Load framer-motion components lazily
export const FramerMotionWrapper = dynamic(
  () => import('./animations/FramerMotionWrapper'),
  { ssr: false }
);

// Load AOS lazily
export const ScrollRevealWrapper = dynamic(
  () => import('./animations/ScrollRevealWrapper'),
  { ssr: false }
);
```

**B. Defer Non-Critical Scripts:**

Update [app/layout.js](my-gtasan-app/app/layout.js:116-118):
```jsx
<head>
  {/* Move Google AdSense to end of body with defer/async */}
  {/* Remove from head */}
</head>
<body>
  {children}

  {/* Load AdSense after content */}
  <script
    async
    defer
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6276217203648123"
    crossOrigin="anonymous"
  />
</body>
```

**C. Remove Unused Dependencies:**

Check if you're actually using all these:
```bash
# Check usage of heavy libraries:
# - @react-three/fiber (large)
# - @react-three/drei (large)
# - framer-motion (large)
# - lottie-react (large)
# - aos (can be replaced with CSS)

# If not used on every page, load them dynamically
```

---

### 3. Font Optimization

#### Current Issue:
- Font display: 10ms savings
- Fonts blocking render

#### Solution:

Update [app/layout.js](my-gtasan-app/app/layout.js:5-11):
```javascript
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  preload: true,
  display: "swap", // Already correct ✓
  fallback: ['system-ui', 'Arial'], // Add fallback
});
```

Add font preload in head:
```jsx
<head>
  <link
    rel="preload"
    href="/_next/static/media/[hash].woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
</head>
```

---

### 4. CSS Optimization (89 KiB unused CSS)

#### Solutions:

**A. Update Tailwind Config:**

Create/update [tailwind.config.js](my-gtasan-app/tailwind.config.js):
```javascript
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // Remove unused utilities
  safelist: [],
}
```

**B. Use PurgeCSS** (if using external CSS):
```bash
npm install -D @fullhuman/postcss-purgecss
```

---

### 5. Third-Party Script Optimization

#### Current Issues:
- Google Analytics blocking
- Google AdSense blocking
- Google Tag Manager

#### Solutions:

**A. Use Next.js Script Component:**

Create [app/components/Analytics.jsx](my-gtasan-app/app/components/Analytics.jsx):
```javascript
'use client';

import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      {/* Google Analytics - Load after page interactive */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR_GA_ID');
        `}
      </Script>
    </>
  );
}
```

Add to layout:
```jsx
import Analytics from './components/Analytics';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

### 6. Enhanced Next.js Config

Update [next.config.mjs](my-gtasan-app/next.config.mjs):

```javascript
const nextConfig = {
  // ... existing config ...

  // Add these optimizations:
  swcMinify: true, // Use SWC for minification

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console.logs
  },

  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      '@fortawesome/react-fontawesome',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
      'framer-motion',
      '@react-three/fiber',
      '@react-three/drei',
      'lottie-react',
    ],
    // Enable modern bundling
    bundlePagesRouterDependencies: true,
  },

  // Optimize images more aggressively
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // Add remote patterns if needed
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gtasanandreas.info',
      },
    ],
  },
};
```

---

### 7. Blog Images Optimization

Your blog posts have large images. Update [app/data/blogPosts.js](my-gtasan-app/app/data/blogPosts.js):

**Before:**
```javascript
coverImage: '/Blog/Blog-3/Blog-cover.png',
```

**After:**
```javascript
coverImage: '/Blog/Blog-3/Blog-cover.webp', // Convert to WebP
```

**Action Items:**
1. Convert all blog images to WebP/AVIF
2. Resize images to appropriate dimensions:
   - Cover images: 800x450px max
   - Content images: 600px width max
3. Use Next.js Image component in blog posts

---

### 8. Implement Resource Hints

Add to [app/layout.js](my-gtasan-app/app/layout.js:112-115):
```jsx
<head>
  {/* DNS prefetch for external domains */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
  <link rel="dns-prefetch" href="https://www.google-analytics.com" />
  <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />

  {/* Preload critical assets */}
  <link rel="preload" href="/heroimage2.webp" as="image" type="image/webp" fetchpriority="high" />
</head>
```

---

### 9. Code Splitting Strategy

Create route-based code splitting:

**app/[locale]/HomeContent.jsx** should lazy load sections:
```javascript
'use client';

import dynamic from 'next/dynamic';

// Load above-the-fold immediately
import HeroSection from '../components/sections/HeroSection';

// Load below-the-fold lazily
const ContentSection = dynamic(() => import('../components/sections/ContentSection'));
const FAQSection = dynamic(() => import('../components/FAQSection'));
const GTATimeline = dynamic(() => import('../components/GTATimeline'));
const SystemRequirements = dynamic(() => import('../components/SystemRequirementsFeatures'));

export default function HomeContent() {
  return (
    <>
      <HeroSection />
      <ContentSection />
      <FAQSection />
      <GTATimeline />
      <SystemRequirements />
    </>
  );
}
```

---

## Implementation Priority

### Phase 1: Quick Wins (30 mins) - Expected improvement: +15-20 points
1. ✅ Convert hero image to WebP (use Squoosh.app)
2. ✅ Add image preload to layout.js
3. ✅ Move AdSense script to end of body
4. ✅ Add blur placeholder to hero image

### Phase 2: Code Optimization (1-2 hours) - Expected improvement: +20-25 points
1. ✅ Implement dynamic imports for heavy components
2. ✅ Remove unused dependencies
3. ✅ Update Next.js config with optimizations
4. ✅ Defer third-party scripts

### Phase 3: Asset Optimization (1-2 hours) - Expected improvement: +10-15 points
1. ✅ Convert all blog images to WebP
2. ✅ Resize images to appropriate dimensions
3. ✅ Add proper image sizes attribute
4. ✅ Implement lazy loading for below-fold images

### Phase 4: Advanced (2-3 hours) - Expected improvement: +5-10 points
1. ✅ Implement route-based code splitting
2. ✅ Add service worker for caching
3. ✅ Optimize CSS with PurgeCSS
4. ✅ Add CDN for static assets

---

## Testing & Monitoring

After each phase, test with:
- PageSpeed Insights: https://pagespeed.web.dev/
- WebPageTest: https://www.webpagetest.org/
- Lighthouse (Chrome DevTools)

Monitor with:
- Vercel Analytics (if on Vercel)
- Google Analytics Core Web Vitals report

---

## Expected Final Scores

| Metric | Current | Target | Expected |
|--------|---------|--------|----------|
| Performance | 44 | 90+ | 92-95 |
| FCP | 5.4s | <1.8s | 1.2-1.5s |
| LCP | 6.5s | <2.5s | 1.8-2.2s |
| TBT | 690ms | <200ms | 100-180ms |
| CLS | 0 | 0 | 0 ✓ |
| Speed Index | 7.1s | <3.4s | 2.5-3.0s |

---

## Additional Recommendations

1. **Use a CDN**: Host images on Cloudflare, Vercel, or AWS CloudFront
2. **Enable Brotli compression**: Better than gzip (already configured in Next.js)
3. **Implement HTTP/3**: Use Cloudflare or similar CDN
4. **Add Service Worker**: For offline caching and faster repeat visits
5. **Monitor Core Web Vitals**: Set up real user monitoring

---

## Commands to Run

```bash
# Install optimization tools
npm install -D sharp @fullhuman/postcss-purgecss

# Convert images to WebP (if using sharp)
node scripts/optimize-images.js

# Build and analyze bundle
npm run build
npm run analyze # if you have bundle analyzer

# Test production build locally
npm run build && npm start

# Check bundle size
npm run build -- --profile
```

---

## Files to Modify

1. ✅ [app/layout.js](my-gtasan-app/app/layout.js) - Add preloads, move scripts
2. ✅ [app/components/sections/HeroSection.jsx](my-gtasan-app/app/components/sections/HeroSection.jsx) - Add blur, sizes
3. ✅ [next.config.mjs](my-gtasan-app/next.config.mjs) - Enhanced optimizations
4. ✅ [app/data/blogPosts.js](my-gtasan-app/app/data/blogPosts.js) - Update image paths
5. ✅ Create: app/components/DynamicComponents.js
6. ✅ Create: app/components/Analytics.jsx
7. ✅ Convert: All images in /public to WebP/AVIF

---

## Need Help?

If you want me to implement any of these optimizations automatically, just ask!

Example: "Claude, implement Phase 1 optimizations"
