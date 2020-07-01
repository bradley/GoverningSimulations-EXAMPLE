import PropTypes from "prop-types";
import classNames from "classnames";
import { media } from "styled-bootstrap-grid";
import styled from "styled-components";

import { Text } from "@app-front-end/UI/Typography";

const FooterText = styled(Text).attrs(
  props => {
    const {
      className
    } = props;

    return {
      className: classNames(className, "death-value__footer__text")
    };
  }
)`
  ${({ theme: { fontSizes, lineHeights } }) => `
    font-size: ${ fontSizes.medium };
    line-height: ${ lineHeights.medium };
  `}

  ${media.xs`
    ${({ theme: { fontSizes, lineHeights } }) => `
      font-size: ${ fontSizes.small };
      line-height: ${ lineHeights.small };
    `}
  `}
`;

FooterText.propTypes = {};

FooterText.defaultProps = {};

export default FooterText;
