# 🛠️ SEO CODE SNIPPETS - READY TO IMPLEMENT

## TABLE OF CONTENTS
1. [Alt Tag Improvements](#1-alt-tag-improvements)
2. [Breadcrumb Component](#2-breadcrumb-component)
3. [Last Updated Component](#3-last-updated-component)
4. [Optimized Script Loading](#4-optimized-script-loading)
5. [Enhanced Meta Tags](#5-enhanced-meta-tags)
6. [Image Optimization Script](#6-image-optimization-script)
7. [Sitemap Enhancements](#7-sitemap-enhancements)

---

## 1. ALT TAG IMPROVEMENTS

### Current Issues:
Many images have generic alt tags that don't help SEO.

### ❌ Bad Examples (Found in your code):
```jsx
alt="Hero Background"
alt="Gang Scene"
alt="CJ's Journey"
alt="Character Development"
```

### ✅ Good Examples (SEO-Optimized):
```jsx
alt="GTA San Andreas MOD APK 2025 hero banner showing Los Santos city"
alt="GTA San Andreas gang warfare between Grove Street and Ballas"
alt="CJ protagonist character journey through San Andreas story missions"
alt="GTA San Andreas character development and skill progression system"
```

### Implementation - Update These Files:

#### File: `app/components/GTAFeaturesDetail.jsx`

Find and replace:
```jsx
// OLD:
<Image src="/cj-journey.jpg" alt="CJ's Journey" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />

// NEW:
<Image
  src="/cj-journey.jpg"
  alt="GTA San Andreas CJ protagonist character journey through Los Santos missions"
  fill
  className="object-cover"
  sizes="(max-width: 1024px) 100vw, 50vw"
  loading="lazy"
/>
```

```jsx
// OLD:
<Image src="/gang-conflicts.jpg" alt="Gang Conflicts" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />

// NEW:
<Image
  src="/gang-conflicts.jpg"
  alt="GTA San Andreas gang warfare and territory control between Grove Street Families and rival gangs"
  fill
  className="object-cover"
  sizes="(max-width: 1024px) 100vw, 50vw"
  loading="lazy"
/>
```

```jsx
// OLD:
<Image src="/character-dev.jpg" alt="Character Development" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />

// NEW:
<Image
  src="/character-dev.jpg"
  alt="GTA San Andreas character development system with muscle, stamina, and skill progression"
  fill
  className="object-cover"
  sizes="(max-width: 1024px) 100vw, 50vw"
  loading="lazy"
/>
```

#### File: `app/components/SystemRequirementsFeatures.jsx`

```jsx
// OLD:
alt="GTA San Andreas - Gang Scene"

// NEW:
alt="GTA San Andreas MOD APK gang system featuring Grove Street Families in Los Santos"
```

---

## 2. BREADCRUMB COMPONENT

### Create: `app/components/Breadcrumbs.jsx`

```jsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Remove locale from path
  const pathWithoutLocale = pathname.replace(/^\/(en|de|fr|it|es|pt|ru|ja)/, '');
  const segments = pathWithoutLocale.split('/').filter(Boolean);

  // Don't show breadcrumbs on homepage
  if (segments.length === 0) return null;

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    ...segments.map((segment, index) => {
      const path = '/' + segments.slice(0, index + 1).join('/');
      const name = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase());
      return { name, path };
    }),
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 px-4 sm:px-6 lg:px-8"
    >
      <ol className="flex items-center gap-2 text-sm text-gray-400">
        {breadcrumbItems.map((item, index) => (
          <li key={item.path} className="flex items-center gap-2">
            {index > 0 && (
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-gray-600 text-xs"
              />
            )}
            {index === breadcrumbItems.length - 1 ? (
              <span className="text-white font-medium">{item.name}</span>
            ) : (
              <Link
                href={item.path}
                className="hover:text-[#00ff87] transition-colors"
              >
                {index === 0 ? (
                  <FontAwesomeIcon icon={faHome} className="text-base" />
                ) : (
                  item.name
                )}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

### Usage - Add to Your Pages:

```jsx
// In any page component (e.g., app/[locale]/gta-cheats/page.js)
import Breadcrumbs from '@/app/components/Breadcrumbs';

export default function Page() {
  return (
    <>
      <Breadcrumbs />
      {/* Rest of your content */}
    </>
  );
}
```

---

## 3. LAST UPDATED COMPONENT

### Create: `app/components/LastUpdated.jsx`

```jsx
'use client';

import { useEffect, useState } from 'react';

export default function LastUpdated({ date = new Date() }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Last updated: {formattedDate}</span>
    </div>
  );
}
```

### Usage:

```jsx
// In your content pages
import LastUpdated from '@/app/components/LastUpdated';

export default function Page() {
  return (
    <div>
      <LastUpdated date="2025-12-12" />
      {/* Your content */}
    </div>
  );
}
```

---

## 4. OPTIMIZED SCRIPT LOADING

### Update: `app/layout.js`

Replace the script tag with Next.js Script component for better performance:

```jsx
// OLD (current):
<script
  async
  defer
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6276217203648123"
  crossOrigin="anonymous"
/>

// NEW (optimized):
import Script from 'next/script';

// In the component:
<Script
  id="adsense-script"
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6276217203648123"
  strategy="lazyOnload"
  crossOrigin="anonymous"
/>
```

### Full Updated Section:

```jsx
import Script from 'next/script';

export default async function RootLayout({ children, params }) {
  // ... your existing code ...

  return (
    <html className="dark" lang={locale} suppressHydrationWarning>
      <head>{/* ... */}</head>
      <body className={`${poppins.variable} antialiased`} suppressHydrationWarning style={{ backgroundColor: '#030712' }}>
        <ClientLayout>
          {children}
        </ClientLayout>

        {/* Analytics and third-party scripts */}
        <Analytics />

        {/* Optimized Google AdSense loading */}
        <Script
          id="adsense-script"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6276217203648123"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
```

---

## 5. ENHANCED META TAGS

### For Individual Pages - Better Templates:

#### GTA Cheats Page:
```jsx
export const metadata = {
  title: 'GTA San Andreas Cheats 2025 - All Codes for PC, PS2, Xbox & Mobile',
  description: 'Complete GTA San Andreas cheat codes list 2025! Get unlimited health, money, weapons, vehicles & more. Works on PC, PlayStation, Xbox, Android & iOS.',
  keywords: ['GTA San Andreas cheats', 'GTA SA cheat codes', 'GTA San Andreas PC cheats', 'GTA mobile cheats', 'weapon cheats GTA SA'],
  openGraph: {
    title: 'GTA San Andreas Cheats 2025 - All Codes & How to Use',
    description: 'Unlock everything! Complete cheat codes for weapons, money, cars, and special abilities.',
    type: 'article',
    publishedTime: '2025-01-01T00:00:00Z',
    modifiedTime: new Date().toISOString(),
  },
};
```

#### GTA Cars Page:
```jsx
export const metadata = {
  title: 'GTA San Andreas Cars Database 2025 - Complete Vehicle List with Stats',
  description: 'Browse all 212+ GTA San Andreas vehicles! Sports cars, bikes, planes, boats with top speeds, stats & spawn locations. Find the fastest cars in SA.',
  keywords: ['GTA San Andreas cars', 'GTA SA vehicles', 'fastest car GTA SA', 'GTA San Andreas car list', 'vehicle stats'],
};
```

---

## 6. IMAGE OPTIMIZATION SCRIPT

### Create: `scripts/optimize-images.js`

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const imageExtensions = ['.jpg', '.jpeg', '.png'];

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (!imageExtensions.includes(ext)) return;

  console.log(`Optimizing: ${path.basename(filePath)}`);

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Optimize JPEG/JPG
    if (ext === '.jpg' || ext === '.jpeg') {
      await image
        .jpeg({ quality: 80, progressive: true })
        .toFile(filePath.replace(ext, '_optimized' + ext));

      // Generate WebP version
      await image
        .webp({ quality: 80 })
        .toFile(filePath.replace(ext, '.webp'));
    }

    // Optimize PNG
    if (ext === '.png') {
      await image
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(filePath.replace(ext, '_optimized' + ext));

      // Generate WebP version
      await image
        .webp({ quality: 80 })
        .toFile(filePath.replace(ext, '.webp'));
    }

    console.log(`✓ Optimized: ${path.basename(filePath)}`);
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error.message);
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else {
      await optimizeImage(filePath);
    }
  }
}

console.log('Starting image optimization...');
processDirectory(publicDir).then(() => {
  console.log('✓ Image optimization complete!');
});
```

### Add to package.json:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "optimize-images": "node scripts/optimize-images.js"
  }
}
```

### Run:
```bash
npm run optimize-images
```

---

## 7. SITEMAP ENHANCEMENTS

### Add Image Sitemap - Update `app/sitemap.ts`

Add this function to include images in your sitemap:

```typescript
// Add after your existing sitemap function
export async function generateImageSitemap() {
  const images = [
    {
      url: 'https://gtasanandreas.info/heroimage2.jpg',
      title: 'GTA San Andreas MOD APK 2025 Hero Banner',
      caption: 'Download GTA San Andreas with unlimited money and unlocked features',
    },
    {
      url: 'https://gtasanandreas.info/logo.png',
      title: 'GTA San Andreas Logo',
      caption: 'Official GTA San Andreas game logo',
    },
    // Add more images as needed
  ];

  return images;
}
```

---

## 8. PERFORMANCE MONITORING

### Create: `app/components/PerformanceMonitor.jsx`

```jsx
'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Cumulative Layout Shift (CLS)
      let clsScore = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsScore += entry.value;
          }
        }
        console.log('CLS:', clsScore);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const firstInput = entries[0];
        console.log('FID:', firstInput.processingStart - firstInput.startTime);
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    }
  }, []);

  return null;
}
```

### Add to Development Layout:

```jsx
// Only in development
{process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
```

---

## 9. LAZY LOADING IMPLEMENTATION

### For Below-fold Images:

```jsx
// Components that are below the fold should use lazy loading
<Image
  src="/image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  loading="lazy"  // Add this!
  quality={80}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### For Components:

```jsx
import dynamic from 'next/dynamic';

// Lazy load heavy components
const GTATimeline = dynamic(() => import('../components/GTATimeline'), {
  loading: () => <div className="h-96 bg-gray-800 animate-pulse" />,
});

const ThreeDBackground = dynamic(() => import('../components/animations/ThreeDBackground'), {
  ssr: false, // Don't render on server
});
```

---

## 10. STRUCTURED DATA EXAMPLES

### Add to Blog Posts:

```jsx
// app/[locale]/blog/[slug]/page.js
const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.description,
  image: post.image,
  datePublished: post.publishedDate,
  dateModified: post.updatedDate || post.publishedDate,
  author: {
    '@type': 'Organization',
    name: 'GTA San Andreas APK',
    url: 'https://gtasanandreas.info',
  },
  publisher: {
    '@type': 'Organization',
    name: 'GTA San Andreas APK',
    logo: {
      '@type': 'ImageObject',
      url: 'https://gtasanandreas.info/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://gtasanandreas.info/blog/${post.slug}`,
  },
};

// Add to page:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
/>
```

---

## 📝 IMPLEMENTATION ORDER

1. **Day 1:** Alt tags + Image optimization
2. **Day 2:** Breadcrumbs + Last updated dates
3. **Day 3:** Script optimization + Meta tags
4. **Day 4:** Test everything + Deploy
5. **Day 5:** Monitor results in Search Console

---

## 🧪 TESTING COMMANDS

```bash
# 1. Build and check for errors
npm run build

# 2. Check build size
npm run build
ls -lh .next/static

# 3. Start production server locally
npm run build && npm start

# 4. Lighthouse audit
npx lighthouse https://gtasanandreas.info --view

# 5. Check bundle analyzer (if installed)
npx @next/bundle-analyzer
```

---

**Ready to implement!** Start with the Quick Wins and work through each section systematically.
