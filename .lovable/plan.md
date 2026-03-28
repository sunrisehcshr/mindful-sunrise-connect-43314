

## Fix Hero Video Blur

**File:** `src/components/WarmHeroSection.tsx`

Two changes on the `<video>` element:

1. **Line 42** — Change `preload="metadata"` to `preload="auto"`
2. **Line 52** — Change Cloudinary URL from `q_auto,f_auto` to `q_80,f_auto`

No other files affected. No SEO impact.

