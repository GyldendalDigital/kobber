import { compile, serialize, stringify } from "stylis";
import { ResponsiveCssValue } from "./responsiveCssValue";

type StyleValue = string | number | undefined | null | ResponsiveCssValue;

export interface Styles {
  [name: string]: StyleValue;
}

const isResponsiveValue = (value: StyleValue): value is ResponsiveCssValue => typeof value === "object";

const isStringValue = (value: StyleValue): value is string => typeof value === "string";

/**
 * Converts an object with CSS properties and values to a CSS string.
 *
 * @example
 * Example using media queries.
 *
 * ```ts
 * toCss(
 *   ".grid",
 *   {
 *     "grid-template-columns": {
 *       "(max-width: 639px)": "repeat(4, 1fr)",
 *       "(min-width: 640px)": "repeat(6, 1fr)"
 *     }
 *   })
 * ```
 */
export const toCss = (selector: string, styles: Readonly<Styles>) => {
  const styleArray = Object.entries(styles);

  const mediaQueries = getMediaQueries(styleArray);

  const css = `
    ${selector} {
      ${styleArray
        .filter(([, value]) => isStringValue(value))
        .map(([prop, value]) => (value ? `${toCssProp(prop)}: ${value}` : undefined))
        .join(";")}
    }

    ${mediaQueries
      .map(
        mediaQuery => `
        @media ${mediaQuery} {
          ${styleArray
            .map(getDeclarations(mediaQuery))
            .map(array => (array ? array.join(";") : ""))
            .filter(isValidDeclaration)
            .map(declaration => `${selector}{ ${declaration} }`)
            .join(";")}
        }`,
      )
      .join("")}

  `;
  const cssString = serialize(compile(css), stringify);
  return cssString;
};

const getDeclarations =
  (mediaQuery?: string) =>
  ([camelCasedCssProp, value]: [string, StyleValue]) => {
    const cssProp = toCssProp(camelCasedCssProp);
    if (mediaQuery && isResponsiveValue(value)) {
      return Object.entries(value)
        .filter(([nestedMediaQuery]) => nestedMediaQuery === mediaQuery)
        .map(([, cssValue]) => `${cssProp}: ${cssValue}`);
    } else if (value !== undefined && mediaQuery === undefined) {
      return [`${cssProp}: ${value}`];
    }
  };

const isValidDeclaration = (declaration: string | undefined) => declaration !== undefined && declaration !== "";

const getMediaQueries = (styleArray: [string, StyleValue][]) =>
  styleArray.reduce((array, [, value]) => {
    if (isResponsiveValue(value)) {
      const unique = Object.keys(value).filter(f => !array.includes(f));
      return [...array, ...unique];
    }
    return array;
  }, [] as string[]);

const toCssProp = (prop: string) =>
  prop.includes("-") ? prop : prop.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase();
