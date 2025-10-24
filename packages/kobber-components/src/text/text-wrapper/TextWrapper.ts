import { type CSSResultGroup, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import componentStyles from "../../base/styles/component.styles";
import { customElement } from "../../base/utilities/customElementDecorator";
import { type TextWrapperProps, textWrapperClassNames, textWrapperName } from "./TextWrapper.core";
import { textWrapperStyles } from "./TextWrapper.styles";

@customElement(textWrapperName)
export class TextWrapper extends LitElement implements TextWrapperProps {
  static styles: CSSResultGroup = [componentStyles, textWrapperStyles];

  @property({ type: Boolean })
  fullWidth?: boolean | undefined;

  render() {
    return html`
      <div class="${textWrapperClassNames({ fullWidth: this.fullWidth }).join(" ")} ${this.className}">
        <slot></slot>
      </div>
    `;
  }
}
