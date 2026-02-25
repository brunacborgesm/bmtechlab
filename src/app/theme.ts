/**
 * BM Tech Lab — Design Tokens
 * 
 * Single source of truth for all colors used in the bmtechlab page.
 * Import `bmlab` wherever you need a color value in style props.
 * 
 * For Tailwind classes, use the CSS custom properties defined in globals.css:
 *   --bmlab-dark, --bmlab-sage, --bmlab-light, --bmlab-stroke, --bmlab-fill
 */

export const bmlab = {
  show: "#0e0e0ea8",
  /** #0e0e0e — Near-black. Headings on light bg, buttons, strong text */
  dark: "#0e0e0e",

  /** #8a9a86 — Sage green. Accents, icons, secondary text, nav links */
  sage: "#8a9a86",

  /** #e7e7e7 — Light gray. Text on dark sections (footer, services cards) */
  light: "#e7e7e7",

  /** #949693 — Neutral gray. H1 text-stroke outline */
  stroke: "#949693",

  /** #ececec — Pale gray. Fill for highlighted outline text ("Digital") */
  fill: "#ececec",
} as const;
