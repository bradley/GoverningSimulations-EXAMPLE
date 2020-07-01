import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";

const Body = styled.div.attrs(
  props => ({
    className: classNames("chrome__body")
  })
)`
`;

Body.propTypes = {};

Body.defaultProps = {};

export default Body;

