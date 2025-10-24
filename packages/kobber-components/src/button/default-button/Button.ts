import type { CSSResultGroup } from "lit";
import { property } from "lit/decorators.js";
import { customElement } from "../../base/utilities/customElementDecorator";
import { defaultButtonStyles } from "./Button.styles";
import "../../text/text-label/TextLabel";
import { ButtonBase } from "../button-base/ButtonBase";
import { type DefaultButtonProps, defaultButtonName } from "./Button.core";

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
