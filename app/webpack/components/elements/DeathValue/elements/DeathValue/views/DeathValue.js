import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";

const DeathValue = styled.div.attrs(
  props => {
    return {
      className: classNames("death-value")
    };
  }
)`
  ${({ theme: { colors } }) => `
    background: ${ colors.background };
    overflow: hidden;
  `}
`;

DeathValue.propTypes = {};

DeathValue.defaultProps = {};

export default DeathValue;
