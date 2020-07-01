import React, { useEffect, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import { color } from "styled-system";

const ANIMATION_MS = 750;

const CONTAINER_SIZE = 100;
const CENTER = CONTAINER_SIZE / 2;
const STROKE_WIDTH = 10;
const RADIUS = (CONTAINER_SIZE / 2) - (STROKE_WIDTH / 2);
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const MAX_LINE_LENGTH = CIRCUMFERENCE / 2;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const mutate = keyframes`
  from {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: ${ MAX_LINE_LENGTH };
  }
`;

const SpinnerContainer = styled.svg.attrs(props => {
  const {
    size
  } = props;

  return {
    className: classNames("loader__spinner"),
    focusable: "false",
    height: size,
    viewBox: `0 0 ${ CONTAINER_SIZE } ${ CONTAINER_SIZE }`,
    width: size,
    xmlns: "http://www.w3.org/2000/svg"
  };
})`
  animation: ${ rotate } ${ ANIMATION_MS }ms linear infinite,
    ${ mutate } ${ ANIMATION_MS }ms linear infinite;
  animation-direction: normal, alternate;

  ${ color };
`;

const StyledSpinner = styled.circle.attrs(props => {
  const {} = props;

  return {
    cx: CENTER,
    cy: CENTER,
    r: RADIUS,
    fill: "none",
    stroke: "currentColor",
    strokeDasharray: `${ MAX_LINE_LENGTH } ${ CIRCUMFERENCE }`,
    strokeLinecap: "round",
    strokeWidth: STROKE_WIDTH
  };
})`
  transform-origin: center;
`;

const Spinner = React.forwardRef(({ delayMs, ...rest }, ref) => {
  const doDelay = delayMs && delayMs > 0;
  const [isDelayed, setIsDelayed] = useState(doDelay);

  useEffect(() => {
    let timeout;

    if (delayMs) {
      timeout = setTimeout(() => {
        setIsDelayed(false);
      }, delayMs);
    }

    return () => {
      clearTimeout(timeout);
    }
  }, [delayMs]);

  if (isDelayed) {
    return null;
  }

  return (
    <SpinnerContainer ref={ref} {...rest}>
      <StyledSpinner/>
    </SpinnerContainer>
  );
});

Spinner.propTypes = {
  delayMs: PropTypes.number,
  size: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired
};

Spinner.defaultProps = {
  delayMs: 0,
  size: 100
};

export default Spinner;
