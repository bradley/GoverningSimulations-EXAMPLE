import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";

const Input = styled.input.attrs(
  props => {
    const {
      active,
      disabled,
      focused,
      hovered
    } = props;

    return {
      "aria-disabled": disabled,
      className: classNames("form__input", {
        "form__input--is-active": active,
        "form__input--is-disabled": disabled,
        "form__input--is-focused": focused,
        "form__input--is-hovered": hovered
      })
    };
  }
)`
  ${({ theme: { borders, colors, fonts, fontSizes, heights, lineHeights, radii, space }}) => `
    border: none;
    border-radius: ${ radii.medium };
    box-shadow: ${ borders.full } ${ colors.grey400 };
    display: block;
    font-size: ${ fontSizes.medium };
    height: ${ heights.large };
    line-height: ${ lineHeights.medium };
    outline: none;
    padding: ${ space.small } ${ space.small };
    width: 100%;

    &::placeholder,
    &::-webkit-input-placeholder {
      color: ${ colors.grey500 };
      font-family: ${ fonts.sansSerif };
    }
    &::-ms-input-placeholder {
      color: ${ colors.grey500 };
      font-family: ${ fonts.sansSerif };
    }

    &:active, &.form__input--is-active,
    &:hover, &.form__input--is-hovered
    {
      box-shadow: ${ borders.full } ${ colors.grey600 };
    }

    &:focus, &.form__input--is-focused
    {
      box-shadow:
        ${ borders.outer.highlight.full } ${ colors.grey400 },
        ${ borders.full } ${ colors.grey600 };
    }

    // Give disabled styling priority.
    && {
      &.form__input--is-disabled {
        background: ${ colors.grey100 };
        box-shadow: ${ borders.full } ${ colors.grey300 };
        cursor: not-allowed;
      }
    }
  `}
`;

Input.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  hovered: PropTypes.bool
};

Input.defaultProps = {
  active: false,
  disabled: false,
  focused: false,
  hovered: false
};

export default Input;
