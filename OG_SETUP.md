# Open Graph & Social Sharing Setup Guide

## 1. Complete Head Block
I have already updated your `index.html` with these tags. Here is the code for reference:

```html
<!-- Primary Meta Tags -->
<title>Boulekzazel Tayeb | Full-Stack Developer</title>
<meta name="title" content="Boulekzazel Tayeb | Full-Stack Developer" />
<meta name="description" content="I’m a Full-Stack Mobile & Web Developer specializing in building smart, scalable digital solutions." />

<!-- Open Graph / Facebook / LinkedIn -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://mywebsite.com/" />
<meta property="og:title" content="Boulekzazel Tayeb | Full-Stack Developer" />
<meta property="og:description" content="I’m a Full-Stack Mobile & Web Developer specializing in building smart, scalable digital solutions." />
<meta property="og:image" content="https://mywebsite.com/profile.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="Boulekzazel Tayeb Portfolio" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://mywebsite.com/" />
<meta property="twitter:title" content="Boulekzazel Tayeb | Full-Stack Developer" />
<meta property="twitter:description" content="I’m a Full-Stack Mobile & Web Developer specializing in building smart, scalable digital solutions." />
<meta property="twitter:image" content="https://mywebsite.com/profile.jpg" />
```

## 2. Critical Next Steps

### Update the Domain
Currently, the tags use `https://mywebsite.com/`. You **MUST** replace this with your actual deployed domain (e.g., `https://boulekzazel.com/` or `https://your-vercel-app.vercel.app/`).
- Update `og:url`
- Update `twitter:url`
- Update `og:image` (e.g., `https://your-domain.com/profile.jpg`)
- Update `twitter:image`

### Image Requirements
- **File**: You have `profile.jpg` in your `public` folder. This is perfect.
- **Dimensions**: For the best "Large Image" preview (like Behance), your image should ideally be **1200x630 pixels**.
- **Aspect Ratio**: 1.91:1
- **Hosting**: Social media crawlers (Facebook, LinkedIn bot) **cannot** see images on `localhost`. You must deploy your site for the image to appear in previews.

## 3. How to Test

Once you have deployed your site:

1.  **Facebook Sharing Debugger**
    - Go to: [https://developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/)
    - Enter your live URL.
    - Click "Debug".
    - If the image doesn't show, click "Scrape Again" to force Facebook to clear its cache.

2.  **LinkedIn Post Inspector**
    - Go to: [https://www.linkedin.com/post-inspector/](https://www.linkedin.com/post-inspector/)
    - Enter your live URL.
    - It will show you exactly how the card will look on LinkedIn.

3.  **Twitter Card Validator**
    - Go to: [https://cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
    - Enter your live URL.
