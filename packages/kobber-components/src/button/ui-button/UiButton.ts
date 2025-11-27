import type { CSSResultGroup } from "lit";
import { property } from "lit/decorators.js";
import { customElement } from "../../base/utilities/customElementDecorator";
import { type UiButtonProps, uiButtonName } from "./UiButton.core";
import { uiButtonStyles } from "./UiButton.styles";
import "../../text/text-label/TextLabel";
import { ButtonBase } from "../button-base/ButtonBase";

@customElement(uiButtonName)
export class UiButton extends ButtonBase implements UiButtonProps {
  static styles: CSSResultGroup = [super.styles, uiButtonStyles];

  @property({ attribute: "color" })
  color: UiButtonProps["color"] = "informative";

  @property({ attribute: "color-variant" })
  colorVariant: UiButtonProps["colorVariant"] = "tone-a";
}
