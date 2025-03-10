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
      font-family: var(--font-family);
      font-weight: var(--font-weight);
      font-style: var(--font-style);
      font-stretch: var(--font-stretch);
      line-height: var(--line-height);

      ${labelVariableStyles()}

      .${unsafeCSS("status-circle" satisfies LabelClassNames)} {
        background-color: var(--status-circle-color, transparent);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        display: inline-block;
      }
    }
  `;
};

const getPaddingStyles = (size: string) => {
  const label = component.label;
  return size === "medium"
    ? css`
        --padding: var(${unsafeCSS(label.container.padding.medium)}, 8px);
      `
    : css`
        --padding: var(${unsafeCSS(label.container.padding.block.small)}, 4px)
          var(${unsafeCSS(label.container.padding.inline.small)}, 8px);
      `;
};

const labelVariableStyles = () => {
  const variableClasses = labelThemes.flatMap(theme => {
    return labelVariants.flatMap(variant => {
      return labelSizes.flatMap(size => {
        const nestedClassNames = `&.${theme}.${variant}.${size}`;
        const label = component.label;
        const typographySmall = typography.ui["label small - single line"];
        const typographyMedium = typography.ui["label medium - single line"];

        return css`
          ${unsafeCSS(nestedClassNames)} {
            --background-color: var(
              ${unsafeCSS(
                theme === "concrete" ? label.background.color.concrete : label.background.color[theme][variant],
              )}
            );
            --gap: var(${unsafeCSS(label.container.gap[size])});
            --color: var(
              ${unsafeCSS(theme === "concrete" ? label.text.color.concrete : label.text.color[theme][variant])}
            );
            ${getPaddingStyles(size)};
            --status-circle-color: var(
              ${unsafeCSS(
                theme === "concrete" || variant === "main" ? null : label["status-circle"].color[theme].supplemental,
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
          }
        `;
      });
    });
  });

  return unsafeCSS(variableClasses.join("\n"));
};

export const labelStyles = createLabelStyles();
