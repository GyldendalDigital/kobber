import { component, typography } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import {
  BadgeIconClassNames,
  badgeIconName,
  BadgeIconSize,
  badgeIconSizes,
  BadgeIconTheme,
  badgeIconThemes,
  BadgeIconVariant,
  badgeIconVariants,
} from "./BadgeIcon.core";

/**
 * Kobber Badge Icon web-component
 */

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
  const containerStyles = component["badge-icon"].container;
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

const typographyStyles = (size: BadgeIconSize) => {
  let typographyStyles;
  switch (size) {
    case "medium":
      typographyStyles = typography.ui["label medium - single line"];
      break;
    case "small":
      typographyStyles = typography.ui["label small - single line"];
      break;
    default:
      return css``;
  }

  return css`
    --font-size: var(${unsafeCSS(typographyStyles.fontSize)});
    --font-family: var(${unsafeCSS(typographyStyles.fontFamily)});
    --font-weight: var(${unsafeCSS(typographyStyles.fontWeight)});
    --font-style: var(${unsafeCSS(typographyStyles.fontStyle)});
    --font-stretch: var(${unsafeCSS(typographyStyles.fontStretch)});
    --line-height: var(${unsafeCSS(typographyStyles.lineHeight)});
  `;
};

export const badgeIconStyles = createBadgeIconStyles();
