/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import classNames from "classnames";
import PropTypes from "prop-types";
import styled, { css} from "styled-components";

import menuStyles from "../utils/menuStyles";

const MenuWrapper = styled.div.attrs(
  props => {
    const {
      className,
      isAnimated
    } = props;

    return {
      className: classNames(className, "dropdown__menu-wrapper", {
        "dropdown__menu-wrapper--is-animated": isAnimated
      })
    };
  }
)`
  ${
    props => {
      const {
        isAnimated,
        isHidden,
        theme,
        zIndex
      } = props;

      const { radii, space } = theme;

      return css`
        border-radius: ${ theme.radii.medium };

        ${
          css`
            ${
              menuStyles(theme, {
                hidden: isHidden,
                margin: 0,
                zIndex: zIndex,
                animationModifier: isAnimated ?
                  ".dropdown__menu-wrapper--is-animated" : undefined
              })
            }
          `
        }
      `;
    }
  }
`;

MenuWrapper.defaultProps = {};

export default MenuWrapper;
