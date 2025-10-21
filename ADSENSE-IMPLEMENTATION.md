# AdSense Implementation Guide

## ✅ AdSense Code Status

### What's Already Done:
1. ✅ **AdSense Script** added to `<head>` in `index.html`
2. ✅ **Reusable AdSense Component** created (`src/components/AdSense.tsx`)
3. ✅ **Ad Placements** strategically added to:
   - Homepage (2 ad units)
   - Calculator page (1 ad unit after results)

---

## 📍 Current Ad Placements

### Homepage (`/`)
1. **After Features Section** - High visibility, top of page
   - Ad Slot: `1234567890` (placeholder)
   
2. **Before Testimonials** - Mid-page engagement
   - Ad Slot: `9876543210` (placeholder)

### Calculator Page (`/calculator`)
3. **After Results** - Shown only when user gets results
   - Ad Slot: `1122334455` (placeholder)

---

## 🔧 How to Get Real Ad Slot IDs

### Step 1: Get Approved
1. Wait for Google AdSense approval (1-2 weeks)
2. Check your email for approval notification

### Step 2: Create Ad Units in AdSense Dashboard
1. Log in to [Google AdSense](https://www.google.com/adsense)
2. Go to **Ads** → **By ad unit**
3. Click **+ New ad unit**
4. Choose **Display ads**
5. Settings:
   - **Ad type**: Responsive
   - **Size**: Responsive (recommended)
   - **Name**: Give it a descriptive name (e.g., "Homepage Top Banner")
6. Click **Create**
7. **Copy the Ad Slot ID** (looks like: `1234567890`)

### Step 3: Create Multiple Ad Units
Create separate ad units for each placement:
- "Homepage - After Features"
- "Homepage - Before Testimonials"
- "Calculator - After Results"

### Step 4: Replace Placeholder IDs
Open these files and replace the placeholder ad slot IDs:

#### `src/pages/Index.tsx`
```tsx
// Line 44: Replace 1234567890 with your real ad slot ID
<AdSense adSlot="YOUR_REAL_AD_SLOT_1" adFormat="auto" />

// Line 205: Replace 9876543210 with your real ad slot ID
<AdSense adSlot="YOUR_REAL_AD_SLOT_2" adFormat="auto" />
```

#### `src/pages/Calculator.tsx`
```tsx
// Line 868: Replace 1122334455 with your real ad slot ID
<AdSense adSlot="YOUR_REAL_AD_SLOT_3" adFormat="auto" />
```

---

## 📝 Ad Unit Configuration

### Current Settings:
- **data-ad-format**: `auto` (responsive)
- **data-full-width-responsive**: `true`
- **Publisher ID**: `ca-pub-8497285724891966`

### To Change Ad Format:
Edit the `adFormat` prop in the AdSense component:
- `"auto"` - Responsive (recommended)
- `"fluid"` - Fills container
- `"rectangle"` - Fixed rectangle shape

Example:
```tsx
<AdSense adSlot="1234567890" adFormat="fluid" />
```

---

## 🎨 Adding More Ad Placements

### To Add a New Ad:

1. **Import AdSense Component**:
```tsx
import AdSense from "@/components/AdSense";
```

2. **Add Ad Container**:
```tsx
{/* Your custom ad placement */}
<div className="my-8">
  <AdSense adSlot="YOUR_AD_SLOT_ID" adFormat="auto" />
</div>
```

### Recommended Additional Placements:

#### Blog Page
```tsx
{/* After blog post list */}
<AdSense adSlot="YOUR_BLOG_AD_SLOT" adFormat="auto" />
```

#### Food Guide Page
```tsx
{/* Between food categories */}
<AdSense adSlot="YOUR_FOOD_GUIDE_AD_SLOT" adFormat="auto" />
```

#### Success Stories Page
```tsx
{/* Between success stories */}
<AdSense adSlot="YOUR_SUCCESS_AD_SLOT" adFormat="auto" />
```

---

## 🚫 AdSense Best Practices

### DO ✅
- Wait for approval before expecting ads to show
- Use responsive ad units (`adFormat="auto"`)
- Place ads naturally between content sections
- Test on mobile and desktop
- Keep ads above the fold when possible
- Monitor performance in AdSense dashboard

### DON'T ❌
- Click your own ads (will get you banned!)
- Place too many ads (max 3 per page recommended)
- Hide ads with CSS
- Encourage users to click ads
- Place ads in pop-ups or overlays
- Modify AdSense code manually

---

## 📊 Testing Your Ads

### Before Approval:
- Ads won't show until Google approves your site
- You'll see blank spaces where ads should appear
- This is normal - don't worry!

### After Approval:
1. Clear your browser cache
2. Visit your site in incognito/private mode
3. Check that ads load properly
4. Test on mobile devices
5. **Don't click your own ads!**

### If Ads Don't Show:
1. Check browser console for errors
2. Verify ad slot IDs are correct
3. Make sure AdSense script is in `<head>`
4. Wait 24-48 hours after adding new ad units
5. Check AdSense dashboard for policy violations

---

## 💰 Optimizing Ad Revenue

### High-Performing Placements:
1. **Above the fold** (visible without scrolling)
2. **Within content** (between paragraphs)
3. **After user engagement** (after calculator results)
4. **In sidebar** (for desktop users)

### Ad Sizes That Perform Well:
- **728x90** (Leaderboard) - Desktop header
- **300x250** (Medium Rectangle) - Sidebar, content
- **336x280** (Large Rectangle) - Content
- **320x100** (Mobile Banner) - Mobile header
- **Responsive** - Adapts to all screen sizes (recommended)

---

## 🔍 Monitoring Performance

### AdSense Dashboard Metrics:
- **Page RPM**: Revenue per 1000 pageviews
- **CPC**: Cost per click
- **CTR**: Click-through rate
- **Impressions**: How many times ads were shown

### Goals:
- CTR: 1-3% is typical
- Keep improving content to increase traffic
- More traffic = more ad revenue

---

## 📱 Mobile Optimization

All your ad placements use:
```tsx
data-full-width-responsive="true"
```

This ensures ads:
- Resize automatically on mobile
- Maintain good user experience
- Don't break your layout

---

## 🆘 Troubleshooting

### Problem: Ads Not Showing
**Solution:**
- Wait for AdSense approval
- Check ad slot IDs are correct
- Clear cache and test in incognito
- Wait 24 hours after creating new ad units

### Problem: "AdSense code not found"
**Solution:**
- Verify script is in `<head>` of `index.html`
- Check `data-ad-client` matches your publisher ID
- Re-deploy your website

### Problem: Low Revenue
**Solution:**
- Increase website traffic
- Improve content quality
- Test different ad placements
- Use responsive ad units
- Target higher-paying keywords

### Problem: Policy Violation
**Solution:**
- Check AdSense email for details
- Fix the violation immediately
- Request review in AdSense dashboard

---

## 📞 Support

### Google AdSense Help:
- [AdSense Help Center](https://support.google.com/adsense)
- [AdSense Community Forum](https://support.google.com/adsense/community)
- [Policy Center](https://support.google.com/adsense/answer/48182)

### Common Questions:
- **When will I get paid?**: After earning $100 threshold
- **Payment method**: Set up in AdSense → Payments
- **Tax info**: Required for payments (in AdSense settings)

---

## ✨ Next Steps

1. ✅ **Done**: AdSense script installed
2. ✅ **Done**: Ad components created
3. ✅ **Done**: Strategic placements added
4. ⏳ **Wait**: For Google AdSense approval
5. 🔄 **Then**: Get real ad slot IDs from dashboard
6. 🔄 **Then**: Replace placeholder IDs
7. 🎉 **Then**: Start earning!

---

**Your website is ready for ads!** Once you get approved and add real ad slot IDs, you'll start earning revenue from your traffic. 🚀💰

*Last Updated: October 21, 2025*
