# Google AdSense Implementation Examples

This document provides code examples for adding AdSense ads to your website pages.

---

## Quick Reference

### Your AdSense Information (TO BE FILLED IN)

```
Client ID:     ca-pub-XXXXXXXXXXXXXXXX  (Replace with your ID from Google AdSense)
Ad Slot 1:     1234567890               (Replace with your ad unit slot ID)
Ad Slot 2:     0987654321               (Replace with your ad unit slot ID)
Ad Slot 3:     5555555555               (Replace with your ad unit slot ID)
```

**Where to find these:**
1. Go to https://www.google.com/adsense/
2. Click "By sites" → select your website
3. Click "Display ads"
4. Each ad unit shows: `data-ad-client` (Client ID) and `data-ad-slot` (Slot ID)

---

## Example 1: Homepage with Multiple Ads

**File**: `/app/[locale]/page.js` or `/app/[locale]/HomeContent.jsx`

```jsx
import AdSenseAd from '@/app/components/AdSenseAd';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="hero-section">
        {/* Your existing hero content */}
      </section>

      {/* AD PLACEMENT 1: Top Ad (Below Hero) */}
      <AdSenseAd adSlot="1234567890" format="auto" />

      {/* Main Content Section 1 */}
      <section className="features-section">
        {/* Your content here */}
      </section>

      {/* AD PLACEMENT 2: Middle Ad */}
      <AdSenseAd adSlot="0987654321" format="auto" />

      {/* Main Content Section 2 */}
      <section className="benefits-section">
        {/* Your content here */}
      </section>

      {/* AD PLACEMENT 3: Bottom Ad (Before Footer) */}
      <AdSenseAd adSlot="5555555555" format="auto" />

      {/* Footer Section */}
      <footer>
        {/* Your footer */}
      </footer>
    </main>
  );
}
```

---

## Example 2: Blog/Article Page with Sidebar Ad

**File**: `/app/[locale]/blog/[slug]/page.js`

```jsx
import AdSenseAd from '@/app/components/AdSenseAd';

export default function ArticlePage() {
  return (
    <div className="flex gap-6">
      {/* Main Content - 2/3 width */}
      <article className="w-2/3">
        <h1>Article Title</h1>

        {/* Article intro */}
        <p>First paragraph of content...</p>

        {/* AD PLACEMENT: In-article ad (after intro) */}
        <AdSenseAd adSlot="1234567890" format="auto" />

        {/* More article content */}
        <h2>Section 1</h2>
        <p>Section content...</p>

        {/* AD PLACEMENT: Mid-article ad */}
        <AdSenseAd adSlot="0987654321" format="auto" />

        {/* Continue article content */}
        <h2>Section 2</h2>
        <p>More content...</p>

        {/* AD PLACEMENT: End of article */}
        <AdSenseAd adSlot="5555555555" format="auto" />

        {/* Related posts or CTA */}
      </article>

      {/* Sidebar - 1/3 width */}
      <aside className="w-1/3">
        {/* AD PLACEMENT: Sidebar ad */}
        <div className="sticky top-4">
          <AdSenseAd adSlot="9999999999" format="auto" />
        </div>

        {/* Other sidebar content */}
      </aside>
    </div>
  );
}
```

---

## Example 3: Download Page with Prominent Ad

**File**: `/app/[locale]/download/page.js`

```jsx
import AdSenseAd from '@/app/components/AdSenseAd';

export default function DownloadPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="text-center py-12">
        <h1>Download GTA San Andreas MOD APK</h1>
        <p>Get unlimited money and features</p>
      </section>

      {/* Prominent Ad - High visibility */}
      <section className="bg-gradient py-12">
        <div className="max-w-2xl mx-auto">
          <AdSenseAd adSlot="1234567890" format="auto" />
        </div>
      </section>

      {/* Download Button Section */}
      <section className="text-center py-12">
        <button className="btn-primary">Download Now</button>
      </section>

      {/* Features List */}
      <section className="features grid grid-cols-3 gap-6 py-12">
        {/* 3 features */}
      </section>

      {/* Mid-page Ad */}
      <AdSenseAd adSlot="0987654321" format="auto" />

      {/* System Requirements */}
      <section className="requirements py-12">
        {/* Requirements content */}
      </section>

      {/* FAQ Section */}
      <section className="faq py-12">
        {/* FAQ items */}
      </section>

      {/* Bottom Ad */}
      <AdSenseAd adSlot="5555555555" format="auto" />
    </main>
  );
}
```

