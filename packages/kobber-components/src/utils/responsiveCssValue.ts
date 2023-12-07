import { PropertyDeclaration } from "lit";

export type ResponsiveCssValue = string | Record<string, string>;

export const responsiveValueConverter: PropertyDeclaration["converter"] = {
  fromAttribute: (value: string) => {
    return value.trim().startsWith("{") ? JSON.parse(value) : value;
  },
};
