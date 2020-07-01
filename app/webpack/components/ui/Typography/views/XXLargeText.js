import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";

import Text from "./Text";

const XXLargeText = styled(Text).attrs(
  props => {
    const {
      className
    } = props;

    return {
      className: classNames("text__xx-large-text", {
          [className]: !!className
        })
    };
  }
)`
  ${({ theme: { fontSizes, lineHeights }}) => `
    font-size: ${ fontSizes.xxLarge };
    line-height: ${ lineHeights.xxLarge };
  `}
`;

XXLargeText.propTypes = {
  ...Text.propTypes
};

XXLargeText.defaultProps = {};

export default XXLargeText;
