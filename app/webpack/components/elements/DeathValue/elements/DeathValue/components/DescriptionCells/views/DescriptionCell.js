import PropTypes from "prop-types";
import classNames from "classnames";
import { media } from "styled-bootstrap-grid";
import styled from "styled-components";

const DescriptionCell = styled.div.attrs(
  props => {
    return {
      className: classNames("death-value__description-cells__cell")
    };
  }
)`
  ${({ theme: { borders, colors, space } }) => `
    box-shadow:
      ${ borders.thin.top } ${ colors.black },
      ${ borders.outer.thin.right } ${ colors.black };
    display: inline-block;
    height: 100%;
    min-height: 7.75rem;
    padding: ${ space.small };
    width: 50%;
  `}

  ${media.md`
    min-height: 9.75rem;
    width: 15.75rem;
  `}
`;

DescriptionCell.propTypes = {};

DescriptionCell.defaultProps = {};

export default DescriptionCell;
