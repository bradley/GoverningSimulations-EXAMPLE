import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";

import { Anchor } from "@app-front-end/UI/Button";
import { IconURL } from "@app-front-end/UI/Icon";
import { svg } from "@app-front-end/UI/Utils";

const ONE_PX_AS_REM = "0.0625rem";
const TWO_PX_AS_REM = "0.125rem";

const CountryAnchor = styled(Anchor).attrs(
  props => {
    const {
      className
    } = props;

    return {
      className: classNames(
        className,
        "death-value__country-specific-vsl__country-anchor"
      )
    };
  }
)`
  ${({ theme: { colors, fontWeights, lineHeights, space } }) => `
    font-weight: ${ fontWeights.semiBold };
    height: auto;
    margin-right: calc(${ space.small } - ${ TWO_PX_AS_REM });
    padding: 0;
    position: relative;

    &:after {
      background-image: url(${
        svg.replaceColors(IconURL.ChevronDown, { stroke: colors.copy })
      });
      background-position: left 0px bottom ${ TWO_PX_AS_REM };
      background-repeat: no-repeat;
      bottom: 0;
      content: "";
      height: ${ lineHeights.medium };
      position: absolute;
      width: ${ space.small }
    }
  `}
`;

CountryAnchor.propTypes = {};

CountryAnchor.defaultProps = {
  emphasized: true,
  href: "#"
};

export default CountryAnchor;
