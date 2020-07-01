/*
 * Measures
 *
 * Our theme follows a typography based grid methodology.
 *
 * measures values should be proportional to the base grid unit of this theme.
 * Optimal measure for running text is usually considered to be between 55 to 75
 * characters for one column, or between 40 to 50 characters for multiple
 * columns.
 *
 * All sizes in REM.
 *
 */
const measures = [
  // baseUnit * 14 = 21rem = ~336px
  "21rem",
  // baseUnit * 18 = 27rem = ~432px
  "27rem",
  // baseUnit * 22 = 33rem = ~528px
  "33rem",
  // baseUnit * 26 = 39rem = ~624px
  "39rem",
  // baseUnit * 39 = 58.5rem = ~936px
  "58.5rem",
  // baseUnit * 52 = 78rem = ~1248px
  "78rem"
];

// Aliases
measures.copy = measures[1];

measures.small = measures[0];
measures.medium = measures[1];
measures.large = measures[2];
measures.xLarge = measures[3];
measures.xxLarge = measures[4];
measures.xxxLarge = measures[5];

/*
 * Measures Pixel Fallbacks
 *
 * Rarely, we will need pixel based values to fall back to in components with
 * fixed size restrictions based on pixels. This will usually be due to third
 * party constraints.
 *
 * Consider carefully whether or not you actually need these values.
 *
 */
measures.pixel = [
  // baseUnit * 14 = 21rem = ~336px
  "336px",
  // baseUnit * 18 = 27rem = ~432px
  "432px",
  // baseUnit * 22 = 33rem = ~528px
  "528px",
  // baseUnit * 26 = 39rem = ~624px
  "624px",
  // baseUnit * 39 = 58.5rem = ~936px
  "936px",
  // baseUnit * 52 = 78rem = ~1248px
  "1248px"
];

// Pixel Fallback Aliases
measures.pixel.copy = measures.pixel[1];

measures.pixel.small = measures.pixel[0];
measures.pixel.medium = measures.pixel[1];
measures.pixel.large = measures.pixel[2];
measures.pixel.xLarge = measures.pixel[3];
measures.pixel.xxLarge = measures.pixel[4];
measures.pixel.xxxLarge = measures.pixel[5];

export default measures;
