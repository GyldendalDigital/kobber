import { TransformedTokens } from "style-dictionary";

export const minifyDictionary = (obj: TransformedTokens) => {
  if (obj === null || obj === undefined) {
    return null;
  }

  if (typeof obj !== "object" || Array.isArray(obj)) {
    return obj;
  }

  var toRet: TransformedTokens = {};

  if (obj.hasOwnProperty("value")) {
    return obj.value;
  } else {
    for (var name in obj) {
      if (obj.hasOwnProperty(name)) {
        const value = minifyDictionary(obj[name]);
        if (value) {
          toRet[name] = value;
        }
      }
    }
  }

  return toRet;
};
