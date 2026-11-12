NEWERA PROTECT GUIDE - UPLOAD-READY STATIC SITE
Domain: https://neweraprotect-en.vercel.app/

DEPLOY ON VERCEL
1. Unzip. Upload the CONTENTS of website-package/ (index.html must be at the project root).
   - Vercel dashboard: Add New > Project > upload folder, or run `vercel --prod` inside the folder.
   - Framework preset: "Other". No build command. Output directory: leave blank / "." .
2. Open https://neweraprotect-en.vercel.app/ and click every button once.

AFTER DEPLOYMENT
- Google Search Console: your verification meta tag is already in index.html.
  Add the property, then Sitemaps > submit: sitemap.xml
- Bing Webmaster Tools: add the site, copy the meta tag Bing gives you, paste it in the <head> of index.html
  (or import from Search Console). Then submit https://neweraprotect-en.vercel.app/sitemap.xml
- Contact email: open pages/contact.html and add a public email address (none was supplied).

IMAGES
- The product image is an ORIGINAL ILLUSTRATION (assets/images/product/newera-protect-bottle-illustration.svg).
  No product photos were supplied. If you have written permission to use the official product image,
  save it as WebP in assets/images/product/ and change the two <img src> in index.html (hero).
- Do not hotlink images from other sites.

AFFILIATE LINK (used exactly, no parameters added)
https://mwebkivo.com/10195/21738/7/
It is in 7 CTA buttons on index.html with rel="sponsored noopener noreferrer".

FILES
index.html, 404.html, robots.txt, sitemap.xml, favicon.ico, manifest.webmanifest, vercel.json (security + cache headers),
assets/{css,js,images}, pages/{privacy-policy,terms,affiliate-disclosure,disclaimer,contact}.html
