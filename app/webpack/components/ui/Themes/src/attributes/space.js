/*
 * Space
 *
 * Our theme follows a typography based grid methodology.
 *
 * Space values should be proportional to the base grid unit of this theme.
 *
 * All sizes in REM.
 *
 */
const space = [
  // baseUnit * 0 = 0rem = ~0px
  "0",
  // baseUnit * 0.125 = 0.1875rem = ~3px
  "0.1875rem",
  // baseUnit * 0.25 = 0.375rem = ~6px
  "0.375rem",
  // baseUnit * 0.5 = 0.75rem = ~12px
  "0.75rem",
  // baseUnit * 1 = 1.5rem = ~24px
  "1.5rem",
  // baseUnit * 2 = 3rem = ~48px
  "3rem",
  // baseUnit * 4 = 6rem = ~96px
  "6rem",
  // baseUnit * 8 = 12rem = ~192px
  "12rem",
  // baseUnit * 16 = 24rem = ~384px
  "24rem"
];

// Aliases
space.xxSmall = space[1];
space.xSmall = space[2];
space.small = space[3];
space.medium = space[4];
space.large = space[5];
space.xLarge = space[6];
space.xxLarge = space[7];
space.xxxLarge = space[8]; 

/*
 * Space Pixel Fallbacks
 *
 * Rarely, we will need pixel based values to fall back to in components with
 * fixed size restrictions based on pixels. This will usually be due to third
 * party constraints.
 *
 * Consider carefully whether or not you actually need these values.
 *
 */
space.pixel = [
  // baseUnit * 0 = 0rem = ~0px
  "0",
  // baseUnit * 0.125 = 0.1875rem = ~3px
  "3px",
  // baseUnit * 0.25 = 0.375rem = ~6px
  "6px",
  // baseUnit * 0.5 = 0.75rem = ~12px
  "12px",
  // baseUnit * 1 = 1.5rem = ~24px
  "24px",
  // baseUnit * 2 = 3rem = ~48px
  "48px",
  // baseUnit * 4 = 6rem = ~96px
  "96px",
  // baseUnit * 8 = 12rem = ~192px
  "192px",
  // baseUnit * 16 = 24rem = ~384px
  "384px"
];

// Pixel Fallback Aliases
space.pixel.xxSmall = space.pixel[1];
space.pixel.xSmall = space.pixel[2];
space.pixel.small = space.pixel[3];
space.pixel.medium = space.pixel[4];
space.pixel.large = space.pixel[5];
space.pixel.xLarge = space.pixel[6];
space.pixel.xxLarge = space.pixel[7];
space.pixel.xxxLarge = space.pixel[8]; 

export default space;
