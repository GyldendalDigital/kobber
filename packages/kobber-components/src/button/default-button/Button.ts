import type { CSSResultGroup } from "lit";
import { property } from "lit/decorators.js";
import { defaultButtonStyles } from "./Button.styles";
import { customElement } from "../../base/utilities/customElementDecorator";
import "../../text/text-label/TextLabel";
import { type DefaultButtonProps, defaultButtonName } from "./Button.core";
import { ButtonBase } from "../base-button/ButtonBase";

@customElement(defaultButtonName)
export class Button extends ButtonBase implements DefaultButtonProps {
  static styles: CSSResultGroup = [super.styles, defaultButtonStyles];

  @property({ attribute: "color-theme" })
  colorTheme: DefaultButtonProps["colorTheme"] = "brand";

  @property({ attribute: "color-level" })
  colorLevel: DefaultButtonProps["colorLevel"] = "primary";

  @property({ attribute: "color-variant" })
  colorVariant: DefaultButtonProps["colorVariant"] = "tone-a";
}
