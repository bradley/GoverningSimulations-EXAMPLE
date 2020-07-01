import React, { useEffect, useRef } from "react";

/*
 * useConfirmUnload
 *
 * Hook that triggers browser unload confirmation alert when the page itself
 * will unload. Receives an optional function argument that may be used to check
 * if the unload confirmation should be displayed at the time of unload
 * determined by the return value of the function. If no function is supplied
 * confirmation will always take place by default.
 *
 */
export const useConfirmUnload = checkFunction => {
  const checkFunctionRef = useRef()

  useEffect(() => {
    checkFunctionRef.current = checkFunction;
  }, [checkFunction]);

  useEffect(() => {
    const confirmUnload = (e) => {
      const checkFunction = checkFunctionRef.current;

      let needsConfirmation = true;
      if (typeof checkFunction === "function") {
        needsConfirmation = checkFunction();
      }

      if (needsConfirmation) {
        (e || window.event).returnValue = true;
        return true;
      } else {
        return null;
      }
    };

    window.addEventListener("beforeunload", confirmUnload);

    return () => {
      window.removeEventListener("beforeunload", confirmUnload);
    };
  }, []);
};

export default {
  useConfirmUnload
};
