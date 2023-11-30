import { StyleInfo } from "lit/directives/style-map.js";

export const toCss = (styleInfo: Readonly<StyleInfo>) => {
  return Object.keys(styleInfo).reduce((style, prop) => {
    const value = styleInfo[prop];
    if (value == null) {
      return style;
    }
    prop = prop.includes("-")
      ? prop
      : prop.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase();
    return style + `${prop}:${value};`;
  }, "");
};
