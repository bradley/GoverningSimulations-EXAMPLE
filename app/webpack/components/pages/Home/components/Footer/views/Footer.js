import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";

const Footer = styled.footer.attrs(
  props => ({
    className: classNames("home__footer")
  })
)`
  ${ ({ theme: { chrome, colors, space } }) => `
    align-items: center;
    bottom: 0;
    display: flex;
    height: ${ chrome.footerHeight };
    justify-content: flex-end;
    left: 0;
    padding: ${ space.small } ${ space.medium };
    position: absolute;
    right: 0;
    vertical-align: middle;

    > * {
      background: ${ colors.titleCopy };
      color: ${ colors.background };
      margin-right: -${ space.xSmall };
      padding: 0 ${ space.xSmall };
      vertical-align: middle;
    }
  `};
`;

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
