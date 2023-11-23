const capitalizeFirstCharacter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const toCamelCase = (strings: string[]) =>
  strings
    .map((string, index) =>
      index === 0 ? string : capitalizeFirstCharacter(string)
    )
    .join("");

export const trimLineBreaks = (string: string) =>
  string.replace(/^\s+|\s+$/g, "");
