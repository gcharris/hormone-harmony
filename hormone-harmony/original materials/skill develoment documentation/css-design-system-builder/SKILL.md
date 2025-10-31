# CSS Design System Builder

## Purpose
Build maintainable, accessible CSS design systems with design tokens, semantic naming conventions, and WCAG 2.1 AA compliance. Use this skill for any design system or component library development task.

## When to Use This Skill
- Creating new design systems from scratch
- Establishing design tokens and variables
- Building component libraries
- Ensuring accessibility compliance
- Standardizing UI patterns across projects
- Converting existing styles to token-based systems

## Core Principles

### 1. Token-Based Architecture
- All design values must come from CSS custom properties (tokens)
- No hardcoded colors, sizes, or spacing values in components
- Establish a systematic scale for all design properties

### 2. Semantic Naming
- Use BEM methodology or semantic class names
- Names should describe purpose, not appearance
- Maintain consistent naming patterns across all components

### 3. Mobile-First Responsive Design
- Start with mobile layouts and enhance upward
- Use min-width media queries
- Design for touch interactions and small screens

### 4. WCAG 2.1 AA Compliance
- Minimum contrast ratios: 4.5:1 for body text, 3:1 for large text
- Focus indicators must have 3:1 contrast ratio
- All interactive elements must be keyboard accessible

### 5. No Arbitrary Values
- Every value must reference a design token
- Maintain consistency through systematic constraints

## Required Token Categories

### Colors
```css
:root {
  /* Primary palette */
  --color-primary: #...;
  --color-primary-hover: #...;
  --color-primary-active: #...;
  --color-primary-disabled: #...;
  
  /* Secondary palette */
  --color-secondary: #...;
  --color-secondary-hover: #...;
  
  /* Accent colors */
  --color-accent: #...;
  
  /* Neutral scale */
  --color-neutral-50: #...;
  --color-neutral-100: #...;
  /* ... continue to 900 */
  
  /* Semantic colors */
  --color-success: #...;
  --color-error: #...;
  --color-warning: #...;
  --color-info: #...;
  
  /* Text colors */
  --color-text-primary: #...;
  --color-text-secondary: #...;
  --color-text-muted: #...;
  
  /* Background colors */
  --color-bg-primary: #...;
  --color-bg-secondary: #...;
  --color-bg-muted: #...;
}
```

### Typography
```css
:root {
  /* Font families */
  --font-family-sans: 'Inter', system-ui, sans-serif;
  --font-family-serif: 'Georgia', serif;
  --font-family-mono: 'Fira Code', monospace;
  
  /* Font sizes (rem-based) */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  
  /* Font weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Line heights */
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  
  /* Letter spacing */
  --letter-spacing-tight: -0.025em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
}
```

### Spacing Scale
```css
:root {
  /* Spacing scale (4px base) */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

### Border Radius
```css
:root {
  --radius-none: 0;
  --radius-sm: 0.25rem;    /* 4px */
  --radius-base: 0.5rem;   /* 8px */
  --radius-md: 0.75rem;    /* 12px */
  --radius-lg: 1rem;       /* 16px */
  --radius-xl: 1.5rem;     /* 24px */
  --radius-full: 9999px;
}
```

### Shadows
```css
:root {
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-base: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
}
```

### Transitions
```css
:root {
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 350ms ease;
  
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Required Components

### Buttons
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-2) var(--space-4);
  border: 1px solid transparent;
  border-radius: var(--radius-base);
  font-family: var(--font-family-sans);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-tight);
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-fast);
}

/* Primary button */
.btn--primary {
  background-color: var(--color-primary);
  color: white;
}

.btn--primary:hover {
  background-color: var(--color-primary-hover);
}

.btn--primary:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.btn--primary:disabled {
  background-color: var(--color-primary-disabled);
  cursor: not-allowed;
}

