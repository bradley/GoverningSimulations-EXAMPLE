/*
 * Heights
 *
 * Our theme follows a typography based grid methodology.
 *
 * heights values should be proportional to the base grid unit of this theme.
 *
 * All sizes in REM.
 *
 */
const heights = [
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
heights.xxSmall = heights[1];
heights.xSmall = heights[2];
heights.small = heights[3];
heights.medium = heights[4];
heights.large = heights[5];
heights.xLarge = heights[6];
heights.xxLarge = heights[7];
heights.xxxLarge = heights[8]; 

/*
 * Heights Pixel Fallbacks
 *
 * Rarely, we will need pixel based values to fall back to in components with
 * fixed size restrictions based on pixels. This will usually be due to third
 * party constraints.
 *
 * Consider carefully whether or not you actually need these values.
 *
 */
heights.pixel = [
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
heights.pixel.xxSmall = heights.pixel[1];
heights.pixel.xSmall = heights.pixel[2];
heights.pixel.small = heights.pixel[3];
heights.pixel.medium = heights.pixel[4];
heights.pixel.large = heights.pixel[5];
heights.pixel.xLarge = heights.pixel[6];
heights.pixel.xxLarge = heights.pixel[7];
heights.pixel.xxxLarge = heights.pixel[8]; 

export default heights;
