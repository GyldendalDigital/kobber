import { css, unsafeCSS } from "lit";
import { getIconColor, type ButtonClassNames } from "../button-base/ButtonBase.core";
import { uiButtonColorThemes, uiButtonColorVariants, uiButtonTokens } from "./UiButton.core";
import { buttonColorVariables } from "../button-base/ButtonBase.styles";

const createUiButtonStyles = () => css`
.${unsafeCSS("kobber-button" satisfies ButtonClassNames)} {
  ${colorVariants()}
}`;

const colorVariants = () =>
  unsafeCSS(
    uiButtonColorThemes
      .flatMap(colorTheme =>
        uiButtonColorVariants.flatMap(colorVariant => {
          const colorSelector = `[data-color="${colorTheme}"]`;
          const colorVariantSelector = `[data-color-variant="${colorVariant}"]`;
          const backgroundColor = uiButtonTokens.background.color[colorTheme]?.[colorVariant];
          return `
&${colorSelector}${colorVariantSelector} {
${buttonColorVariables(getIconColor(colorTheme, colorVariant), backgroundColor?.fallback, backgroundColor?.hover)}
}`;
        }),
      )
      .join("\n"),
  );

export const uiButtonStyles = createUiButtonStyles();
