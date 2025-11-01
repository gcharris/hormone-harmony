# Logo Usage Guidelines - Hormone Harmony

**Date:** November 1, 2025
**Version:** 1.0 (Investor Demo)
**Status:** Temporary Wordmark (Final Custom Logo TBD)

---

## Overview

The Hormone Harmony brand identity consists of:
1. **Logo Mark** - Circular interwoven rings (coral, plum, sage)
2. **Wordmark** - "Hormone Harmony" in Outfit Semibold (temporary)
3. **Tagline** - "Find Your Hormone Balance"

---

## Logo Mark

### Description
The logo mark features three interwoven circular rings representing:
- **Coral (#E8A598)** - Warmth, nurturing
- **Plum (#7B5A7D)** - Balance, wisdom
- **Sage (#8BA888)** - Growth, natural harmony

The interwoven design symbolizes:
- Cyclical nature of hormones
- Balance and interconnection
- Holistic approach to health

### Files Available
- `/public/brand/logos/harmony-mark.svg` - Full color
- `/public/brand/logos/harmony-mark-mono-white.svg` - White on dark
- `/public/brand/logos/harmony-mark-mono-plum.svg` - Plum for light backgrounds

---

## Wordmark (Temporary)

### Description
Current wordmark: "Hormone Harmony" set in **Outfit Semibold**
- Font: Outfit (Google Fonts)
- Weight: 600 (Semibold)
- Letter-spacing: +2% (0.64px at 32px size)

### Files Available
- `/public/brand/logos/harmony-wordmark-dark.svg` - Charcoal #0F172A
- `/public/brand/logos/harmony-wordmark-white.svg` - White #FFFFFF

### Future
This is a temporary typographic wordmark. A custom designed wordmark will be developed post-investor funding.

---

## Logo Lockup

### Primary Lockup (Horizontal)
**Desktop/Default:**
```
[Logo Mark] [Wordmark]
   32-40px     h:24px
```

**Mobile:**
```
[Logo Mark only]
   32px
```

### Spacing
- Gap between mark and wordmark: 12px (0.75rem)
- Mark always to the LEFT of wordmark
- Never place mark to the right or below

---

## Minimum Sizes

**Logo Mark:**
- Absolute minimum: 16px height (favicons)
- Recommended minimum: 32px height (general use)
- Optimal: 40-48px height (header, footer)

**Wordmark:**
- Minimum cap height: 14px
- Recommended minimum: 20px
- Optimal: 24-32px

**Combined Lockup:**
- Minimum total width: 120px
- Mobile breakpoint: Show mark only below 768px

---

## Clear Space

### Rule
Minimum clear space = **height of the inner white circle** of the logo mark

At 32px mark height:
- Inner circle ≈ 16px
- Therefore clearspace = 16px on all sides

### Example
```
  [16px space]

  [LOGO] [WORDMARK]

  [16px space]
```

No text, graphics, photos, or container edges should intrude into this clearspace.

---

## Color Variants

### When to Use Each Version

**Full Color Mark + Dark Wordmark**
- Default for light backgrounds
- White or very light backgrounds (#FFFFFF, #F9FAFB)
- Use: Header, cards, light sections

**Full Color Mark + White Wordmark**
- Dark backgrounds (charcoal, plum, photography)
- Use: Footer, dark hero sections

**Mono White (Mark + Wordmark)**
- Dark backgrounds where full color doesn't have enough contrast
- Over busy photography
- Use: Dark overlays, photographic backgrounds

**Mono Plum (Mark + Wordmark)**
- Very light backgrounds when single-color is needed
- Print applications (spot color)
- Use: Letterhead, single-color contexts

---

## Application Guidelines

### Header (Sticky Navigation)
```jsx
<header className="sticky top-0">
  <a href="/" className="flex items-center gap-3">
    <img src="/brand/logos/harmony-mark.svg" className="h-8 md:h-10" />
    <img src="/brand/logos/harmony-wordmark-dark.svg" className="hidden md:block h-6" />
  </a>
</header>
```

**Rules:**
- Logo left-aligned
- CTA button right-aligned
- Logo links to homepage (href="/")
- Mobile: Show mark only (save horizontal space)
- Desktop: Show full lockup

### Footer
```jsx
<footer style={{ backgroundColor: '#0F172A' }}>
  <div className="flex items-center gap-3 mb-8">
    <img src="/brand/logos/harmony-mark.svg" className="h-10" />
    <img src="/brand/logos/harmony-wordmark-white.svg" className="h-6" />
  </div>
</footer>
```

**Rules:**
- Use white wordmark on dark footer
- Logo appears before footer navigation
- Larger than header (h-10 mark, h-6 wordmark)

### Favicons
- 16px, 32px, 64px, 192px, 512px PNG
- SVG for modern browsers
- Safari mask-icon (monochrome plum)
- All use full-color mark

### Social Sharing (Open Graph)
- 1200×630px image
- Plum background (#7B5A7D)
- Logo mark centered (200px height)
- White wordmark + tagline below

---

## What NOT to Do

### ✗ DON'T

1. **Don't rotate, skew, or distort**
   - Always maintain original proportions
   - No perspective effects

2. **Don't change colors**
   - Use only provided color variants
   - Don't recolor individual rings
   - Don't apply gradients or effects

3. **Don't add effects**
   - No drop shadows
   - No glows or outlines
   - No 3D effects
   - No filters

4. **Don't place on busy backgrounds**
   - Use mono white version over photography
   - Ensure sufficient contrast
   - Add solid background if needed

5. **Don't recreate the logo**
   - Always use provided SVG/PNG files
   - Don't attempt to redraw in other software
   - Don't substitute different fonts

6. **Don't place mark to the right**
   ```
   ✗ WORDMARK [MARK]  (wrong)
   ✓ [MARK] WORDMARK  (correct)
   ```

7. **Don't violate clearspace**
   - No text or graphics within clearspace zone
   - No container edges touching logo

8. **Don't use low-resolution files**
   - Always use vector (SVG) when possible
   - Use appropriate PNG size (not scaled up)

---

## Accessibility

### Alt Text
**Logo mark in header:**
```html
<img src="/brand/logos/harmony-mark.svg" alt="Hormone Harmony logo" />
```

**Wordmark in lockup:**
```html
<img src="/brand/logos/harmony-wordmark-dark.svg" alt="Hormone Harmony" />
```

**Combined link:**
```html
<a href="/" aria-label="Hormone Harmony home">
  <img src="..." alt="Hormone Harmony logo" />
  <img src="..." alt="Hormone Harmony" />
</a>
```

### Contrast Requirements
- Logo mark on white: ✅ Passes (colorful elements, sufficient contrast)
- Wordmark (charcoal) on white: ✅ 16.1:1 (exceeds 4.5:1)
- Wordmark (white) on charcoal: ✅ 16.1:1

### Keyboard Navigation
- Logo link must be keyboard accessible
- Visible focus indicator (ring) on tab
- First or second tab stop on page (after skip link)

---

## File Organization

```
/public/brand/
  logos/
    harmony-mark.svg                    ← Full color logo mark
    harmony-mark-mono-white.svg         ← White version
    harmony-mark-mono-plum.svg          ← Plum version
    harmony-wordmark-dark.svg           ← Charcoal wordmark
    harmony-wordmark-white.svg          ← White wordmark

  favicons/
    favicon.svg                         ← Main favicon (SVG)
    favicon-16.png                      ← 16x16 PNG
    favicon-32.png                      ← 32x32 PNG
    favicon-64.png                      ← 64x64 PNG
    apple-touch-icon-192.png            ← iOS icon
    apple-touch-icon-512.png            ← High-res iOS
    safari-pinned-tab.svg               ← Safari mask

  social/
    og-image.svg                        ← Open Graph 1200×630
```

---

## Brand Colors (Reference)

For contexts where logo colors need to match other brand elements:

```css
--color-primary: #8BA888;   /* Sage Green */
--color-accent: #7B5A7D;    /* Plum */
--color-secondary: #E8A598; /* Coral */
--color-charcoal: #0F172A;  /* Dark text */
--color-cream: #FAF9F6;     /* Light text on dark */
```

---

## Typography (Reference)

**Heading Font:** Outfit (Google Fonts)
- Weights: 300, 400, 500, 600, 700
- Usage: Headings, wordmark, bold elements

**Body Font:** Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700
- Usage: Body copy, captions, UI text

---

## Future Development

### Post-Investor Funding

**Phase 1: Custom Wordmark**
- Hire brand designer or agency
- Develop custom letterforms
- May include ligatures or custom characters
- Timeline: 2-4 weeks

**Phase 2: Complete Brand Identity**
- Secondary logo marks (vertical lockup, icon variations)
- Expanded color palette
- Pattern system using logo rings
- Illustration style guide
- Timeline: 6-8 weeks

**Phase 3: Rithm Co-Branding** (If Applicable)
- Develop "Powered by Rithm" lockup
- Define placement rules
- Create co-branded materials
- Timeline: TBD based on partnership terms

---

## Approval Process

**For Investor Demo:**
- No approvals needed (founder discretion)
- Temporary wordmark acceptable

**Post-Launch:**
- All logo usage outside standard applications requires brand review
- Contact: [Brand Manager TBD]
- Turnaround: 48 hours for approval

---

## Quick Reference

| Context | Mark Size | Wordmark | Variant | Notes |
|---------|-----------|----------|---------|-------|
| Header (Desktop) | 40px | Yes (24px) | Dark | Sticky nav |
| Header (Mobile) | 32px | No | Dark | Mark only |
| Footer | 40px | Yes (24px) | White | On charcoal |
| Favicon | 16-512px | No | Full color | Multiple sizes |
| OG Image | 200px | Yes | White | 1200×630 bg |
| Email Signature | 32px | Yes (20px) | Dark | Inline |
| Print (B&W) | Varies | Yes | Mono plum | Vector PDF |

---

## Support

**Questions about logo usage?**
- Review this document first
- Check [brand-positioning-statement.md](./brand-positioning-statement.md) for strategic context
- Check [logo-integration-plan.md](./logo-integration-plan.md) for implementation details

**Need logo files in different format?**
- Current formats: SVG (vector), PNG (raster)
- For other formats (EPS, PDF, AI), convert SVG using design software

**Found a logo being used incorrectly?**
- Document the incorrect usage (screenshot)
- Reference this guidelines document
- Provide correct alternative from files

---

**Document Version:** 1.0
**Last Updated:** November 1, 2025
**Next Review:** Post-custom wordmark development
**Maintained By:** Brand Strategy Team

---

## Appendix: Naming Strategy

**Company Name:** Hormone Harmony
**Product Name:** Hormone Harmony (unified naming)
**Tagline:** Find Your Hormone Balance

**NOT using "Rithm" branding** for investor demo.
"Powered by Rithm" will be designed and added post-funding if needed.

This keeps investor pitch focused on Hormone Harmony as standalone brand.
