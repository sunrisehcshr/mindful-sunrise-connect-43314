

# SEO Crawl Audit Fix Plan

## Summary of Issues Found

The Semrush crawl audit (Health Score: 26/100, 245 issues) identified these critical problems:

1. **Hardcoded canonical in `index.html` (line 20)** — Points ALL pages to the homepage. This is the root cause: Google treats every page as a duplicate of the homepage.
2. **Hardcoded title/description in `index.html` (lines 7-8)** — Static fallback title overrides React Helmet for crawlers that don't render JS.
3. **Missing `canonicalUrl` on several pages** — FAQ, PrivacyPolicy, TermsOfService, and MedicaidLanding don't pass `canonicalUrl` to SEOHead, so they default to the homepage URL.
4. **MedicaidLanding uses raw Helmet** — Uses `<Helmet>` directly instead of `<SEOHead>`, missing canonical entirely.
5. **Sitemaps reference old "havertown" URLs** — The crawl data shows Semrush found `/individual-therapy-havertown-pa` etc., but routes now use `-darby-pa`. Sitemaps need updating.
6. **Old title still in index.html** — "Mental Health Therapy & Psychiatry in Havertown, PA" was found by the crawler as the default title on all pages (the PDF shows this on line 18).

## Fix Plan

### Fix 1 — Remove hardcoded SEO tags from `index.html`
**File:** `index.html`
- **Delete line 20:** `<link rel="canonical" href="https://sunrisehumancare.com/" />`
- **Delete line 8:** the hardcoded `<meta name="description" ...>`
- **Simplify line 7 title** to a generic fallback: `<title>Sunrise Human Care Services</title>` (React Helmet will override per-page)
- Keep only truly global tags: charset, viewport, geo-targeting

### Fix 2 — Add missing `canonicalUrl` to pages without it
- **`src/pages/FAQ.tsx`** — add `canonicalUrl="https://sunrisehumancare.com/faq"`
- **`src/pages/PrivacyPolicy.tsx`** — add `canonicalUrl="https://sunrisehumancare.com/privacy-policy"`
- **`src/pages/TermsOfService.tsx`** — add `canonicalUrl="https://sunrisehumancare.com/terms-of-service"`

### Fix 3 — Convert MedicaidLanding to use SEOHead
**File:** `src/pages/MedicaidLanding.tsx`
- Replace raw `<Helmet>` block with `<SEOHead>` component, including `canonicalUrl="https://sunrisehumancare.com/medicaid-therapy"`

### Fix 4 — Update all sitemap XML files
Update URLs from `-havertown-pa` to `-darby-pa` and set accurate `<lastmod>` dates:
- **`public/sitemap-pages.xml`** — update `/mental-health-havertown-pa` to `/mental-health-darby-pa`
- **`public/sitemap-services.xml`** — update all 9 service page URLs
- **`public/sitemap-conditions.xml`** — update all condition page URLs
- **`public/sitemap-blog.xml`** — update all blog post URLs
- **`public/sitemap.xml`** — update `<lastmod>` to current date

### Fix 5 — Verify navigation uses `<Link>` components
Confirm that Navbar and Footer use React Router `<Link>` (which renders as `<a>` tags visible to crawlers) rather than `useNavigate()`. Based on the codebase review, this appears to already be the case, but will verify during implementation.

## Technical Details

- **Root cause:** Line 20 of `index.html` contains `<link rel="canonical" href="https://sunrisehumancare.com/" />`. Since this is in static HTML, crawlers see it before React Helmet can override it. Semrush (and likely Googlebot on initial crawl) reads this first canonical and ignores the JS-rendered one.
- **SEOHead default:** The `canonicalUrl` prop defaults to `"https://sunrisehumancare.com"` when not provided, which explains why pages without the prop all canonicalize to the homepage.
- **SPA rendering:** The `is_rendered_page: false` flag in the crawl confirms crawlers see static HTML only. Removing the hardcoded canonical ensures the only canonical signal comes from React Helmet (which sets the correct per-page value).

## Files to modify
1. `index.html` — remove canonical + hardcoded description
2. `src/pages/FAQ.tsx` — add canonicalUrl
3. `src/pages/PrivacyPolicy.tsx` — add canonicalUrl
4. `src/pages/TermsOfService.tsx` — add canonicalUrl
5. `src/pages/MedicaidLanding.tsx` — switch to SEOHead with canonicalUrl
6. `public/sitemap-pages.xml` — update URLs
7. `public/sitemap-services.xml` — update URLs
8. `public/sitemap-conditions.xml` — update URLs
9. `public/sitemap-blog.xml` — update URLs
10. `public/sitemap.xml` — update lastmod dates

