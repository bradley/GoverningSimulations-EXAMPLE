
import PropTypes from "prop-types";
import classNames from "classnames";
import { media } from "styled-bootstrap-grid";
import styled from "styled-components";

const LoadingWrapper = styled.div.attrs(
  props => {
    const {
      className,
      loading
    } = props;

    return {
      className: classNames(className, "embed__death-value__loading-wrapper")
    };
  }
)`
  ${({ theme: {} }) => `
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100vw;
  `}
`;

LoadingWrapper.propTypes = {};

LoadingWrapper.defaultProps = {};

export default LoadingWrapper;
