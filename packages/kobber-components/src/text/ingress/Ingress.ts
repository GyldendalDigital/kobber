import { CSSResultGroup, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import componentStyles from "../../base/styles/component.styles";
import { ingressName, ingressStyles } from "./Ingress.styles";

@customElement(ingressName)
export class Ingress extends LitElement {
  static styles: CSSResultGroup = [componentStyles, ingressStyles];

  render() {
    return html`
      <div class="${ingressName} ${this.className}">
        <slot></slot>
      </div>
    `;
  }
}