---

## Example 4: Using AdSense in a Component (Reusable Pattern)

**File**: `/app/components/ContentSection.jsx`

```jsx
'use client';

import AdSenseAd from './AdSenseAd';

export default function ContentSection({
  title,
  content,
  showAd = false,
  adSlot = null
}) {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2>{title}</h2>
        <div>{content}</div>

        {showAd && adSlot && (
          <AdSenseAd adSlot={adSlot} format="auto" />
        )}
      </div>
    </section>
  );
}
```

**Usage:**
```jsx
<ContentSection
  title="Features"
  content={<p>Your content here</p>}
  showAd={true}
  adSlot="1234567890"
/>
```

---

## Example 5: Grid Layout with Multiple Ads

**File**: `/app/[locale]/guides/page.js`

```jsx
import AdSenseAd from '@/app/components/AdSenseAd';

export default function GuidesPage() {
  const guides = [
    { id: 1, title: 'Guide 1', content: '...' },
    { id: 2, title: 'Guide 2', content: '...' },
    { id: 3, title: 'Guide 3', content: '...' },
    // ... more guides
  ];

  return (
    <main className="min-h-screen py-12">
      {/* Top Ad */}
      <AdSenseAd adSlot="1234567890" format="auto" />

      {/* Guides Grid */}
      <div className="grid grid-cols-3 gap-6 py-12">
        {guides.map((guide, idx) => (
          <div key={guide.id} className="card">
            <h3>{guide.title}</h3>
            <p>{guide.content}</p>

            {/* Ad after every 3 guides */}
            {(idx + 1) % 3 === 0 && (
              <div className="col-span-3 py-6">
                <AdSenseAd
                  adSlot={idx === 2 ? "0987654321" : "5555555555"}
                  format="auto"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Ad */}
      <AdSenseAd adSlot="9999999999" format="auto" />
    </main>
  );
}
```

---

## Example 6: Mobile-Optimized Ad Placement

**File**: `/app/components/ResponsiveAdSection.jsx`

```jsx
'use client';

import AdSenseAd from './AdSenseAd';

export default function ResponsiveAdSection() {
  return (
    <div className="w-full">
      {/* Desktop: Wide ad format */}
      <div className="hidden lg:block">
        <AdSenseAd
          adSlot="1234567890"
          format="horizontal"
        />
      </div>

      {/* Tablet: Medium ad format */}
      <div className="hidden md:block lg:hidden">
        <AdSenseAd
          adSlot="0987654321"
          format="auto"
        />
      </div>

      {/* Mobile: Vertical ad format */}
      <div className="md:hidden">
        <AdSenseAd
          adSlot="5555555555"
          format="vertical"
        />
      </div>
    </div>
  );
}
```

---

## Example 7: Conditional Ad Display

Display ads only when certain conditions are met:

```jsx
'use client';

import AdSenseAd from '@/app/components/AdSenseAd';
import { useEffect, useState } from 'react';

export default function ConditionalAdSection() {
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    // Show ads after page loads (avoids conflicts)
    setShowAd(true);
  }, []);

  return (
    <>
      {showAd && (
        <AdSenseAd adSlot="1234567890" format="auto" />
      )}
    </>
  );
}
```

---

## Implementation Checklist by Page

### Required Pages for Google AdSense Approval

- [ ] **Homepage** (`/app/[locale]/page.js`)
  - Add 1-2 ads
  - Place strategically around content

- [ ] **About Page** (`/app/[locale]/about/page.js`)
  - Add 1 ad (mid-content)

- [ ] **Download Page** (`/app/[locale]/download/page.js`)
  - Add 2-3 ads (strategic placement)

