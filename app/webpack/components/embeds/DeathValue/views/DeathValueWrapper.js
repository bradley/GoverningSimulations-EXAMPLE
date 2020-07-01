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
        "embed__death-value__death-value-wrapper")
    };
  }
)`
  ${({ theme: { borders, space } }) => `
    align-items: center;
    display: flex;
    height: 100vh;
    padding: ${ space.small } 0 ${ space.small } ${ space.large };

    > * {
      width: 100%;
    }
  `}

  ${media.xs`
    ${({ theme: { space } }) => `
      padding: ${ space.small } 0 ${ space.small } ${ space.medium };
    `}
  `}
`;

DeathValueWrapper.propTypes = {};

DeathValueWrapper.defaultProps = {};

export default DeathValueWrapper;
