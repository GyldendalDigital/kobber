import { CSSResultGroup, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { textWrapperName, textWrapperStyles } from "./TextWrapper.styles";
import componentStyles from "../../base/styles/component.styles";

@customElement(textWrapperName)
export class TextWrapper extends LitElement {
  static styles: CSSResultGroup = [componentStyles, textWrapperStyles];

  render() {
    return html`
      <div class="${textWrapperName} ${this.className}">
        <slot></slot>
      </div>
    `;
  }
}
