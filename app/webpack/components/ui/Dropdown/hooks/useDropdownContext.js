/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { createContext, useContext } from "react";
import { ControllerStateAndHelpers } from "downshift";

export const DropdownContext = createContext(undefined);

// Retrieve Dropdown component context.
const useDropdownContext = () => {
  const dropdownContext = useContext(DropdownContext);

  if (!dropdownContext) {
    throw new Error("This component must be rendered within a `Dropdown` component.");
  }

  return dropdownContext;
};

export default useDropdownContext;
