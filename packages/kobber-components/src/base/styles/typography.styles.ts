import { css, unsafeCSS } from "lit";
import { universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";

const typographyMap = {
  size: unsafeCSS("--typography-font-size"),
  family: unsafeCSS("--typography-font-family"),
  weight: unsafeCSS("--typography-font-weight"),
  height: unsafeCSS("--typography-line-height"),
  color: unsafeCSS("--typography-color"),
  highlight: unsafeCSS("--typography-color-highlight"),
};

export const setTypographyVariable = (key: keyof typeof typographyMap, variable: string) =>
  `${typographyMap[key]}: var(${variable});`;

export const defaultTypographyStyles = () => css`
font-size: var(${typographyMap.size});
font-family: var(${typographyMap.family});
font-weight: var(${typographyMap.weight});
line-height: var(${typographyMap.height});
color: var(${typographyMap.color});

${typographyMap.size}: var(${unsafeCSS(universal["text-body"].text.size.medium)});
${typographyMap.family}: var(${unsafeCSS(universal["text-body"].text.font.brand)});
${typographyMap.weight}: var(${unsafeCSS(universal["text-body"].text.weight)});
${typographyMap.height}: var(${unsafeCSS(universal["text-body"].text["line-height"].brand.medium.short)});
${typographyMap.color}: var(${unsafeCSS(universal["text-body"].text.color.brand["tone-a"])});
${typographyMap.highlight}: var(${unsafeCSS(universal["text-display-extended"].extended.text.color)});

em,
::slotted(em) {
  color: var(${typographyMap.highlight});
  font-style: normal;
}`;
