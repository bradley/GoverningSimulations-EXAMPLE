import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";

import Text from "./Text";

const LargeText = styled(Text).attrs(
  props => {
    const {
      className
    } = props;

    return {
      className: classNames("text__large-text", {
          [className]: !!className
        })
    };
  }
)`
  ${({ theme: { fontSizes, lineHeights }}) => `
    font-size: ${ fontSizes.large };
    line-height: ${ lineHeights.large };
  `}
`;

LargeText.propTypes = {
  ...Text.propTypes
};

LargeText.defaultProps = {};

export default LargeText;
