# Google AdSense - Quick Action Plan (Right Now)

Your AdSense Client ID is now active: `ca-pub-6276217203648123`

---

## IMMEDIATE TASKS (Next 30 Minutes)

### TASK 1: Build & Test (5 minutes)

```bash
# Open terminal in your project directory
npm run build
```

**If successful:** ✓ Continue to next step
**If error:** ✗ Fix errors, rebuild

---

### TASK 2: Run Development Server (2 minutes)

```bash
npm run dev
```

**Open browser:** `http://localhost:3000`

**Check:**
- [ ] Website loads
- [ ] No errors in console (Press F12)
- [ ] Navigation works
- [ ] All pages accessible

---

## STEP 1: GET SLOT IDs FROM ADSENSE (10 minutes)

### Go to AdSense Dashboard

1. Open: https://www.google.com/adsense/
2. Sign in with your Google account
3. Click: "By sites" → Select your website (`gtasanandreas.info`)
4. Click: "Display ads"

### Create Ad Units

Click: "CREATE NEW AD UNIT"

Create these 5 units (name them exactly):

| # | Name | Format | Slot ID |
|---|------|--------|---------|
| 1 | Homepage Top | Responsive | ________ |
| 2 | Homepage Middle | Responsive | ________ |
| 3 | Homepage Bottom | Responsive | ________ |
| 4 | Article Ad | In-article | ________ |
| 5 | Sidebar Ad | Responsive | ________ |

**For each unit:**
1. Enter name
2. Select format (Responsive recommended)
3. Click CREATE
4. Copy the **Slot ID** (10-digit number)
5. Paste in table above

---

## STEP 2: ADD ADS TO HOMEPAGE (5 minutes)

### Find Homepage File

Locate: `app/[locale]/page.js` or `app/[locale]/HomeContent.jsx`

### Add This at Top

```jsx
import AdSenseAd from '@/app/components/AdSenseAd';
```

### Add Ads to Page (3 locations)

**After hero section:**
```jsx
<AdSenseAd adSlot="PASTE_SLOT_1_HERE" format="auto" />
```

**Middle of page:**
```jsx
<AdSenseAd adSlot="PASTE_SLOT_2_HERE" format="auto" />
```

**Before footer:**
```jsx
<AdSenseAd adSlot="PASTE_SLOT_3_HERE" format="auto" />
```

**Replace:**
- `PASTE_SLOT_1_HERE` with your actual slot ID (e.g., `1234567890`)
- `PASTE_SLOT_2_HERE` with your 2nd slot ID
- `PASTE_SLOT_3_HERE` with your 3rd slot ID

---

## STEP 3: ADD ADS TO DOWNLOAD PAGE (5 minutes)

### Find Download File

Locate: `app/[locale]/download/page.js`

### Add Import

```jsx
import AdSenseAd from '@/app/components/AdSenseAd';
```

### Add 2-3 Ads

```jsx
{/* Top of page */}
<AdSenseAd adSlot="PASTE_SLOT_HERE" format="auto" />

{/* Middle of page */}
<AdSenseAd adSlot="PASTE_SLOT_HERE" format="auto" />

{/* Bottom of page */}
<AdSenseAd adSlot="PASTE_SLOT_HERE" format="auto" />
```

---

## STEP 4: TEST AGAIN (2 minutes)

```bash
# In your terminal
npm run build
```

**Check for:**
- ✓ No errors
- ✓ "Compiled successfully"

```bash
npm run dev
```

**Verify:**
- ✓ Homepage loads with ads
- ✓ Download page loads with ads
- ✓ No layout breaking
- ✓ No console errors

---

## STEP 5: DEPLOY TO PRODUCTION (Varies)

### If Using Vercel (Recommended)

```bash
vercel deploy --prod
```

### If Using Another Host

Follow your hosting provider's deployment steps.

### After Deployment

1. Visit your live site: `https://gtasanandreas.info`
2. Check pages load correctly
3. Ads should be present (may take 24-48 hours to serve content)

---

## STEP 6: MONITOR ADSENSE DASHBOARD

### Check Status

1. Go to: https://www.google.com/adsense/
2. Look at your site status
3. Monitor the metrics:
   - Impressions
   - Clicks
   - Revenue

### Timeline for Ads to Show

```
Immediately: Code live ✓
24 hours: Google processes
48 hours: Ads appear (usually)
```

