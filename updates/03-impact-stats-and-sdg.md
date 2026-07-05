# Phase 3 — Impact Stats & SDG Grid

Prerequisite: Phases 0-2 approved. The counter bug should already be fixed in
Phase 0 — this phase is about the visual/motion treatment, not the data.

## Impact stats
Four stats: Youth Trained, Startups Incubated, Partnerships, States Reached.

Rebuild direction:
- Big number as the clear focal point, label small and secondary — confirm
  current sizing actually achieves this hierarchy
- Count-up animation on scroll into view (framer-motion + a simple counter
  hook — no new dependency needed), triggering once, not on every scroll
  in/out
- Consider a subtle connecting visual (a thin divider, a shared background
  treatment) so these read as one unified stat bar rather than four
  disconnected boxes
- This is a credibility section for funders/partners — treat it with
  restraint, not decoration. No confetti-style effects.

## SDG grid
Seven SDGs currently listed with number + title + one-line description:
4 (Quality Education), 5 (Gender Equality), 8 (Decent Work), 9 (Industry/
Innovation), 10 (Reduced Inequalities), 13 (Climate Action), 17 (Partnerships).

Rebuild direction:
- This is a real, meaningful sequence (official UN SDG numbers) — numbering
  here is earned, keep it, but make sure the numbers read as "SDG 4" etc.
  clearly rather than ambiguous standalone digits
- Use the UN's official SDG color for each goal number as a small accent per
  card (these are internationally recognized and instantly signal legitimacy
  to institutional partners — do not substitute the site's own accent colors
  here, keep them true to the SDG brand colors)
- Consistent card sizing in a responsive grid: 7 items — plan the grid so the
  last row doesn't awkwardly orphan 1 item (e.g. 4+3, or a featured
  first/last item, rather than 3+3+1)
- Subtle hover state revealing the one-line description if not always visible,
  or keep description always visible if space allows — decide based on
  final card size, don't cram

## Deliverable for this phase
Both sections rebuilt, using real SDG brand colors, responsive grid resolved.
This is the last planned phase — after this, do a full-page pass: check
spacing consistency section-to-section, confirm one consistent motion feel
throughout, and test at 375px, 768px, and 1440px widths.
