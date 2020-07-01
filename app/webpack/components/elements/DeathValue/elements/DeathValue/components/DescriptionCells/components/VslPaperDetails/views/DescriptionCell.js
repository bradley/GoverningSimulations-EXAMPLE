import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";

import GenericDescriptionCell from "../../../views/DescriptionCell";

const DescriptionCell = styled(GenericDescriptionCell).attrs(
  props => {
    const {
      className
    } = props;

    return {
      className: classNames(
        className,
        "death-value__description-cells__vsl-paper-details__description_cell"
      )
    };
  }
)`
  ${({ theme: { borders, colors, space } }) => `
    flex-basis: 15.75rem;
    flex-grow: 1;
    height: auto!important;
    min-height: 0!important;
  `}
`;

DescriptionCell.propTypes = {};

DescriptionCell.defaultProps = {};

export default DescriptionCell;
