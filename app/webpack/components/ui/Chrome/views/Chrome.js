import PropTypes from "prop-types";
import classNames from "classnames";
import { media } from "styled-bootstrap-grid";
import styled from "styled-components";

const Chrome = styled.div.attrs(
  props => ({
    className: classNames("chrome")
  })
)`
`;

Chrome.propTypes = {};

Chrome.defaultProps = {};

export default Chrome;
