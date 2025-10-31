# Homepage Content Implementer Skill

## Purpose

Build homepage sections from wireframes using exact content, semantic HTML, and design system components only. Use this skill for homepage or landing page implementation to ensure faithful content reproduction, consistent design system usage, and proper responsive behavior.

## When to Use This Skill

- Converting wireframes or designs to production HTML
- Building homepage or landing page sections
- Implementing marketing pages with specific content requirements
- Creating responsive layouts using existing design systems
- Ensuring content fidelity from design to implementation

## Core Principles

### 1. Exact Content Fidelity
Always use the exact content from wireframes. No lorem ipsum, no paraphrasing, no creative interpretation. Content accuracy is paramount.

### 2. Design System Only
Use only pre-defined design system components and utilities. Never create custom styles or deviate from the established design system.

### 3. Semantic HTML Structure
Implement proper semantic HTML with correct landmarks, heading hierarchy, and accessibility attributes.

### 4. Mobile-First Responsive
Start with mobile layout and progressively enhance for larger screens. Stack elements on mobile, use grids/flexbox on desktop.

## Section Implementation Template

### Standard Section Structure
```html
<section id="section-name" class="section">
  <div class="container">
    <header class="section__header">
      <h2 class="h2">[Exact headline from wireframe]</h2>
      <p class="body-text body-text--large">[Exact subheadline if present]</p>
    </header>
    
    <div class="section__content">
      <p class="body-text">[Exact body copy from wireframe]</p>
    </div>
    
    <div class="section__actions">
      <button class="btn btn--primary">[Exact CTA text]</button>
      <button class="btn btn--secondary">[Secondary CTA if present]</button>
    </div>
  </div>
</section>
```

### Section Naming Convention
- Use descriptive, semantic IDs: `hero`, `features`, `testimonials`, `pricing`, `contact`
- Match wireframe section names when provided
- Use kebab-case for multi-word sections: `about-us`, `case-studies`

## Responsive Layout Patterns

### Mobile-First Grid System
```css
/* Mobile-first base styles */
.card-grid {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: 1fr; /* Single column on mobile */
}

.feature-grid {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: 1fr;
}

/* Tablet breakpoint */
@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-6);
  }
  
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop breakpoint */
@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .feature-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Large desktop */
@media (min-width: 1440px) {
  .card-grid--four {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Responsive Image Patterns
```html
<!-- Hero Image -->
<div class="hero__image">
  <picture>
    <source media="(min-width: 1024px)" srcset="hero-desktop.jpg">
    <source media="(min-width: 768px)" srcset="hero-tablet.jpg">
    <img src="hero-mobile.jpg" alt="[Exact alt text from wireframe]" loading="eager">
  </picture>
</div>

<!-- Content Images -->
<div class="image-container">
  <img 
    src="feature-image.jpg" 
    alt="[Exact alt text]"
    loading="lazy"
    class="image image--responsive"
  >
</div>
```

## Hero Section Implementation

### Complete Hero Structure
```html
<section id="hero" class="hero">
  <div class="container">
    <div class="hero__content">
      <header class="hero__header">
        <h1 class="h1 hero__headline">[Exact primary headline]</h1>
        <p class="hero__subheadline body-text--large">[Exact subheadline/value prop]</p>
        <p class="hero__byline body-text--small">[Optional credibility statement]</p>
      </header>
      
      <div class="hero__actions">
        <a href="[exact-url]" class="btn btn--primary btn--large">
          [Exact primary CTA text]
        </a>
        <a href="[exact-url]" class="btn btn--outline btn--large">
          [Exact secondary CTA text]
        </a>
      </div>
    </div>
    
    <div class="hero__media">
      <!-- Hero image, video, or illustration -->
    </div>
  </div>
</section>
```

### Hero Section Requirements Checklist
- [ ] **H1 headline** with primary keyword from wireframe
- [ ] **Subheadline** supporting the value proposition
- [ ] **Optional byline** for credibility (testimonial quote, stats, etc.)
- [ ] **Primary CTA** using high-contrast button (usually `btn--primary`)
- [ ] **Secondary CTA** using outline or ghost button (usually `btn--outline`)
- [ ] **Background treatment** (gradient, image, or solid color as specified)
- [ ] **Media element** (hero image, video, or product shot)

## Common Homepage Sections

### Features Section
```html
<section id="features" class="section">
  <div class="container">
    <header class="section__header text-center">
      <h2 class="h2">[Exact features headline]</h2>
      <p class="body-text--large">[Exact supporting text]</p>
    </header>
    
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-card__icon">
          <img src="icon-1.svg" alt="" aria-hidden="true">
        </div>
        <h3 class="h4 feature-card__title">[Exact feature title]</h3>
        <p class="body-text feature-card__description">[Exact description]</p>
      </div>
      <!-- Repeat for each feature -->
    </div>
  </div>
</section>
```

### Testimonials Section
```html
<section id="testimonials" class="section section--gray">
  <div class="container">
    <header class="section__header text-center">
      <h2 class="h2">[Exact testimonials headline]</h2>
    </header>
    
    <div class="testimonial-grid">
      <blockquote class="testimonial">
        <p class="testimonial__quote">"[Exact quote from wireframe]"</p>
        <footer class="testimonial__attribution">
          <img 
            src="avatar-1.jpg" 
            alt="[Customer name]" 
            class="testimonial__avatar"
          >
          <div class="testimonial__author">
            <cite class="testimonial__name">[Exact name]</cite>
            <p class="testimonial__title">[Exact title and company]</p>
          </div>
        </footer>
      </blockquote>
      <!-- Repeat for each testimonial -->
    </div>
  </div>
