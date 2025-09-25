import { css, unsafeCSS } from "lit";
import { universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";

const typographyMap = {
  size: unsafeCSS("--typography-font-size"),
  family: unsafeCSS("--typography-font-family"),
  weight: unsafeCSS("--typography-font-weight"),
  lineHeight: unsafeCSS("--typography-line-height"),
  color: unsafeCSS("--typography-color"),
  highlight: unsafeCSS("--typography-color-highlight"),
};

export const setTypographyVariable = (key: keyof typeof typographyMap, variable: string) =>
  css`${typographyMap[key]}: var(${unsafeCSS(variable)});`;

export const defaultTypographyStyles = (
  defaultOverride?: { [K in keyof typeof typographyMap]?: string },
) => css`
font-size: var(${typographyMap.size});
font-family: var(${typographyMap.family});
font-weight: var(${typographyMap.weight});
line-height: var(${typographyMap.lineHeight});
color: var(${typographyMap.color});

${typographyMap.size}: var(${unsafeCSS(defaultOverride?.size ?? universal["text-body"].text.size.medium)});
${typographyMap.family}: var(${unsafeCSS(defaultOverride?.family ?? universal["text-body"].text.font.brand)});
${typographyMap.weight}: var(${unsafeCSS(defaultOverride?.weight ?? universal["text-body"].text.weight)});
${typographyMap.lineHeight}: var(${unsafeCSS(defaultOverride?.lineHeight ?? universal["text-body"].text["line-height"].brand.medium.short)});
${typographyMap.color}: var(${unsafeCSS(defaultOverride?.color ?? universal["text-body"].text.color.brand["tone-a"])});
${typographyMap.highlight}: var(${unsafeCSS(defaultOverride?.highlight ?? universal["text-display"].extended.text.color)});

em,
::slotted(em) {
  color: var(${typographyMap.highlight});
  font-style: normal;
}`;
