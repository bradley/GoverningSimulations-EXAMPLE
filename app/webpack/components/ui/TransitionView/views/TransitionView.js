import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

const TRANSITION_MS = 125;
const TRANSITION_NAME = `transition-view`;

const StyledTransitionView = styled.div.attrs(
  props => {
    const {
      className
    } = props;

    return {
      className: classNames(className, "transition-view")
    };
  }
)`
  ${({ theme: {} }) => `
    will-change: opacity;

    &.${ TRANSITION_NAME }-appear,
    &.${ TRANSITION_NAME }-enter {
      opacity: 0;
      transition:
        opacity ${ TRANSITION_MS }ms cubic-bezier(0.39, 0.575, 0.565, 1);
    };

    &.${ TRANSITION_NAME }-appear.${ TRANSITION_NAME }-appear-active,
    &.${ TRANSITION_NAME }-enter.${ TRANSITION_NAME }-enter-active,
    &.${ TRANSITION_NAME }-appear-done,
    &.${ TRANSITION_NAME }-enter-done,
    &.${ TRANSITION_NAME }-exit {
      opacity: 1;
    };

    &.${ TRANSITION_NAME }-exit.${ TRANSITION_NAME }-exit-active,
    &.${ TRANSITION_NAME }-exit-done {
      opacity: 0;
      transition:
        opacity ${ TRANSITION_MS }ms cubic-bezier(0.39, 0.575, 0.565, 1);
    };
  `}
`;

StyledTransitionView.propTypes = {};

StyledTransitionView.defaultProps = {};

const TransitionView = props => {
  const { children, ...transitionProps } = props;

  return (
    <CSSTransition
      classNames={{
        appear: `${ TRANSITION_NAME }-appear`,
        appearActive:`${ TRANSITION_NAME }-appear-active`,
        // Keep this. Prevents `react-transition-group` from adding
        // `undefined` to class name list.
        appearDone: `${ TRANSITION_NAME }-appear-done`,
        enter: `${ TRANSITION_NAME }-enter`,
        enterActive: `${ TRANSITION_NAME }-enter-active`,
        enterDone: `${ TRANSITION_NAME }-enter-done`,
        exit: `${ TRANSITION_NAME }-exit`,
        exitActive: `${ TRANSITION_NAME }-exit-active`,
        exitDone: `${ TRANSITION_NAME }-exit-done`,
      }}
      timeout={{
        appear: TRANSITION_MS,
        enter: TRANSITION_MS,
        exit: TRANSITION_MS
      }}
      { ...transitionProps }
    >
      <StyledTransitionView>
        { children }
      </StyledTransitionView>
    </CSSTransition>
  );
};

TransitionView.propTypes = {};

TransitionView.defaultProps = {};

export default TransitionView;
