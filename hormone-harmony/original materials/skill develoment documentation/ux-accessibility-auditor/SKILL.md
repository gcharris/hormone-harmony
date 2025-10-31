# UX & Accessibility Auditor Skill

## Purpose

Run systematic UX and WCAG 2.1 AA accessibility audits on pages or components. Use this skill for quality assurance, design critiques, and ensuring inclusive user experiences across all interaction modalities.

## When to Use This Skill

- Pre-launch quality assurance audits
- Design system component reviews
- Post-deployment accessibility compliance checks
- User experience optimization reviews
- Client deliverable quality checks
- Accessibility remediation planning

## Audit Methodology

### 1. Preparation Phase
- **Define scope** - Specific pages, components, or user flows to audit
- **Set up testing environment** - Multiple browsers, screen readers, contrast tools
- **Document baseline** - Current WCAG compliance level and UX standards
- **Prepare testing devices** - Mobile, tablet, desktop viewports

### 2. Systematic Testing Process
- **Automated scanning** - Initial accessibility scan with tools
- **Manual testing** - Detailed keyboard, screen reader, and UX evaluation
- **User simulation** - Test with real assistive technologies
- **Cross-device validation** - Responsive and mobile-specific testing

## Audit Categories

### 1. Visual Hierarchy Assessment

#### Evaluation Criteria
```
✓ Clear Focal Point
- Page has obvious primary focus (hero, main CTA, key content)
- User's eye is drawn to most important element first
- Visual weight matches content priority

✓ Heading Structure
- Heading sizes create logical visual rhythm
- Size progression is consistent (H1 > H2 > H3)
- Visual hierarchy matches semantic hierarchy
- No heading size inversions

✓ Whitespace Usage
- Adequate breathing room around elements
- Whitespace guides eye flow logically
- Related elements grouped visually
- No cramped or cluttered areas

✓ CTA Prominence
- Primary CTAs stand out clearly
- Secondary actions visually subordinate
- Sufficient contrast and size for CTAs
- Clear visual affordance (looks clickable)
```

#### Visual Hierarchy Checklist
- [ ] Primary focus element immediately apparent
- [ ] Heading sizes follow logical progression
- [ ] Related content visually grouped
- [ ] Important CTAs have high visual prominence
- [ ] Eye flow follows intended user journey
- [ ] No competing visual elements of equal weight

### 2. Color Contrast Compliance (WCAG AA)

#### Contrast Requirements
```
WCAG AA Standards:
• Body Text (under 18px): 4.5:1 minimum
• Large Text (18px+ or 14px+ bold): 3:1 minimum
• Focus Indicators: 3:1 minimum
• Icons and Graphics: 3:1 minimum
• Interactive Elements: 3:1 minimum

WCAG AAA Standards (recommended):
• Body Text: 7:1 minimum
• Large Text: 4.5:1 minimum
```

#### Testing Process
```html
<!-- Test each text/background combination -->
<div style="background: #ffffff; color: #333333;">
  Body text example - Test with contrast analyzer
</div>

<!-- Common problem areas -->
- Light gray text on white backgrounds
- Colored text on colored backgrounds  
- Placeholder text in form fields
- Link text colors
- Button text on colored backgrounds
- Icons and symbols
```

#### Contrast Testing Tools
- **WebAIM Contrast Checker** - Manual color testing
- **axe DevTools** - Automated contrast detection
- **Colour Contrast Analyser** - Desktop app for detailed testing
- **Stark** - Figma/browser extension for design testing

#### Contrast Audit Checklist
- [ ] All body text meets 4.5:1 ratio
- [ ] Large text meets 3:1 ratio
- [ ] Focus indicators meet 3:1 ratio
- [ ] Icons and graphics meet 3:1 ratio
- [ ] Placeholder text readable
- [ ] Link colors distinguishable and sufficient contrast
- [ ] Button text readable on all button colors

### 3. Keyboard Navigation Testing

#### Complete Keyboard Test Procedure
```
1. Tab Navigation Test
   - Start at page top, tab through all interactive elements
   - Verify tab order follows visual/logical flow
   - Check all clickable elements are keyboard accessible
   - Ensure no elements are skipped or unreachable

2. Focus Indicator Test
   - All focused elements have visible focus indicators
   - Focus indicators meet 3:1 contrast ratio
   - Focus indicators are clearly visible
   - Custom focus styles don't reduce usability

3. Keyboard Shortcuts Test
   - Skip links function properly
   - Access keys work (if implemented)
   - Standard shortcuts not broken (Ctrl+F, etc.)

4. Interaction Test
   - Enter/Space activate buttons and links
   - Arrow keys navigate lists and menus
   - Escape closes modals and dropdowns
   - Form submission works via keyboard

5. Keyboard Trap Test
   - No keyboard focus gets trapped
   - Modal dialogs contain focus appropriately
   - Can navigate away from all elements
```

