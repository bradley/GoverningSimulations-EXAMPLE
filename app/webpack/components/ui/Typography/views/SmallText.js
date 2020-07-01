import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";

import Text from "./Text";

const SmallText = styled(Text).attrs(
  props => {
    const {
      className
    } = props;

    return {
      className: classNames("text__small-text", {
          [className]: !!className
        })
    };
  }
)`
  ${({ theme: { fontSizes, lineHeights }}) => `
    font-size: ${ fontSizes.small };
    line-height: ${ lineHeights.small };
  `}
`;

SmallText.propTypes = {
  ...Text.propTypes
};

SmallText.defaultProps = {};

export default SmallText;
