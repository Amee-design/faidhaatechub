# Phase 2 — "Why We Exist" & Core Competencies

Prerequisite: Phases 0-1 approved. Same constraints: no new dependencies.

## "Why We Exist" section
Current copy:
- Eyebrow: "Why We Exist"
- H2: "The Intersection of STEM & Inclusion"
- Body: "At Faidhaa Innovation Hub, we believe technology is the great
  equalizer. We are bridging the gap for women, people with disabilities,
  and underserved youth in Northern Nigeria."
- Body 2: "From 3D animation to data science, we provide the tools,
  mentorship, and platform to turn potential into impact."
- CTA: "Read Our Story" → /about
- Two supporting labels currently float unattached: "Future Skills" and
  "Real Impact" — these read like orphaned tags right now.

Rebuild direction:
- Give "Future Skills" and "Real Impact" an actual visual job — e.g. as two
  small supporting stat/proof-point cards beside the body copy, each with a
  one-line concrete detail, not just floating labels
- Consider a real photo or illustration here if usable assets exist — this
  section is the emotional core of the page (equity/inclusion mission) and is
  currently text-only; check the `/public` folder for unused imagery before
  building anything new
- Scroll-triggered reveal on entry (framer-motion `whileInView`), consistent
  with the motion principle from Phase 0 — not AOS

## Core Competencies section
Current 4 cards:
1. ICT & STEM Academy — "Comprehensive training in Coding, Data Science, and
   Hardware." → Explore Academy → /services
2. Creative Studio — "2D/3D Animation & Visual Storytelling." → View Gallery
   → /services
3. ICT4D & Advocacy — "Technology for social good." (no CTA currently)
4. Inclusion First — "Empowering women & PWDs." (no CTA currently)

Rebuild direction:
- Consistent card treatment across all four — right now 2 have CTAs and 2
  don't, which reads as unfinished. Either give all four a CTA/link target
  (check `/services` for anchor sections to link to) or intentionally
  differentiate the two without CTAs as "focus areas" vs. two "programs,"
  with a visual distinction that makes that difference legible
- Icon or small illustrative element per card, using lucide-react (already
  installed) — pick icons that are specific to each competency, not generic
  placeholders
- Consistent hover state across all four cards (subtle lift + border/accent
  treatment using the approved accent color)
- Grid: 2x2 on tablet, 4-across on desktop, single column on mobile

## Deliverable for this phase
Both sections rebuilt, consistent, responsive. Show me before Phase 3.
