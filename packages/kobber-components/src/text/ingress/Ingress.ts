import { CSSResultGroup, html, LitElement } from "lit";
import componentStyles from "../../base/styles/component.styles";
import { ingressName, ingressStyles } from "./Ingress.styles";
import { customElement } from "../../base/utilities/customElementDecorator";

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
