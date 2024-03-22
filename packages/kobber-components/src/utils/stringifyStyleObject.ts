import { compile, serialize, stringify } from "stylis";
import { ResponsiveCssValue } from "./responsiveCssValue";

type StyleValue = string | number | undefined | null | ResponsiveCssValue;

type CssDeclaration = [string, StyleValue];

type CssDeclarations = Record<string, StyleValue>;

/**
 * Converts an object with CSS properties and values to a CSS string using <a href="https://stylis.js.org/">stylis</a>.<br />
 * Useful for adding responsive properties to web components.
 *
 * @example
 * Example using media queries.
 *
 * ```ts
 * toCss(
 *   ".grid",
 *   {
 *     display: "grid",
 *     "grid-template-columns": {
 *       "(max-width: 639px)": "repeat(4, 1fr)",
 *       "(min-width: 640px)": "repeat(6, 1fr)"
 *     }
 *   })
 * ```
 *
 * Outputs a string which can then be rendered into a `<style>`-element:
 *
 * ```css
 * .grid {
 *   display: grid;
 * }
 *
 * @media (max-width: 639px) {
 *   .grid {
 *     grid-template-columns: repeat(2, 1fr);
 *   }
 * }
 *
 * @media (min-width: 640px) {
 *   .grid {
 *     grid-template-columns: repeat(4, 1fr);
 *   }
 * }
 * ```
 *
 * @example
 *
 * Can be used as responsive properties in Lit elements:
 *
 * ```ts
 * @customElement("my-grid")
 * export class MyGrid extends LitElement {
 *
 *   @property({ attribute: "grid-template-columns" })
 *   gridTemplateColumns?: string | Record<string, string>;
 *
 *   render() {
 *     return html`
 *       <style>
 *         ${stringifyStyleObject(":host", { gridTemplateColumns: this.gridTemplateColumns })}
 *       </style>
 *       <slot />
 *     `;
 *   }
 * }
 * ```
 *
 * ```html
 * <my-grid
 *   .gridTemplateColumns={{
 *     "(max-width: 639px)": "repeat(4, 1fr)",
 *     "(min-width: 640px)": "repeat(6, 1fr)",
 *   }}
 * ></my-grid>
 * ```
 */
export const stringifyStyleObject = (selector: string, styles: Readonly<CssDeclarations>) => {
  const styleArray: CssDeclaration[] = Object.entries(styles);
  const mediaQueries = getMediaQueries(styleArray);
  const css = `
    ${renderStringDeclarations(selector, styleArray)}
    ${mediaQueries.map(mediaQuery => renderMediaQuery(selector, mediaQuery, styleArray)).join("")}
  `;
  const cssString = serialize(compile(css), stringify);
  return cssString;
};

const renderStringDeclarations = (selector: string, styleArray: CssDeclaration[]) => `
${selector} {
  ${styleArray
    .filter(([, value]) => isStringValue(value))
    .map(([prop, value]) => (value ? `${toCssProp(prop)}: ${value}` : undefined))
    .join(";")}
}
`;

const renderMediaQuery = (selector: string, mediaQuery: string, styleArray: CssDeclaration[]) => `
@media ${mediaQuery} {
  ${styleArray
    .map(getDeclarations(mediaQuery))
    .map(array => (array ? array.join(";") : ""))
    .filter(isValidDeclaration)
    .map(declaration => `${selector}{ ${declaration} }`)
    .join(";")}
}
`;

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

const isResponsiveValue = (value: StyleValue): value is ResponsiveCssValue => typeof value === "object";

const isStringValue = (value: StyleValue): value is string => typeof value === "string";

const isValidDeclaration = (declaration: string | undefined) => declaration !== undefined && declaration !== "";

const getMediaQueries = (styleArray: CssDeclaration[]) =>
  styleArray.reduce((array, [, value]) => {
    if (isResponsiveValue(value)) {
      const unique = Object.keys(value).filter(f => !array.includes(f));
      return [...array, ...unique];
    }
    return array;
  }, [] as string[]);

const toCssProp = (prop: string) =>
  prop.includes("-") ? prop : prop.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase();
