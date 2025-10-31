# Semantic HTML Builder Skill

## Purpose

Build accessible, SEO-optimized HTML with proper document structure, ARIA attributes, and landmark regions. Use this skill for all page structure and component markup tasks to ensure semantic correctness, accessibility compliance, and search engine optimization.

## When to Use This Skill

- Creating new HTML pages or components
- Converting designs to semantic markup
- Auditing existing HTML for accessibility issues
- Building forms, navigation, or content sections
- Implementing responsive layouts with proper structure

## Core Principles

### 1. Semantic Structure First
Always prioritize meaning over appearance. Use HTML elements for their semantic purpose, not their default styling.

### 2. Accessibility by Default
Every element should be usable by assistive technologies. Include ARIA attributes, proper labeling, and keyboard navigation support.

### 3. SEO-Optimized Structure
Implement proper heading hierarchy, meta tags, and structured markup for search engine visibility.

## Document Structure Rules

### Heading Hierarchy
1. **One `<h1>` per page** - The main headline that describes the page content
2. **No heading level skips** - Progress logically: H1 → H2 → H3, never H1 → H3
3. **Descriptive headings** - Each heading should clearly describe the section content
4. **Maximum 6 levels** - Use H1-H6, avoid deeper nesting

### Landmark Regions (Required)
```html
<header role="banner">
  <!-- Site header, logo, main navigation -->
</header>

<nav role="navigation" aria-label="Main navigation">
  <!-- Primary site navigation -->
</nav>

<main role="main" id="main-content">
  <!-- Primary page content -->
  
  <section>
    <!-- Thematically related content -->
  </section>
  
  <article>
    <!-- Self-contained, redistributable content -->
  </article>
</main>

<footer role="contentinfo">
  <!-- Site footer, copyright, secondary links -->
</footer>
```

### Content Organization
- Use `<section>` for thematically related content
- Use `<article>` for standalone, redistributable content
- Use `<aside>` for tangentially related content
- Use lists (`<ul>`, `<ol>`) for navigation and grouped items
- Use `<button>` for actions, `<a>` for navigation

## Required Meta Tags

Every HTML page must include these essential meta tags:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[50-60 characters, keyword-rich, unique per page]</title>
  <meta name="description" content="[150-160 characters, compelling summary]">
  <link rel="canonical" href="https://example.com/current-page">
  
  <!-- Optional but recommended -->
  <meta name="author" content="Author Name">
  <meta name="robots" content="index,follow">
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
</head>
```

### Meta Tag Guidelines
- **Title**: Include primary keyword, brand name, be descriptive and unique
- **Description**: Write compelling copy that encourages clicks from search results
- **Canonical**: Prevent duplicate content issues, point to the preferred URL

## Form Accessibility

### Essential Form Patterns

```html
<!-- Text Input with Label -->
<div class="form-group">
  <label for="user-email">Email Address *</label>
  <input 
    type="email" 
    id="user-email" 
    name="email" 
    required 
    aria-describedby="email-error"
    autocomplete="email"
  >
  <div id="email-error" class="error" aria-live="polite"></div>
</div>

<!-- Radio Button Group -->
<fieldset>
  <legend>Preferred Contact Method</legend>
  <label>
    <input type="radio" name="contact" value="email" required>
    Email
  </label>
  <label>
    <input type="radio" name="contact" value="phone" required>
    Phone
  </label>
</fieldset>

<!-- Select Dropdown -->
<label for="country-select">Country</label>
<select id="country-select" name="country" required>
  <option value="">Choose a country</option>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
</select>
```

### Form Accessibility Rules
1. **All inputs have explicit labels** using `<label for="input-id">`
2. **Required fields** marked with `required` attribute and visual indicator
3. **Error messages** linked via `aria-describedby` and announced with `aria-live`
4. **No placeholder-only labels** - always provide visible labels
5. **Group related fields** with `<fieldset>` and `<legend>`
6. **Include autocomplete** attributes for user data fields

## Image Accessibility

### Image Alt Text Guidelines

```html
<!-- Informative Images -->
<img src="chart.png" alt="Sales increased 40% from Q1 to Q2 2024">

