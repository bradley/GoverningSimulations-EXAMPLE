import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";

const DescriptionCells = styled.div.attrs(
  props => {
    return {
      className: classNames("death-value__description-cells")
    };
  }
)`
  ${({ theme: { borders, colors, heights } }) => `
    box-shadow:
      ${ borders.thin.top } ${ colors.black },
      ${ borders.thin.bottom } ${ colors.black },
      ${ borders.thin.left } ${ colors.black };
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-wrap: wrap;
  `}
`;

DescriptionCells.propTypes = {};

DescriptionCells.defaultProps = {};

export default DescriptionCells;
