import styled from "styled-components";
import classNames from "classnames";
import PropTypes from "prop-types";
import { height, space } from "styled-system";

export const Box = styled("div").attrs(
  props => ({
    className: classNames("box")
  })
)`
  ${ height }
  ${ space }
`;

Box.propTypes = {
  ...height.propTypes,
  ...space.propTypes
};

Box.defaultProps = {};

export default Box;
