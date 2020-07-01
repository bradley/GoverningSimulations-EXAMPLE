/*
 * callAllEventHandlers
 *
 * Borrowed from the Paypal/Downshift libraries utility and from Zendesk
 * Garden selection utilities.
 *
 * Original Paypal/Downshift License: MIT License
 * https://github.com/paypal/downshift/blob/master/src/utils.js
 *
 * Zendesk Garden License: Apache License, Version 2.0
 * https://github.com/zendeskgarden/react-components/blob/master/packages/selection/src/utils/composeEventHandlers.js
 *
 *
 * Calls all given event handlers in order until any one calls
 * `event.preventDefault`
 *
 */
export const callAllEventHandlers = (...handlers) => {
  return (event, ...args) => {
    return handlers.some(handler => {
      handler && handler(event, ...args);

      return event && event.defaultPrevented;
    });
  };
};

export default {
  callAllEventHandlers
};
