/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { css, keyframes } from "styled-components";

const animationStyles = (theme, options) => {
  const animationName = keyframes`
    0% {
      opacity: 0;
    }
  `;

  return css`
    &${ options.animationModifier } ${ options.childSelector || "> *" } {
      animation: 125ms cubic-bezier(0.39, 0.575, 0.565, 1) ${ animationName };
    }
  `;
};

const hiddenStyles = options => {
  const transition = "125ms cubic-bezier(0.39, 0.575, 0.565, 1)";

  return css`
    transition: ${ options.animationModifier && transition };
    visibility: hidden;
    opacity: 0;
  `;
};

/*
 * CSS for a `wrapper > menu`, via Popper.
 *
 * The `hidden` `option` determines whether the menu is hidden.
 *
 * The `margin` `option` determines is the amount of margin between menu and
 * trigger.
 *
 * The `zIndex` `option` is the menu wrapper's z-index.
 *
 * The `childSelector` `option` is a CSS selector that identifies the child menu
 * component, (e.g.; `> *`).
 *
 * The `animationModifier` `option` is a CSS class or attribute selector which,
 * when applied, animates the menu"s appearance.
 *
 */
const menuStyles = (theme, options = {}) => {
  return css`
    z-index: ${ options.zIndex || 0 };

    // Popper requires a non-zero font-size to calculate initial placement.
    font-size: 0.01px;

    & ${ options.childSelector || "> *" } {
      background-color: ${ theme.colors.grey700 };
      box-shadow:
        ${ theme.borders.outer.thin.full } ${ theme.colors.grey700 };
      box-sizing: border-box;
      font-size: ${ theme.fontSizes.medium };
      font-weight: ${ theme.fontWeights.normal };
      line-height: ${ theme.lineHeights.normal };

      // Prevent controlling item cursor inheritance.
      cursor: default;

      // Browser list element reset.
      margin: 0;
      padding: 0;

      // Positioned relative to controlling item.
      position: relative;

      // Prevent controlling item whitespace inheritance.
      white-space: normal;

      :focus {
        outline: none;
      }
    }

    ${ options.animationModifier && animationStyles(theme, options) };
    ${ options.hidden && hiddenStyles(options) };
  `;
};

export default menuStyles;
