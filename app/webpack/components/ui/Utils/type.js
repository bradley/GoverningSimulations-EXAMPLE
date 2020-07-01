/*
 * hasType
 *
 * Borrowed from Zendesk Garden selection utilities.
 *
 * Zendesk Garden License: Apache License, Version 2.0
 * https://github.com/zendeskgarden/react-components/blob/master/packages/utilities/src/utils/hasType.js *
 *
 * Checks if component is the same type of instance as another component.
 *
 */
export const hasType = (a = {}, b) => {
  if (!a) return false;
  const { type: component = {} } = a;
  const { target, hasType } = component;

  let result;

  if (hasType) {
    result = hasType() === b;
  } else if (target && target.hasType) {
    result = target.hasType() === b;
  }

  return result;
};

export default {
  hasType
};
