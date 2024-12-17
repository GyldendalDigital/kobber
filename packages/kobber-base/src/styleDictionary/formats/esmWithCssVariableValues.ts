import type { Format, TransformedToken } from "style-dictionary/types";
import { propertyFormatNames } from "style-dictionary/enums";
import { createPropertyFormatter } from "style-dictionary/utils";
import { TransformedTokens } from "style-dictionary";

export const esmWithCssVariableValues: Format = {
  name: "esm/css-variable-values",
  format: async ({ dictionary }) => {
    const formatProperty = createPropertyFormatter({
      outputReferences: false,
      dictionary,
      format: propertyFormatNames.css,
    });

    const transformedTokens = transformValuesToCssVariables(dictionary.tokens, formatProperty) ?? {};

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

  if (object.hasOwnProperty("value") && isToken(object)) {
    object.value = cssTransform(object).split(":", 1)[0].trim();
    return object.value;
  }

  var transformed: TransformedTokens = {};

  for (const name in object) {
    if (object.hasOwnProperty(name)) {
      const value = transformValuesToCssVariables(object[name], cssTransform);
      if (value) {
        transformed[name] = value;
      }
    }
  }

  return transformed;
};

const isToken = (token: TransformedTokens | TransformedToken): token is TransformedToken =>
  (token as TransformedToken)?.name !== undefined;
