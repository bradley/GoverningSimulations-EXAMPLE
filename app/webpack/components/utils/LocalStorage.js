/*
 * getLocalStorageWithExpiry
 *
 * Utility function that fetches a value from localStorage, only returning the
 * value if it was found AND has not yet "expired". Note that this function
 * should always be used in tandem with `setLocalStorageWithExpiry`.
 *
 */
export const getLocalStorageWithExpiry = key => {
  const itemStr = localStorage.getItem(key);

  // If the item doesn't exist, return null.
  if (!itemStr) {
    return null
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  // Compare the expiry time of the item with the current time. Note that the
  // stored item needs an `expiry` value. Anything fetched with
  // `getLocalStorageWithExpiry` should have been set with
  // `setLocalStorageWithExpiry`.
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage and return null.
    localStorage.removeItem(key);

    return null;
  }

  return item.value;
};

/*
 * setLocalStorageWithExpiry
 *
 * Utility function that sets a value to localStorage with an expiry, determined
 * by the current user time with a "time to live" (in milliseconds) added to it.
 * Note that this function should always be used in tandem with
 * `getLocalStorageWithExpiry`.
 *
 */
export const setLocalStorageWithExpiry = (key, value, ttl=0) => {
  const now = new Date();

  // Note that `item` is an object which contains the original value as well as
  // the time when it's supposed to expire. Anything set with
  // `setLocalStorageWithExpiry` should be fetched with
  // `getLocalStorageWithExpiry`.
  const item = {
    value: value,
    expiry: now.getTime() + ttl
  };

  localStorage.setItem(key, JSON.stringify(item))
};

export default {
  getLocalStorageWithExpiry,
  setLocalStorageWithExpiry
};
