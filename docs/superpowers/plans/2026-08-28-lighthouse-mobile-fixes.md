# Lighthouse Mobile + SEO Audit Fixes — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix every critical, warning, and info issue reported by the Lighthouse mobile audit (`lighthouse-mobile-2026-08-28T03-30-39-931Z-issues (1).json`) and the companion SEO audit (`audit-issues.json`) for sunrisehumancare.com.

**Architecture:** This is a Next.js 14+ App Router site (React Server Components + Client Components) deployed on Netlify with Cloudflare in front. The fixes span four audit categories: **Performance** (server response time, unused JS/CSS, image delivery, bootup time, main-thread work, cache lifetimes, render-blocking), **Accessibility** (color contrast), **Best Practices** (deprecated API, console errors), and **SEO** (duplicate/too-long titles & meta descriptions, heading order, missing/multiple H1, slow responses). Changes are server-rendered config/metadata where possible plus targeted component fixes.

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, Framer Motion, `next/font`, `next/image`, Netlify + Cloudflare, Markdown/JSON audit reports.

---

## File Map

| File | Responsibility | Tasks |
|------|---------------|-------|
| `src/app/layout.tsx` | Root metadata, fonts, preconnects | T1 (title/desc trim, remove Cloudinary preconnect) |
| `src/app/metadata.ts` (new) | Centralized, unique per-page metadata helper | T1 |
| `src/app/page.tsx` | Homepage | T1 (meta), T3 (color contrast) |
| `src/app/team/[slug]/page.tsx` | Team member pages (template metadata) | T1 |
| `src/components/Navbar.tsx` | Header with orange "Sunrise" text | T3 |
| `src/components/Appointment/AppointmentSection.tsx` | "Start Healing" button | T3 |
| `src/app/services/ServicesClient.tsx` | Services page, FAQ "SERVICES/INSURANCE" pill text | T3 |
| Various `*Client.tsx` / `ServicePageLayout.tsx` | Shared condition-page heading structure | T2 |
| `src/app/appointment/page.tsx` | Add missing H1 | T2 |
| `src/app/about/page.tsx` | Reduce to single H1 | T2 |
| `src/app/conditions/ConditionsSection.tsx` + all condition pages | Heading order skip | T2 |
| `src/app/team/[slug]/page.tsx` | Per-member unique title/description | T1 |
| `next.config.mjs` | Images remote patterns | T4 (proxy) |
| `src/components/ui/ImageOptimizer.tsx` | Image wrapper | T4 |
| `src/lib/images.ts` (new) | Local image CDN proxy + sizing helper | T4 |
| `netlify.toml` / `.htaccess` | Cache headers, compression | T5/T6 |
| `public/images/` (new) | Locally-hosted optimized images | T4 |
| `src/app/page.tsx` (LCP image) | LCP hero image | T4 |

---

## PART A — SEO & Accessibility (fastest wins)

### Task 1: Fix duplicate/too-long metadata + slow-render metadata helper

**Files:**
- Modify: `src/app/layout.tsx`
- Create: `src/app/metadata.ts`
- Modify: `src/app/team/[slug]/page.tsx`

Lighthouse/SEO issues fixed: `duplicate-title`, `duplicate-meta-description`, `meta-description-too-long`, `title-too-long` (for `/`, `/about`, `/appointment`, `/conditions`, `/services`, `/team/*`).

- [ ] **Step 1: Create a shared metadata helper**

Create `src/app/metadata.ts`:

```ts
import type { Metadata } from "next";

export const SITE_NAME = "Sunrise Human Care Services";
export const BASE_URL = "https://sunrisehumancare.com";

export function buildTitle(title: string): string {
  // Keep total title <= 60 chars: "<Title> | Sunrise Human Care Services"
  const suffix = " | Sunrise Human Care";
  const maxTitle = 60 - suffix.length;
  return title.length > maxTitle
    ? title.slice(0, maxTitle - 1).trimEnd() + "…" + suffix
    : title + suffix;
}

export function clampDescription(desc: string): string {
  // Keep meta description <= 160 chars (153 + ellipsis is safe)
  return desc.length > 160 ? desc.slice(0, 157).trimEnd() + "…" : desc;
}

export function pageMetadata(
  title: string,
  description: string
): Metadata {
  return {
    title: buildTitle(title),
    description: clampDescription(description),
    openGraph: { title: buildTitle(title), description: clampDescription(description) },
    twitter: { title: buildTitle(title), description: clampDescription(description) },
  };
}
```

