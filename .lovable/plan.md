

## Issues Identified

1. **Second section visible on first screen**: The `-mt-8` negative margin pulls the content section up, and on smaller viewports (like 889x575), the cream background peeks into the hero area.
2. **Mobile: Hero content overlapped by navbar**: The hero content has `pt-20` which isn't enough to clear the fixed navbar on mobile. Badge, heading, and text get hidden behind the nav bar.
3. **Mobile responsiveness**: Text sizing and spacing need adjustment for small screens.

## Plan

### 1. Fix hero to truly fill the viewport (WarmHeroSection.tsx)
- Keep `h-screen` and `sticky top-0`
- Change `pt-20` to `pt-28 md:pt-20` so hero content sits below the navbar on mobile
- Reduce `mb-6` on h1 and `mb-8` on paragraph for mobile: `mb-4 md:mb-6` and `mb-6 md:mb-8`
- Make h1 smaller on very small screens: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl`
- Make paragraph text smaller on mobile: `text-sm sm:text-base md:text-lg`
- Reduce button sizes on mobile with smaller padding

### 2. Fix second section overlap (Index.tsx)
- Remove `-mt-8` so the content section doesn't creep into the hero viewport
- The sticky hero + full `h-screen` height means the second section naturally starts after the hero -- no negative margin needed
- Keep `rounded-t-[2.5rem]` and shadow for the sliding-over effect

### 3. Navbar text color when not scrolled (Navbar.tsx)
- When not scrolled (glassmorphic state over video), nav link text and hamburger icon should be white so they're visible against the dark video
- Only apply white text on homepage; other pages keep current colors
- Add `text-white` classes to nav links, logo text, and mobile hamburger when `!isScrolled` and on homepage

### Files to modify:
- `src/components/WarmHeroSection.tsx` -- responsive padding/sizing
- `src/pages/Index.tsx` -- remove `-mt-8`
- `src/components/Navbar.tsx` -- white text on homepage when not scrolled

