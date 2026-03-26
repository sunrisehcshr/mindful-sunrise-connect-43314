

# Site-Wide Design Unification Plan

## Current State

The site has **two distinct design systems**:

1. **MentalHealthDarby page** (premium style): Cream/linen backgrounds (#faf8f4, #f0ece4), Barlow + Instrument Serif fonts, stone-800 text, amber-600/70 accents, floating rounded navbar, white cards with rounded-2xl, clean minimal aesthetic.

2. **Rest of the site** (old style): Bright yellow gradient backgrounds, orange SectionTag pills, animated gradient backgrounds, sunshine patterns, yellow-200 borders, "warm-card" glassmorphism classes, standard fixed navbar with full nav links.

## Design Tokens to Apply Site-Wide (from Darby page)

- **Backgrounds**: Alternating `bg-[#faf8f4]` (cream) and `bg-[#f0ece4]` (linen) instead of yellow gradients
- **Typography**: `font-barlow` for body/headings, `font-instrument-serif italic` for accent text
- **Text colors**: `text-stone-800` (headings), `text-stone-600`/`text-stone-500` (body)
- **Accent color**: `text-amber-600/70` for labels, `text-amber-700/70` for italic accent headings
- **Section labels**: Uppercase tracking-wide `font-barlow font-semibold text-xs tracking-[0.2em] text-amber-600/70` instead of orange SectionTag pills
- **Cards**: `bg-white rounded-2xl border border-stone-200/80` with `hover:border-amber-200 hover:shadow-lg`
- **Navbar**: Floating `rounded-[16px]` white bar with dark "Book Appointment" button instead of full-width fixed bar
- **Buttons**: Dark `bg-[#222]` rounded-full for primary CTA, glassmorphic for hero CTA
- **Footer**: Keep existing but update background to match cream palette

## Files to Modify

### Phase 1 — Global Styles & Navbar (~4 files)

1. **`src/index.css`** — Replace bright yellow body gradient with cream `#faf8f4` background. Remove `.sunshine-pattern`, `.yellow-gradient-bg`, `.hero-gradient` classes. Update `.section-tag` to match Darby's uppercase label style. Remove `.warm-card` and `.star-bg` pattern classes.

2. **`src/components/Navbar.tsx`** — Replace full-width fixed navbar with floating rounded-[16px] white bar matching Darby page. Update nav link styles to `font-barlow font-medium text-sm text-zinc-600`. Replace "Book Now" button with dark `bg-[#222]` rounded-full style.

3. **`src/components/ui/section-tag.tsx`** — Restyle from orange gradient pill to uppercase tracking-wide amber-600/70 label (matching Darby's inline `<span>` section labels).

4. **`src/components/Footer/Footer.tsx`** — Update footer background from `bg-white` to `bg-[#faf8f4]` with subtle top border. Adjust heading styles to use `font-barlow`.

### Phase 2 — Homepage Sections (~7 files)

5. **`src/components/WarmHeroSection.tsx`** — Replace animated yellow gradient + pattern with video hero (or clean image hero with bottom fade to cream). Update typography to Barlow + Instrument Serif. Replace orange buttons with glassmorphic or dark rounded-full CTAs.

6. **`src/components/WhyChooseUsSection.tsx`** — Replace yellow gradient background with `bg-[#f0ece4]`. Restyle cards to white rounded-2xl with stone borders. Replace SectionTag with uppercase label. Update heading to Barlow + Instrument Serif italic accent.

7. **`src/components/services/ServicesSection.tsx`** — Update background to `bg-[#faf8f4]`. Restyle service cards to match Darby's white rounded-2xl with amber circle icon + arrow pattern. Replace SectionTag.

8. **`src/components/conditions/ConditionsSection.tsx`** — Update to `bg-[#f0ece4]`. Restyle condition cards to white rounded-2xl minimal style.

9. **`src/components/AboutSection.tsx`** — Update background to cream. Replace SectionTag with uppercase label. Update typography.

10. **`src/components/TestimonialsSection.tsx`** — Restyle cards and background to match cream/linen palette.

11. **`src/components/team/TeamSection.tsx`** — Update styling to match.

12. **`src/components/FAQSection.tsx`** — Restyle to match Darby's accordion style (white rounded-2xl items, stone borders, amber-200 open state border).

13. **`src/components/Appointment/AppointmentSection.tsx`** — Update to cream background with updated typography.

### Phase 3 — Service & Condition Page Layout (~2 files)

14. **`src/components/services/ServicePageLayout.tsx`** — Replace orange gradient hero with cream-toned hero or Darby-matching style. Update benefits/approaches/FAQ sections to use cream/linen backgrounds, white rounded-2xl cards, and Barlow/Instrument Serif typography.

15. **`src/components/services/ServiceCard.tsx`** — Restyle to match Darby's service card pattern.

### Phase 4 — Standalone Pages (~6 files)

16. **`src/pages/Index.tsx`** — Remove animated gradient background references. Ensure banner + new styling works.

17. **`src/pages/About.tsx`**, **`src/pages/Blog.tsx`**, **`src/pages/Contact.tsx`**, **`src/pages/Appointment.tsx`**, **`src/pages/FAQ.tsx`** — Update page-level backgrounds and any inline styling that conflicts with the new palette.

### Phase 5 — Cleanup

18. **`src/index.css`** — Remove unused utility classes (`.warm-glow`, `.star-subtle`, `.star-accent`, `.star-bg`, `.sunshine-pattern`, `.yellow-glow`, `.yellow-gradient-bg`).

19. **`src/components/ui/animated-gradient-background.tsx`** — May be removed if no longer used after hero update.

## Summary

- ~20 files modified
- Unified palette: cream (#faf8f4) + linen (#f0ece4) + white cards
- Unified typography: Barlow headings + Instrument Serif italic accents
- Unified navbar: floating white rounded bar with dark CTA
- Unified section labels: uppercase tracking-wide amber text (no pills)
- All card styles: white, rounded-2xl, stone-200 border, amber hover

