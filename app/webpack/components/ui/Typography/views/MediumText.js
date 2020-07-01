import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";

import Text from "./Text";

const MediumText = styled(Text).attrs(
  props => {
    const {
      className
    } = props;

    return {
      className: classNames("text__medium-text", {
          [className]: !!className
        })
    };
  }
)`
  ${({ theme: { fontSizes, lineHeights }}) => `
    font-size: ${ fontSizes.medium };
    line-height: ${ lineHeights.medium };
  `}
`;

MediumText.propTypes = {
  ...Text.propTypes
};

MediumText.defaultProps = {};

export default MediumText;
