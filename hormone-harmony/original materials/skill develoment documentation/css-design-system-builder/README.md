# CSS Design System Builder Skill

A comprehensive skill for building maintainable, accessible CSS design systems with design tokens and WCAG 2.1 AA compliance.

## What's Included

- **SKILL.md** - Complete skill documentation with principles, guidelines, and best practices
- **design-tokens-template.css** - Complete design tokens template with all categories
- **component-library.css** - Full component library built using design tokens
- **example.html** - Working example demonstrating the design system in action

## Quick Start

1. Copy `design-tokens-template.css` as your starting point
2. Customize the token values to match your brand
3. Use `component-library.css` as a reference for building components
4. Follow the validation checklist in SKILL.md before shipping

## Key Features

✅ **Token-based architecture** - All values come from CSS custom properties  
✅ **WCAG 2.1 AA compliant** - Meets accessibility contrast requirements  
✅ **Mobile-first responsive** - Designed for all screen sizes  
✅ **Semantic naming** - Clear, purpose-driven class names  
✅ **No arbitrary values** - Systematic constraints for consistency  

## File Overview

### design-tokens-template.css
- Complete color palettes (primary, secondary, semantic)
- Typography scale (fonts, sizes, weights, spacing)
- Spacing system (4px base scale)
- Border radius, shadows, transitions
- Dark mode support
- Z-index and breakpoint tokens

### component-library.css
- Buttons (variants: primary, secondary, outline, danger)
- Form controls (inputs, textareas, selects)
- Cards with headers, bodies, and footers
- Alerts for different message types
- Badges for status indicators
- Navigation components
- Modal dialogs
- Utility classes for common patterns

## Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="design-tokens-template.css">
    <link rel="stylesheet" href="component-library.css">
</head>
<body>
    <button class="btn btn--primary btn--lg">
        Get Started
    </button>
    
    <div class="card">
        <div class="card__header">
            <h2 class="card__title">Welcome</h2>
        </div>
        <div class="card__body">
            <p>Your design system is ready to use!</p>
        </div>
    </div>
</body>
</html>
```

## Customization

1. **Update Brand Colors**: Modify the primary and secondary color scales in `design-tokens-template.css`
2. **Adjust Typography**: Change font families and scale ratios to match your brand
3. **Customize Spacing**: Adjust the spacing scale if you prefer 8px or other base units
4. **Add Components**: Follow the token-based patterns to create new components

## Validation

Before deploying your design system:

- [ ] All colors meet WCAG AA contrast ratios (use WebAIM's contrast checker)
- [ ] No hardcoded values in component styles
- [ ] Focus indicators are visible (3:1 contrast minimum)
- [ ] Mobile-first responsive design implemented
- [ ] All interactive elements are keyboard accessible

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

Supports CSS custom properties, flexbox, and CSS grid.

## License

Open source - use in any project, commercial or personal.
