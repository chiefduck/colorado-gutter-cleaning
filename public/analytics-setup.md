# Analytics Setup Guide

This project is ready for analytics tracking! Follow these steps to connect your preferred analytics platforms.

## Google Analytics 4 (Recommended for Ads)

1. Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com)

2. Copy your Measurement ID (looks like `G-XXXXXXXXXX`)

3. Add this script to `index.html` in the `<head>` section:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Facebook Pixel (For Facebook/Instagram Ads)

1. Create a Facebook Pixel in your Facebook Business Manager

2. Copy your Pixel ID

3. Add this script to `index.html` in the `<head>` section:

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## Events Being Tracked

The following events are automatically tracked and ready for your analytics:

### Core Conversion Events:
- ✅ **page_view** - When users land on any page
- ✅ **form_view** - When quote form comes into view
- ✅ **form_submit** - When users submit the quote form (KEY CONVERSION)
- ✅ **form_error** - When form validation fails
- ✅ **cta_click** - When any CTA button is clicked
- ✅ **phone_click** - When phone number is clicked (KEY CONVERSION)

### User Engagement Events:
- ✅ **exit_intent_shown** - When exit popup appears
- ✅ **exit_intent_converted** - When user converts from exit popup
- ✅ **service_view** - When specific services are viewed

## Google Ads Conversion Tracking

For Google Ads, you'll want to set up conversion tracking for these key events:

1. **Lead Form Submission** (`form_submit` event)
2. **Phone Call Clicks** (`phone_click` event)

### Setting up Google Ads Conversions:

1. Go to Google Ads → Tools → Conversions
2. Create a new conversion action
3. Select "Website"
4. Use "Event" as the source
5. Map to the event names above

## Meta (Facebook) Ads Conversion Tracking

For Facebook/Instagram Ads:

1. **Lead** - Map to `form_submit` event
2. **Contact** - Map to `phone_click` event
3. **ViewContent** - Automatically tracked via PageView

## Testing Analytics

All events log to the browser console in development mode. To test:

1. Open browser DevTools (F12)
2. Go to Console tab
3. Interact with the site (click buttons, submit forms)
4. Look for messages like: `📊 Analytics Event: form_submit`

## Data Attributes for Additional Tracking

Throughout the site, elements have `data-track` attributes:
- `data-track="sticky-header-quote"` - Sticky header quote button
- `data-track="sticky-header-call"` - Sticky header call button
- `data-track="quote-form-submit"` - Main form submit button

You can use these for additional custom tracking with Tag Manager if needed.

## Privacy & GDPR Compliance

Remember to:
- Add a privacy policy page
- Include cookie consent banner if serving EU users
- Disclose data collection in your terms

## Need Help?

Check these resources:
- [Google Analytics 4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [Facebook Pixel Setup Guide](https://www.facebook.com/business/help/952192354843755)
- [Google Ads Conversion Tracking](https://support.google.com/google-ads/answer/1722022)