<!-- Decorative Images -->
<img src="border-decoration.png" alt="" role="presentation">

<!-- Functional Images (links/buttons) -->
<a href="/search">
  <img src="search-icon.png" alt="Search products">
</a>

<!-- Complex Images -->
<img src="complex-chart.png" alt="Q2 financial results" 
     aria-describedby="chart-description">
<div id="chart-description">
  Detailed breakdown: Revenue up 15%, expenses down 8%...
</div>
```

### Alt Text Rules
1. **All `<img>` elements** must have an `alt` attribute
2. **Decorative images** use `alt=""` (empty alt text)
3. **Informative images** use descriptive alt text (avoid "image of" or "picture of")
4. **Functional images** describe the function, not appearance
5. **Complex images** use `aria-describedby` to reference detailed descriptions

## Common ARIA Patterns

### Essential ARIA Implementations

```html
<!-- Skip Navigation Link -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Current Page in Navigation -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/about" aria-current="page">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>

<!-- Button with Icon -->
<button type="button" aria-label="Close dialog" class="close-button">
  <span aria-hidden="true">&times;</span>
</button>

<!-- Expandable/Collapsible Section -->
<button 
  type="button"
  aria-expanded="false" 
  aria-controls="section-content"
  id="section-toggle"
>
  Toggle Section
</button>
<div id="section-content" hidden>
  <p>Collapsible content goes here...</p>
</div>

<!-- Loading State -->
<div aria-live="polite" aria-label="Loading">
  <span aria-hidden="true">Loading...</span>
</div>

<!-- Error Messages -->
<div role="alert" aria-live="assertive">
  Please correct the errors below
</div>
```

### ARIA Best Practices
- Use `aria-label` for elements without visible text
- Use `aria-describedby` to reference additional descriptions
- Use `aria-expanded` for collapsible elements
- Use `aria-current="page"` for current navigation item
- Use `aria-live` regions for dynamic content updates
- Use `role="alert"` for important error messages

## Validation Checklist

Before considering any HTML complete, verify:

### Structure ✓
- [ ] One `<h1>` per page with descriptive content
- [ ] Logical heading hierarchy (no skips)
- [ ] All required landmarks present (`<header>`, `<nav>`, `<main>`, `<footer>`)
- [ ] Proper semantic elements used (`<section>`, `<article>`, etc.)

### Accessibility ✓
- [ ] All images have appropriate `alt` attributes
- [ ] All form inputs have explicit labels
- [ ] Required fields properly marked
- [ ] Skip link present at top of page
- [ ] Error messages linked to form fields
- [ ] Keyboard navigation functional

### SEO ✓
- [ ] Title tag present and optimized (50-60 chars)
- [ ] Meta description present and compelling (150-160 chars)
- [ ] Canonical URL specified
- [ ] Proper heading structure for content hierarchy

### Performance ✓
- [ ] Images have appropriate `loading="lazy"` where applicable
- [ ] Critical CSS inlined, non-critical CSS loaded asynchronously
- [ ] Minimal inline JavaScript, external scripts loaded properly

## Code Quality Standards

### HTML Formatting
```html
<!-- Good: Consistent indentation, logical attribute order -->
<button 
  type="submit"
  class="btn btn-primary"
  aria-label="Submit form"
  disabled
>
  Submit
</button>

<!-- Good: Semantic structure -->
<article>
  <header>
    <h2>Article Title</h2>
    <time datetime="2024-01-15">January 15, 2024</time>
  </header>
  <p>Article content...</p>
</article>
```

### Avoid Common Mistakes
- Don't use `<div>` and `<span>` when semantic elements exist
- Don't rely on placeholder text as labels
- Don't skip heading levels
- Don't use `role` attributes on elements that already have semantic meaning
- Don't use `target="_blank"` without `rel="noopener noreferrer"`

## Version

**Semantic HTML Builder Skill v1.0.0**

*Last Updated: October 31, 2025*
