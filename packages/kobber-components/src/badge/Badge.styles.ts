import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import {
  BadgeClassNames,
  badgeSizes,
  badgeColorThemes,
  badgeColorVariants,
  BadgeColorVariant,
  BadgeSize,
} from "./Badge.core";
import { getTypographyStyles } from "../base/getTypographyStyles";

const badge = component.badge;

const createBadgeStyles = () => {
  return css`
    .${unsafeCSS("kobber-badge" satisfies BadgeClassNames)} {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      border-radius: var(${unsafeCSS(badge.border.radius)});
      background-color: var(--background-color);
      color: var(--color);
      gap: var(--gap);
      padding: var(--padding);
      font-size: var(--typography-font-size);
      font-family: var(--typography-font-family);
      font-weight: var(--typography-font-weight);
      font-style: var(--typography-font-style);
      font-stretch: var(--typography-font-stretch);
      line-height: var(--typography-line-height);

      ${getThemeStyles()}
      ${getSizeDependantStyles()}

      .${unsafeCSS("status-circle" satisfies BadgeClassNames)} {
        background-color: var(--status-circle-color);
        width: var(--status-circle-width);
        height: var(--status-circle-height);
        border-radius: 50%;
        flex-shrink: 0;
      }
    }
  `;
};

const getThemeStyles = () => {
  return css`
    ${unsafeCSS(
      badgeColorThemes
        .flatMap(colorTheme => {
          if (colorTheme === "concrete") {
            return `&[data-color-theme="${colorTheme}"] { ${getConcreteThemeMainVariantStyles()} }`;
          }
          return badgeSizes.flatMap(size =>
            badgeColorVariants.flatMap(
              colorVariant =>
                `&[data-color-variant="${colorVariant}"][data-color-theme="${colorTheme}"][data-size="${size}"] { 
                  ${getNotConcreteThemeVariantStyles(colorTheme, colorVariant)}
                  ${getNotConcreteThemeSupplementalVariantStyles(colorTheme, colorVariant, size)}
                }`,
            ),
          );
        })
        .join("\n"),
    )}
  `;
};

const getConcreteThemeMainVariantStyles = () => {
  return css`
    ${unsafeCSS(`
    --background-color: var(${unsafeCSS(badge.background.color.concrete.main)});
    --color: var(${unsafeCSS(badge.text.color.concrete.main)});
      `)}
  `;
};

const getNotConcreteThemeVariantStyles = (colorTheme: "aubergine" | "rettsdata", colorVariant: BadgeColorVariant) => {
  return css`
    ${unsafeCSS(`
      --background-color: var(${unsafeCSS(badge.background.color[colorTheme][colorVariant])});
      --color: var(${unsafeCSS(badge.text.color[colorTheme][colorVariant])});
      `)}
  `;
};

const getNotConcreteThemeSupplementalVariantStyles = (
  colorTheme: "aubergine" | "rettsdata",
  colorVariant: BadgeColorVariant,
  size: BadgeSize,
) => {
  if (colorVariant === "supplemental") {
    const circleStyles = component.badge["status-circle"];
    return css`
      ${unsafeCSS(`
        --status-circle-color: var(${unsafeCSS(circleStyles.color[colorTheme].supplemental)});
        --status-circle-width: var(${unsafeCSS(circleStyles.width[size])});
        --status-circle-height: var(${unsafeCSS(circleStyles.height[size])});
      `)}
    `;
  }
  return css``;
};

const getSizeDependantStyles = () => {
  return css`
    ${unsafeCSS(
      badgeSizes
        .flatMap(
          size => `&[data-size="${size}"] { 
            ${spacingStyles(size)} 
            ${getTypographyStyles("badge", "ui", size)}
        }`,
        )
        .join("\n"),
    )}
  `;
};

const spacingStyles = (size: BadgeSize) => {
  const containerStyles = component.badge;
  let paddingStyles = "0";

  switch (size) {
    case "medium":
      paddingStyles = `var(${unsafeCSS(containerStyles.padding.medium)})`;
      break;
    case "small":
      paddingStyles = `var(${unsafeCSS(containerStyles.padding.block.small)})
        var(${unsafeCSS(containerStyles.padding.inline.small)})`;
      break;
    default:
      return css``;
  }
  return css`
    ${unsafeCSS(`
      --padding: ${unsafeCSS(paddingStyles)};
      --gap: var(${unsafeCSS(containerStyles.gap[size])});
    `)}
  `;
};

export const badgeStyles = createBadgeStyles();
