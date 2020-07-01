/*
 * Line Heights
 *
 * Our theme follows a typography based grid methodology.
 *
 * Line heights should be proportional to font sizes. The copy line height is
 * used as the base grid unit in this theme.
 *
 * Consider the base grid unit relative to your font and font size when making
 * changes here.
 *
 * All sizes in REM.
 *
 */
const lineHeights = [
  // fontSizes.small * 1.3846153846 = 1.125rem = ~18px
  "1.125rem",
  // fontSizes.medium * 1.5 = 1.5rem = ~24px
  "1.3125rem",
  // fontSizes.large * 1.5 = 1.875rem = ~30px
  "1.875rem",
  // fontSizes.xLarge * 1.5 = 2.25rem = ~36px
  "2.25rem",

  // Keep the line height smaller for the larger fonts.

  // fontSizes.xxLarge * 1.333333333333 = 2.25rem = ~48px
  "3rem",
  // fontSizes.xxxLarge * 1.333333333333 = 2.25rem = ~64px
  "4rem"
];

// Aliases
lineHeights.copy = lineHeights[1];

lineHeights.small = lineHeights[0];
lineHeights.medium = lineHeights[1];
lineHeights.large = lineHeights[2];
lineHeights.xLarge = lineHeights[3];
lineHeights.xxLarge = lineHeights[4];
lineHeights.xxxLarge = lineHeights[5];


/*
 * Line Height Pixel Fallbacks
 *
 * Rarely, we will need pixel based values to fall back to in components with
 * fixed size restrictions based on pixels. This will usually be due to third
 * party constraints.
 *
 * Consider carefully whether or not you actually need these values.
 *
 */
lineHeights.pixel = [
  // fontSizes.small * 1.5 = 1.125rem = ~18px
  "18px",
  // fontSizes.medium * 1.5 = 1.5rem = ~24px
  "24px",
  // fontSizes.large * 1.5 = 1.875rem = ~30px
  "30px",
  // fontSizes.xLarge * 1.5 = 2.25rem = ~36px
  "36px",

  // Keep the line height smaller for the larger fonts.

  // fontSizes.xxLarge * 1.333333333333 = 2.25rem = ~48px
  "48px",
  // fontSizes.xxxLarge * 1.333333333333 = 2.25rem = ~64px
  "64px"
];

// Pixel Fallback Aliases
lineHeights.pixel.copy = lineHeights.pixel[1];

lineHeights.pixel.small = lineHeights.pixel[0];
lineHeights.pixel.medium = lineHeights.pixel[1];
lineHeights.pixel.large = lineHeights.pixel[2];
lineHeights.pixel.xLarge = lineHeights.pixel[3];
lineHeights.pixel.xxLarge = lineHeights.pixel[4];
lineHeights.pixel.xxxLarge = lineHeights.pixel[5];

export default lineHeights;
