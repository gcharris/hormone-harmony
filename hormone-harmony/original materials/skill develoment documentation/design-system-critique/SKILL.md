# Design System Critique Skill

## Purpose

Provide UX-focused design feedback on visual hierarchy, spacing, color, and brand consistency. Use this skill for design reviews, improvement suggestions, and ensuring design system coherence across products and experiences.

## When to Use This Skill

- Design system component reviews
- Brand guideline compliance audits
- UI/UX design critiques and feedback sessions
- Pre-launch design quality assurance
- Cross-platform design consistency checks
- Design team collaboration and mentoring

## Critique Methodology

### 1. Holistic Assessment
- **First impression** - What stands out immediately?
- **User flow consideration** - Does design support user goals?
- **Context evaluation** - Design appropriate for intended use case?
- **Competitive landscape** - How does it compare to industry standards?

### 2. Systematic Evaluation
- **Component-level analysis** - Individual element effectiveness
- **System-level review** - Overall cohesion and consistency
- **Accessibility integration** - Inclusive design principles
- **Scalability assessment** - Design system flexibility

## Evaluation Framework

### 1. Visual Hierarchy Assessment

#### Primary Focus Evaluation
```
Key Questions:
• What's the most important element on the page/screen?
• Is the primary focus immediately obvious to users?
• Does the visual weight match content priority?
• Are there competing elements of equal visual importance?
```

#### Hierarchy Techniques Analysis
```html
<!-- Size Hierarchy -->
<h1 class="text-4xl">Primary Headline (36px)</h1>
<h2 class="text-2xl">Secondary Headline (24px)</h2>
<h3 class="text-xl">Tertiary Headline (20px)</h3>
<p class="text-base">Body Text (16px)</p>

<!-- Contrast & Color Hierarchy -->
<button class="bg-primary text-white">Primary Action</button>
<button class="bg-secondary text-dark">Secondary Action</button>
<button class="text-primary bg-transparent">Tertiary Action</button>

<!-- Position & Whitespace Hierarchy -->
<div class="hero-section mb-16">  <!-- Most prominent -->
<div class="content-section mb-8"> <!-- Secondary -->
<div class="sidebar ml-4">        <!-- Supporting -->
```

#### Visual Hierarchy Checklist
- [ ] **Clear focal point** - Primary element immediately draws attention
- [ ] **Size relationships** - Larger = more important, consistent scaling
- [ ] **Contrast usage** - High contrast for important elements
- [ ] **Position advantage** - Important content in prime real estate
- [ ] **Whitespace leverage** - Space creates emphasis and breathing room
- [ ] **Color significance** - Brand colors reserved for key actions/content

### 2. Spacing & Rhythm Evaluation

#### Spacing Scale Consistency
```css
/* Design Token Example */
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
}

/* Consistent Usage */
.card {
  padding: var(--space-6);
  margin-bottom: var(--space-8);
}

.button {
  padding: var(--space-3) var(--space-6);
}
```

#### Rhythm & Flow Analysis
```
Content Grouping Assessment:
• Related elements visually grouped together
• Unrelated elements clearly separated
• Consistent spacing between similar components
• Generous whitespace prevents cramped feeling

Vertical Rhythm Evaluation:
• Consistent baseline grid alignment
• Predictable spacing between content blocks
• Logical content flow from top to bottom
• Proper use of section breaks and dividers
```

#### Spacing Critique Areas
- **Component internal spacing** - Padding and internal margins
- **Component relationships** - Spacing between related elements
- **Section separation** - Clear delineation between content areas
- **Page breathing room** - Overall whitespace distribution
- **Mobile adaptation** - Spacing adjustments for smaller screens

### 3. Color & Contrast Evaluation

#### Color Usage Strategy
```css
/* Primary Color Usage */
.primary-action {
  background-color: var(--color-primary);
  /* Reserve for: Main CTAs, active states, key brand moments */
}

/* Secondary Color Usage */
.secondary-element {
  color: var(--color-secondary);
  /* Use for: Supporting elements, hover states, accents */
}

/* Neutral Color Usage */
.content-text {
  color: var(--color-neutral-900);
  /* Use for: Body text, general content, backgrounds */
}
```

#### Accessibility & Contrast Requirements
```
WCAG AA Compliance:
• Body text (16px): 4.5:1 contrast minimum
• Large text (18px+): 3:1 contrast minimum
• Interactive elements: 3:1 contrast minimum
• Focus indicators: 3:1 contrast minimum

Color Communication:
• Never rely solely on color to convey information
• Include text labels, icons, or patterns
• Test with colorblind simulation tools
• Ensure meaning clear in grayscale
```

