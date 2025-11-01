# Logo Integration Plan - Hormone Harmony

**Date:** November 1, 2025
**Analyzing Suggestions From:** External Agent
**Skills Applied:** canvas-design, brand-guidelines, content-creator, ceo-advisor
**Purpose:** Investor-Ready Brand Integration

---

## Analysis of Agent Suggestions

### ✅ EXCELLENT Suggestions (Implement Immediately)

1. **Favicon/App Icon Suite** ✅
   - Multiple sizes (16, 32, 64, 192, 512px)
   - SVG for modern browsers
   - Safari pinned tab mask-icon
   - **Why:** Professional polish, recognizable in browser tabs

2. **Open Graph Image** ✅
   - 1200×630px with mark centered on plum background
   - "Hormone Harmony Patch" in Outfit
   - **Why:** Makes social shares look polished (critical for investor sharing)

3. **Temporary Wordmark Using Outfit** ✅
   - Uses existing brand font (consistency)
   - Semibold weight, increased letter-spacing
   - SVG with outlines (scalable, professional)
   - Dark and white versions
   - **Why:** Fast to implement, swappable later, on-brand

4. **Color Usage Rules** ✅
   - Full-color mark on light backgrounds
   - Mono versions for dark/photography
   - **Why:** Prevents logo from getting lost

5. **Clear Placement Rules** ✅
   - Minimum sizes (16px mark, 14px wordmark)
   - Clearspace = height of inner ring
   - Mark always left or above (not right)
   - **Why:** Professional brand standards

6. **Accessibility Considerations** ✅
   - Alt text for mark: "Hormone Harmony logo"
   - aria-label on link
   - Contrast checking
   - **Why:** Matches our A- accessibility grade

---

### ⚠️ GOOD Suggestions (Modify Before Implementing)

7. **Product vs Platform Naming**
   - Agent suggests: "Hormone Harmony Patch" (product name) + "Powered by Rithm technology"
   - **Analysis:** This creates naming confusion
     - Is "Hormone Harmony" the company or the patch?
     - Is "Rithm" a parent company or technology partner?
     - Investors need clarity on what they're funding

   **Recommendation:**
   - **Option A (Product-First):** "The Hormone Harmony Patch" is the product, Rithm is the technology
     - Pro: Clear product branding
     - Con: What's the company name?

   - **Option B (Company-First):** "Hormone Harmony" is the company/platform, patch is one product
     - Pro: Scalable (can add other products later)
     - Con: Need to establish company vs product distinction

   - **Option C (Unified):** "Hormone Harmony" = company = platform = patch (all one thing)
     - Pro: Simple, clear
     - Con: Less flexible for future products

   **For Investor Demo, Recommend Option C:**
   - H1: "Find Your Hormone Balance"
   - Subhead: "The Hormone Harmony Patch" (product descriptor)
   - Footer: "Hormone Harmony" (company name, no "Powered by Rithm" unless Rithm is a partner/licensor)

8. **Header Logo Placement**
   - Agent suggests: Mark at 28-36px in header left
   - **Analysis:** Good, but should include wordmark in header too (not just mark alone)

   **Recommendation:**
   - Desktop: Mark (32px) + "Hormone Harmony" wordmark in header left
   - Mobile: Mark only (saves space)
   - **Why:** Visitors need to know company name from header

---

### 🤔 OPTIONAL Suggestions (Low Priority for Investor Demo)

9. **Subtle Entrance Animation**
   - Agent suggests: Fade/scale on mark (150-250ms)
   - **Analysis:** Nice polish but not critical for investor demo
   - **Priority:** LOW (add if time permits)

10. **Radial Background Using Logo Colors**
   - Agent suggests: Low-opacity radial gradient in hero
   - **Analysis:** Could enhance brand cohesion
   - **Priority:** MEDIUM (test visually first)

---

## Implementation Plan

### Phase 1: Asset Creation (30-45 minutes)

**Task 1.1: Convert Logo Mark to SVG**
- Source: `harmony-logo-mark-transparent.png`
- Tool: Vectorize (Illustrator, Figma, or online tool)
- Output: `harmony-mark.svg` (full color)
- Output: `harmony-mark-mono.svg` (single color variants)

