/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import classNames from "classnames";
import PropTypes from "prop-types";
import styled from "styled-components";

import { IconURL } from "@app-front-end/UI/Icon";
import { svg } from "@app-front-end/UI/Utils";

const Selected = styled.div.attrs(
  props => {
    const {
      className,
      isVisible
    } = props;

    return {
      className: classNames(className, "dropdown__item-selected", {
        "dropdown__item-selected--is-visible": isVisible
      })
    };
  }
)`
  ${({ theme: { colors, fontSizes, space, lineHeights } }) => `
    align-items: center;
    background-image: url(${
      svg.replaceColors(IconURL.Check, { stroke: colors.white })
    });
    background-origin: border-box;
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${ fontSizes.small };
    color: ${ colors.white };
    display: flex;
    height: calc((${ space.xSmall } * 2) + ${ lineHeights.copy });
    justify-content: center;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: opacity 0.1s ease-in-out;
    width: ${ space.medium };

    &.dropdown__item-selected--is-visible {
      opacity: 1;
    }
  `}
`;

Selected.defaultProps = {};

export default Selected;
