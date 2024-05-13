import { PropertyDeclaration } from "lit";

type ResponsiveCssValueObject = Record<string, string>;

export type ResponsiveCssValue = string | ResponsiveCssValueObject;

export const responsiveValueConverter: PropertyDeclaration["converter"] = {
  fromAttribute: (value: string) => {
    return value.trim().startsWith("{") ? JSON.parse(value) : value;
  },
};

export type StyleValue = string | number | undefined | null | ResponsiveCssValue;

export const isResponsiveCssValue = (value: StyleValue): value is ResponsiveCssValue => typeof value === "object";

export const isResponsiveCssObjectValue = (value: StyleValue): value is ResponsiveCssValueObject =>
  isResponsiveCssValue(value) && typeof value !== "string";

export const isResponsiveCssStringValue = (value: StyleValue): value is string => typeof value === "string";

export const mapResponsiveCssValue = <ReturnType = string>(
  value: ResponsiveCssValue | undefined,
  callback: (cssValue: string) => ReturnType,
) => {
  if (isResponsiveCssObjectValue(value)) {
    const updated: Record<string, ReturnType> = {};
    for (const query in value) {
      const cssValue = value[query];
      updated[query] = callback(cssValue);
    }
    return updated;
  }
  if (isResponsiveCssStringValue(value)) {
    return callback(value);
  }
};
