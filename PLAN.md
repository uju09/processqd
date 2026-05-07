# Responsive & Mobile-First Refactor Plan

## Context

The ProcessQ Dynamics React website (Vite + Tailwind v4 + Framer Motion) has partial responsive coverage — most components have `md:` breakpoints but lack mobile-first design thinking. Key gaps:

- **Hero carousel** — Fixed heights, oversized controls, no touch optimization
- **MainNav** — Overlay drawer exists but may have edge cases; CTA button sizing
- **Footer** — 5-column grid collapses unevenly
- **Service.jsx sidebar** — Sticky on desktop, needs mobile accordion/drawer
- **KeyBrands** — Logo grid not fully responsive (9 logos)
- **All page components** — Need mobile padding, text sizing, stack-vs-grid review
- **Legal pages** — Not yet explored, likely need responsive treatment
- **No custom responsive utilities** — Repeated patterns scattered inline
- **No `xl`/`2xl` breakpoints** — Footer and brand section may need larger targets

---

## Phase 1: CSS Infrastructure (do first — no code changes, just utilities)

**File:** `src/index.css`

Add responsive utilities and container max-widths:

```css
/* Container utilities */
@utility container-responsive {
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}
@media (min-width: 640px) { .container-responsive { padding-left: 1.5rem; padding-right: 1.5rem; } }
@media (min-width: 1024px) { .container-responsive { padding-left: 2rem; padding-right: 2rem; } }

/* Touch targets */
@utility touch-target { min-height: 44px; min-width: 44px; }
```

**Agent:** 1 CSS Setup — define responsive utilities in `index.css`

---

## Phase 2: Layout Shell (Navigation + Footer + TopBar)

These are consistent across all pages — fix them once, benefits everywhere.

### Agent 2: MainNav.jsx
- Audit current hamburger/overlay behavior on all viewport widths
- Ensure overlay drawer is full-height, scrollable, and closes on route change
- Mobile menu items: proper touch targets (44px min), adequate spacing
- Logo sizing: smaller on mobile, full on desktop
- CTA button: full-width on mobile, auto on desktop
- Sticky behavior: already sticky, verify z-index doesn't conflict with overlays
- Test: hamburger opens/closes, links navigate, overlay doesn't clip

### Agent 3: Footer.jsx
- Current: `grid-cols-1 md:grid-cols-2 lg:grid-cols-5`
- Mobile: stack all 5 sections vertically, each full-width
- Social links: adequate touch targets on mobile
- Logo + tagline: centered on mobile
- Scroll-to-top button: larger touch target (44px), visible earlier on scroll
- Legal links (Terms, Privacy, Cookies, GDPR, SLA): wrap properly on narrow screens
- Bottom bar: stack copyright + company name on mobile

### Agent 4: TopBar.jsx
- Already mostly responsive (stacks on `sm:`)
- Verify no horizontal overflow on 320px viewport
- Ensure email/phone links don't break on very narrow screens

---

## Phase 3: Hero + Carousel

### Agent 5: Hero.jsx
- Height: current `h-[70vh] md:h-[60vh]` — on very small screens try `h-[60vh] sm:h-[70vh]`
- Text scaling: hero headline and body text should scale down on mobile (`text-2xl md:text-4xl lg:text-5xl`)
- Carousel dots: larger touch targets (12px min), adequate spacing between dots
- Navigation arrows: larger on mobile (`w-10 h-10 md:w-12 md:h-12`), better positioning
- Floating decorations: hide or shrink on mobile (performance + layout)
- Content centering: ensure text doesn't overflow on small screens

