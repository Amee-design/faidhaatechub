# Phase 0 — Audit, Bugs, and Design Token Refinement

## Context
Faidhaa Innovation Hub (faidhaatechub.com) is a Nigerian tech/STEM inclusion hub —
partners include UNICEF, NITDA, WHO, UNIDO, UNFPA, Federal Ministry of Education,
Google, Microsoft. Audience: youth (esp. women, PWDs, underserved communities in
Northern Nigeria), institutional partners/funders, and prospective program applicants.

Stack: Next.js 14 (app router), Tailwind CSS 3.4.17, framer-motion, lucide-react,
react-icons, aos, chart.js. No shadcn/ui, no CSS-variable theming — do NOT introduce
either. Build everything as plain React components styled with existing `fih-*`
Tailwind tokens and framer-motion. No new UI library dependencies in this project.

## Step 1: Fix the confirmed bug first
The homepage impact stats section currently renders "0+" for all four stats
(Youth Trained, Startups Incubated, Partnerships, States Reached) instead of the
real numbers. Find the counter/animation logic (likely an IntersectionObserver +
useState counter, or an AOS-triggered animation that never fires) and fix it so
real values display and count up correctly on scroll into view. Confirm the fix
by checking the rendered value in the browser, not just the code.

## Step 2: Audit current design
Read through the current homepage and its child components. For each section
(hero, trust bar, "Why We Exist", Core Competencies, Impact Stats, SDG grid,
footer), note in a short list:
- what's generic/templated vs. what's distinctive
- any spacing/hierarchy inconsistencies
- any places motion is missing where it would help, or overused where it
  feels like noise

## Step 3: Refine (don't replace) the token system
Current tokens in `tailwind.config.js`:
- Colors: `fih-hub-blue` #00AEEF, `fih-deep-black` #1A1A1A, `fih-impact-teal`
  #008080, `fih-inclusive-white` #FFFFFF, `fih-breathable-gray` #F8F9FA,
  `fih-action-gold` #FFD700, plus black/white/silver/charcoal
- Fonts: sans = Noto Sans, heading = Montserrat/Inter, display = Oswald

Propose (as a short written plan, not code yet):
1. A clear usage rule for each color — which is primary, which is the single
   accent used sparingly, which are backgrounds only. Right now gold+teal+blue
   all present as "accent," which competes. Pick ONE hero accent color and
   demote the others to specific supporting roles (e.g. teal for SDG/impact
   context only, gold for a single CTA-adjacent highlight, never both on the
   same section).
2. A type scale: exact sizes/weights for H1, H2, H3, body, caption, using
   Oswald (display) + Montserrat (heading) + Noto Sans (body) — confirm this
   3-font pairing is intentional and not competing; if two of the three look
   redundant in practice, say so and propose collapsing to 2.
3. A motion principle: one signature motion moment for the page (e.g. the
   hero load sequence), and a restrained default (fade+slide, ~400-500ms)
   for everything else. No competing animation libraries doing the same job —
   confirm whether `aos` should be retired in favor of framer-motion's
   `whileInView`, since running both is redundant.

## Deliverable for this phase
Do NOT touch visual code yet beyond the counter bug fix. Output:
1. The counter bug fix, verified working.
2. The audit notes (Step 2).
3. The refined token plan (Step 3), written out for approval.

Stop here and show me the plan before moving to Phase 1.
