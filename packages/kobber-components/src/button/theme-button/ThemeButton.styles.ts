import { css, unsafeCSS } from "lit";
import type { ButtonClassNames } from "../button-base/ButtonBase.core";
import { buttonColorVariables, getIconColor } from "../button-base/ButtonBase.styles";
import {
  themeButtonColorLevels,
  themeButtonColors,
  themeButtonColorVariants,
  themeButtonTokens,
} from "./ThemeButton.core";

const createThemeButtonStyles = () => css`
.${unsafeCSS("kobber-button" satisfies ButtonClassNames)} {
  ${colorVariants()}
}`;

const colorVariants = () =>
  unsafeCSS(
    themeButtonColors
      .flatMap(color =>
        themeButtonColorVariants.flatMap(colorVariant =>
          themeButtonColorLevels.flatMap(colorLevel => {
            const colorSelector = `[data-color="${color}"]`;
            const colorVariantSelector = `[data-color-variant="${colorVariant}"]`;
            const colorLevelSelector = `[data-color-level="${colorLevel}"]`;
            const backgroundColor =
              // @ts-expect-error
              themeButtonTokens.background.color[color]?.[colorLevel]?.[colorVariant];
            return `
  &${colorSelector}${colorVariantSelector}${colorLevelSelector} {
   ${buttonColorVariables(getIconColor(color, colorVariant, colorLevel), backgroundColor?.fallback, backgroundColor?.hover)}
  }`;
          }),
        ),
      )
      .join("\n"),
  );

export const themeButtonStyles = createThemeButtonStyles();
