## **Skill 2 Prompt: Semantic HTML Builder**

```
@create-skill

Create a Skill called "Semantic HTML Builder"

**Purpose**: Build accessible, SEO-optimized HTML with proper document structure, ARIA, and landmark regions. Use for all page structure and component markup tasks.

**Document Structure Rules**:
1. One <h1> per page (main headline)
2. Heading hierarchy without skips (H1 → H2 → H3, never H1 → H3)
3. Landmarks: <header>, <nav>, <main>, <footer>, <section>, <article>
4. Lists for navigation (<ul>, <ol>)
5. <button> for actions, <a> for navigation

**Required Meta Tags**:
```

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[50-60 chars, keyword-rich]</title>
  <meta name="description" content="[150-160 chars]">
  <link rel="canonical" href="https://...">
</head>
```


**Form Accessibility**:

- All inputs have <label> with for="input-id"
- Required fields marked with required attribute
- Error messages linked via aria-describedby
- No placeholder-only labels (always use visible labels)

**Image Accessibility**:

- All <img> have alt attribute
- Decorative images: alt=""
- Informative images: descriptive alt text (no "image of")
- Icons: describe function, not appearance ("Close dialog" not "X icon")

**Common ARIA Patterns**:

```
<!-- Skip link -->
<a href="#main-content" class="sr-only">Skip to main content</a>

<!-- Current page in nav -->
<a href="/about" aria-current="page">About</a>

<!-- Button with icon -->
<button aria-label="Close dialog">
  <span aria-hidden="true">×</span>
</button>

<!-- Expandable section -->
<button aria-expanded="false" aria-controls="section-1">
  Toggle
</button>
<div id="section-1" hidden>Content</div>
```

**Validation Checklist**:

- One H1, logical heading hierarchy
- All landmarks present
- All images have alt text
- All forms have proper labels
- Skip link at top of page

Version: 1.0.0

