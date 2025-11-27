import { css, unsafeCSS } from "lit";
import type { ButtonClassNames } from "../button-base/ButtonBase.core";
import { buttonColorVariables, getIconColor } from "../button-base/ButtonBase.styles";
import { uiButtonColors, uiButtonColorVariants, uiButtonTokens } from "./UiButton.core";

const createUiButtonStyles = () => css`
.${unsafeCSS("kobber-button" satisfies ButtonClassNames)} {
  ${colorVariants()}
}`;

const colorVariants = () =>
  unsafeCSS(
    uiButtonColors
      .flatMap(color =>
        uiButtonColorVariants.flatMap(colorVariant => {
          const colorSelector = `[data-color="${color}"]`;
          const colorVariantSelector = `[data-color-variant="${colorVariant}"]`;
          const backgroundColor = uiButtonTokens.background.color[color]?.[colorVariant];
          return `
  &${colorSelector}${colorVariantSelector} {
   ${buttonColorVariables(getIconColor(color, colorVariant, "primary"), backgroundColor?.fallback, backgroundColor?.hover)}
  }`;
        }),
      )
      .join("\n"),
  );

export const uiButtonStyles = createUiButtonStyles();
