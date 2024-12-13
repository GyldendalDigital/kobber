import { CSSResultGroup, html } from "lit";
import { customElement } from "lit/decorators.js";
import KobberElement from "../base/kobber-element";
import { textWrapperStyles } from "./TextWrapper.styles";
import componentStyles from "../base/styles/component.styles";

@customElement(textWrapperStyles.customElementName)
export class TextWrapper extends KobberElement {
  static styles: CSSResultGroup = [componentStyles, textWrapperStyles.cssStatic];

  render() {
    return html`
      <style>
        ${textWrapperStyles.cssVariables(this.tokens())}
      </style>
      <div class="${textWrapperStyles.customElementName}">
        <slot></slot>
      </div>
    `;
  }
}
