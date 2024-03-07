import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("kobber-button")
export class Button extends LitElement {
  static styles = css`
    :host {
    }

    button {
      /* Font */
      font-size: var(--kobber-typography-action-button-font-size, 16px);
      font-family: var(--kobber-typography-action-button-font-family, "Arial");
      text-decoration: var(--kobber-typography-action-button-font-decoration, none);
      font-weight: var(--kobber-typography-action-button-font-weight, 500);
      font-style: var(--kobber-typography-action-button-font-style, normal);
      font-stretch: var(--kobber-typography-action-button-font-stretch, normal);

      /* Static */
      border-radius: var(--kobber-component-button-border-radius, 1000px);
      color: var(--kobber-semantic-action-color-default-foreground, #000000);
      padding: var(--kobber-component-button-padding-block, 8px) var(--kobber-component-button-padding-inline, 16px);
      
      /* Dynamic based on button state */
      background-color: var(--kobber-component-button-color-background, #F4F5F6);
      border: none;
    }
  `;

  @property()
  text?: string = "";

  render() {
    return html`<button>${this.text}</button>`;
  }
}