#### Focus Management Patterns
```html
<!-- Skip Link (required) -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Proper Focus Indicators -->
.btn:focus {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}

<!-- Modal Focus Management -->
<div role="dialog" aria-labelledby="modal-title" aria-modal="true">
  <!-- Focus should be trapped within modal -->
  <!-- Escape should close modal -->
  <!-- Focus should return to trigger element -->
</div>
```

#### Keyboard Navigation Checklist
- [ ] All interactive elements reachable via Tab
- [ ] Focus indicators visible and high-contrast (3:1 minimum)
- [ ] Tab order follows logical visual flow
- [ ] No keyboard traps present
- [ ] Skip link present and functional
- [ ] Enter/Space activate buttons appropriately
- [ ] Escape closes modals and dropdowns
- [ ] Arrow keys navigate menus/lists when appropriate

### 4. Screen Reader Experience Testing

#### Screen Reader Test Procedure
```
1. Structure Navigation Test
   - Use heading navigation (H key in NVDA/JAWS)
   - Navigate by landmarks (D key)
   - Jump between form fields (F key)
   - Browse by links (K key)

2. Content Comprehension Test
   - Listen to page read linearly
   - Check for logical reading order
   - Verify all content is announced
   - Test that context is clear

3. Interactive Element Test
   - Form labels read correctly
   - Button purposes clear
   - Link destinations understandable
   - Error messages announced
```

#### Essential Semantic Structure
```html
<!-- Proper Heading Hierarchy -->
<h1>Page Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection Title</h3>
    <h3>Another Subsection</h3>
  <h2>Next Section</h2>

<!-- Required Landmarks -->
<header role="banner">
<nav role="navigation" aria-label="Main navigation">
<main role="main">
<footer role="contentinfo">

<!-- Properly Labeled Forms -->
<label for="email">Email Address</label>
<input type="email" id="email" required aria-describedby="email-error">
<div id="email-error" role="alert">Please enter a valid email</div>

<!-- Descriptive Images -->
<img src="chart.png" alt="Sales increased 40% from Q1 to Q2">
```

#### ARIA Implementation Guidelines
```html
<!-- Use ARIA to enhance, not replace semantic HTML -->

<!-- Current Page Indicator -->
<a href="/about" aria-current="page">About Us</a>

<!-- Expandable Content -->
<button aria-expanded="false" aria-controls="menu">Menu</button>
<ul id="menu" hidden>...</ul>

<!-- Live Regions for Dynamic Content -->
<div aria-live="polite" id="status"></div>
<div role="alert" aria-live="assertive">Error message</div>

<!-- Complex Widgets -->
<div role="tablist">
  <button role="tab" aria-selected="true" aria-controls="panel1">Tab 1</button>
  <div role="tabpanel" id="panel1">Content 1</div>
</div>
```

