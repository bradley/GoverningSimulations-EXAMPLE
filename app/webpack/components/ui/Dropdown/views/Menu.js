/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import classNames from "classnames";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Menu = styled.ul.attrs(
  props => {
    const {
      className,
      isAnimated
    } = props;

    return {
      className: classNames(className, "dropdown__menu", {
        "dropdown__menu--is-animated": isAnimated
      })
    };
  }
)`
  ${
    props => {
      const {
        isAnimated,
        theme
      } = props;

      const {
        space
      } = theme;

      return css`
        height: 100vh;
        min-width: 180px;
        overflow-y: auto;
      `;
    }
  }
`;

Menu.defaultProps = {};

export default Menu;
