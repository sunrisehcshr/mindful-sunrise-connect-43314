

# Full SEO Audit & Fix Plan for Sunrise Human Care Services

## Critical Issues Found

### 1. SPA Rendering Problem (HIGHEST PRIORITY)
This is a React single-page application. Google crawlers see only the initial HTML shell (the `index.html` loading spinner) before JavaScript renders content. This means **all your pages may appear empty to search engines**.

**Fix**: There is no server-side rendering available in this Lovable stack. However, we can mitigate this by:
- Ensuring `react-helmet-async` is working correctly (it is)
- The meta tags in `<head>` are present but page **body content** is invisible to crawlers that don't execute JS
- **Recommendation**: Use Google Search Console to check if pages are being indexed. Google's modern crawler does render JS, but it's slower and lower priority. This is a known limitation of SPAs.

### 2. FAQs, Benefits & Approaches NOT Rendered on Most Pages (CRITICAL)
`ServicePageLayout` accepts `benefits`, `approaches`, and `faqs` props but **explicitly does not render them** (comments on lines 38-40: "Not rendered"). This means:
- Many service and condition pages are **thin content** — just a hero, a small children section, a CTA, and related services
- FAQ schema is added via `SEOHead` generically (same 3 questions on every therapy/treatment page) but the actual page-specific FAQs are never shown
- Google penalizes thin content, especially for YMYL (Your Money or Your Life) health topics

**Fix**: Render benefits, approaches, and FAQs sections inside `ServicePageLayout` so every service/condition page has substantial, unique content.

### 3. Broken Internal Links (HIGH)
Found links pointing to non-existent routes:
- `/conditions/panic-disorder` — does not exist (in AnxietyTherapy.tsx)
- `/conditions/generalized-anxiety-disorder` — does not exist
- `/conditions/social-anxiety-disorder` — does not exist
- `/blog/managing-panic-attacks` — does not exist
- `/trauma-therapy-havertown-pa` — should be `/ptsd-therapy-havertown-pa` (in IndividualTherapy.tsx)

**Fix**: Replace all broken links with correct existing routes.

### 4. Duplicate SEOHead on Several Pages (MEDIUM)
Pages like `ADHDTreatment`, `BPDTherapy`, `GriefTherapy` render `<SEOHead>` directly AND pass meta info to `ServicePageLayout` which also renders `<SEOHead>`. This creates **duplicate meta tags and duplicate schema markup** (two MedicalBusiness schemas, two breadcrumb schemas per page).

**Fix**: Remove the standalone `<SEOHead>` from pages that use `ServicePageLayout` (which already renders SEOHead).

### 5. Generic FAQ Schema on All Therapy Pages (MEDIUM)
`SEOHead` auto-injects the same 3 FAQ questions on any URL containing "therapy", "treatment", or "counseling". This means every service page has identical FAQ schema, which Google may flag as spammy.

**Fix**: Replace the generic FAQ schema with page-specific FAQs passed via props. Only inject FAQ schema when actual unique FAQs are provided.

### 6. Incomplete Schema Markup (MEDIUM)
- `SchemaMarkup` only lists 2 services (Individual Therapy, IBHS) in `hasOfferCatalog` — should list all 13+ services
- No `MedicalService` schema for condition pages
- Footer services list missing IBHS

### 7. Missing `<h1>` Semantic Issues
- Home page hero (`WarmHeroSection`) needs verification that the H1 is properly structured
- Some condition pages have generic titles (e.g., "Grief & Loss Therapy") without location — should be "Grief & Loss Therapy in Havertown, PA"

### 8. Missing Image Alt Text & OG Images
- Service pages all use the same default `og-image.png` — each should have a unique OG image or at least a descriptive one
- Several pages reference `/therapy-in-havertown.jpg` as hero image but it's not displayed (heroImage prop unused in layout)

---

## Implementation Plan

### Step 1: Render FAQs, Benefits & Approaches in ServicePageLayout
Add three new rendered sections to `ServicePageLayout`:
- **Benefits section**: Render the benefits array as a styled list
- **Approaches section**: Render treatment approaches as cards
- **FAQ section**: Render FAQs as an accordion with proper FAQ schema per page

This single change will add 500-1000+ words of unique content to every service and condition page.

### Step 2: Fix FAQ Schema to Be Page-Specific
- Remove the generic FAQ injection from `SEOHead` (lines 269-302)
- Add FAQ schema generation in `ServicePageLayout` using the actual `faqs` prop data
- Each page gets unique FAQ schema matching its visible FAQ content

### Step 3: Fix All Broken Internal Links
- AnxietyTherapy.tsx: Replace `/conditions/panic-disorder`, `/conditions/generalized-anxiety-disorder`, `/conditions/social-anxiety-disorder` with `/anxiety-therapy-havertown-pa` (self-link or remove)
- AnxietyTherapy.tsx: Replace `/blog/managing-panic-attacks` with `/blog` or remove
- IndividualTherapy.tsx: Replace `/trauma-therapy-havertown-pa` with `/ptsd-therapy-havertown-pa`

### Step 4: Remove Duplicate SEOHead Calls
Remove standalone `<SEOHead>` from pages that already pass SEO data to `ServicePageLayout`:
- `ADHDTreatment.tsx`
- `BPDTherapy.tsx`
- `GriefTherapy.tsx`
- `SchizophreniaTherapy.tsx`
- And any other condition pages with double SEOHead

### Step 5: Expand Schema Markup
Update `SchemaMarkup.tsx` to list all services in the `hasOfferCatalog`:
- All 7 service types + 6 condition-based services = 13 services
- Add proper `MedicalCondition` schema references

### Step 6: Add Location to Condition Page Titles
Update condition page `<h1>` titles to include "in Havertown, PA" for local SEO:
- "Grief & Loss Therapy" → "Grief & Loss Therapy in Havertown, PA"
- "Borderline Personality Disorder Treatment" → "BPD Treatment in Havertown, PA"
- Same for all 9 condition pages

### Step 7: Add Missing Footer Service Link
Add IBHS to the footer services dropdown in `FooterNav.tsx`.

---

## Expected Impact
- **Content depth**: Each service/condition page goes from ~200 words to 800-1500+ words of unique, relevant content
- **FAQ rich results**: Page-specific FAQ schema enables Google FAQ rich snippets
- **Link equity**: Fixing broken links preserves internal link equity and crawl budget
- **YMYL trust**: Deeper, unique content on health pages signals expertise to Google
- **Local SEO**: Location-qualified H1s reinforce geographic relevance

## Files to Modify
1. `src/components/services/ServicePageLayout.tsx` — render benefits, approaches, FAQs + add page-specific FAQ schema
2. `src/components/SEOHead.tsx` — remove generic FAQ schema
3. `src/pages/services/AnxietyTherapy.tsx` — fix broken links
4. `src/pages/services/IndividualTherapy.tsx` — fix broken link
5. `src/pages/services/ADHDTreatment.tsx` — remove duplicate SEOHead
6. `src/pages/conditions/BPDTherapy.tsx` — remove duplicate SEOHead, fix title
7. `src/pages/conditions/GriefTherapy.tsx` — remove duplicate SEOHead, fix title
8. `src/pages/conditions/SchizophreniaTherapy.tsx` — remove duplicate SEOHead, fix title
9. Other condition pages — fix titles (6 more files)
10. `src/components/SchemaMarkup.tsx` — expand service catalog
11. `src/components/Footer/FooterNav.tsx` — add IBHS link

