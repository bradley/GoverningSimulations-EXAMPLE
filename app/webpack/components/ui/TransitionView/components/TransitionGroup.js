import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import {
  TransitionGroup as ReactTransitionGroup
} from "react-transition-group";

import StyledTransitionGroup from "../views/TransitionGroup";

const TransitionGroup = props => {
  const { children, ...transitionGroupProps } = props;

  return (
    <ReactTransitionGroup
      component={StyledTransitionGroup}
      { ...transitionGroupProps }
    >
      { children }
    </ReactTransitionGroup>
  );
};

TransitionGroup.propTypes = {};

TransitionGroup.defaultProps = {};

export default TransitionGroup;
