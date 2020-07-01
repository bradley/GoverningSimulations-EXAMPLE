import Color from "color";

import colors from "./colors";

/*
 * Shadows
 *
 * All sizes in REM.
 *
 */
const shadows = [
  `0 0.0625rem 0.1875rem ${ Color(colors.grey500).alpha(0.12) }, 0 0.0625rem 0.125rem ${ Color(colors.grey500).alpha(0.24) }`,
  `0 0.1875rem 0.375rem ${ Color(colors.grey500).alpha(0.16) }, 0 0.1875rem 0.375rem ${ Color(colors.grey500).alpha(0.23) }`,
  `0 0.75rem 1.125rem ${ Color(colors.grey500).alpha(0.19) }, 0 0.375rem 0.375rem ${ Color(colors.grey500).alpha(0.23) }`,
  `0 0.875rem 1.75rem ${ Color(colors.grey500).alpha(0.25) }, 0 0.75rem 0.75rem ${ Color(colors.grey500).alpha(0.22) }`,
  `0 1.125rem 2.25rem ${ Color(colors.grey500).alpha(0.30) }, 0 1rem 0.75rem ${ Color(colors.grey500).alpha(0.22) }`
];

// Aliases
shadows.xSmall = shadows[0];
shadows.small = shadows[1];
shadows.medium = shadows[2];
shadows.large = shadows[3];
shadows.xLarge = shadows[4];

export default shadows;
