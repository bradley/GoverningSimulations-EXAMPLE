/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import classNames from "classnames";
import PropTypes from "prop-types";
import styled from "styled-components";

const Item = styled.li.attrs(
  props => {
    const {
      className,
      isFocused,
      isSelected
    } = props;

    return {
      className: classNames(className, "dropdown__item", {
        "dropdown__item--is-focused": isFocused,
        "dropdown__item--is-selected": isSelected
      })
    };
  }
)`
  ${({ theme: { colors, space, fontSizes, lineHeights } }) => `
    color: ${ colors.white };
    cursor: pointer;
    display: block;
    font-size: ${ fontSizes.copy };
    font-style: italic;
    line-height: ${ lineHeights.copy };
    padding: ${ space.xSmall } ${ space.medium };
    text-decoration: none;
    user-select: none;
    word-wrap: break-word;

    // Allows an item to contain a positioned sub-menu.
    position: relative;

    // Reset stacking context for sub-menu css-arrows.
    z-index: 0;

    &:first-child {
      margin-top: ${ space.small };
    }

    &:last-child {
      margin-bottom: ${ space.small };
    }

    &:focus {
      outline: none;
    }

    &.dropdown__item--is-focused {
      background-color: ${ colors.grey800 };
    }

    &.dropdown__item--is-selected {
      background-color: ${ colors.grey800 };
    }
  `}
`;

Item.defaultProps = {};

export default Item;
