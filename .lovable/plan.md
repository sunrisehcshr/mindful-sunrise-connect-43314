

# SEO Audit Verification & Fix Plan

## Audit Verification: What's True vs Already Fixed

| # | Audit Finding | Actual Status |
|---|---|---|
| 1 | **Site blocks crawlers (403)** | **Cannot fix in code** — this is a hosting/CDN/Cloudflare issue, not in the codebase. Needs server-side config. |
| 2 | **Zero schema/structured data** | **FALSE** — Site already has MedicalBusiness, MedicalOrganization, LocalBusiness, BreadcrumbList, FAQPage, and MedicalService schemas across SEOHead.tsx, SchemaMarkup.tsx, and Index.tsx. However, there are issues (see below). |
| 3 | **No sitemap detected** | **FALSE** — Sitemap index exists at `public/sitemap.xml` with 4 segmented sitemaps (pages, services, conditions, blog). |
| 4 | **Low index coverage** | **Likely caused by #1 (403 blocking)** — all pages exist and are in sitemaps. |
| 5 | **Title tags repetitive** | **FALSE** — All pages have unique titles (verified across Index, About, Services, Contact, Conditions, FAQ, Appointment). |
| 6 | **Meta descriptions not differentiated** | **FALSE** — All pages have unique meta descriptions. |
| 7 | **No GBP integration** | **TRUE** — No Google Business Profile link on site. |
| 8 | **Thin content** | **Partially true** — Some condition pages may be thin. Need to verify. |
| 9 | **No therapist profile pages** | **Partially true** — Team bios exist on About page but no individual therapist pages with dedicated URLs. |
| 10 | **No patient reviews/testimonials** | **TRUE** — No testimonials section or Google Reviews widget. |
| 11 | **Missing robots.txt** | **FALSE** — `public/robots.txt` exists with proper sitemap reference. |
| 12 | **IBHS page missing** | **TRUE** — No IBHS page exists in the codebase. |
| 13 | **No blog/FAQ** | **FALSE** — Blog with 5 posts and FAQ page both exist. |

## Real Issues Found in Codebase

### Schema Issues (Fix)
1. **Invalid `ServiceAreas` schema type** in SEOHead.tsx (line 160) — `"@type": "ServiceAreas"` is not a valid Schema.org type. Should be removed or converted to `areaServed` within the existing MedicalBusiness schema.
2. **Duplicate schemas** — `MedicalBusiness` (SEOHead.tsx) + `LocalBusiness` (Index.tsx) + `MedicalOrganization` (SchemaMarkup.tsx) all represent the same entity. These should be consolidated using `@id` references to avoid confusing Google.
3. **Logo URL mismatch** — SEOHead.tsx references `logo.png` but the actual file is `logo.svg`.

### Sitemap Issues (Fix)
4. **Missing condition pages from sitemap-conditions.xml** — Only has grief + relationship therapy. Missing 7 other condition pages (schizophrenia, eating disorders, substance use, BPD, sleep disorders, dissociative disorders, somatic disorders).
5. **Stale lastmod dates** — All sitemaps show `2026-01-20`. Should be updated to current date.

### Missing Content (Build)
6. **No testimonials/reviews section** — Audit is correct.
7. **No IBHS service page** — Audit is correct.
8. **No individual therapist profile pages** — Only team section on About page.

### Other Fixes
9. **Add HIPAA/Privacy Policy link visibility** — Footer already has Privacy Policy link, but no explicit HIPAA compliance notice.
10. **index.html `<title>` is generic** — Shows "Mental Health Clinic in Havertown, PA" before React loads; should match the homepage SEO title.

---

## Implementation Plan

### Phase 1: Schema & Technical Fixes (High Impact, Low Effort)

**Task 1 — Fix invalid ServiceAreas schema in SEOHead.tsx**
Remove the `localServiceAreasSchema` block (lines 158-211) since the area info is already in the `MedicalBusiness` schema's `areaServed`.

**Task 2 — Consolidate duplicate schemas**
- Remove the duplicate `LocalBusiness` JSON-LD from `Index.tsx` (it duplicates `MedicalBusiness` in SEOHead.tsx)
- Add `@id` references in SchemaMarkup.tsx and SEOHead.tsx so they reference the same entity
- Fix logo URL from `logo.png` to `logo.svg`

**Task 3 — Fix sitemap-conditions.xml**
Add all 9 condition pages that exist in App.tsx routes but are missing from the conditions sitemap. Update all lastmod dates to `2026-03-13`.

**Task 4 — Update index.html title**
Change the static `<title>` to match the React SEO title: "Mental Health Therapy & Psychiatry in Havertown, PA | Sunrise Human Care Services"

### Phase 2: Content Additions (Medium Effort)

**Task 5 — Add Testimonials Section**
Create a `TestimonialsSection` component with structured `Review` schema markup. Add to homepage and key service pages.

**Task 6 — Add HIPAA compliance notice to footer**
Add a brief HIPAA compliance statement next to the Privacy Policy link in the footer.

**Task 7 — Create IBHS Service Page**
Build a dedicated `/ibhs-havertown-pa` page targeting "IBHS Delaware County PA" keywords with proper schema, at least 600 words of content, and add to sitemap.

### Phase 3: Future Considerations (Not in Codebase Scope)

These require action outside the codebase:
- Fix 403 crawler blocking (hosting/CDN config)
- Claim/optimize Google Business Profile
- Register on Psychology Today, Zocdoc, Healthgrades
- Submit sitemap to Google Search Console
- Individual therapist profile pages (requires content from client)

### Files to Edit
- `src/components/SEOHead.tsx` — Remove invalid schema, fix logo URL
- `src/pages/Index.tsx` — Remove duplicate LocalBusiness schema
- `src/components/SchemaMarkup.tsx` — Add `@id` consolidation
- `public/sitemap-conditions.xml` — Add missing condition pages
- `public/sitemap-services.xml` — Update lastmod dates
- `public/sitemap-pages.xml` — Update lastmod dates
- `public/sitemap-blog.xml` — Update lastmod dates
- `public/sitemap.xml` — Update lastmod dates
- `index.html` — Fix static title tag
- `src/components/Footer/Footer.tsx` — Add HIPAA notice
- New: `src/components/TestimonialsSection.tsx`
- New: `src/pages/services/IBHSServices.tsx`
- `src/App.tsx` — Add IBHS route

