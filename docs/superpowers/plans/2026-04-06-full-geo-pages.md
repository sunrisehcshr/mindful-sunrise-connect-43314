# Geo Pages Full Rewrite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the 5 generic geo location pages (Yeadon, Upper Darby, Lansdowne, Collingdale, Sharon Hill) into fully unique, highly targeted competitor-alternative pages using programmatic SEO and Ogilvy copywriting across the *entire* page.

**Architecture:** Expand the `GeoContentProps` interface in `MentalHealthGeoClient.tsx` to accept dynamic arrays for services descriptions, FAQs, and Bento grid text. This prevents component serialization errors by keeping the React Icons inside the client component while passing the unique strings from the Server Components.

**Tech Stack:** Next.js (App Router), React, Tailwind CSS, Framer Motion

---

### Task 1: Refactor MentalHealthGeoClient

**Files:**
- Modify: `src/app/mental-health-yeadon-pa/MentalHealthGeoClient.tsx`

- [ ] **Step 1: Expand the interface and use the new props**

Add `servicesOverrides` and `faqOverrides` to the props so the parent page can supply fully unique descriptions and answers.

```typescript
// Replace GeoContentProps and component implementation to use these new dynamic fields instead of hardcoded arrays.
```

### Task 2: Rewrite Yeadon Full Page

**Files:**
- Modify: `src/app/mental-health-yeadon-pa/page.tsx`

- [ ] **Step 1: Add the fully unique content object**

Update `pageContent` to include tailored services (e.g. "Therapy for Yeadon residents"), custom FAQs addressing the "why drive to Philly" pain point, and specific bento grid text.

### Task 3: Rewrite Upper Darby Full Page

**Files:**
- Modify: `src/app/mental-health-upper-darby-pa/page.tsx`

- [ ] **Step 1: Add the fully unique content object**

Focus the entire page's services, FAQs, and bento tags on escaping the 69th street clinic waitlists.

### Task 4: Rewrite Lansdowne Full Page

**Files:**
- Modify: `src/app/mental-health-lansdowne-pa/page.tsx`

- [ ] **Step 1: Add the fully unique content object**

Focus the entire page's services, FAQs, and bento tags on finding Medicaid-accepting intensive care near the historic arts borough.

### Task 5: Rewrite Collingdale Full Page

**Files:**
- Modify: `src/app/mental-health-collingdale-pa/page.tsx`

- [ ] **Step 1: Add the fully unique content object**

Focus the entire page's services, FAQs, and bento tags on reliable, immediate care for working families along MacDade Blvd.

### Task 6: Rewrite Sharon Hill Full Page

**Files:**
- Modify: `src/app/mental-health-sharon-hill-pa/page.tsx`

- [ ] **Step 1: Add the fully unique content object**

Focus the entire page's services, FAQs, and bento tags on escaping long drives and massive healthcare networks for a close-to-home clinic.

### Task 7: Build and Commit

- [ ] **Step 1: Verify the build**
Run `npm run build` to ensure no serialization errors occur between Server and Client components.

- [ ] **Step 2: Commit**
Run `git commit` to save the massive SEO overhaul.