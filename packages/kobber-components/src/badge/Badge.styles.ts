import { component, universal } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import {
  type BadgeClassNames,
  badgeSizes,
  badgeColorThemes,
  badgeColorVariants,
  type BadgeColorVariant,
  type BadgeSize,
  type BadgeColorTheme,
} from "./Badge.core";
import { getTypographyStyles } from "../base/getTypographyStyles2";

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

      ${getThemeSizeVariantStyles()}
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

const getThemeSizeVariantStyles = () => {
  return css`
    ${unsafeCSS(
      badgeColorThemes
        .flatMap(colorTheme => {
          return badgeSizes.flatMap(size =>
            badgeColorVariants.flatMap(
              colorVariant =>
                `&[data-color-variant="${colorVariant}"][data-color-theme="${colorTheme}"][data-size="${size}"] { 
                  ${getThemeVariantStyles(colorTheme, colorVariant)}

                  ${
                    colorTheme === "brand"
                      ? getStatusCircleStyles("brand", colorVariant, size)
                      : colorTheme === "rettsdata"
                        ? getStatusCircleStyles(colorTheme, colorVariant, size)
                        : ""
                  }
                }`,
            ),
          );
        })
        .join("\n"),
    )}
  `;
};

const getThemeVariantStyles = (colorTheme: BadgeColorTheme, colorVariant: BadgeColorVariant) => {
  if (colorTheme === "neutral") {
    return css`
    ${unsafeCSS(`
      --background-color: var(${unsafeCSS(badge.background.color.neutral["tone-b"])});
      --color: var(${unsafeCSS(universal["text-label"].text.color.neutral["tone-a"])});
      `)}
  `;
  }
  const textColorVariant = colorVariant === "tone-a" ? "tone-b" : "tone-a";

  return css`
    ${unsafeCSS(`
      --background-color: var(${unsafeCSS(badge.background.color[colorTheme][colorVariant])});
      --color: var(${unsafeCSS(universal["text-label"].text.color[colorTheme][textColorVariant])});
      `)}
  `;
};

const getStatusCircleStyles = (
  colorTheme: "brand" | "rettsdata",
  colorVariant: BadgeColorVariant,
  size: BadgeSize,
) => {
  const circleStyles = component.badge["status-circle"];

  if (colorTheme === "brand" && colorVariant === "tone-a") {
    return css`
      ${unsafeCSS(`
        --status-circle-color: var(${unsafeCSS(circleStyles.background.color.brand["tone-a"])});
        --status-circle-width: var(${unsafeCSS(circleStyles.size.width[size])});
        --status-circle-height: var(${unsafeCSS(circleStyles.size.height[size])});
      `)}
    `;
  }
  if (colorTheme === "rettsdata" && colorVariant === "tone-b") {
    return css`
      ${unsafeCSS(`
        --status-circle-color: var(${unsafeCSS(circleStyles.background.color.rettsdata["tone-b"])});
        --status-circle-width: var(${unsafeCSS(circleStyles.size.width[size])});
        --status-circle-height: var(${unsafeCSS(circleStyles.size.height[size])});
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
            ${getTypographyStyles("text-label", size)}
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
