import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styled from "styled-components";

export const WEIGHTS = {
  THIN: "thin",               // 100
  EXTRA_LIGHT: "extra-light", // 200
  LIGHT: "light",             // 300
  NORMAL: "normal",           // 400
  MEDIUM: "medium",           // 500
  SEMI_BOLD: "semi-bold",     // 600
  BOLD: "bold"                // 700
};

const Text = styled.div.attrs(
  props => {
    const {
      emphasize,
      subtle,
      truncate,
      weight
    } = props;

    return {
      className: classNames("text", {
          "text--emphasize": emphasize,
          "text--subtle": subtle,
          "text--truncated": truncate,

          "text--weight-thin": weight == WEIGHTS.THIN,
          "text--weight-extra-light": weight == WEIGHTS.EXTRA_LIGHT,
          "text--weight-light": weight == WEIGHTS.LIGHT,
          "text--weight-normal": weight == WEIGHTS.NORMAL,
          "text--weight-medium": weight == WEIGHTS.MEDIUM,
          "text--weight-semi-bold": weight == WEIGHTS.SEMI_BOLD,
          "text--weight-bold": weight == WEIGHTS.BOLD,
        })
    };
  }
)`
  ${({ theme: { colors, fontWeights } }) => `
    &.text--emphasize {
      font-style: italic;
    }

    &.text--subtle {
      color: ${ colors.grey500 };
    }

    &.text--truncated {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &.text--weight-thin {
      font-weight: ${ fontWeights.thin };
    }

    &.text--weight-extra-light {
      font-weight: ${ fontWeights.extraLight };
    }

    &.text--weight-light {
      font-weight: ${ fontWeights.light };
    }

    &.text--weight-normal {
      font-weight: ${ fontWeights.normal };
    }

    &.text--weight-medium {
      font-weight: ${ fontWeights.medium };
    }

    &.text--weight-semi-bold {
      font-weight: ${ fontWeights.semiBold };
    }

    &.text--weight-bold {
      font-weight: ${ fontWeights.bold };
    }
  `}
`;

Text.propTypes = {
  subtle: PropTypes.bool,
  truncate: PropTypes.bool,
  weight: PropTypes.oneOf(
    [
      WEIGHTS.THIN,
      WEIGHTS.EXTRA_LIGHT,
      WEIGHTS.LIGHT,
      WEIGHTS.NORMAL,
      WEIGHTS.MEDIUM,
      WEIGHTS.SEMI_BOLD,
      WEIGHTS.BOLD
    ]
  )
};

Text.defaultProps = {
  subtle: false,
  truncate: false,
  weight: WEIGHTS.NORMAL
};

export default Text;
