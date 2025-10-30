/**
 * Generates a data attribute string for use in HTML elements.
 * @param key - The key of the data attribute.
 * @param value - The value of the data attribute.
 * @returns A string representing the data attribute.
 */
export const dataAttribute = <T extends {}>(key: keyof T, value: T[keyof T]) => {
  return `data-${String(key)}="${String(value)}"`;
};