---

## SUMMARY: What You Just Did

```
✓ Your Client ID: ca-pub-6276217203648123
✓ Script added to: app/layout.js
✓ Component created: app/components/AdSenseAd.jsx
✓ Ready to: Add ads to pages
```

---

## FILES TO EDIT

### You Need to Edit These:

1. **app/[locale]/page.js** or **HomeContent.jsx**
   - Add import
   - Add 3 ads

2. **app/[locale]/download/page.js**
   - Add import
   - Add 2-3 ads

3. **(Optional) Other Pages**
   - Add import
   - Add 1-2 ads per page

### Don't Edit:

- `app/layout.js` ✓ Already done
- `app/components/AdSenseAd.jsx` ✓ Already done

---

## QUICK COMMANDS REFERENCE

```bash
# Build project
npm run build

# Run development server
npm run dev

# Deploy (Vercel)
vercel deploy --prod

# Check if build works
npm run build  # If succeeds = good to go
```

---

## EXPECTED OUTPUT AFTER ADDING ADS

### On Homepage
```
┌─────────────────────┐
│     Navigation      │
├─────────────────────┤
│                     │
│     Hero Section    │
│                     │
├─────────────────────┤
│  ▓▓ AD UNIT #1 ▓▓    │  ← You added this
├─────────────────────┤
│                     │
│   Features          │
│                     │
├─────────────────────┤
│  ▓▓ AD UNIT #2 ▓▓    │  ← You added this
├─────────────────────┤
│   Benefits          │
├─────────────────────┤
│  ▓▓ AD UNIT #3 ▓▓    │  ← You added this
├─────────────────────┤
│      Footer         │
└─────────────────────┘
```

---

## COMMON ISSUES & FIXES

### Issue: Build Fails

**Fix:**
```bash
rm -rf .next
npm install
npm run build
```

### Issue: Ads Not Showing on Dev Server

**This is normal!** Localhost doesn't show ads. They'll show on live site after 24-48 hours.

### Issue: Layout Breaks

**Fix:** Check spacing/margins around `<AdSenseAd />` component.

### Issue: Console Errors

**Check:** Are slot IDs valid? (10 digits, numbers only)

---

## SUCCESS CHECKLIST

- [ ] Built successfully (`npm run build`)
- [ ] Dev server runs (`npm run dev`)
- [ ] Created 5 ad units
- [ ] Got all slot IDs
- [ ] Added import to homepage
- [ ] Added 3 ads to homepage
- [ ] Added import to download page
- [ ] Added 2-3 ads to download page
- [ ] Tested locally (no errors)
- [ ] Ready to deploy

---

## WHAT HAPPENS AFTER DEPLOYMENT

```
Timeline:
─────────

NOW: Code deployed ✓
      → Ads code active on live site

24 hours: Google processes
      → Ads framework initialized
      → AdSense script validates

48 hours: Ads serve
      → First impressions appear
      → Ads start showing on pages

1 week: Dashboard shows metrics
      → Impressions accumulating
      → Clicks appearing
      → Earnings tracking
```

---

## NEXT: WHAT TO MONITOR

### First 24 Hours
- [ ] Website works
- [ ] No errors
- [ ] Pages load correctly

### 24-48 Hours
- [ ] Check AdSense dashboard
- [ ] Look for first impressions
- [ ] Verify script is processing

### 48+ Hours
- [ ] Ads should appear
- [ ] Monitor clicks
- [ ] Track earnings

### First Week
- [ ] Daily dashboard check
- [ ] Verify earnings posting
- [ ] No account issues

---

## YOUR ADSENSE INFO

```
Client ID:      ca-pub-6276217203648123
Website:        https://gtasanandreas.info
Dashboard:      https://www.google.com/adsense/
Script Status:  ✓ ACTIVE
Component:      ✓ READY
Next:           Add to pages & deploy
```

---

## IMPORTANT REMINDERS

⚠️ **DO NOT:**
- Click your own ads
- Ask others to click your ads
- Refresh pages repeatedly
- Use fake traffic

✅ **DO:**
- Create quality content
- Wait 48 hours for ads
- Monitor dashboard
- Follow policies

---

**Status:** Ready to Add Ads to Pages
**Your Client ID:** ca-pub-6276217203648123
**Next Step:** Create slot IDs and add to pages

Go ahead and start! Let me know if you need help with any step.
