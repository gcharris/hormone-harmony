## **Skill 3 Prompt: Homepage Content Implementer**

```

@create-skill

Create a Skill called "Homepage Content Implementer"

**Purpose**: Build homepage sections from wireframes using exact content, semantic HTML, and design system components only. Use for homepage or landing page implementation.

**Core Principles**:

- Use exact content from wireframe (no lorem ipsum, no paraphrasing)
- Use design system components only (no custom styles)
- Semantic HTML (proper landmarks, headings)
- Mobile-first responsive (stack on mobile, grid on desktop)

**Section Template**:

```
<section id="section-name" class="section">
  <div class="container">
    <h2 class="h2">[Exact headline from wireframe]</h2>
    <p class="body-text">[Exact body copy]</p>
    <button class="btn btn--primary">[Exact CTA text]</button>
  </div>
</section>
```

**Responsive Patterns**:

```
/* Mobile-first */
.card-grid {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: 1fr; /* Stack on mobile */
}

/* Tablet */
@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Hero Section Requirements**:

- H1 headline (primary keyword)
- Subheadline (supporting value prop)
- Optional byline (credibility)
- Primary CTA (high contrast button)
- Secondary CTA (outline button)
- Background (gradient or image)

**Validation Checklist**:

- All content matches wireframe verbatim
- Only design system components used
- Responsive at 390px, 768px, 1024px
- All CTAs functional (href or smooth scroll)
- Heading hierarchy correct

Version: 1.0.0

```