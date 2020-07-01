import PropTypes from "prop-types";
import classNames from "classnames";
import { media } from "styled-bootstrap-grid";
import styled from "styled-components";

const GlobalVslProduct = styled.div.attrs(
  props => {
    return {
      className: classNames("death-value__global-vsl-product")
    };
  }
)`
  ${({ theme: { borders, colors, fontSizes, fontWeights, lineHeights, space } }) => `
    box-shadow: ${ borders.outer.thin.bottom } ${ colors.black };
    color: ${ colors.titleCopy };
    font-size: ${ fontSizes.xxxLarge };
    font-weight: ${ fontWeights.semiBold };
    line-height: ${ lineHeights.xxxLarge };
    padding: 0 ${ space.small };
    width: 100%;
  `}

  ${media.xs`
    ${({ theme: { fontSizes, lineHeights, space } }) => `
      font-size: ${ fontSizes.xxLarge };
      line-height: ${ lineHeights.xxLarge };
      padding: ${ space.xSmall } ${ space.small };
    `}
  `}
`;

GlobalVslProduct.propTypes = {};

GlobalVslProduct.defaultProps = {};

export default GlobalVslProduct;
