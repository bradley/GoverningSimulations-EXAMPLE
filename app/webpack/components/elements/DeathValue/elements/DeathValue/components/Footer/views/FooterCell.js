import PropTypes from "prop-types";
import classNames from "classnames";
import { media } from "styled-bootstrap-grid";
import styled from "styled-components";

const DescriptionCell = styled.div.attrs(
  props => {
    return {
      className: classNames("death-value__footer__footer-cell")
    };
  }
)`
  ${({ theme: { borders, colors, space } }) => `
    box-shadow:
      ${ borders.outer.thin.top } ${ colors.black },
      ${ borders.outer.thin.right } ${ colors.black };
    display: inline-block;
    flex-basis: 100%;
    flex-grow: 1;
    padding: ${ space.small };
  `}

  ${media.lg`
    flex-basis: 50%;
  `}
`;

DescriptionCell.propTypes = {};

DescriptionCell.defaultProps = {};

export default DescriptionCell;
