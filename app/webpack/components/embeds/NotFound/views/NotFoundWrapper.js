import PropTypes from "prop-types";
import classNames from "classnames";
import { media } from "styled-bootstrap-grid";
import styled from "styled-components";

const DeathValueWrapper = styled.div.attrs(
  props => {
    const {
      className
    } = props;

    return {
      className: classNames(
        className,
        "embed__not-found__wrapper")
    };
  }
)`
  ${({ theme: { space } }) => `
    align-items: center;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    padding: ${ space.small };
    position: absolute;
    right: 0;
    top: 0;
  `}
`;

DeathValueWrapper.propTypes = {};

DeathValueWrapper.defaultProps = {};

export default DeathValueWrapper;
