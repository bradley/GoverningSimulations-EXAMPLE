/*
 * Radii
 *
 * All sizes in REM.
 *
 */
const radii = [
  // 0rem = 0px
  "0",
  // 0.125rem = ~2px
  "0.125rem",
  // 0.25rem = ~4px
  "0.25rem",
  // 0.5rem = ~8px
  "0.5rem",
  // 1rem = ~16px
  "1rem"
];

// Aliases
radii.small = radii[1];
radii.medium = radii[2];
radii.large = radii[3];
radii.xLarge = radii[4];

radii.circle = "100%";
radii.pill = "9999px";

export default radii;
