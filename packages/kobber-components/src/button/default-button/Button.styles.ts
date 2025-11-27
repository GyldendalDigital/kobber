import { css, unsafeCSS } from "lit";
import type { ButtonClassNames } from "../button-base/ButtonBase.core";
import { buttonColorVariables, getIconColor } from "../button-base/ButtonBase.styles";
import {
  defaultButtonColorLevels,
  defaultButtonColors,
  defaultButtonColorVariants,
  defaultButtonTokens,
} from "./Button.core";

const createDefaultButtonStyles = () => css`
.${unsafeCSS("kobber-button" satisfies ButtonClassNames)} {
  ${colorVariants()}
}`;

const colorVariants = () =>
  unsafeCSS(
    defaultButtonColors
      .flatMap(color =>
        defaultButtonColorVariants.flatMap(colorVariant =>
          defaultButtonColorLevels.flatMap(colorLevel => {
            const colorSelector = `[data-color="${color}"]`;
            const colorVariantSelector = `[data-color-variant="${colorVariant}"]`;
            const colorLevelSelector = `[data-color-level="${colorLevel}"]`;
            const backgroundColor =
              // @ts-expect-error
              defaultButtonTokens.background.color[color]?.[colorLevel]?.[colorVariant];
            return `
  &${colorSelector}${colorVariantSelector}${colorLevelSelector} {
   ${buttonColorVariables(getIconColor(color, colorVariant, colorLevel), backgroundColor?.fallback, backgroundColor?.hover)}
  }`;
          }),
        ),
      )
      .join("\n"),
  );

export const defaultButtonStyles = createDefaultButtonStyles();
