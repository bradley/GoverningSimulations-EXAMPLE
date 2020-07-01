import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";
import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
} from "styled-system";

import Box from "./Box";

export const Flex = styled(Box).attrs(
  props => ({
    className: classNames("box__flex")
  })
)`
  display: flex;

  ${ flexWrap }
  ${ flexDirection }
  ${ alignItems }
  ${ justifyContent }
`;

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,

  ...Box.propTypes
};

Flex.defaultProps = {};

export default Flex;
