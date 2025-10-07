import { css, unsafeCSS } from "lit";
import type { ButtonClassNames } from "../button-base/ButtonBase.core";
import { buttonColorVariables, getIconColor } from "../button-base/ButtonBase.styles";
import {
  themeButtonColorLevels,
  themeButtonColorThemes,
  themeButtonColorVariants,
  themeButtonTokens,
} from "./ThemeButton.core";

const createThemeButtonStyles = () => css`
.${unsafeCSS("kobber-button" satisfies ButtonClassNames)} {
  ${colorVariants()}
}`;

const colorVariants = () =>
  unsafeCSS(
    themeButtonColorThemes
      .flatMap(colorTheme =>
        themeButtonColorVariants.flatMap(colorVariant =>
          themeButtonColorLevels.flatMap(colorLevel => {
            const colorSelector = `[data-color="${colorTheme}"]`;
            const colorVariantSelector = `[data-color-variant="${colorVariant}"]`;
            const colorLevelSelector = `[data-color-level="${colorLevel}"]`;
            const borderColor =
              // @ts-expect-error
              themeButtonTokens.border.color[colorTheme]?.[colorLevel]?.[colorVariant];
            const backgroundColor =
              // @ts-expect-error
              themeButtonTokens.background.color[colorTheme]?.[colorLevel]?.[colorVariant];
            return `
&${colorSelector}${colorVariantSelector}${colorLevelSelector} {
${buttonColorVariables(getIconColor(colorTheme, colorVariant), backgroundColor?.fallback, backgroundColor?.hover, borderColor?.active)}
}`;
          }),
        ),
      )
      .join("\n"),
  );

export const themeButtonStyles = createThemeButtonStyles();
