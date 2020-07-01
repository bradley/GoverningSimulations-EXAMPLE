import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";

const TransitionViewGroup = styled.div.attrs(
  props => {
    return {
      className: classNames("transition-view__group")
    };
  }
)`
`;

TransitionViewGroup.propTypes = {};

TransitionViewGroup.defaultProps = {};

export default TransitionViewGroup;
