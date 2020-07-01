import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";

import Text from "./Text";

const XXXLargeText = styled(Text).attrs(
  props => {
    const {
      className
    } = props;

    return {
      className: classNames("text__xxx-large-text", {
          [className]: !!className
        })
    };
  }
)`
  ${({ theme: { fontSizes, lineHeights }}) => `
    font-size: ${ fontSizes.xxxLarge };
    line-height: ${ lineHeights.xxxLarge };
  `}
`;

XXXLargeText.propTypes = {
  ...Text.propTypes
};

XXXLargeText.defaultProps = {};

export default XXXLargeText;
