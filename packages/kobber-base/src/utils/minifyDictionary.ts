import { TransformedTokens } from "style-dictionary";

export const minifyDictionary = (object: TransformedTokens) => {
  if (object === null || object === undefined) {
    return null;
  }

  if (typeof object !== "object" || Array.isArray(object)) {
    return object;
  }

  var transformed: TransformedTokens = {};

  if (object.hasOwnProperty("value")) {
    return object.value;
  } else {
    for (const name in object) {
      if (object.hasOwnProperty(name)) {
        const value = minifyDictionary(object[name]);
        if (value) {
          transformed[name] = value;
        }
      }
    }
  }

  return transformed;
};
