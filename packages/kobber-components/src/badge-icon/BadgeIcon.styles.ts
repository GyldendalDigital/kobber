import { component, typography } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import {
  BadgeIconClassNames,
  badgeIconName,
  BadgeIconProps,
  badgeIconSizes,
  badgeIconThemes,
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

      ${badgeIconVariableStyles()}

      .${unsafeCSS("kobber-badge-icon--icon" satisfies BadgeIconClassNames)} {
        width: var(--icon-width);
        height: var(--icon-height);
      }
    }
  `;
};

const getPaddingStyles = (size: BadgeIconProps["size"]) => {
  const badgeIcon = component["badge-icon"];

  return size === "medium"
    ? css`
        --padding: var(${unsafeCSS(badgeIcon.padding.block.medium)}, 8px);
      `
    : css`
        --padding: var(${unsafeCSS(badgeIcon.padding.block.small)}, 4px)
          var(${unsafeCSS(badgeIcon.padding.block.small)}, 8px);
      `;
};

const badgeIconVariableStyles = () => {
  const variableClasses = badgeIconThemes.flatMap(theme => {
    return badgeIconVariants.flatMap(variant => {
      return badgeIconSizes.flatMap(size => {
        const nestedClassNames = `&.${theme}.${variant}.${size}`;
        const badgeIcon = component["badge-icon"];
        const typographyMedium = typography.ui["label medium - single line"];
        const typographySmall = typography.ui["label small - single line"];

        return css`
          ${unsafeCSS(nestedClassNames)} {
            --gap: var(${unsafeCSS(badgeIcon.gap[size])});
            --color: var(${unsafeCSS(badgeIcon.text.color[theme][variant])});
            ${getPaddingStyles(size)};
            --font-size: var(${unsafeCSS(size === "medium" ? typographyMedium.fontSize : typographySmall.fontSize)});
            --font-family: var(
              ${unsafeCSS(size === "medium" ? typographyMedium.fontFamily : typographySmall.fontFamily)}
            );
            --font-weight: var(
              ${unsafeCSS(size === "medium" ? typographyMedium.fontWeight : typographySmall.fontWeight)}
            );
            --font-style: var(${unsafeCSS(size === "medium" ? typographyMedium.fontStyle : typographySmall.fontStyle)});
            --font-stretch: var(
              ${unsafeCSS(size === "medium" ? typographyMedium.fontStretch : typographySmall.fontStretch)}
            );
            --line-height: var(
              ${unsafeCSS(size === "medium" ? typographyMedium.lineHeight : typographySmall.lineHeight)}
            );

            .${unsafeCSS("kobber-badge-icon--icon" satisfies BadgeIconClassNames)} {
              --icon-width: var(${unsafeCSS(size === "medium" ? "16px" : "14px")});
              --icon-height: var(${unsafeCSS(size === "medium" ? "16px" : "14px")});
            }
          }
        `;
      });
    });
  });

  return unsafeCSS(variableClasses.join("\n"));
};

export const badgeIconStyles = createBadgeIconStyles();
