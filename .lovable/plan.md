

## SEO Audit: What's Done, What's Pending, and Next.js Feasibility

### What Has Been Completed

1. **Canonical URL fix** -- BlogPost.tsx now uses `sunrisehumancare.com` (confirmed in code)
2. **Prerender.io edge function** -- `netlify/edge-functions/prerender.ts` is in place with bot detection and PRERENDER_TOKEN support
3. **Redirect ordering in netlify.toml** -- `/resources -> /blog` 301 redirects are above the SPA catch-all
4. **Duplicate structured data removed from index.html** -- No JSON-LD in static HTML; schemas injected by React components only
5. **Font loading optimized** -- Using `preload` + `media="print"` swap pattern in index.html
6. **OG image dimensions** -- `og:image:width` and `og:image:height` present in both index.html and SEOHead
7. **FAQPage schema on /faq** -- FAQ page has proper JSON-LD schema data
8. **Sitemaps updated** -- Varied lastmod dates, 3 additional blog URLs added, priority/changefreq included
9. **Duplicate react-helmet removed** -- Only `react-helmet-async` remains in package.json
10. **Internal cross-linking on service pages** -- All service pages already have `relatedServices` arrays linking to related conditions/services

---

### What Is Still Pending

| # | Issue | Impact |
|---|-------|--------|
| 1 | **PRERENDER_TOKEN not set in Netlify** | Critical -- without this, bots still see empty SPA shell. Must be set manually in Netlify dashboard. |
| 2 | **Sitemap lists 3 blog URLs that don't exist as routes** | `anxiety-signs-darby`, `supporting-depression-darby`, `seasonal-affective-disorder-darby` are in sitemap-blog.xml but have no matching routes in App.tsx or page components. Google will crawl these and get soft 404s. Either create the pages or remove from sitemap. |
| 3 | **gptengineer.js script still loads** | The comment says "DO NOT REMOVE" -- this is a Lovable platform requirement and cannot be removed while hosted on Lovable. It will be removed automatically in production builds on custom hosting. |
| 4 | **No `og-image.png` file exists** | Both index.html and SEOHead reference `/og-image.png` but no such file exists in `/public`. Social sharing previews will show a broken image. Need to create/upload an OG image. |
| 5 | **Duplicate meta tags** | index.html has static meta tags (title, description, canonical, OG, Twitter, geo) that will conflict with what react-helmet-async injects. With prerendering, bots see rendered HTML which may have duplicates. index.html should be stripped to bare minimum. |
| 6 | **Condition pages lack cross-linking to service pages** | Service pages link to conditions, but condition pages (in `src/pages/conditions/`) should be checked for reciprocal links back to services. |
| 7 | **Google Search Console re-indexing** | Manual step -- request indexing for key pages once prerendering is verified working. |
| 8 | **Google Business Profile** | External task -- verify GBP links to sunrisehumancare.com and has reviews. |

---

### Can This Project Be Converted to Next.js?

**No, not within Lovable.**

Lovable projects are built on **React + Vite + Tailwind CSS**. The platform does not support Next.js, Nuxt, SvelteKit, or any other framework. Key constraints:

- **No server-side rendering runtime** -- Lovable's sandbox runs client-side only; there's no Node.js server for SSR/SSG
- **No Next.js file-based routing** -- The project uses `react-router-dom` with `BrowserRouter`
- **Build pipeline is Vite-only** -- `vite.config.ts` and the entire toolchain is Vite-based
- **Lovable's deploy target (Netlify)** serves static files with SPA fallback, not a Next.js serverless deployment

**The prerender.io approach already solves the core problem** that Next.js would solve (making content visible to search bots). With prerendering working correctly, Google will see fully-rendered HTML -- achieving SSR-equivalent SEO without migrating frameworks.

If you want Next.js in the future, you'd need to **self-host outside Lovable** and rewrite the routing layer.

---

### Recommended Implementation Plan

**Step 1: Fix phantom sitemap URLs**
Remove the 3 non-existent blog URLs from `sitemap-blog.xml` (`anxiety-signs-darby`, `supporting-depression-darby`, `seasonal-affective-disorder-darby`) OR create actual page components and routes for them.

**Step 2: Clean up duplicate meta tags in index.html**
Strip index.html down to only essential static tags (charset, viewport, critical CSS, font loading, GA). Remove the duplicate title, description, canonical, OG, Twitter, and geo tags since react-helmet-async handles all of these per-page. This prevents conflicting signals to crawlers.

**Step 3: Create/upload OG image**
Add an actual `og-image.png` (1200x630px) to `/public` so social sharing previews work.

**Step 4: Audit condition pages for cross-links**
Ensure condition pages in `src/pages/conditions/` link back to related service pages for stronger internal linking.

Steps 1-2 are the highest priority as they directly affect how Google processes the site.