/* Secondary button */
.btn--secondary {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-primary);
  border-color: var(--color-neutral-300);
}

/* Outline button */
.btn--outline {
  background-color: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

/* Button sizes */
.btn--sm {
  padding: var(--space-1) var(--space-3);
  font-size: var(--font-size-sm);
}

.btn--lg {
  padding: var(--space-3) var(--space-6);
  font-size: var(--font-size-lg);
}
```

### Form Controls
```css
.form-input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--color-neutral-300);
  border-radius: var(--radius-base);
  font-family: var(--font-family-sans);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  transition: border-color var(--transition-fast);
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(var(--color-primary-rgb), 0.2);
}

.form-input:disabled {
  background-color: var(--color-neutral-100);
  cursor: not-allowed;
}

.form-input--error {
  border-color: var(--color-error);
}

.form-label {
  display: block;
  margin-bottom: var(--space-2);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}
```

### Cards
```css
.card {
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.card__header {
  padding: var(--space-6);
  border-bottom: 1px solid var(--color-neutral-200);
}

.card__body {
  padding: var(--space-6);
}

.card__footer {
  padding: var(--space-4) var(--space-6);
  background-color: var(--color-bg-secondary);
  border-top: 1px solid var(--color-neutral-200);
}
```

## Validation Checklist

Before finalizing any design system implementation, verify:

### Accessibility
- [ ] All color combinations meet WCAG AA contrast ratios (4.5:1 body text, 3:1 large text)
- [ ] Focus indicators are visible with minimum 3:1 contrast ratio
- [ ] All interactive elements are keyboard accessible
- [ ] Form inputs have proper labels and error states

### Token Consistency
- [ ] No hardcoded values in component styles
- [ ] All colors reference design tokens
- [ ] All spacing uses the systematic scale
- [ ] Typography follows the established scale

### Responsive Design
- [ ] Mobile-first approach with min-width media queries
- [ ] Touch targets are minimum 44px on mobile
- [ ] Text remains readable at all viewport sizes

### Code Quality
- [ ] No !important overrides used
- [ ] Consistent naming conventions throughout
- [ ] Modular, reusable component structure
- [ ] Clear separation between tokens and component styles

## Example Implementation

Here's a complete example showing tokens and components working together:

```css
/* Design Tokens */
:root {
  --color-primary: #3b82f6;
  --color-primary-hover: #2563eb;
  --color-primary-active: #1d4ed8;
  --color-text-primary: #111827;
  --color-bg-primary: #ffffff;
  --color-neutral-200: #e5e7eb;
  --color-neutral-300: #d1d5db;
  
  --font-family-sans: 'Inter', system-ui, sans-serif;
  --font-size-base: 1rem;
  --font-weight-medium: 500;
  
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  
  --radius-base: 0.5rem;
  --radius-lg: 1rem;
  
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --transition-fast: 150ms ease;
}

/* Components */
.btn {
  padding: var(--space-2) var(--space-4);
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-base);
  font-family: var(--font-family-sans);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.btn:hover {
  background-color: var(--color-primary-hover);
}

.card {
  background-color: var(--color-bg-primary);
  border: 1px solid var(--color-neutral-200);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: var(--space-6);
}
```

## Tips for Success

1. **Start with tokens first** - Define your design tokens before building components
2. **Test accessibility early** - Use tools like WebAIM's contrast checker throughout development
3. **Document decisions** - Include comments explaining color choices and spacing rationale
4. **Build incrementally** - Start with basic components and expand systematically
5. **Validate frequently** - Check the validation checklist after each component addition
6. **Consider dark mode** - Structure tokens to support theme switching from the beginning

## Common Pitfalls to Avoid

- Using arbitrary values instead of tokens
- Skipping accessibility testing until the end
- Creating too many token variations initially
- Not planning for component states (hover, focus, disabled)
- Forgetting mobile-first responsive design
- Using !important as a quick fix instead of proper specificity management
