import { transformTypes } from "style-dictionary/enums";
import type { Transform } from "style-dictionary/types";
import { isStringArray, kobberFigmaPluginExtensionName } from "./scopeUtils";

/** Handles font weight tokens, converting them to a specific format */
export const fontWeightScopeHandlerTransform: Transform = {
  name: "fontWeightScopeHandler",
  type: transformTypes.attribute,
  filter: token => {
    if (!token.extensions || !token.extensions[kobberFigmaPluginExtensionName]) {
      return false;
    }

    const scopes = token.extensions[kobberFigmaPluginExtensionName].scopes;

    if (!isStringArray(scopes)) {
      return false;
    }

    return scopes.includes("FONT_WEIGHT");
  },
  transform: token => {
    token.type = "number";
    return token;
  },
};
