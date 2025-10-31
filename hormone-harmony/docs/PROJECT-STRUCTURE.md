# Hormone Harmony - Project Structure

## Overview

This is a React + Vite B2C website for Hormone Harmony, built with a token-based design system and deployed on Netlify.

## Directory Structure

```
hormone-harmony/
├── .github/                    # GitHub Actions and workflows
├── docs/                       # 📚 Project documentation
│   ├── design-tokens-validation.md
│   └── PROJECT-STRUCTURE.md
├── node_modules/               # Dependencies (gitignored)
├── original materials/         # 📋 Source documentation & planning
│   ├── B2C Hormone Harmony Site Initial Documentation/
│   │   ├── 1. Strategy and positioning.md
│   │   ├── 2. information-architecture.md
│   │   ├── 3. homepage-content-wireframe.md
│   │   ├── 4. research-agent-brief.md
│   │   ├── 5. multi-agent-workflow.md
│   │   ├── 6. qa-launch-checklists.md
│   │   ├── Agent 0 - Research Report.md
│   │   ├── Agent 1 - Review & Coordination.md
│   │   └── Agent 4 - QA Report - Design System.md
│   ├── B2B old/               # Reference from previous B2B site
│   └── skill development documentation/
│       └── css-design-system-builder/
├── photos/                     # 📸 Image assets
├── public/                     # Static assets served directly
│   └── favicon.ico
├── scripts/                    # Build and utility scripts
├── src/                        # ⚛️ React application source
│   ├── components/            # Reusable React components
│   ├── pages/                 # Page-level components
│   ├── hooks/                 # Custom React hooks
│   ├── utils/                 # Utility functions
│   ├── App.jsx                # Root application component
│   └── main.jsx               # Application entry point
├── styles/                     # 🎨 Global styles and design system
│   ├── design-tokens.css      # Complete design token system
│   ├── components.css         # Component-specific styles
│   └── tokens.css             # Legacy tokens (to be consolidated)
├── .gitignore                  # Git ignore rules
├── design-system-test.html     # Design system testing page
├── eslint.config.js            # ESLint configuration
├── index.html                  # HTML entry point
├── netlify.toml                # Netlify deployment config
├── package.json                # Dependencies and scripts
├── package-lock.json           # Locked dependency versions
├── postcss.config.js           # PostCSS configuration
├── README.md                   # Project readme
├── tailwind.config.cjs         # Tailwind CSS configuration
└── vite.config.js              # Vite build configuration
```

## Key Directories Explained

### `/docs` - Documentation
- **Purpose:** All project documentation, architecture decisions, validation reports
- **Best Practice:** Keep technical docs here (not in root)
- **Contents:** Design system validation, project structure, API docs, deployment guides

### `/original materials` - Source Materials
- **Purpose:** Reference materials, planning docs, research reports
- **Best Practice:** Keep original requirements and planning here
- **Note:** Not for production code - reference only

### `/src` - Application Source
- **Purpose:** All React application code
- **Structure:**
  - `components/` - Reusable UI components
  - `pages/` - Route-level page components
  - `hooks/` - Custom React hooks for shared logic
  - `utils/` - Pure utility functions
  - `main.jsx` - App bootstrap
  - `App.jsx` - Root component with routing

### `/styles` - Design System
- **Purpose:** Global CSS, design tokens, component styles
- **Key Files:**
  - `design-tokens.css` - **PRIMARY** token system (WCAG AA compliant)
  - `components.css` - Component-specific styles
  - `tokens.css` - Legacy (consider consolidating into design-tokens.css)

### `/public` - Static Assets
- **Purpose:** Files served directly without processing
- **Contents:** favicon, robots.txt, manifest.json, static images
- **Note:** Files here are copied as-is to dist/

### `/photos` - Image Assets
- **Purpose:** Photo library for content
- **Best Practice:** Optimize images before adding
- **Consider:** Moving processed images to public/ or src/assets/

## Configuration Files

### Build & Development
- **vite.config.js** - Vite bundler configuration
- **package.json** - Dependencies, scripts, project metadata
- **postcss.config.js** - PostCSS plugins (Tailwind, Autoprefixer)
- **tailwind.config.cjs** - Tailwind CSS customization

### Code Quality
- **eslint.config.js** - Linting rules for code consistency