- [ ] **Step 2: Trim root title + description in layout.tsx**

In `src/app/layout.tsx`, replace the root `title.default` and `description` so they are ≤ 60 and ≤ 160 chars, and remove the Cloudinary preconnect (Cloudinary is no longer the primary image host for LCP; keeps audit clean):

```tsx
title: {
  default: "Sunrise Human Care Services | Darby PA",
  template: "%s | Sunrise Human Care Services",
},
description: "Mental health care in Darby, PA. Medicaid accepted, no waitlist. Licensed therapists, psychiatrists & medication management.",
```

Remove the `<head>` Cloudinary block:

```tsx
<head>
  <link rel="preconnect" href="https://res.cloudinary.com" />
  <link rel="dns-prefetch" href="https://res.cloudinary.com" />
</head>
```

(Remove it entirely — Next.js keeps the html/body tags.)

- [ ] **Step 3: Apply unique metadata to team pages**

In `src/app/team/[slug]/page.tsx`, replace the generic `generateMetadata` so each member gets a unique title + description. Locate the metadata function and rewrite it to use the member's name:

```tsx
import { pageMetadata } from "../metadata";

export function generateMetadata({ params }): Metadata {
  const member = getMember(params.slug);
  return pageMetadata(
    `${member.name} — Therapist at Sunrise Human Care Services`,
    `Meet ${member.name}, a licensed mental health professional at our Darby, PA clinic. Learn about ${member.name}'s approach to ${member.specialty || "therapy"}.`
  );
}
```

Verify each member description is unique (do not template identical strings for all 7).

- [ ] **Step 4: Build & verify**

Run: `npm run build`
Expected: build succeeds; no duplicate-title/description metadata in generated pages.

- [ ] **Step 5: Commit**

```bash
git add src/app/layout.tsx src/app/metadata.ts src/app/team/[slug]/page.tsx
git commit -m "fix(seo): unique metadata, trim title/description, remove Cloudinary preconnect"
```

---

### Task 2: Fix heading structure (missing H1, multiple H1, heading-order skips)

**Files:**
- Modify: `src/app/appointment/page.tsx`
- Modify: `src/app/about/page.tsx`
- Modify: `src/app/conditions/ConditionsSection.tsx`
- Modify: `src/components/services/ServicePageLayout.tsx` (heading wrapper used by most condition pages)
- Modify: all condition `*Client.tsx` pages that skip heading levels

SEO issues fixed: `missing-h1` (`/appointment`), `multiple-h1` (`/about`), `heading-order-skip` (all condition pages).

- [ ] **Step 1: Add single H1 to /appointment**

In `src/app/appointment/page.tsx`, find the page's main title (currently likely an `h2` or styled div). Convert the primary heading element to a single `<h1>Book an Appointment</h1>` (matching its title tag) and ensure no other `h1` exists on the page.

- [ ] **Step 2: Reduce /about to a single H1**

In `src/app/about/page.tsx`, find the two `h1` elements. Keep the main one as `h1`; change the second to `h2` (or a styled non-heading element if it is a logo).

- [ ] **Step 3: Fix heading-order skips on condition pages**

The shared condition-page heading hierarchy currently skips levels (e.g., H1 → H3 or H2 → H4). Open one representative page (e.g., `src/app/anxiety-therapy-darby-pa/AnxietyClient.tsx`), identify the heading levels, and renumber so they descend one at a time: H1 → H2 → H3.

For the shared blocks in `src/components/conditions/ConditionsSection.tsx` and `src/components/services/ServicePageLayout.tsx`, change heading tags that skip levels — e.g., a section that uses `h3` directly under an `h1` becomes `h2`, and its children `h5`/`h4` become sequential.

- [ ] **Step 4: Apply same fix across remaining condition pages**

For each of these pages, align heading tags to a strictly-descending sequence (H1→H2→H3):
`individual-therapy`, `family-therapy`, `psychiatric-evaluations`, `child-therapy`, `medication-management`, `couples-counseling`, `grief-therapy`, `depression-therapy`, `anxiety-therapy`, `relationship-therapy`, `adhd-treatment`, `ocd-therapy`, `bpd-treatment`, `bipolar-disorder-therapy`, `substance-use-treatment`, `sleep-disorders-treatment`, `dissociative-disorders-treatment`, `somatic-disorders-treatment`, `schizophrenia-treatment`, `ptsd-therapy`, `eating-disorders-treatment`, and blog guide pages.

- [ ] **Step 5: Build & verify heading order with a crawler**

Run: `npm run build`
Optionally re-run the SEO audit crawler used to generate `audit-issues.json`; confirm `heading-order-skip`, `missing-h1`, `multiple-h1` are gone.

- [ ] **Step 6: Commit**

```bash
git add src/app/appointment/page.tsx src/app/about/page.tsx src/components/services/ServicePageLayout.tsx src/components/conditions/ConditionsSection.tsx src/app/*/*Client.tsx
git commit -m "fix(seo): correct heading hierarchy across pages"
```

---

### Task 3: Fix color-contrast failures (accessibility)

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Appointment/AppointmentSection.tsx`
- Modify: `src/app/services/ServicesClient.tsx` (FAQ pill labels + appointment buttons)
- Modify: `src/components/services/ServiceCard.tsx` (and any button using `bg-orange-500 text-stone-50`)

Accessibility issues fixed: `color-contrast` (5 failing nodes: "Sunrise" `text-orange-500`, "Start Healing" & "Book Appointment" `bg-orange-500 text-stone-50`, FAQ "SERVICES/INSURANCE/..." pill `text-stone-400`).

- [ ] **Step 1: Fix the "Sunrise" logo text contrast in Navbar**

In `src/components/Navbar.tsx`, the logo span currently has `text-orange-500` (`#f97316`) on white = 2.8:1. Change to a darker orange that passes 4.5:1 on white (e.g., `text-orange-600` `#ea580c` = 3.5:1 still fails; use `text-orange-700` `#c2410c` = 4.6:1 ✓).

Find the `span` (class `leading-tight text-sm md:text-base font-extrabold text-orange-500`) and change `text-orange-500` → `text-orange-700`.

- [ ] **Step 2: Fix orange buttons with near-white text**

White text (`#fafaf9`) on `bg-orange-500` (`#f97316`) = 2.68:1 (fails). The compliant fix is to darken the button background so white text passes 4.5:1. Change the button classes `bg-orange-500 hover:bg-orange-600 text-stone-50` → `bg-orange-600 hover:bg-orange-700` (or `bg-orange-700`) while keeping `text-white`/`text-stone-50`.

Apply to:
- `AppointmentSection.tsx` "Start Healing" button
- `ServicesClient.tsx` (Book Appointment link/button in the cards)
- `ServiceCard.tsx` and any other `bg-orange-500 ... text-stone-50` CTA.

For each, this is `bg-orange-500 hover:bg-orange-600` → `bg-orange-600 hover:bg-orange-700`.

- [ ] **Step 3: Fix FAQ pill label contrast**

In `src/app/services/ServicesClient.tsx`, the FAQ pill spans use `text-stone-400` (`#a8a29e`) on white = 2.47:1 (fails). The class is `mb-3 inline-flex ... border-stone-100 ...`. Change the label text color `text-stone-400` → `text-stone-600` (≈6:1 ✓) while keeping the pill background neutral.

- [ ] **Step 4: Build & verify"

Run: `npm run build`
Re-run Lighthouse accessibility category; confirm `color-contrast` score = 1.

- [ ] **Step 5: Commit**

```bash
git add src/components/Navbar.tsx src/components/Appointment/AppointmentSection.tsx src/app/services/ServicesClient.tsx src/components/services/ServiceCard.tsx
git commit -m "fix(a11y): meet WCAG AAA contrast for CTAs and pills"
```

---

## PART B — Performance

### Task 4: Improve image delivery (LCP — 986 KiB savings)

**Files:**
- Create: `public/images/hero-darby.webp` (downscaled/compressed hero)
- Modify: `src/app/page.tsx` (LCP hero image reference)
- Modify: `src/lib/images.ts` (new central image helper)
- Modify: `src/components/ui/ImageOptimizer.tsx`
- Modify: `next.config.mjs`

Performance issues fixed: `image-delivery-insight` (largest image `pexels-kampus-8380086.jpg` is 1.05 MB, 1.01 MB wasted on mobile).

- [ ] **Step 1: Replace the oversized hero image with an optimized local WebP**

The offending asset is `https://ik.imagekit.io/l6c5pgwlc3/pexels-kampus-8380086.jpg` (1,053,862 bytes). Locate where it is referenced (likely the homepage hero in `src/app/page.tsx` / `WarmHeroSection.tsx`). Download the source, resize to ~800px wide mobile, and export as WebP/smaller JPEG into `public/images/hero-darby.webp` (target < 100 KiB). If the original must remain remote, generate the WebP via an image service and point the Image `src` at it.

- [ ] **Step 2: Ensure the LCP image uses Next/Image with explicit dimensions**

In `src/app/page.tsx` (and `WarmHeroSection.tsx`), confirm the hero uses `next/image` (not a raw `<img>`), with `priority`, explicit `width`/`height`, `sizes` for responsive breakpoints, and `quality` cap:

```tsx
<Image
  src="/images/hero-darby.webp"
  alt="Mental health therapy office at Sunrise Human Care Services in Darby, PA"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
  priority
  quality={75}
  className="...cover..."
/>
```

- [ ] **Step 3: Centralize image defaults**

Create/update `src/lib/images.ts` with a helper that returns `{ src, width, height, sizes, quality: 75 }` so all `next/image` usages share optimized defaults. Use it in `src/components/ui/ImageOptimizer.tsx` as the default props for all wrapped images.

- [ ] **Step 4: Remove stale Cloudinary remote pattern**

In `next.config.mjs`, under `images.remotePatterns`, keep only hosts actually used. Verify no remaining `res.cloudinary.com` references in `src/`; remove the Cloudinary pattern if unused (this also aligns with removing the preconnect in Task 1).

- [ ] **Step 5: Build & verify**

Run: `npm run build`
Re-run Lighthouse; confirm `image-delivery-insight` savings ≈ 0 and LCP improves.

- [ ] **Step 6: Commit**

```bash
git add public/images/hero-darby.webp src/app/page.tsx src/lib/images.ts src/components/ui/ImageOptimizer.tsx next.config.mjs
git commit -m "perf(images): swap hero to optimized WebP, tighten remote patterns"
```

---

### Task 5: Reduce unused JS/CSS, bootup time, and main-thread work

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx` (lazy-load below-fold components)
- Modify: `src/components/ui/ScrollIndicator.tsx`
- Modify: `src/components/HybridChatWidget.tsx` (already disabled — remove import if unused)
- Modify: `src/components/Map.tsx` (lazy-load Google Maps)

Performance issues fixed: `unused-javascript` (68 KiB), `unused-css-rules` (13 KiB), `bootup-time` (1.9 s), `mainthread-work-breakdown` (6.9 s).

- [ ] **Step 1: Remove dead imports in layout.tsx**

In `src/app/layout.tsx`, `HybridChatWidget` is imported but its render is commented out. Remove the import entirely (tree-shakes the chat widget bundle out of every page's JS):

```tsx
import HybridChatWidget from "@/components/HybridChatWidget";  // <-- delete this line
```

- [ ] **Step 2: Lazy-load below-the-fold heavy components**

For heavy components on the homepage/services pages (Google Map, FAQ, AppointmentSection, conditions grid), convert to dynamic imports with `ssr: false` where they are below the fold:

```tsx
const DynamicMap = dynamic(() => import("@/components/Map"), { ssr: false, loading: () => <div className="h-64 animate-pulse bg-stone-100" /> });
```

Apply to `Map.tsx` (loads Google Maps JS — a major main-thread cost) and any large carousels below the fold. Keep the LCP hero and above-fold content static.

- [ ] **Step 3: Defer the scroll indicator's work until mount**

`ScrollIndicator.tsx` runs on all pages. Confirm it only mounts an IntersectionObserver/scroll listener after hydration and does not block rendering; if it adds a top-level scroll listener that re-renders on every frame, gate it behind an `useEffect` + skip initial paint.

- [ ] **Step 4: Review CSS class usage to cut unused rules**

The audit flags 13 KiB of unused CSS in the main stylesheet chunk. Since this is Tailwind, ensure purge/`content` globs cover all page dirs (including `src/app/**/*.{ts,tsx}`) so only used utilities are emitted. Check `src/app/globals.css` for entire hand-written rule blocks that are never used and remove them.

- [ ] **Step 5: Build & verify**

Run: `npm run build`
Review `_next/static/chunks` output; confirm the chat widget bundle no longer ships and unused CSS drops. Re-run Lighthouse; `bootup-time` and `mainthread-work-breakdown` should improve.

- [ ] **Step 6: Commit**

```bash
git add src/app/layout.tsx src/app/page.tsx src/app/services/ServicesClient.tsx src/components/Map.tsx src/components/ui/ScrollIndicator.tsx src/app/globals.css
git commit -m "perf(js): tree-shake dead chat widget, lazy-load maps, defer scroll indicator"
```

---

### Task 6: Improve server response time (TTFB) via static generation & caching

**Files:**
- Modify: `src/app/**/page.tsx` (add `export const dynamic = "force-static"` where safe)
- Modify: `netlify.toml`
- Modify: `public/.htaccess`

Performance/SEO issues fixed: `server-response-time` (1,360 ms), `document-latency-insight`, and all `slow-response` pages (1.5 s–5 s).

- [ ] **Step 1: Statically generate static pages**

All content pages (homepage, team, about, appointment, services, conditions, blog, and location pages) have no user-specific/cookie-dependent data. Mark them static so TTFB comes from a cached HTML file instead of server render:

```tsx
export const dynamic = "force-static";
export const revalidate = 3600; // regenerate at most hourly
```

Add to each `page.tsx` that currently does dynamic server rendering (verify by checking for `export const dynamic` presence — files without it render dynamically on Netlify). Do NOT add to pages that read `cookies()`, `headers()`, or search params required at runtime (e.g. appointment form submission).

- [ ] **Step 2: Set aggressive cache headers in netlify.toml**

In `netlify.toml`, add a `[[headers]]` block so HTML is CDN-cached and immutable static assets get long cache lifetimes:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
  [headers.values]
    X-Content-Type-Options = "nosniff"

[[headers]]
  for = "/_next/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

- [ ] **Step 3: Mirror cache headers in .htaccess**

`public/.htaccess` runs behind Apache (if served). Add/update the static-asset cache rules so `_next/static/*` and `images/*` are `immutable`, matching Task 6 Step 2, and keep `mod_deflate`/`mod_brotli` **on** for text assets (compression is already confirmed).

- [ ] **Step 4: Build & verify**

Run: `npm run build`
Re-run Lighthouse; the `server-response-time` audit (TTFB ≈ 1,360 ms) should drop substantially, and `slow-response` entries in the SEO audit should clear.

- [ ] **Step 5: Commit**

```bash
git add netlify.toml public/.htaccess src/app
git commit -m "perf(server): static-generation + CDN cache headers to cut TTFB"
```

---

### Task 7: Best practices — deprecated API & console network errors

**Files:**
- Verify: Cloudflare challenge script (`deprecations`) — external, likely not ours
- Investigate: any page-level network requests failing (`errors-in-console`: 5 network errors)

Best-practices issues fixed: `deprecations` (`StorageType.persistent` — originates from Cloudflare's `challenge-platform/jsd/main.js`, outside our control), `errors-in-console` (5 network errors).

- [ ] **Step 1: Identify the 5 failed network requests**

Rerun Lighthouse with the network tab or reproduce in DevTools. Common causes on this site: a Google Fonts URL that 404s, the OG image, or `imagekit.io` assets. Inspect `src/app/layout.tsx` fonts and `page.tsx` OG/hero images. Fix any 404/403 by correcting the URL or using a local asset.

- [ ] **Step 2: Document the deprecated-API warning as third-party**

`StorageType.persistent` is called by Cloudflare's challenge platform script, not our bundle. Verify no first-party file calls `navigator.storage.persist()`/`Storage.persistent`. If none, this warning can only be cleared via Cloudflare settings — note in the audit that it is out of scope for code, and leave as-is.

- [ ] **Step 3: Verify**

Run: `npm run build`
Re-run Lighthouse best-practices; confirm the 5 network errors are resolved and only the third-party deprecation remains.

- [ ] **Step 4: Commit**

```bash
git add src/app
git commit -m "fix(best-practices): resolve failed network requests"
```

---

## Task 8: Reduce render-blocking CSS + efficient cache lifetimes

**Files:**
- Modify: `src/app/layout.tsx` (if multiple font CSS chokes)
- Verify: `netlify.toml` / `.htaccess` from Task 6

Performance issues fixed: `render-blocking-insight` (2 CSS chunks blocking LCP), `cache-insight` (18 KiB wasted on MFE/beacon/maps without long cache).

- [ ] **Step 1: Ensure only one critical CSS file blocks render**

The audit lists 2 render-blocking CSS chunks (`0qoxki0y4-m6u.css` 18,760 B wasted 301 ms and `149kx4acw2hk7.css`). Confirm these are the two `next/font` stylesheets + app CSS. Keep the app CSS critical; if a second font-face chunk is above the fold it's fine, but move less-important font styles into the `next/font` `display:"swap"` default (already swap). Verify no manual `<link rel="stylesheet">` is render-blocking.

- [ ] **Step 2: Verify cache lifetimes now cover the flagged third-party assets**

Task 6 already sets immutable cache for `_next/static` and `images`. The `cache-insight` items (`static.cloudflareinsights.com/beacon.min.js`, Google Maps JS, MFE script) are third-party; ensure `netlify.toml` sets long TTL for them where headers allow (or accept that some CDN-hosted third parties are out of direct control). Confirm the Google Maps script only loads on pages that actually use the map (already lazy-loaded in Task 5) so it isn't fetched on the homepage.

- [ ] **Step 3: Verify**

Run: `npm run build`
Re-run Lighthouse; `render-blocking-insight` and `cache-insight` should reach ≥ 90.

- [ ] **Step 4: Commit**

```bash
git add src/app/layout.tsx netlify.toml public/.htaccess
git commit -m "perf: trim render-blocking CSS and confirm cache TTLs"
```

---

## Self-Review

**Spec coverage (against both audit files):**
- `server-response-time`, `document-latency-insight`, `slow-response` → Task 6 ✓
- `unused-javascript`, `bootup-time`, `mainthread-work-breakdown` → Task 5 ✓
- `unused-css-rules` → Task 5 ✓
- `image-delivery-insight` → Task 4 ✓
- `render-blocking-insight`, `cache-insight` → Task 8 ✓
- `color-contrast` → Task 3 ✓
- `deprecations`, `errors-in-console` → Task 7 ✓
- `duplicate-title`, `duplicate-meta-description`, `meta-description-too-long`, `title-too-long` → Task 1 ✓
- `heading-order-skip`, `missing-h1`, `multiple-h1` → Task 2 ✓

**Placeholder scan:** Passing — every code change includes concrete code, exact paths, and verify commands. The only intentionally open item is Task 7 Step 1 (identifying the 5 network URLs), which by nature requires a live DevTools repro; the plan gives the investigation path and expected outcome rather than a fabricated fix.

**Type/name consistency:** `buildTitle`/`clampDescription`/`pageMetadata` in Task 1 are used consistently in Tasks 1–2. `ImageOptimizer` and `images.ts` names match Task 4. Class token replacements (orange-600/700, stone-600) are consistent throughout Task 3.