#### Color Critique Checklist
- [ ] **Primary color purpose** - Reserved for most important actions/elements
- [ ] **Secondary color restraint** - Used sparingly for accent and support
- [ ] **Neutral color hierarchy** - Clear text/background relationships
- [ ] **Contrast compliance** - All text meets WCAG AA standards
- [ ] **Color accessibility** - Information not conveyed by color alone
- [ ] **Brand alignment** - Colors match established brand palette

### 4. Typography Assessment

#### Type Scale & Hierarchy
```css
/* Harmonious Type Scale */
.text-xs   { font-size: 0.75rem; }  /* 12px */
.text-sm   { font-size: 0.875rem; } /* 14px */
.text-base { font-size: 1rem; }     /* 16px - base */
.text-lg   { font-size: 1.125rem; } /* 18px */
.text-xl   { font-size: 1.25rem; }  /* 20px */
.text-2xl  { font-size: 1.5rem; }   /* 24px */
.text-3xl  { font-size: 1.875rem; } /* 30px */
.text-4xl  { font-size: 2.25rem; }  /* 36px */

/* Line Height Recommendations */
.heading { line-height: 1.2; }  /* Tight for headlines */
.body    { line-height: 1.5; }  /* Comfortable for reading */
.caption { line-height: 1.4; }  /* Balanced for small text */
```

#### Readability Assessment
```
Line Length Evaluation:
• Body text: 45-75 characters per line optimal
• Headlines: Can be shorter for impact
• Captions: 40-50 characters ideal
• Mobile: Adjust for screen width

Font Weight Usage:
• Regular (400): Body text, standard content
• Medium (500): Emphasis, important labels
• Semibold (600): Subheadings, call-outs
• Bold (700): Headlines, strong emphasis
```

#### Typography Critique Points
- [ ] **Scale relationships** - Clear size progression (H1 > H2 > H3 > body)
- [ ] **Line height comfort** - Appropriate spacing for readability
- [ ] **Line length optimization** - Comfortable reading experience
- [ ] **Font weight purpose** - Logical weight hierarchy
- [ ] **Font pairing harmony** - Complementary typeface combinations
- [ ] **Mobile typography** - Readable at all screen sizes

### 5. Brand Consistency Evaluation

#### Brand Expression Analysis
```
Visual Brand Alignment:
• Logo usage follows brand guidelines
• Color palette matches brand standards
• Typography reflects brand personality
• Imagery style consistent with brand tone

Tone & Personality Evaluation:
• Professional vs. Casual approach
• Modern vs. Traditional styling
• Minimalist vs. Rich visual treatment
• Conservative vs. Bold design choices
```

#### Component Consistency Audit
```html
<!-- Consistent Button Styles -->
<button class="btn btn--primary">Primary Action</button>
<button class="btn btn--secondary">Secondary Action</button>
<button class="btn btn--outline">Tertiary Action</button>

<!-- Consistent Card Components -->
<div class="card">
  <img class="card__image" src="..." alt="...">
  <div class="card__content">
    <h3 class="card__title">Title</h3>
    <p class="card__description">Description</p>
    <a class="card__link" href="...">Learn More</a>
  </div>
</div>
```

#### Brand Consistency Checklist
- [ ] **Color fidelity** - Brand colors used accurately
- [ ] **Typography alignment** - Fonts match brand guidelines
- [ ] **Component uniformity** - Same components look identical across pages
- [ ] **Tone consistency** - Design personality matches brand voice
- [ ] **Logo implementation** - Proper logo usage and placement
- [ ] **Cross-platform coherence** - Consistent across web, mobile, print

## Critique Output Format

