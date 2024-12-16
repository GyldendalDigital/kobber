import { CSSResultGroup, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import KobberElement from "../../base/kobber-element";
import { textHighlightStyles } from "./TextHighlight.styles";
import componentStyles from "../../base/styles/component.styles";
import { textHighlightFunctions, TextHighlightProps } from "./TextHighlight.functions";

@customElement(textHighlightStyles.customElementName)
export class TextHighlight extends KobberElement implements TextHighlightProps {
  static styles: CSSResultGroup = [componentStyles, textHighlightStyles.cssStatic];

  @property()
  variant: "a" | "b" = "a";

  render() {
    this.onclick = textHighlightFunctions.onClick;
    return html`
      <style>
        ${textHighlightStyles.cssVariables(this.tokens())}
      </style>
      <span
        class="${textHighlightFunctions.classNames({ variant: this.variant })}"
      >
        <slot></slot>
      </span>
    `;
  }
}
