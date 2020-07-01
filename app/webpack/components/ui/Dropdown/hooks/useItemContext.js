/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { createContext, useContext } from "react";

export const ItemContext = createContext(undefined);

// Retrieve Item component context
const useItemContext = () => {
  const itemContext = useContext(ItemContext);

  if (!itemContext) {
    throw new Error("This component must be rendered within an `Item` component.");
  }

  return itemContext;
};

export default useItemContext;
