import { css, unsafeCSS } from "lit";
import { component, typography } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";

export const headingName = "kobber-heading";

/**
 * TODO variants
 * levels
 * colors
 * fonts
 */
const createHeadingStyles = () => {
  const heading = component.article.heading;

  return css`
    .${unsafeCSS(headingName)} {
      color: var(${unsafeCSS(heading.text.color.h1.base)});
      ${typographyLarge()}
    }
  `;
};

const typographyLarge = () => {
  const heading = typography.primary["display small"];

  return css`
    font-size: var(${unsafeCSS(heading.fontSize)});
    font-family: var(${unsafeCSS(heading.fontFamily)});
    font-weight: var(${unsafeCSS(heading.fontWeight)});
    font-style: var(${unsafeCSS(heading.fontStyle)});
    font-stretch: var(${unsafeCSS(heading.fontStretch)});
    line-height: var(${unsafeCSS(heading.lineHeight)});
  `;
};

export const headingStyles = createHeadingStyles();
