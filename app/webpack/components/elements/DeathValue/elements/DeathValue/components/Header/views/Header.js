import PropTypes from "prop-types";
import classNames from "classnames";
import { media } from "styled-bootstrap-grid";
import styled, { css } from "styled-components";

const ONE_PX_AS_REM = "0.0625rem";

const Header = styled.div.attrs(
  props => {
    const { forEmbed } = props;
    return {
      className: classNames("death-value__header", {
        "death-value__header--for-embed": forEmbed
      })
    };
  }
)`
  ${({ theme: { colors, borders, heights, space } }) => `
    box-shadow:
      ${ borders.highlight.top } ${ colors.titleCopy },
      ${ borders.thin.bottom } ${ colors.black };
    height: ${ heights.xLarge };
    padding-top: ${ heights.large };
    position: relative;

    &:after {
      background: repeating-linear-gradient(
        to right,
        ${ colors.black },
        ${ colors.black } ${ ONE_PX_AS_REM },
        transparent ${ ONE_PX_AS_REM },
        transparent ${ space.small }
      );
      bottom: 0;
      content: "";
      height: ${ space.small };
      left: 0;
      position: absolute;
      right: 0;
    }

    &.death-value__header--for-embed {
      box-shadow: ${ borders.thin.bottom } ${ colors.black };
      height: ${ heights.large };
      padding-top: 0;
    }
  `}

  ${media.xs`
    ${({ theme: { colors, borders, heights, space } }) => `
      // Title element has height "large".
      height: calc(${ heights.medium } + ${ heights.large });
      padding-top: ${ heights.medium };
    `}
  `}
`;

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
