import { component, typography } from "@gyldendal/kobber-base/themes/default/tokens.css-variables.js";
import { css, unsafeCSS } from "lit";
import { BadgeClassNames, badgeSizes, badgeThemes, badgeVariants, BadgeVariant, BadgeSize } from "./Badge.core";

const badge = component.badge;
const textStyles = universal.text.ui;

const createBadgeStyles = () => {
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
      badgeThemes
        .flatMap(theme => {
          if (theme === "concrete") {
            return `&[data-theme="${theme}"] { ${getConcreteThemeMainVariantStyles()} }`;
          }
          return badgeSizes.flatMap(size =>
            badgeVariants.flatMap(
              variant =>
                `&[data-variant="${variant}"][data-theme="${theme}"][data-size="${size}"] { 
                  ${getNotConcreteThemeVariantStyles(theme, variant)}
                  ${getNotConcreteThemeSupplementalVariantStyles(theme, variant, size)}
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

const getNotConcreteThemeVariantStyles = (theme: "aubergine" | "rettsdata", variant: BadgeVariant) => {
  return css`
    ${unsafeCSS(`
      --background-color: var(${unsafeCSS(badge.background.color[theme][variant])});
      --color: var(${unsafeCSS(badge.text.color[theme][variant])});
      `)}
  `;
};

const getNotConcreteThemeSupplementalVariantStyles = (
  theme: "aubergine" | "rettsdata",
  variant: BadgeVariant,
  size: BadgeSize,
) => {
  if (variant === "supplemental") {
    const circleStyles = component.badge["status-circle"];
    return css`
      ${unsafeCSS(`
        --status-circle-color: var(${unsafeCSS(circleStyles.color[theme].supplemental)});
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
            ${typographyStyles(size)}
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

const typographyStyles = (size: BadgeSize) => {
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

export const badgeStyles = createBadgeStyles();