### Agent 6: FeaturedIndustries.jsx
- Carousel: keep carousel on mobile (don't force grid)
- Controls: same `touch-target` treatment as Hero arrows
- Cards: single-column on mobile, 2-col on `md:`, 4-col on `lg:`
- Card images: aspect ratio preserved, `object-cover`
- Card text: smaller headline on mobile, adequate padding

---

## Phase 4: Card Grid Sections

### Agent 7: HighlightCards.jsx
- Current: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` — works well
- Cards: full-width on mobile, adequate gap between
- Hover parallax: disable or reduce on mobile (performance)
- Card content: text truncation for long titles, icon sizing
- Card links: full card is clickable — verify on mobile

### Agent 8: KeyBrands.jsx
- Large brand cards: already `flex-col md:flex-row` — verify mobile image sizing
- Small logo grid: current `grid-cols-1 sm:grid-cols-2 md:grid-cols-3` — show all 9 logos
  - On `lg:` try 3-4 columns, on `xl:` try 4-5 columns
- Logo sizing: consistent aspect ratio, adequate spacing on mobile
- Section heading: scale down on mobile

---

## Phase 5: Page Components

### Agent 9: About.jsx
- Hero: match Home hero treatment (text scaling, height)
- Stats row (5 columns): on mobile stack 2+2+1 or scroll horizontally
  - Test both — horizontal scroll with snap may feel native
- Two-column layouts (image + text): stack on mobile, side-by-side on `md:`
- Value grid: single column on mobile, 2-col on `md:`
- CTA section: full-width button on mobile

### Agent 10: Services.jsx
- Service card grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` — works well
- "Why Choose Us" image grid (2x2): on mobile either stack or show as 2x2 compact
- Section headings: mobile text sizing
- Adequate section spacing (padding) on mobile

### Agent 11: Service.jsx (Dynamic detail page)
- **Critical:** Sidebar navigation — sticky on desktop (`sticky top-6`)
- Mobile: convert to horizontal scrolling accordion OR collapsible drawer at top
- Content area: full-width on mobile, proper text line-length on desktop
- Breadcrumb: hide or simplify on mobile
- CTA buttons: full-width on mobile
- Service image: full-width with proper aspect ratio

### Agent 12: Contact.jsx
- Form + sidebar: currently `flex-col lg:flex-row` — good mobile-first
- Form fields: full-width on mobile, adequate gap between fields
- Submit button: full-width on mobile
- Sidebar info: stack above or below form on mobile (configurable)
- Regional offices grid: single column on mobile, 2-col on `md:`
- Map/contact info: responsive sizing

---

## Phase 6: Legal Pages + Widgets

### Agent 13: Legal Pages (Terms.jsx, Cookies.jsx, GDPR.jsx, SLA.jsx, Compliance.jsx)
- Read each file to identify layout patterns
- Common pattern likely: centered content column, no complex layout
- Key concern: no horizontal overflow, readable line-length on all screens
- Section headings: mobile text sizing
- Content tables/lists: scroll horizontally if needed on mobile

### Agent 14: CarouselControls.jsx + SearchBar.jsx
- CarouselControls: ensure button sizing (44px touch targets)
- SearchBar: full-width on mobile, proper input height
- No other widgets found requiring responsive treatment

---

## Phase 7: Integration + Verification

**Agent 15: Integration & QA**
- Build verification after each phase (run `npm run build`)
- Final: test on 320px, 375px, 768px, 1024px, 1280px viewports
- Verify no horizontal overflow on any page
- Verify all navigation links work (run dev server, test clicks)
- Verify touch targets meet 44px minimum on interactive elements
- Test carousel interactions on touch devices (swipe support if possible)
- Check for performance: no heavy animations on mobile, images lazy-loaded

---

## Agent Assignment Summary

| Agent | Scope | Files | Priority |
|-------|-------|-------|----------|
| 1 | CSS utilities | `src/index.css` | Phase 1 |
| 2 | MainNav | `src/components/layout/MainNav.jsx` | Phase 2 |
| 3 | Footer | `src/components/layout/Footer.jsx` | Phase 2 |
| 4 | TopBar | `src/components/layout/TopBar.jsx` | Phase 2 |
| 5 | Hero | `src/components/sections/Hero.jsx` | Phase 3 |
| 6 | FeaturedIndustries | `src/components/sections/FeaturedIndustries.jsx` | Phase 3 |
| 7 | HighlightCards | `src/components/sections/HighlightCards.jsx` | Phase 4 |
| 8 | KeyBrands | `src/components/sections/KeyBrands.jsx` | Phase 4 |
| 9 | About | `src/pages/About.jsx` | Phase 5 |
| 10 | Services | `src/pages/Services.jsx` | Phase 5 |
| 11 | Service (detail) | `src/pages/Service.jsx` | Phase 5 |
| 12 | Contact | `src/pages/Contact.jsx` | Phase 5 |
| 13 | Legal pages | `src/pages/{Terms,Cookies,GDPR,SLA,Compliance}.jsx` | Phase 6 |
| 14 | Widgets | `src/components/widgets/{CarouselControls,SearchBar}.jsx` | Phase 6 |
| 15 | Integration QA | All files | Phase 7 |

**Execution order:** Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6 → Phase 7
**Within each phase:** agents can run in parallel.
**Total:** 15 agents across 7 phases.
