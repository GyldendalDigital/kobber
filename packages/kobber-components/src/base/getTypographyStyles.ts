import { universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";

let tokenComponentName: string;

/**
 *
 * @param textTokenClass In which part of universal.text tokens to look for styles. "ui" for interactive elements, "primary" or "secondary" for text.
 * @param size Should be specified only when there are different sizes to be used. And in checkbox, the general label has more sizes than the checkbox should have (as opposed to badge).
 * @returns
 */
export const getTypographyStyles = (
  componentName: string,
  textTokenClass: string,
  size?: string,
) => {
  tokenComponentName = mapComponentNameToTokenKeyName(componentName);
  // @ts-expect-error TS reacts for using string as json key.
  const textStyles = universal.text[textTokenClass]; //TODO: universal.text doesn't exist anymore. Proposed changes in getTypographyStyles2.ts

  const customPropertyValuesArray = getCustomProperties(textStyles, size);

  return makeCustomPropertiesString(customPropertyValuesArray);
};

const tokenKeysForComponents = ["label", "button", "input", "display", "heading", "title", "body"];
const tokenSizes = ["small", "medium", "large"];

const findCssPropertyNameFromTokenKeyName = (token: string) => {
  switch (true) {
    case token.includes("size"):
      return "font-size";
    case token.includes("weight"):
      return "font-weight";
    case token.includes("font-family"):
      return "font-family";
    case token.includes("line-height"):
      return "line-height";
  }
};

const mapComponentNameToTokenKeyName = (componentName: string) => {
  switch (componentName) {
    case "badge":
    case "badge-icon":
      return "label";
    case "text-wrapper":
      return "body";
    default:
      return componentName;
  }
};

const getValueByKey =
  <U extends keyof T, T extends object>(key: U) =>
  (styles: T) =>
    styles[key];

const getCustomProperties = (tokensObject: object, size?: string) => {
  const tokenKeys = Object.keys(tokensObject);
  return tokenKeys.flatMap((key, index): string | undefined => {
    const tokensOrString = getValueByKey<keyof typeof tokensObject, typeof tokensObject>(
      // @ts-expect-error TS insists the type is never. That wouldn't work, but this works.
      Object.keys(tokensObject)[index],
    )(tokensObject);

    if (tokenKeysForComponents.indexOf(key) > -1 && key !== tokenComponentName) {
      return;
    } else if (tokenSizes.indexOf(key) > -1 && key !== size) {
      return;
    }

    if (typeof tokensOrString !== "string") {
      // @ts-expect-error TS thinks result might be undefined. That's ok.
      return getCustomProperties(tokensOrString, size);
    }

    return tokensOrString;
  });
};

const makeCustomPropertiesString = (customPropertyValuesArray: (string | undefined)[]) => {
  const customPropertyValues = customPropertyValuesArray.filter(property => property !== undefined);

  if (customPropertyValues.length === 1) {
    return `\n --storybook-unused-style-content: "Unused combination";`;
  }

  return customPropertyValues.reduce((properties, property) => {
    const key = findCssPropertyNameFromTokenKeyName(property);

    return `${properties}\n --typography-${key}: var(${property});`;
  }, "");
};
