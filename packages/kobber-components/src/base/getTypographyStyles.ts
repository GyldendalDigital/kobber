import { universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";

/**
 * Get bundled typograpy for each universal text token class.
 */
export const getTypographyStyles = (
  componentName: keyof typeof universal,
  size: keyof (typeof universal)["text-label"]["text"]["size"] = "medium",
) => {
  // defaults
  const typographyStyles = {
    size: universal["text-body"].text.size.medium,
    family: universal["text-body"].text.font.brand,
    weight: universal["text-body"].text.weight,
    lineHeight: universal["text-body"].text["line-height"].brand.medium,
  };

  switch (componentName) {
    case "text-label":
    case "text-body":
      typographyStyles.size = universal[componentName].text.size[size];
      break;
    case "text-lead":
      typographyStyles.size = universal[componentName].text.size;
      break;
    case "text-heading":
    case "text-title":
    case "text-display":
      typographyStyles.size = universal[componentName].text.size[size === "small" ? "medium" : size];
      break;
  }

  return css`
    --typography-font-size: var(${unsafeCSS(typographyStyles.size)});
    --typography-font-family: var(${unsafeCSS(typographyStyles.family)});
    --typography-font-weight: var(${unsafeCSS(typographyStyles.weight)});
    --typography-line-height: var(${unsafeCSS(typographyStyles.lineHeight)});
  `;
};
