/*
 * Grid
 *
 * The following theme specification is defined according to the theme
 * specification of styled-bootstrap-grid.
 *
 * See: https://github.com/dragma/styled-bootstrap-grid
 *
 * All sizes in PX, due to styled-bootstrap-grid specification.
 *
 */
const grid = {};

grid.breakpoints = {
  veryGiant: 1400,
  giant: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
  smaller: 575
};

grid.col = {
  // Columns should be separated by one base unit
  // when positioned next to one another.
  //
  // baseUnit * 1.0 = 1.5rem = ~24px
  padding: 0
};

grid.container = {
  // baseUnit * 2 = 3rem = ~48px
  padding: 0
};

grid.row = {
  // Account for padding on columns.
  //
  // baseUnit * 1.0 = 1.5rem = ~24px
  padding: 0
};

export default grid;
