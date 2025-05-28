import { CSSResultGroup, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { textWrapperStyles } from "./TextWrapper.styles";
import componentStyles from "../../base/styles/component.styles";
import { textWrapperClassNames, textWrapperName, TextWrapperProps } from "./TextWrapper.core";
import { customElement } from "../../base/utilities/customElementDecorator";

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
