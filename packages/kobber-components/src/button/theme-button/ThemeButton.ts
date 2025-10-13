import type { CSSResultGroup } from "lit";
import { property } from "lit/decorators.js";
import { customElement } from "../../base/utilities/customElementDecorator";
import { themeButtonStyles } from "./ThemeButton.styles";
import "../../text/text-label/TextLabel";
import { ButtonBase } from "../button-base/ButtonBase";
import { type ThemeButtonProps, themeButtonName } from "./ThemeButton.core";

@customElement(themeButtonName)
export class ThemeButton extends ButtonBase implements ThemeButtonProps {
  static styles: CSSResultGroup = [super.styles, themeButtonStyles];

  @property({ attribute: "color-theme" })
  colorTheme: ThemeButtonProps["colorTheme"] = "accent";

  @property({ attribute: "color-level" })
  colorLevel: ThemeButtonProps["colorLevel"] = "primary";

  @property({ attribute: "color-variant" })
  colorVariant: ThemeButtonProps["colorVariant"] = "tone-a";
}
