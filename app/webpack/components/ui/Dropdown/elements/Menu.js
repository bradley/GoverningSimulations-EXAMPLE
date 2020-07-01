/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import { Modifiers } from "popper.js";
import PropTypes from "prop-types";
import { Popper } from "react-popper";
import { DefaultTheme, ThemeProps } from "styled-components";

import useDropdownContext from "../hooks/useDropdownContext";
import { MenuContext } from "../hooks/useMenuContext";
import StyledMenu from "../views/Menu";
import StyledMenuWrapper from "../views/MenuWrapper";

const Menu = props => {
  const {
    popperModifiers,
    eventsEnabled,
    isAnimated,
    style: menuStyle,
    zIndex,
    children,
    ...otherProps
  } = props;

  const {
    itemIndexRef,
    previousIndexRef,
    nextItemsHashRef,
    popperReferenceElementRef,
    downshift: { isOpen, getMenuProps }
  } = useDropdownContext();

  const scheduleUpdateRef = useRef(undefined);

  useEffect(() => {
    // Recalculate popper placement while open to allow animations to complete.
    // This must be ran every render to allow for the number of items to change
    // and still be placed correctly.
    if (isOpen) {
      scheduleUpdateRef.current && scheduleUpdateRef.current();
    }
  });

  const [isVisible, setVisible] = useState(isOpen);

  useEffect(() => {
    let timeout;

    if (isOpen) {
      setVisible(true);
    } else if (isAnimated) {
      // Match the duration of the menu fade out transition.
      timeout = setTimeout(() => setVisible(false), 200);
    } else {
      setVisible(false);
    }

    return () => {
      clearTimeout(timeout);
    }
  }, [isOpen, isAnimated]);

  // Reset Downshift refs on every render
  itemIndexRef.current = 0;
  nextItemsHashRef.current = {};
  previousIndexRef.current = undefined;

  return (
    <MenuContext.Provider value={{ itemIndexRef }}>
      <Popper
        // Disable position updating on scroll events while menu is closed
        eventsEnabled={isOpen && eventsEnabled}
        modifiers={{
          preventOverflow: {
            padding: 0
          }
        }}
        strategy={"fixed"}
      >
        {
          ({ ref, style, scheduleUpdate }) => {
            const popperReferenceElement = popperReferenceElementRef.current;
            let computedStyle = menuStyle;

            scheduleUpdateRef.current = scheduleUpdate;

            // Calculate custom width if ref is provided from Select or
            // Autocomplete
            if (
              popperReferenceElement &&
              popperReferenceElement.getBoundingClientRect
            ) {
              computedStyle = {
                width: popperReferenceElement.getBoundingClientRect().width,
                ...menuStyle
              };
            }

            const menuProps = getMenuProps({
              isAnimated: isAnimated && (isOpen || isVisible),
              ...otherProps
            });

            return (
              <StyledMenuWrapper
                ref={isOpen ? ref : undefined}
                style={style}
                isHidden={!isOpen}
                isAnimated={menuProps.isAnimated}
                zIndex={zIndex}
              >
                <StyledMenu
                  style={computedStyle}
                  {...menuProps}
                >
                  {
                    (isOpen || isVisible) && children
                  }
                </StyledMenu>
              </StyledMenuWrapper>
            );
          }
        }
      </Popper>
    </MenuContext.Provider>
  );
};

Menu.propTypes = {
  eventsEnabled: PropTypes.bool,
  isAnimated: PropTypes.bool,
  popperModifiers: PropTypes.any,
  style: PropTypes.object,
  zIndex: PropTypes.number
};

Menu.defaultProps = {
  eventsEnabled: true,
  isAnimated: true,
  zIndex: 1000
};

export default Menu;
