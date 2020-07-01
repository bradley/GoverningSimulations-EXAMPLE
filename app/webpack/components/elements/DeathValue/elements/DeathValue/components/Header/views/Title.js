import PropTypes from "prop-types";
import classNames from "classnames";
import { media } from "styled-bootstrap-grid";
import styled from "styled-components";

const Title = styled.div.attrs(
  props => {
    return {
      className: classNames("death-value__header__title")
    };
  }
)`
  ${({ theme: { borders, colors, fontSizes, fontWeights, heights, measures, space } }) => `
    box-shadow:
      ${ borders.thin.left } ${ colors.black },
      ${ borders.outer.thin.right } ${ colors.black };
    color: ${ colors.titleCopy };
    font-size: ${ fontSizes.xLarge };
    font-weight: ${ fontWeights.semiBold };
    height: ${ heights.large };
    line-height: 0.75;
    padding: 0 ${ space.small };
    width: ${ measures.small };
  `}

  ${media.xs`
    ${({ theme: { measures, space } }) => `
      width: calc(${ measures.small } - ${ space.medium });
    `}
  `}
`;

Title.propTypes = {};

Title.defaultProps = {};

export default Title;
