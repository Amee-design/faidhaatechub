# Phase 1 — Hero & Trust Bar

Prerequisite: Phase 0 approved (token plan + bug fix in place). Use the approved
token plan exactly. No new dependencies — framer-motion, lucide-react, existing
Tailwind config only.

## Hero section
Current copy (keep unless a copy tweak is proposed separately):
- Eyebrow/kicker: none currently — consider adding one (e.g. "Faidhaa Innovation Hub")
- H1: "Bridging Technology, Innovation, and Inclusive Economic Empowerment."
- Subtext: "Empowering Nigeria's youth through cutting-edge STEM education,
  creative industries, and sustainable development."
- Primary CTA: "Join Our Programs" → /join
- Secondary CTA: "Learn More" → /about
- Scroll indicator

Rebuild with:
- A real signature moment on load — pick ONE: a staggered word/line reveal on
  the H1, a subtle animated background (avoid generic particle/gradient-blob
  clichés — ground it in something concrete to the subject: a circuit/network
  pattern, a subtle grid referencing STEM, motion tied to the SDG numbers, etc.)
- Clear visual hierarchy: eyebrow → H1 → subtext → CTA pair, using the approved
  type scale
- Primary CTA visually dominant (approved accent color), secondary CTA as a
  quieter ghost/outline treatment — right now both may compete equally
- Respect `prefers-reduced-motion`
- Fully responsive: hero must not feel empty or cramped on mobile — check at
  375px width specifically

## Trust bar ("Trusted by Global Partners")
Current: UNICEF, NITDA, WHO, UNIDO, UNFPA, Federal Ministry of Education,
Google, Microsoft — logos appear to already loop/duplicate.

Rebuild as a clean infinite marquee using framer-motion (translateX loop,
pause on hover, no dependency needed beyond what's installed):
- Logos in grayscale by default, full color on hover (signals credibility
  without shouting)
- Consistent logo sizing/vertical alignment regardless of each partner's
  original logo aspect ratio
- Smooth, slow, continuous scroll — not the AOS fade-in style used elsewhere,
  this should feel ambient/passive

## Deliverable for this phase
Hero + trust bar rebuilt and responsive. Show me before Phase 2.
