````
**Skill 1 Prompt: CSS Design System Builder**

```
@create-skill

Create a Skill called "CSS Design System Builder"

**Purpose**: Build maintainable, accessible CSS design systems with tokens, semantic naming, and WCAG 2.1 AA compliance. Use for any design system or component library task.

**Core Principles**:
- Token-based (CSS custom properties for all values)
- BEM or semantic class naming
- Mobile-first responsive
- WCAG 2.1 AA contrast minimums (4.5:1 body text, 3:1 large text, 3:1 focus indicators)
- No arbitrary values (everything from tokens)

**Required Token Categories**:
1. Colors: Primary, secondary, accent, neutrals, semantic (success, error, warning, info)
2. Typography: Font families, sizes (rem-based), weights, line heights, letter spacing
3. Spacing: Scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)
4. Border radius: sm (4px), base (8px), md (12px), lg (16px), full (9999px)
5. Shadows: Subtle elevation system (xs, sm, md, lg)
6. Transitions: Duration (150ms, 250ms, 350ms) + easing functions

**Component Requirements**:
- Buttons: Primary, secondary, outline variants + sizes (sm, base, lg)
- Forms: Inputs, textarea, select with 3:1 contrast focus states
- Cards: Base card with consistent shadow and spacing
- All states: default, hover, focus, active, disabled

**Output Format**:
```

:root {
  /* Color tokens */
  --color-primary: #...;
  --color-primary-hover: #...;

  /* Typography tokens */
  --font-family-base: ...;
  --font-size-base: 16px;

  /* Component styles */
}

.btn {
  background: var(--color-primary);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-base);
}

```
**Validation Checklist**:
- All colors meet WCAG AA contrast ratios
- All values come from tokens (no inline colors or sizes)
- Focus states visible (3:1 contrast minimum)
- Mobile-first media queries
- No !important overrides

**Example Files to Include** (if Skill creator supports):
- examples/good-tokens.css (reference implementation)
- contrast-checker.md (validation guidelines)

Version: 1.0.0
```


````