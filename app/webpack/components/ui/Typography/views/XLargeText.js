import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";

import Text from "./Text";

const XLargeText = styled(Text).attrs(
  props => {
    const {
      className
    } = props;

    return {
      className: classNames("text__x-large-text", {
          [className]: !!className
        })
    };
  }
)`
  ${({ theme: { fontSizes, lineHeights }}) => `
    font-size: ${ fontSizes.xLarge };
    line-height: ${ lineHeights.xLarge };
  `}
`;

XLargeText.propTypes = {
  ...Text.propTypes
};

XLargeText.defaultProps = {};

export default XLargeText;