### Standard Critique Template
```markdown
# Design System Critique: [Component/Page Name]

**Reviewed By**: [Reviewer Name]
**Review Date**: [Date]
**Design System Version**: [Version if applicable]
**Context**: [Web/Mobile/Print/etc.]

## Executive Summary
[2-3 sentences summarizing overall design effectiveness and main recommendations]

## Visual Hierarchy Analysis

### ✅ STRENGTHS
- Clear primary focus on [specific element]
- Effective use of size contrast in heading hierarchy
- Strategic whitespace creates good content grouping

### 🔄 OPPORTUNITIES FOR IMPROVEMENT

#### Issue: Competing Visual Elements
**Current State**: Primary CTA and secondary headline have similar visual weight
**Impact**: Users may be confused about primary action
**Recommendation**: Increase CTA size or add background color to differentiate
**Priority**: High

#### Issue: Inconsistent Heading Sizes
**Current State**: H2 and H3 elements too similar in size (20px vs 18px)
**Impact**: Weak information hierarchy, poor scannability
**Recommendation**: Increase H2 to 24px for clearer distinction
**Priority**: Medium

## Spacing & Rhythm Analysis

### ✅ STRENGTHS
- Consistent use of 8px spacing grid
- Good content grouping with related elements
- Generous whitespace prevents cramped feeling

### 🔄 OPPORTUNITIES FOR IMPROVEMENT

#### Issue: Inconsistent Section Spacing
**Current State**: Some sections have 32px margins, others have 24px
**Impact**: Disrupts visual rhythm and professional appearance
**Recommendation**: Standardize section spacing to 48px (--space-12)
**Priority**: Medium

## Color & Contrast Analysis

### ✅ STRENGTHS
- Primary brand color used strategically for key CTAs
- High contrast ratios meet WCAG AA standards
- Good restraint with accent color usage

### 🔄 OPPORTUNITIES FOR IMPROVEMENT

#### Issue: Low Contrast on Secondary Text
**Current State**: Gray text (#999999) on white background = 2.85:1
**Impact**: Difficult to read for users with visual impairments
**Recommendation**: Darken to #666666 for 4.59:1 contrast ratio
**Priority**: High

## Typography Analysis

### ✅ STRENGTHS
- Clear type hierarchy with logical size progression
- Comfortable line height (1.5) for body text
- Appropriate line lengths for readability

### 🔄 OPPORTUNITIES FOR IMPROVEMENT

#### Issue: Insufficient Headline Impact
**Current State**: H1 size (28px) not significantly larger than H2 (24px)
**Impact**: Weak page hierarchy and reduced headline effectiveness
**Recommendation**: Increase H1 to 36px for stronger visual impact
**Priority**: Medium

## Brand Consistency Analysis

### ✅ STRENGTHS
- Brand colors implemented accurately
- Typography aligns with brand guidelines
- Tone matches brand personality (professional, approachable)

### 🔄 OPPORTUNITIES FOR IMPROVEMENT

#### Issue: Button Style Variations
**Current State**: Some buttons use rounded corners, others square
**Impact**: Inconsistent brand expression across interface
**Recommendation**: Standardize button border-radius to 4px globally
**Priority**: Low

## Overall Recommendations

### High Priority Actions
1. Fix low contrast text color for accessibility compliance
2. Strengthen visual hierarchy by reducing competing elements
3. Standardize spacing system usage across all components

### Medium Priority Actions
1. Improve heading size relationships for better scannability
2. Increase primary headline impact
3. Standardize section spacing rhythm

### Low Priority Enhancements
1. Unify button styling details
2. Consider adding subtle shadows for depth
3. Explore opportunities for brand color accent usage

## Design System Health Score: 7.5/10

**Strengths**: Strong foundation with good accessibility practices and brand alignment
**Areas for Growth**: Visual hierarchy refinement and spacing consistency
**Next Steps**: Address high-priority contrast issues, then refine spacing system
```

## Advanced Critique Techniques

### Competitive Analysis Integration
```markdown
## Competitive Context
Compare design choices to industry leaders:
• [Competitor A]: Uses larger CTAs and stronger color contrast
• [Competitor B]: Better spacing consistency and clearer hierarchy
• [Industry Standard]: Baseline accessibility and usability expectations
```

### User Journey Consideration
```markdown
## User Experience Flow
Evaluate design within user context:
• **Entry Point**: Does design orient new users effectively?
• **Task Completion**: Do visual cues support user goals?
• **Error Prevention**: Are potential mistakes clearly prevented?
• **Accessibility**: Can all users complete primary tasks?
```

### Technical Implementation Notes
```markdown
## Implementation Considerations
• **Design Token Usage**: Recommend specific token values
• **Component Reusability**: Suggest modular component improvements
• **Responsive Behavior**: Note mobile-specific design needs
• **Performance Impact**: Consider visual choices on load times
```

## Quality Assurance for Critiques

### Critique Preparation Checklist
- [ ] **Context gathered** - Understand project goals and constraints
- [ ] **User research reviewed** - Consider target audience needs
- [ ] **Brand guidelines consulted** - Reference established standards
- [ ] **Accessibility tools ready** - Contrast checkers, screen readers
- [ ] **Competitive examples noted** - Industry benchmark awareness

### Critique Delivery Standards
- [ ] **Specific examples** - Point to exact elements and issues
- [ ] **Actionable recommendations** - Provide concrete next steps
- [ ] **Priority levels** - Help teams focus on important improvements
- [ ] **Positive reinforcement** - Acknowledge effective design choices
- [ ] **Implementation guidance** - Include code examples when helpful

### Follow-up Best Practices
- [ ] **Iteration review** - Check if recommendations were implemented
- [ ] **Impact assessment** - Measure improvement in user metrics
- [ ] **Documentation updates** - Update design system guidelines
- [ ] **Team learning** - Share insights with broader design team
- [ ] **Continuous improvement** - Refine critique process based on outcomes

## Version

**Design System Critique Skill v1.0.0**

*Last Updated: October 31, 2025*
