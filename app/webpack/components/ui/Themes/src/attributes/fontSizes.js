/*
 * Font Sizes
 *
 * Our theme follows a typography based grid methodology.
 *
 * Font sizes are fundamental to the spacial values of this theme.
 *
 * All sizes in REM.
 *
 */
const fontSizes = [
  // 0.8125rem = ~13px
  "0.8125rem",
  // 1rem = ~16px
  "1rem",
  // 1.25rem = ~20px
  "1.25rem",
  // 1.5rem = ~24px
  "1.5rem",
  // 2.25rem = ~36px
  "2.25rem",
  // 3rem = ~48px
  "3rem"
];

// Aliases
fontSizes.copy = fontSizes[1];

fontSizes.small = fontSizes[0];
fontSizes.medium = fontSizes[1];
fontSizes.large = fontSizes[2];
fontSizes.xLarge = fontSizes[3];
fontSizes.xxLarge = fontSizes[4];
fontSizes.xxxLarge = fontSizes[5];

/*
 * Font Size Pixel Fallbacks
 *
 * Rarely, we will need pixel based values to fall back to in components with
 * fixed size restrictions based on pixels. This will usually be due to third
 * party constraints.
 *
 * Consider carefully whether or not you actually need these values.
 *
 */
fontSizes.pixel = [
  // 0.8125rem = ~12px
  "13px",
  // 1rem = ~16px
  "16px",
  // 1.25rem = ~20px
  "20px",
  // 1.5rem = ~24px
  "24px",
  // 2.25rem = ~36px
  "36px",
  // 3rem = ~48px
  "48px"
];

// Pixel Fallback Aliases
fontSizes.pixel.copy = fontSizes.pixel[1];

fontSizes.pixel.small = fontSizes.pixel[0];
fontSizes.pixel.medium = fontSizes.pixel[1];
fontSizes.pixel.large = fontSizes.pixel[2];
fontSizes.pixel.xLarge = fontSizes.pixel[3];
fontSizes.pixel.xxlarge = fontSizes.pixel[4];
fontSizes.pixel.xxxLarge = fontSizes.pixel[5];

export default fontSizes;