**Task 1.2: Create Temporary Wordmark**
- Font: Outfit Semibold
- Text: "Hormone Harmony"
- Letter-spacing: +2%
- Export as SVG with outlined text (not live type)
- Variants needed:
  - `harmony-wordmark-dark.svg` (charcoal #0F172A)
  - `harmony-wordmark-white.svg` (white #FFFFFF)
  - `harmony-wordmark-plum.svg` (plum #7B5A7D, optional)

**Task 1.3: Create Favicon Suite**
From `harmony-mark.svg`:
- `favicon.svg` (modern browsers)
- `favicon-16.png`
- `favicon-32.png`
- `favicon-64.png`
- `apple-touch-icon-192.png` (iOS)
- `apple-touch-icon-512.png` (high-res)
- `safari-pinned-tab.svg` (monochrome mask-icon)

**Task 1.4: Create Open Graph Image**
- Size: 1200×630px
- Background: Plum (#7B5A7D) solid
- Content:
  - Center: `harmony-mark.svg` at ~200px height
  - Below mark: "Hormone Harmony" in Outfit Semibold 72px white
  - Below name: "Find Your Hormone Balance" in Outfit Regular 36px white
- Export: `og-image.png`

**File Structure:**
```
/public/brand/
  logos/
    harmony-mark.svg
    harmony-mark-mono-white.svg
    harmony-mark-mono-plum.svg
    harmony-mark-mono-sage.svg
    harmony-wordmark-dark.svg
    harmony-wordmark-white.svg
  favicons/
    favicon.svg
    favicon-16.png
    favicon-32.png
    favicon-64.png
    apple-touch-icon-192.png
    apple-touch-icon-512.png
    safari-pinned-tab.svg
  social/
    og-image.png
    twitter-card.png (same as OG)
```

---

### Phase 2: Code Integration (30-45 minutes)

**Task 2.1: Update index.html Head Tags**

```html
<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/brand/favicons/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/brand/favicons/favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/brand/favicons/favicon-16.png">
<link rel="apple-touch-icon" sizes="192x192" href="/brand/favicons/apple-touch-icon-192.png">
<link rel="mask-icon" href="/brand/favicons/safari-pinned-tab.svg" color="#7B5A7D">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://hormoneharmony.com/">
<meta property="og:title" content="Hormone Harmony - Find Your Hormone Balance">
<meta property="og:description" content="Track, learn, and thrive with evidence-based hormone health support. You're not alone—and you deserve to be heard.">
<meta property="og:image" content="https://hormoneharmony.com/brand/social/og-image.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://hormoneharmony.com/">
<meta property="twitter:title" content="Hormone Harmony - Find Your Hormone Balance">
<meta property="twitter:description" content="Track, learn, and thrive with evidence-based hormone health support.">
<meta property="twitter:image" content="https://hormoneharmony.com/brand/social/og-image.png">
```

**Task 2.2: Create Header Component (or update App.jsx)**

```jsx
// Header with logo lockup
<header className="bg-white shadow-sm sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    {/* Logo Lockup - Desktop */}
    <a
      href="/"
      className="flex items-center gap-3"
      aria-label="Hormone Harmony home"
    >
      <img
        src="/brand/logos/harmony-mark.svg"
        alt="Hormone Harmony logo"
        className="h-8 md:h-10"
        style={{ minHeight: '32px' }}
      />
      <img
        src="/brand/logos/harmony-wordmark-dark.svg"
        alt="Hormone Harmony"
        className="hidden md:block h-6"
      />
    </a>

    {/* CTA */}
    <Button variant="primary" size="sm" href="#hero">
      Start Your Journey
    </Button>
  </div>
</header>
```

**Task 2.3: Update Hero Section**

```jsx
// Hero H1 update
<h1 style={{
  fontSize: 'var(--font-size-5xl)',
  fontWeight: 'var(--font-weight-bold)',
  lineHeight: 'var(--line-height-tight)',
  color: 'var(--color-text-primary)',
  marginBottom: 'var(--spacing-4)',
}}>
  Find Your Hormone Balance
</h1>

<p style={{
  fontSize: 'var(--font-size-xl)',
  color: 'var(--color-text-secondary)',
  marginBottom: 'var(--spacing-8)',
}}>
  Track, learn, and thrive with the Hormone Harmony Patch
</p>
```

**Task 2.4: Update Footer**

```jsx
<footer style={{
  backgroundColor: 'var(--color-bg-secondary)',
  padding: 'var(--spacing-12) var(--spacing-6)',
  marginTop: 'var(--spacing-16)',
}}>
  <div className="max-w-7xl mx-auto">
    {/* Footer Logo Lockup */}
    <div className="flex items-center gap-3 mb-8">
      <img
        src="/brand/logos/harmony-mark.svg"
        alt="Hormone Harmony logo"
        className="h-10"
      />
      <img
        src="/brand/logos/harmony-wordmark-dark.svg"
        alt="Hormone Harmony"
        className="h-6"
      />
    </div>

    {/* Footer Content... */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* ... existing footer content ... */}
    </div>

    {/* Legal + Byline */}
    <div className="mt-12 pt-8 border-t border-gray-300 text-center">
      <p style={{
        fontSize: 'var(--font-size-sm)',
        color: 'var(--color-text-secondary)'
      }}>
        © 2025 Hormone Harmony. All rights reserved.
      </p>
      <p style={{
        fontSize: 'var(--font-size-xs)',
        color: 'var(--color-text-tertiary)',
        marginTop: 'var(--spacing-2)'
      }}>
        Medical disclaimer: This site is for informational purposes only...
      </p>
    </div>
  </div>
</footer>
```

---

### Phase 3: Brand Guidelines (15-30 minutes)

**Task 3.1: Document Logo Usage Rules**

Create `/docs/logo-usage-guidelines.md`:

```markdown
# Logo Usage Guidelines - Hormone Harmony

## Logo Mark
- The circular interwoven rings represent hormone balance and cyclical harmony
- Three colors: Coral (#E8A598), Plum (#7B5A7D), Sage (#8BA888)

## Minimum Sizes
- Logo mark: Never below 16px height
- Wordmark: Never below 14px cap height
- Combined lockup: Minimum 120px width

## Clear Space
- Minimum clearspace: Height of inner ring of logo mark
- Ensure no text, graphics, or edges intrude into clearspace

## Color Variants
- **Full Color:** Default on white or light backgrounds
- **Mono White:** On dark backgrounds (plum, charcoal, photography)
- **Mono Plum:** On very light backgrounds when color is restricted
- **Mono Sage:** Alternative for specific contexts

## Placement
- Logo mark always to the LEFT or ABOVE wordmark
- Never place mark to the right of wordmark
- Horizontal lockup preferred for desktop
- Mark-only acceptable for mobile, favicons, social icons

## What NOT to Do
- ✗ Don't rotate, skew, or distort
- ✗ Don't change colors outside approved palette
- ✗ Don't add effects (shadows, glows, outlines)
- ✗ Don't place full-color mark on busy photography (use mono white)
- ✗ Don't recreate logo in other fonts or styles

## Accessibility
- Always include alt text: "Hormone Harmony logo"
- Ensure sufficient contrast (4.5:1 minimum for text)
- Use aria-label on linked logos
```

---

### Phase 4: Naming Clarity (DECISION NEEDED)

**Question for User/Founder:**

We need to clarify the naming hierarchy for investor pitch:

**Option A: Product-First Naming**
- Product: "The Hormone Harmony Patch"
- Company: [Unclear - is it also Hormone Harmony? Or parent company?]
- Technology: "Rithm" (if partner/licensor)
- Footer: "Powered by Rithm technology"

**Option B: Platform-First Naming**
- Company: "Hormone Harmony" (platform/app/company)
- Product: "The Patch" (one product among potential future products)
- No "Rithm" branding (unless they're investor/partner)

**Option C: Unified Naming** ⭐ RECOMMENDED for Investor Simplicity
- Everything is "Hormone Harmony"
- The patch IS the platform IS the company
- Tagline: "Find Your Hormone Balance"
- Product descriptor: "Hormone tracking patch + app + education"
- No "Rithm" mention unless they're investor/partner requiring attribution

**Investor Clarity Test:**
When investor asks "What are you building?", answer should be simple:
- ✅ "Hormone Harmony - a hormone tracking platform combining wearable patch, app, and education"
- ✗ "The Hormone Harmony Patch powered by Rithm technology" (confusing - who/what is Rithm?)

**Recommendation:** Choose Option C (Unified Naming) unless:
- Rithm is a strategic partner requiring co-branding
- Rithm is licensing technology (disclose in pitch)
- There's a regulatory/legal reason for distinction

---

## Priority Order (For Investor Demo)

### 🔴 CRITICAL (Do First)
1. ✅ Convert logo mark to SVG
2. ✅ Create temporary Outfit wordmark (dark + white versions)
3. ✅ Create favicon suite (16, 32, 64, 192, 512, SVG)
4. ✅ Update index.html head tags (favicons)
5. ✅ Add header with logo lockup (mark + wordmark)
6. ✅ Add footer with logo lockup

### 🟡 HIGH PRIORITY (Polish)
7. ✅ Create Open Graph image (1200×630)
8. ✅ Update index.html OG/Twitter meta tags
9. ✅ Document logo usage guidelines
10. ✅ Clarify naming strategy (Hormone Harmony vs Rithm)

### 🟢 MEDIUM PRIORITY (Nice-to-Have)
11. ⚪ Create mono versions of logo mark (white, plum, sage)
12. ⚪ Add subtle logo entrance animation (150ms fade)
13. ⚪ Test radial gradient background in hero using logo colors

### ⚪ LOW PRIORITY (Post-Demo)
14. ⚪ Create full brand guidelines PDF
15. ⚪ Design custom final wordmark (vs temporary Outfit version)
16. ⚪ Develop complete logo variation suite
17. ⚪ Create brand asset library

---

## Skills Analysis Applied

### Canvas-Design Skill ✅
- **Logo Types:** Identified that we have a "Combination Mark" (symbol + wordmark)
- **Logo Variations:** Full color, mono white, mono plum needed
- **File Formats:** SVG (scalable), PNG (raster backups), multiple sizes
- **Minimum Sizes:** 16px mark, 14px wordmark matches accessibility standards
- **Clear Space:** Inner ring height = professional spacing standard
- **What NOT to Do:** Agent's suggestions align with professional logo don'ts

### Brand-Guidelines Skill ✅
- **Brand Positioning:** Need naming clarity (Hormone Harmony vs Rithm)
- **Visual Identity System:** Logo + color + typography already established
- **Messaging Hierarchy:** "Find Your Hormone Balance" = strong tagline
- **Application Examples:** Header, footer, OG image = key touchpoints
- **For Investors:** Consistent logo usage = operational maturity signal

### Content-Creator Skill ✅
- **SEO Optimization:** OG tags = better social sharing (investors share links)
- **Brand Voice:** Temporary wordmark using Outfit = voice consistency
- **Social Media:** Twitter/OG images = professional sharing experience

### CEO-Advisor Skill ✅
- **Investor Relations:** Naming clarity critical for pitch
  - Confused naming = "Do they own the IP?" concern
  - "Powered by Rithm" = "Are they just reselling someone else's product?"
- **Strategic Decision:** Unified naming (Option C) = simpler investor story
- **Operational Maturity:** Professional logo usage = ready to scale signal

---

## Agent Suggestion Score: 8.5/10

**Strengths:**
- ✅ Comprehensive file checklist (favicons, OG, variants)
- ✅ Accessibility considerations (alt text, aria-label, contrast)
- ✅ Temporary wordmark strategy (fast, swappable)
- ✅ Clear placement rules (minimum sizes, clearspace)
- ✅ Color usage guidance (full-color vs mono)

**Areas to Improve:**
- ⚠️ Naming confusion (Hormone Harmony vs Rithm needs clarity)
- ⚠️ Header logo should include wordmark (not just mark alone)
- ⚠️ Optional animations are low priority for investor demo

**Overall:** Excellent tactical implementation plan with minor strategic naming clarification needed.

---

## Next Steps

**Immediate Action Required:**
1. **User Decision:** Clarify naming strategy (Hormone Harmony vs Rithm)
2. **Asset Creation:** Convert logo mark to SVG + create wordmark
3. **Integration:** Implement header/footer with logo lockups
4. **Meta Tags:** Add favicon + OG tags to index.html

**Estimated Time:** 1.5-2 hours total for complete implementation

**Deliverables:**
- ✅ Branded header with logo
- ✅ Professional favicons
- ✅ Social sharing images (OG/Twitter)
- ✅ Logo usage guidelines
- ✅ Clear naming strategy

---

**Analysis Completed By:** All 4 Brand Skills (canvas-design, brand-guidelines, content-creator, ceo-advisor)
**Recommendation:** Implement CRITICAL + HIGH PRIORITY items (tasks 1-10) for investor demo
**Status:** Awaiting user decision on naming strategy, then ready to execute
