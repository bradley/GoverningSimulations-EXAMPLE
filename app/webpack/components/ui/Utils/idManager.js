let idCounter = 0;

export const generateId = prefix => {
  return `${prefix}-${idCounter++}`;
};

export const setIdCounter = num => {
  idCounter = num;
};

export default {
  generateId,
  setIdCounter
};