#### Screen Reader Checklist
- [ ] Logical heading hierarchy (H1 → H2 → H3, no skips)
- [ ] All landmarks present and properly labeled
- [ ] All images have appropriate alt text
- [ ] Form labels properly associated with inputs
- [ ] ARIA used correctly (enhances, doesn't break)
- [ ] Reading order follows visual layout
- [ ] All content accessible without visual cues
- [ ] Error messages announced appropriately

### 5. Mobile UX Assessment

#### Touch Target Requirements
```css
/* Minimum touch target sizes */
.touch-target {
  min-height: 44px;
  min-width: 44px;
  /* iOS Human Interface Guidelines */
}

.touch-target-android {
  min-height: 48px;
  min-width: 48px;
  /* Material Design Guidelines */
}
```

#### Mobile Testing Procedure
```
1. Viewport Testing
   - Test at 390px width (iPhone 12 Pro)
   - Check for horizontal scroll
   - Verify content remains readable

2. Touch Interaction Testing
   - All buttons/links easy to tap
   - No accidental activations
   - Sufficient spacing between touch targets

3. Form Usability Testing
   - Appropriate keyboard types trigger
   - Form fields properly sized
   - Labels remain visible when typing

4. Content Readability Testing
   - Text readable at default zoom
   - No pinch-to-zoom required for content
   - Line lengths appropriate for mobile
```

#### Mobile UX Checklist
- [ ] Touch targets minimum 44×44px
- [ ] No horizontal scroll at 390px width
- [ ] Text readable at default size (16px minimum)
- [ ] Forms work with mobile keyboards
- [ ] Adequate spacing between touch targets
- [ ] Content reflows properly on small screens
- [ ] Pinch-to-zoom functions when needed

## Audit Report Format

### Standard Report Template
```markdown
# Audit Report: [Page/Component Name]

**Audit Date**: [Date]
**Auditor**: [Name]
**WCAG Level**: AA
**Browsers Tested**: [Chrome, Firefox, Safari]
**Screen Readers Tested**: [NVDA, VoiceOver, etc.]

## Executive Summary
Brief overview of overall accessibility and UX compliance status.

## PASS ✅
- Clear visual hierarchy with prominent CTAs
- All text meets WCAG AA contrast requirements
- Keyboard navigation fully functional
- Semantic HTML structure implemented correctly
- Mobile touch targets meet minimum size requirements

## NEEDS IMPROVEMENT ❌

### 1. Issue: Missing Focus Indicators on Custom Buttons
**Severity**: High
**WCAG Criteria**: 2.4.7 Focus Visible
**Impact**: Keyboard users cannot see where focus is located
**Fix**: Add visible focus styles with 3:1 contrast ratio
```css
.custom-btn:focus {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}
```

### 2. Issue: Form Error Messages Not Announced
**Severity**: High  
**WCAG Criteria**: 3.3.1 Error Identification
**Impact**: Screen reader users miss validation errors
**Fix**: Add aria-describedby linking to error messages
```html
<input aria-describedby="email-error">
<div id="email-error" role="alert">Please enter valid email</div>
```

### 3. Issue: Low Color Contrast on Secondary Text
**Severity**: Moderate
**WCAG Criteria**: 1.4.3 Contrast (Minimum)
**Impact**: Users with visual impairments may struggle to read content
**Current Ratio**: 3.2:1
**Required Ratio**: 4.5:1
**Fix**: Darken text color from #999999 to #666666

## RECOMMENDATIONS 💡
- Consider implementing WCAG AAA contrast ratios for better readability
- Add aria-live regions for dynamic content updates
- Implement custom focus indicators that match brand design
- Consider adding dark mode support with proper contrast ratios

## Testing Details
- **Automated Tools**: axe-core, WAVE, Lighthouse
- **Manual Testing**: Complete keyboard navigation, screen reader testing
- **Devices Tested**: iPhone 12 Pro, iPad, Desktop (1920×1080)
```

## Advanced Testing Procedures

### Automated Testing Integration
```javascript
// Example axe-core integration
const axe = require('axe-core');

// Run accessibility audit
axe.run().then(results => {
  if (results.violations.length) {
    console.log('Accessibility violations found:');
    results.violations.forEach(violation => {
      console.log(`${violation.id}: ${violation.description}`);
    });
  }
});
```

### Screen Reader Testing Commands
```
NVDA (Windows):
- H: Navigate by headings
- D: Navigate by landmarks  
- F: Navigate by form fields
- K: Navigate by links
- Insert + F7: Elements list

VoiceOver (Mac):
- VO + U: Rotor (elements list)
- VO + →: Navigate forward
- VO + ←: Navigate backward
- VO + Cmd + H: Navigate by headings

JAWS (Windows):
- H: Navigate by headings
- R: Navigate by landmarks
- F: Navigate by form fields
- Insert + F6: Headings list
```

### Performance Impact Assessment
- **Large focus indicators** - Ensure they don't break layout
- **ARIA labels** - Don't significantly increase page weight
- **Alternative text** - Appropriately descriptive without being verbose
- **Skip links** - Don't interfere with visual design

## Common Issues and Quick Fixes

### High-Priority Issues
1. **Missing alt text** → Add descriptive alt attributes
2. **Low contrast** → Darken text colors or lighten backgrounds
3. **No focus indicators** → Add outline or border styles
4. **Improper heading hierarchy** → Restructure heading levels
5. **Unlabeled form fields** → Add explicit label elements

### Medium-Priority Issues
1. **Missing landmarks** → Add semantic HTML5 elements
2. **Poor mobile touch targets** → Increase button/link sizes
3. **Unclear link text** → Make link purposes obvious
4. **No skip links** → Add navigation bypass options
5. **Missing error messages** → Implement proper form validation

### Low-Priority Enhancements
1. **ARIA live regions** → For dynamic content updates
2. **Keyboard shortcuts** → For power users
3. **High contrast mode** → For users with visual impairments
4. **Reduced motion** → For users sensitive to animation
5. **Large text support** → Test with 200% zoom

## Quality Assurance Checklist

### Pre-Audit Setup ✓
- [ ] Testing environment configured
- [ ] Screen readers installed and tested
- [ ] Contrast checking tools available
- [ ] Mobile devices/simulators ready
- [ ] Automated testing tools configured

### Audit Execution ✓
- [ ] All audit categories tested systematically
- [ ] Issues documented with specific fixes
- [ ] Severity levels assigned appropriately
- [ ] WCAG criteria referenced for each issue
- [ ] Screenshots/recordings captured where helpful

### Report Quality ✓
- [ ] Executive summary provides clear overview
- [ ] All critical issues include concrete fixes
- [ ] Severity levels accurately reflect user impact
- [ ] Recommendations are actionable
- [ ] Report formatted for easy scanning

## Version

**UX & Accessibility Auditor Skill v1.0.0**

*Last Updated: October 31, 2025*
