import React, { useEffect, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const DelayedRender = React.forwardRef(({ children, delayMs, ...rest }, ref) => {
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
    <React.Fragment>
      { children }
    </React.Fragment>
  );
});

DelayedRender.propTypes = {
  delayMs: PropTypes.number,
};

DelayedRender.defaultProps = {
  delayMs: 0
};

export default DelayedRender;