### Deployment
- **netlify.toml** - Netlify build and deployment settings
- **.github/** - CI/CD workflows (if using GitHub Actions)

### Version Control
- **.gitignore** - Files/folders excluded from git

## Design System Architecture

### Token-Based System
1. **design-tokens.css** - Single source of truth for all design values
2. **Components** - Reference tokens via CSS custom properties
3. **No hardcoded values** - All colors, spacing, typography use tokens

### Token Categories
- Colors (primary, secondary, accent, neutrals, semantic)
- Typography (fonts, sizes, weights, line heights)
- Spacing (4px base scale)
- Border radius, shadows, transitions
- Z-index, breakpoints, container widths

### WCAG AA Compliance
- All text/background combinations validated
- Focus indicators meet 3:1 contrast
- Documentation in `/docs/design-tokens-validation.md`

## npm Scripts

```json
{
  "dev": "vite",                    // Start development server
  "build": "vite build",            // Build for production
  "preview": "vite preview",        // Preview production build
  "lint": "eslint .",               // Run linter
}
```

## Technology Stack

- **Framework:** React 18+
- **Build Tool:** Vite
- **Styling:** CSS Modules + Design Tokens (+ Tailwind)
- **Deployment:** Netlify
- **Fonts:** Outfit (headings), Inter (body)

## Best Practices Implemented

### ✅ File Organization
- Clear separation of concerns (src, styles, docs, public)
- Documentation in dedicated `/docs` folder
- Original planning materials preserved in `/original materials`

### ✅ Design System
- Token-based architecture (no hardcoded values)
- WCAG AA accessibility compliance
- Semantic naming conventions
- Mobile-first responsive design

### ✅ Code Quality
- ESLint configuration for consistency
- Modern React patterns (hooks, functional components)
- Vite for fast development and optimized builds

### ✅ Deployment
- Netlify configuration included
- Production-ready build process
- Optimized asset handling

## Recommendations for Improvement

### Consolidate Styles
- **Action:** Merge `tokens.css` into `design-tokens.css`
- **Reason:** Single source of truth prevents conflicts
- **Priority:** Medium

### Organize Images
- **Action:** Create `src/assets/images/` for processed images
- **Keep `/photos`** for raw/source images
- **Process & optimize:** Move optimized versions to assets
- **Priority:** Low

### Add Documentation
- **API Documentation:** Document component props and APIs
- **Contributing Guide:** How to add new components/pages
- **Deployment Guide:** Step-by-step deployment instructions
- **Priority:** Medium

### Component Library
- **Action:** Build out component library using design tokens
- **Document:** Create component documentation/Storybook
- **Priority:** High

### Testing
- **Add:** Unit tests (Vitest) and E2E tests (Playwright)
- **Coverage:** Aim for 80%+ critical path coverage
- **Priority:** High

## File Naming Conventions

### React Components
- **PascalCase:** `MyComponent.jsx`
- **Example:** `Button.jsx`, `HomePage.jsx`, `UserProfile.jsx`

### CSS Files
- **kebab-case:** `my-styles.css`
- **Example:** `design-tokens.css`, `button-styles.css`

### Utilities & Hooks
- **camelCase:** `useMyHook.js`, `formatDate.js`
- **Example:** `useAuth.js`, `formatCurrency.js`

### Documentation
- **UPPERCASE or Title Case:** `README.md`, `PROJECT-STRUCTURE.md`

## Git Workflow

### Branch Naming
- **Feature:** `feature/button-component`
- **Fix:** `fix/header-alignment`
- **Docs:** `docs/update-readme`

### Commit Messages
- Use conventional commits: `feat:`, `fix:`, `docs:`, `style:`, etc.
- Example: `feat: add design token system`

## Getting Started for New Developers

1. **Clone repo**
   ```bash
   git clone [repo-url]
   cd hormone-harmony
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development**
   ```bash
   npm run dev
   ```

4. **Read documentation**
   - Start with this file
   - Review `/original materials/B2C Hormone Harmony Site Initial Documentation/`
   - Check design system: `/docs/design-tokens-validation.md`

5. **Build components**
   - Use design tokens from `styles/design-tokens.css`
   - Follow WCAG AA guidelines
   - Reference `design-system-test.html` for examples

## Questions?

Refer to documentation in `/docs` or review original materials in `/original materials`.

For design decisions, see:
- Strategy: `original materials/.../1. Strategy and positioning.md`
- Architecture: `original materials/.../2. information-architecture.md`
- Design System: `docs/design-tokens-validation.md`
