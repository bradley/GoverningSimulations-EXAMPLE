import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styled from "styled-components";
import { KeyboardFocusContainer } from "@zendeskgarden/container-keyboardfocus";

import { Spinner } from "@app-front-end/UI/Loader";

const buttonResets = `
  border: none;
  background: none;
  cursor: pointer;
  font: inherit;
  outline: none;
  padding: 0;
`;

const LoaderWrapper = styled.span``;

const StyledButton = styled.button.attrs(
  props => {
    const {
      active,
      danger,
      disabled,
      focused,
      hovered,
      link,
      primary
    } = props;

    return {
      "aria-disabled": disabled,
      className: classNames("button", {
          "button--is-active": active,
          "button--is-disabled": disabled,
          "button--is-focused": focused,
          "button--is-hovered": hovered,

          "button--link": link,

          "button--primary": primary,

          "button--danger": danger,
        })
    };
  }
)`
  ${ buttonResets }

  ${ ({ theme: { borders, colors, heights, radii, space } }) => `
    background: ${ colors.grey700 };
    border-radius: ${ radii.medium };
    color: ${ colors.white };
    cursor: pointer;
    height: ${ heights.large };
    padding: ${ space.small } ${ space.medium };

    &:active, &.button--is-active,
    &:hover, &.button--is-hovered
    {
      background: ${ colors.grey800 };
      color: ${ colors.white };
    }

    // :focus managed by KeyboardFocusContainer
    &.button--is-focused
    {
      background: ${ colors.grey800 };
      color: ${ colors.white };
    }

    &.button--is-disabled {
      background: ${ colors.grey500 };
      cursor: not-allowed;
    }

    // Give link styles priority.
    && {
      &.button--link {
        background: ${ colors.transparent };
        border-radius: 0;
        box-shadow: ${ borders.outer.thin.bottom } ${ colors.grey800 };
        color: ${ colors.grey800 };
        cursor: pointer;
        font-style: italic;
        line-height: normal;
        outline: none;
        text-decoration: none;

        &:active, &.button--is-active,
        &:hover, &.button--is-hovered
        {
          background: ${ colors.transparent };
          box-shadow: none;
          color: ${ colors.grey800 };
          text-decoration: none;
        }

        // :focus managed by KeyboardFocusContainer
        &.button--is-focused
        {
          background: ${ colors.transparent };
          box-shadow: none;
          color: ${ colors.grey800 };
          text-decoration: none;
        }

        &.button--is-disabled {
          background: ${ colors.transparent };
          color: ${ colors.grey500 };
          pointer-events: none;
        }
      }
    }
  `}
`;

const Button = React.forwardRef(
  ({ children, focused, ...other }, ref) => (
    <KeyboardFocusContainer>
      {({ getFocusProps, keyboardFocused }) => (
        <StyledButton
          {...getFocusProps({
            ref,
            ...other,
            focused: focused || keyboardFocused
          })}
        >
          { children }
        </StyledButton>
      )}
    </KeyboardFocusContainer>
  )
);

Button.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  link: PropTypes.bool
};

Button.defaultProps = {
  active: false,
  disabled: false,
  focused: false,
  hovered: false,
  link: false
};

export default Button;

