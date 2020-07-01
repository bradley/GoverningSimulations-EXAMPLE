import React from "react";
import PropTypes from "prop-types";
import resetCSS from "styled-reset";
import {
  BaseCSS as GridGlobalStyles,
  GridThemeProvider
} from "styled-bootstrap-grid";
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
  withTheme
} from "styled-components";

// TODO: Consider moving global styles into their own theme object to be
// included here if this continues to grow. Note the any element that uses
// portals will only have global styles to rely on for their initial styling.
const GlobalStyles = createGlobalStyle`
  ${resetCSS}

  ${ ({ theme: { colors, fonts, fontSizes, lineHeights } }) => `
    * {
      box-sizing: border-box;
    }

    body {
      color: ${ colors.copy };
      background-color: ${ colors.background };
      font-family: ${ fonts.sansSerif };
      font-size: ${ fontSizes.copy };
      line-height: ${ lineHeights.copy };
    }
  `}
`;

const ThemeProvider = props => {
  const { children, theme } = props;

  const {
    grid: gridTheme,
    ...styledTheme
  } = theme;

  return (
    <React.Fragment>
      <StyledThemeProvider theme={styledTheme}>
        <React.Fragment>
          <GlobalStyles/>
          <GridGlobalStyles/>

          <GridThemeProvider gridTheme={gridTheme}>
            { children }
          </GridThemeProvider>
        </React.Fragment>
      </StyledThemeProvider>
    </React.Fragment>
  );
};

ThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired
}

export default ThemeProvider;
