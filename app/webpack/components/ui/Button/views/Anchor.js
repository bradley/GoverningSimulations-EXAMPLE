import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styled from "styled-components";
import { KeyboardFocusContainer } from "@zendeskgarden/container-keyboardfocus";

const StyledAnchor = styled.a.attrs(
  props => {
    const {
      active,
      disabled,
      emphasized,
      focused,
      hovered
    } = props;

    return {
      "aria-disabled": disabled,
      className: classNames("anchor", {
        "anchor--is-active": active,
        "anchor--is-disabled": disabled,
        "anchor--is-focused": focused,
        "anchor--is-hovered": hovered,

        "anchor--is-emphasized": emphasized
      })
    }
  }
)`
  ${({ theme: { borders, colors } }) => `
    color: ${ colors.grey800 };
    box-shadow: ${ borders.outer.thin.bottom } ${ colors.grey800 };
    cursor: pointer;
    outline: none;
    text-decoration: none;

    &:active, &.anchor--is-active,
    &:hover, &.anchor--is-hovered
    {
      color: ${ colors.grey800 };
      box-shadow: none;
      text-decoration: none;
    }

    // :focus managed by KeyboardFocusContainer
    &.anchor--is-focused
    {
      color: ${ colors.grey800 };
      box-shadow: none;
      text-decoration: none;
    }

    &.anchor--is-disabled {
      color: ${ colors.grey500 };
      pointer-events: none;
    }

    &.anchor--is-emphasized {
      font-style: italic;
    }
  `}
`;

const Anchor = React.forwardRef(({ focused, ...other }, ref) => (
  <KeyboardFocusContainer>
    {({ getFocusProps, keyboardFocused }) => (
      <StyledAnchor
        {...getFocusProps({
          ref,
          ...other,
          focused: focused || keyboardFocused
        })}
      />
    )}
  </KeyboardFocusContainer>
));

Anchor.propTypes = {
  active: PropTypes.bool,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  emphasized: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool
};

Anchor.defaultProps = {
  active: false,
  danger: false,
  disabled: false,
  emphasized: false,
  focused: false,
  hovered: false
};

export default Anchor;
