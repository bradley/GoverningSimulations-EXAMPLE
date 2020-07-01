import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";

import Anchor from "./Anchor";
import Button from "./Button";

export const ButtonGroup = styled.div.attrs(
  props => ({
    className: classNames("button-group")
  })
)`
  ${({ theme: { space } }) => `
    display: inline-block;
    margin: 0 -${ space.xSmall };

    ${ Anchor },
    ${ Button } {
      margin: 0 ${ space.xSmall };
    }
  `}
`;

ButtonGroup.propTypes = {};

ButtonGroup.defaultProps = {};

export default ButtonGroup;
