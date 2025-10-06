import { css, unsafeCSS } from "lit";
import { getIconColor, type ButtonClassNames } from "../button-base/ButtonBase.core";
import {
  defaultButtonColorLevels,
  defaultButtonColorThemes,
  defaultButtonColorVariants,
  defaultButtonTokens,
} from "./Button.core";
import { buttonColorVariables } from "../button-base/ButtonBase.styles";

const createDefaultButtonStyles = () => css`
.${unsafeCSS("kobber-button" satisfies ButtonClassNames)} {
  ${colorVariants()}
}`;

const colorVariants = () =>
  unsafeCSS(
    defaultButtonColorThemes
      .flatMap(colorTheme =>
        defaultButtonColorVariants.flatMap(colorVariant =>
          defaultButtonColorLevels.flatMap(colorLevel => {
            const colorSelector = `[data-color="${colorTheme}"]`;
            const colorVariantSelector = `[data-color-variant="${colorVariant}"]`;
            const colorLevelSelector = `[data-color-level="${colorLevel}"]`;
            const borderColor =
              // @ts-expect-error
              defaultButtonTokens.border.color[colorTheme]?.[colorLevel]?.[colorVariant];
            const backgroundColor =
              // @ts-expect-error
              defaultButtonTokens.background.color[colorTheme]?.[colorLevel]?.[colorVariant];
            return `
&${colorSelector}${colorVariantSelector}${colorLevelSelector} {
${buttonColorVariables(getIconColor(colorTheme, colorVariant), backgroundColor?.fallback, backgroundColor?.hover, borderColor?.active)}
}`;
          }),
        ),
      )
      .join("\n"),
  );

export const defaultButtonStyles = createDefaultButtonStyles();
