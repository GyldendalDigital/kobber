import { component, universal } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import {
  BadgeIconClassNames,
  badgeIconName,
  badgeIconSizes,
  badgeIconThemes,
  badgeIconVariants,
} from "./BadgeIcon.core";

const containerStyles = component["badge-icon"];
const textStyles = universal.text.ui;

const createBadgeIconStyles = () => {
  return css`
    .${unsafeCSS(badgeIconName satisfies BadgeIconClassNames)} {
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

      .${unsafeCSS("icon" satisfies BadgeIconClassNames)} {
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
                `&.${variant}.${theme}.${size} { 
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
          size => `&.${size} { 
            ${typographyStyles(size)}
            --padding: var(${unsafeCSS(containerStyles.padding.block[size])});
            --gap: var(${unsafeCSS(containerStyles.gap[size])});
          }`,
        )
        .join("\n"),
    )}
  `;
};

const typographyStyles = () => {
  return css`
    --font-size: var(${unsafeCSS(textStyles.fontSize)});
    --font-family: var(${unsafeCSS(textStyles.fontFamily)});
    --font-weight: var(${unsafeCSS(textStyles.fontWeight)});
    --font-style: var(${unsafeCSS(textStyles.fontStyle)});
    --font-stretch: var(${unsafeCSS(textStyles.fontStretch)});
    --line-height: var(${unsafeCSS(textStyles.lineHeight)});
  `;
};

export const badgeIconStyles = createBadgeIconStyles();