</section>
```

### CTA Section
```html
<section id="cta" class="section section--primary">
  <div class="container text-center">
    <h2 class="h2 text-white">[Exact CTA headline]</h2>
    <p class="body-text--large text-white">[Exact supporting text]</p>
    <div class="section__actions">
      <a href="[exact-url]" class="btn btn--white btn--large">
        [Exact CTA text]
      </a>
    </div>
  </div>
</section>
```

## Content Implementation Guidelines

### Text Content Rules
1. **Copy exactly** - Use the exact text from wireframes, no modifications
2. **Preserve formatting** - Maintain bold, italic, and link formatting as shown
3. **Keep line breaks** - Honor intentional line breaks in headlines
4. **Use proper quotes** - Convert straight quotes to smart quotes (`"` to `"`)
5. **Maintain case** - Preserve the exact capitalization from wireframes

### CTA Implementation
```html
<!-- Primary CTA (conversions) -->
<a href="/signup" class="btn btn--primary">
  [Exact button text from wireframe]
</a>

<!-- Secondary CTA (information) -->
<a href="/learn-more" class="btn btn--outline">
  [Exact button text from wireframe]
</a>

<!-- Smooth scroll CTA -->
<a href="#pricing" class="btn btn--secondary smooth-scroll">
  [Exact button text from wireframe]
</a>
```

### Link and Navigation
- Use exact URLs provided in wireframes
- Implement smooth scrolling for anchor links
- Add appropriate `target="_blank" rel="noopener noreferrer"` for external links
- Ensure all CTAs are functional and lead to correct destinations

## Design System Integration

### Component Usage
```html
<!-- Use design system components exactly as documented -->
<button class="btn btn--primary btn--large">
  <!-- Never: class="custom-button blue-button" -->
  <!-- Always: Use defined design system classes -->
</button>

<!-- Spacing utilities -->
<div class="mb-4">  <!-- margin-bottom: var(--space-4) -->
<div class="pt-6">  <!-- padding-top: var(--space-6) -->

<!-- Typography -->
<h2 class="h2">         <!-- Defined heading style -->
<p class="body-text">   <!-- Standard body text -->
<p class="text-small">  <!-- Small text variant -->
```

### Layout Components
- Use `container` for content width constraints
- Use `section` for major page divisions
- Use grid utilities: `grid`, `grid-cols-2`, `grid-cols-3`
- Use spacing utilities: `mb-4`, `pt-6`, `gap-4`

## Responsive Breakpoints

### Standard Breakpoints
```css
/* Mobile (default) */
/* 390px - 767px */

/* Tablet */
@media (min-width: 768px) {
  /* Tablet styles */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Desktop styles */
}

/* Large Desktop */
@media (min-width: 1440px) {
  /* Large screen enhancements */
}
```

### Testing Viewports
- **Mobile**: 390px width (iPhone 12 Pro)
- **Tablet**: 768px width (iPad portrait)
- **Desktop**: 1024px width (laptop)
- **Large**: 1440px width (desktop monitor)

## Validation Checklist

### Content Fidelity ✓
- [ ] All headlines match wireframe exactly
- [ ] All body copy matches wireframe exactly
- [ ] All CTA text matches wireframe exactly
- [ ] All image alt text provided or matches wireframe
- [ ] No lorem ipsum or placeholder content

### Design System Compliance ✓
- [ ] Only design system components used
- [ ] No custom CSS classes created
- [ ] Proper spacing utilities applied
- [ ] Typography classes used correctly
- [ ] Color utilities match brand guidelines

### Semantic HTML ✓
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Semantic section elements used
- [ ] Landmarks properly implemented
- [ ] Lists used for grouped content
- [ ] Buttons vs links used appropriately

### Responsive Design ✓
- [ ] Mobile-first approach implemented
- [ ] Content stacks properly on mobile (390px)
- [ ] Tablet layout functional (768px)
- [ ] Desktop layout implemented (1024px)
- [ ] Large screen enhancements (1440px+)
- [ ] Images responsive and optimized

### Functionality ✓
- [ ] All CTAs have proper href attributes
- [ ] Smooth scroll implemented for anchor links
- [ ] External links have proper rel attributes
- [ ] Form submissions work (if present)
- [ ] No broken links or 404 errors

### Accessibility ✓
- [ ] Skip link present and functional
- [ ] All images have alt attributes
- [ ] Proper ARIA labels on interactive elements
- [ ] Keyboard navigation functional
- [ ] Color contrast meets WCAG standards

## Quality Assurance Process

### Pre-Launch Checklist
1. **Content Review** - Compare final implementation to wireframe side-by-side
2. **Design System Audit** - Verify no custom styles introduced
3. **Responsive Testing** - Test all breakpoints on real devices
4. **Cross-Browser Testing** - Verify compatibility in Chrome, Firefox, Safari
5. **Performance Check** - Ensure fast loading and optimized images
6. **Accessibility Audit** - Run axe-core or similar accessibility checker

### Common Implementation Mistakes
- **Content deviation** - Paraphrasing or "improving" wireframe content
- **Custom styling** - Creating styles instead of using design system
- **Desktop-first approach** - Starting with desktop instead of mobile
- **Broken responsive behavior** - Elements not stacking properly on mobile
- **Missing CTAs** - Buttons without proper href or onClick handlers
- **Heading hierarchy issues** - Skipping heading levels or multiple H1s

## Version

**Homepage Content Implementer Skill v1.0.0**

*Last Updated: October 31, 2025*
