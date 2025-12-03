# Google AdSense - Quick Start Checklist

This is your quick reference guide. For detailed instructions, see `ADSENSE_SETUP_GUIDE.md`.

---

## STEP 1: Google AdSense Signup (Before Coding)

- [ ] Create/use Google Account
- [ ] Go to https://www.google.com/adsense/
- [ ] Click "Sign up now"
- [ ] Enter website: `https://gtasanandreas.info`
- [ ] Fill in required information
- [ ] Submit for review

**Wait 3-7 days for approval email**

---

## STEP 2: Get Your AdSense Credentials (After Approval)

Once approved:

- [ ] Log in to Google AdSense dashboard
- [ ] Find your **Client ID** (format: `ca-pub-XXXXXXXXXX`)
- [ ] Create ad units and note their **Slot IDs**
- [ ] Create at least 3 different ad units for various placements

### Where to Find These:
```
AdSense Dashboard → By sites → [Your site] → Display ads
```

---

## STEP 3: Update Your Code (5 Minutes)

### 3.1 Update Main Layout Script

**File**: `app/layout.js` (Line 113)

Change:
```javascript
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
```

To:
```javascript
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ACTUAL_ID"
```

### 3.2 Update AdSense Component

**File**: `app/components/AdSenseAd.jsx` (Line 19)

Change:
```jsx
data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
```

To:
```jsx
data-ad-client="ca-pub-YOUR_ACTUAL_ID"
```

---

## STEP 4: Add Ads to Your Pages (10 Minutes)

### Import Component
At the top of any page file:

```jsx
import AdSenseAd from '@/app/components/AdSenseAd';
```

### Add Ads

**Homepage** - Add after hero section:
```jsx
<AdSenseAd adSlot="YOUR_SLOT_ID_1" format="auto" />
```

**Article Pages** - Add in content:
```jsx
{/* After intro */}
<AdSenseAd adSlot="YOUR_SLOT_ID_2" format="auto" />

{/* Mid-content */}
<AdSenseAd adSlot="YOUR_SLOT_ID_3" format="auto" />

{/* End of article */}
<AdSenseAd adSlot="YOUR_SLOT_ID_4" format="auto" />
```

**Download Pages** - Add prominently:
```jsx
<AdSenseAd adSlot="YOUR_SLOT_ID_5" format="auto" />
```

---

## STEP 5: Test Locally

```bash
npm run dev
```

Open your browser and check:
- [ ] Ads render without errors
- [ ] No console errors (F12)
- [ ] Layout not broken
- [ ] Responsive on mobile

---

## STEP 6: Build & Deploy

```bash
npm run build
npm run start
```

- [ ] Build completes successfully
- [ ] No TypeScript errors
- [ ] Ads display on live site
- [ ] Links to AdSense dashboard work

---

## STEP 7: Monitor Earnings

Daily:
- [ ] Check AdSense dashboard
- [ ] Monitor impressions
- [ ] Track clicks
- [ ] Note earnings

---

## Important Files Created

| File | Purpose |
|------|---------|
| `ADSENSE_SETUP_GUIDE.md` | Complete step-by-step guide (READ THIS FIRST) |
| `ADSENSE_IMPLEMENTATION_EXAMPLES.md` | Code examples for various page types |
| `app/components/AdSenseAd.jsx` | Reusable ad component |
| `app/layout.js` | Main script added here |
| This file | Quick checklist |

---

## Your Next Actions (In Order)

### Week 1: Setup
- [ ] Read `ADSENSE_SETUP_GUIDE.md` completely
- [ ] Sign up for Google AdSense
- [ ] Wait for approval

### Week 2: Implementation
- [ ] Get your Client ID and Slot IDs
- [ ] Update `app/layout.js` with Client ID
- [ ] Update `app/components/AdSenseAd.jsx` with Client ID
- [ ] Add ads to 3-5 key pages
- [ ] Test locally
- [ ] Build and deploy

### Week 3: Optimization
- [ ] Monitor earnings in AdSense dashboard
- [ ] Check which placements perform best
- [ ] Optimize ad placement
- [ ] Increase website traffic (focus on SEO)

### Ongoing
- [ ] Check dashboard daily
- [ ] Track earnings monthly
- [ ] Improve content quality
- [ ] Build organic traffic

---

## Troubleshooting

### Problem: "Ads not showing"
- Verify your Client ID is correct
- Check browser console (F12) for errors
- Wait 24-48 hours for first ads to appear
- Check AdSense dashboard status

### Problem: "Low CTR/Revenue"
- Optimize ad placement
- Increase website traffic
- Improve content quality
- Use multiple ad formats

### Problem: "Build errors"
- Ensure Client ID replaced in both files
- No syntax errors in JSX
- Clear next cache: `rm -rf .next`
- Rebuild: `npm run build`

---

## Important Reminders

⚠️ **CRITICAL - AdSense Policies**

❌ **DON'T DO:**
- Click your own ads
- Ask others to click your ads
- Use fake traffic/bots
- Place ads deceptively
- Violate content policies

✅ **DO:**
- Create quality, original content
- Follow placement guidelines
- Monitor for suspicious activity
- Review policies monthly

---

## Getting Help

**For AdSense Questions:**
- https://support.google.com/adsense
- AdSense Help Center
- AdSense Support Forum

**For Technical Issues:**
- Check `ADSENSE_SETUP_GUIDE.md` - Part 7
- Next.js Docs: https://nextjs.org/docs
- React Docs: https://react.dev

---

## Quick Reference: Files to Edit

**Only 2 files need your Client ID:**

1. **app/layout.js** - Line 113
   ```javascript
   client=ca-pub-YOUR_ID_HERE
   ```

2. **app/components/AdSenseAd.jsx** - Line 19
   ```jsx
   data-ad-client="ca-pub-YOUR_ID_HERE"
   ```

That's it! Everything else is ready to go.

---

**Status**: Ready for implementation ✓

**Date**: December 2025

**Version**: 1.0
