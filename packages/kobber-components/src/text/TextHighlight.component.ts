import { CSSResultGroup, html } from "lit";
import { customElement } from "lit/decorators.js";
import KobberElement from "../base/kobber-element";
import { textHighlightStyles } from "./TextHighlight.styles";
import componentStyles from "../base/styles/component.styles";
import { textHighlightFunctions } from "./TextHighlight.functions";

@customElement(textHighlightStyles.customElementName)
export class TextHighlight extends KobberElement {
  static styles: CSSResultGroup = [componentStyles, textHighlightStyles.cssStatic];

  render() {
    this.onclick = textHighlightFunctions.onClick;
    return html`
      <style>
        ${textHighlightStyles.cssVariables(this.tokens())}
      </style>
      <span class="${textHighlightStyles.customElementName}">
        <slot></slot>
      </span>
    `;
  }
}
