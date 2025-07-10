import { component, universal } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import {
  BadgeIconClassName,
  BadgeIconIconClassName,
  badgeIconName,
  BadgeIconSize,
  badgeIconSizes,
  badgeIconThemes,
  badgeIconVariants,
} from "./BadgeIcon.core";

const containerStyles = component["badge-icon"];
const textStyles = universal.text.ui;

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
      font-size: var(--font-size);
      font-family: var(--font-family);
      font-weight: var(--font-weight);
      font-style: var(--font-style);
      font-stretch: var(--font-stretch);
      line-height: var(--line-height);

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
      badgeIconThemes
        .flatMap(theme => {
          return badgeIconSizes.flatMap(size =>
            badgeIconVariants.flatMap(
              variant =>
                `&[data-variant="${variant}"][data-theme="${theme}"][data-size="${size}"] { 
                  --color: var(${unsafeCSS(component["badge-icon"].text.color[theme][variant])});
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
            ${typographyStyles(size)}
            --padding: var(${unsafeCSS(containerStyles.padding.block[size])});
            --gap: var(${unsafeCSS(containerStyles.gap[size])});
          }`,
        )
        .join("\n"),
    )}
  `;
};

const typographyStyles = (size: BadgeIconSize) => {
  return css`
    --font-size: var(${unsafeCSS(textStyles.size.label[size])});
    --font-family: var(${unsafeCSS(textStyles["font-family"])});
    --font-weight: var(${unsafeCSS(textStyles.weight.label[size])});
    --font-style: normal;
    --line-height: normal;
  `;
};

export const badgeIconStyles = createBadgeIconStyles();
