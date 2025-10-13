import type { TransformedTokens } from "style-dictionary";
import { propertyFormatNames } from "style-dictionary/enums";
import type { Format, TransformedToken } from "style-dictionary/types";
import { createPropertyFormatter } from "style-dictionary/utils";

export const esmWithCssVariableValues: Format = {
  name: "esm/css-variable-values",
  format: async ({ dictionary }) => {
    const formatProperty = createPropertyFormatter({
      outputReferences: false,
      dictionary,
      format: propertyFormatNames.css,
    });

    const transformedTokens =
      transformValuesToCssVariables(dictionary.tokens, formatProperty) ?? {};

    return Object.entries(transformedTokens)
      .map(([name, value]) => {
        return `export const ${name} = ${JSON.stringify(value, null, 2)};`;
      })
      .join("\n\n");
  },
};

export const transformValuesToCssVariables = (
  object: TransformedTokens,
  cssTransform: (token: TransformedToken) => string,
) => {
  if (object === null || object === undefined) {
    return null;
  }

  if (typeof object !== "object" || Array.isArray(object)) {
    return object;
  }

  if (Object.hasOwn(object, "value") && isToken(object)) {
    const firstSplitStringArray = cssTransform(object).split(":", 1)[0];
    if (firstSplitStringArray) {
      object.value = firstSplitStringArray.trim();
    }
    return object.value;
  }

  var transformed: TransformedTokens = {};

  for (const name in object) {
    if (Object.hasOwn(object, name)) {
      const value = transformValuesToCssVariables(object[name] as TransformedTokens, cssTransform);
      if (value) {
        transformed[name] = value;
      }
    }
  }

  return transformed;
};

const isToken = (token: TransformedTokens | TransformedToken): token is TransformedToken =>
  (token as TransformedToken)?.name !== undefined;
