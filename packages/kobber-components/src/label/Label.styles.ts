import { component, typography } from "@gyldendal/kobber-base/themes/default/tokens.css-variables";
import { css, unsafeCSS } from "lit";
import { LabelClassNames, labelSizes, labelThemes, labelVariants } from "./Label.core";

const createLabelStyles = () => {
  const label = component.label;

  return css`
    .${unsafeCSS("kobber-label" satisfies LabelClassNames)} {
      display: inline-flex;
      align-items: center;
      justify-content: center;

      border-radius: var(${unsafeCSS(label.container.border.radius)});
      background-color: var(--background-color);
      gap: var(--gap);
      color: var(--color);
      padding: var(--padding);
      font-size: var(--font-size);

      ${labelVariableStyles()}
      ${typographyLabel()}

      &.${unsafeCSS("kobber-label--status-circle" satisfies LabelClassNames)} {
        background-color: #000000;
        width: 10px;
        height: 10px;
        border-radius: 50%;
      }
    }
  `;
};

const labelVariableStyles = () => {
  const variableClasses = labelThemes.flatMap(theme => {
    return labelVariants.flatMap(variant => {
      return labelSizes.flatMap(size => {
        const nestedClassNames = `&.${theme}.${variant}.${size}`;
        const label = component.label;
        const labelTypography = typography.primary;
        const labelMedium = labelTypography["label medium"].fontSize;
        const labelSmall = labelTypography["label small"].fontSize;

        // Todo: Prat med dag angående struktur for concrete.
        if (theme === "concrete") {
          return css`
          ${unsafeCSS(nestedClassNames)} {
            --background-color: var(${unsafeCSS(label.background.color.concrete)});
            --gap: var(${unsafeCSS(label.container.gap[size])});
            --color: var(${unsafeCSS(label.text.color.concrete)});
            --padding: var(
              ${unsafeCSS(size === "medium" ? label.container.padding.medium : label.container.padding.block.small)}
            );
            --font-size: var(${unsafeCSS(size === "medium" ? labelMedium : labelSmall)});
        `;
        }

        if (variant === "supplemental") {
          return css`
            ${unsafeCSS(nestedClassNames)} {
              --background-color: var(${unsafeCSS(label.background.color[theme].supplemental)});
              --gap: var(${unsafeCSS(label.container.gap[size])});
              --color: var(${unsafeCSS(label.text.color[theme].supplemental)});
              --padding: var(
                ${unsafeCSS(size === "medium" ? label.container.padding.medium : label.container.padding.block.small)}
              );
              --font-size: var(${unsafeCSS(size === "medium" ? labelMedium : labelSmall)});
            }
          `;
        }

        if (variant === "main") {
          return css`
            ${unsafeCSS(nestedClassNames)} {
              --background-color: var(${unsafeCSS(label.background.color[theme].main)});
              --gap: var(${unsafeCSS(label.container.gap[size])});
              --color: var(${unsafeCSS(label.text.color[theme].main)});
              --padding: var(
                ${unsafeCSS(size === "medium" ? label.container.padding.medium : label.container.padding.block.small)}
              );
              --font-size: var(${unsafeCSS(size === "medium" ? labelMedium : labelSmall)});
            }
          `;
        }
      });
    });
  });

  return unsafeCSS(variableClasses.join("\n"));
};

const typographyLabel = () => {
  const label = typography.ui["label medium - single line"];

  return css`
    font-size: var(${unsafeCSS(label.fontSize)});
    font-family: var(${unsafeCSS(label.fontFamily)});
    font-weight: var(${unsafeCSS(label.fontWeight)});
    font-style: var(${unsafeCSS(label.fontStyle)});
    font-stretch: var(${unsafeCSS(label.fontStretch)});
    line-height: normal;
  `;
};

export const labelStyles = createLabelStyles();
