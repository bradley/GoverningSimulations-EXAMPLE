/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from "react";
import Downshift, {
  ControllerStateAndHelpers,
  StateChangeOptions
} from "downshift";
import PropTypes from "prop-types";
import { Manager } from "react-popper";

import { event as eventUtils, KEY_CODES } from "@app-front-end/UI/Utils";

import { DropdownContext } from "../hooks/useDropdownContext";

export const REMOVE_ITEM_STATE_TYPE = "REMOVE_ITEM";

const Dropdown = props => {
  const {
    children,
    isOpen,
    selectedItem,
    highlightedIndex,
    inputValue,
    onSelect,
    onStateChange,
    onInputValueChange,
    downshiftProps
  } = props;

  // Refs used to handle custom keyboard nav.
  const itemIndexRef = useRef(0);
  const previousItemRef = useRef(undefined);
  const previousIndexRef = useRef(undefined);
  const nextItemsHashRef = useRef({});
  const containsMultiselectRef = useRef(false);

  // Used to inform Menu (Popper) that a full-width menu is needed.
  const popperReferenceElementRef = useRef(null);

  // Add additional keyboard nav to the basics provided by Downshift.
  const customGetInputProps = ({ onKeyDown, ...other }, downshift) => {
    return {
      onKeyDown: eventUtils.callAllEventHandlers(onKeyDown, e => {
        if (downshift.isOpen) {
          // Select previous item if available
          if (
            e.keyCode === KEY_CODES.LEFT &&
            previousIndexRef.current !== null &&
            previousIndexRef.current !== undefined &&
            !downshift.inputValue
          ) {
            e.preventDefault();
            e.stopPropagation();

            downshift.selectItemAtIndex(previousIndexRef.current);
          }

          // Select current next item if available.
          if (e.keyCode === KEY_CODES.RIGHT) {
            const nextItemIndexes = Object.values(nextItemsHashRef.current);

            if (nextItemIndexes.includes(downshift.highlightedIndex)) {
              e.preventDefault();
              e.stopPropagation();

              downshift.selectItemAtIndex(downshift.highlightedIndex);
            }
          }
        } else if (
          (e.keyCode === KEY_CODES.ENTER || e.keyCode === KEY_CODES.SPACE) &&
          !downshift.isOpen
        ) {
          e.preventDefault();
          e.stopPropagation();

          downshift.openMenu();
        }
      }),
      ...other
    };
  };

  const transformDownshift = ({
    getInputProps,
    getToggleButtonProps,
    ...downshift
  }) => {
    return {
      getInputProps: p => {
        return getInputProps(customGetInputProps(p, downshift));
      },
      getToggleButtonProps: p => {
        // The default aria-label provided by Downshift is invalid due to our
        // DOM structure.
        return getToggleButtonProps({ "aria-label": undefined, ...p });
      },
      ...downshift
    };
  };

  return (
    <Manager>
      <Downshift
        // NOTE: `suppressRefError` allows us to provide props through context.
        // https://github.com/downshift-js/downshift/issues/529
        suppressRefError
        isOpen={isOpen}
        highlightedIndex={highlightedIndex}
        selectedItem={selectedItem || null}
        inputValue={inputValue}
        onInputValueChange={onInputValueChange}
        onStateChange={(changes, stateAndHelpers) => {
          if (
            Object.prototype.hasOwnProperty.call(changes, "selectedItem") &&
            true//changes.selectedItem !== null
          ) {
            onSelect && onSelect(changes.selectedItem, stateAndHelpers);

            // Reset input value when item is selected.
            stateAndHelpers.setState({ inputValue: "" });
          }

          onStateChange && onStateChange(changes, stateAndHelpers);
        }}
        stateReducer={(_state, changes) => {
          // Set inputValue to an empty string during any event that updates the
          // inputValue.
          switch (changes.type) {
            case Downshift.stateChangeTypes.controlledPropUpdatedSelectedItem:
            case Downshift.stateChangeTypes.mouseUp:
            case Downshift.stateChangeTypes.keyDownSpaceButton:
            case Downshift.stateChangeTypes.blurButton:
              return {
                ...changes,
                inputValue: ""
              };
            case Downshift.stateChangeTypes.keyDownEnter:
            case Downshift.stateChangeTypes.clickItem:
            case REMOVE_ITEM_STATE_TYPE:
              return { ...changes, isOpen: false };
            default:
              return changes;
          }
        }}
        {...downshiftProps}
      >
        {
          downshift => (
            <DropdownContext.Provider
              value={{
                itemIndexRef,
                previousItemRef,
                previousIndexRef,
                nextItemsHashRef,
                popperReferenceElementRef,
                selectedItem,
                downshift: transformDownshift(downshift),
                containsMultiselectRef
              }}
            >
              { children }
            </DropdownContext.Provider>
          )
        }
      </Downshift>
    </Manager>
  );
};

Dropdown.propTypes = {
  downshiftProps: PropTypes.object,
  highlightedIndex: PropTypes.number,
  inputValue: PropTypes.string,
  isOpen: PropTypes.bool,
  onSelect: PropTypes.func,
  onStateChange: PropTypes.func,
  selectedItem: PropTypes.any
};

export default Dropdown;
