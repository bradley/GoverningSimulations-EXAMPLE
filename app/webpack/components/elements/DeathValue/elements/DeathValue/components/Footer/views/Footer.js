import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";

const Footer = styled.div.attrs(
  props => {
    return {
      className: classNames("death-value__footer")
    };
  }
)`
  ${({ theme: { borders, colors, heights } }) => `
    box-shadow:
      ${ borders.outer.thin.top } ${ colors.black },
      ${ borders.thin.bottom } ${ colors.black },
      ${ borders.thin.left } ${ colors.black };
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-wrap: wrap;
  `}
`;

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
