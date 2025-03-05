import { component, typography } from "@gyldendal/kobber-base/themes/default/tokens.css-variables";
import { css, unsafeCSS } from "lit";
import { LabelClassNames, labelSizes, labelThemes, labelVariants } from "./Label.core";

const createLabelStyles = () => {
  const label = component.label;

  return css`
    .${unsafeCSS("kobber-label" satisfies LabelClassNames)} {
      --color: inherit;
      --background-color: #00000;
      height: 20px;
      padding: var(${unsafeCSS(label.container.padding.inline)});

      ${labelVariableStyles()}
      ${typographyLabel()}
    }
  `;
};

const labelVariableStyles = () => {
  const variableClasses = labelThemes.flatMap(theme => {
    return labelVariants.flatMap(variant => {
      return labelSizes.flatMap(size => {
        const nestedClassNames = `&.${theme}.${variant}.${size}`;

        if (theme === "aubergine") {
          if (variant === "main") {
            return css`
              ${unsafeCSS(nestedClassNames)} {
                --background-color: var(${unsafeCSS(component.label.background.color[theme][variant])});
              }
            `;
          }
        }

        if (size === "small") {
          return css``;
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
