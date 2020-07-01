/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import classNames from "classnames";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { Input as GenericInput } from "@app-front-end/UI/Form";

const hiddenStyling = css`
  position: absolute;
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
`;

const Input = styled(GenericInput).attrs(
  props => {
    const {
      className,
      isHidden
    } = props;

    return {
      className: classNames(className, "dropdown__input", {
        "dropdown__input--is-hidden": isHidden
      })
    };
  }
)`
  &.dropdown__input--is-hidden {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    height: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 0;
  }
`;

Input.defaultProps = {};

export default Input;
