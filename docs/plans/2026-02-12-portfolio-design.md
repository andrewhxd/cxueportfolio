# Cindy Xue — Personal Portfolio Website Design

## Overview

A single-page scrolling portfolio website for Cindy Xue, a UC Berkeley student double-majoring in Business Administration (Haas) and Statistics. The site serves both as a professional showcase for recruiters and a personal brand piece that reflects her personality.

**Design direction:** Warm and illustrated — pastel gradients, rounded organic shapes, wavy dividers, and a journal-like feel. Colorful and fun, never corporate.

**Color palette:** Pastel blues, purples, lavenders, and periwinkle. Warm white/cream backgrounds. Soft shadows throughout.

**Typography:**
- Headings: Warm serif (DM Serif Display or Playfair Display)
- Body: Clean sans-serif (Inter or DM Sans)

**Tech stack:** Next.js with Framer Motion for scroll-triggered animations, CSS keyframe animations for gradients, and the frontend-design skill used during build.

---

## Section 1: Hero / Landing

Full-viewport hero that sets the tone immediately.

**Background:** A slowly moving gradient that shifts between soft lavender, light periwinkle, and pale sky blue — animated with CSS keyframes so it feels alive and dreamy.

**Content (centered):**
- "Cindy Xue" in large warm serif font
- One-line tagline underneath in clean sans-serif (e.g., "Business & Statistics at UC Berkeley")
- Subtle scroll indicator at the bottom (soft bouncing chevron or "scroll to explore")

**Decorative elements:** 2-3 soft organic blob shapes in translucent pastel purple and blue, slowly drifting with a parallax-like effect on scroll. These blobs recur throughout the site as a visual motif.

**Navigation:** No navbar visible on landing. It fades in as the user begins scrolling — sticky header with a frosted glass effect.

---

## Section 2: About Me

Background gradient subtly shifts to a warmer lavender tone. Content reveals with a fade-up animation on scroll.

**Layout (two-column):**
- Left: Rounded photo of Cindy with a soft pastel purple border and subtle drop shadow. Frame is slightly rotated (2-3 degrees), straightens on hover.
- Right: Short personal bio (3-4 sentences). First person, conversational tone — blending Haas + Stats identity with personality (figure skating, folk dance). Not resume language.

**Below the bio:** A row of pill-shaped skill tags (Excel, Python, Tableau, Figma, etc.) in alternating pastel blue and purple backgrounds with white text. Pills stagger in one by one as the section scrolls into view.

**Section divider:** Wavy SVG divider in a soft gradient. This wavy divider pattern repeats between every section with slightly different wave shapes.

---

## Section 3: Experience

Vertical timeline running down the center of the page. Roles displayed as cards alternating left and right of the timeline — zigzag reading pattern.

**Each card contains:**
- Company name and logo (small, rounded) at top
- Role title and date range
- 1-2 curated bullet highlights (most impactful only)
- Subtle pastel background — alternating light blue and light lavender

**Timeline:** Thin vertical line in a soft purple gradient. At each node, a small filled circle that pulses gently when that card is in view.

**Animations:** Cards slide in from their respective side (left from left, right from right) via Framer Motion viewport-triggered animations. Each card has rounded corners, soft box shadow, and slight scale-up on hover.

**Order (most recent first):**
1. Ernst & Young — Incoming Audit & Assurance Intern
2. PATH — Project Manager (Data & Compliance Strategy)
3. Microsoft Copilot — Brand Ambassador
4. Vermilion Rock Advisors — Investment Banking Summer Analyst
5. Bill & Melinda Gates Foundation — Strategy Consultant
6. GearChain AI — Business Development Intern
7. AC Transit — Strategy Consultant

**Mobile:** Timeline collapses to single column, cards stacking vertically with timeline along the left edge.

---

## Section 4: Projects

The most visually prominent section — where Cindy's work comes alive beyond bullet points.

**Layout:** Horizontal-scroll carousel within the vertical page. As the user scrolls down, the section "locks" briefly and cards scroll horizontally, then releases back to vertical scrolling once all cards are seen.

**Each project card (~70% viewport width):**
- Project title in warm serif font
- Organization name and timeframe as subtle subtitle
- 2-3 sentence narrative description (story format: problem, action, impact — not bullets)
- Pastel gradient accent bar along the top (unique color variation per card)
- Icon or simple illustration representing the domain

