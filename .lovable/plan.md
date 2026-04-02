

## Plan: White Footer + Unified Logo Styling (Header & Footer)

### What Changes

**1. Footer — White background with dark text**
- `Footer.tsx`: Change `bg-slate-800 text-white` to `bg-white text-stone-800` with a top border
- Update all heading colors from `text-white` to `text-stone-900`
- Update body text from `text-stone-300` to `text-stone-600`
- Update icon containers from `bg-amber-400/10` to `bg-amber-50` with `text-amber-500` icons
- Emergency box: light background (`bg-red-50 border-red-200`)
- Bottom bar borders: `border-stone-200` instead of `border-white/10`

**2. Footer logo text — Match header styling**
- "Sunrise": Use the same orange gradient as header (`bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text`)
- "Human Care Services": Use `font-instrument-serif italic text-muted-foreground` (matching the heading italic font used across the site)

**3. Header logo text — Update "Human Care Services"**
- Change to `font-instrument-serif italic` to match the site's heading accent font

**4. SocialLinks.tsx — Adapt for white background**
- Change `bg-white/10 text-stone-300` to `bg-stone-100 text-stone-500` with `hover:bg-amber-100 hover:text-amber-600`

**5. FooterNav.tsx — Adapt for white background**
- Links: `text-stone-600` with `hover:text-amber-600`
- Dropdown chevrons and accent links: amber-500/600 tones
- Child links: `text-stone-500`

**6. NewsletterForm.tsx — Adapt for white background**
- Description text: `text-stone-600`
- Input: `border-stone-200 bg-stone-50 text-stone-800`
- Button: keep `bg-amber-400` (works on white)

### Files Modified
- `src/components/Footer/Footer.tsx`
- `src/components/Footer/SocialLinks.tsx`
- `src/components/Footer/FooterNav.tsx`
- `src/components/Footer/NewsletterForm.tsx`
- `src/components/Navbar.tsx` (logo text only)

