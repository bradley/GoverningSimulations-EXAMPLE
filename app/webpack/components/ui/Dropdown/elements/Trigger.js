/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useEffect, HTMLAttributes } from "react";
import PropTypes from "prop-types";
import { Reference } from "react-popper";

import useDropdownContext from "../hooks/useDropdownContext";
import StyledInput from "../views/Input";

// Applies state and a11y attributes to its children. Must be nested within a
// `<Dropdown>` component.
const Trigger = ({ children, refKey, ...triggerProps }) => {
  const {
    downshift: {
      getRootProps,
      getToggleButtonProps,
      getInputProps,
      isOpen
    }
  } = useDropdownContext();

  const hiddenInputRef = useRef(null);
  const triggerRef = useRef(null);
  const previousIsOpenRef = useRef(undefined);

  useEffect(() => {
    // Focus internal input when Menu is opened
    if (isOpen && !previousIsOpenRef.current) {
      hiddenInputRef.current && hiddenInputRef.current.focus();
    }

    // Focus trigger when Menu is closed
    if (!isOpen && previousIsOpenRef.current) {
      // TODO: Commenting this out for now, as we want triggers to lose focus
      // when the menu is closed, but unsure if this causes issues
      // accessibiltity issues. Investigate this if we get reports of any
      // problems around closing menus.
      // triggerRef.current && triggerRef.current.focus();
    }

    previousIsOpenRef.current = isOpen;
  }, [isOpen]);

  const renderChildren = popperRef => {
    // Destructuring the `ref` argument lets us share it with PopperJS
    const { ref: rootPropsRefCallback, ...rootProps } = getRootProps();

    // Clone immediate child and provide:
    //   - Necessary downshift props
    //   - Ref collector based on `refKey` prop
    return React.cloneElement(React.Children.only(children), {
      ...getToggleButtonProps({
        ...rootProps,
        // Trigger usages do no include an associated label
        "aria-labelledby": undefined,
        ...triggerProps,
        ...children.props
      }),
      [refKey]: childRef => {
        // Pass ref to popperJS for positioning
        popperRef(childRef);

        // Store ref locally to return focus on close
        triggerRef.current = childRef;

        // Pass ref to getRootProps()
        rootPropsRefCallback(childRef);
      }
    });
  };

  return (
    <Reference>
      {({ ref: popperReference }) => (
        <React.Fragment>
          { renderChildren(popperReference) }
          <StyledInput
            {
              ...getInputProps({
                readOnly: true,
                isHidden: true,
                tabIndex: -1,
                ref: hiddenInputRef,
                value: ""
              })
            }
          />
        </React.Fragment>
      )}
    </Reference>
  );
};

Trigger.propTypes = {
  children: PropTypes.any,
  refKey: PropTypes.string
};

Trigger.defaultProps = {
  refKey: "ref"
};

export default Trigger;
