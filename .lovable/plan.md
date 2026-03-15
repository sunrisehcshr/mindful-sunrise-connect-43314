

# Full-Site SEO Audit & Fix Plan

## Critical Issues Found

### 1. Duplicate MedicalOrganization Schema in index.html (HIGH)
`index.html` lines 89-114 contain a hardcoded `MedicalOrganization` JSON-LD schema. This duplicates the React-injected schemas from `SEOHead.tsx` (MedicalBusiness) and `SchemaMarkup.tsx` (MedicalOrganization + WebSite). Google sees **3 overlapping entity definitions** for the same business with conflicting details:
- `index.html`: uses `"url": "https://www.sunrisehumancare.com"` (with www)
- `SEOHead.tsx`: uses `"url": "https://sunrisehumancare.com"` (no www)
- `SchemaMarkup.tsx`: uses `"url": "https://sunrisehumancare.com/"` (trailing slash)

**Fix**: Remove the hardcoded schema from `index.html`. The React components already handle this properly with `@id` references.

### 2. Canonical URL Mismatch on Service/Condition Pages (HIGH)
`ServicePageLayout.tsx` passes `canonicalUrl` as a relative path (e.g., `/bipolar-disorder-therapy-havertown-pa`) directly to `SEOHead.tsx`. The canonical tag then outputs `<link rel="canonical" href="/bipolar-disorder-therapy-havertown-pa" />` instead of the full absolute URL. Google requires absolute canonical URLs.

This affects **all 20+ service and condition pages** using `ServicePageLayout`.

**Fix**: Prepend `https://sunrisehumancare.com` in `ServicePageLayout.tsx` before passing to SEOHead.

### 3. og:image Uses Relative URL (MEDIUM)
Default `ogImage` in SEOHead is `/og-image.png` — a relative path. Social platforms need absolute URLs to render preview cards. All pages not explicitly setting ogImage (homepage, about, services, conditions, contact, appointment, FAQ, etc.) have broken social previews.

**Fix**: Change default to `https://sunrisehumancare.com/og-image.png`.

### 4. og:url Inconsistency in index.html (MEDIUM)
`index.html` line 69: `og:url` uses `https://www.sunrisehumancare.com` (with www), but the canonical and all React pages use the non-www version. This signals conflicting preferred URLs to crawlers.

**Fix**: Change to `https://sunrisehumancare.com` in index.html.

### 5. WordPress References in robots.txt (LOW)
Lines 9, 16 reference `/wp-admin/` and `wp-admin/admin-ajax.php`. This is a React SPA — WordPress rules are irrelevant and signal to bots that this might be a WordPress site (potentially triggering WP-specific attack scans).

**Fix**: Remove WordPress-specific rules.

### 6. Duplicate Meta Tags Between index.html and SEOHead (MEDIUM)
`index.html` has hardcoded OG tags, Twitter cards, geo tags, canonical, and description that duplicate what `SEOHead.tsx` injects via React Helmet. On the homepage, this creates **duplicate meta tags** in the DOM. On other pages, the `index.html` tags persist (as fallbacks before JS loads) but conflict with page-specific values.

**Fix**: Remove all SEO meta tags from `index.html` except the `<title>` and basic `<meta description>` (needed for pre-JS rendering). Let React Helmet handle the rest.

### 7. SearchAction Schema Points to Non-Existent Search (LOW)
`SchemaMarkup.tsx` line 20: `"urlTemplate": "https://sunrisehumancare.com/?s={search_term_string}"` — the site has no search functionality. This is misleading structured data.

**Fix**: Remove the `potentialAction` SearchAction from the WebSite schema.

### 8. Social Media sameAs URLs Inconsistent (LOW)
`SEOHead.tsx` uses `/sunrisehumancare` for Facebook and `/sunrise-human-care-services` for LinkedIn. `SchemaMarkup.tsx` uses `/sunrisehcs` for all four platforms. These should be consistent and point to actual profiles.

**Fix**: Consolidate to correct, verified URLs in both files.

### 9. Missing `<h1>` Semantic Check on Key Pages
Blog posts, the FAQ page, and some condition pages should be verified for proper heading hierarchy. Not audited in detail but flagged for review.

### 10. Breadcrumb Generation Doesn't Match URL Structure
The `generateBreadcrumbsFromUrl` function checks for `services/` and `conditions/` path segments, but actual routes are flat (e.g., `/anxiety-therapy-havertown-pa`, not `/services/anxiety-therapy`). This means breadcrumbs only show "Home > Page Name" with no category level, which is correct for the URL structure but means the breadcrumb schema doesn't provide Google with topic hierarchy.

**Not a bug** — just a limitation of the flat URL structure.

---

## Summary Table

| # | Issue | Severity | Files |
|---|---|---|---|
| 1 | Duplicate schema in index.html | HIGH | `index.html` |
| 2 | Relative canonical URLs on 20+ pages | HIGH | `ServicePageLayout.tsx` |
| 3 | Relative og:image URL | MEDIUM | `SEOHead.tsx` |
| 4 | www vs non-www og:url mismatch | MEDIUM | `index.html` |
| 5 | WordPress rules in robots.txt | LOW | `robots.txt` |
| 6 | Duplicate meta tags in index.html | MEDIUM | `index.html` |
| 7 | Fake SearchAction schema | LOW | `SchemaMarkup.tsx` |
| 8 | Inconsistent sameAs social URLs | LOW | `SEOHead.tsx`, `SchemaMarkup.tsx` |

---

## Implementation Plan

### Task 1 — Clean up index.html
- Remove the hardcoded JSON-LD schema (lines 88-114)
- Remove duplicate OG/Twitter/geo meta tags (lines 65-77) — keep only `<title>`, `<meta description>`, viewport, charset, and font loading
- Fix remaining `og:url` if kept to use non-www

### Task 2 — Fix relative canonical URLs in ServicePageLayout
- Prepend `https://sunrisehumancare.com` to the `canonicalUrl` prop before passing to SEOHead
- One-line change in `ServicePageLayout.tsx`

### Task 3 — Fix og:image default to absolute URL
- Change default `ogImage` in `SEOHead.tsx` from `"/og-image.png"` to `"https://sunrisehumancare.com/og-image.png"`

### Task 4 — Clean up robots.txt
- Remove WordPress-specific Disallow/Allow rules
- Keep the essential directives

### Task 5 — Fix SchemaMarkup.tsx
- Remove `potentialAction` SearchAction block
- Align `sameAs` URLs with SEOHead.tsx values

### Task 6 — Align sameAs social URLs
- Verify and unify social profile URLs across SEOHead.tsx and SchemaMarkup.tsx

### Files to edit
- `index.html`
- `src/components/services/ServicePageLayout.tsx`
- `src/components/SEOHead.tsx`
- `public/robots.txt`
- `src/components/SchemaMarkup.tsx`

