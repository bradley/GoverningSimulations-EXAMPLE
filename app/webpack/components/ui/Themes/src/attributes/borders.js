/*
 * Borders
 *
 * All sizes in REM.
 *
 */
const borders = {};

// 0.125rem = ~2px
borders.full = "inset 0 0 0 0.125rem";
borders.bottom = "inset 0 -0.125rem 0 0";
borders.left = "inset 0.125rem 0 0 0";
borders.right = "inset -0.125rem 0 0 0";
borders.top = "inset 0 0.125rem 0 0";

// 0.375rem = ~6px
borders.highlight = {};
borders.highlight.full = "inset 0 0 0 0.375rem";
borders.highlight.bottom = "inset 0 -0.375rem 0 0";
borders.highlight.left = "inset 0.375rem 0 0 0";
borders.highlight.right = "inset -0.375rem 0 0 0";
borders.highlight.top = "inset 0 0.375rem 0 0";

// 0.0625rem = ~1px
borders.thin = {}
borders.thin.full = "inset 0 0 0 0.0625rem";
borders.thin.bottom = "inset 0 -0.0625rem 0 0";
borders.thin.left = "inset 0.0625rem 0 0 0";
borders.thin.right = "inset -0.0625rem 0 0 0";
borders.thin.top = "inset 0 0.0625rem 0 0";

// 0.125rem = ~2px
borders.outer = {};
borders.outer.full = "0 0 0 0.125rem";
borders.outer.bottom = "0 0.125rem 0 0";
borders.outer.left = "-0.125rem 0 0 0";
borders.outer.right = "0.125rem 0 0 0";
borders.outer.top = "0 -0.125rem 0 0";

// 0.375rem = ~6px
borders.outer.highlight = {};
borders.outer.highlight.full = "0 0 0 0.375rem";
borders.outer.highlight.bottom = "0 0.375rem 0 0";
borders.outer.highlight.left = "-0.375rem 0 0 0";
borders.outer.highlight.right = "0.375rem 0 0 0";
borders.outer.highlight.top = "0 -0.375rem 0 0";

// 0.0625rem = ~1px
borders.outer.thin = {};
borders.outer.thin.full = "0 0 0 0.0625rem";
borders.outer.thin.bottom = "0 0.0625rem 0 0";
borders.outer.thin.left = "-0.0625rem 0 0 0";
borders.outer.thin.right = "0.0625rem 0 0 0";
borders.outer.thin.top = "0 -0.0625rem 0 0";

/*
 * Border Pixel Fallbacks
 *
 * Rarely, we will need pixel based values to fall back to in components with
 * fixed size restrictions based on pixels. This will usually be due to third
 * party constraints.
 *
 * Consider carefully whether or not you actually need these values.
 *
 */
// 0.125rem = ~2px
borders.pixel = {};
borders.pixel.full = "inset 0 0 0 2px";
borders.pixel.bottom = "inset 0 -2px 0 0";
borders.pixel.left = "inset 2px 0 0 0";
borders.pixel.right = "inset -2px 0 0 0";
borders.pixel.top = "inset 0 2px 0 0";

// 0.375rem = ~6px
borders.pixel.highlight = {};
borders.pixel.highlight.full = "inset 0 0 0 6px";
borders.pixel.highlight.bottom = "inset 0 -6px 0 0";
borders.pixel.highlight.left = "inset 6px 0 0 0";
borders.pixel.highlight.right = "inset -6px 0 0 0";
borders.pixel.highlight.top = "inset 0 6px 0 0";

// 0.0625rem = ~1px
borders.pixel.thin = {}
borders.pixel.thin.full = "inset 0 0 0 1px";
borders.pixel.thin.bottom = "inset 0 -1px 0 0";
borders.pixel.thin.left = "inset 1px 0 0 0";
borders.pixel.thin.right = "inset -1px 0 0 0";
borders.pixel.thin.top = "inset 0 1px 0 0";

// 0.125rem = ~2px
borders.pixel.outer = {};
borders.pixel.outer.full = "0 0 0 2px";
borders.pixel.outer.bottom = "0 2px 0 0";
borders.pixel.outer.left = "-2px 0 0 0";
borders.pixel.outer.right = "2px 0 0 0";
borders.pixel.outer.top = "0 -2px 0 0";

// 0.375rem = ~6px
borders.pixel.outer.highlight = {};
borders.pixel.outer.highlight.full = "0 0 0 6px";
borders.pixel.outer.highlight.bottom = "0 6px 0 0";
borders.pixel.outer.highlight.left = "-6px 0 0 0";
borders.pixel.outer.highlight.right = "6px 0 0 0";
borders.pixel.outer.highlight.top = "0 -6px 0 0";

// 0.0625rem = ~1px
borders.pixel.outer.thin = {};
borders.pixel.outer.thin.full = "0 0 0 1px";
borders.pixel.outer.thin.bottom = "0 1px 0 0";
borders.pixel.outer.thin.left = "-1px 0 0 0";
borders.pixel.outer.thin.right = "1px 0 0 0";
borders.pixel.outer.thin.top = "0 -1px 0 0";

export default borders;
