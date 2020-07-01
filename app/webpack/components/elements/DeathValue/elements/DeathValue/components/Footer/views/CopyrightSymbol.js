import PropTypes from "prop-types";
import classNames from "classnames";
import { media } from "styled-bootstrap-grid";
import styled from "styled-components";

const CopyrightSymbol = styled.span.attrs(
  props => {
    return {
      className: classNames("death-value__footer__copyright-symbol")
    };
  }
)`
  ${({ theme: { fontSizes, fontWeights, lineHeights } }) => `
    font-size: ${ fontSizes.large };
    font-weight: ${ fontWeights.semiBold };
    line-height: ${ lineHeights.medium };
    vertical-align: top;
  `}

  ${media.xs`
    ${({ theme: { fontSizes, lineHeights } }) => `
      font-size: ${ fontSizes.medium };
      line-height: ${ lineHeights.small };
      vertical-align: top;
    `}
  `}
`;

CopyrightSymbol.propTypes = {};

CopyrightSymbol.defaultProps = {};

export default CopyrightSymbol;
