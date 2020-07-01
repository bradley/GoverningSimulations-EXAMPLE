/*
 * svg.replaceColors
 *
 * Replace fill and stroke colors within string representations of SVGs.
 *
 */
export const replaceColors = (svgString, options={}) => {
  if (options.fill) {
    const fill = options.fill.replace(/#/g, "%23");

    if (options.skipIfNone) {
      svgString = svgString.replace(/fill=[\'\"]((?!none).*?)[\'\"]/g, "fill='" + fill + "'");
    } else {
      svgString = svgString.replace(/fill=[\'\"](.*?)[\'\"]/g, "fill='" + fill + "'");
    }
  }

  if (options.stroke) {
    const stroke = options.stroke.replace(/#/g, "%23");

    if (options.skipIfNone) {
      svgString = svgString.replace(/stroke=[\'\"]((?!none).*?)[\'\"]/g, "stroke='" + stroke + "'");
    } else {
      svgString = svgString.replace(/stroke=[\'\"](.*?)[\'\"]/g, "stroke='" + stroke + "'");
    }
  }

  return svgString;
};

/*
 * svg.toDataURL
 *
 * Takes a string representation of a SVG and converts it into a data URL, often
 * for use as background image URLs.
 *
 */
export const toDataURL = svgString => {
  const REGEX_SVG_CODE = /(<svg[\s\S]*?)(.*?)(>.*?<\/svg>)/i
  const REGEX_DOUBLE_QUOTE = /"/g;
  const REGEX_MULTIPLE_SPACES = /\s+/g;
  const REGEX_UNSAFE_CHARS = /[{}\|\\\^~\[\]`"<>#%]/g;

  svgString = svgString.replace(REGEX_DOUBLE_QUOTE, "'");
  svgString = svgString.replace(REGEX_MULTIPLE_SPACES, " ");
  svgString = svgString.replace(REGEX_UNSAFE_CHARS, function(match) {
    return '%'+match[0].charCodeAt(0).toString(16).toUpperCase();
  });

  return JSON.stringify('data:image/svg+xml,' + svgString.trim());
};

export default {
  replaceColors,
  toDataURL
};
