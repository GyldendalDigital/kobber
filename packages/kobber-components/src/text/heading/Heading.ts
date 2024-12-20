import { CSSResultGroup, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import componentStyles from "../../base/styles/component.styles";
import { headingName, headingStyles } from "./Heading.styles";

@customElement(headingName)
export class Heading extends LitElement {
  static styles: CSSResultGroup = [componentStyles, headingStyles];

  render() {
    return html`
      <h1 class="${headingName} ${this.className}">
        <slot></slot>
      </h1>
    `;
  }
}