- [ ] **FAQ Page** (`/app/[locale]/faq/page.js`)
  - Add 1-2 ads

- [ ] **Guides/Blog** (`/app/[locale]/guides/page.js`)
  - Add 2-3 ads

---

## Ad Slot IDs Management

Create a configuration file for easy ad slot management:

**File**: `/app/config/adsense.js`

```javascript
export const ADSENSE_CONFIG = {
  clientId: 'ca-pub-XXXXXXXXXXXXXXXX', // Your client ID
  adSlots: {
    homepageTop: '1234567890',
    homepageMiddle: '0987654321',
    homepageBottom: '5555555555',

    articleIntro: '1111111111',
    articleMid: '2222222222',
    articleEnd: '3333333333',

    downloadPage: '4444444444',

    sidebar: '6666666666',

    default: '7777777777',
  },
  formats: {
    responsive: 'auto',
    leaderboard: '728x90',
    mpu: '300x250',
    vertical: '300x600',
    horizontal: '728x90',
  }
};
```

Then use it:

```jsx
import { ADSENSE_CONFIG } from '@/app/config/adsense';

export default function MyPage() {
  return (
    <AdSenseAd
      adSlot={ADSENSE_CONFIG.adSlots.homepageTop}
      format={ADSENSE_CONFIG.formats.responsive}
    />
  );
}
```

---

## Performance Optimization

### Lazy Loading Ads (Recommended)

```jsx
'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const AdSenseAd = dynamic(() => import('@/app/components/AdSenseAd'), {
  ssr: false,
  loading: () => <div className="h-96 bg-gray-200 animate-pulse" />,
});

export default function PageWithLazyAds() {
  return (
    <main>
      {/* Content */}

      <Suspense fallback={<div className="h-96 bg-gray-200" />}>
        <AdSenseAd adSlot="1234567890" format="auto" />
      </Suspense>

      {/* More content */}
    </main>
  );
}
```

---

## Testing Your Implementation

### 1. Check if Ads Load
- Open page in browser
- Open DevTools (F12)
- Look for `pagead2.googlesyndication.com` in Network tab

### 2. Check Console for Errors
- No red errors should appear
- Warning about ad blockers is normal

### 3. Test on Different Devices
- Desktop browser
- Mobile browser
- Tablet browser

### 4. Verify Ad Codes
Each ad should have:
- Correct `data-ad-client` (your Client ID)
- Correct `data-ad-slot` (your Slot ID)
- `data-ad-format="auto"`

---

## Common Ad Formats

| Format | Size | Best For |
|--------|------|----------|
| Auto/Responsive | Adaptive | Mobile-first, all devices |
| Leaderboard | 728x90px | Top/bottom of page |
| Medium Rectangle | 300x250px | Sidebar, in-content |
| Vertical Banner | 300x600px | Sidebar content |
| Wide Skyscraper | 120x600px | Narrow sidebars |
| In-article | Article text | Between paragraphs |

---

## Monetization Tips

1. **Placement**
   - Above the fold (immediately visible)
   - In high-traffic areas
   - Not interrupting content flow

2. **Content**
   - Original, high-quality content attracts better ads
   - Niche content (gaming) has higher CPM
   - Regular updates improve ranking

3. **Traffic**
   - Increase organic traffic via SEO
   - More impressions = more clicks
   - Better CTR with engaged users

4. **User Experience**
   - Don't overload with ads
   - Keep 3-4 ads max per page
   - Ensure fast page load

---

## Next Steps

1. Get your AdSense Client ID
2. Replace `ca-pub-XXXXXXXXXXXXXXXX` in:
   - `/app/layout.js` (main script)
   - `/app/components/AdSenseAd.jsx` (component)
   - Any config files

3. Get your ad slot IDs for each placement

4. Replace example slot IDs (1234567890, etc.) with real ones

5. Test thoroughly on staging

6. Deploy to production

---

**Remember**: Never click your own ads or ask users to click them. This violates AdSense policies and can result in account suspension.
