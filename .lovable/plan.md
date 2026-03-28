

## Fix: Match second section background to hero overlay

**Problem:** The hero transition overlay uses `hsl(var(--cream))` but the WhyChooseUs section uses `bg-[#f0ece4]` (a darker linen color), creating a visible seam.

**Fix:** Change the WhyChooseUs section background from `bg-[#f0ece4]` to `bg-[hsl(var(--cream))]` so it matches the hero overlay exactly.

### File change
- **`src/components/WhyChooseUsSection.tsx`** — Replace `bg-[#f0ece4]` with `bg-[hsl(var(--cream))]` on the section element.

