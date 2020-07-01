/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";

import useDropdownContext from "../../hooks/useDropdownContext";
import useMenuContext from "../../hooks/useMenuContext";
import StyledItem from "../../views/Items/Item";
import StyledSelected from "../../views/Items/Selected";

const Item = React.forwardRef((props, ref) => {
  const {
    children,
    value
  } = props;

  const {
    downshift: {
      getItemProps,
      highlightedIndex,
      isOpen,
      itemToString,
      selectedItem,
      setHighlightedIndex
    }
  } = useDropdownContext();

  const { itemIndexRef } = useMenuContext();

  if (value === undefined || value === null) {
    throw new Error("All Item components require a `value` prop");
  }

  const currentIndex = itemIndexRef.current;
  const isFocused = highlightedIndex === currentIndex;

  let isSelected;
  // Calculate selection if provided value is an `object`.
  if (value) {
    isSelected = itemToString(selectedItem) === itemToString(value);
  } else {
    isSelected = false;
  }

  useEffect(() => {
    // Highlight selected item when is open.
    if (isOpen && isSelected) {
      setHighlightedIndex(currentIndex);
    }
  }, [
    currentIndex,
    isOpen,
    isSelected,
    setHighlightedIndex
  ]);

  itemIndexRef.current++;

  const itemProps = getItemProps({
    item: value,
    isFocused,
    isSelected,
    ref,
    ...props
  });

  // Note: Use of useMemo drastically improves performance for big lists here.
  // but be careful you're including checks for everything necessary to allow
  // re-render.
  return useMemo(() => {
    return (
      <StyledItem { ...itemProps }>
        {
          isSelected && (
            <StyledSelected
              isVisible={isSelected}
            />
          )
        }
        { children }
      </StyledItem>
    )
  }, [children, isFocused, isSelected, ref, value, props]);
});

Item.displayName = "Item";

Item.propTypes = {
  value: PropTypes.any
};

export default Item;
