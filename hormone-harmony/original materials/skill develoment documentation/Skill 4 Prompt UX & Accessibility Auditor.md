## **Skill 4 Prompt: UX & Accessibility Auditor**

```

@create-skill

Create a Skill called "UX & Accessibility Auditor"

**Purpose**: Run systematic UX and WCAG 2.1 AA accessibility audits on pages or components. Use for quality assurance and design critiques.

**Audit Categories**:

1. **Visual Hierarchy**
   - Clear focal point (what should user see first?)
   - Heading sizes create visual rhythm
   - Whitespace guides eye flow
   - Important CTAs stand out

2. **Color Contrast (WCAG AA)**
   - Body text: 4.5:1 minimum
   - Large text (18px+): 3:1 minimum
   - Focus indicators: 3:1 minimum
   - Icons/graphics: 3:1 minimum

3. **Keyboard Navigation**
   - All interactive elements reachable via Tab
   - Focus indicators visible and high-contrast
   - Tab order follows visual flow
   - No keyboard traps
   - Skip link at top of page

4. **Screen Reader Experience**
   - Heading hierarchy logical (H1 → H2 → H3)
   - Landmarks present (header, nav, main, footer)
   - All images have alt text
   - Form labels properly associated
   - ARIA used correctly (not over-used)

5. **Mobile UX**
   - Touch targets 44×44px minimum
   - No horizontal scroll at 390px width
   - Text readable at default size
   - Forms work with mobile keyboards

**Output Format**:

```
## Audit Report: [Page/Component Name]

### PASS
- [List what passed checks]

### NEEDS IMPROVEMENT
1. **Issue**: [Specific problem]
   **Impact**: [High/Moderate/Low - user effect]
   **Fix**: [Concrete solution]

### RECOMMENDATIONS
- [Optional enhancements]
```

**Validation Checklist**:

- All critical issues documented with fixes
- Contrast ratios calculated (not guessed)
- Keyboard test performed
- Mobile width test performed (390px)

Version: 1.0.0