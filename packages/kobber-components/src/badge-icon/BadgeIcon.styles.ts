import { component } from "@gyldendal/kobber-base/themes/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import {
  BadgeIconClassName,
  BadgeIconIconClassName,
  badgeIconName,
  badgeIconSizes,
  badgeIconColorThemes,
  badgeIconColorVariants,
} from "./BadgeIcon.core";
import { getTypographyStyles } from "../base/getTypographyStyles";

const containerStyles = component["badge-icon"];

const createBadgeIconStyles = () => {
  return css`
    .${unsafeCSS(badgeIconName satisfies BadgeIconClassName)} {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color: transparent;

      gap: var(--gap);
      color: var(--color);
      padding: var(--padding);

      font-size: var(--typography-font-size);
      font-family: var(--typography-font-family);
      font-weight: var(--typography-font-weight);
      font-style: var(--typography-font-style);
      font-stretch: var(--typography-font-stretch);
      line-height: var(--typography-line-height);

      ${getThemeStyles()}
      ${getSizeDependantStyles()}

      .${unsafeCSS("icon" satisfies BadgeIconIconClassName)} {
        width: var(--icon-width);
        height: var(--icon-height);
      }
    }
  `;
};

const getThemeStyles = () => {
  return css`
    ${unsafeCSS(
      badgeIconColorThemes
        .flatMap(colorTheme => {
          return badgeIconSizes.flatMap(size =>
            badgeIconColorVariants.flatMap(
              colorVariant =>
                `&[data-color-variant="${String(colorVariant)}"][data-color-theme="${String(colorTheme)}"][data-size="${String(size)}"] { 
                  --color: var(${unsafeCSS(component["badge-icon"].text.color[colorTheme][colorVariant])});
                }`,
            ),
          );
        })
        .join("\n"),
    )}
  `;
};

const getSizeDependantStyles = () => {
  return css`
    ${unsafeCSS(
      badgeIconSizes
        .flatMap(
          size => `&[data-size="${size}"] { 
            ${getTypographyStyles("badge-icon", "ui", size)}
            --padding: var(${unsafeCSS(containerStyles.padding.block[size])});
            --gap: var(${unsafeCSS(containerStyles.gap[size])});
          }`,
        )
        .join("\n"),
    )}
  `;
};

export const badgeIconStyles = createBadgeIconStyles();
