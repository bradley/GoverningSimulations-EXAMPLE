import PropTypes from "prop-types";
import classNames from "classnames";
import { media } from "styled-bootstrap-grid";
import styled from "styled-components";

import { Text } from "@app-front-end/UI/Typography";

const DescriptionText = styled(Text).attrs(
  props => {
    const {
      className
    } = props;

    return {
      className: classNames(className, "death-value__description-cells__text")
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

DescriptionText.propTypes = {};

DescriptionText.defaultProps = {};

export default DescriptionText;