**Featured projects (3-4):**
1. **Gates Foundation** — Financial modeling for vaccine funding structures
2. **AC Transit** — Scope 3 emissions model for 2,100+ employee commutes
3. **PATH** — Cross-market data compliance strategy across 25+ markets
4. **Vermilion Rock** — M&A deal sourcing driving $150M+ in deal flow

**Interactions:** Cards cast soft shadows with a subtle parallax tilt effect on hover (Framer Motion). Organic blob shapes from the hero drift in the background between cards.

---

## Section 5: Leadership & Involvement

Lighter, more playful energy — about community, not corporate work.

**Layout:** Masonry-style grid of cards in varying sizes, like a scrapbook or mood board. Loosely arranged — some taller, some wider — for visual variety.

**Cards:**
- **Global Research and Consulting** (External VP) — larger card, emphasizing scale (1400+ applicants, managing multiple teams)
- **Haas BSA** (Corporate Relations Lead) — medium card, highlighting 30% YoY growth and event facilitation
- **Honors & Awards** — cluster of smaller cards: National Merit Finalist, Figure Skating Gold Award, Haas "Beyond Yourself" Award

**Styling:** Soft cream/warm white background (not pure white). Pastel blue and purple borders on the left edge. Cards fade and float up in a staggered cascade on scroll.

**Personal touches:** 1-2 interest cards styled differently (dashed border or different shape) — one for figure skating, one for folk dance. Adds warmth and personality.

**Background:** Very faint dotted or grid pattern — like journal paper — reinforcing the scrapbook feel.

---

## Section 6: Contact / Footer

Simple and warm — a lasting impression without overstaying.

**Background:** Moving gradient returns from the hero, creating a visual bookend. Slightly deeper/more saturated purple and blue, signaling the end of the journey.

**Content (centered):**
- Sign-off line in serif font: "Let's connect" or "Say hello"
- Three icon links in a row — Email, LinkedIn, Phone — each inside a soft frosted-glass circle. On hover, circles scale up and glow with pastel purple shadow.
- Icons use simple line-art style for consistency with the illustrated feel.

**Footer line:** Small, understated — "Built with care by Cindy Xue" in lighter font weight. Nothing more.

**Decorative:** Organic blob shapes from throughout the site converge at the bottom, slightly overlapping section edges. Subtle fade-to-white at the very bottom for a gentle page ending.

---

## Recurring Visual Elements

| Element | Usage |
|---|---|
| Moving pastel gradient | Hero background, contact/footer background |
| Organic blob shapes | Hero, projects background, contact convergence |
| Wavy SVG dividers | Between every section (varied wave shapes) |
| Frosted glass | Sticky navbar, contact icon circles |
| Rounded corners | All cards, photo frames, skill pills |
| Soft box shadows | Cards, photos, interactive elements |
| Staggered fade-up animations | All sections on scroll entry |

## Animations Summary

| Animation | Library | Trigger |
|---|---|---|
| Moving gradient background | CSS @keyframes | Continuous |
| Blob drift / parallax | Framer Motion | Scroll position |
| Navbar fade-in | Framer Motion | Scroll past hero |
| Section content fade-up | Framer Motion (whileInView) | Viewport entry |
| Skill pills stagger-in | Framer Motion (staggerChildren) | Viewport entry |
| Timeline cards slide-in | Framer Motion (whileInView) | Viewport entry |
| Timeline node pulse | CSS @keyframes | When card is in view |
| Horizontal scroll lock (projects) | Framer Motion / scroll events | Section entry |
| Project card tilt on hover | Framer Motion | Mouse hover |
| Masonry cards cascade | Framer Motion (staggerChildren) | Viewport entry |
| Contact icons glow on hover | CSS transitions | Mouse hover |

## Implementation Notes

- Use the **frontend-design skill** during build for all component creation
- **Next.js** app router with a single page (`app/page.tsx`)
- **Framer Motion** for all scroll-triggered and interaction animations
- Responsive design: mobile-first, with timeline and masonry collapsing gracefully
- All content hardcoded (no CMS) — this is a static portfolio
- Deploy target: Vercel (natural fit for Next.js)
