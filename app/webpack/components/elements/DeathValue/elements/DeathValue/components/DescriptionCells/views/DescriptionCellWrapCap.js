import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";

const DescriptionCellWrapCap = styled.div.attrs(
  props => {
    return {
      className: classNames("death-value__description-cells__cell-wrap-cap")
    };
  }
)`
  ${({ theme: {} }) => `
    // Note: This is a CSS hack. This element is meant to act as the final item
    // in a flex container with three other items, each with a width of
    // 15.75rem. Having this placeholder element with its CSS allows the third
    // child to have a flex grow set to 1 - so that it will fill the width of
    // the flex container if wrapped - while also keeping its normal width
    // whenever it does not need to be wrapped.
    flex-basis: calc(100% - (15.75rem * 3));
  `}
`;

DescriptionCellWrapCap.propTypes = {};

DescriptionCellWrapCap.defaultProps = {};

export default DescriptionCellWrapCap;
