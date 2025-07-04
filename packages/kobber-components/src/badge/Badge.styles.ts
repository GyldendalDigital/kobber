import { component, typography } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import { BadgeClassNames, BadgeProps, badgeSizes, badgeThemes, badgeVariants } from "./Badge.core";

const createBadgeStyles = () => {
  const badge = component.badge;

  return css`
    .${unsafeCSS("kobber-badge" satisfies BadgeClassNames)} {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      border-radius: var(${unsafeCSS(badge.border.radius)});
      background-color: var(--background-color);
      gap: var(--gap);
      color: var(--color);
      padding: var(--padding);
      font-size: var(--font-size);
      font-family: var(--font-family);
      font-weight: var(--font-weight);
      font-style: var(--font-style);
      font-stretch: var(--font-stretch);
      line-height: var(--line-height);

      ${badgeVariableStyles()}

      .${unsafeCSS("status-circle" satisfies BadgeClassNames)} {
        background-color: var(--status-circle-color, transparent);
        width: var(--status-circle-width);
        height: var(--status-circle-height);
        border-radius: 50%;
        flex-shrink: 0;
      }
    }
  `;
};

const getPaddingStyles = (size: BadgeProps["size"]) => {
  const badge = component.badge;

  if (size === "medium") {
    return css`
      --padding: var(${unsafeCSS(badge.padding.medium)}, 8px);
    `;
  }

  return css`
    --padding: var(${unsafeCSS(badge.padding.block.small)}, 4px) var(${unsafeCSS(badge.padding.inline.small)}, 8px);
  `;
};

const badgeVariableStyles = () => {
  const variableClasses = badgeThemes.flatMap(theme => {
    return badgeVariants.flatMap(variant => {
      return badgeSizes.flatMap(size => {
        const nestedClassNames = `&.${theme}.${variant}.${size}`;
        const badge = component.badge;
        const typographySmall = typography.ui["label small - single line"];
        const typographyMedium = typography.ui["label medium - single line"];

        return css`
          ${unsafeCSS(nestedClassNames)} {
            --background-color: var(
              ${unsafeCSS(
                theme === "concrete" ? badge.background.color.concrete : badge.background.color[theme][variant],
              )}
            );
            --gap: var(${unsafeCSS(badge.gap[size])});
            --color: var(
              ${unsafeCSS(theme === "concrete" ? badge.text.color.concrete : badge.text.color[theme][variant])}
            );
            ${getPaddingStyles(size)};
            --status-circle-color: var(
              ${unsafeCSS(
                theme === "concrete" || variant === "main" ? null : badge["status-circle"].color[theme].supplemental,
              )}
            );
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
            --status-circle-width: var(${unsafeCSS(badge["status-circle"].width[size])});
            --status-circle-height: var(${unsafeCSS(badge["status-circle"].height[size])});
          }
        `;
      });
    });
  });

  return unsafeCSS(variableClasses.join("\n"));
};

export const badgeStyles = createBadgeStyles();
