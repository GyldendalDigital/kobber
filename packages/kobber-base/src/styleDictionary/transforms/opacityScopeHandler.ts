import { transformTypes } from "style-dictionary/enums";
import type { Transform } from "style-dictionary/types";
import { isStringArray, kobberFigmaPluginExtensionName } from "./scopeUtils";

/** Handles opacity tokens, converting them to a specific format */
export const opacityScopeHandlerTransform: Transform = {
  name: "opacityScopeHandler",
  type: transformTypes.attribute,
  filter: token => {
    if (!token.extensions || !token.extensions[kobberFigmaPluginExtensionName]) {
      return false;
    }

    const scopes = token.extensions[kobberFigmaPluginExtensionName].scopes;

    if (!isStringArray(scopes)) {
      return false;
    }

    return scopes.includes("OPACITY");
  },
  transform: token => {
    token.type = "number";
    if (typeof token.value === "number") {
      token.value = token.value / 100;
    }
    return token;
  },
};
