import { CSSResultGroup, html, LitElement } from "lit";
import componentStyles from "../../base/styles/component.styles";
import { ingressStyles } from "./Ingress.styles";
import { customElement } from "../../base/utilities/customElementDecorator";
import { ingressName, IngressProps } from "./Ingress.core";
import { property } from "lit/decorators.js";

@customElement(ingressName)
export class Ingress extends LitElement {
  static styles: CSSResultGroup = [componentStyles, ingressStyles];

  @property({ type: String })
  size: IngressProps["size"] = "medium";

  render() {
    return html`
      <div class="${ingressName} ${this.className}" data-size="${this.size}">
        <slot></slot>
      </div>
    `;
  }
}
